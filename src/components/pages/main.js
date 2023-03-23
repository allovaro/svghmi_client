// import { Component } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Navbar from '../navBar/navBar';
import Footer from '../footer/footer';
import AppInfo from '../app-info/app-info';
import Dropfiles from '../dropfiles/dropfiles';
import SvghmiPreferences from '../svghmi-preferences/svghmi-preferences';
import Payment from '../payment/payment';
import FaqComponent from '../faqComponent/faqComponent';

import { API_SERVER, CONFIG_DEFAULT } from './../../config/constant';

import '../app/baner.css';


function Main(props) {
    const [clientId, setClientId] = useState(uuidv4().split('-').join(''));
    const [downloadId, setDownloadId] = useState('');
    const [files, setFiles] = useState([]);
    const [optimizeConf, setOptimizeConf] = useState(CONFIG_DEFAULT);
    const [optimized, setOptimized] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
 
    const { user_id } = useSelector(state => state.auth);

    const optimizeFiles = async (conf) => {
        setFiles([]);
        setLoader(true);
        const ids = optimizeConf.optimization.bgColorId.filter((elem) => elem !== '');
        optimizeConf.optimization.bgColorId = ids;
        if (ids.length === 1 && ids[0] === '') {
            optimizeConf.optimization.connectBgColor = false;
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...optimizeConf, user: user_id }),
        };

        try {
            fetch(`${API_SERVER}/convertor/optimize/${clientId}`, options).then(res => {
                if (res.status>=200 && res.status <300) {
                  return res.json()
                }else{
                  throw new Error();
                }
            }).then(data=> {
                console.log(data);
                setOptimized(true);
                setUploaded(false);
                setDownloadId(clientId);
                setClientId(uuidv4().split('-').join(''));
                setLoader(false);
                setError(false);
            });

        } catch (Err) {
            console.error('Something went wrong...');
            console.error(Err)
            setOptimized(false);
            setUploaded(false);
            setDownloadId(clientId);
            setClientId(uuidv4().split('-').join(''));
            setLoader(false);
            setError(true);
        }
    }

    const onConfigChanged = (section, id, value) => {
        if (section === 'optimization') {
            setOptimizeConf((prev) => {
                const newConf = { ...prev };
                newConf[section][id] = value;
                return newConf;
            });
        }
        if (section === 'svgo') {
            if (id === 'removeAttrs') {
                setOptimizeConf((prev) => {
                    const newConf = { ...prev };
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
                    return { ...newConf };
                });
                return;
            }
            setOptimizeConf((prev) => {
                const newConf = { ...prev };
                if (newConf.svgo.includes(id)) {
                    newConf.svgo = newConf.svgo.filter(elem => elem !== id);
                    return newConf;
                }
                newConf.svgo = [ ...newConf.svgo, id ];
                return newConf;
            });
        }
    }
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
                files={files}
                setFiles={setFiles}
                onUploaded={() => { setOptimized(false); setUploaded(true);}}
                onClear={() => { setOptimized(false); setUploaded(false);}}
                id={clientId}
                onOptimize={optimizeFiles}
                downloadId={downloadId}
                loader={loader}
                uploaded={uploaded}
                optimized={optimized} />
            <SvghmiPreferences
                error={error}
                config={optimizeConf}
                onConfigChanged={onConfigChanged} />
            <Payment />
            <FaqComponent />
            <Footer />
        </>
    );
}

export default Main;
