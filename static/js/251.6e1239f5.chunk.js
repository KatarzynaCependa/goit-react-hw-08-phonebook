"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[251],{5251:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(2791),r=n(9434),s=n(6907),c="ContactForm_form__dhl+T",o="ContactForm_contactFormLabel__16ABo",i="ContactForm_button__eSwX9",l="ContactForm_inputEl__kLkA4",u=n(3634),d=n(184),m=function(){var e=(0,r.I0)(),t=(0,r.v9)((function(e){return e.contacts.contacts}));return(0,d.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=n.target,r=a.elements.name.value,s={name:r,number:a.elements.number.value};if(t.includes(r))return a.reset(),alert("".concat(r," is alredy in contacts"));e((0,u.uK)(s)),a.reset()},className:c,children:[(0,d.jsxs)("label",{className:o,children:["Name",(0,d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,className:l})]}),(0,d.jsxs)("label",{className:o,children:["Number",(0,d.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,className:l})]}),(0,d.jsx)("button",{type:"submit",className:i,children:"Add contact"})]})},h=n(3165),f="Filter_filterLabel__+pnW-",_="Filter_inputEl__BAHP9",p=function(){var e=(0,r.I0)();return(0,d.jsxs)("label",{className:f,children:["Find your contacts by name",(0,d.jsx)("input",{type:"text",placeholder:"Search",onChange:function(t){var n=t.target.value;e((0,h.W1)(n))},className:_})]})},b=n(3433),x="ContactList_listEl__bpoQ-",j="ContactList_delBtn__SixzE",v=function(){var e=(0,r.v9)((function(e){return e.contacts.contacts})),t=(0,r.v9)(h.AD),n=(0,r.I0)(),a=(0,b.Z)(e).sort((function(e,t){return e.name.localeCompare(t.name)})).filter((function(e){return e.name.toLowerCase().includes(t&&t.toLowerCase())}));return a.length<=0?(0,d.jsx)("p",{children:"No contacts to display."}):(0,d.jsx)("ul",{children:a.map((function(e){return(0,d.jsxs)("li",{className:x,children:[e.name,": ",e.number,(0,d.jsx)("button",{onClick:function(){return t=e.id,void n((0,u.GK)(t));var t},className:j,children:"X"})]},e.id)}))})},C=n(6916),N=function(e){return e.contacts.isLoading},k=((0,C.P1)([function(e){return e.contacts.contacts},h.AD],(function(e,t){return""===t?e:e.filter((function(e){var n;return null!==(n=e.name.toLowerCase().includes(t.filter))&&void 0!==n?n:[]}))})),function(){var e=(0,r.v9)(N),t=(0,r.I0)();return(0,a.useEffect)((function(){t((0,u.yF)())}),[t]),(0,d.jsxs)("div",{children:[(0,d.jsx)(s.B6,{children:(0,d.jsx)(s.ql,{children:(0,d.jsx)("title",{children:"Phonebook"})})}),(0,d.jsx)(m,{}),(0,d.jsx)("h2",{children:"Phonebook"}),(0,d.jsx)(p,{}),e?(0,d.jsx)("p",{children:"Loading contacts..."}):(0,d.jsx)(v,{})]})})}}]);
//# sourceMappingURL=251.6e1239f5.chunk.js.map