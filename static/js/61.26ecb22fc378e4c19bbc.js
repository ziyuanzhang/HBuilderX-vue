webpackJsonp([61],{460:function(t,e,o){function a(t){o(844)}var d=o(1)(o(634),o(940),a,null,null);t.exports=d.exports},634:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(3),d=o.n(a),i=o(2);o.n(i);e.default={data:function(){return{addType:1,hotelData:{name:"",hotelName:"",hotelGroupCode:"",hotelCode:"",url:"http://"},url:"/settingApi"}},mounted:function(){},methods:{add:function(){var t=this;if(""==this.hotelData.hotelCode)return void this.msg("酒店代码不能为空");if(1==this.addType){i.Indicator.open();var e="http://api.ihotel.cn/s/url/"+this.hotelData.hotelCode.toUpperCase()+"_MOBILEPOS";console.log(e),this.$http.get(e,{timeout:1e4}).then(function(e){if(console.log(e.data),0==e.data.code){var o=e.data.data[0],a=o.url.split(";");if(a.length<3)return t.msg("地址服务配置错误"),void i.Indicator.close();t.hotelData.name=o.name,t.hotelData.hotelName=a[1],t.hotelData.hotelGroupCode=a[2],t.hotelData.url=a[0],i.Indicator.close(),t.save()}else t.msg(e.data.msg),i.Indicator.close()})}else{if(-1==this.hotelData.url.toUpperCase().indexOf("HTTP://")&&-1==this.hotelData.url.toUpperCase().indexOf("HTTPS://"))return void this.msg("不是合法的URL");this.save()}},save:function(){if(""==this.hotelData.name)return void this.msg("连接名称不能为空");if(""==this.hotelData.hotelName)return void this.msg("酒店名称不能为空");if(""==this.hotelData.hotelGroupCode)return void this.msg("集团代码不能为空");if(""==this.hotelData.url)return void this.msg("地址不能为空");this.hotelData.hotelCode=this.hotelData.hotelCode.toUpperCase(),this.hotelData.hotelGroupCode=this.hotelData.hotelGroupCode.toUpperCase();var t=localStorage.getItem("address");if(null==t)localStorage.setItem("address",d()(this.hotelData));else{var e=d()(this.hotelData);if(t.indexOf(e)>=0)return void this.msg("此地址已经添加");localStorage.setItem("address",t+"|"+e)}localStorage.setItem("gateway",d()(this.hotelData)),this.msg("添加成功"),this.$router.push({path:"/settingApiCloudDining"})},msg:function(t){o.i(i.Toast)({message:t,position:"bottom",duration:3e3})}}}},762:function(t,e,o){e=t.exports=o(455)(!0),e.push([t.i,".addApi .addTop{width:100%;height:.9867rem;background:#fff}.addApi .addTop .addTopBox{width:80%;height:.9867rem;margin:0 auto}.addApi .addTop .addTopBox .box{width:49%;text-align:center;height:.9867rem;display:inline-block}.addApi .addTop .addTopBox .box h2{font-size:.32rem;color:#333;display:block;line-height:.9333rem}.addApi .addTop .addTopBox .box span{margin:0 auto;width:30%;height:.0587rem;background:#646f83;display:none}.addApi .addTop .addTopBox .active span{display:block}.addApi .hotelCode{width:96%;background:#fff;margin:0 auto;margin-top:.4rem;height:auto;-webkit-box-shadow:0 0 .2133rem 0 #dadada;box-shadow:0 0 .2133rem 0 #dadada;border-radius:.1333rem}.addApi .hotelCode .codeBox{padding-top:.1333rem;padding-bottom:.5333rem}.addApi .hotelCode .codeBox .hotelBox{width:100%;height:.9867rem;margin-top:.3467rem}.addApi .hotelCode .codeBox .hotelBox span{display:inline-block;width:21%;margin-top:.1333rem;float:left;margin-left:.4rem;font-size:.3733rem}.addApi .hotelCode .codeBox .hotelBox .hotelInput{border:.0267rem solid #ccc;border-radius:.1333rem;padding-left:.1333rem;font-size:.4267rem;width:64%;height:.9867rem}.addApi .hotelCode .hotels{padding-bottom:.8rem;padding-top:.72rem;width:100%;height:.9867rem}.addApi .hotelCode .hotels .hotelBox{width:100%;height:.9867rem}.addApi .hotelCode .hotels .hotelBox span{display:inline-block;width:21%;margin-top:.1333rem;float:left;margin-left:.4rem;font-size:.3733rem}.addApi .hotelCode .hotels .hotelBox .hotelInput{border:.0267rem solid #ccc;border-radius:.1333rem;padding-left:.1333rem;font-size:.4267rem;width:64%;height:.9867rem}.addApi .button_box{width:100%;height:2rem}.addApi .button_box .addButton{width:36%;height:.9867rem;text-align:center;line-height:.9067rem;color:#fff;font-size:.3733rem;background:#ff8902;border-radius:.1867rem;display:inline-block;margin:.4rem auto .48rem}","",{version:3,sources:["E:/works/vue/mipos-front/src/components/pages/addApiCloudDining.vue"],names:[],mappings:"AACA,gBACE,WAAY,AACZ,gBAAkB,AAClB,eAAoB,CACrB,AACD,2BACE,UAAW,AACX,gBAAkB,AAClB,aAAe,CAChB,AACD,gCACE,UAAW,AACX,kBAAmB,AACnB,gBAAkB,AAClB,oBAAsB,CACvB,AACD,mCACE,iBAAmB,AACnB,WAAe,AACf,cAAe,AACf,oBAAuB,CACxB,AACD,qCACE,cAAe,AACf,UAAW,AACX,gBAAkB,AAClB,mBAAoB,AACpB,YAAc,CACf,AACD,wCACE,aAAe,CAChB,AACD,mBACE,UAAW,AACX,gBAAoB,AACpB,cAAe,AACf,iBAAmB,AACnB,YAAa,AACb,0CAA+C,AACvC,kCAAuC,AAC/C,sBAAyB,CAC1B,AACD,4BACE,qBAAuB,AACvB,uBAA0B,CAC3B,AACD,sCACE,WAAY,AACZ,gBAAkB,AAClB,mBAAsB,CACvB,AACD,2CACE,qBAAsB,AACtB,UAAW,AACX,oBAAsB,AACtB,WAAY,AACZ,kBAAoB,AACpB,kBAAqB,CACtB,AACD,kDACE,2BAAgC,AAChC,uBAAyB,AACzB,sBAAwB,AACxB,mBAAqB,AACrB,UAAW,AACX,eAAkB,CACnB,AACD,2BACE,qBAAuB,AACvB,mBAAqB,AACrB,WAAY,AACZ,eAAkB,CACnB,AACD,qCACE,WAAY,AACZ,eAAkB,CACnB,AACD,0CACE,qBAAsB,AACtB,UAAW,AACX,oBAAsB,AACtB,WAAY,AACZ,kBAAoB,AACpB,kBAAqB,CACtB,AACD,iDACE,2BAAgC,AAChC,uBAAyB,AACzB,sBAAwB,AACxB,mBAAqB,AACrB,UAAW,AACX,eAAkB,CACnB,AACD,oBACE,WAAY,AACZ,WAAa,CACd,AACD,+BACE,UAAW,AACX,gBAAkB,AAClB,kBAAmB,AACnB,qBAAuB,AACvB,WAAY,AACZ,mBAAqB,AACrB,mBAAoB,AACpB,uBAAyB,AACzB,qBAAsB,AACtB,wBAA4B,CAC7B",file:"addApiCloudDining.vue",sourcesContent:["\n.addApi .addTop {\n  width: 100%;\n  height: 0.9867rem;\n  background: #ffffff;\n}\n.addApi .addTop .addTopBox {\n  width: 80%;\n  height: 0.9867rem;\n  margin: 0 auto;\n}\n.addApi .addTop .addTopBox .box {\n  width: 49%;\n  text-align: center;\n  height: 0.9867rem;\n  display: inline-block;\n}\n.addApi .addTop .addTopBox .box h2 {\n  font-size: 0.32rem;\n  color: #333333;\n  display: block;\n  line-height: 0.9333rem;\n}\n.addApi .addTop .addTopBox .box span {\n  margin: 0 auto;\n  width: 30%;\n  height: 0.0587rem;\n  background: #646f83;\n  display: none;\n}\n.addApi .addTop .addTopBox .active span {\n  display: block;\n}\n.addApi .hotelCode {\n  width: 96%;\n  background: #ffffff;\n  margin: 0 auto;\n  margin-top: 0.4rem;\n  height: auto;\n  -webkit-box-shadow: 0 0 0.2133rem 0rem #dadada;\n          box-shadow: 0 0 0.2133rem 0rem #dadada;\n  border-radius: 0.1333rem;\n}\n.addApi .hotelCode .codeBox {\n  padding-top: 0.1333rem;\n  padding-bottom: 0.5333rem;\n}\n.addApi .hotelCode .codeBox .hotelBox {\n  width: 100%;\n  height: 0.9867rem;\n  margin-top: 0.3467rem;\n}\n.addApi .hotelCode .codeBox .hotelBox span {\n  display: inline-block;\n  width: 21%;\n  margin-top: 0.1333rem;\n  float: left;\n  margin-left: 0.4rem;\n  font-size: 0.3733rem;\n}\n.addApi .hotelCode .codeBox .hotelBox .hotelInput {\n  border: 0.0267rem solid #cccccc;\n  border-radius: 0.1333rem;\n  padding-left: 0.1333rem;\n  font-size: 0.4267rem;\n  width: 64%;\n  height: 0.9867rem;\n}\n.addApi .hotelCode .hotels {\n  padding-bottom: 0.8rem;\n  padding-top: 0.72rem;\n  width: 100%;\n  height: 0.9867rem;\n}\n.addApi .hotelCode .hotels .hotelBox {\n  width: 100%;\n  height: 0.9867rem;\n}\n.addApi .hotelCode .hotels .hotelBox span {\n  display: inline-block;\n  width: 21%;\n  margin-top: 0.1333rem;\n  float: left;\n  margin-left: 0.4rem;\n  font-size: 0.3733rem;\n}\n.addApi .hotelCode .hotels .hotelBox .hotelInput {\n  border: 0.0267rem solid #cccccc;\n  border-radius: 0.1333rem;\n  padding-left: 0.1333rem;\n  font-size: 0.4267rem;\n  width: 64%;\n  height: 0.9867rem;\n}\n.addApi .button_box {\n  width: 100%;\n  height: 2rem;\n}\n.addApi .button_box .addButton {\n  width: 36%;\n  height: 0.9867rem;\n  text-align: center;\n  line-height: 0.9067rem;\n  color: #fff;\n  font-size: 0.3733rem;\n  background: #ff8902;\n  border-radius: 0.1867rem;\n  display: inline-block;\n  margin: 0.4rem auto 0.48rem;\n}\n"],sourceRoot:""}])},844:function(t,e,o){var a=o(762);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(456)("27bcb054",a,!0)},940:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"addApi"},[o("topNav",{attrs:{title:"添加连接",url:"/settingApiCloudDining"}}),t._v(" "),o("div",{staticClass:"addTop"},[o("div",{staticClass:"addTopBox"},[o("div",{staticClass:"box",class:{active:1==t.addType},on:{click:function(e){t.addType=1}}},[o("h2",[t._v("根据代码添加")]),t._v(" "),o("span")]),t._v(" "),o("div",{staticClass:"box",class:{active:2==t.addType},on:{click:function(e){t.addType=2}}},[o("h2",[t._v("手工添加")]),t._v(" "),o("span")])])]),t._v(" "),1==t.addType?o("div",{staticClass:"hotelCode"},[o("div",{staticClass:"hotels"},[o("div",{staticClass:"hotelBox"},[o("span",[t._v("酒店代码")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.hotelData.hotelCode,expression:"hotelData.hotelCode"}],staticClass:"hotelInput",staticStyle:{"text-transform":"uppercase"},attrs:{type:"text"},domProps:{value:t.hotelData.hotelCode},on:{input:function(e){e.target.composing||t.$set(t.hotelData,"hotelCode",e.target.value)}}})])])]):o("div",{staticClass:"hotelCode"},[o("div",{staticClass:"codeBox"},[o("div",{staticClass:"hotelBox"},[o("span",[t._v("连接名称")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.hotelData.name,expression:"hotelData.name"}],staticClass:"hotelInput",attrs:{type:"text"},domProps:{value:t.hotelData.name},on:{input:function(e){e.target.composing||t.$set(t.hotelData,"name",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"hotelBox"},[o("span",[t._v("酒店名称")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.hotelData.hotelName,expression:"hotelData.hotelName"}],staticClass:"hotelInput",attrs:{type:"text"},domProps:{value:t.hotelData.hotelName},on:{input:function(e){e.target.composing||t.$set(t.hotelData,"hotelName",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"hotelBox"},[o("span",[t._v("集团代码")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.hotelData.hotelGroupCode,expression:"hotelData.hotelGroupCode"}],staticClass:"hotelInput",staticStyle:{"text-transform":"uppercase"},attrs:{type:"text"},domProps:{value:t.hotelData.hotelGroupCode},on:{input:function(e){e.target.composing||t.$set(t.hotelData,"hotelGroupCode",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"hotelBox"},[o("span",[t._v("酒店代码")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.hotelData.hotelCode,expression:"hotelData.hotelCode"}],staticClass:"hotelInput",staticStyle:{"text-transform":"uppercase"},attrs:{type:"text"},domProps:{value:t.hotelData.hotelCode},on:{input:function(e){e.target.composing||t.$set(t.hotelData,"hotelCode",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"hotelBox"},[o("span",[t._v("连接地址")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.hotelData.url,expression:"hotelData.url"}],staticClass:"hotelInput",attrs:{type:"text"},domProps:{value:t.hotelData.url},on:{input:function(e){e.target.composing||t.$set(t.hotelData,"url",e.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"button_box"},[o("div",{staticClass:"addButton",on:{click:t.add}},[t._v("添加")])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=61.26ecb22fc378e4c19bbc.js.map