import{isDef}from"./base";export var throttle=function(t,e,o){var a=null,n=Date.now(),r=o;return function(){var o=Date.now(),i=e-(o-n),l=this,u=arguments;isDef(r)&&(t.apply(l,u),r=null),a&&clearTimeout(a),i<=0?(t.apply(l,u),n=Date.now()):a=setTimeout(t,i)}};