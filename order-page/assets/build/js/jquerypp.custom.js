!function(){function r(e,t,n,i){for(var o,r,s,a,u,c,d,l=0;l<t.length;l++)for((s=(o=t[l]).indexOf(".")<0)||(o=(c=o.split(".")).shift(),d=new RegExp("(^|\\.)"+c.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")),r=(e[o]||[]).slice(0),a=0;a<r.length;a++)u=r[a],(s||d.test(u.namespace))&&(i?u.selector===i&&n(o,u.origHandler||u.handler):null===i?n(o,u.origHandler||u.handler,u.selector):u.selector||n(o,u.origHandler||u.handler))}var s=jQuery.event;s.find=function(e,t,n){var i=($._data(e)||{}).events,o=[];return i&&r(i,t,function(e,t){o.push(t)},n),o},s.findBySelector=function(e,t){var n=$._data(e).events,a={};return n&&r(n,t,function(e,t,n){var i,o,r,s;o=e,r=t,((s=a[i=n||""]||(a[i]={}))[o]||(s[o]=[])).push(r)},null),a},s.supportTouch="ontouchend"in document,$.fn.respondsTo=function(e){return!!this.length&&0<s.find(this[0],$.isArray(e)?e:[e]).length},$.fn.triggerHandled=function(e,t){return e="string"==typeof e?$.Event(e):e,this.trigger(e,t),e.handled},s.setupHelper=function(n,i,o){o||(o=i,i=null);function e(e){var t=e.selector||"";t?s.find(this,n,t).length||$(this).delegate(t,i,o):s.find(this,n,t).length||s.add(this,i,o,{selector:t,delegate:this})}function t(e){var t=e.selector||"";t?s.find(this,n,t).length||$(this).undelegate(t,i,o):s.find(this,n,t).length||s.remove(this,i,o,{selector:t,delegate:this})}$.each(n,function(){s.special[this]={add:e,remove:t,setup:function(){},teardown:function(){}}})}}(jQuery),function(h){function t(e){var t=e.originalEvent.touches?e.originalEvent.touches[0]:e;return{time:(new Date).getTime(),coords:[t.pageX,t.pageY],origin:h(e.target)}}var e=!/Phantom/.test(navigator.userAgent)&&"ontouchend"in document,n=e?"touchstart":"mousedown",i=e?"touchend":"mouseup",f=e?"touchmove":"mousemove",g=h.event.swipe={delay:500,max:75,min:30};h.event.setupHelper(["swipe","swipeleft","swiperight","swipeup","swipedown"],n,function(r){var s,a=t(r),u=r.delegateTarget||r.currentTarget,c=r.handleObj.selector,d=this;function l(e){a&&(s=t(e),10<Math.abs(a.coords[0]-s.coords[0])&&e.preventDefault())}h(document.documentElement).bind(f,l).one(i,function(e){var t,n,i,o;h(this).unbind(f,l),a&&s&&(t=Math.abs(a.coords[0]-s.coords[0]),n=Math.abs(a.coords[1]-s.coords[1]),i=Math.sqrt(t*t+n*n),s.time-a.time<g.delay&&g.min<=i&&(o=["swipe"],g.min<=t&&n<g.min?o.push(a.coords[0]>s.coords[0]?"swipeleft":"swiperight"):g.min<=n&&t<g.min&&o.push(a.coords[1]<s.coords[1]?"swipedown":"swipeup"),h.each(h.event.find(u,o,c),function(){this.call(d,r,{start:a,end:s})}))),a=s=void 0})})}(jQuery);
//# sourceMappingURL=jquerypp.custom.js.map
