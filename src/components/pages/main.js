/* eslint-disable camelcase */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// Components
import Navbar from '../navBar/navBar';
import Header from '../header/header';
import Footer from '../footer/footer';
import AppInfo from '../app-info/app-info';
import Card from '../card/card';
import Dropzone from '../dropzone/dropzone';
import Controls from '../controls/controls';
import ConverterReport from '../converterReport/converterReport';
import SvghmiPreferences from '../svghmi-preferences/svghmi-preferences';
import Payment from '../payment/payment';
import FaqComponent from '../faqComponent/faqComponent';
// Services
import { optimize } from '../../services/converter.service';
// Constants
import { CONFIG_DEFAULT } from '../../config/constant';

const revokeId = () => uuidv4().split('-').join('');

function Main() {
  const [clientId, setClientId] = useState(revokeId());
  const [optimizeId, setOptimizeId] = useState('');
  const [downloadId, setDownloadId] = useState('');
  const [optimizeConf, setOptimizeConf] = useState(CONFIG_DEFAULT);
  const [optimized, setOptimized] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [reports, setReports] = useState([]);

  const { user_id } = useSelector((state) => state.auth);

  const onOptimize = async () => {
    setLoader(true);
    const ids = optimizeConf.optimization.bgColorId.filter((elem) => elem !== '');
    optimizeConf.optimization.bgColorId = ids;
    if (ids.length === 1 && ids[0] === '') {
      optimizeConf.optimization.connectBgColor = false;
    }

    try {
      // send optimize api request to server
      const data = await optimize(optimizeId, optimizeConf, user_id);
      if (data.status) {
        setReports(data.payload);
      }
      setOptimized(true);
      setError(false);
    } catch (err) {
      console.error(err);
      setOptimized(false);
      setError(true);
    }
    setUploaded(false);
    setDownloadId(optimizeId);
    setClientId(revokeId());
    setLoader(false);
  };

  const onUploaded = () => {
    setOptimized(false);
    setUploaded(true);
    setOptimizeId(clientId);
    setClientId(revokeId());
  };

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
          });
          newConf.svgo = newConf.svgo.filter((elem) => elem !== id);
          return { ...newConf };
        });
        return;
      }
      setOptimizeConf((prev) => {
        const newConf = { ...prev };
        if (newConf.svgo.includes(id)) {
          newConf.svgo = newConf.svgo.filter((elem) => elem !== id);
          return newConf;
        }
        newConf.svgo = [...newConf.svgo, id];
        return newConf;
      });
    }
  };
  return (
    <>
      <Navbar />
      <Header />
      <AppInfo />
      <Card>
        <Dropzone
          onUploaded={onUploaded}
          id={clientId}
        />
        <Controls
          onOptimize={onOptimize}
          downloadId={downloadId}
          loader={loader}
          uploaded={uploaded}
          optimized={optimized}
        />
        <ConverterReport reports={reports} />
      </Card>
      <SvghmiPreferences
        error={error}
        config={optimizeConf}
        onConfigChanged={onConfigChanged}
      />
      <Payment />
      <FaqComponent />
      <Footer />
    </>
  );
}

export default Main;
