/* eslint-disable jsx-a11y/label-has-associated-control */
import CheckBoxItem from '../checkBoxItem/checkBoxItem';
import InputFieldItem from '../inputFieldItem/inputFieldItem';
import Error from '../error/error';

import './svghmi-preferences.css';

function SvghmiPreferences(props) {
  const { config, onConfigChanged, error } = props;

  const ShowColorControl = config.optimization.connectBgColor
    ? (
      <InputFieldItem
        section="optimization"
        id="bgColorId"
        header="Element's IDs (comma separated)"
        labels={config.optimization.bgColorId}
        onChange={onConfigChanged}
      />
    )
    : null;

  let removeIds = '';
  config.svgo.forEach((elem) => {
    if (elem.name === 'removeAttrs') {
      const str = elem.params.attrs;
      removeIds = str.slice(1, str.length - 1);
    }
  });

  return (
    <div className="svghmi-preferences">
      {error ? <Error text="=( Sorry, something went wrong, try another svg files..." /> : null}
      <div className="wrap-collabsible">
        <input id="collapsible1" className="toggle" type="checkbox" />
        <label htmlFor="collapsible1" className="lbl-toggle">Options</label>
        <div className="collapsible-content">
          <div className="content-inner">
            <CheckBoxItem
              id="addDefaults"
              label="Add default values into Gradients"
              section="optimization"
              checked={!!config.optimization.addDefaults}
              onClick={onConfigChanged}
            />
            <CheckBoxItem
              id="pretify"
              label="Pretify svg"
              section="optimization"
              checked={!!config.optimization.pretify}
              onClick={onConfigChanged}
            />
            <CheckBoxItem
              id="delGradientTransform"
              label="Remove <gradientTransform> attribute and recalculate x(cx), y(cy)"
              section="optimization"
              checked={!!config.optimization.delGradientTransform}
              onClick={onConfigChanged}
            />
            <CheckBoxItem
              id="spaceToComma"
              label="Change whitespaces to comma delimiter in gradientTransform attributes"
              section="optimization"
              checked={!!config.optimization.spaceToComma}
              onClick={onConfigChanged}
            />
            <CheckBoxItem
              id="delRefs"
              label="Delete href and xlink:href in gradients"
              section="optimization"
              checked={!!config.optimization.delRefs}
              onClick={onConfigChanged}
            />
            <CheckBoxItem
              id="moveGradients"
              label="Move gradients to <defs/>"
              section="optimization"
              checked={!!config.optimization.moveGradients}
              onClick={onConfigChanged}
            />
            <CheckBoxItem
              id="addFlipInterface"
              label="Add Flip interface into SVGHMI"
              section="optimization"
              checked={!!config.optimization.addFlipInterface}
              onClick={onConfigChanged}
            />
            <CheckBoxItem
              id="convertShapeToPath"
              label="Shape to Path"
              section="svgo"
              checked={config.svgo.includes('convertShapeToPath')}
              onClick={onConfigChanged}
            />
            <CheckBoxItem
              id="polyToPath"
              label="Poly to Path"
              section="optimization"
              checked={!!config.optimization.polyToPath}
              onClick={onConfigChanged}
            />
            <CheckBoxItem
              id="convertColors"
              label="convert colors from rgb() to #rrggbb, from #rrggbb to #rgb"
              section="svgo"
              checked={config.svgo.includes('convertColors')}
              onClick={onConfigChanged}
            />
            <CheckBoxItem
              id="removeDimensions"
              label="Remove Width/Height and add viewBox if it's missing "
              section="svgo"
              checked={config.svgo.includes('removeDimensions')}
              onClick={onConfigChanged}
            />
            <CheckBoxItem
              id="connectBgColor"
              label="Attach bgColorXX to BasicColor interface property"
              section="optimization"
              checked={!!config.optimization.connectBgColor}
              onClick={onConfigChanged}
            />
            {ShowColorControl}
            <InputFieldItem
              section="svgo"
              id="removeAttrs"
              header="Remove user defined Ids (comma separated)"
              labels={removeIds}
              onChange={onConfigChanged}
            />
          </div>
        </div>
      </div>
      <div className="wrap-collabsible">
        <input id="collapsible2" className="toggle" type="checkbox" />
        <label htmlFor="collapsible2" className="lbl-toggle">Options Help</label>
        <div className="collapsible-content">
          <div className="content-inner">
            <div className="option-text">
              <h4>Add default values</h4>
              <p className="paragraphDesc">
                Linear and Radial gradients can be without some attributes.
                For example
                <i>&quot;stop-color&quot; and &quot;stop-opacity&quot;</i>
                ,
                for LinearGradient can be
                <i>&quot;x1&quot;, &quot;x2&quot;, &quot;y1&quot;, &quot;y2&quot;</i>
                , for RadialGradient can be
                <i>&quot;cx&quot;, &quot;cy&quot;</i>
                .
                When this option is activated program adds default value for
                &quot;stop-color&quot; it will be black color,
                for &quot;stop-opacity&quot; is null.
              </p>
            </div>
            <div className="option-text">
              <h4 className="option-header">Remove gradientTransform</h4>
              <p className="paragraphDesc">
                Some Vector Graphics Editors can add
                <i>gradientTransform</i>
                attributes to Gradients,
                and
                <i>WinCC Unified</i>
                don&apos;t &quot;understand&quot; it and displays it as black.
                This option try to recalculate transformed coordinates to x and y.
                Sometimes it can break gradient.
              </p>
            </div>
            <div className="option-text">
              <h4 className="option-header">Space to comma delimiter</h4>
              <p className="paragraphDesc">
                This option change space separated parameters in
                <i>gradientTransform</i>
                attributes to comma separated
                because
                <i>WinCC Unified</i>
                don&apos;t &quot;understand&quot; it and breaks it.
              </p>
            </div>
            <div className="option-text">
              <h4 className="option-header">
                Delete
                <i>href</i>
                and
                <i>xlink:href</i>
                in gradients
              </h4>
              <p className="paragraphDesc">
                Some gradients can link to other gradients.
                And WinCC doesn&apos;t &quot;understand&quot; such gradients.
                and displays it as black.
                Thus these attributes must be removed to display correctly.

              </p>
            </div>
            <div className="option-text">
              <h4 className="option-header">Move Gradients to &quot;defs&quot;</h4>
              <p className="paragraphDesc">
                Moving all gradients in document to
                <i>defs</i>
                element.
              </p>
            </div>

            <div className="option-text">
              <h4 className="option-header">Add Flip interface</h4>
              <p className="paragraphDesc">
                Optionally you can add a flip property
                to mirror the widget horizontally.
              </p>
            </div>

            <div className="option-text">
              <h4 className="option-header">Convert Shape to Path</h4>
              <p className="paragraphDesc">
                Optionally you can convert all shapes like
                (rectangle, circle ellipse, etc.) to path element.
              </p>
            </div>

            <div className="option-text">
              <h4 className="option-header">Convert Poly to Path</h4>
              <p className="paragraphDesc">
                WinCC doesn&apos;t &quot;understand&quot;
                polyline and polygon, so by default it will be converted to path element.
              </p>
            </div>

            <div className="option-text">
              <h4 className="option-header">Convert colors from rgb() to #rrggbb, from #rrggbb to #rgb</h4>
              <p className="paragraphDesc">Optionally you can unify colors to one type.</p>
            </div>

            <div className="option-text">
              <h4 className="option-header">Remove Width and Height</h4>
              <p className="paragraphDesc">Remove from svg attributes width and height for better display in WinCC.</p>
            </div>

            <div className="option-text">
              <h4 className="option-header">Attach bgColor to BasicColor</h4>
              <p className="paragraphDesc">
                You can specify the ids of the elements you want to change the color
                from the WinCC poperties. By default, the application
                searches for all IDs with the name
                <i>bgColor</i>
                and binds the fill attribute of svg element to the
                property with name BasicColor. All ids that have
                <i>bgColor</i>
                in the name will be bind to BasicColor. Separated by commas,
                you can specify several ID names to which you want to assign
                color change properties.
                For example, the string
                <i>bgColor,AlternateColor,AnotherColor</i>
                will result in the creation of three property fields
                <i>BasicColor</i>
                ,
                <i>AlternateColor1</i>
                ,
                <i>AlternateColor2</i>
                . If the elements with the specified IDs are not found
                in the svg document, then the property field associated with it will not be added.
              </p>
            </div>
            <div className="option-text">
              <h4 className="option-header">Delete user defined attributes</h4>
              <p className="paragraphDesc">Optionaly you can delete from svg attributes what you want. Because some vector editors can add there custom attributes. And WinCC will throw the error if find it.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SvghmiPreferences;
