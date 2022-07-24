import './checkBoxItem.css';

const CheckBoxItem = (props) => {
    const { checked, onClick, id, section, label } = props;

    const onCheck = () => {
        onClick(section, id, !checked);
    }

    return (
        <div className="cbx-item">
            <input
                className="inp-cbx"
                id={id}
                checked={checked}
                onChange={onCheck}
                type="checkbox"
                style={{display: "none"}} />
            <label className="cbx"htmlFor={id}>
                <span>
                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                </span>
                <span>{label}</span>
            </label>
        </div>
    )
}

export default CheckBoxItem;