// Compiled by ClojureScript 1.10.516 {}
goog.provide('reveal.slides');
goog.require('cljs.core');
reveal.slides.bulletpoints = (function reveal$slides$bulletpoints(items){
var li_attributes = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fragment"], null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.call(null,((function (li_attributes){
return (function (p1__12393_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"li","li",723558921),li_attributes,p1__12393_SHARP_],null));
});})(li_attributes))
,items)));
});
reveal.slides.note = (function reveal$slides$note(component){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside","aside",1414397537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"notes"], null),component], null);
});
reveal.slides.title_slide = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"ops 2019"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"tale of bmw and future devplatform"], null)], null);
reveal.slides.intro_myself = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"vertical-align:middle"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/kazesberger.jpg",new cljs.core.Keyword(null,"style","style",-496642736),"max-height:200px;"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Klaus Azesberger"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"@PsychodelicDad"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/bearingpoint.png"], null)], null)], null)], null)], null)], null);
reveal.slides.make_tag = (function reveal$slides$make_tag(tag,content){
return cljs.core.vec.call(null,cljs.core.cons.call(null,tag,content));
});
reveal.slides.table = (function reveal$slides$table(p__12394){
var vec__12395 = p__12394;
var seq__12396 = cljs.core.seq.call(null,vec__12395);
var rows = seq__12396;
var t = vec__12395;
return cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"white-space:nowrap;"], null),(function (){var iter__4523__auto__ = ((function (vec__12395,seq__12396,rows,t){
return (function reveal$slides$table_$_iter__12398(s__12399){
return (new cljs.core.LazySeq(null,((function (vec__12395,seq__12396,rows,t){
return (function (){
var s__12399__$1 = s__12399;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12399__$1);
if(temp__5720__auto__){
var s__12399__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12399__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12399__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12401 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12400 = (0);
while(true){
if((i__12400 < size__4522__auto__)){
var row = cljs.core._nth.call(null,c__4521__auto__,i__12400);
cljs.core.chunk_append.call(null,b__12401,reveal.slides.make_tag.call(null,new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4523__auto__ = ((function (i__12400,row,c__4521__auto__,size__4522__auto__,b__12401,s__12399__$2,temp__5720__auto__,vec__12395,seq__12396,rows,t){
return (function reveal$slides$table_$_iter__12398_$_iter__12402(s__12403){
return (new cljs.core.LazySeq(null,((function (i__12400,row,c__4521__auto__,size__4522__auto__,b__12401,s__12399__$2,temp__5720__auto__,vec__12395,seq__12396,rows,t){
return (function (){
var s__12403__$1 = s__12403;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12403__$1);
if(temp__5720__auto____$1){
var s__12403__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12403__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__12403__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__12405 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__12404 = (0);
while(true){
if((i__12404 < size__4522__auto____$1)){
var cell = cljs.core._nth.call(null,c__4521__auto____$1,i__12404);
cljs.core.chunk_append.call(null,b__12405,reveal.slides.make_tag.call(null,new cljs.core.Keyword(null,"td","td",1479933353),cell));

var G__12410 = (i__12404 + (1));
i__12404 = G__12410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12405),reveal$slides$table_$_iter__12398_$_iter__12402.call(null,cljs.core.chunk_rest.call(null,s__12403__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12405),null);
}
} else {
var cell = cljs.core.first.call(null,s__12403__$2);
return cljs.core.cons.call(null,reveal.slides.make_tag.call(null,new cljs.core.Keyword(null,"td","td",1479933353),cell),reveal$slides$table_$_iter__12398_$_iter__12402.call(null,cljs.core.rest.call(null,s__12403__$2)));
}
} else {
return null;
}
break;
}
});})(i__12400,row,c__4521__auto__,size__4522__auto__,b__12401,s__12399__$2,temp__5720__auto__,vec__12395,seq__12396,rows,t))
,null,null));
});})(i__12400,row,c__4521__auto__,size__4522__auto__,b__12401,s__12399__$2,temp__5720__auto__,vec__12395,seq__12396,rows,t))
;
return iter__4523__auto__.call(null,row);
})()));

var G__12411 = (i__12400 + (1));
i__12400 = G__12411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12401),reveal$slides$table_$_iter__12398.call(null,cljs.core.chunk_rest.call(null,s__12399__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12401),null);
}
} else {
var row = cljs.core.first.call(null,s__12399__$2);
return cljs.core.cons.call(null,reveal.slides.make_tag.call(null,new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4523__auto__ = ((function (row,s__12399__$2,temp__5720__auto__,vec__12395,seq__12396,rows,t){
return (function reveal$slides$table_$_iter__12398_$_iter__12406(s__12407){
return (new cljs.core.LazySeq(null,((function (row,s__12399__$2,temp__5720__auto__,vec__12395,seq__12396,rows,t){
return (function (){
var s__12407__$1 = s__12407;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12407__$1);
if(temp__5720__auto____$1){
var s__12407__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12407__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12407__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12409 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12408 = (0);
while(true){
if((i__12408 < size__4522__auto__)){
var cell = cljs.core._nth.call(null,c__4521__auto__,i__12408);
cljs.core.chunk_append.call(null,b__12409,reveal.slides.make_tag.call(null,new cljs.core.Keyword(null,"td","td",1479933353),cell));

var G__12412 = (i__12408 + (1));
i__12408 = G__12412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12409),reveal$slides$table_$_iter__12398_$_iter__12406.call(null,cljs.core.chunk_rest.call(null,s__12407__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12409),null);
}
} else {
var cell = cljs.core.first.call(null,s__12407__$2);
return cljs.core.cons.call(null,reveal.slides.make_tag.call(null,new cljs.core.Keyword(null,"td","td",1479933353),cell),reveal$slides$table_$_iter__12398_$_iter__12406.call(null,cljs.core.rest.call(null,s__12407__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__12399__$2,temp__5720__auto__,vec__12395,seq__12396,rows,t))
,null,null));
});})(row,s__12399__$2,temp__5720__auto__,vec__12395,seq__12396,rows,t))
;
return iter__4523__auto__.call(null,row);
})()),reveal$slides$table_$_iter__12398.call(null,cljs.core.rest.call(null,s__12399__$2)));
}
} else {
return null;
}
break;
}
});})(vec__12395,seq__12396,rows,t))
,null,null));
});})(vec__12395,seq__12396,rows,t))
;
return iter__4523__auto__.call(null,rows);
})())));
});
reveal.slides.what_we_do_present = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"past/current 'Business'"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"font-weight: bold;"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"effort"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"money?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"product?"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fragment"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"in house ops / infra"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"no"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"no"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fragment"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"datacenter / private cloud"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"yes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"meh"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fragment"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"OPS (mon, log aggr., backup etc.)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"yes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"mhhh... meh"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fragment"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"DevPlatform (sort of)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"yes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"meh"], null)], null)], null)], null)], null);
reveal.slides.current_idea = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"current idea"], null),reveal.slides.bulletpoints.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OPS @ K8s world (to some extend 'managed K8s')","become good at this (product-ish mon/log-aggr/etc.)","embrace common interface (K8s)","DevPlatform Product"], null))], null);
reveal.slides.pf30_nutshell = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),reveal.slides.note.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Provide Source2Whatever Workflows"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"As before: Set of Supported Services"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Workflows require tight Integrations"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Workflows require Extension Points"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Workflows require DevTools"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Sort of 'Managed Knative'"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Sort of 'Evolved OpenShift'"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"'PF-3.0' in a nutshell"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"kinda why we're here :D"], null),reveal.slides.bulletpoints.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Source2Whatever Workflows","Set of Supported Services","Tight Integrations","Extension Points","DevTools","Sort of 'Managed Knative'","Sort of 'Evolved OpenShift'"], null))], null);
reveal.slides.provided_servcies_1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163)], null)], null);
reveal.slides.provided_servcies_summary = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"provided  services - summary"], null),reveal.slides.table.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Build / CI / (CD)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tekton, Kaniko, Bot(s), (CI-Tool)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dev-Tools / CD"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TBD: Scaffold, Keptn"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Platform Services"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"list-style-type: none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"as before but better integration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"(code centric)"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log aggregation"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ELK"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Identity / Role Mgmt"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Keycloak, (OpenLDAP)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["maybe: app catalog"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["kubeapp"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["maybe: chat"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mattermost or zulip"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["maybe: better support-tool"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["never stop dreaming"], null)], null)], null))], null);
/**
 * Add here all slides you want to see in your presentation.
 */
reveal.slides.all = (function reveal$slides$all(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [reveal.slides.title_slide,reveal.slides.intro_myself,reveal.slides.what_we_do_present,reveal.slides.current_idea,reveal.slides.pf30_nutshell,reveal.slides.provided_servcies_summary,reveal.slides.intro_myself], null);
});
