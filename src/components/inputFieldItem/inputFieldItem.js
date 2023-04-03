import './inputFieldItem.css';

function InputFieldItem(props) {
  const {
    labels, onChange, id, section, header,
  } = props;

  const onIdChange = (e) => {
    const value = e.target.value.replace(' ', '').split(',');
    onChange(section, id, value);
  };

  return (
    <label htmlFor="inp" className="inp">
      <input type="text" id="inp" value={labels} onChange={onIdChange} />
      <span className="label">{header}</span>
      <span className="focus-bg" />
    </label>
  );
}

export default InputFieldItem;
