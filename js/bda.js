---
    layout:
---
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?7f11210c6997b1ffc46a7a30247a4bd4";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
(function(){
    var bp = document.createElement('script');
    bp.src = '//push.zhanzhang.baidu.com/push.js';
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
$('.typeahead').typeahead({source: [{% for post in site.posts %}{{ post.title | jsonify }},{% endfor %}""]});
$("#search").click(function(){
    var obj={
        name:[{% for post in site.posts %}{{ post.title | jsonify }},{% endfor %} ""],
    url:[{% for post in site.posts %}{{ post.url | jsonify }},{% endfor %} ""]
}
    var name = $('.typeahead').eq(0).val();
    var names=obj.name;
    for(var i=0;i<names.length;i++){
        if(names[i] ==name){
            window.location.href=obj.url[i];
        }
    }
});
$(window).load(function(){
    $("pre").addClass("prettyprint linenums");
    prettyPrint();
})