import ConverterReportItem from "../converterReportItem/converterReportItem";


const ConverterReport = (props) => {
    const { reports } = props; 
    const reportsComponent = reports.map((report, ind) => {
        if (!report.status) {
            return (
                <ConverterReportItem
                    key={report.name}
                    report={{}}
                    text={`Critical Error while proccessing ${report.name}.svg`}
                    show={false}
                    disabled={true} />)
        }
        return (
            <ConverterReportItem
                key={report.name}
                report={report.reports}
                text={`Report ${report.name}.svg`}
                show={ind === 0} />)
    });
    return (<>
        {reportsComponent}
    </>);
}

export default ConverterReport;