(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b7a42de"],{"58da":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[l("div",[l("el-input",{staticStyle:{width:"300px","margin-right":"10px"},attrs:{placeholder:"通过员工名搜索员工,记得回车哦...","prefix-icon":"el-icon-search",clearable:""},on:{clear:e.initEmps},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.initEmps(t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),l("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.initEmps}},[e._v("搜索")]),l("el-button",{attrs:{type:"primary"}},[l("i",{staticClass:"fa fa-angle-double-down",attrs:{"aria-hidden":"true"}}),e._v("\n                  高级搜索\n              ")])],1),l("div",[l("el-button",{attrs:{type:"success"}},[l("i",{staticClass:"fa fa-arrow-up",attrs:{"aria-hidden":"true"}}),e._v("\n                  导入数据\n              ")]),l("el-button",{attrs:{type:"success"}},[l("i",{staticClass:"fa fa-arrow-down",attrs:{"aria-hidden":"true"}}),e._v("\n                  导出数据\n              ")]),l("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.showEmpView}},[e._v("\n\n                  添加用户\n              ")])],1)]),l("div",{staticStyle:{"margin-top":"10px"}},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.emps,stripe:"",border:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),l("el-table-column",{attrs:{prop:"name",label:"姓名",fixed:"",align:"left",width:"100"}}),l("el-table-column",{attrs:{prop:"workID",label:"工号",align:"left",width:"90"}}),l("el-table-column",{attrs:{prop:"gender",label:"性别",align:"left",width:"50"}}),l("el-table-column",{attrs:{prop:"birthday",label:"出生日期",align:"left",width:"100"}}),l("el-table-column",{attrs:{prop:"idCard",label:"身份证号",align:"left",width:"170"}}),l("el-table-column",{attrs:{prop:"wedlock",label:"婚姻状况",align:"left",width:"90"}}),l("el-table-column",{attrs:{prop:"nation.name",label:"民族",align:"left",width:"50"}}),l("el-table-column",{attrs:{prop:"nativePlace",label:"籍贯",align:"left",width:"50"}}),l("el-table-column",{attrs:{prop:"politicsstatus.name",label:"政治面貌",align:"left",width:"90"}}),l("el-table-column",{attrs:{prop:"email",label:"电子邮件",align:"left",width:"90"}}),l("el-table-column",{attrs:{prop:"phone",label:"电话号码",align:"left",width:"115"}}),l("el-table-column",{attrs:{prop:"address",label:"联系地址",align:"left",width:"150"}}),l("el-table-column",{attrs:{prop:"department.name",label:"所属部门",align:"left",width:"90"}}),l("el-table-column",{attrs:{prop:"jobLevel.name",label:"职位",align:"left",width:"90"}}),l("el-table-column",{attrs:{prop:"position.name",label:"职称",align:"left",width:"90"}}),l("el-table-column",{attrs:{prop:"engageForm",label:"聘用形式",align:"left",width:"90"}}),l("el-table-column",{attrs:{prop:"beginDate",label:"入职日期",align:"left",width:"100"}}),l("el-table-column",{attrs:{prop:"conversionTime",label:"转正日期",align:"left",width:"100"}}),l("el-table-column",{attrs:{prop:"beginContract",label:"合同起始日期",align:"left",width:"100"}}),l("el-table-column",{attrs:{prop:"endContract",label:"合同截止日期",align:"left",width:"100"}}),l("el-table-column",{attrs:{prop:"contractTerm",label:"合同期限",align:"left",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-tag",[e._v(e._s(t.row.contractTerm))]),e._v("\n                      年\n                  ")]}}])}),l("el-table-column",{attrs:{prop:"tiptopDegree",label:"最高学历",align:"left",width:"90"}}),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{staticStyle:{padding:"3px"},attrs:{size:"mini"}},[e._v("编辑")]),l("el-button",{staticStyle:{padding:"3px"},attrs:{size:"mini",type:"primary"}},[e._v("查看高级资料")]),l("el-button",{staticStyle:{padding:"3px"},attrs:{size:"mini",type:"danger"},on:{click:function(l){return e.deleteEmp(t.row)}}},[e._v("删除")])]}}])})],1),l("div",{staticClass:"block",staticStyle:{display:"flex","justify-content":"right"}},[l("el-pagination",{attrs:{"current-page":e.page,"page-size":e.size,layout:"sizes, prev, pager, next, jumper, ->, total, slot",total:e.total},on:{"size-change":e.sizeChange,"current-change":e.currentChange,"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t}}})],1)],1),l("div",[l("el-dialog",{attrs:{title:"添加员工",visible:e.dialogVisible,width:"70%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("el-form",{ref:"empForm",attrs:{model:e.emp,rules:e.rules}},[l("el-row",[l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"姓名",prop:"emp.name"}},[l("el-input",{staticStyle:{width:"150px"},attrs:{"prefix-icon":"el-icon-edit",placeholder:"请输入员工姓名..."},model:{value:e.emp.name,callback:function(t){e.$set(e.emp,"name",t)},expression:"emp.name"}})],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"性别",prop:"emp.gender"}},[l("el-radio-group",{model:{value:e.emp.gender,callback:function(t){e.$set(e.emp,"gender",t)},expression:"emp.gender"}},[l("el-radio",{attrs:{label:"男"}},[e._v("男")]),l("el-radio",{attrs:{label:"女"}},[e._v("女")])],1)],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"出生日期",pop:"emp.birthday"}},[l("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.emp.birthday,callback:function(t){e.$set(e.emp,"birthday",t)},expression:"emp.birthday"}})],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"政治面貌",prop:"emp.politicId"}},[l("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择活动区域"},model:{value:e.emp.politicId,callback:function(t){e.$set(e.emp,"politicId",t)},expression:"emp.politicId"}},e._l(e.politicsstatus,(function(e){return l("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"民族",prop:"emp.nationId"}},[l("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择活动区域"},model:{value:e.emp.nationId,callback:function(t){e.$set(e.emp,"nationId",t)},expression:"emp.nationId"}},e._l(e.nations,(function(e){return l("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"籍贯",prop:"emp.nativePlace"}},[l("el-input",{staticStyle:{width:"100px"},model:{value:e.emp.nativePlace,callback:function(t){e.$set(e.emp,"nativePlace",t)},expression:"emp.nativePlace"}})],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"电子邮箱",prop:"emp.email"}},[l("el-input",{staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-message"},model:{value:e.emp.email,callback:function(t){e.$set(e.emp,"email",t)},expression:"emp.email"}})],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"联系地址",prop:"emp.address"}},[l("el-input",{staticStyle:{width:"150px"},attrs:{"prefix-icon":"el-icon-edit"},model:{value:e.emp.address,callback:function(t){e.$set(e.emp,"address",t)},expression:"emp.address"}})],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"职位",prop:"emp.posId"}},[l("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择职位"},model:{value:e.emp.posId,callback:function(t){e.$set(e.emp,"posId",t)},expression:"emp.posId"}},e._l(e.positions,(function(e){return l("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"职称",prop:"emp.jobLevelId"}},[l("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择职称"},model:{value:e.emp.jobLevel,callback:function(t){e.$set(e.emp,"jobLevel",t)},expression:"emp.jobLevel"}},e._l(e.jobLevel,(function(e){return l("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"所属部门",prop:"emp.departmentId"}},[l("el-popover",{attrs:{placement:"right",title:"请选择部门",width:"200",trigger:"manual"},model:{value:e.popVisable,callback:function(t){e.popVisable=t},expression:"popVisable"}},[l("el-tree",{attrs:{data:e.allDeps,"default-expand-all":"",props:e.defaultProps},on:{"node-click":e.handleNodeClick}}),l("div",{staticStyle:{width:"150px",display:"inline-flex","font-size":"13px",border:"1px solid #dedede",height:"26px","border-radius":"5px",cursor:"pointer","align-items":"center","padding-left":"8px","box-sizing":"border-box"},attrs:{slot:"reference"},on:{click:e.showDepView},slot:"reference"},[e._v(e._s(e.inputDepname)+"\n\n                                  ")])],1)],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"电话号码",prop:"emp.phone"}},[l("el-input",{staticStyle:{width:"150px"},attrs:{"prefix-icon":"el-icon-phone"},model:{value:e.emp.phone,callback:function(t){e.$set(e.emp,"phone",t)},expression:"emp.phone"}})],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"工号",prop:"emp.workID"}},[l("el-input",{staticStyle:{width:"150px"},attrs:{disabled:""},model:{value:e.emp.workID,callback:function(t){e.$set(e.emp,"workID",t)},expression:"emp.workID"}})],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"学历",prop:"emp.tiptopDegree"}},[l("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择学历"},model:{value:e.emp.tiptopDegree,callback:function(t){e.$set(e.emp,"tiptopDegree",t)},expression:"emp.tiptopDegree"}},e._l(e.tiptopDegree,(function(e){return l("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"毕业院校",prop:"emp.school"}},[l("el-input",{staticStyle:{width:"150px"},attrs:{"prefix-icon":"el-icon-edit"},model:{value:e.emp.school,callback:function(t){e.$set(e.emp,"school",t)},expression:"emp.school"}})],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"专业名称",prop:"emp.specialty"}},[l("el-input",{staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-edit"},model:{value:e.emp.specialty,callback:function(t){e.$set(e.emp,"specialty",t)},expression:"emp.specialty"}})],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"入职日期",pop:"emp.beginDate"}},[l("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.emp.beginDate,callback:function(t){e.$set(e.emp,"beginDate",t)},expression:"emp.beginDate"}})],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"转正日期",pop:"emp.conversionTime"}},[l("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.emp.conversionTime,callback:function(t){e.$set(e.emp,"conversionTime",t)},expression:"emp.conversionTime"}})],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"合同起始日期",pop:"emp.beginContract"}},[l("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.emp.beginContract,callback:function(t){e.$set(e.emp,"beginContract",t)},expression:"emp.beginContract"}})],1)],1),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"合同终止日期",pop:"emp.endContract"}},[l("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.emp.endContract,callback:function(t){e.$set(e.emp,"endContract",t)},expression:"emp.endContract"}})],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"身份证号",prop:"emp.idCard"}},[l("el-input",{staticStyle:{width:"250px"},attrs:{"prefix-icon":"el-icon-edit"},model:{value:e.emp.idCard,callback:function(t){e.$set(e.emp,"idCard",t)},expression:"emp.idCard"}})],1)],1),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"聘用形式",prop:"emp.engageForm"}},[l("el-radio-group",{model:{value:e.emp.engageForm,callback:function(t){e.$set(e.emp,"engageForm",t)},expression:"emp.engageForm"}},[l("el-radio",{attrs:{label:"劳务合同"}},[e._v("劳务合同")]),l("el-radio",{attrs:{label:"劳动合同"}},[e._v("劳动合同")])],1)],1)],1),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"婚姻状况",prop:"emp.wedlock"}},[l("el-radio-group",{model:{value:e.emp.wedlock,callback:function(t){e.$set(e.emp,"wedlock",t)},expression:"emp.wedlock"}},[l("el-radio",{attrs:{label:"已婚"}},[e._v("已婚")]),l("el-radio",{attrs:{label:"未婚"}},[e._v("未婚")]),l("el-radio",{attrs:{label:"离异"}},[e._v("离异")])],1)],1)],1)],1)],1),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:e.doAddEmp}},[e._v("确 定")])],1)],1)],1)])},i=[],o=(l("7f7f"),{name:"EmpBasic",data:function(){return{dialogVisible:!1,defaultProps:{children:"children",label:"name"},allDeps:[],emps:[],loading:!1,popVisable:!1,total:0,page:1,size:10,keyword:"",emp:{name:null,gender:"男",birthday:"1990-01-01",idCard:"610122199001011256",wedlock:"已婚",nationId:1,nativePlace:"陕西",politicId:13,email:"laowang@qq.com",phone:null,address:"深圳市南山区",departmentId:null,jobLevelId:9,posId:29,engageForm:"劳务合同",tiptopDegree:"本科",specialty:"信息管理与信息系统",school:"深圳大学",beginDate:"2018-01-01",workState:"在职",workID:"00000001",contractTerm:2,conversionTime:"2018-04-01",notWorkDate:null,beginContract:"2018-01-01",endContract:"2020-01-01",workAge:null},jobLevel:[],nations:[],politicsstatus:[],positions:[],tiptopDegree:["博士","硕士","本科","大专","高中","初中","小学","其他"],inputDepname:"",rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],gender:[{required:!0,message:"请输入性别",trigger:"blur"}],idCard:[{required:!0,message:"请输入身份证",trigger:"blur"},{pattern:"\n/^[1-9]\\d{5}(18|19|20|(3\\d))\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$/",message:"身份证号码格式不正确",trigger:"blur"}],wedlock:[{required:!0,message:"请输入婚姻状况",trigger:"blur"}],nationId:[{required:!0,message:"请输入民族",trigger:"blur"}],nativePlace:[{required:!0,message:"请输入籍贯",trigger:"blur"}],politicId:[{required:!0,message:"请输入政治面貌",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"}],address:[{required:!0,message:"请输入住址",trigger:"blur"}],departmentId:[{required:!0,message:"请输入部门",trigger:"blur"}],jobLevelId:[{required:!0,message:"请输入工作级别",trigger:"blur"}],posId:[{required:!0,message:"请输入职位",trigger:"blur"}],engageForm:[{required:!0,message:"请输入用户名",trigger:"blur"}],tiptopDegree:[{required:!0,message:"请输入最高学历",trigger:"blur"}],specialty:[{required:!0,message:"请输入专业",trigger:"blur"}],school:[{required:!0,message:"请输入学校",trigger:"blur"}],beginDate:[{required:!0,message:"请输入入职日期",trigger:"blur"}],workState:[{required:!0,message:"请输入工作状态",trigger:"blur"}],workID:[{required:!0,message:"请输入工号",trigger:"blur"}],contractTerm:[{required:!0,message:"请输入合同日期",trigger:"blur"}],conversionTime:[{required:!0,message:"请输入转正日期",trigger:"blur"}],notWorkDate:[{required:!0,message:"请输入用户名",trigger:"blur"}],beginContract:[{required:!0,message:"请输入用户名",trigger:"blur"}],endContract:[{required:!0,message:"请输入用户名",trigger:"blur"}],workAge:[{required:!0,message:"请输入工作年限",trigger:"blur"}]}}},mounted:function(){this.initEmps(),this.initSelectBoxData()},methods:{deleteEmp:function(e){var t=this;this.$confirm("此操作将永久删除【"+e.name+"】, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){console.log("data.id:"+e.id),t.deleteRequest("/employee/basic/"+e.id).then((function(e){e&&t.initEmps()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},doAddEmp:function(){var e=this;this.$refs["empForm"].validate((function(t){console.log("valid:"+t),t&&e.postRequest("/employee/basic/",e.emp).then((function(t){t&&(e.dialogVisible=!1,e.initEmps())}))}))},handleNodeClick:function(e){this.popVisable=!this.popVisable,this.emp.departmentId=e.id,this.inputDepname=e.name},showDepView:function(){this.popVisable=!this.popVisable},getMaxWorkID:function(){var e=this;this.getRequest("/employee/basic/maxWorkID/").then((function(t){t&&(e.emp.workID=t.obj)}))},initPositions:function(){var e=this;window.sessionStorage.getItem("positions")||this.getRequest("/employee/basic/positions/").then((function(t){e.positions=t}))},initSelectBoxData:function(){var e=this;console.log("initSelectBoxData:"),window.sessionStorage.getItem("deps")?(console.log(456),this.allDeps=JSON.parse(window.sessionStorage.getItem("deps"))):(console.log(123),this.getRequest("/employee/basic/deps").then((function(t){t&&(e.allDeps=t,window.sessionStorage.setItem("deps",JSON.stringify(t)))}))),window.sessionStorage.getItem("jobLevel")?this.jobLevel=JSON.parse(window.sessionStorage.getItem("jobLevel")):this.getRequest("/employee/basic/jobLevel").then((function(t){t&&(e.jobLevel=t,window.sessionStorage.setItem("jobLevel",JSON.stringify(t)))})),window.sessionStorage.getItem("nations")?this.nations=JSON.parse(window.sessionStorage.getItem("nations")):this.getRequest("/employee/basic/nations").then((function(t){t&&(e.nations=t,window.sessionStorage.setItem("nations",JSON.stringify(t)))})),window.sessionStorage.getItem("politicsstatus")?this.politicsstatus=JSON.parse(window.sessionStorage.getItem("politicsstatus")):this.getRequest("/employee/basic/politicsstatus").then((function(t){t&&(e.politicsstatus=t,window.sessionStorage.setItem("politicsstatus",JSON.stringify(t)))}))},showEmpView:function(){this.initPositions(),this.getMaxWorkID(),this.dialogVisible=!0},sizeChange:function(e){this.size=e,this.initEmps()},currentChange:function(e){this.page=e,this.initEmps()},initEmps:function(){var e=this;this.emps=[],this.loading=!0,this.getRequest("/employee/basic/?page="+this.page+"&size="+this.size+"&keyword="+this.keyword).then((function(t){e.loading=!1,t&&(e.emps=t.data,e.total=t.total)}))}}}),r=o,n=l("2877"),s=Object(n["a"])(r,a,i,!1,null,"456349b0",null);t["default"]=s.exports},8759:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[e._v("高级资料")])},i=[],o={name:"EmpAdv"},r=o,n=l("2877"),s=Object(n["a"])(r,a,i,!1,null,"0e83a7a5",null);t["default"]=s.exports},fd11:function(e,t,l){var a={"./EmpAdv.vue":"8759","./EmpBasic.vue":"58da"};function i(e){var t=o(e);return l(t)}function o(e){if(!l.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id="fd11"}}]);