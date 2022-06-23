"use strict";(self["webpackChunknft_ship"]=self["webpackChunknft_ship"]||[]).push([[359],{51359:function(t,A,s){s.r(A),s.d(A,{default:function(){return i}});var a=function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("Layout",{attrs:{title:"个人中心","has-nav":!1}},[s("div",{staticClass:"personal-center"},[s("div",{staticClass:"personal-list"},[s("router-link",{attrs:{to:"/resetAvatar"}},[s("span",[t._v("头像")]),s("div",[s("img",{attrs:{src:t.avatar,alt:"头像"}}),s("Icon",{attrs:{name:"right"}})],1)]),s("router-link",{attrs:{to:"/resetNickname"}},[s("span",[t._v("昵称")]),s("div",[s("span",[t._v(t._s(t.nickname))]),s("Icon",{attrs:{name:"right"}})],1)]),s("router-link",{attrs:{to:"/resetPhone"}},[s("span",[t._v("手机号")]),s("div",[s("span",[t._v(t._s(t.phone))]),s("Icon",{attrs:{name:"right"}})],1)]),s("router-link",{attrs:{to:"/realNameAuth"}},[s("span",[t._v("实名认证")]),s("div",[t.isAuth?s("span",[s("Icon",{staticClass:"success",attrs:{name:"success"}}),t._v(" 已认证 ")],1):s("span",{staticClass:"red-circle"},[t._v("未认证")]),s("Icon",{attrs:{name:"right"}})],1)]),s("router-link",{attrs:{to:"/password"}},[s("span",[t._v("登录密码")]),s("div",[t.isSetPassword?s("span",[s("Icon",{staticClass:"success",attrs:{name:"success"}}),t._v(" 已设置 ")],1):s("span",{staticClass:"red-circle"},[t._v(" 未设置 ")]),s("Icon",{attrs:{name:"right"}})],1)]),s("router-link",{attrs:{to:"/logout"}},[s("span",[t._v("账号注销")]),s("Icon",{attrs:{name:"right"}})],1)],1)])])},c=[],n=s(25931),o={name:"PersonalCenterView",data:function(){return{avatar:n,nickname:"唯一",phone:"158****3638",isAuth:!1,isSetPassword:!0}}},r=o,p=s(1001),e=(0,p.Z)(r,a,c,!1,null,"7e585519",null),i=e.exports},25931:function(t){t.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=359-legacy.72ce705f.js.map