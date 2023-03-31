import { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';

import {
    MAX_FREE_CONVERT_FILES,
    MAX_PREMIUM_CONVERT_FILES,
    FREE_FILE_SIZE,
    PREMIUM_FILE_SIZE,
    API_SERVER } from "../../config/constant";

import './dropzone.css';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


export default function Dropzone(props) {
    const { level } = useSelector(state => state.auth);
    const [files, setFiles] = useState([]);

    const isFree = level === 'premium';
    const maxSize = isFree ? FREE_FILE_SIZE : PREMIUM_FILE_SIZE;
    const maxFiles = isFree ? MAX_FREE_CONVERT_FILES : MAX_PREMIUM_CONVERT_FILES;

    const {
        getRootProps,
        getInputProps,
        fileRejections,
        open,
        isFocused,
        isDragAccept,
        isDragReject,
        isDragActive,
    } = useDropzone({
        accept: {'image/svg+xml': []},
        onDrop: acceptedFiles => {
            const data = new FormData();
            acceptedFiles.forEach((file, i) => {
                data.append(`file-${i}`, file, file.name);
            });
            fetch(`${API_SERVER}/converter/upload-files/234`, {
                method: 'POST',
                body: data,
                })
                .then((res) => res.json())
                .then((data) => console.log(data))
            acceptedFiles.forEach(file => {

                setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        });
            
        },
        noClick: true,
        noKeyboard: true,
        maxFiles: 1,
        maxSize,
    });

    const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
    const isFilesMaxCount = fileRejections.length > 0 && maxFiles;
    const fileRejectionItems = fileRejections.map(({ file, errors  }) => {
        return (
          <li className='rejected-files' key={file.path}>
               {file.path} - {file.size} bytes
               <ul>
                 {errors.map(e => <li key={e.code}>{e.message}</li>)}
              </ul>
          </li>
        ) 
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);
  
    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
        <div style={thumbInner}>
            <img
            src={file.preview}
            alt={file.name}
            style={img}
            // Revoke data uri after image is loaded
            onLoad={() => { URL.revokeObjectURL(file.preview) }}
            />
        </div>
        </div>
    ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div className='dropfiles'>
        <section className="dropfiles-wrapper">
        <div {...getRootProps({style})}>
            <input {...getInputProps()} />
            { !isDragActive && <><p>Drag 'n' drop some files here</p>
                <em>(only *.svg images will be accepted)</em></>}
            { isDragActive && !isDragReject && <p>Drop it like it's hot!</p> }
            { isDragReject && <p>File type not accepted, sorry :(</p>}
            { isFileTooLarge && <p className='rejected-message'>File is too large! Sorry, only premium users can convert large files</p> }
            <button className='button_chooser' type="button" onClick={open}>
                Choose File
            </button>
        </div>
        <aside style={thumbsContainer}>
            {thumbs}
            <ul>{fileRejectionItems}</ul>
        </aside>
        </section>
    </div>
  );
}

<Dropzone />