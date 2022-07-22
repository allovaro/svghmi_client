import { Dropzone, FileItem } from "@dropzone-ui/react";
import { API_SERVER } from "../../config/constant";

import './dropfiles.css';

function Dropfiles(props) {
    const { id, files, setFiles, onUploaded } = props;
    const updateFiles = (incommingFiles) => {
        console.log(incommingFiles)
        setFiles(incommingFiles);
    };

    const onDelete = (id) => {
        setFiles(files.filter((x) => x.id !== id));
    };

    const handleClean = (files) => {
        console.log("list cleaned", files);
    };

    const uploadFinished = (files) => {
        console.log(`Uploaded ${files.length} files`);
        onUploaded();
    }

    return (
        <div className="dropfiles">
            <h3>Upload your files here</h3>
            <Dropzone
                accept=".svg"
                label="Drop your svg files here"
                onChange={updateFiles}
                value={files}
                handleClean={handleClean}
                maxFiles={100}
                maxFileSize={1024000}
                url={`${API_SERVER}upload-files/${id}`}
                onUploadFinish={uploadFinished} >
                {files.map((file) => (
                    <FileItem onDelete={onDelete} {...file} preview />
                ))}
            </Dropzone>
        </div>
    );
}

export default Dropfiles;
