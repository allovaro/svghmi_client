import { Dropzone, FileItem } from "@dropzone-ui/react";
import { useSelector } from 'react-redux';
import ReactGA from 'react-ga4';
import { API_SERVER } from "../../config/constant";
import Controls from "../controls/controls";

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
            console.log('onClear event generated')
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

    return (
        <div className="dropfiles">
            <h3 className="dropfile-header">Upload your files here</h3>
            <Dropzone
                accept=".svg"
                label="Drop files here"
                uploadOnDrop
                onChange={updateFiles}
                value={files}
                maxFiles={level === 'premium' ? 100 : 1}
                maxFileSize={level === 'premium' ? 2097152 : 102400}
                url={`${API_SERVER}/convertor/upload-files/${id}`}
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
        </div>
    );
}

export default Dropfiles;
