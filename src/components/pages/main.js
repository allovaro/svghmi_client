import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from '../navBar/navBar';
import Footer from '../footer/footer';
import AppInfo from '../app-info/app-info';
import Dropfiles from '../dropfiles/dropfiles';
import SvghmiPreferences from '../svghmi-preferences/svghmi-preferences';
import Payment from '../payment/payment';

import { API_SERVER, CONFIG_DEFAULT } from './../../config/constant';

import '../app/baner.css';


class Main extends Component {
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
            error: false,
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
        // remove empty bgColor ids
        const ids = this.state.optimizeConf.optimization.bgColorId.filter((elem) => elem !== '');
        const { optimizeConf } = this.state;
        optimizeConf.optimization.bgColorId = ids;
        if (ids.length === 1 && ids[0] === '') {
            optimizeConf.optimization.connectBgColor = false;
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(optimizeConf),
        };

        try {
            fetch(`${API_SERVER}/convertor/optimize/${this.state.clientId}`, options).then(res => {
                if (res.status>=200 && res.status <300) {
                  return res.json()
                }else{
                  throw new Error();
                }
            }).then(data=> {
                console.log(data)
                this.setState((prevState) => ({
                    optimized: true,
                    uploaded: false,
                    downloadId: prevState.clientId,
                    clientId: uuidv4().split('-').join(''),
                    loader: false,
                    error: false,
                }));
            });

        } catch (Err) {
            console.error('Something went wrong...');
            this.setState((prevState) => ({
                optimized: false,
                uploaded: false,
                downloadId: prevState.clientId,
                clientId: uuidv4().split('-').join(''),
                loader: false,
                error: true,
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
            if (id === 'removeAttrs') {
                this.setState((prev) => {
                    let newConf = { ...prev.optimizeConf };
                    newConf.svgo = newConf.svgo.map((elem) => {
                        if (elem.name === 'removeAttrs') {
                            return {
                                name: 'removeAttrs',
                                params: {
                                    attrs: `(${value})`,
                                },
                            };
                        }
                        return elem;
                    })
                    newConf.svgo = newConf.svgo.filter(elem => elem !== id);
                    return { optimizeConf: newConf };
                });
                return;
            }
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
            <>
                <Navbar />
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
                    onClear={() => (this.setState({ optimized: false, uploaded: false }))}
                    id={this.state.clientId}
                    onOptimize={this.optimizeFiles}
                    downloadId={this.state.downloadId}
                    loader={this.state.loader}
                    uploaded={this.state.uploaded}
                    optimized={this.state.optimized} />
                <SvghmiPreferences
                    error={this.state.error}
                    config={this.state.optimizeConf}
                    onConfigChanged={this.onConfigChanged} />
                <Payment />
                <Footer />
            </>
        );
    }
}

export default Main;
