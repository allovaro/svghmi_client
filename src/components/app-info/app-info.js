import "./app-info.css";

const AppInfo = () => {
    return (
        <div className="app-info">
            <div className="row">
                <div className="column">
                    <h4>Create Widgets</h4>
                    <p align="justify">This free online widget converter 
                    lets you convert your svg images to the TIA Portal WinCC
                    Unified dynamic widgets (SVGHMI) format. Additionally you
                    can select optional effects to enhance the better result widget.
                    </p></div>
                <div className="column">
                    <h4>Gradients</h4>
                    <p align="justify">
                    This widget converter will convert your shapes and objects to
                    proper format for TIA Portal WinCC Unified. It will lead to the correct display
                    of gradients automaticaly. You'll no longer see black areas instead
                    of beautiful gradients.
                    </p>
                </div>
                <div className="column">
                    <h4>Dynamic Colors</h4>
                    <p align="justify">
                    This converter allows you to automatically specify which object's color
                    is to be made changeable. Your widget will be managed
                    in the same way as the TIA Portal library component.
                    </p>
                </div>
            </div> 
            {/* <h1>A simple tool for creating dynamic widgets (SVGHMI)</h1>
            <p className="infoBlock">With this tool your can easily convert your SVG files to Siemens WinCC Unified format <i>SVGHMI</i> and create dynamic widgets in just a couple of steps</p>
            <ul>
                <li>First of all you need some svg file for convertion</li>
                <li>Choose or Drag'n'Drop you files into field below</li>
                <li>Push upload button</li>
                <li>Push Convert button</li>
                <li>And finaly download your ready zip archive</li>
            </ul>
            <p className="infoBlock">If you want more flexibility you can tune convertion process with some options</p> */}
        </div>
    )
}

export default AppInfo;