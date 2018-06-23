define(["./my-app.js"],function(_myApp){"use strict";function _templateObject_5d72bf8076cb11e8861a3d98ee478eb9(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles iron-flex iron-flex-alignment\">\n        :host {\n          display: block;\n\n          padding: 10px;\n        }\n        google-map {\n        width: 500px;\n        height: 400px;\n      }\n      </style>\n     \n      <google-map latitude=\"40.7555\" longitude=\"-73.985\" on-google-map-ready=\"_mapReady\" fit-to-markers api-key=\"AIzaSyBmsetVvB1KlWoSbEXYQg1leRZO1PVPm_Q\">\n      <template is=\"dom-repeat\" items=\"[[meetings]]\" as=\"meeting\">\n        <google-map-marker slot=\"markers\" click-events latitude=\"[[meeting.latLng.lat]]\" longitude=\"[[meeting.latLng.lng]]\" on-google-map-marker-click=\"_markerClick\">\n        </google-map-marker>\n      </template>\n      <plastic-map-info id=\"myinfocard\" fade-in>\n        <div class=\"layout vertical\">\n          <div style=\"width:100%; background-color: blue; font-weight: bold; color: white; padding: 5px 5px 5px 9px;\">[[meeting.place]]</div>\n          <div class=\"layout vertical\" style=\"border: 2px solid blue; padding: 5px 5px 5px 9px;\">\n            <template is=\"dom-repeat\" items=\"[[meeting.schedule]]\" as=\"sch\">\n              <div class=\"layout horizontal\">\n                <paper-icon-button id=\"[[sch.meetingId]]\" icon=\"social:person-add\" on-tap=\"_attending\"></paper-icon-button>\n                <span>[[sch.meetingTime]]</span>\n              </div>\n            </template>\n          </div>\n        </div>\n      </plastic-map-info>\n    </google-map>\n    <template is=\"dom-repeat\" items=\"[[attending]]\" as=\"a\">\n      <div>You are confirmed for a meeting at [[a.place]], [[a.meetingTime]]</div>\n    </template>\n    <div id=\"sources\"></div>\n    "]);_templateObject_5d72bf8076cb11e8861a3d98ee478eb9=function(){return data};return data}var MyView2=function(_PolymerElement){babelHelpers.inherits(MyView2,_PolymerElement);function MyView2(){babelHelpers.classCallCheck(this,MyView2);return babelHelpers.possibleConstructorReturn(this,(MyView2.__proto__||Object.getPrototypeOf(MyView2)).apply(this,arguments))}babelHelpers.createClass(MyView2,[{key:"connectedCallback",value:function connectedCallback(){var _this=this;babelHelpers.get(MyView2.prototype.__proto__||Object.getPrototypeOf(MyView2.prototype),"connectedCallback",this).call(this);this.meetings=[{locationId:"a20",latLng:{lat:40.750454,lng:-73.993519},place:"Pen Station / Madison Square Garden",schedule:[{meetingId:"m120",meetingTime:"07/01/2017 10:00am"},{meetingId:"m125",meetingTime:"07/05/2017 2:00pm"},{meetingId:"m130",meetingTime:"07/31/2017 11:00am"}]},{locationId:"a22",latLng:{lat:40.761449,lng:-73.977622},place:"MoMA",schedule:[{meetingId:"m121",meetingTime:"07/02/2017 10:30am"},{meetingId:"m126",meetingTime:"07/06/2017 3:00pm"}]},{locationId:"a24",latLng:{lat:40.74829,lng:-73.985599},place:"Empire State Building",schedule:[{meetingId:"m131",meetingTime:"07/29/2017 9:30am"},{meetingId:"m122",meetingTime:"08/02/2017 10:30am"},{meetingId:"m127",meetingTime:"08/06/2017 1:00am"},{meetingId:"m133",meetingTime:"08/29/2017 9:45am"}]}];setTimeout(function(){_this._showSource()},1e3)}},{key:"_mapReady",value:function _mapReady(){}},{key:"_markerClick",value:function _markerClick(e){this.meeting=e.model.get("meeting");this.$.myinfocard.showInfoWindow(e.target.marker)}},{key:"_attending",value:function _attending(e){var s=e.model.get("sch");this.push("attending",{place:this.meeting.place,meetingTime:s.meetingTime})}},{key:"_showSource",value:function _showSource(){var mapMarkup=hljs.highlight("xml","\n    <google-map latitude=\"40.7555\" longitude=\"-73.985\" on-google-map-ready=\"_mapReady\" fit-to-markers api-key=\"[[apiKey]]\">\n      <template is=\"dom-repeat\" items=\"[[meetings]]\" as=\"meeting\">\n        <google-map-marker slot=\"markers\" click-events latitude=\"[[meeting.latLng.lat]]\" longitude=\"[[meeting.latLng.lng]]\" on-google-map-marker-click=\"_markerClick\">\n        </google-map-marker>\n      </template>\n      <plastic-map-info id=\"myinfocard\" fade-in>\n        <div class=\"layout verticle\">\n          <div style=\"width:100%; background-color: blue; font-weight: bold; color: white; padding: 5px 5px 5px 9px;\">[[meeting.place]]</div>\n          <div class=\"layout verticle\" style=\"border: 2px solid blue; padding: 5px 5px 5px 9px;\">\n            <template is=\"dom-repeat\" items=\"[[meeting.schedule]]\" as=\"sch\">\n              <div class=\"layout horizontal\">\n                <paper-icon-button id=\"[[sch.meetingId]]\" icon=\"social:person-add\" on-tap=\"_attending\"></paper-icon-button>\n                <span>[[sch.meetingTime]]</span>\n              </div>\n            </template>\n          </div>\n        </div>\n      </plastic-map-info>\n    </google-map>\n    <template is=\"dom-repeat\" items=\"[[attending]]\" as=\"a\">\n      <div>You are confirmed for a meeting at [[a.place]], [[a.meetingTime]]</div>\n    </template>\n    ");this.$.sources.innerHTML="\n    <h2>Basic Example with &lt;google-map&gt; Element</h2>\n    <p>In this example the google-map and google-map-marker elements are used to create the map.</p>\n    <h3>Markup</h3>\n    <pre><code class=\"html\">".concat(mapMarkup.value,"</code></pre>");var jsCode=hljs.highlight("javascript","\n    _markerClick(e) {\n      this.meeting = e.model.get('meeting');\n      this.$.myinfocard.showInfoWindow(e.target.marker);\n    }\n    _attending(e) {\n      var s = e.model.get('sch');\n      this.push('attending', {\n        place: this.meeting.place,\n        meetingTime: s.meetingTime\n      });\n    }\n    ");this.$.sources.innerHTML+="<h3>Javascript</h3>\n    <p>This illustrates handling the marker click event to show the infowindow and the handler on the paper-icon-button in the infowindow.</p>\n    <pre><code class=\"javascript\">".concat(jsCode.value,"</code></pre>")}}],[{key:"template",get:function get(){return(0,_myApp.html)(_templateObject_5d72bf8076cb11e8861a3d98ee478eb9())}},{key:"properties",get:function get(){return{apiKey:{type:String,value:"AIzaSyAsblFIAb_-l6kS1DAd8rzE-TeQC2uSVW8",notify:!0},apiLoaded:{type:Boolean,value:!1,notify:!0},_theMap:{type:Object,value:null,notify:!0},meeting:{type:Object,notify:!0},meetings:{type:Array,value:function value(){return[]}},attending:{type:Array,notify:!0,value:function value(){return[]}}}}}]);return MyView2}(_myApp.PolymerElement);window.customElements.define("my-view2",MyView2)});