(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33f4b978"],{"498a":function(t,e,r){"use strict";var a=r("23e7"),n=r("58a8").trim,s=r("c8d2");a({target:"String",proto:!0,forced:s("trim")},{trim:function(){return n(this)}})},bd8e:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v("Query Explorer")]),t._v("See "),r("a",{attrs:{href:"https://docs.activitywatch.net/en/latest/examples/querying-data.html"}},[t._v("the documentation")]),t._v(" for help on how to write queries."),r("hr"),t.error?r("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),r("form",[r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group col-md-6"},[t._v("Start"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.startdate,expression:"startdate"}],staticClass:"form-control",attrs:{type:"date",max:t.today},domProps:{value:t.startdate},on:{input:function(e){e.target.composing||(t.startdate=e.target.value)}}})]),r("div",{staticClass:"form-group col-md-6"},[t._v("End"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.enddate,expression:"enddate"}],staticClass:"form-control",attrs:{type:"date",max:t.tomorrow},domProps:{value:t.enddate},on:{input:function(e){e.target.composing||(t.enddate=e.target.value)}}})])]),r("div",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.query_code,expression:"query_code"}],staticClass:"form-control",staticStyle:{"font-family":"monospace"},attrs:{rows:"4"},domProps:{value:t.query_code},on:{input:function(e){e.target.composing||(t.query_code=e.target.value)}}})]),r("div",{staticClass:"form-inline"},[r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.query()}}},[t._v("Query")])]),r("span",{staticStyle:{"padding-left":"1em"}}),t._v(t._s(t.eventcount_str))])]),r("hr"),r("aw-selectable-eventview",{attrs:{events:t.events,event_type:t.event_type}})],1)},n=[],s=(r("277d"),r("d81d"),r("ac1f"),r("1276"),r("498a"),r("96cf"),r("1da1")),o=r("c1df"),i=r.n(o),c=i()().startOf("day"),d=i()(c).add(24,"hours"),u={name:"QueryExplorer",data:function(){return{query_code:'afk_events = query_bucket(find_bucket("aw-watcher-afk_"));\nwindow_events = query_bucket(find_bucket("aw-watcher-window_"));\nwindow_events = filter_period_intersect(window_events, filter_keyvals(afk_events, "status", ["not-afk"]));\nmerged_events = merge_events_by_keys(window_events, ["app", "title"]);\nRETURN = sort_by_duration(merged_events);',event_type:"currentwindow",events:[],today:c.format(),tomorrow:d.format(),error:"",startdate:c.format("YYYY-MM-DD"),enddate:d.format("YYYY-MM-DD")}},computed:{eventcount_str:function(){return Array.isArray(this.events)?"Number of events: "+this.events.length:""}},methods:{query:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.query_code.split(";").map((function(t){return t.trim()+";"})),r=[i()(this.startdate).format()+"/"+i()(this.enddate).format()],t.prev=2,t.next=5,this.$aw.query(r,e);case 5:a=t.sent,this.events=a[0],this.error="",t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),this.error=t.t0.response.data.message;case 13:case"end":return t.stop()}}),t,this,[[2,10]])})));function e(){return t.apply(this,arguments)}return e}()}},v=u,m=r("2877"),l=Object(m["a"])(v,a,n,!1,null,"002aec07",null);e["default"]=l.exports},c8d2:function(t,e,r){var a=r("d039"),n=r("5899"),s="​᠎";t.exports=function(t){return a((function(){return!!n[t]()||s[t]()!=s||n[t].name!==t}))}}}]);
//# sourceMappingURL=chunk-33f4b978.5700307f.js.map