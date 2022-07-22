import "./app-info.css";

const AppInfo = () => {
    return (
        <div className="app-info">
            <h1>A simple tool for creating dynamic widgets (SVGHMI)</h1>
            <p className="infoBlock">With this tool your can easily convert your SVG files to Siemens WinCC Unified format <i>SVGHMI</i>
            and create dynamic widgets in just a couple of steps</p>
            <ul>
                <li>First of all you need some svg file for convertion</li>
                <li>Choose or Drag'n'Drop you files into field below</li>
                <li>Push upload button</li>
                <li>Push Convert button</li>
                <li>And finaly download your ready zip archive</li>
            </ul>
            <p className="infoBlock">If you want more flexibility you can tune convertion process with some options</p>
        </div>
    )
}

export default AppInfo;