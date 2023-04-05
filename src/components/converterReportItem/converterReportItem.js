import { useState } from 'react';

import './converterReportItem.css';

function ReportTitle(props) {
  const { error, name } = props;
  return error ? (
    <p className="report-title">
      Critical Error while proccessing
      {' '}
      <span className="report-name-grey">
        <em>
          {name}
          .svg
        </em>
      </span>
    </p>
  ) : (
    <p className="report-title">
      Report for
      {' '}
      <span className="report-name-grey">
        <em>
          {name}
          .svg
        </em>
      </span>
    </p>
  );
}

function ListItem({ value, children }) {
  if (value) {
    return (
      <li
        key="children"
        className={
          value.status === 'Ok' ? 'tick-list-element' : 'cross-list-element'
        }
      >
        {children}
      </li>
    );
  }
  return null;
}

const RightElement = ({ value }) => (<span className="info-block">{value}</span>);

function ConverterReportItem({
  report, name, disabled, show,
}) {
  const {
    addDefault,
    move,
    modify,
    delTransform,
    spaceToComma,
    polyToPath,
    connectColor,
    addFlip,
  } = report;

  const [showItem, setShowItem] = useState(show);

  function Content() {
    return (
      <ul className="report-list">
        <ListItem value={addDefault}>
          Add default values
          <RightElement value={addDefault ? addDefault.status : ''} />
        </ListItem>
        <ListItem value={addFlip}>
          Add Flip interface
          <RightElement value={addFlip ? addFlip.status : ''} />
        </ListItem>
        <ListItem value={polyToPath}>
          Poly to Path
          <RightElement value={`${polyToPath ? polyToPath.count : ''} modified`} />
        </ListItem>
        <ListItem value={modify}>
          Deleted href in Gradients
          <RightElement value={`${modify ? modify.counter : ''} modified`} />
        </ListItem>
        <ListItem value={delTransform}>
          Deleted transforms from Gradients
          <RightElement value={`${delTransform ? delTransform.count : ''}
                of ${delTransform ? delTransform.removed : ''}`}
          />
        </ListItem>
        <ListItem value={move}>
          Gradients moved to defs section
          <RightElement value={`${move ? move.counter : ''} moved`} />
        </ListItem>
        <ListItem value={spaceToComma}>
          Space to Comma
          <RightElement value={`${spaceToComma ? spaceToComma.count : ''} modified`} />
        </ListItem>
        <ListItem value={connectColor}>
          Connected Colors by id
          <RightElement value={`${connectColor && connectColor.status === 'Ok'
            ? connectColor.ids.toString() : 'not found'}`}
          />
        </ListItem>
      </ul>
    );
  }

  const onshow = () => {
    setShowItem((prev) => {
      setShowItem(!prev);
    });
  };

  return (
    <div className="report-block">
      <button
        type="button"
        disabled={disabled}
        className="trigger"
        onClick={onshow}
      >
        <ReportTitle error={disabled} name={name} />
      </button>
      {showItem ? <Content /> : null}
    </div>
  );
}

export default ConverterReportItem;
