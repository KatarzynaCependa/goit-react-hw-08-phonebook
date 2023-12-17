"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[424],{424:function(e,n,t){t.r(n),t.d(n,{default:function(){return K}});var o=t(2791),a=t(9434),r=t(6907),i="Phonebook_wrapper__jqMf7",c="Phonebook_header__QAOR+",l="ContactForm_form__dhl+T",s=t(3634),d=t(8096),u=t(292),h=t(4925),p=t(4294),m=t(184),v=function(){var e=(0,a.I0)(),n=(0,a.v9)((function(e){return e.contacts.contacts}));return(0,m.jsxs)("form",{onSubmit:function(t){t.preventDefault();var o=t.target,a=o.elements.name.value,r=o.elements.number.value,i={name:a,number:r};if(n.some((function(e){return e.name===a&&e.number===r})))return o.reset(),alert("".concat(a," is already in contacts"));e((0,s.uK)(i)),o.reset()},className:l,children:[(0,m.jsxs)(d.Z,{variant:"standard",children:[(0,m.jsx)(h.Z,{htmlFor:"component-simple",children:"Name"}),(0,m.jsx)(u.Z,{id:"component-simple",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.",required:!0})]}),(0,m.jsxs)(d.Z,{variant:"standard",children:[(0,m.jsx)(h.Z,{htmlFor:"component-simple",children:"Number"}),(0,m.jsx)(u.Z,{id:"component-simple",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)(p.Z,{size:"small",variant:"contained",type:"submit",children:"Add contact"})]})},f=t(3165),b="Filter_filterLabel__+pnW-",g=t(2444),Z=t(5403),x=function(){var e=(0,a.I0)();return(0,m.jsxs)("label",{className:b,children:["Find your contacts by name",(0,m.jsx)(g.Z,{margin:"normal",fullWidth:!0,label:"Search",name:"search",autoFocus:!0,onChange:function(n){var t=n.target.value;e((0,f.W1)(t))},children:(0,m.jsx)(Z.Z,{})})]})},j=t(3433),z="ContactList_listEl__bpoQ-",_="ContactList_delBtn__SixzE",y=t(4942),C=t(3366),S=t(7462),k=t(3733),R=t(4419),w=t(2065),N=t(6934),F=t(1402),L=t(335),I=t(4036),M=t(5878),A=t(1217);function P(e){return(0,A.Z)("MuiIconButton",e)}var q=(0,M.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),B=["edge","children","className","color","disabled","disableFocusRipple","size"],E=(0,N.ZP)(L.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"default"!==t.color&&n["color".concat((0,I.Z)(t.color))],t.edge&&n["edge".concat((0,I.Z)(t.edge))],n["size".concat((0,I.Z)(t.size))]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,S.Z)({textAlign:"center",flex:"0 0 auto",fontSize:n.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(n.vars||n).palette.action.active,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.activeChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,w.Fq)(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})}),(function(e){var n,t=e.theme,o=e.ownerState,a=null==(n=(t.vars||t).palette)?void 0:n[o.color];return(0,S.Z)({},"inherit"===o.color&&{color:"inherit"},"inherit"!==o.color&&"default"!==o.color&&(0,S.Z)({color:null==a?void 0:a.main},!o.disableRipple&&{"&:hover":(0,S.Z)({},a&&{backgroundColor:t.vars?"rgba(".concat(a.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,w.Fq)(a.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===o.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===o.size&&{padding:12,fontSize:t.typography.pxToRem(28)},(0,y.Z)({},"&.".concat(q.disabled),{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}))})),O=o.forwardRef((function(e,n){var t=(0,F.Z)({props:e,name:"MuiIconButton"}),o=t.edge,a=void 0!==o&&o,r=t.children,i=t.className,c=t.color,l=void 0===c?"default":c,s=t.disabled,d=void 0!==s&&s,u=t.disableFocusRipple,h=void 0!==u&&u,p=t.size,v=void 0===p?"medium":p,f=(0,C.Z)(t,B),b=(0,S.Z)({},t,{edge:a,color:l,disabled:d,disableFocusRipple:h,size:v}),g=function(e){var n=e.classes,t=e.disabled,o=e.color,a=e.edge,r=e.size,i={root:["root",t&&"disabled","default"!==o&&"color".concat((0,I.Z)(o)),a&&"edge".concat((0,I.Z)(a)),"size".concat((0,I.Z)(r))]};return(0,R.Z)(i,P,n)}(b);return(0,m.jsx)(E,(0,S.Z)({className:(0,k.Z)(g.root,i),centerRipple:!0,focusRipple:!h,disabled:d,ref:n,ownerState:b},f,{children:r}))})),D=t(7247),T=function(){var e=(0,a.v9)((function(e){return e.contacts.contacts})),n=(0,a.v9)(f.AD),t=(0,a.I0)(),o=(0,j.Z)(e).sort((function(e,n){return e.name.localeCompare(n.name)})).filter((function(e){return e.name.toLowerCase().includes(n&&n.toLowerCase())}));return o.length<=0?(0,m.jsx)("p",{children:"No contacts to display."}):(0,m.jsx)("ul",{children:o.map((function(e){return(0,m.jsxs)("li",{className:z,children:[e.name,": ",e.number,(0,m.jsx)(O,{"aria-label":"delete",size:"small",onClick:function(){return n=e.id,void t((0,s.GK)(n));var n},className:_,children:(0,m.jsx)(D.Z,{fontSize:"inherit"})})]},e.id)}))})},W=t(6916),H=function(e){return e.contacts.isLoading},K=((0,W.P1)([function(e){return e.contacts.contacts},f.AD],(function(e,n){return""===n?e:e.filter((function(e){var t;return null!==(t=e.name.toLowerCase().includes(n.filter))&&void 0!==t?t:[]}))})),function(){var e=(0,a.v9)(H),n=(0,a.I0)();return(0,o.useEffect)((function(){n((0,s.yF)())}),[n]),(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)(r.B6,{children:(0,m.jsx)(r.ql,{children:(0,m.jsx)("title",{children:"Phonebook"})})}),(0,m.jsx)(v,{}),(0,m.jsx)("h2",{className:c,children:"Phonebook"}),(0,m.jsx)(x,{}),e?(0,m.jsx)("p",{children:"Loading contacts..."}):(0,m.jsx)(T,{})]})})},7247:function(e,n,t){var o=t(4836);n.Z=void 0;var a=o(t(5649)),r=t(184),i=(0,a.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=i},5403:function(e,n,t){var o=t(4836);n.Z=void 0;var a=o(t(5649)),r=t(184),i=(0,a.default)((0,r.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");n.Z=i}}]);
//# sourceMappingURL=424.f5357f56.chunk.js.map