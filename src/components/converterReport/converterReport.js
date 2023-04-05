import ConverterReportItem from '../converterReportItem/converterReportItem';

function ConverterReport({ reports }) {
  const reportsComponent = reports.map((report, ind) => {
    if (!report.status) {
      return (
        <ConverterReportItem
          key={report.name}
          report={{}}
          name={report.name}
          show={false}
          disabled
        />
      );
    }
    return (
      <ConverterReportItem
        key={report.name}
        report={report.reports}
        name={report.name}
        show={ind === 0}
      />
    );
  });
  return reportsComponent;
}

export default ConverterReport;
