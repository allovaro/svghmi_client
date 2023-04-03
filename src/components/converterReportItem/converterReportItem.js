import { useState } from 'react';
import './converterReportItem.css';

const ConverterReportItem = (props) => {
    const { addDefault,
        move,
        modify,
        delTransform,
        spaceToComma,
        polyToPath,
        connectColor,
        addFlip } = props.report;
    const { text, disabled } = props;

    const [show, setShow] = useState(props.show);

    const RightEl = ({value}) => (
        <span className='info-block'>{value}</span>
    )

    const ListItem = ({value, children}) => {
        if (value) {
            return <li key="children" className={
                value.status === 'Ok' ? 'tick-list-element' : 'cross-list-element'}>
                    {children}</li>
        }
        return null;
    }

    const Content = () => (
        <ul className="report-list">
            <ListItem value={addDefault}>
                Add default values 
                <RightEl value={addDefault ? addDefault.status : ''} />
            </ListItem>
            <ListItem value={addFlip}>
                Add Flip interface 
                <RightEl value={addFlip ? addFlip.status : ''}/>
            </ListItem>
            <ListItem value={polyToPath}>
                Poly to Path 
                <RightEl value={`${polyToPath ? polyToPath.count : ''} modified`}/>
            </ListItem>
            <ListItem value={modify}>
                Deleted href in Gradients 
                <RightEl value={`${modify ? modify.counter : ''} modified`}/>
            </ListItem>
            <ListItem value={delTransform}>
                Deleted transforms from Gradients 
                <RightEl value={`${delTransform ? delTransform.count : ''}
                of ${delTransform ? delTransform.removed : ''}`}/>
            </ListItem>
            <ListItem value={move}>
                Gradients moved to defs section 
                <RightEl value={`${move ? move.counter : ''} moved`}/>
            </ListItem>
            <ListItem value={spaceToComma}>
                Space to Comma 
                <RightEl value={`${spaceToComma ? spaceToComma.count : ''} modified`}/>
            </ListItem>
            <ListItem value={connectColor}>
                Connected Colors by id 
                <RightEl value={`${connectColor && connectColor.length ? connectColor.ids.toString() : 'not found'}`}/>
            </ListItem>
        </ul>
    )

    const onshow = () => {
        setShow((prev) => {
            setShow(!prev);
        });
    };

    return (
        <div className="report-block">
            <button 
                type="button"
                disabled={disabled}
                className="trigger"
                onClick={onshow}>
                    {text}
            </button>
            {show ? <Content /> : null}
        </div>
    )
}

export default ConverterReportItem;
