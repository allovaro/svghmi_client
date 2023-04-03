import ConverterReportItem from '../converterReportItem/converterReportItem';

function ConverterReport(props) {
  const { reports } = props;
  const reportsComponent = reports.map((report, ind) => {
    if (!report.status) {
      return (
        <ConverterReportItem
          key={report.name}
          report={{}}
          text={`Critical Error while proccessing ${report.name}.svg`}
          show={false}
          disabled
        />
      );
    }
    return (
      <ConverterReportItem
        key={report.name}
        report={report.reports}
        text={`Report ${report.name}.svg`}
        show={ind === 0}
      />
    );
  });
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { reportsComponent }
    </>
  );
}

export default ConverterReport;
