(()=>{"use strict";const e=window.React,t=window.wp.element,n=window.wp.i18n,a=window.wp.htmlEntities,l=window.wc.wcBlocksRegistry,i=(0,window.wc.wcSettings.getSetting)("omise_mobilebanking_data",{}),s=(0,a.decodeEntities)(i.title)||"No title set",m=l=>{const{eventRegistration:s,emitResponse:m}=l,{onPaymentSetup:r}=s,o=(0,a.decodeEntities)(i.description||""),c=i.data.backends,d=(0,n.__)("There are no payment methods available.","omise"),p=(0,t.useRef)({}),u=e=>{p.current=e.target.value};return(0,t.useEffect)((()=>{const e=r((async()=>{try{return{type:m.responseTypes.SUCCESS,meta:{paymentMethodData:{"omise-offsite":p.current}}}}catch(e){return{type:m.responseTypes.ERROR,message:e.message}}}));return()=>e()}),[r]),(0,e.createElement)(e.Fragment,null,o&&(0,e.createElement)("p",null,o),0==c.length?(0,e.createElement)("p",null,d):(0,e.createElement)("fieldset",{key:"omise-form-mobilebanking"+c.length,id:"omise-form-mobilebanking"},(0,e.createElement)("ul",{className:"omise-banks-list"},c.map(((t,n)=>(0,e.createElement)("li",{key:t._id+n,className:"item mobile-banking"},(0,e.createElement)("div",null,(0,e.createElement)("input",{id:t._id,type:"radio",name:"omise-offsite",value:t._id,onChange:u}),(0,e.createElement)("label",{htmlFor:t._id},(0,e.createElement)("div",{className:`mobile-banking-logo ${t.provider_logo}`}),(0,e.createElement)("div",{className:"mobile-banking-label"},(0,e.createElement)("span",{className:"title"},t.provider_name),(0,e.createElement)("br",null))))))))))};(0,l.registerPaymentMethod)({name:i.name||"",label:(0,e.createElement)((t=>{const{PaymentMethodLabel:n}=t.components;return(0,e.createElement)(n,{text:s})}),null),content:(0,e.createElement)(m,null),edit:(0,e.createElement)(m,null),canMakePayment:()=>i.is_active,ariaLabel:s,supports:{features:i.supports}})})();