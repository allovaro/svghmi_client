import './checkBoxItem.css';

const CheckBoxItem = (props) => {
    const { checked, onClick, id, section, label } = props;

    const onCheck = () => {
        onClick(section, id, !checked);
    }

    return (
        <div className="item">
            <div className="checkbox-rect">
                <input type="checkbox" id={id} name="check" checked={checked} onChange={onCheck} />
                <label htmlFor={id}>{label}</label>
            </div>
        </div>
    )
}

export default CheckBoxItem;