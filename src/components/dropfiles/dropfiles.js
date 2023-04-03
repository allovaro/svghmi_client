import { Dropzone, FileItem } from "@dropzone-ui/react";
import { useSelector } from 'react-redux';
import { sendMetrics } from '../../services/ga.service';
import { API_SERVER } from "../../config/constant";
import Controls from "../controls/controls";
import ConverterReport from "../converterReportItem/converterReportItem";

import {
    MAX_FREE_CONVERT_FILES,
    MAX_PREMIUM_CONVERT_FILES,
    FREE_FILE_SIZE,
    PREMIUM_FILE_SIZE } from "../../config/constant";

import './dropfiles.css';

function Dropfiles(props) {
    const { id, files, setFiles, onUploaded, onClear, reports } = props;

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
        sendMetrics({
            category: "Convertion",
            action: "delete svg files",
            label: "delete",
        });
        setFiles(newFiles);
    };

    const uploadFinished = (files) => {
        sendMetrics({
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
                label="Drop your svg files here"
                uploadOnDrop
                onChange={updateFiles}
                value={files}
                maxFiles={level === 'premium' ? MAX_PREMIUM_CONVERT_FILES : MAX_FREE_CONVERT_FILES}
                maxFileSize={level === 'premium' ? PREMIUM_FILE_SIZE : FREE_FILE_SIZE}
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
                {reports.map((report, ind) => {
                    if (!report.status) {
                        return (
                            <ConverterReport
                                report={{}}
                                text={`Critical Error while proccessing ${report.name}.svg`}
                                show={false}
                                disabled={true}
                        />)
                    }
                    return (
                        <ConverterReport report={report.reports} text={`Report ${report.name}.svg`} show={ind === 0}
                    />)
                })}
        </div>
    );
}

export default Dropfiles;
