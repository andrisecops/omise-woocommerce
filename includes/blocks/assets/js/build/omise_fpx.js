(()=>{"use strict";const e=window.React,t=window.wp.element,n=window.wp.i18n,a=window.wp.htmlEntities,s=window.wc.wcBlocksRegistry,l=(0,window.wc.wcSettings.getSetting)("omise_fpx_data",{}),r=(0,a.decodeEntities)(l.title)||"No title set",c=s=>{const{eventRegistration:r,emitResponse:c}=s,{onPaymentSetup:o}=r,i=(0,a.decodeEntities)(l.description||""),{bank_list:m}=l.data,p=(0,n.__)("FPX is currently not available.","omise"),d=(0,t.useRef)(null);return(0,t.useEffect)((()=>{const e=o((async()=>{if(!d.current)return{type:c.responseTypes.ERROR,message:"Select a bank"};try{return{type:c.responseTypes.SUCCESS,meta:{paymentMethodData:{bank:d.current}}}}catch(e){return{type:c.responseTypes.ERROR,message:e.message}}}));return()=>e()}),[c.responseTypes.ERROR,c.responseTypes.SUCCESS,o]),(0,e.createElement)(e.Fragment,null,i&&(0,e.createElement)("p",null,i),0==m.length?(0,e.createElement)("p",null,p):(0,e.createElement)("fieldset",{id:"omise-form-installment"},(0,e.createElement)("div",{className:"fpx-select-bank"},(0,e.createElement)("label",{htmlFor:"fpx-select-bank"},"Select Bank"),(0,e.createElement)("select",{className:"fpx-bank-logo default",id:"fpx-select-bank",name:"source[bank]",defaultValue:"",onChange:e=>{d.current=e.target.value}},(0,e.createElement)("option",{value:"",disabled:!0},"-- Select your option --"),m.map((t=>(0,e.createElement)("option",{key:t.code,className:t.code,value:t.code,disabled:"1"===t.active},t.name,!t.active&&" (offline)"))))),(0,e.createElement)("div",{className:"fpx-terms-and-conditions-block"},(0,e.createElement)("span",null,"By clicking on the ",(0,e.createElement)("b",null,'"Place Order"')," button, you agree to FPX's",(0,e.createElement)("a",{href:"https://www.mepsfpx.com.my/FPXMain/termsAndConditions.jsp",target:"_blank"},"Terms and Conditions")))))};(0,s.registerPaymentMethod)({name:l.name||"",label:(0,e.createElement)((t=>{const{PaymentMethodLabel:n}=t.components;return(0,e.createElement)(n,{text:r})}),null),content:(0,e.createElement)(c,null),edit:(0,e.createElement)(c,null),canMakePayment:()=>l.is_active,ariaLabel:r,supports:{features:l.supports}})})();