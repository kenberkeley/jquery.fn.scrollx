!function(n){"undefined"!=typeof module&&module.exports?module.exports=n:n(jQuery)}(function(n){function t(n,t,o,e,l){var r;if(n>t)r=o;else{if(!(n<t))return;r=e}r.forEach(function(o){o.call(l,Math.abs(n-t),t,n)})}function o(n,t,o){var e;return function(){clearTimeout(e);var l=this,r=arguments;o&&!e&&n.apply(l,r),e=setTimeout(function(){e=null,o||n.apply(l,r)},t)}}var e=[];"up down left right".split(" ").forEach(function(l){n.fn["scroll"+l]=function(r,u,i){switch(typeof u){case"function":i=u;case"undefined":u=100}var f=this,c=e.filter(function(n){return n.el===f})[0];return c||(c=new function(e,l){var r=this;r.el=e,r.up=[],r.down=[],r.left=[],r.right=[];var u,i,f=n(e);f.on("scroll",o(function(){u=f.scrollLeft(),i=f.scrollTop()},l,!0)).on("scroll",o(function(){var n=f.scrollLeft(),o=f.scrollTop();t(u,n,r.left,r.right,e),t(i,o,r.up,r.down,e),u=n,i=o},l))}(f,u),e.push(c)),c[l].push(r),i&&i(function(){c[l].splice(c[l].indexOf(r),1)}),f}})});