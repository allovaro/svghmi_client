import { Dropzone, FileItem } from "@dropzone-ui/react";
import { useSelector } from 'react-redux';
import ReactGA from 'react-ga4';
import { API_SERVER } from "../../config/constant";
import Controls from "../controls/controls";
import ConverterReport from "../converterReport/converterReport";

import './dropfiles.css';

function Dropfiles(props) {
    const { id, files, setFiles, onUploaded, onClear } = props;

    const { level } = useSelector(state => state.auth);

    const updateFiles = (incommingFiles) => {
        setFiles(incommingFiles);
        if (incommingFiles.length === 0) {
            onClear();
        }
    };

    const onDelete = (id) => {
        const newFiles = files.filter((x) => x.id !== id);
        if (newFiles.length === 0) {
            onClear();
        }
        ReactGA.event({
            category: "Convertion",
            action: "delete svg files",
            label: "delete",
        });
        setFiles(newFiles);
    };

    const uploadFinished = (files) => {
        ReactGA.event({
            category: "Convertion",
            action: "upload svg files",
            label: "upload",
            value: files.length,
        });
        onUploaded();
    }

    const report = {
        addDefault: {status: 'Ok'},
        addFlip: {status: 'Ok'},
        polyToPath: {status: 'Ok', count: 77},
        modify: {status: 'Ok', count: 11},
        delTransform: {status: 'Ok', count: 15, removed: 9},
        move: {status: 'Ok', count: 11},
        spaceToComma: {status: 'Ok', count: 94},
        connectColor: {status: 'Ok', ids: ['bgColor','secondColor']},
    }

    return (
        <div className="dropfiles">
            <h3 className="dropfile-header">Upload your files here</h3>
            <Dropzone
                accept=".svg"
                label="Drop your svg files here"
                uploadOnDrop
                onChange={updateFiles}
                value={files}
                maxFiles={level === 'premium' ? 100 : 1}
                maxFileSize={level === 'premium' ? 2097152 : 102400}
                url={`${API_SERVER}/converter/upload-files/${id}`}
                onUploadFinish={uploadFinished} >
                {files.map((file) => (
                    <FileItem onDelete={onDelete} {...file} preview />
                ))}
            </Dropzone>
            <Controls
                onOptimize={props.onOptimize}
                downloadId={props.downloadId}
                loader={props.loader}
                uploaded={props.uploaded}
                optimized={props.optimized} />
            <ConverterReport report={report}/>
        </div>
    );
}

export default Dropfiles;
