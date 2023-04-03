/* eslint-disable react/no-unknown-property */
import './app-info.css';

function AppInfo() {
  return (
    <div className="app-info">
      <div className="row">
        <div className="column">
          <h4>Create Widgets</h4>
          <p align="justify">
            This free online widget converter
            lets you convert your svg images to the TIA Portal WinCC
            Unified dynamic widgets (SVGHMI) format. Additionally you
            can select optional effects to enhance the better result widget.
          </p>
        </div>
        <div className="column">
          <h4>Gradients</h4>
          <p align="justify">
            This widget converter will convert your shapes and objects to
            proper format for TIA Portal WinCC Unified. It will lead to the correct display
            of gradients automaticaly. You&apos;ll no longer see black areas instead
            of beautiful gradients.
          </p>
        </div>
        <div className="column">
          <h4>Dynamic Colors</h4>
          <p align="justify">
            This converter allows you to automatically specify which object&apos;s color
            is to be made changeable. Your widget will be managed
            in the same manner as the TIA Portal library component.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AppInfo;
