webpackJsonp([6],{"79jY":function(e,t){},OoWA:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("f57E"),o=a("Dd8w"),i=a.n(o),s=a("NYxO"),r=a("vLgD"),l=a("wliq"),u={props:["info"],data:function(){return{form:{roleid:"",username:"",password:"",status:1},formLabelWidth:"120px",pageInfo:{pageSize:2,page:1}}},mounted:function(){var e=this;this.requestRoleList(),this.event.$on("pageInfo",function(t){e.pageInfo=t})},computed:i()({},Object(s.c)({roleList:"role/roleList"})),methods:i()({},Object(s.b)({requestRoleList:"role/roleListActions",requestManageList:"manage/manageListActions",requestManageCount:"manage/manageCountActions"}),{cancel:function(){this.info.showAdd=!1,this.form={roleid:"",username:"",password:"",status:1}},confirm:function(){var e=this;""!=this.form.username&&""!=this.form.password&&""!=this.form.roleid&&Object(r.b)(this.form).then(function(t){Object(l.b)(t.data.msg),e.cancel(),e.requestManageCount(),e.requestManageList({size:e.pageInfo.pageSize,page:e.pageInfo.page})})},getDetail:function(e){var t=this;console.log(e),Object(r.n)({uid:e}).then(function(e){t.form=e.data.list,t.form.password=""})},update:function(){var e=this;""!=this.form.username&&""!=this.form.password&&Object(r.x)(this.form).then(function(t){Object(l.b)(t.data.msg),e.cancel(),e.requestManageList({size:e.pageInfo.pageSize,page:e.pageInfo.page})})}})},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:e.info.title,visible:e.info.showAdd},on:{"update:visible":function(t){return e.$set(e.info,"showAdd",t)},close:e.cancel}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"所属角色","label-width":e.formLabelWidth}},[a("el-select",{model:{value:e.form.roleid,callback:function(t){e.$set(e.form,"roleid",t)},expression:"form.roleid"}},[a("el-option",{attrs:{label:"--请选择--",value:"",disabled:""}}),e._v(" "),e._l(e.roleList,function(e){return a("el-option",{key:e.id,attrs:{label:e.rolename,value:e.id}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"用户名","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码","label-width":e.formLabelWidth}},[a("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态","label-width":e.formLabelWidth}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ccc","active-value":1,"inactive-value":2},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancel}},[e._v("取 消")]),e._v(" "),e.info.isAdd?a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")]):a("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v("修 改")])],1)],1)],1)},staticRenderFns:[]};var f=a("VU/8")(u,c,!1,function(e){a("79jY")},null,null).exports,d={data:function(){return{pageInfo:{pageSize:2,page:1}}},computed:i()({},Object(s.c)({manageList:"manage/manageList",manageCount:"manage/manageCount"})),mounted:function(){this.requestManageCount(),this.requestManageList({size:this.pageInfo.pageSize,page:1}),this.event.$emit("pageInfo",this.pageInfo)},methods:i()({},Object(s.b)({requestManageList:"manage/manageListActions",requestManageCount:"manage/manageCountActions"}),{updateSpecList:function(e){this.pageInfo.page=e,this.event.$emit("pageInfo",this.pageInfo),this.requestManageList({size:this.pageInfo.pageSize,page:e})},edit:function(e){this.$emit("edit",e)},del:function(e){var t=this;this.$confirm("确定删除该管理员?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(){Object(r.g)({uid:e}).then(function(e){t.requestManageCount(),t.manageList.length<2&&t.pageInfo.page>1&&(t.pageInfo.page=t.pageInfo.page-1),t.requestManageList({size:t.pageInfo.pageSize,page:t.pageInfo.page})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}})},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.manageList,"row-key":"id",border:""}},[a("el-table-column",{attrs:{prop:"id",label:"用户编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"rolename",label:"所属角色"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?a("el-button",{attrs:{type:"primary"}},[e._v("启用")]):a("el-button",{attrs:{type:"danger"}},[e._v("禁止")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-row",[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.edit(t.row.uid)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return e.del(t.row.uid)}}},[e._v("删除")])],1)]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","pager-count":5,"page-size":e.pageInfo.pageSize,total:e.manageCount},on:{"current-change":e.updateSpecList}})],1)},staticRenderFns:[]};var m=a("VU/8")(d,p,!1,function(e){a("r5be")},null,null).exports,g={components:{vBread:n.a,vAdd:f,vList:m},data:function(){return{info:{showAdd:!1,title:"",isAdd:!0}}},methods:{add:function(){this.info.showAdd=!0,this.info.title="添加管理员",this.info.isAdd=!0},edit:function(e){this.info.showAdd=!0,this.info.title="修改管理员信息",this.info.isAdd=!1,this.$refs.add.getDetail(e)}}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-bread"),this._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:this.add}},[this._v("添加")]),this._v(" "),t("v-add",{ref:"add",attrs:{info:this.info}}),this._v(" "),t("v-list",{on:{edit:this.edit}})],1)},staticRenderFns:[]};var v=a("VU/8")(g,h,!1,function(e){a("iyU2")},"data-v-75d01318",null);t.default=v.exports},iyU2:function(e,t){},r5be:function(e,t){}});
//# sourceMappingURL=6.27e7f178dd2ead221005.js.map