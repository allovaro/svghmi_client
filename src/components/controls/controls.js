import { sendMetrics } from '../../services/ga.service';
import { API_SERVER } from "../../config/constant";

import './controls.css';

const Controls = (props) => {
    const { downloadId, optimized, onOptimize, uploaded, loader } = props;
 
    // Create link and download zip file
    const onDownload = async () => {
        try {
            const element = document.createElement("a");
            element.href = `${API_SERVER}/converter/download/${downloadId}`;
            element.download = 'svghmi.zip'
            document.body.appendChild(element); // Required for this to work in FireFox
            element.click(); // simulate link click
        } catch (Err) {
            console.error('Something went wrong with downloading...');
        }
    }

    const onClick = async () => {
        if (uploaded && !optimized) {
            onOptimize();
            sendMetrics({
                category: "Convertion",
                action: "optimize svg files",
                label: "optimize",
            });
        } else if (optimized) {
            onDownload();
            sendMetrics({
                category: "Convertion",
                action: "download svghmi.zip",
                label: "download",
            });
        }
    }

    let spanClass = loader ? 'loader' : 'btnText';
    let spanText = optimized ? 'Download' : 'Convert';
    let btnClass = 'btnCtrl';
    if (loader) {
        spanText = '';
    }
    if (!uploaded && !optimized) {
        btnClass += ' btnDisabled';
        spanText = 'Upload before';
    }

    return (
        <>
            <button 
                className={btnClass}
                onClick={onClick}>
                    <span className={spanClass}>{spanText}</span>
            </button>
        </>
    );
}

export default Controls;
