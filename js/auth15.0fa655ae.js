"use strict";(self["webpackChunkmes_default_vue"]=self["webpackChunkmes_default_vue"]||[]).push([[6868,4208],{88775:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});a(44936);var o=a(49256),i=a(28802),s=a(47919),d=a(45991),l=a(12841),n=a(86187),r=a(76107),u=a(84048),c=a(75324);const m={class:"policy-info"},v={class:"dx-button-text"},w={key:1},f={class:"login-link"};var p=(0,o.aZ)({__name:"create-account-form",props:{redirectLink:{},buttonLink:{}},setup(e){const t=e,a=(0,r.tv)(),p=(0,s.iH)(!1),g=(0,s.qj)({email:"",password:""}),k=async()=>{const{email:e,password:o}=g;p.value=!0;const i=await u.Y.createAccount(e,o);p.value=!1,i.isOk?a.push(t.buttonLink):(0,n.Z)(i.message,"error",2e3)};function _(e){return e.value===g.password}return(e,a)=>{const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("form",{class:"create-account-form",onSubmit:(0,i.iM)(k,["prevent"])},[(0,o.Wm)((0,s.SU)(d.ZP),{"form-data":g,disabled:p.value},{createAccount:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("span",v,[p.value?((0,o.wg)(),(0,o.j4)((0,s.SU)(l.Z),{key:0,width:"24px",height:"24px",visible:!0})):(0,o.kq)("",!0),p.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",w,"Create a new account"))])])])),default:(0,o.w5)((()=>[(0,o.Wm)((0,s.SU)(d.wy),{"data-field":"email","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Email",mode:"email",value:"jheart@dx-email.com"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,s.SU)(d.VD),{message:"Email is required"}),(0,o.Wm)((0,s.SU)(d.ok),{message:"Email is invalid"}),(0,o.Wm)((0,s.SU)(d.kN),{visible:!1})])),_:1},8,["editor-options"]),(0,o.Wm)((0,s.SU)(d.wy),{"data-field":"password","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Password",mode:"password",value:"password"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,s.SU)(d.VD),{message:"Password is required"}),(0,o.Wm)((0,s.SU)(d.kN),{visible:!1})])),_:1}),(0,o.Wm)((0,s.SU)(d.wy),{"data-field":"confirmedPassword","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Confirm Password",mode:"password",value:"password"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,s.SU)(d.VD),{message:"Password is required"}),(0,o.Wm)((0,s.SU)(d.gu),{message:"Passwords do not match","validation-callback":_}),(0,o.Wm)((0,s.SU)(d.kN),{visible:!1})])),_:1}),(0,o.Wm)((0,s.SU)(d.wy),null,{default:(0,o.w5)((()=>[(0,o._)("div",m,[(0,o.Uk)(" By creating an account, you agree to the "),(0,o.Wm)(n,{to:t.redirectLink},{default:(0,o.w5)((()=>[(0,o.Uk)(" Terms of Service ")])),_:1},8,["to"]),(0,o.Uk)(" and "),(0,o.Wm)(n,{to:t.redirectLink},{default:(0,o.w5)((()=>[(0,o.Uk)(" Privacy Policy ")])),_:1},8,["to"])])])),_:1}),(0,o.Wm)((0,s.SU)(d.sY),null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,s.SU)(d.lU),{width:"100%",type:"default",template:"createAccount","use-submit-behavior":!0})])),_:1})])),_:1},8,["form-data","disabled"]),(0,o._)("div",f,[(0,o.Uk)(" Have an account? "),(0,o.Wm)(n,{to:t.redirectLink},{default:(0,o.w5)((()=>[(0,o.Uk)(" Sign In ")])),_:1},8,["to"])]),(0,o.Wm)(c["default"])],32)}}}),g=a(97179);const k=(0,g.Z)(p,[["__scopeId","data-v-487710f4"]]);var _=k},75324:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var o=a(49256),i=a(47919),s=a(37252),d=a(12061);const l=e=>((0,o.dD)("data-v-1e6aac99"),e=e(),(0,o.Cn)(),e),n={class:"oauth-button-container"},r=l((()=>(0,o._)("p",null,"or",-1)));var u=(0,o.aZ)({__name:"login-oauth",setup(e){const{currentTheme:t}=d.themeService,a=(0,o.Fl)((()=>"dark"===t.value?"outlined":"contained"));return(e,t)=>((0,o.wg)(),(0,o.iD)("div",n,[r,(0,o.Wm)((0,i.SU)(s.Z),{width:"100%",icon:"icons/google-logo.svg",text:"Login with Google","styling-mode":a.value},null,8,["styling-mode"]),(0,o.Wm)((0,i.SU)(s.Z),{width:"100%",icon:"icons/microsoft-logo.svg",text:"Login with Microsoft","styling-mode":a.value},null,8,["styling-mode"])]))}}),c=a(97179);const m=(0,c.Z)(u,[["__scopeId","data-v-1e6aac99"]]);var v=m}}]);