import{g as U,b as O,s as I,E as ee,c as i,W,r as m,_ as V,j as n,t as D,i as v,f as T,z as y,k as oe,h as te,B as w,ao as E,ai as H,l as ae}from"./index-kCCcrB3N.js";import{u as se,b as ne}from"./useFormControl-wkRjOAzs.js";function ce(e){return U("PrivateSwitchBase",e)}O("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const re=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],le=e=>{const{classes:o,checked:t,disabled:s,edge:a}=e,c={root:["root",t&&"checked",s&&"disabled",a&&`edge${v(a)}`],input:["input"]};return T(c,ce,o)},ie=I(ee)(({ownerState:e})=>i({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),de=I("input",{shouldForwardProp:W})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),pe=m.forwardRef(function(o,t){const{autoFocus:s,checked:a,checkedIcon:c,className:d,defaultChecked:h,disabled:f,disableFocusRipple:r=!1,edge:u=!1,icon:P,id:g,inputProps:F,inputRef:R,name:z,onBlur:x,onChange:k,onFocus:b,readOnly:q,required:A=!1,tabIndex:G,type:B,value:_}=o,J=V(o,re),[L,K]=se({controlled:a,default:!!h,name:"SwitchBase",state:"checked"}),p=ne(),Q=l=>{b&&b(l),p&&p.onFocus&&p.onFocus(l)},X=l=>{x&&x(l),p&&p.onBlur&&p.onBlur(l)},Y=l=>{if(l.nativeEvent.defaultPrevented)return;const N=l.target.checked;K(N),k&&k(l,N)};let C=f;p&&typeof C>"u"&&(C=p.disabled);const Z=B==="checkbox"||B==="radio",S=i({},o,{checked:L,disabled:C,disableFocusRipple:r,edge:u}),M=le(S);return n.jsxs(ie,i({component:"span",className:D(M.root,d),centerRipple:!0,focusRipple:!r,disabled:C,tabIndex:null,role:void 0,onFocus:Q,onBlur:X,ownerState:S,ref:t},J,{children:[n.jsx(de,i({autoFocus:s,checked:a,defaultChecked:h,className:M.input,disabled:C,id:Z?g:void 0,name:z,onChange:Y,readOnly:q,ref:R,required:A,ownerState:S,tabIndex:G,type:B},B==="checkbox"&&_===void 0?{}:{value:_},F)),L?c:P]}))}),ue=y(n.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),he=y(n.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),fe=y(n.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ge(e){return U("MuiCheckbox",e)}const j=O("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),xe=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],ke=e=>{const{classes:o,indeterminate:t,color:s,size:a}=e,c={root:["root",t&&"indeterminate",`color${v(s)}`,`size${v(a)}`]},d=T(c,ge,o);return i({},o,d)},be=I(pe,{shouldForwardProp:e=>W(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${v(t.size)}`],t.color!=="default"&&o[`color${v(t.color)}`]]}})(({theme:e,ownerState:o})=>i({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:oe(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${j.checked}, &.${j.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${j.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),Ce=n.jsx(he,{}),me=n.jsx(ue,{}),ve=n.jsx(fe,{}),Pe=m.forwardRef(function(o,t){var s,a;const c=te({props:o,name:"MuiCheckbox"}),{checkedIcon:d=Ce,color:h="primary",icon:f=me,indeterminate:r=!1,indeterminateIcon:u=ve,inputProps:P,size:g="medium",className:F}=c,R=V(c,xe),z=r?u:f,x=r?u:d,k=i({},c,{color:h,indeterminate:r,size:g}),b=ke(k);return n.jsx(be,i({type:"checkbox",inputProps:i({"data-indeterminate":r},P),icon:m.cloneElement(z,{fontSize:(s=z.props.fontSize)!=null?s:g}),checkedIcon:m.cloneElement(x,{fontSize:(a=x.props.fontSize)!=null?a:g}),ownerState:k,ref:t,className:D(b.root,F)},R,{classes:b}))}),Fe=y(n.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),Re=y(n.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),ye=I(w)(({theme:e,ownerState:{color:o,variant:t}})=>{const s={...o==="default"&&{...t==="filled"&&{color:e.vars.palette.common.white,backgroundColor:e.vars.palette.text.primary,[E.dark]:{color:e.vars.palette.grey[800]}},...t==="outlined"&&{backgroundColor:"transparent",color:e.vars.palette.text.primary,border:`2px solid ${e.vars.palette.text.primary}`},...t==="soft"&&{color:e.vars.palette.text.secondary,backgroundColor:H(e.vars.palette.grey["500Channel"],.16)},...t==="inverted"&&{color:e.vars.palette.grey[800],backgroundColor:e.vars.palette.grey[300]}}},a={...o!=="default"&&{...t==="filled"&&{color:e.vars.palette[o].contrastText,backgroundColor:e.vars.palette[o].main},...t==="outlined"&&{backgroundColor:"transparent",color:e.vars.palette[o].main,border:`2px solid ${e.vars.palette[o].main}`},...t==="soft"&&{color:e.vars.palette[o].dark,backgroundColor:H(e.vars.palette[o].mainChannel,.16),[E.dark]:{color:e.vars.palette[o].light}},...t==="inverted"&&{color:e.vars.palette[o].darker,backgroundColor:e.vars.palette[o].lighter}}};return{height:24,minWidth:24,lineHeight:0,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",padding:e.spacing(0,.75),fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightBold,borderRadius:e.shape.borderRadius*.75,transition:e.transitions.create("all",{duration:e.transitions.duration.shorter}),...s,...a}}),$={root:"mnl__label__root",icon:"mnl__label__icon"},Se=m.forwardRef(({children:e,color:o="default",variant:t="soft",startIcon:s,endIcon:a,sx:c,className:d,...h},f)=>{const r=ae(),u={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return n.jsxs(ye,{ref:f,component:"span",className:$.root.concat(d?` ${d}`:""),ownerState:{color:o,variant:t},sx:{...s&&{pl:.75},...a&&{pr:.75},...c},theme:r,...h,children:[s&&n.jsx(w,{component:"span",className:$.icon,sx:{mr:.75,...u},children:s}),typeof e=="string"?ze(e):e,a&&n.jsx(w,{component:"span",className:$.icon,sx:{ml:.75,...u},children:a})]})});function ze(e){return e.charAt(0).toUpperCase()+e.slice(1)}export{Pe as C,Fe as F,Re as L,pe as S,Se as a};
