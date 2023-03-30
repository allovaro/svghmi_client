import './converterReport.css';

const ConverterReport = (props) => {
    const { addDefault,
        move,
        modify,
        delTransform,
        spaceToComma,
        polyToPath,
        connectColor,
        addFlip } = props.report;

    const RightEl = ({value}) => (
        <span className='info-block'>{value}</span>
    )

    return (
        <div className="report-block">
            <h5>Report (motor789.svg)</h5>
            <ul className="report-list">
                <li className={addDefault.status === 'Ok' ? 'tick-list-element' : 'cross-list-element'}>
                    Add default values <RightEl value={addDefault.status}/></li>
                <li className={addFlip.status === 'Ok' ? 'tick-list-element' : 'cross-list-element'}>
                    Add Flip interface <RightEl value={addFlip.status}/></li>
                <li className={polyToPath.status === 'Ok' ? 'tick-list-element' : 'cross-list-element'}>
                    Poly to Path <RightEl value={`${polyToPath.count} modified`}/></li>
                <li className={modify.status === 'Ok' ? 'tick-list-element' : 'cross-list-element'}>
                    Deleted href in Gradients <RightEl value={`${modify.count} modified`}/></li>
                <li className={delTransform.status === 'Ok' ? 'tick-list-element' : 'cross-list-element'}>
                    Deleted transforms from Gradients <RightEl value={`${delTransform.count} of ${delTransform.removed}`}/></li>
                <li className={move.status === 'Ok' ? 'tick-list-element' : 'cross-list-element'}>
                    Gradients moved to defs section <RightEl value={`${move.count} moved`}/></li>
                <li className={spaceToComma.status === 'Ok' ? 'tick-list-element' : 'cross-list-element'}>
                    Space to Comma <RightEl value={`${spaceToComma.count} modified`}/></li>
                <li className={connectColor.status === 'Ok' ? 'tick-list-element' : 'cross-list-element'}>
                    Connected Colors by id <RightEl value={`[${connectColor.ids.toString()}]`}/></li>
            </ul>
        </div>
    )
}

export default ConverterReport;
