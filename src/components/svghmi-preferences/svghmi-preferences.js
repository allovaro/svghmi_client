import CheckBoxItem from "../checkBoxItem/checkBoxItem";
import Controls from "../controls/controls";
import Error from "../error/error";

import './svghmi-preferences.css';

const SvghmiPreferences = (props) => {
    const { config, onConfigChanged, error } = props;

    return (
        <div className='svghmi-preferences'>
            <Controls
                onOptimize={props.onOptimize}
                downloadId={props.downloadId}
                loader={props.loader}
                uploaded={props.uploaded}
                optimized={props.optimized} />
            {error ? <Error text="=( Sorry, something went wrong, try another svg files..."/>: null}
            <div className="wrap-collabsible">
                <input id="collapsible1" className="toggle" type="checkbox" />
                <label htmlFor="collapsible1" className="lbl-toggle">Options</label>
                <div className="collapsible-content">
                    <div className="content-inner">
                        <CheckBoxItem
                            id="addDefaults"
                            label="Add default values into Gradients"
                            section="optimization"
                            checked={config.optimization.addDefaults}
                            onClick={onConfigChanged} />
                        <CheckBoxItem
                            id="delGradientTransform"
                            label="Remove <gradientTransform> attribute and recalculate x(cx), y(cy)"
                            section="optimization"
                            checked={config.optimization.delGradientTransform}
                            onClick={onConfigChanged} />
                        <CheckBoxItem
                            id="delRefs"
                            label="Delete href and xlink:href in gradients"
                            section="optimization"
                            checked={config.optimization.delRefs}
                            onClick={onConfigChanged} />
                        <CheckBoxItem
                            id="moveGradients"
                            label="Move gradients to <defs/>"
                            section="optimization"
                            checked={config.optimization.moveGradients}
                            onClick={onConfigChanged} />
                        <CheckBoxItem
                            id="addFlipInterface"
                            label="Add Flip interface into SVGHMI"
                            section="optimization"
                            checked={config.optimization.addFlipInterface}
                            onClick={onConfigChanged} />
                        <CheckBoxItem
                            id="convertShapeToPath"
                            label="Convert Shapes to Path"
                            section="svgo"
                            checked={config.svgo.includes("convertShapeToPath")}
                            onClick={onConfigChanged} />
                        <CheckBoxItem
                            id="convertColors"
                            label="convert colors from rgb() to #rrggbb, from #rrggbb to #rgb"
                            section="svgo"
                            checked={config.svgo.includes("convertColors")}
                            onClick={onConfigChanged} />
                        <CheckBoxItem
                            id="connectBgColor"
                            label="Attach bgColorXX to BasicColor interface property"
                            section="optimization"
                            checked={config.optimization.connectBgColor}
                            onClick={onConfigChanged} />
                        <CheckBoxItem
                            id="removeDimensions"
                            label="Remove Width/Height and add viewBox if it's missing "
                            section="svgo"
                            checked={config.svgo.includes("removeDimensions")}
                            onClick={onConfigChanged} />
                    </div>
                </div>
            </div>
            <div className="wrap-collabsible">
                <input id="collapsible2" className="toggle" type="checkbox" />
                <label htmlFor="collapsible2" className="lbl-toggle">Options Help</label>
                <div className="collapsible-content">
                    <div className="content-inner">
                        <h4>Add default values</h4>
                        <p className="paragraphDesc">Linear and Radial gradients can be without some attributes.
                            For example <i>"stop-color" and "stop-opacity"</i>,
                            for LinearGradient can be <i>"x1", "x2", "y1", "y2"</i>, for RadialGradient can be <i>"cx", "cy"</i>.
                            When this option is activated program adds default value for "stop-color" it will be black color, 
                            for "stop-opacity" is null.
                        </p>
                        <h4>Remove gradientTransform</h4>
                        <p className="paragraphDesc">Some Vector Graphics Editors can add <i>gradientTransform</i> attributes to Gradients,
                        and <i>WinCC Unified</i> don't understand it and displays it as black.
                        This option try to recalculate transformed coordinates to x and y. Sometimes it can break gradient.</p>
                        <h4>Delete <i>href</i> and <i>xlink:href</i> in gradients</h4>
                        <p className="paragraphDesc">description</p>
                        <h4>Move Gradients to "defs"</h4>
                        <p className="paragraphDesc">description</p>
                        <h4>Add Flip interface</h4>
                        <h4>Convert all Shapes to Path</h4>
                        <p className="paragraphDesc">description</p>
                        <h4>Convert colors from rgb() to #rrggbb, from #rrggbb to #rgb</h4>
                        <p className="paragraphDesc">description</p>
                        <h4>Attach bgColor to BasicColor</h4>
                        <p className="paragraphDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <h4>delete user defined attributes</h4>
                        <p className="paragraphDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                        <h4>remove custom attributes like "stroke-dasharray"</h4>
                        <p className="paragraphDesc">description</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SvghmiPreferences;
