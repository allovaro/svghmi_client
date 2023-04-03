/* eslint-disable react/jsx-props-no-spreading */
// Libraries
import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
// App services
import { uploadFiles } from '../../services/converter.service';
import { sendMetrics } from '../../services/ga.service';

import {
  MAX_FREE_CONVERT_FILES,
  MAX_PREMIUM_CONVERT_FILES,
  FREE_FILE_SIZE,
  PREMIUM_FILE_SIZE,
} from '../../config/constant';

import './dropzone.css';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '60px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const focusedStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
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
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

function Dropzone(props) {
  const { id, onUploaded } = props;
  const { level } = useSelector((state) => state.auth);
  const [files, setFiles] = useState([]);

  const isFree = level !== 'premium';
  const maxSize = isFree ? FREE_FILE_SIZE : PREMIUM_FILE_SIZE;
  const maxFiles = isFree ? MAX_FREE_CONVERT_FILES : MAX_PREMIUM_CONVERT_FILES;

  const onDrop = (acceptedFiles) => {
    const asyncRoutine = async () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
      setFiles(
        acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })),
      );
      try {
        await uploadFiles(id, acceptedFiles);
        sendMetrics({
          category: 'Convertion',
          action: 'upload svg files',
          label: 'upload',
          value: acceptedFiles.length,
        });
        onUploaded();
      } catch (err) {
        console.error(err);
      }
    };
    asyncRoutine();
  };

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
    accept: { 'image/svg+xml': [] },
    onDrop,
    noClick: true,
    noKeyboard: true,
    maxFiles,
    maxSize,
  });

  const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
  const isFilesMaxCount = fileRejections.length > maxFiles;
  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li className="rejected-files" key={file.path}>
      {file.path}
      {' '}
      -
      {file.size}
      {' '}
      bytes
      <ul>
        {errors.map((e) => <li key={e.code}>{e.message}</li>)}
      </ul>
    </li>
  ));

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {}),
  }), [
    isFocused,
    isDragAccept,
    isDragReject,
  ]);

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          alt={file.name}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview); }}
        />
      </div>
    </div>
  ));

  return (
    <section className="dropfiles-wrapper">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        { !isDragActive && (
          <>
            <p>Drag &apos;n&apos; drop some files here</p>
            <em>(only *.svg images will be accepted)</em>
          </>
        )}
        { isDragActive && !isDragReject && <p>Drop it like it&apos;s hot!</p> }
        { isDragReject && <p>File type not accepted, sorry :(</p>}
        { isFileTooLarge && <p className="rejected-message">File is too large! Sorry, only premium users can convert large files</p> }
        { isFilesMaxCount && <p className="rejected-message">Too much files! Sorry, only premium users can do batch convertion </p> }
        <button className="button_chooser" type="button" onClick={open}>
          Choose File
        </button>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  );
}

export default Dropzone;
