define(["./my-app.js"],function(_myApp){"use strict";function _templateObject_5d802d0076cb11e8861a3d98ee478eb9(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles\">\n        :host {\n          display: block;\n\n          padding: 10px;\n        }\n      </style>\n\n      <div class=\"card\">\n        <h1>About the Demo</h1>\n        <p>This demo is a Polymer 3.0 app based on the 3.0 version of the starter kit.</p>\n        <p>Although this uses the Polymer 3.0 version of plastic-map-info, the package includes a\n        Polymer 2.x version of the element also.  The API and use is identical. Just install with\n        Bower to use in a Polymer 2.x project, or with npm or yarn for a 3.x project.</p>\n        <h2>Builds and Differential Serving</h2>\n        <p>The demo has 3 builds:</p><ul><li>esm-bundled</li><li>es6-bundled</li><li>es5-bundled</li></ul>\n        <p>Since we are serving on a static server, Github's project page function, <a href=\"https://github.com/mlisook/plastic-diff-redirect\">\n        plastic-diff-redirect</a> is used to redirect to the best build for your browser based on the same\n        selection mechanism in prpl-server-node.</p>\n        <h2>Polymer 3 and the &lt;google-map&gt; Element</h2>\n        <p>At the time this demo is being published (June 2018), GoogleWebComponents had not been updated \n        to Polymer 3.  So, for this demo, in the examples using the &lt;google-map&gt; element, I'm using \n        <a href=\"https://www.npmjs.com/package/@atomiko/google-apis-holdout\">@atomiko/google-apis-holdout</a> and \n        <a href=\"https://www.npmjs.com/package/@atomiko/google-map-holdout\">@atomiko/google-map-holdout</a>. These\n        are straight modulizer ports of the original packages.</p>\n        <h2>Other Map Elements</h2>\n        <p>&lt;plastic-map-info&gt; should work with other elements providing a google map (e.g. good-map).\n        If you have any difficulty with that please file an issue in the repo and I'll assist.</p>\n      </div>\n    "]);_templateObject_5d802d0076cb11e8861a3d98ee478eb9=function(){return data};return data}var MyViewAbout=function(_PolymerElement){babelHelpers.inherits(MyViewAbout,_PolymerElement);function MyViewAbout(){babelHelpers.classCallCheck(this,MyViewAbout);return babelHelpers.possibleConstructorReturn(this,(MyViewAbout.__proto__||Object.getPrototypeOf(MyViewAbout)).apply(this,arguments))}babelHelpers.createClass(MyViewAbout,null,[{key:"template",get:function get(){return(0,_myApp.html)(_templateObject_5d802d0076cb11e8861a3d98ee478eb9())}}]);return MyViewAbout}(_myApp.PolymerElement);window.customElements.define("my-view-about",MyViewAbout)});