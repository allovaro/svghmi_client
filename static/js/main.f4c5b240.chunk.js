(this.webpackJsonpsvghmi=this.webpackJsonpsvghmi||[]).push([[0],{31:function(e,t,o){},51:function(e,t,o){},52:function(e,t,o){},53:function(e,t,o){},54:function(e,t,o){},55:function(e,t,o){},56:function(e,t,o){},57:function(e,t,o){},58:function(e,t,o){},59:function(e,t,o){},60:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o.n(n),a=o(20),s=o.n(a),c=o(4),r=o(3),l=o(5),d=o(21),h=o(22),p=o(26),j=o(25),b=o(62),m=(o(31),o(1)),u=function(){return Object(m.jsxs)("div",{className:"app-info",children:[Object(m.jsx)("h1",{children:"A simple tool for creating dynamic widgets (SVGHMI)"}),Object(m.jsxs)("p",{className:"infoBlock",children:["With this tool your can easily convert your SVG files to Siemens WinCC Unified format ",Object(m.jsx)("i",{children:"SVGHMI"})," and create dynamic widgets in just a couple of steps"]}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"First of all you need some svg file for convertion"}),Object(m.jsx)("li",{children:"Choose or Drag'n'Drop you files into field below"}),Object(m.jsx)("li",{children:"Push upload button"}),Object(m.jsx)("li",{children:"Push Convert button"}),Object(m.jsx)("li",{children:"And finaly download your ready zip archive"})]}),Object(m.jsx)("p",{className:"infoBlock",children:"If you want more flexibility you can tune convertion process with some options"})]})},f=o(24),x=o(11),v="https://server.cirillsokolov.com:2800/",O={svgo:["convertStyleToAttrs","removeUnusedNS","convertColors","removeEditorsNSData","removeDoctype","removeDimensions","removeMetadata","sortDefsChildren","sortAttrs","moveGroupAttrsToElems",{name:"removeAttrs",params:{attrs:"(sketch)"}}],optimization:{delRefs:!0,moveGradients:!0,addDefaults:!0,delGradientTransform:!0,connectBgColor:!0,polyToPath:!0,bgColorId:["bgColor"],addFlipInterface:!0}};o(51);var g=function(e){var t=e.id,o=e.files,i=e.setFiles,a=e.onUploaded,s=Object(n.useState)(!1),r=Object(f.a)(s,2),l=r[0],d=r[1],h=function(e){var t=o.filter((function(t){return t.id!==e}));0===t.length&&d(!1),i(t)};return Object(m.jsxs)("div",{className:"dropfiles",children:[Object(m.jsx)("h3",{className:"dropfile-header",children:"Upload your files here"}),l?Object(m.jsx)("div",{className:"arrow bounce"}):null,Object(m.jsx)(x.a,{accept:".svg",label:"Drop your svg files here",onChange:function(e){0!==e.length?(i(e),d(!0)):d(!1)},value:o,maxFiles:100,maxFileSize:1024e3,url:"".concat(v,"upload-files/").concat(t),onUploadFinish:function(e){a(),d(!1)},children:o.map((function(e){return Object(m.jsx)(x.b,Object(c.a)(Object(c.a)({onDelete:h},e),{},{preview:!0}))}))})]})},C=(o(52),function(e){var t=e.checked,o=e.onClick,n=e.id,i=e.section,a=e.label;return Object(m.jsxs)("div",{className:"cbx-item",children:[Object(m.jsx)("input",{className:"inp-cbx",id:n,checked:t,onChange:function(){o(i,n,!t)},type:"checkbox",style:{display:"none"}}),Object(m.jsxs)("label",{className:"cbx",htmlFor:n,children:[Object(m.jsx)("span",{children:Object(m.jsx)("svg",{width:"12px",height:"10px",viewBox:"0 0 12 10",children:Object(m.jsx)("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}),Object(m.jsx)("span",{children:a})]})]})}),y=(o(53),function(e){var t=e.labels,o=e.onChange,n=e.id,i=e.section,a=e.header;return Object(m.jsxs)("label",{htmlFor:"inp",className:"inp",children:[Object(m.jsx)("input",{type:"text",id:"inp",value:t,onChange:function(e){var t=e.target.value.replace(" ","").split(",");o(i,n,t)}}),Object(m.jsx)("span",{className:"label",children:a}),Object(m.jsx)("span",{className:"focus-bg"})]})}),N=o(23),w=o.n(N),z=(o(54),function(e){var t=e.downloadId,o=e.optimized,n=e.onOptimize,i=e.uploaded,a=e.loader,s=function(){var e=Object(l.a)(Object(r.a)().mark((function e(){var o,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(v,"download/").concat(t));case 3:return o=e.sent,e.next=6,o.blob();case 6:n=e.sent,w()(n,"svghmi.zip"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Something went wrong with downloading...");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(l.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i&&!o?n():o&&s();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=a?"loader":"btnText",h=o?"Download":"Convert",p="btnCtrl";return a&&(h=""),i||o||(p+=" btnDisabled",h="Upload before"),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("button",{className:p,onClick:c,children:Object(m.jsx)("span",{className:d,children:h})})})}),k=(o(55),function(e){return Object(m.jsx)("div",{className:"error-message",children:Object(m.jsx)("span",{className:"error-text",children:e.text})})}),S=(o(56),function(e){var t=e.config,o=e.onConfigChanged,n=e.error,i=t.optimization.connectBgColor?Object(m.jsx)(y,{section:"optimization",id:"bgColorId",header:"Element's IDs (comma separated)",labels:t.optimization.bgColorId,onChange:o}):null,a="";return t.svgo.forEach((function(e){if("removeAttrs"===e.name){var t=e.params.attrs;a=t.slice(1,t.length-1)}})),Object(m.jsxs)("div",{className:"svghmi-preferences",children:[Object(m.jsx)(z,{onOptimize:e.onOptimize,downloadId:e.downloadId,loader:e.loader,uploaded:e.uploaded,optimized:e.optimized}),n?Object(m.jsx)(k,{text:"=( Sorry, something went wrong, try another svg files..."}):null,Object(m.jsxs)("div",{className:"wrap-collabsible",children:[Object(m.jsx)("input",{id:"collapsible1",className:"toggle",type:"checkbox"}),Object(m.jsx)("label",{htmlFor:"collapsible1",className:"lbl-toggle",children:"Options"}),Object(m.jsx)("div",{className:"collapsible-content",children:Object(m.jsxs)("div",{className:"content-inner",children:[Object(m.jsx)(C,{id:"addDefaults",label:"Add default values into Gradients",section:"optimization",checked:t.optimization.addDefaults,onClick:o}),Object(m.jsx)(C,{id:"delGradientTransform",label:"Remove <gradientTransform> attribute and recalculate x(cx), y(cy)",section:"optimization",checked:t.optimization.delGradientTransform,onClick:o}),Object(m.jsx)(C,{id:"delRefs",label:"Delete href and xlink:href in gradients",section:"optimization",checked:t.optimization.delRefs,onClick:o}),Object(m.jsx)(C,{id:"moveGradients",label:"Move gradients to <defs/>",section:"optimization",checked:t.optimization.moveGradients,onClick:o}),Object(m.jsx)(C,{id:"addFlipInterface",label:"Add Flip interface into SVGHMI",section:"optimization",checked:t.optimization.addFlipInterface,onClick:o}),Object(m.jsx)(C,{id:"convertShapeToPath",label:"Shape to Path",section:"svgo",checked:t.svgo.includes("convertShapeToPath"),onClick:o}),Object(m.jsx)(C,{id:"polyToPath",label:"Poly to Path",section:"optimization",checked:t.optimization.polyToPath,onClick:o}),Object(m.jsx)(C,{id:"convertColors",label:"convert colors from rgb() to #rrggbb, from #rrggbb to #rgb",section:"svgo",checked:t.svgo.includes("convertColors"),onClick:o}),Object(m.jsx)(C,{id:"removeDimensions",label:"Remove Width/Height and add viewBox if it's missing ",section:"svgo",checked:t.svgo.includes("removeDimensions"),onClick:o}),Object(m.jsx)(C,{id:"connectBgColor",label:"Attach bgColorXX to BasicColor interface property",section:"optimization",checked:t.optimization.connectBgColor,onClick:o}),i,Object(m.jsx)(y,{section:"svgo",id:"removeAttrs",header:"Remove user defined Ids (comma separated)",labels:a,onChange:o})]})})]}),Object(m.jsxs)("div",{className:"wrap-collabsible",children:[Object(m.jsx)("input",{id:"collapsible2",className:"toggle",type:"checkbox"}),Object(m.jsx)("label",{htmlFor:"collapsible2",className:"lbl-toggle",children:"Options Help"}),Object(m.jsx)("div",{className:"collapsible-content",children:Object(m.jsxs)("div",{className:"content-inner",children:[Object(m.jsxs)("div",{className:"option-text",children:[Object(m.jsx)("h4",{children:"Add default values"}),Object(m.jsxs)("p",{className:"paragraphDesc",children:["Linear and Radial gradients can be without some attributes. For example ",Object(m.jsx)("i",{children:'"stop-color" and "stop-opacity"'}),", for LinearGradient can be ",Object(m.jsx)("i",{children:'"x1", "x2", "y1", "y2"'}),", for RadialGradient can be ",Object(m.jsx)("i",{children:'"cx", "cy"'}),'. When this option is activated program adds default value for "stop-color" it will be black color, for "stop-opacity" is null.']})]}),Object(m.jsxs)("div",{className:"option-text",children:[Object(m.jsx)("h4",{className:"option-header",children:"Remove gradientTransform"}),Object(m.jsxs)("p",{className:"paragraphDesc",children:["Some Vector Graphics Editors can add ",Object(m.jsx)("i",{children:"gradientTransform"})," attributes to Gradients, and ",Object(m.jsx)("i",{children:"WinCC Unified"}),' don\'t "understand" it and displays it as black. This option try to recalculate transformed coordinates to x and y. Sometimes it can break gradient.']})]}),Object(m.jsxs)("div",{className:"option-text",children:[Object(m.jsxs)("h4",{className:"option-header",children:["Delete ",Object(m.jsx)("i",{children:"href"})," and ",Object(m.jsx)("i",{children:"xlink:href"})," in gradients"]}),Object(m.jsx)("p",{className:"paragraphDesc",children:'Some gradients can link to other gradients. And WinCC doesn\'t "understand" such gradients. and displays it as black. Thus these attributes must be removed to display correctly.'})]}),Object(m.jsxs)("div",{className:"option-text",children:[Object(m.jsx)("h4",{className:"option-header",children:'Move Gradients to "defs"'}),Object(m.jsxs)("p",{className:"paragraphDesc",children:["Moving all gradients in document to ",Object(m.jsx)("i",{children:"defs"})," element."]})]}),Object(m.jsxs)("div",{className:"option-text",children:[Object(m.jsx)("h4",{className:"option-header",children:"Add Flip interface"}),Object(m.jsx)("p",{className:"paragraphDesc",children:"Optionally you can add a flip property to mirror the widget horizontally."})]}),Object(m.jsxs)("div",{className:"option-text",children:[Object(m.jsx)("h4",{className:"option-header",children:"Convert Shape to Path"}),Object(m.jsx)("p",{className:"paragraphDesc",children:"Optionally you can convert all shapes like (rectangle, circle ellipse, etc.) to path element."})]}),Object(m.jsxs)("div",{className:"option-text",children:[Object(m.jsx)("h4",{className:"option-header",children:"Convert Poly to Path"}),Object(m.jsx)("p",{className:"paragraphDesc",children:'WinCC doesn\'t "understand" polyline and polygon, so by default it will be converted to path element.'})]}),Object(m.jsxs)("div",{className:"option-text",children:[Object(m.jsx)("h4",{className:"option-header",children:"Convert colors from rgb() to #rrggbb, from #rrggbb to #rgb"}),Object(m.jsx)("p",{className:"paragraphDesc",children:"Optionally you can unify colors to one type."})]}),Object(m.jsxs)("div",{className:"option-text",children:[Object(m.jsx)("h4",{className:"option-header",children:"Remove Width and Height"}),Object(m.jsx)("p",{className:"paragraphDesc",children:"Remove from svg attributes width and height for better display in WinCC."})]}),Object(m.jsxs)("div",{className:"option-text",children:[Object(m.jsx)("h4",{className:"option-header",children:"Attach bgColor to BasicColor"}),Object(m.jsxs)("p",{className:"paragraphDesc",children:["You can specify the ids of the elements you want to change the color from the WinCC poperties. By default, the application searches for all IDs with the name ",Object(m.jsx)("i",{children:"bgColor"})," and binds the fill attribute of svg element to the property with name BasicColor. All ids that have ",Object(m.jsx)("i",{children:"bgColor"})," in the name will be bind to BasicColor. Separated by commas, you can specify several ID names to which you want to assign color change properties. For example, the string ",Object(m.jsx)("i",{children:"bgColor,AlternateColor,AnotherColor"})," will result in the creation of three property fields ",Object(m.jsx)("i",{children:"BasicColor"}),", ",Object(m.jsx)("i",{children:"AlternateColor1"}),", ",Object(m.jsx)("i",{children:"AlternateColor2"}),". If the elements with the specified IDs are not found in the svg document, then the property field associated with it will not be added."]})]}),Object(m.jsxs)("div",{className:"option-text",children:[Object(m.jsx)("h4",{className:"option-header",children:"Delete user defined attributes"}),Object(m.jsx)("p",{className:"paragraphDesc",children:"Optionaly you can delete from svg attributes what you want. Because some vector editors can add there custom attributes. And WinCC will throw the error if find it."})]})]})})]})]})}),I=(o(57),o(58),function(e){Object(p.a)(o,e);var t=Object(j.a)(o);function o(e){var n;return Object(d.a)(this,o),(n=t.call(this,e)).setFiles=function(e){n.setState({files:e})},n.optimizeFiles=function(){var e=Object(l.a)(Object(r.a)().mark((function e(t){var o,i,a,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({files:[],loader:!0}),o=n.state.optimizeConf.optimization.bgColorId.filter((function(e){return""!==e})),(i=n.state.optimizeConf).optimization.bgColorId=o,1===o.length&&""===o[0]&&(i.optimization.connectBgColor=!1),a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)},e.prev=6,e.next=9,fetch("".concat(v,"optimize/").concat(n.state.clientId),a);case 9:return s=e.sent,e.next=12,s.json();case 12:s.status&&n.setState((function(e){return{optimized:!0,uploaded:!1,downloadId:e.clientId,clientId:Object(b.a)().split("-").join(""),loader:!1,error:!1}})),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(6),console.error("Something went wrong..."),n.setState((function(e){return{optimized:!1,uploaded:!1,downloadId:e.clientId,clientId:Object(b.a)().split("-").join(""),loader:!1,error:!0}}));case 19:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(t){return e.apply(this,arguments)}}(),n.onConfigChanged=function(e,t,o){if("optimization"===e&&n.setState((function(n){var i=Object(c.a)({},n.optimizeConf);return i[e][t]=o,{optimizeConf:i}})),"svgo"===e){if("removeAttrs"===t)return void n.setState((function(e){var n=Object(c.a)({},e.optimizeConf);return n.svgo=n.svgo.map((function(e){return"removeAttrs"===e.name?{name:"removeAttrs",params:{attrs:"(".concat(o,")")}}:e})),n.svgo=n.svgo.filter((function(e){return e!==t})),{optimizeConf:n}}));n.setState((function(e){var o=Object(c.a)({},e.optimizeConf);return o.svgo.includes(t)?o.svgo=o.svgo.filter((function(e){return e!==t})):o.svgo.push(t),{optimizeConf:o}}))}},n.state={clientId:Object(b.a)().split("-").join(""),downloadId:"",files:[],optimizeConf:O,optimized:!1,uploaded:!1,loader:!1,error:!1},n}return Object(h.a)(o,[{key:"componentDidMount",value:function(){var e=Object(l.a)(Object(r.a)().mark((function e(){var t,o;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://geolocation-db.com/json/");case 3:return t=e.sent,e.next=6,t.json();case 6:return o=e.sent,e.next=9,fetch("".concat(v,"user_from"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Fetch error...");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("header",{className:"color-full clear-fix",children:Object(m.jsxs)("div",{className:"text_color_full block3",children:["SVG to ",Object(m.jsx)("span",{className:"svghmi",children:"SVGHMI"})]})}),Object(m.jsx)(u,{}),Object(m.jsx)(g,{files:this.state.files,setFiles:this.setFiles,onUploaded:function(){return e.setState({optimized:!1,uploaded:!0})},id:this.state.clientId}),Object(m.jsx)(S,{error:this.state.error,onOptimize:this.optimizeFiles,downloadId:this.state.downloadId,loader:this.state.loader,uploaded:this.state.uploaded,optimized:this.state.optimized,config:this.state.optimizeConf,onConfigChanged:this.onConfigChanged})]})}}]),o}(n.Component)),D=I;o(59);document.title="".concat("SVG to SVGHMI"," | Professional Engineering Tool"),s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.f4c5b240.chunk.js.map