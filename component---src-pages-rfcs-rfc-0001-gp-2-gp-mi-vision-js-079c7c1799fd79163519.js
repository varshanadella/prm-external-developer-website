(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"36wv":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("Wbzz"),s=a("oB8Y"),l=a("87zB"),o=a.n(l),c=a("y+6e"),u=a.n(c),d=a("MVY5"),f=a.n(d);a("pxef");t.default=function(e){e.children;return i.a.createElement(s.a,{sidemenu:{items:[{url:Object(r.b)("/rfcs/RFC0001_gp2gp_mi/overview"),label:"Overview"},{url:"#top",label:"Vision",selected:!0},{url:Object(r.b)("/rfcs/RFC0001_gp2gp_mi/scope"),label:"Scope"},{url:Object(r.b)("/rfcs/RFC0001_gp2gp_mi/mandatory_events"),label:"Mandatory Events"}]},breadcrumb:{items:[{url:Object(r.b)("/rfcs"),label:"RFCs"},{url:Object(r.b)("/rfcs/RFC0001_gp2gp_mi/overview"),label:"RFC0001 GP2GP MI"}]}},i.a.createElement(o.a,null,i.a.createElement("p",null,"This RFC is currently 'Being discussed'. As such, it may be undergoing significant change and should not be used as the basis of an implementation at the moment. If you want to have your say and contribute to this RFC then go to our"," ",i.a.createElement("a",{href:"https://github.com/nhsconnect/prm-external-developer-website/issues/1",title:"External website where RFC comments are allowed"},"Github site"),".")),i.a.createElement("h1",null,"RFC0001 GP2GP MI"),i.a.createElement("h2",null,"Vision"),i.a.createElement("h3",null,"Motivation"),i.a.createElement("p",null,"While the existing management information specification provides some usable data for tracking trends in GP2GP, there are several drawbacks we have experienced working with it in practice:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Lack of extensibility - Due to the high amount of cross referencing to the structure and numbering scheme of the MI fields, it is hard to add new data to the existing specification."),i.a.createElement("li",null,"Inability to represent structured data - Because CSV is used as a serialisation format, it's not easy to add data that is structured or list like (e.g attachment metadata)"),i.a.createElement("li",null,"Inconsistent and unreported information - The implementations of GP2GP MI contain inconsistencies amongst each other, so data can be missing and the accuracy of our analysis is reduced."),i.a.createElement("li",null,"Challenges de-duplicating records - There is no unique identifier that can be used to de-duplicate the MI records in the way outlined by the existing specification"),i.a.createElement("li",null,"Lack of fidelity - While representing the state of each registration as a single MI record allows for analysis to be somewhat simplified, it is often hard to determine the exact sequence of events that lead to GP2GP succeeding or failing."),i.a.createElement("li",null,"Scope of data capture - When considering patient record migration as a whole, registration data is important for measuring the overall quality of the patient experience. Failures in GP2GP are often conflated with registration failures. It would be desirable to increase the scope of what we capture to include this information also."),i.a.createElement("li",null,"Delay in receiving updates - This limits our ability to diagnose and respond to incidents as well as hampering our ability to build useful data products on top of the MI data.")),i.a.createElement("h3",null,"Technical Design"),i.a.createElement("p",null,"To address the above concerns, we propose moving to real time events for capturing management information."),i.a.createElement(u.a,{src:"/RFC0001_gp2gp_mi/events_example.png",alt:"An example of events being raised by the registration process",caption:"An example of raising different events during the registration process",className:"image-fullwidth"}),i.a.createElement("h4",null,"Distinct records for different events"),i.a.createElement("p",null,"Instead of representing management information as a single record, different parts of the MI will be captured at various points throughout the registration process. This data will be modeled using an event sourcing style methodology in which data is organised into events that align closely to the business process. Capturing data in this way will improve our ability to analyse different kinds of GP2GP failure modes. This will also make it simpler to capture new kinds of information, as instead of placing more data into a single record, new events can be created as needed."),i.a.createElement("h4",null,"Capture every event (aka capture each state change)"),i.a.createElement("p",null,"Every user or system activity triggers a new event or otherwise progresses the registration through the service flow, MI information must be captured for reporting."),i.a.createElement("h4",null,"JSON instead of CSV"),i.a.createElement("p",null,"JSON objects are to be used as the serialisation format for MI data. When serialising data to a CSV, the ordering of the columns is used to attribute meaning to each data value (especially if there is not a header row in the CSV file). This can make it harder to insert a new column in the logically correct place, as any code which processes this CSV now potentially needs to be updated to take into account the new ordering. In the existing specification, this is further complicated as the order of the requirements is directly reflected by the CSV."),i.a.createElement("p",null,"Encoding the same information into a JSON record does not suffer from this limitation as the order of values are not used for conveying meaning. It will therefore be considerably easier to evolve the schema. In addition to this we also recommend fully decoupling the numbering and ordering of the requirements from the data schema. For example, if the specification dictates in requestor requirement 2 that a requesting system records the conversation id, the field in the data schema should be something like ‘conversation_id’ instead of ‘RR2’. The enhanced MI specification will contain a data schema mandating what these fields should be named."),i.a.createElement("h4",null,"Near real time"),i.a.createElement("p",null,"MI Events must be submitted when the corresponding action they expose data for has been completed. For example an event must be sent as soon as the requesting system integrates an EHR. Events are to be submitted via HTTPS POST request to the GP2GP MI endpoint. To simplify the implementation, systems will not have to retry if this request fails."),i.a.createElement("h4",null,"Registration ID"),i.a.createElement("p",null,"To allow events related to a single registration to be correlated, each event must have a field containing an anonymous identifier that is unique to each registration. This will allow us to understand where errors that happen at different points in the process in different systems impact the overall registration process."),i.a.createElement(f.a,null,i.a.createElement(f.a.Previous,{href:Object(r.b)("rfcs/RFC0001_gp2gp_mi/overview")},"Overview"),i.a.createElement(f.a.Next,{href:Object(r.b)("rfcs/RFC0001_gp2gp_mi/scope")},"Scope")))}},"4SQN":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("V+eJ"),a("ioFf"),a("91GP"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("q1tI")),i=r(a("TSYQ"));function r(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],0<=t.indexOf(a)||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],!(0<=t.indexOf(a))&&Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=function(e){var t=e.children,a=e.visuallyHiddenText,r=e.className,o=l(e,["children","visuallyHiddenText","className"]);return n.default.createElement("div",s({className:(0,i.default)("nhsuk-inset-text",r)},o),n.default.createElement("span",{className:"nhsuk-u-visually-hidden"},a," "),t)};o.defaultProps={visuallyHiddenText:"Information:",className:""};var c=o;t.default=c},"87zB":function(e,t,a){"use strict";a("HAE/");var n,i=(n=a("4SQN"))&&n.__esModule?n:{default:n};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i.default;t.default=r},MVY5:function(e,t,a){"use strict";a("HAE/");var n,i=(n=a("hLa0"))&&n.__esModule?n:{default:n};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i.default;t.default=r},b1OJ:function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("V+eJ"),a("ioFf"),a("91GP"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("q1tI")),i=r(a("TSYQ"));function r(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],0<=t.indexOf(a)||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],!(0<=t.indexOf(a))&&Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=function(e){var t=e.caption,a=e.alt,r=e.className,o=l(e,["caption","alt","className"]);return n.default.createElement("figure",{className:(0,i.default)("nhsuk-image",r)},n.default.createElement("img",s({className:"nhsuk-image__img",alt:a},o)),t?n.default.createElement("figcaption",{className:"nhsuk-image__caption"},t):null)};o.defaultProps={caption:"",alt:"",className:""};var c=o;t.default=c},hLa0:function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("V+eJ"),a("ioFf"),a("91GP"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("q1tI")),i=r(a("TSYQ"));function r(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],0<=t.indexOf(a)||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],!(0<=t.indexOf(a))&&Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=function(e){var t=e.children,a=e.className,r=e.description,o=l(e,["children","className","description"]);return n.default.createElement("li",{className:(0,i.default)("nhsuk-pagination-item--previous",a)},n.default.createElement("a",s({className:"nhsuk-pagination__link nhsuk-pagination__link--prev"},o),n.default.createElement("span",{className:"nhsuk-pagination__title"},r),n.default.createElement("span",{className:"nhsuk-u-visually-hidden"},":"),n.default.createElement("span",{className:"nhsuk-pagination__page"},t),n.default.createElement("svg",{className:"nhsuk-icon nhsuk-icon__arrow-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},n.default.createElement("path",{d:"M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z"}))))};o.defaultProps={description:"Previous",children:null,className:""};var c=function(e){var t=e.children,a=e.className,r=e.description,o=l(e,["children","className","description"]);return n.default.createElement("li",{className:(0,i.default)("nhsuk-pagination-item--next",a)},n.default.createElement("a",s({className:"nhsuk-pagination__link nhsuk-pagination__link--next"},o),n.default.createElement("span",{className:"nhsuk-pagination__title"},r),n.default.createElement("span",{className:"nhsuk-u-visually-hidden"},":"),n.default.createElement("span",{className:"nhsuk-pagination__page"},t),n.default.createElement("svg",{className:"nhsuk-icon nhsuk-icon__arrow-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},n.default.createElement("path",{d:"M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"}))))};c.defaultProps={description:"Next",children:null,className:""};var u=function(e){var t=e.className,a=e.children,r=l(e,["className","children"]);return n.default.createElement("nav",s({className:(0,i.default)("nhsuk-pagination",t)},r),n.default.createElement("ul",{className:"nhsuk-list nhsuk-pagination__list"},a))};u.defaultProps={role:"navigation",ariaLabel:"Pagination",className:""},u.Previous=o,u.Next=c;var d=u;t.default=d},"y+6e":function(e,t,a){"use strict";a("HAE/");var n,i=(n=a("b1OJ"))&&n.__esModule?n:{default:n};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i.default;t.default=r}}]);
//# sourceMappingURL=component---src-pages-rfcs-rfc-0001-gp-2-gp-mi-vision-js-079c7c1799fd79163519.js.map