import './colorControl.css';

const ColorControl = (props) => {
    const { labels, onChange } = props;

    const onIdChange = (e) => {
        const value = e.target.value.replace(' ', '').split(',');
        onChange('optimization', 'bgColorId', value);
    }

    return (
        <label htmlFor="inp" className="inp">
            <input type="text" id="inp" value={labels} onChange={onIdChange} />
                <span className="label">Element's IDs</span>
                <span className="focus-bg"></span>
        </label>
    )
}

export default ColorControl;