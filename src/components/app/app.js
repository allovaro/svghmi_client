import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppInfo from '../app-info/app-info';
import Dropfiles from '../dropfiles/dropfiles';
import SvghmiPreferences from '../svghmi-preferences/svghmi-preferences';
import { API_SERVER, CONFIG_DEFAULT } from './../../config/constant';

import './app.css';
import './baner.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientId: uuidv4().split('-').join(''),
            downloadId: '',
            files: [],
            optimizeConf: CONFIG_DEFAULT,
            optimized: false,
            uploaded: false,
            loader: false,
        }
    }

    async componentDidMount() {
        try {
            const res = await fetch('https://geolocation-db.com/json/');
            const data = await res.json();
            await fetch(`${API_SERVER}user_from`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
        } catch (Err) {
            console.log('Fetch error...');
        }

    }

    setFiles = (files) => {
        this.setState({ files });
    }

    optimizeFiles = async (conf) => {
        this.setState({
            files: [],
            loader: true,
        });
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.optimizeConf),
        };
        const response = await fetch(`${API_SERVER}optimize/${this.state.clientId}`, options);
        await response.json()
        if (response.status) {
            this.setState((prevState) => ({
                optimized: true,
                uploaded: false,
                downloadId: prevState.clientId,
                clientId: uuidv4().split('-').join(''),
                loader: false,
            }));
        }
    }

    onConfigChanged = (section, id, value) => {
        if (section === 'optimization') {
            this.setState((prev) => {
                const newConf = { ...prev.optimizeConf };
                newConf[section][id] = value;
                return { optimizeConf: newConf };
            });
        }
        if (section === 'svgo') {
            this.setState((prev) => {
                let newConf = { ...prev.optimizeConf };
                if (newConf.svgo.includes(id)) {
                    newConf.svgo = newConf.svgo.filter(elem => elem !== id);
                } else {
                    newConf.svgo.push(id);
                }
                return { optimizeConf: newConf };
            });
        }
    }

    render() {
        return (
            <div className="app">
                <header className="color-full clear-fix">
                    <div className="text_color_full block3">
                        SVG to <span className='svghmi'>SVGHMI</span>
                    </div>
                </header>
                <AppInfo />
                <Dropfiles
                    files={this.state.files}
                    setFiles={this.setFiles}
                    onUploaded={() => (this.setState({ optimized: false, uploaded: true }))}
                    id={this.state.clientId} />

                <SvghmiPreferences
                    onOptimize={this.optimizeFiles}
                    downloadId={this.state.downloadId}
                    loader={this.state.loader}
                    uploaded={this.state.uploaded}
                    optimized={this.state.optimized}
                    config={this.state.optimizeConf}
                    onConfigChanged={this.onConfigChanged} />

            </div>
        );
    }
}

export default App;
