"use strict";function _interopDefault(t){return t&&"object"==typeof t&&"default"in t?t.default:t}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])})(t,e)};function __extends(t,e){function s(){this.constructor=t}extendStatics(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}const YEAR="year",MONTH="month",DAY="day",HOUR="hour",MINUTE="minute",SECOND="second",MILLISECOND="millisecond",month_names={en:["January","February","March","April","May","June","July","August","September","October","November","December"],es:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],ru:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],ptBr:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],fr:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],tr:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],zh:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]};var date_utils={parse(t,e="-",s=/[.:]/){if(t instanceof Date)return t;if("string"==typeof t){let i,a;const n=t.split(" ");i=n[0].split(e).map(t=>parseInt(t,10)),a=n[1]&&n[1].split(s),i[1]=i[1]-1;let r=i;return a&&a.length&&(4==a.length&&(a[3]="0."+a[3],a[3]=1e3*parseFloat(a[3])),r=r.concat(a)),new Date(...r)}},to_string(t,e=!1){if(!(t instanceof Date))throw new TypeError("Invalid argument type");const s=this.get_date_values(t).map((t,e)=>(1===e&&(t+=1),padStart(t+"",6===e?3:2,"0"))),i=`${s[0]}-${s[1]}-${s[2]}`,a=`${s[3]}:${s[4]}:${s[5]}.${s[6]}`;return i+(e?" "+a:"")},format(t,e="YYYY-MM-DD HH:mm:ss.SSS",s="fr"){const i=this.get_date_values(t).map(t=>padStart(t,2,0)),a={YYYY:i[0],MM:padStart(+i[1]+1,2,0),DD:i[2],HH:i[3],mm:i[4],ss:i[5],SSS:i[6],D:i[2],MMMM:month_names[s][+i[1]],MMM:month_names[s][+i[1]]};let n=e;const r=[];return Object.keys(a).sort((t,e)=>e.length-t.length).forEach(t=>{n.includes(t)&&(n=n.replace(t,`$${r.length}`),r.push(a[t]))}),r.forEach((t,e)=>{n=n.replace(`$${e}`,t)}),n},diff(t,e,s=DAY){let i,a,n,r,o,h,d;return d=(h=(o=(n=(r=(a=(i=t-e)/1e3)/60)/60)/24)/30)/12,s.endsWith("s")||(s+="s"),Math.floor({milliseconds:i,seconds:a,minutes:r,hours:n,days:o,months:h,years:d}[s])},today(){const t=this.get_date_values(new Date).slice(0,3);return new Date(...t)},now:()=>new Date,add(t,e,s){e=parseInt(e,10);const i=[t.getFullYear()+(s===YEAR?e:0),t.getMonth()+(s===MONTH?e:0),t.getDate()+(s===DAY?e:0),t.getHours()+(s===HOUR?e:0),t.getMinutes()+(s===MINUTE?e:0),t.getSeconds()+(s===SECOND?e:0),t.getMilliseconds()+(s===MILLISECOND?e:0)];return new Date(...i)},start_of(t,e){const s={[YEAR]:6,[MONTH]:5,[DAY]:4,[HOUR]:3,[MINUTE]:2,[SECOND]:1,[MILLISECOND]:0};function i(t){const i=s[e];return s[t]<=i}const a=[t.getFullYear(),i(YEAR)?0:t.getMonth(),i(MONTH)?1:t.getDate(),i(DAY)?0:t.getHours(),i(HOUR)?0:t.getMinutes(),i(MINUTE)?0:t.getSeconds(),i(SECOND)?0:t.getMilliseconds()];return new Date(...a)},clone(t){return new Date(...this.get_date_values(t))},get_date_values:t=>[t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()],get_days_in_month(t){const e=[31,28,31,30,31,30,31,31,30,31,30,31],s=t.getMonth();if(1!==s)return e[s];const i=t.getFullYear();return i%4==0&&i%100!=0||i%400==0?29:28}};function padStart(t,e,s){return t+="",e>>=0,s=String(void 0!==s?s:" "),t.length>e?String(t):((e-=t.length)>s.length&&(s+=s.repeat(e/s.length)),s.slice(0,e)+String(t))}function $(t,e){return"string"==typeof t?(e||document).querySelector(t):t||null}function createSVG(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg",t);for(let t in e)if("append_to"===t){e.append_to.appendChild(s)}else"innerHTML"===t?s.innerHTML=e.innerHTML:s.setAttribute(t,e[t]);return s}function animateSVG(t,e,s,i){const a=getAnimationElement(t,e,s,i);if(a===t){const t=document.createEvent("HTMLEvents");t.initEvent("click",!0,!0),t.eventName="click",a.dispatchEvent(t)}}function getAnimationElement(t,e,s,i,a="0.4s",n="0.1s"){const r=t.querySelector("animate");if(r)return $.attr(r,{attributeName:e,from:s,to:i,dur:a,begin:"click + "+n}),t;const o=createSVG("animate",{attributeName:e,from:s,to:i,dur:a,begin:n,calcMode:"spline",values:s+";"+i,keyTimes:"0; 1",keySplines:cubic_bezier("ease-out")});return t.appendChild(o),t}function cubic_bezier(t){return{ease:".25 .1 .25 1",linear:"0 0 1 1","ease-in":".42 0 1 1","ease-out":"0 0 .58 1","ease-in-out":".42 0 .58 1"}[t]}$.on=((t,e,s,i)=>{i?$.delegate(t,e,s,i):(i=s,$.bind(t,e,i))}),$.off=((t,e,s)=>{t.removeEventListener(e,s)}),$.bind=((t,e,s)=>{e.split(/\s+/).forEach(function(e){t.addEventListener(e,s)})}),$.delegate=((t,e,s,i)=>{t.addEventListener(e,function(t){const e=t.target.closest(s);e&&(t.delegatedTarget=e,i.call(this,t,e))})}),$.closest=((t,e)=>e?e.matches(t)?e:$.closest(t,e.parentNode):null),$.attr=((t,e,s)=>{if(!s&&"string"==typeof e)return t.getAttribute(e);if("object"!=typeof e)t.setAttribute(e,s);else for(let s in e)$.attr(t,s,e[s])});class Bar{constructor(t,e){this.set_defaults(t,e),this.prepare(),this.draw(),this.bind()}set_defaults(t,e){this.action_completed=!1,this.gantt=t,this.task=e}prepare(){this.prepare_values(),this.prepare_helpers()}prepare_values(){this.invalid=this.task.invalid,this.height=this.gantt.options.bar_height,this.x=this.compute_x(),this.y=this.compute_y(),this.corner_radius=this.gantt.options.bar_corner_radius,this.duration=date_utils.diff(this.task._end,this.task._start,"hour")/this.gantt.options.step,this.width=this.gantt.options.column_width*this.duration,this.progress_width=this.gantt.options.column_width*this.duration*(this.task.progress/100)||0,this.group=createSVG("g",{class:"bar-wrapper "+(this.task.custom_class||""),"data-id":this.task.id}),this.bar_group=createSVG("g",{class:"bar-group",append_to:this.group}),this.handle_group=createSVG("g",{class:"handle-group",append_to:this.group})}prepare_helpers(){SVGElement.prototype.getX=function(){return+this.getAttribute("x")},SVGElement.prototype.getY=function(){return+this.getAttribute("y")},SVGElement.prototype.getWidth=function(){return+this.getAttribute("width")},SVGElement.prototype.getHeight=function(){return+this.getAttribute("height")},SVGElement.prototype.getEndX=function(){return this.getX()+this.getWidth()}}draw(){this.draw_bar(),this.draw_progress_bar(),this.draw_label(),this.draw_resize_handles()}draw_bar(){this.$bar=createSVG("rect",{x:this.x,y:this.y,width:this.width,height:this.height,rx:this.corner_radius,ry:this.corner_radius,class:"bar",append_to:this.bar_group}),animateSVG(this.$bar,"width",0,this.width),this.invalid&&this.$bar.classList.add("bar-invalid")}draw_progress_bar(){this.invalid||(this.$bar_progress=createSVG("rect",{x:this.x,y:this.y,width:this.progress_width,height:this.height,rx:this.corner_radius,ry:this.corner_radius,class:"bar-progress",append_to:this.bar_group}),animateSVG(this.$bar_progress,"width",0,this.progress_width))}draw_label(){createSVG("text",{x:this.x+this.width/2,y:this.y+this.height/2,innerHTML:this.task.name,class:"bar-label",append_to:this.bar_group}),requestAnimationFrame(()=>this.update_label_position())}draw_resize_handles(){if(this.invalid)return;const t=this.$bar;createSVG("rect",{x:t.getX()+t.getWidth()-9,y:t.getY()+1,width:8,height:this.height-2,rx:this.corner_radius,ry:this.corner_radius,class:"handle right",append_to:this.handle_group}),createSVG("rect",{x:t.getX()+1,y:t.getY()+1,width:8,height:this.height-2,rx:this.corner_radius,ry:this.corner_radius,class:"handle left",append_to:this.handle_group}),this.task.progress&&this.task.progress<100&&(this.$handle_progress=createSVG("polygon",{points:this.get_progress_polygon_points().join(","),class:"handle progress",append_to:this.handle_group}))}get_progress_polygon_points(){const t=this.$bar_progress;return[t.getEndX()-5,t.getY()+t.getHeight(),t.getEndX()+5,t.getY()+t.getHeight(),t.getEndX(),t.getY()+t.getHeight()-8.66]}bind(){this.invalid||this.setup_click_event()}setup_click_event(){$.on(this.group,"focus "+this.gantt.options.popup_trigger,t=>{this.action_completed||(this.show_popup(),this.gantt.unselect_all(),this.group.classList.add("active"))}),$.on(this.group,"dblclick",t=>{this.action_completed||this.gantt.trigger_event("click",[this.task])})}show_popup(){if(this.gantt.bar_being_dragged)return;const t=date_utils.format(this.task._start,"MMM D",this.gantt.options.language)+" - "+date_utils.format(date_utils.add(this.task._end,-1,"second"),"MMM D",this.gantt.options.language);this.gantt.show_popup({target_element:this.$bar,title:this.task.name,subtitle:t,task:this.task})}update_bar_position({x:t=null,width:e=null}){const s=this.$bar;if(t){if(!this.task.dependencies.map(t=>this.gantt.get_bar(t).$bar.getX()).reduce((e,s)=>t>=s,t))return void(e=null);this.update_attr(s,"x",t)}e&&e>=this.gantt.options.column_width&&this.update_attr(s,"width",e),this.update_label_position(),this.update_handle_position(),this.update_progressbar_position(),this.update_arrow_position()}date_changed(){let t=!1;const{new_start_date:e,new_end_date:s}=this.compute_start_end_date();Number(this.task._start)!==Number(e)&&(t=!0,this.task._start=e),Number(this.task._end)!==Number(s)&&(t=!0,this.task._end=s),t&&this.gantt.trigger_event("date_change",[this.task,e,date_utils.add(s,-1,"second")])}progress_changed(){const t=this.compute_progress();this.task.progress=t,this.gantt.trigger_event("progress_change",[this.task,t])}set_action_completed(){this.action_completed=!0,setTimeout(()=>this.action_completed=!1,1e3)}compute_start_end_date(){const t=this.$bar,e=t.getX()/this.gantt.options.column_width,s=date_utils.add(this.gantt.gantt_start,e*this.gantt.options.step,"hour"),i=t.getWidth()/this.gantt.options.column_width;return{new_start_date:s,new_end_date:date_utils.add(s,i*this.gantt.options.step,"hour")}}compute_progress(){const t=this.$bar_progress.getWidth()/this.$bar.getWidth()*100;return parseInt(t,10)}compute_x(){const{step:t,column_width:e}=this.gantt.options,s=this.task._start,i=this.gantt.gantt_start;let a=date_utils.diff(s,i,"hour")/t*e;if(this.gantt.view_is("Month")){a=date_utils.diff(s,i,"day")*e/30}return a}compute_y(){return this.gantt.options.header_height+this.gantt.options.padding+this.task._index*(this.height+this.gantt.options.padding)}get_snap_position(t){let e,s,i=t;return s=this.gantt.view_is("Week")?i-(e=t%(this.gantt.options.column_width/7))+(e<this.gantt.options.column_width/14?0:this.gantt.options.column_width/7):this.gantt.view_is("Month")?i-(e=t%(this.gantt.options.column_width/30))+(e<this.gantt.options.column_width/60?0:this.gantt.options.column_width/30):i-(e=t%this.gantt.options.column_width)+(e<this.gantt.options.column_width/2?0:this.gantt.options.column_width)}update_attr(t,e,s){return s=+s,isNaN(s)||t.setAttribute(e,s),t}update_progressbar_position(){this.$bar_progress.setAttribute("x",this.$bar.getX()),this.$bar_progress.setAttribute("width",this.$bar.getWidth()*(this.task.progress/100))}update_label_position(){const t=this.$bar,e=this.group.querySelector(".bar-label");e.getBBox().width>t.getWidth()?(e.classList.add("big"),e.setAttribute("x",t.getX()+t.getWidth()+5)):(e.classList.remove("big"),e.setAttribute("x",t.getX()+t.getWidth()/2))}update_handle_position(){const t=this.$bar;this.handle_group.querySelector(".handle.left").setAttribute("x",t.getX()+1),this.handle_group.querySelector(".handle.right").setAttribute("x",t.getEndX()-9);const e=this.group.querySelector(".handle.progress");e&&e.setAttribute("points",this.get_progress_polygon_points())}update_arrow_position(){this.arrows=this.arrows||[];for(let t of this.arrows)t.update()}}class Arrow{constructor(t,e,s){this.gantt=t,this.from_task=e,this.to_task=s,this.calculate_path(),this.draw()}calculate_path(){let t=this.from_task.$bar.getX()+this.from_task.$bar.getWidth()/2;const e=()=>this.to_task.$bar.getX()<t+this.gantt.options.padding&&t>this.from_task.$bar.getX()+this.gantt.options.padding;for(;e();)t-=10;const s=this.gantt.options.header_height+this.gantt.options.bar_height+(this.gantt.options.padding+this.gantt.options.bar_height)*this.from_task.task._index+this.gantt.options.padding,i=this.to_task.$bar.getX()-this.gantt.options.padding/2,a=this.gantt.options.header_height+this.gantt.options.bar_height/2+(this.gantt.options.padding+this.gantt.options.bar_height)*this.to_task.task._index+this.gantt.options.padding,n=this.from_task.task._index>this.to_task.task._index,r=this.gantt.options.arrow_curve,o=n?1:0,h=n?-r:r,d=n?a+this.gantt.options.arrow_curve:a-this.gantt.options.arrow_curve;if(this.path=`\n            M ${t} ${s}\n            V ${d}\n            a ${r} ${r} 0 0 ${o} ${r} ${h}\n            L ${i} ${a}\n            m -5 -5\n            l 5 5\n            l -5 5`,this.to_task.$bar.getX()<this.from_task.$bar.getX()+this.gantt.options.padding){const e=this.gantt.options.padding/2-r,n=this.to_task.$bar.getY()+this.to_task.$bar.getHeight()/2-h,d=this.to_task.$bar.getX()-this.gantt.options.padding;this.path=`\n                M ${t} ${s}\n                v ${e}\n                a ${r} ${r} 0 0 1 -${r} ${r}\n                H ${d}\n                a ${r} ${r} 0 0 ${o} -${r} ${h}\n                V ${n}\n                a ${r} ${r} 0 0 ${o} ${r} ${h}\n                L ${i} ${a}\n                m -5 -5\n                l 5 5\n                l -5 5`}}draw(){this.element=createSVG("path",{d:this.path,"data-from":this.from_task.task.id,"data-to":this.to_task.task.id})}update(){this.calculate_path(),this.element.setAttribute("d",this.path)}}class Popup{constructor(t,e){this.parent=t,this.custom_html=e,this.make()}make(){this.parent.innerHTML='\n            <div class="title"></div>\n            <div class="subtitle"></div>\n            <div class="pointer"></div>\n        ',this.hide(),this.title=this.parent.querySelector(".title"),this.subtitle=this.parent.querySelector(".subtitle"),this.pointer=this.parent.querySelector(".pointer")}show(t){if(!t.target_element)throw new Error("target_element is required to show popup");t.position||(t.position="left");const e=t.target_element;if(this.custom_html){let e=this.custom_html(t.task);e+='<div class="pointer"></div>',this.parent.innerHTML=e,this.pointer=this.parent.querySelector(".pointer")}else this.title.innerHTML=t.title,this.subtitle.innerHTML=t.subtitle,this.parent.style.width=this.parent.clientWidth+"px";let s;e instanceof HTMLElement?s=e.getBoundingClientRect():e instanceof SVGElement&&(s=t.target_element.getBBox()),"left"===t.position&&(this.parent.style.left=s.x+(s.width+10)+"px",this.parent.style.top=s.y+"px",this.pointer.style.transform="rotateZ(90deg)",this.pointer.style.left="-7px",this.pointer.style.top="2px"),this.parent.style.opacity=1}hide(){this.parent.style.opacity=0}}function styleInject(t,e){void 0===e&&(e={});var s=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===s&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}var css_248z=".gantt .grid-background{fill:none}.gantt .grid-header{fill:#fff;stroke:#e0e0e0;stroke-width:1.4}.gantt .grid-row{fill:#fff}.gantt .grid-row:nth-child(2n){fill:#f5f5f5}.gantt .row-line{stroke:#ebeff2}.gantt .tick{stroke:#e0e0e0;stroke-width:.2}.gantt .tick.thick{stroke-width:.4}.gantt .today-highlight{fill:#fcf8e3;opacity:.5}.gantt .arrow{fill:none;stroke:#666;stroke-width:1.4}.gantt .bar{fill:#b8c2cc;stroke:#8d99a6;stroke-width:0;transition:stroke-width .3s ease;user-select:none}.gantt .bar-progress{fill:#ff5f00}.gantt .bar-invalid{fill:transparent;stroke:#8d99a6;stroke-width:1;stroke-dasharray:5}.gantt .bar-invalid~.bar-label{fill:#555}.gantt .bar-label{fill:#fff;dominant-baseline:central;text-anchor:middle;font-size:12px;font-weight:lighter}.gantt .bar-label.big{fill:#555;text-anchor:start}.gantt .handle{fill:#ddd;cursor:ew-resize;opacity:0;visibility:hidden;transition:opacity .3s ease}.gantt .bar-wrapper{cursor:pointer;outline:none}.gantt .bar-wrapper:hover .bar{fill:#a9b5c1}.gantt .bar-wrapper:hover .bar-progress{fill:#e65600}.gantt .bar-wrapper:hover .handle{visibility:visible;opacity:1}.gantt .bar-wrapper.active .bar{fill:#a9b5c1}.gantt .bar-wrapper.active .bar-progress{fill:#e65600}.gantt .lower-text,.gantt .upper-text{font-size:12px;text-anchor:middle}.gantt .upper-text{fill:#555}.gantt .lower-text{fill:#333}.gantt .hide{display:none}.gantt-container{position:relative;overflow:auto;font-size:12px}.gantt-container .popup-wrapper{position:absolute;top:0;left:0;background:rgba(0,0,0,.8);padding:0;color:#959da5;border-radius:3px}.gantt-container .popup-wrapper .title{border-bottom:3px solid #ff5f00;padding:10px}.gantt-container .popup-wrapper .subtitle{padding:10px;color:#dfe2e5}.gantt-container .popup-wrapper .pointer{position:absolute;height:5px;margin:0 0 0 -5px;border:5px solid transparent;border-top-color:rgba(0,0,0,.8)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93ZG8tZ2FudHQvc3JjL2dhbnR0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsd0JBRUUsU0FBVSxDQUZaLG9CQUtFLFNBQWEsQ0FDYixjQWhCb0IsQ0FpQnBCLGdCQUFpQixDQVBuQixpQkFVRSxTQUFhLENBVmYsK0JBYUUsWUF0QmdCLENBU2xCLGlCQWdCRSxjQXhCMEIsQ0FRNUIsYUFtQkUsY0E3Qm9CLENBOEJwQixlQUFpQixDQXBCbkIsbUJBc0JHLGVBQWlCLENBdEJwQix3QkEwQkUsWUFqQ29CLENBa0NwQixVQUFZLENBM0JkLGNBK0JFLFNBQVUsQ0FDVixXQXRDZSxDQXVDZixnQkFBaUIsQ0FqQ25CLFlBcUNFLFlBakRpQixDQWtEakIsY0FqRGtCLENBa0RsQixjQUFlLENBQ2YsZ0NBQWlDLENBQ2pDLGdCQUFpQixDQXpDbkIscUJBNENFLFlBL0NZLENBR2Qsb0JBK0NFLGdCQUFpQixDQUNqQixjQTNEa0IsQ0E0RGxCLGNBQWUsQ0FDZixrQkFBbUIsQ0FsRHJCLCtCQXFERyxTQTFEYyxDQUtqQixrQkF5REUsU0FBVSxDQUNWLHlCQUEwQixDQUMxQixrQkFBbUIsQ0FDbkIsY0FBZSxDQUNmLG1CQUFvQixDQTdEdEIsc0JBZ0VHLFNBckVjLENBc0VkLGlCQUFrQixDQWpFckIsZUFzRUUsU0F4RWlCLENBeUVqQixnQkFBaUIsQ0FDakIsU0FBVSxDQUNWLGlCQUFrQixDQUNsQiwyQkFBNEIsQ0ExRTlCLG9CQThFRSxjQUFlLENBQ2YsWUFBYSxDQS9FZiwrQkFtRkksWUFBMkIsQ0FuRi9CLHdDQXVGSSxZQUFzQixDQXZGMUIsa0NBMkZJLGtCQUFtQixDQUNuQixTQUFVLENBNUZkLGdDQWtHSSxZQUEyQixDQWxHL0IseUNBc0dJLFlBQXNCLENBdEcxQixzQ0E0R0UsY0FBZSxDQUNmLGtCQUFtQixDQTdHckIsbUJBZ0hFLFNBckhlLENBS2pCLG1CQW1IRSxTQXZIZSxDQUlqQixhQXVIRSxZQUFhLENBSWYsaUJBQ0MsaUJBQWtCLENBQ2xCLGFBQWMsQ0FDZCxjQUFlLENBSGhCLGdDQU1FLGlCQUFrQixDQUNsQixLQUFNLENBQ04sTUFBTyxDQUNQLHlCQUE4QixDQUM5QixTQUFVLENBQ1YsYUFBYyxDQUNkLGlCQUFrQixDQVpwQix1Q0FlRywrQkE3SVcsQ0E4SVgsWUFBYSxDQWhCaEIsMENBb0JHLFlBQWEsQ0FDYixhQUFjLENBckJqQix5Q0F5QkcsaUJBQWtCLENBQ2xCLFVBQVcsQ0FDWCxpQkFBa0IsQ0FFbEIsNEJBQW9DLENBQXBDLCtCQUFvQyIsImZpbGUiOiJnYW50dC5zY3NzIn0= */";styleInject(css_248z);const VIEW_MODE={QUARTER_DAY:"Quarter Day",HALF_DAY:"Half Day",DAY:"Day",WEEK:"Week",MONTH:"Month",YEAR:"Year"};class Gantt{constructor(t,e,s){this.setup_wrapper(t),this.setup_options(s),this.setup_tasks(e),this.change_view_mode(),this.bind_events()}setup_wrapper(t){let e,s;if("string"==typeof t&&(t=document.querySelector(t)),t instanceof HTMLElement)s=t,e=t.querySelector("svg");else{if(!(t instanceof SVGElement))throw new TypeError("Frappé Gantt only supports usage of a string CSS selector, HTML DOM element or SVG DOM element for the 'element' parameter");e=t}e?(this.$svg=e,this.$svg.classList.add("gantt")):this.$svg=createSVG("svg",{append_to:s,class:"gantt"}),this.$container=document.createElement("div"),this.$container.classList.add("gantt-container"),this.$svg.parentElement.appendChild(this.$container),this.$container.appendChild(this.$svg),this.popup_wrapper=document.createElement("div"),this.popup_wrapper.classList.add("popup-wrapper"),this.$container.appendChild(this.popup_wrapper)}setup_options(t){const e={header_height:50,column_width:30,step:24,view_modes:[...Object.values(VIEW_MODE)],bar_height:20,bar_corner_radius:3,arrow_curve:5,padding:18,view_mode:"Day",date_format:"YYYY-MM-DD",popup_trigger:"click",custom_popup_html:null,language:"fr"};this.options=Object.assign({},e,t)}setup_tasks(t){this.tasks=t.map((t,e)=>{if(t._start=date_utils.parse(t.start),t._end=date_utils.parse(t.end),date_utils.diff(t._end,t._start,"year")>10&&(t.end=null),t._index=e,!t.start&&!t.end){const e=date_utils.today();t._start=e,t._end=date_utils.add(e,2,"day")}if(!t.start&&t.end&&(t._start=date_utils.add(t._end,-2,"day")),t.start&&!t.end&&(t._end=date_utils.add(t._start,2,"day")),date_utils.get_date_values(t._end).slice(3).every(t=>0===t)&&(t._end=date_utils.add(t._end,24,"hour")),t.start&&t.end||(t.invalid=!0),"string"==typeof t.dependencies||!t.dependencies){let e=[];t.dependencies&&(e=t.dependencies.split(",").map(t=>t.trim()).filter(t=>t)),t.dependencies=e}return t.id||(t.id=generate_id(t)),t}),this.setup_dependencies()}setup_dependencies(){this.dependency_map={};for(let t of this.tasks)for(let e of t.dependencies)this.dependency_map[e]=this.dependency_map[e]||[],this.dependency_map[e].push(t.id)}refresh(t){this.setup_tasks(t),this.change_view_mode()}change_view_mode(t=this.options.view_mode){this.update_view_scale(t),this.setup_dates(),this.render(),this.trigger_event("view_change",[t])}update_view_scale(t){this.options.view_mode=t,t===VIEW_MODE.DAY?(this.options.step=24,this.options.column_width=38):t===VIEW_MODE.HALF_DAY?(this.options.step=12,this.options.column_width=38):t===VIEW_MODE.QUARTER_DAY?(this.options.step=6,this.options.column_width=38):t===VIEW_MODE.WEEK?(this.options.step=168,this.options.column_width=140):t===VIEW_MODE.MONTH?(this.options.step=720,this.options.column_width=120):t===VIEW_MODE.YEAR&&(this.options.step=8760,this.options.column_width=120)}setup_dates(){this.setup_gantt_dates(),this.setup_date_values()}setup_gantt_dates(){this.gantt_start=this.gantt_end=null;for(let t of this.tasks)(!this.gantt_start||t._start<this.gantt_start)&&(this.gantt_start=t._start),(!this.gantt_end||t._end>this.gantt_end)&&(this.gantt_end=t._end);this.gantt_start=date_utils.start_of(this.gantt_start,"day"),this.gantt_end=date_utils.start_of(this.gantt_end,"day"),this.view_is([VIEW_MODE.QUARTER_DAY,VIEW_MODE.HALF_DAY])?(this.gantt_start=date_utils.add(this.gantt_start,-7,"day"),this.gantt_end=date_utils.add(this.gantt_end,7,"day")):this.view_is(VIEW_MODE.MONTH)?(this.gantt_start=date_utils.start_of(this.gantt_start,"year"),this.gantt_end=date_utils.add(this.gantt_end,1,"year")):this.view_is(VIEW_MODE.YEAR)?(this.gantt_start=date_utils.add(this.gantt_start,-2,"year"),this.gantt_end=date_utils.add(this.gantt_end,2,"year")):(this.gantt_start=date_utils.add(this.gantt_start,-1,"month"),this.gantt_end=date_utils.add(this.gantt_end,1,"month"))}setup_date_values(){this.dates=[];let t=null;for(;null===t||t<this.gantt_end;)t=t?this.view_is(VIEW_MODE.YEAR)?date_utils.add(t,1,"year"):this.view_is(VIEW_MODE.MONTH)?date_utils.add(t,1,"month"):date_utils.add(t,this.options.step,"hour"):date_utils.clone(this.gantt_start),this.dates.push(t)}bind_events(){this.bind_grid_click(),this.bind_bar_events()}render(){this.clear(),this.setup_layers(),this.make_grid(),this.make_dates(),this.make_bars(),this.make_arrows(),this.map_arrows_on_bars(),this.set_width(),this.set_scroll_position()}setup_layers(){this.layers={};const t=["grid","date","arrow","progress","bar","details"];for(let e of t)this.layers[e]=createSVG("g",{class:e,append_to:this.$svg})}make_grid(){this.make_grid_background(),this.make_grid_rows(),this.make_grid_header(),this.make_grid_ticks(),this.make_grid_highlights()}make_grid_background(){const t=this.dates.length*this.options.column_width,e=this.options.header_height+this.options.padding+(this.options.bar_height+this.options.padding)*this.tasks.length;createSVG("rect",{x:0,y:0,width:t,height:e,class:"grid-background",append_to:this.layers.grid}),$.attr(this.$svg,{height:e+this.options.padding+100,width:"100%"})}make_grid_rows(){const t=createSVG("g",{append_to:this.layers.grid}),e=createSVG("g",{append_to:this.layers.grid}),s=this.dates.length*this.options.column_width,i=this.options.bar_height+this.options.padding;let a=this.options.header_height+this.options.padding/2;for(let n of this.tasks)createSVG("rect",{x:0,y:a,width:s,height:i,class:"grid-row",append_to:t}),createSVG("line",{x1:0,y1:a+i,x2:s,y2:a+i,class:"row-line",append_to:e}),a+=this.options.bar_height+this.options.padding}make_grid_header(){createSVG("rect",{x:0,y:0,width:this.dates.length*this.options.column_width,height:this.options.header_height+10,class:"grid-header",append_to:this.layers.grid})}make_grid_ticks(){let t=0,e=this.options.header_height+this.options.padding/2,s=(this.options.bar_height+this.options.padding)*this.tasks.length;for(let i of this.dates){let a="tick";this.view_is(VIEW_MODE.DAY)&&1===i.getDate()&&(a+=" thick"),this.view_is(VIEW_MODE.WEEK)&&i.getDate()>=1&&i.getDate()<8&&(a+=" thick"),this.view_is(VIEW_MODE.MONTH)&&(i.getMonth()+1)%3==0&&(a+=" thick"),createSVG("path",{d:`M ${t} ${e} v ${s}`,class:a,append_to:this.layers.grid}),this.view_is(VIEW_MODE.MONTH)?t+=date_utils.get_days_in_month(i)*this.options.column_width/30:t+=this.options.column_width}}make_grid_highlights(){if(this.view_is(VIEW_MODE.DAY)){createSVG("rect",{x:date_utils.diff(date_utils.today(),this.gantt_start,"hour")/this.options.step*this.options.column_width,y:0,width:this.options.column_width,height:(this.options.bar_height+this.options.padding)*this.tasks.length+this.options.header_height+this.options.padding/2,class:"today-highlight",append_to:this.layers.grid})}}make_dates(){for(let t of this.get_dates_to_draw())if(createSVG("text",{x:t.lower_x,y:t.lower_y,innerHTML:t.lower_text,class:"lower-text",append_to:this.layers.date}),t.upper_text){const e=createSVG("text",{x:t.upper_x,y:t.upper_y,innerHTML:t.upper_text,class:"upper-text",append_to:this.layers.date});e.getBBox().x2>this.layers.grid.getBBox().width&&e.remove()}}get_dates_to_draw(){let t=null;return this.dates.map((e,s)=>{const i=this.get_date_info(e,t,s);return t=e,i})}get_date_info(t,e,s){e||(e=date_utils.add(t,1,"year"));const i={"Quarter Day_lower":date_utils.format(t,"HH",this.options.language),"Half Day_lower":date_utils.format(t,"HH",this.options.language),Day_lower:t.getDate()!==e.getDate()?date_utils.format(t,"D",this.options.language):"",Week_lower:t.getMonth()!==e.getMonth()?date_utils.format(t,"D MMM",this.options.language):date_utils.format(t,"D",this.options.language),Month_lower:date_utils.format(t,"MMMM",this.options.language),Year_lower:date_utils.format(t,"YYYY",this.options.language),"Quarter Day_upper":t.getDate()!==e.getDate()?date_utils.format(t,"D MMM",this.options.language):"","Half Day_upper":t.getDate()!==e.getDate()?t.getMonth()!==e.getMonth()?date_utils.format(t,"D MMM",this.options.language):date_utils.format(t,"D",this.options.language):"",Day_upper:t.getMonth()!==e.getMonth()?date_utils.format(t,"MMMM",this.options.language):"",Week_upper:t.getMonth()!==e.getMonth()?date_utils.format(t,"MMMM",this.options.language):"",Month_upper:t.getFullYear()!==e.getFullYear()?date_utils.format(t,"YYYY",this.options.language):"",Year_upper:t.getFullYear()!==e.getFullYear()?date_utils.format(t,"YYYY",this.options.language):""},a={x:s*this.options.column_width,lower_y:this.options.header_height,upper_y:this.options.header_height-25},n={"Quarter Day_lower":4*this.options.column_width/2,"Quarter Day_upper":0,"Half Day_lower":2*this.options.column_width/2,"Half Day_upper":0,Day_lower:this.options.column_width/2,Day_upper:30*this.options.column_width/2,Week_lower:0,Week_upper:4*this.options.column_width/2,Month_lower:this.options.column_width/2,Month_upper:12*this.options.column_width/2,Year_lower:this.options.column_width/2,Year_upper:30*this.options.column_width/2};return{upper_text:i[`${this.options.view_mode}_upper`],lower_text:i[`${this.options.view_mode}_lower`],upper_x:a.x+n[`${this.options.view_mode}_upper`],upper_y:a.upper_y,lower_x:a.x+n[`${this.options.view_mode}_lower`],lower_y:a.lower_y}}make_bars(){this.bars=this.tasks.map(t=>{const e=new Bar(this,t);return this.layers.bar.appendChild(e.group),e})}make_arrows(){this.arrows=[];for(let t of this.tasks){let e=[];e=t.dependencies.map(e=>{const s=this.get_task(e);if(!s)return;const i=new Arrow(this,this.bars[s._index],this.bars[t._index]);return this.layers.arrow.appendChild(i.element),i}).filter(Boolean),this.arrows=this.arrows.concat(e)}}map_arrows_on_bars(){for(let t of this.bars)t.arrows=this.arrows.filter(e=>e.from_task.task.id===t.task.id||e.to_task.task.id===t.task.id)}set_width(){const t=this.$svg.getBoundingClientRect().width,e=this.$svg.querySelector(".grid .grid-row").getAttribute("width");t<e&&this.$svg.setAttribute("width",e)}set_scroll_position(){const t=this.$svg.parentElement;if(!t)return;const e=date_utils.diff(this.get_oldest_starting_date(),this.gantt_start,"hour")/this.options.step*this.options.column_width-this.options.column_width;t.scrollLeft=e}bind_grid_click(){$.on(this.$svg,this.options.popup_trigger,".grid-row, .grid-header",()=>{this.unselect_all(),this.hide_popup()})}bind_bar_events(){let t=!1,e=0,s=0,i=!1,a=!1,n=null,r=[];this.bar_being_dragged=null,$.on(this.$svg,"mousedown",".bar-wrapper, .handle",(o,h)=>{const d=$.closest(".bar-wrapper",h);h.classList.contains("left")?i=!0:h.classList.contains("right")?a=!0:h.classList.contains("bar-wrapper")&&(t=!0),d.classList.add("active"),e=o.offsetX,s=o.offsetY;const p=[n=d.getAttribute("data-id"),...this.get_all_dependent_tasks(n)];r=p.map(t=>this.get_bar(t)),this.bar_being_dragged=n,r.forEach(t=>{const e=t.$bar;e.ox=e.getX(),e.oy=e.getY(),e.owidth=e.getWidth(),e.finaldx=0})}),$.on(this.$svg,"mousemove",s=>{if(!(t||i||a))return;const o=s.offsetX-e;s.offsetY;r.forEach(e=>{const s=e.$bar;s.finaldx=this.get_snap_position(o),i?n===e.task.id?e.update_bar_position({x:s.ox+s.finaldx,width:s.owidth-s.finaldx}):e.update_bar_position({x:s.ox+s.finaldx}):a?n===e.task.id&&e.update_bar_position({width:s.owidth+s.finaldx}):t&&e.update_bar_position({x:s.ox+s.finaldx})})}),document.addEventListener("mouseup",e=>{(t||i||a)&&r.forEach(t=>t.group.classList.remove("active")),t=!1,i=!1,a=!1}),$.on(this.$svg,"mouseup",t=>{this.bar_being_dragged=null,r.forEach(t=>{t.$bar.finaldx&&(t.date_changed(),t.set_action_completed())})}),this.bind_bar_progress()}bind_bar_progress(){let t=0,e=0,s=null,i=null,a=null,n=null;$.on(this.$svg,"mousedown",".handle.progress",(r,o)=>{s=!0,t=r.offsetX,e=r.offsetY;const h=$.closest(".bar-wrapper",o).getAttribute("data-id");i=this.get_bar(h),a=i.$bar_progress,n=i.$bar,a.finaldx=0,a.owidth=a.getWidth(),a.min_dx=-a.getWidth(),a.max_dx=n.getWidth()-a.getWidth()}),$.on(this.$svg,"mousemove",e=>{if(!s)return;let n=e.offsetX-t;e.offsetY;n>a.max_dx&&(n=a.max_dx),n<a.min_dx&&(n=a.min_dx);const r=i.$handle_progress;$.attr(a,"width",a.owidth+n),$.attr(r,"points",i.get_progress_polygon_points()),a.finaldx=n}),$.on(this.$svg,"mouseup",()=>{s=!1,a&&a.finaldx&&(i.progress_changed(),i.set_action_completed())})}get_all_dependent_tasks(t){let e=[],s=[t];for(;s.length;){const t=s.reduce((t,e)=>t=t.concat(this.dependency_map[e]),[]);e=e.concat(t),s=t.filter(t=>!s.includes(t))}return e.filter(Boolean)}get_snap_position(t){let e,s,i=t;return s=this.view_is(VIEW_MODE.WEEK)?i-(e=t%(this.options.column_width/7))+(e<this.options.column_width/14?0:this.options.column_width/7):this.view_is(VIEW_MODE.MONTH)?i-(e=t%(this.options.column_width/30))+(e<this.options.column_width/60?0:this.options.column_width/30):i-(e=t%this.options.column_width)+(e<this.options.column_width/2?0:this.options.column_width)}unselect_all(){[...this.$svg.querySelectorAll(".bar-wrapper")].forEach(t=>{t.classList.remove("active")})}view_is(t){return"string"==typeof t?this.options.view_mode===t:!!Array.isArray(t)&&t.some(t=>this.options.view_mode===t)}get_task(t){return this.tasks.find(e=>e.id===t)}get_bar(t){return this.bars.find(e=>e.task.id===t)}show_popup(t){this.popup||(this.popup=new Popup(this.popup_wrapper,this.options.custom_popup_html)),this.popup.show(t)}hide_popup(){this.popup&&this.popup.hide()}trigger_event(t,e){this.options["on_"+t]&&this.options["on_"+t].apply(null,e)}get_oldest_starting_date(){return this.tasks.map(t=>t._start).reduce((t,e)=>e<=t?e:t)}clear(){this.$svg.innerHTML=""}}function generate_id(t){return t.name+"_"+Math.random().toString(36).slice(2,12)}Gantt.VIEW_MODE=VIEW_MODE;var Task=function(){function t(t){void 0===t&&(t={}),this._dependencies=[],this.id="",this.name="",this.start="",this.end="",this._progress=.52,Object.assign(this,t)}return Object.defineProperty(t.prototype,"progress",{get:function(){return this._progress||.52},set:function(t){this._progress=t||.52},enumerable:!0,configurable:!0}),t.prototype.setDependencies=function(t){this._dependencies=Array.isArray(t)?t:t.split(",").map(function(t){return t.trim()})},Object.defineProperty(t.prototype,"dependencies",{get:function(){return this._dependencies},set:function(t){this._dependencies=Array.isArray(t)?t:t.split(",").map(function(t){return t.trim()}).filter(Boolean)},enumerable:!0,configurable:!0}),t}();!function(t){t.QuarterDay="Quarter Day",t.HalfDay="Half Day",t.Day="Day",t.Week="Week",t.Month="Month"}(exports.ViewMode||(exports.ViewMode={}));var frappeGanttDefaultProps={viewMode:exports.ViewMode.Day,public:!1,onTasksChange:function(t){},onClick:function(t){},onDateChange:function(t,e,s){},onProgressChange:function(t,e){},onViewChange:function(t){}},FrappeGantt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._target=React.createRef(),e._svg=React.createRef(),e._gantt=null,e.state={viewMode:null,tasks:[]},e}return __extends(e,t),e.getDerivedStateFromProps=function(t,e){return{viewMode:t.viewMode,tasks:t.tasks.map(function(t){return new Task(t)})}},e.prototype.componentDidUpdate=function(){this._gantt&&(this._gantt.refresh(this.state.tasks),this._gantt.change_view_mode(this.state.viewMode))},e.prototype.componentDidMount=function(){var t=this;this._gantt=new Gantt(this._svg.current,this.state.tasks,{on_click:this.props.onClick,on_view_change:this.props.onViewChange,on_progress_change:function(e,s){t.props.onProgressChange(e,s),t.props.onTasksChange(t.props.tasks)},on_date_change:function(e,s,i){t.props.onDateChange(e,s,i),t.props.onTasksChange(t.props.tasks)}}),this._gantt&&this._gantt.change_view_mode(this.state.viewMode);var e=.5*this._svg.current.clientWidth;this._target.current.scrollLeft=e},e.prototype.render=function(){return React__default.createElement("div",{style:{overflow:"scroll"},ref:this._target},this.props.public?React__default.createElement("svg",{style:{pointerEvents:"none"},ref:this._svg,width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"}):React__default.createElement("svg",{ref:this._svg,width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"}))},e.defaultProps=frappeGanttDefaultProps,e}(React__default.Component);exports.FrappeGantt=FrappeGantt,exports.Task=Task;
