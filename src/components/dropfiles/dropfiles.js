import { Dropzone, FileItem } from "@dropzone-ui/react";
import { useState } from 'react';
import { API_SERVER } from "../../config/constant";

import './dropfiles.css';

function Dropfiles(props) {
    const { id, files, setFiles, onUploaded } = props;
    const [showArrow, setShowArror] = useState(false);

    const updateFiles = (incommingFiles) => {
        // console.log(incommingFiles)
        if (incommingFiles.length === 0) {
            setShowArror(false);
            return;
        }
        setFiles(incommingFiles);
        setShowArror(true);
    };

    const onDelete = (id) => {
        const newFiles = files.filter((x) => x.id !== id);
        if (newFiles.length === 0) {
            setShowArror(false);
        }
        setFiles(newFiles);
        
    };

    const uploadFinished = (files) => {
        // console.log(`Uploaded ${files.length} files`);
        onUploaded();
        setShowArror(false);
    }

    return (
        <div className="dropfiles">
            <h3 className="dropfile-header">Upload your files here</h3>
            {showArrow ? <div className="arrow bounce"></div> : null}
            <Dropzone
                accept=".svg"
                label="Drop your svg files here"
                onChange={updateFiles}
                value={files}
                maxFiles={100}
                maxFileSize={1024000}
                url={`${API_SERVER}/upload-files/${id}`}
                onUploadFinish={uploadFinished} >
                {files.map((file) => (
                    <FileItem onDelete={onDelete} {...file} preview />
                ))}
            </Dropzone>
        </div>
    );
}

export default Dropfiles;
