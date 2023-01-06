"use strict";(self.webpackChunkjungwon_electronics_homepage=self.webpackChunkjungwon_electronics_homepage||[]).push([[406],{6627:function(e,t,o){o.r(t),o.d(t,{default:function(){return Y}});var n=o(7294),i=o(376),r=o(7462),a=o(3366),s=o(5505),l=o(9240),c=o(9236),u=o(7253),p=o(2058);var d=n.createContext({}),m=o(1351),f=o(9508);function v(e){return(0,m.Z)("MuiTimeline",e)}(0,f.Z)("MuiTimeline",["root","positionLeft","positionRight","positionAlternate"]);var Z=o(5893),h=["position","className"],x=(0,u.ZP)("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.position&&t["position".concat((0,l.Z)(o.position))]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),g=n.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiTimeline"}),n=o.position,i=void 0===n?"right":n,u=o.className,m=(0,a.Z)(o,h),f=(0,r.Z)({},o,{position:i}),g=function(e){var t=e.position,o=e.classes,n={root:["root",t&&"position".concat((0,l.Z)(t))]};return(0,c.Z)(n,v,o)}(f);return(0,Z.jsx)(d.Provider,{value:{position:i},children:(0,Z.jsx)(x,(0,r.Z)({className:(0,s.Z)(g.root,u),ownerState:f,ref:t},m))})})),w=o(4942),y=o(3128);function C(e){return(0,m.Z)("MuiTimelineContent",e)}var T=(0,f.Z)("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate"]);var M=(0,f.Z)("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate"]);function S(e){return(0,m.Z)("MuiTimelineItem",e)}(0,f.Z)("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","missingOppositeContent"]);var R=["position","className"],_=(0,u.ZP)("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["position".concat((0,l.Z)(o.position))]]}})((function(e){var t,o=e.ownerState;return(0,r.Z)({listStyle:"none",display:"flex",position:"relative",minHeight:70},"left"===o.position&&{flexDirection:"row-reverse"},"alternate"===o.position&&{"&:nth-of-type(even)":(t={flexDirection:"row-reverse"},(0,w.Z)(t,"& .".concat(T.root),{textAlign:"right"}),(0,w.Z)(t,"& .".concat(M.root),{textAlign:"left"}),t)},!o.hasOppositeContent&&{"&:before":{content:'""',flex:1,padding:"6px 16px"}})})),N=n.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiTimelineItem"}),i=o.position,u=o.className,m=(0,a.Z)(o,R),f=n.useContext(d).position,v=!1;n.Children.forEach(o.children,(function(e){(0,y.Z)(e,["TimelineOppositeContent"])&&(v=!0)}));var h=(0,r.Z)({},o,{position:i||f||"right",hasOppositeContent:v}),x=function(e){var t=e.position,o=e.classes,n=e.hasOppositeContent,i={root:["root","position".concat((0,l.Z)(t)),!n&&"missingOppositeContent"]};return(0,c.Z)(i,S,o)}(h);return(0,Z.jsx)(d.Provider,{value:{position:h.position},children:(0,Z.jsx)(_,(0,r.Z)({className:(0,s.Z)(x.root,u),ownerState:h,ref:t},m))})}));function b(e){return(0,m.Z)("MuiTimelineSeparator",e)}(0,f.Z)("MuiTimelineSeparator",["root"]);var E=["className"],j=(0,u.ZP)("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),k=n.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiTimelineSeparator"}),n=o.className,i=(0,a.Z)(o,E),l=o,u=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},b,t)}(l);return(0,Z.jsx)(j,(0,r.Z)({className:(0,s.Z)(u.root,n),ownerState:l,ref:t},i))}));function P(e){return(0,m.Z)("MuiTimelineConnector",e)}(0,f.Z)("MuiTimelineConnector",["root"]);var D=["className"],A=(0,u.ZP)("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t=e.theme;return{width:2,backgroundColor:(t.vars||t).palette.grey[400],flexGrow:1}})),I=n.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiTimelineConnector"}),n=o.className,i=(0,a.Z)(o,D),l=o,u=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},P,t)}(l);return(0,Z.jsx)(A,(0,r.Z)({className:(0,s.Z)(u.root,n),ownerState:l,ref:t},i))})),O=o(9989),z=["className"],G=(0,u.ZP)(O.Z,{name:"MuiTimelineContent",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["position".concat((0,l.Z)(o.position))]]}})((function(e){var t=e.ownerState;return(0,r.Z)({flex:1,padding:"6px 16px",textAlign:"left"},"left"===t.position&&{textAlign:"right"})})),L=n.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiTimelineContent"}),i=o.className,u=(0,a.Z)(o,z),m=n.useContext(d).position,f=(0,r.Z)({},o,{position:m||"right"}),v=function(e){var t=e.position,o=e.classes,n={root:["root","position".concat((0,l.Z)(t))]};return(0,c.Z)(n,C,o)}(f);return(0,Z.jsx)(G,(0,r.Z)({component:"div",className:(0,s.Z)(v.root,i),ownerState:f,ref:t},u))}));function H(e){return(0,m.Z)("MuiTimelineDot",e)}(0,f.Z)("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);var W=["className","color","variant"],q=(0,u.ZP)("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["inherit"!==o.color&&"".concat(o.variant).concat((0,l.Z)(o.color))],t[o.variant]]}})((function(e){var t=e.ownerState,o=e.theme;return(0,r.Z)({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(o.vars||o).shadows[1],margin:"11.5px 0"},"filled"===t.variant&&(0,r.Z)({borderColor:"transparent"},"inherit"!==t.color&&(0,r.Z)({},"grey"===t.color?{color:(o.vars||o).palette.grey[50],backgroundColor:(o.vars||o).palette.grey[400]}:{color:(o.vars||o).palette[t.color].contrastText,backgroundColor:(o.vars||o).palette[t.color].main})),"outlined"===t.variant&&(0,r.Z)({boxShadow:"none",backgroundColor:"transparent"},"inherit"!==t.color&&(0,r.Z)({},"grey"===t.color?{borderColor:(o.vars||o).palette.grey[400]}:{borderColor:(o.vars||o).palette[t.color].main})))})),B=n.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiTimelineDot"}),n=o.className,i=o.color,u=void 0===i?"grey":i,d=o.variant,m=void 0===d?"filled":d,f=(0,a.Z)(o,W),v=(0,r.Z)({},o,{color:u,variant:m}),h=function(e){var t=e.color,o=e.variant,n=e.classes,i={root:["root",o,"inherit"!==t&&"".concat(o).concat((0,l.Z)(t))]};return(0,c.Z)(i,H,n)}(v);return(0,Z.jsx)(q,(0,r.Z)({className:(0,s.Z)(h.root,n),ownerState:v,ref:t},f))})),F=o(6449),J=o(9692),K=o(6283),Q=J.default.div.withConfig({displayName:"Timeline__DateContent",componentId:"sc-12hujte-0"})(["color:",";font-weight:700;@media (max-width:768px){font-size:14px;}@media (max-width:425px){font-size:12px;}"],(function(e){return e.theme.palette.primary.main})),U=J.default.div.withConfig({displayName:"Timeline__Content",componentId:"sc-12hujte-1"})(["@media (max-width:768px){font-size:14px;}@media (max-width:425px){font-size:12px;}"]);function V(e){var t=e.timelines,o=(0,F.Z)();return n.createElement(g,{position:"alternate"},t.map((function(e,t){return n.createElement(N,{key:"timeline_"+t},n.createElement(k,null,n.createElement(B,{variant:"outlined",color:"primary"}),n.createElement(I,null)),n.createElement(L,null,n.createElement(Q,{theme:o},e.date),n.createElement(U,null,e.descs?e.descs.map((function(e,t){return n.createElement("div",{key:"desc_"+t},n.createElement(K.Z,{id:e}))})):n.createElement(K.Z,{id:e.desc}))))})))}var X=o(8829),Y=function(e){var t=e.pageContext,o="undefined"!=typeof window?window.location.pathname:"",r=(0,X.s)(o);return""===r&&(r="ko"),n.createElement(i.Z,{pageTitle:"history",pageContext:t},n.createElement("div",{style:{width:"100%"}},n.createElement(V,{timelines:[{date:"en"===r?"04.2022":"2022.04",desc:"history_10"},{date:"en"===r?"03.2022":"2022.03",desc:"history_9"},{date:"en"===r?"01.2022":"2022.01",desc:"history_8"},{date:"en"===r?"09.2021":"2021.09",desc:"history_7"},{date:"en"===r?"08.2021":"2021.08",desc:"history_6"},{date:"en"===r?"07.2021":"2021.07",desc:"history_5"},{date:"en"===r?"03.2015":"2015.03",desc:"history_4"},{date:"en"===r?"12.2012":"2012.12",desc:"history_3"},{date:"en"===r?"01.2011":"2011.01",descs:["history_2","history_1","history_0"]}]})))}}}]);
//# sourceMappingURL=component---src-pages-company-history-js-dd6efed3ac88d9165b26.js.map