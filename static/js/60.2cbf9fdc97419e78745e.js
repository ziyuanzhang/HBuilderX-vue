webpackJsonp([60],{462:function(e,c,t){function n(e){t(793)}var i=t(1)(t(636),t(892),n,null,null);e.exports=i.exports},636:function(e,c,t){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var n=t(2),i=(t.n(n),t(33)),o=t.n(i);c.default={data:function(){return{hotelName:"",SYS_DEVICE:"",authInfo:{}}},mounted:function(){n.Indicator.close(),this.SYS_DEVICE=this.$SYS_DEVICE;var e=localStorage.getItem("simgateway");if(null!=e){var c=JSON.parse(e);this.hotelName=c.hotelName}else this.msg("未设置参数，请点设置进行设置")},methods:{msg:function(e){t.i(n.Toast)({message:e,position:"bottom",duration:3e3})}},components:{home:o.a}}},711:function(e,c,t){c=e.exports=t(455)(!0),c.push([e.i,".checkIndex{width:100%;overflow:auto;height:100vh;background:#003963}.checkIndex .index_box{width:96%;height:auto;margin:0 auto}.checkIndex .index_box .topLogo{margin-top:.2933rem;width:100%;height:2.6933rem;background:#00213f;border-radius:.1333rem;background-color:rgba(0,0,0,.3);text-align:center}.checkIndex .index_box .topLogo .logofont{font-size:.75rem;color:#fff;line-height:2.6933rem;height:2.6933rem;overflow:hidden;width:100%;word-break:keep-all;text-overflow:ellipsis}.checkIndex .index_box .topLogo .bc{color:#fff}.checkIndex .index_box .topLogo .bc i{font-size:.32rem;padding:.2rem .4rem}.checkIndex .index_box .topLogo .red{color:red}.checkIndex .index_box .checkPackage{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:10px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:145px;border-radius:5px;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(3%,#fec004),color-stop(98%,#f9c117));background-image:linear-gradient(-180deg,#fec004 3%,#f9c117 98%)}.checkIndex .index_box .checkPackage .iconfont{font-size:50px;color:#fff;margin-right:37px}.checkIndex .index_box .checkPackage .checkPackageText{color:#fff}.checkIndex .index_box .checkPackage .checkPackageText .title{font-size:28px;text-align:left}.checkIndex .index_box .checkPackage .checkPackageText .descript{font-size:14px;text-align:left}.checkIndex .index_box .checkBox{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:10px 0}.checkIndex .index_box .checkBox .checkStatistics{-ms-flex-preferred-size:48.6%;flex-basis:48.6%;height:270px;background-image:-webkit-gradient(linear,left top,right top,color-stop(4%,#f44236),to(#f75348));background-image:linear-gradient(-270deg,#f44236 4%,#f75348);border-radius:5px}.checkIndex .index_box .checkBox .checkStatistics .iconfont{font-size:50px;color:#fff;margin-top:63px;text-align:center}.checkIndex .index_box .checkBox .checkStatistics .checkStatisticsText{color:#fff;text-align:center}.checkIndex .index_box .checkBox .checkStatistics .checkStatisticsText .title{font-size:28px}.checkIndex .index_box .checkBox .checkStatistics .checkStatisticsText .descript{font-size:14px}.checkIndex .index_box .checkBox .checkSet{-ms-flex-preferred-size:48.6%;flex-basis:48.6%;height:270px;background-image:-webkit-gradient(linear,left top,left bottom,from(#00bad4),color-stop(98%,#14c3dc));background-image:linear-gradient(-180deg,#00bad4,#14c3dc 98%);border-radius:5px}.checkIndex .index_box .checkBox .checkSet .icon-shezhi{font-size:50px;color:#fff;margin-top:63px}.checkIndex .index_box .checkBox .checkSet .checkSetText{color:#fff;text-align:center}.checkIndex .index_box .checkBox .checkSet .checkSetText .title{font-size:28px}.checkIndex .index_box .checkBox .checkSet .checkSetText .descript{font-size:14px}","",{version:3,sources:["E:/works/vue/mipos-front/src/components/pages/checkIndex.vue"],names:[],mappings:"AACA,YACE,WAAY,AACZ,cAAe,AACf,aAAc,AACd,kBAAoB,CACrB,AACD,uBACE,UAAW,AACX,YAAa,AACb,aAAe,CAChB,AACD,gCACE,oBAAsB,AACtB,WAAY,AACZ,iBAAkB,AAClB,mBAAoB,AACpB,uBAAyB,AACzB,gCAAqC,AACrC,iBAAmB,CACpB,AACD,0CACE,iBAAmB,AACnB,WAAY,AACZ,sBAAuB,AACvB,iBAAkB,AAClB,gBAAiB,AACjB,WAAY,AACZ,oBAAqB,AACrB,sBAAwB,CACzB,AACD,oCACE,UAAY,CACb,AACD,sCACE,iBAAmB,AACnB,mBAAuB,CACxB,AACD,qCACE,SAAW,CACZ,AACD,qCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,gBAAiB,AACjB,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,aAAc,AACd,kBAAmB,AACnB,8GAAqH,AACrH,gEAAoE,CACrE,AACD,+CACE,eAAgB,AAChB,WAAe,AACf,iBAAmB,CACpB,AACD,uDACE,UAAe,CAChB,AACD,8DACE,eAAgB,AAChB,eAAiB,CAClB,AACD,iEACE,eAAgB,AAChB,eAAiB,CAClB,AACD,iCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,aAAe,CAChB,AACD,kDACE,8BAA+B,AAC3B,iBAAkB,AACtB,aAAc,AACd,gGAAsG,AACtG,6DAAqE,AACrE,iBAAmB,CACpB,AACD,4DACE,eAAgB,AAChB,WAAe,AACf,gBAAiB,AACjB,iBAAmB,CACpB,AACD,uEACE,WAAe,AACf,iBAAmB,CACpB,AACD,8EACE,cAAgB,CACjB,AACD,iFACE,cAAgB,CACjB,AACD,2CACE,8BAA+B,AAC3B,iBAAkB,AACtB,aAAc,AACd,qGAA2G,AAC3G,8DAAoE,AACpE,iBAAmB,CACpB,AACD,wDACE,eAAgB,AAChB,WAAe,AACf,eAAiB,CAClB,AACD,yDACE,WAAe,AACf,iBAAmB,CACpB,AACD,gEACE,cAAgB,CACjB,AACD,mEACE,cAAgB,CACjB",file:"checkIndex.vue",sourcesContent:["\n.checkIndex {\n  width: 100%;\n  overflow: auto;\n  height: 100vh;\n  background: #003963;\n}\n.checkIndex .index_box {\n  width: 96%;\n  height: auto;\n  margin: 0 auto;\n}\n.checkIndex .index_box .topLogo {\n  margin-top: 0.2933rem;\n  width: 100%;\n  height: 2.6933rem;\n  background: #00213f;\n  border-radius: 0.1333rem;\n  background-color: rgba(0, 0, 0, 0.3);\n  text-align: center;\n}\n.checkIndex .index_box .topLogo .logofont {\n  font-size: 0.75rem;\n  color: #fff;\n  line-height: 2.6933rem;\n  height: 2.6933rem;\n  overflow: hidden;\n  width: 100%;\n  word-break: keep-all;\n  text-overflow: ellipsis;\n}\n.checkIndex .index_box .topLogo .bc {\n  color: #fff;\n}\n.checkIndex .index_box .topLogo .bc i {\n  font-size: 0.32rem;\n  padding: 0.2rem 0.4rem;\n}\n.checkIndex .index_box .topLogo .red {\n  color: red;\n}\n.checkIndex .index_box .checkPackage {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 145px;\n  border-radius: 5px;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(3%, #fec004), color-stop(98%, #f9c117));\n  background-image: linear-gradient(-180deg, #fec004 3%, #f9c117 98%);\n}\n.checkIndex .index_box .checkPackage .iconfont {\n  font-size: 50px;\n  color: #ffffff;\n  margin-right: 37px;\n}\n.checkIndex .index_box .checkPackage .checkPackageText {\n  color: #ffffff;\n}\n.checkIndex .index_box .checkPackage .checkPackageText .title {\n  font-size: 28px;\n  text-align: left;\n}\n.checkIndex .index_box .checkPackage .checkPackageText .descript {\n  font-size: 14px;\n  text-align: left;\n}\n.checkIndex .index_box .checkBox {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 10px 0;\n}\n.checkIndex .index_box .checkBox .checkStatistics {\n  -ms-flex-preferred-size: 48.6%;\n      flex-basis: 48.6%;\n  height: 270px;\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(4%, #f44236), to(#f75348));\n  background-image: linear-gradient(-270deg, #f44236 4%, #f75348 100%);\n  border-radius: 5px;\n}\n.checkIndex .index_box .checkBox .checkStatistics .iconfont {\n  font-size: 50px;\n  color: #ffffff;\n  margin-top: 63px;\n  text-align: center;\n}\n.checkIndex .index_box .checkBox .checkStatistics .checkStatisticsText {\n  color: #ffffff;\n  text-align: center;\n}\n.checkIndex .index_box .checkBox .checkStatistics .checkStatisticsText .title {\n  font-size: 28px;\n}\n.checkIndex .index_box .checkBox .checkStatistics .checkStatisticsText .descript {\n  font-size: 14px;\n}\n.checkIndex .index_box .checkBox .checkSet {\n  -ms-flex-preferred-size: 48.6%;\n      flex-basis: 48.6%;\n  height: 270px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#00bad4), color-stop(98%, #14c3dc));\n  background-image: linear-gradient(-180deg, #00bad4 0%, #14c3dc 98%);\n  border-radius: 5px;\n}\n.checkIndex .index_box .checkBox .checkSet .icon-shezhi {\n  font-size: 50px;\n  color: #ffffff;\n  margin-top: 63px;\n}\n.checkIndex .index_box .checkBox .checkSet .checkSetText {\n  color: #ffffff;\n  text-align: center;\n}\n.checkIndex .index_box .checkBox .checkSet .checkSetText .title {\n  font-size: 28px;\n}\n.checkIndex .index_box .checkBox .checkSet .checkSetText .descript {\n  font-size: 14px;\n}\n"],sourceRoot:""}])},793:function(e,c,t){var n=t(711);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(456)("6fd00f7d",n,!0)},892:function(e,c){e.exports={render:function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",{staticClass:"checkIndex"},[t("div",{staticClass:"topHeader"},[t("home",{attrs:{system:"2"}})],1),e._v(" "),t("div",{staticClass:"index_box"},[t("div",{staticClass:"topLogo"},[t("div",{staticClass:"logofont"},[e._v(e._s(e.hotelName))])]),e._v(" "),t("router-link",{staticClass:"checkPackage",attrs:{tag:"div",to:"/checkPackage"}},[t("div",{staticClass:"iconfont icon-goudui-"}),e._v(" "),t("div",{staticClass:"checkPackageText"},[t("p",{staticClass:"title"},[e._v("早餐核销")]),e._v(" "),t("p",{staticClass:"descript"},[e._v("支持刷房卡 / 手输房号")])])]),e._v(" "),t("div",{staticClass:"checkBox"},[t("router-link",{staticClass:"checkStatistics",attrs:{tag:"div",to:"/checkStatistics"}},[t("div",{staticClass:"iconfont icon-stat_icon"}),e._v(" "),t("div",{staticClass:"checkStatisticsText"},[t("p",{staticClass:"title"},[e._v("统计")]),e._v(" "),t("p",{staticClass:"descript"},[e._v("未用／已用")])])]),e._v(" "),t("router-link",{staticClass:"checkSet",attrs:{tag:"div",to:"/checkSet"}},[t("div",{staticClass:"iconfont icon-shezhi"}),e._v(" "),t("div",{staticClass:"checkSetText"},[t("p",{staticClass:"title"},[e._v("设置")])])])],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=60.2cbf9fdc97419e78745e.js.map