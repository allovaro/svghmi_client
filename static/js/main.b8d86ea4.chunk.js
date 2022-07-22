(this.webpackJsonpsvghmi=this.webpackJsonpsvghmi||[]).push([[0],{30:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){},52:function(e,t,i){},53:function(e,t,i){},54:function(e,t,i){},55:function(e,t,i){},56:function(e,t,i){},57:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),c=i(20),a=i.n(c),s=i(5),r=i(3),l=i(4),d=i(21),u=i(22),p=i(25),h=i(24),j=i(59),b=(i(30),i(1)),m=function(){return Object(b.jsxs)("div",{className:"app-info",children:[Object(b.jsx)("h1",{children:"A simple tool for creating dynamic widgets (SVGHMI)"}),Object(b.jsxs)("p",{className:"infoBlock",children:["With this tool your can easily convert your SVG files to Siemens WinCC Unified format ",Object(b.jsx)("i",{children:"SVGHMI"}),"and create dynamic widgets in just a couple of steps"]}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"First of all you need some svg file for convertion"}),Object(b.jsx)("li",{children:"Choose or Drag'n'Drop you files into field below"}),Object(b.jsx)("li",{children:"Push upload button"}),Object(b.jsx)("li",{children:"Push Convert button"}),Object(b.jsx)("li",{children:"And finaly download your ready zip archive"})]}),Object(b.jsx)("p",{className:"infoBlock",children:"If you want more flexibility you can tune convertion process with some options"})]})},f=i(11),x="https://server.cirillsokolov.com:2800/",O={svgo:["convertStyleToAttrs","removeUnusedNS","convertColors","removeEditorsNSData","removeDoctype","removeDimensions","removeMetadata","sortDefsChildren","sortAttrs","moveGroupAttrsToElems",{name:"removeAttrs",params:{attrs:"(sketch|stroke-dasharray)"}}],optimization:{delRefs:!0,moveGradients:!0,addDefaults:!0,delGradientTransform:!0,connectBgColor:!0,bgColorId:"bgColor",addFlipInterface:!0}};i(50);var v=function(e){var t=e.id,i=e.files,n=e.setFiles,o=e.onUploaded,c=function(e){n(i.filter((function(t){return t.id!==e})))};return Object(b.jsxs)("div",{className:"dropfiles",children:[Object(b.jsx)("h3",{children:"Upload your files here"}),Object(b.jsx)(f.a,{accept:".svg",label:"Drop your svg files here",onChange:function(e){console.log(e),n(e)},value:i,handleClean:function(e){console.log("list cleaned",e)},maxFiles:100,maxFileSize:1024e3,url:"".concat(x,"upload-files/").concat(t),onUploadFinish:function(e){console.log("Uploaded ".concat(e.length," files")),o()},children:i.map((function(e){return Object(b.jsx)(f.b,Object(s.a)(Object(s.a)({onDelete:c},e),{},{preview:!0}))}))})]})},g=(i(51),function(e){var t=e.checked,i=e.onClick,n=e.id,o=e.section,c=e.label;return Object(b.jsx)("div",{className:"item",children:Object(b.jsxs)("div",{className:"checkbox-rect",children:[Object(b.jsx)("input",{type:"checkbox",id:n,name:"check",checked:t,onChange:function(){i(o,n,!t)}}),Object(b.jsx)("label",{htmlFor:n,children:c})]})})}),C=i(23),k=i.n(C),y=(i(52),function(e){var t=e.downloadId,i=e.optimized,n=e.onOptimize,o=e.uploaded,c=e.loader,a=function(){var e=Object(l.a)(Object(r.a)().mark((function e(){var i,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"download/").concat(t));case 2:return i=e.sent,e.next=5,i.blob();case 5:n=e.sent,k()(n,"svghmi.zip");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o&&!i?n():i&&a();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=c?"loader":"btnText",u=i?"Download":"Convert",p="btnCtrl";return c&&(u=""),o||i||(p+=" btnDisabled",u="Upload before"),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{className:p,onClick:s,children:Object(b.jsx)("span",{className:d,children:u})})})}),z=(i(53),function(e){var t=e.config,i=e.onConfigChanged;return Object(b.jsxs)("div",{className:"svghmi-preferences",children:[Object(b.jsx)(y,{onOptimize:e.onOptimize,downloadId:e.downloadId,loader:e.loader,uploaded:e.uploaded,optimized:e.optimized}),Object(b.jsxs)("div",{className:"wrap-collabsible",children:[Object(b.jsx)("input",{id:"collapsible1",className:"toggle",type:"checkbox"}),Object(b.jsx)("label",{htmlFor:"collapsible1",className:"lbl-toggle",children:"Options"}),Object(b.jsx)("div",{className:"collapsible-content",children:Object(b.jsxs)("div",{className:"content-inner",children:[Object(b.jsx)(g,{id:"addDefaults",label:"Add default values into Gradients",section:"optimization",checked:t.optimization.addDefaults,onClick:i}),Object(b.jsx)(g,{id:"delGradientTransform",label:"Remove <gradientTransform> attribute and recalculate x(cx), y(cy)",section:"optimization",checked:t.optimization.delGradientTransform,onClick:i}),Object(b.jsx)(g,{id:"delRefs",label:"Delete href and xlink:href in gradients",section:"optimization",checked:t.optimization.delRefs,onClick:i}),Object(b.jsx)(g,{id:"moveGradients",label:"Move gradients to <defs/>",section:"optimization",checked:t.optimization.moveGradients,onClick:i}),Object(b.jsx)(g,{id:"addFlipInterface",label:"Add Flip interface into SVGHMI",section:"optimization",checked:t.optimization.addFlipInterface,onClick:i}),Object(b.jsx)(g,{id:"convertShapeToPath",label:"Convert Shapes to Path",section:"svgo",checked:t.svgo.includes("convertShapeToPath"),onClick:i}),Object(b.jsx)(g,{id:"convertColors",label:"convert colors from rgb() to #rrggbb, from #rrggbb to #rgb",section:"svgo",checked:t.svgo.includes("convertColors"),onClick:i}),Object(b.jsx)(g,{id:"connectBgColor",label:"Attach bgColorXX to BasicColor interface property",section:"optimization",checked:t.optimization.connectBgColor,onClick:i}),Object(b.jsx)(g,{id:"removeDimensions",label:"Remove Width/Height and add viewBox if it's missing ",section:"svgo",checked:t.svgo.includes("removeDimensions"),onClick:i})]})})]}),Object(b.jsxs)("div",{className:"wrap-collabsible",children:[Object(b.jsx)("input",{id:"collapsible2",className:"toggle",type:"checkbox"}),Object(b.jsx)("label",{htmlFor:"collapsible2",className:"lbl-toggle",children:"Options Help"}),Object(b.jsx)("div",{className:"collapsible-content",children:Object(b.jsxs)("div",{className:"content-inner",children:[Object(b.jsx)("h4",{children:"Add default values"}),Object(b.jsxs)("p",{className:"paragraphDesc",children:["Linear and Radial gradients can be without some attributes. For example ",Object(b.jsx)("i",{children:'"stop-color" and "stop-opacity"'}),", for LinearGradient can be ",Object(b.jsx)("i",{children:'"x1", "x2", "y1", "y2"'}),", for RadialGradient can be ",Object(b.jsx)("i",{children:'"cx", "cy"'}),'. When this option is activated program adds default value for "stop-color" it will be black color, for "stop-opacity" is null.']}),Object(b.jsx)("h4",{children:"Remove gradientTransform"}),Object(b.jsxs)("p",{className:"paragraphDesc",children:["Some Vector Graphics Editors can add ",Object(b.jsx)("i",{children:"gradientTransform"})," attributes to Gradients, and ",Object(b.jsx)("i",{children:"WinCC Unified"})," don't understand it and displays it as black. This option try to recalculate transformed coordinates to x and y. Sometimes it can break gradient."]}),Object(b.jsxs)("h4",{children:["Delete ",Object(b.jsx)("i",{children:"href"})," and ",Object(b.jsx)("i",{children:"xlink:href"})," in gradients"]}),Object(b.jsx)("p",{className:"paragraphDesc",children:"description"}),Object(b.jsx)("h4",{children:'Move Gradients to "defs"'}),Object(b.jsx)("p",{className:"paragraphDesc",children:"description"}),Object(b.jsx)("h4",{children:"Add Flip interface"}),Object(b.jsx)("h4",{children:"Convert all Shapes to Path"}),Object(b.jsx)("p",{className:"paragraphDesc",children:"description"}),Object(b.jsx)("h4",{children:"Convert colors from rgb() to #rrggbb, from #rrggbb to #rgb"}),Object(b.jsx)("p",{className:"paragraphDesc",children:"description"}),Object(b.jsx)("h4",{children:"Attach bgColor to BasicColor"}),Object(b.jsx)("p",{className:"paragraphDesc",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}),Object(b.jsx)("h4",{children:"delete user defined attributes"}),Object(b.jsx)("p",{className:"paragraphDesc",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}),Object(b.jsx)("h4",{children:'remove custom attributes like "stroke-dasharray"'}),Object(b.jsx)("p",{className:"paragraphDesc",children:"description"})]})})]})]})}),N=(i(54),i(55),function(e){Object(p.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(d.a)(this,i),(n=t.call(this,e)).setFiles=function(e){n.setState({files:e})},n.optimizeFiles=function(){var e=Object(l.a)(Object(r.a)().mark((function e(t){var i,o;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({files:[],loader:!0}),i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.state.optimizeConf)},e.next=4,fetch("".concat(x,"optimize/").concat(n.state.clientId),i);case 4:return o=e.sent,e.next=7,o.json();case 7:o.status&&n.setState((function(e){return{optimized:!0,uploaded:!1,downloadId:e.clientId,clientId:Object(j.a)().split("-").join(""),loader:!1}}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onConfigChanged=function(e,t,i){"optimization"===e&&n.setState((function(n){var o=Object(s.a)({},n.optimizeConf);return o[e][t]=i,{optimizeConf:o}})),"svgo"===e&&n.setState((function(e){var i=Object(s.a)({},e.optimizeConf);return i.svgo.includes(t)?i.svgo=i.svgo.filter((function(e){return e!==t})):i.svgo.push(t),{optimizeConf:i}}))},n.state={clientId:Object(j.a)().split("-").join(""),downloadId:"",files:[],optimizeConf:O,optimized:!1,uploaded:!1,loader:!1},n}return Object(u.a)(i,[{key:"componentDidMount",value:function(){var e=Object(l.a)(Object(r.a)().mark((function e(){var t,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://geolocation-db.com/json/");case 3:return t=e.sent,e.next=6,t.json();case 6:return i=e.sent,e.next=9,fetch("".concat(x,"user_from"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Fetch error...");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)("header",{className:"color-full clear-fix",children:Object(b.jsxs)("div",{className:"text_color_full block3",children:["SVG to ",Object(b.jsx)("span",{className:"svghmi",children:"SVGHMI"})]})}),Object(b.jsx)(m,{}),Object(b.jsx)(v,{files:this.state.files,setFiles:this.setFiles,onUploaded:function(){return e.setState({optimized:!1,uploaded:!0})},id:this.state.clientId}),Object(b.jsx)(z,{onOptimize:this.optimizeFiles,downloadId:this.state.downloadId,loader:this.state.loader,uploaded:this.state.uploaded,optimized:this.state.optimized,config:this.state.optimizeConf,onConfigChanged:this.onConfigChanged})]})}}]),i}(n.Component)),w=N;i(56);document.title="".concat("SVG to SVGHMI"," | Professional Engineering Tool"),a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.b8d86ea4.chunk.js.map