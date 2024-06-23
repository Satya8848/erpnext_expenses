(()=>{var d=class{destroy(){for(let e in this)this.$hasProp(e)&&delete this[e]}$type(e){if(e==null)return e===null?"Null":"Undefined";let i=Object.prototype.toString.call(e).slice(8,-1);return i==="Number"&&isNaN(e)?"NaN":i}$hasProp(e,i){return Object.prototype.hasOwnProperty.call(i||this,e)}$isof(e,i){return e!=null&&this.$type(e)===i}$isObjLike(e){return e!=null&&typeof e=="object"}$isStr(e){return this.$isof(e,"String")}$isStrVal(e){return this.$isStr(e)&&e.length}$isNum(e){return this.$isof(e,"Number")&&isFinite(e)}$isBool(e){return e===!0||e===!1}$isBoolLike(e){return this.$isBool(e)||e===0||e===1}$isFunc(e){return typeof e=="function"||/(Function|^Proxy)$/.test(this.$type(e))}$isArr(e){return this.$isof(e,"Array")}$isArrVal(e){return this.$isArr(e)&&e.length}$isArgs(e){return this.$isof(e,"Arguments")}$isArgsVal(e){return this.$isArgs(e)&&e.length}$isArrLike(e){return this.$isObjLike(e)&&!this.$isStr(e)&&this.$isNum(e.length)&&(e.length===0||e[e.length-1]!=null)}$isBaseObj(e){return this.$isof(e,"Object")}$isObj(e,i){return this.$isObjLike(e)&&(!(e=Object.getPrototypeOf(e))||this.$hasProp("constructor",e)&&this.$isFunc(e.constructor)&&(!i||this.$fnStr(e.constructor)===this.$fnStr(Object)))}$fnStr(e){return Function.prototype.toString.call(e)}$isEmptyObj(e){if(this.$isObjLike(e)){for(let i in e)if(this.$hasProp(i,e))return!1}return!0}$isDataObj(e){return this.$isObj(e,1)}$isDataObjVal(e){return this.$isDataObj(e)&&!this.$isEmptyObj(e)}$isEmpty(e){return e==null||e===""||e===0||e===!1||this.$isArrLike(e)&&e.length==0||this.$isEmptyObj(e)}$ext(e,i,s,n){if(this.$isDataObj(e))for(let r in e)this.$getter(r,e[r],s,n,i);return this}$def(e,i){return this.$ext(e,i,0)}$xdef(e,i){return this.$ext(e,i,0,1)}$static(e,i){return this.$ext(e,i,1)}$getter(e,i,s,n,r){return r=r||this,s||(r["_"+e]=i),(s||n)&&r[e]==null&&Object.defineProperty(r,e,s?{value:i}:{get(){return this["_"+e]}}),this}$extend(){let e=this.$toArr(arguments),i=this.$isBool(e[0])&&e.shift(),s=this.$isBaseObj(e[0])?e.shift():{};for(let n=0,r=e.length;n<r;n++)if(!!this.$isBaseObj(e[n]))for(let l in e[n])!this.$hasProp(l,e[n])||e[n][l]==null||(!i||!this.$isBaseObj(s[l])||!this.$isBaseObj(e[n][l])?s[l]=e[n][l]:this.$extend(i,s[l],e[n][l]));return s}$toArr(e,i,s){try{return Array.prototype.slice.call(e,i,s)}catch(n){return[]}}$toJson(e,i){try{return JSON.stringify(e)}catch(s){return i}}$parseJson(e,i){try{return JSON.parse(e)}catch(s){return i}}$fn(e,i){return e.bind(i||this)}$afn(e,i,s){return i==null?this.$fn(e,s):(i=this.$isArr(i)?i.slice():[i],i.unshift(s||this),e.bind.apply(e,i))}$call(e,i,s){switch(i!=null&&!this.$isArrLike(i)&&(i=[i]),s=s||this,(i||"").length){case 0:return e.call(s);case 1:return e.call(s,i[0]);case 2:return e.call(s,i[0],i[1]);case 3:return e.call(s,i[0],i[1],i[2]);case 4:return e.call(s,i[0],i[1],i[2],i[3]);case 5:return e.call(s,i[0],i[1],i[2],i[3],i[4]);default:return e.apply(s,i)}}$timeout(e,i,s){return i==null?e&&window.clearTimeout(e)||this:window.setTimeout(this.$afn(e,s),i||0)}$proxy(e,i){return e=this.$fn(e),{_r:null,_fn:function(s,n){this.cancel();let r=function(){s.length?e.apply(null,s):e()};this._r=n?window.setTimeout(r,i):r()},call:function(){this._fn(arguments)},delay:function(){this._fn(arguments,1)},cancel:function(){this._r&&(this._r=window.clearTimeout(this._r))}}}},u=class extends d{constructor(e,i,s,n,r){super();this._mod=e,this._key=i,this._tmp="_"+this._key,this._doc=new RegExp("^"+s),this._real=this._key+"_",this._pfx="["+this._key.toUpperCase()+"]",this._ns=n+(n.slice(-1)!=="."?".":""),this._prod=!!r,this.$xdef({is_ready:!0}),this._events={sock:!!frappe.socketio.socket,list:{},real:{},once:"ready destroy after_destroy".split(" ")}}$alert(e,i,s,n,r){return i==null&&(i=e)&&(e=null),r&&(this._err=1),e={title:this.$isStrVal(e)?e:this._mod+" "+s,indicator:n},this.$isDataObj(i)?e=this.$extend(i,e):e.message=""+i,(r?frappe.throw:frappe.msgprint)(e),this}debug(e,i,s){return this._prod?this:this.$alert(e,i,s,__("Debug"),"gray")}log(e,i,s){return this._prod?this:this.$alert(e,i,s,__("Log"),"cyan")}info(e,i,s){return this.$alert(e,i,s,__("Info"),"light-blue")}warn(e,i,s){return this.$alert(e,i,s,__("Warning"),"orange")}error(e,i,s){return this.$alert(e,i,s,__("Error"),"red")}fatal(e,i,s){return this.$alert(e,i,s,__("Error"),"red",1)}$console(e,i){return this._prod?this:(this.$isStr(i[0])?i[0]=(this._pfx+" "+i[0]).trim():Array.prototype.unshift.call(i,this._pfx),(console[e]||console.log).apply(null,i),this)}_debug(){return this.$console("debug",arguments)}_log(){return this.$console("log",arguments)}_info(){return this.$console("info",arguments)}_warn(){return this.$console("warn",arguments)}_error(){return this.$console("error",arguments)}ajax(e,i,s,n){i=this.$extend({type:"GET",headers:{}},this.$isBaseObj(i)&&i),s=this.$isFunc(s)?this.$fn(s):null,n=this.$isFunc(n)?this.$fn(n):null;let r=i.type!="get"&&i.type!="head";var l=new XMLHttpRequest;l.open(i.type.toUpperCase(),e,!0,i.username,i.password),l.responseType=i.responseType||"text",i.timeout&&(l.timeout=i.timeout),i.withCredentials&&(l.withCredentials=t),i.mimeType&&l.overrideMimeType(i.mimeType),l.setRequestHeader("Content-type","application/"+(r?"json":"x-www-form-urlencoded")),!i.crossDomain&&l.setRequestHeader("X-Requested-With","XMLHttpRequest");for(let _ in i.headers)this.$hasProp(_,i.headers)&&l.setRequestHeader(_,i.headers[_]);l.onload=this.$fn(function(){l.clear();let _=l.status===0?200:l.status;if(_<200||_>=300)return l.throw();s&&s(this.$parseJson(l.responseText,l.responseText),_)}),l.throw=this.$fn(function(){let _=this.$isStrVal(l.statusText)?__(l.statusText):__("The ajax request sent failed.");n?n({message:_,code:l.status===0?200:l.status}):this.error(_)}),l.onabort=l.onerror=l.ontimeout=function(){l.clear(),l.abort(),l.throw()};try{l.send(this._ajax_data(i.data,r))}catch(_){if(n?n(_):this.error(_.message),this._err)throw _}finally{this._err=0}return this}_ajax_data(e,i){if(this.$isStr(e)||this.$isOf(e,"FormData"))return e;if(this.$isOf(e,"HTMLFormElement"))return new FormData(e);if(i||this.$isArr(e)||!this.$isBaseObj(e))return this.$toJson(e);let s="",n=window.encodeURIComponent;for(let r in e)if(!!this.$hasProp(r,e))if(!this.$isArr(e[r]))s=s+n(r)+"="+n(e[r])+"&";else for(let l=0,_=e[r].length;l<_;l++)s=s+n(r)+(_>1?"["+l+"]=":"=")+n(e[r][l])+"&";return s.substring(0,s.length-1)||null}get_method(e){return this._ns+e}request(e,i,s,n){s=this.$isFunc(s)&&this.$fn(s),n=this.$isFunc(n)&&this.$fn(n);let r={method:e.includes(".")?e:this.get_method(e),callback:this.$fn(function(l){if(l=this.$isObjLike(l)&&l.message||l,!this.$isDataObj(l)||!l.error)return s&&s(l);l=this.$isDataObjVal(l)&&(this.$isStrVal(l.message)&&__(l.message)||this.$isStrVal(l.error)&&__(l.error))||__("The request sent returned an invalid response."),n?n({message:l}):this.error(l,i)}),error:this.$fn(function(l,_){l=this.$isStrVal(l)&&__(l)||this.$isStrVal(_)&&__(_)||__("The request sent raised an error."),n?n({message:l}):this.error(l)})};this.$isDataObjVal(i)&&this.$extend(r,{type:"POST",args:i});try{frappe.call(r)}catch(l){if(n?n(l):this.error(l.message),this._err)throw l}finally{this._err=0}return this}on(e,i){return this._on(e,i)}xon(e,i){return this._on(e,i,0,1)}once(e,i){return this._on(e,i,1)}xonce(e,i){return this._on(e,i,1,1)}real(e,i,s){return this._on(e,i,s,0,1)}xreal(e,i,s){return this._on(e,i,s,1,1)}off(e,i,s){if(e==null)return this._off();if(this.$isBoolLike(e))return this._off(0,1);if(!this.$isStrVal(e))return this;i=this.$isFunc(i)&&i,e=e.split(" ");for(let n=0,r=e.length,l;n<r;n++)l=(s?this._real:"")+e[n],this._events.list[l]&&this._off(l,i);return this}emit(e){let i=this.$toArr(arguments,1);e=e.split(" ");for(let s=0,n=e.length;s<n;s++)this._events.list[e[s]]&&this._emit(e[s],i);return this}_on(e,i,s,n,r){e=e.split(" "),i=this.$fn(i);for(let l=this._events,_=0,h=e.length,o;_<h;_++){if(o=(r?this._real:"")+e[_],o===l.once[0]&&this._is_ready){i();continue}l.once.includes(o)&&(s=1),l.list[o]||(l.list[o]=[],r&&l.sock&&frappe.realtime.on(o,l.real[o]=this._rfn(o))),l.list[o].push({f:i,o:s,s:n})}return this}_rfn(e){return this.$fn(function(i){i=this.$isObjLike(i)&&i.message||i,this._emit(e,i!=null?[i]:i,1)})}_off(e,i){if(e&&i)this._del(e,i);else if(e){let s=this._events;s.real[e]&&frappe.realtime.off(e,s.real[e]),delete s.list[e],delete s.real[e]}else for(let s in this._events.list)i?this._off(s,i):this._del(s);return this}_del(e,i){let s=this._events.list[e].slice(),n=[];for(let r=0,l=0,_=s.length;l<_;l++)(i?s[l].f!==i:s[l].s)&&(n[r++]=s[l]);n.length?this._events.list[e]=n:this._off(e)}_emit(e,i,s){let n=this._events.list[e].slice(),r=[],l=s?Promise.wait(300):Promise.resolve();l.catch(this.$fn(function(_){this._error("Events emit",_,i,_.message,_.stack)}));for(let _=0,h=0,o=n.length;h<o;h++)l.then(this.$afn(n[h].f,i)),!n[h].o&&(r[_++]=n[h]);r.length?this._events.list[e]=r:this._off(e)}},f=class extends u{constructor(e,i,s,n,r){super(e,i,s,n,r);this.$xdef({is_enabled:!0}),this._router={obj:null,old:0,val:["app"]},this._win={e:{unload:this.$fn(this.destroy),popstate:this.$fn(function(){this._win.fn.delay()}),change:this.$fn(function(){this._win.fn.call(1)})},fn:this.$proxy(function(l){this.is_self_list()&&this.clean_list()||this.is_self_form()&&this.clean_form(),this._routes(),this.emit(l?"page_change":"page_pop")},200)},window.addEventListener("beforeunload",this._win.e.unload),window.addEventListener("popstate",this._win.e.popstate),this._route_change("on")}options(e){return this.$static(e)}destroy(){this._win.fn.cancel(),window.removeEventListener("beforeunload",this._on_unload),window.removeEventListener("popstate",this._state_popped),this._route_change("off"),this.emit("destroy").emit("after_destroy").off(1),super.destroy()}_route_change(e){if(!this._router.obj){for(let i=["router","route"],s=0,n=i.length;s<n;s++)if(!!frappe[i[s]]){this._router.obj=frappe[i[s]],this._router.old=s<1;break}}this._router.obj&&this._router.obj[e]&&this._router.obj[e]("change",this._win.e.change)}_routes(){let e;try{this._router.obj&&(e=(this._router.old?e:frappe.get_route())||this._router.obj.parse())}catch(i){}this.$isArrVal(e)&&(this._router.val=e)}route(e){return this._router.val[e]||this._router.val[0]}get is_list(){return this.route(0).toLowerCase()==="list"}get is_form(){return this.route(0).toLowerCase()==="form"}get is_self(){return this._doc.test(this.route(1).toLowerCase())}is_doctype(e){return this.route(1)===e}_is_self_view(e,i){return(this.is_form&&(e=this.get_form(e))||this.is_list&&(e=this.get_list(e)))&&this._doc.test((e&&e.doctype||this.route(1)).toLowerCase())}get_list(e){return(e=e||window.cur_list)&&this.$isObjLike(e)?e:null}get_form(e){return(e=e||window.cur_frm)&&this.$isObjLike(e)?e:null}is_self_list(e){return this._is_self_view(e)}setup_list(e){if(!(e=this.get_list(e))||!this.is_self_list(e))return this;e[this._tmp]={disabled:0};let i="toggle_actions_menu_button";return this._is_enabled?(e[this._tmp].disabled=0,e["_"+i]&&(e[i]=e["_"+i]),delete e["_"+i],e.page.clear_inner_toolbar(),e.set_primary_action()):e[this._tmp].disabled||(e[this._tmp].disabled=1,e.page.hide_actions_menu(),e.page.clear_primary_action(),e.page.add_inner_message(__("{0} app is disabled.",[this._mod])).removeClass("text-muted").addClass("text-danger"),e["_"+i]=e[i],e[i]=function(){}),this}clean_list(e){if(!(e=this.get_list(e)))return this;delete e[this._tmp];let i="toggle_actions_menu_button";return e["_"+i]&&(e[i]=e["_"+i]),delete e["_"+i],this}is_self_form(e){return this._is_self_view(e,1)}clean_form(e){return(e=this.get_form(e))&&delete e[this._tmp],this}setup_form(e,i){if(!(e=this.get_form(e))||!this.is_self_form(e))return this;e[this._tmp]={disabled:0,intro:0,fields:[]};try{this._is_enabled?this.enable_form(e,i):this.disable_form(e,__("{0} app is disabled.",[this._mod]),i)}catch(s){this._error("Setup form error",s.message,s.stack)}return this}enable_form(e,i){if(!(e=this.get_form(e)))return this;let s;try{s=this.is_self_form(e)&&e[this._tmp];let n=s&&s.disabled?s.fields:null;if(s&&!s.disabled||n&&!n.length)return this;for(let r=0,l=e.fields.length,_;r<l;r++)_=e.fields[r],!(n&&!n.includes(_.df.fieldname))&&(_.df.fieldtype==="Table"?this._enable_table(e,_.df.fieldname):this._enable_field(e,_.df.fieldname));!!e.is_new()||!this._has_flow(e,i)?e.enable_save():e.page.show_actions_menu(),s&&s.intro&&(s.intro=0,e.set_intro())}catch(n){this._error("Enable form",n.message,n.stack)}finally{try{s&&this.$extend(s,{disabled:0,fields:[]})}catch(n){}this.emit("form_enabled",e)}return this}disable_form(e,i,s,n){if(!(e=this.get_form(e)))return this;n==null&&this.$isStr(s)&&(n=s,s=0);let r;try{if(r=this.is_self_form(e)&&e[this._tmp],r&&r.disabled)return this;for(let l=0,_=e.fields.length,h;l<_;l++)h=e.fields[l].df,h.fieldtype==="Table"?this._disable_table(e,h.fieldname):this._disable_field(e,h.fieldname);!!e.is_new()||!this._has_flow(e,s)?e.disable_save():e.page.hide_actions_menu()}catch(l){this._error("Disable form",l.message,l.stack)}finally{try{this.$isStrVal(i)&&(r&&(r.intro=1),e.set_intro(i,n||"red"))}catch(l){}try{r&&(r.disabled=1)}catch(l){}this.emit("form_disabled",e)}return this}_has_flow(e,i){try{return e&&i&&e.states&&e.states.get_state()}catch(s){}}get_field(e,i,s,n,r){return(e=this.get_form(e))?this._get_field(e,i,s,n,r):null}_get_field(e,i,s,n,r){let l=e.get_field(i);if(l&&s!=null&&(l=l.grid&&l.grid.get_row(s)),l&&n!=null&&(l=r?l.grid_form&&(l.grid_form.fields_dict||{})[n]:l.get_field(n)),l)return l}_reload_field(e,i,s,n){s!=null&&(e=this._get_field(e,i,s)),e&&e.refresh_field&&e.refresh_field(s==null?i:n)}_toggle_translatable(e,i){!cint(e.df.translatable)||!e.$wrapper||(e=e.$wrapper.find(".clearfix .btn-translation"),e.length&&(i?e.show():e.hide()))}enable_field(e,i,s,n){return(e=this.get_form(e))&&this._enable_field(e,i,s,n),this}_enable_field(e,i,s,n){try{let r=this.is_self_form(e)&&e[this._tmp],l=s==null?i:[i,s,n].join("-");if(r&&!r.fields.includes(l))return;let _=this._get_field(e,i,s,n);if(!_||!_.df||!!cint(_.df.hidden)||!this._is_field(_.df.fieldtype))return;if(r&&(l=r.fields.indexOf(l))>=0&&r.fields.splice(l,1),s==null&&e.set_df_property(i,"read_only",0),s==null)return this._toggle_translatable(_,1);_=this._get_field(e,i,s),_&&_.set_field_property(n,"read_only",0),_=this._get_field(e,i,s,n,1),_&&_.df&&this._toggle_translatable(_,1)}catch(r){}}disable_field(e,i,s,n){return(e=this.get_form(e))&&this._disable_field(e,i,s,n),this}_disable_field(e,i,s,n){try{let r=this.is_self_form(e)&&e[this._tmp].fields,l=s==null?i:[i,s,n].join("-");if(r&&r.includes(l))return;let _=this._get_field(e,i,s,n);if(!_||!_.df||!!cint(_.df.hidden)||!this._is_field(_.df.fieldtype))return;if(r&&r.push(l),s==null&&e.set_df_property(i,"read_only",1),s==null)return this._toggle_translatable(_,0);_=this._get_field(e,i,s),_&&_.set_field_property(n,"read_only",1),_=this._get_field(e,i,s,n,1),_&&_.df&&this._toggle_translatable(_,0)}catch(r){}}_is_field(e){return e&&!/^((Tab|Section|Column) Break|Table)$/.test(e)}enable_table(e,i){return(e=this.get_form(e))&&this._enable_table(e,i),this}_enable_table(e,i){try{let s=this.is_self_form(e)&&(e[this._tmp]||{}).fields,n;if(s&&!s.includes(i))return;s&&(n=s.indexOf(i))>=0&&s.splice(n,1);let r=e.get_field(i);if(!r||!r.df||!!cint(r.df.hidden)||r.df.fieldtype!=="Table"||!r.grid)return;if(r.df.__in_place_edit!=null&&(r.df.in_place_edit=r.df.__in_place_edit),delete r.df.__in_place_edit,r=r.grid,r.meta&&r.__editable_grid!=null&&(r.meta.editable_grid=r.__editable_grid),delete r.__editable_grid,r.__static_rows!=null&&(r.static_rows=r.__static_rows),delete r.__static_rows,r.__sortable_status!=null&&(r.sortable_status=r.__sortable_status),delete r.__sortable_status,this._reload_field(e,i),r.__header_row!=null&&r.header_row.configure_columns_button.toggleClass("hidden",0).children().toggleClass("hidden",0),delete r.__header_row,r.__header_search!=null&&r.header_search.wrapper.toggleClass("hidden",0),delete r.__header_search,r.__editable&&r.grid_rows&&r.grid_rows.length)for(let l=0,_=r.grid_rows.length;l<_;l++)r.grid_rows[l].open_form_button.toggleClass("hidden",0).children().toggleClass("hidden",0),r.grid_rows[l].refresh();delete r.__header_search,r.wrapper&&this._toggle_buttons(r,1,!!s)}catch(s){}}disable_table(e,i,s){return!this.$isDataObj(s)&&(s=null),(e=this.get_form(e))&&this._disable_table(e,i,s),this}_disable_table(e,i,s){try{let n=this.is_self_form(e)&&(e[this._tmp]||{}).fields,r=e.get_field(i);if(!r||!r.df||!!cint(r.df.hidden)||r.df.fieldtype!=="Table"||!r.grid)return;if(n&&!n.includes(i)&&n.push(i),r.df.__in_place_edit!==r.df.in_place_edit&&(r.df.__in_place_edit=r.df.in_place_edit),r.df.in_place_edit=!1,r=r.grid,r.meta&&(r.__editable_grid!==r.meta.editable_grid&&(r.__editable_grid=r.meta.editable_grid),r.meta.editable_grid=!0),r.__static_rows!==r.static_rows&&(r.__static_rows=r.static_rows),r.static_rows=!0,(!s||!s.sortable)&&(r.__sortable_status!==r.sortable_status&&(r.__sortable_status=r.sortable_status),r.sortable_status=!1),this._reload_field(e,i),(!s||!s.configurable)&&r.header_row&&r.header_row.configure_columns_button&&!r.header_row.configure_columns_button.hasClass("hidden")&&(r.__header_row=1,r.header_row.configure_columns_button.toggleClass("hidden",1).children().toggleClass("hidden",1),r.header_row.configure_columns_button.off("click")),r.header_search&&r.header_search.wrapper&&!r.header_search.wrapper.hasClass("hidden")&&(r.__header_search=1,r.header_search.wrapper.toggleClass("hidden",1)),(!s||!s.editable)&&r.grid_rows&&r.grid_rows.length){r.__editable=1;for(let l=0,_=r.grid_rows.length,h;l<_;l++)h=r.grid_rows[l],h.open_form_button.toggleClass("hidden",1).children().toggleClass("hidden",1),h.row.off("click")&&h.row_index.off("click")&&h.open_form_button.off("click")&&h.hide_form()}r.wrapper&&this._toggle_buttons(r,0,!!n,s&&s.buttons)}catch(n){}}toggle_table_buttons(e,i,s,n){if(!(e=this.get_form(e)))return this;!this.$isArrVal(n)&&(n=null);try{let r=e.get_field(i);if(!r||!r.df||r.df.fieldtype!=="Table"||!r.grid)return this;r.wrapper&&this._toggle_buttons(r.grid,s,0,n)}catch(r){}return this}_toggle_buttons(e,i,s,n){let r={add:".grid-add-row",multi_add:".grid-add-multiple-rows",download:".grid-download",upload:".grid-upload"},l,_;for(let h in r)n&&!n.includes(h)||(l="__"+h,_=e.wrapper.find(r[h]),!(!_.length||_.hasClass("hidden")===(s&&e[l]==i))&&(i?delete e[l]:e[l]=1,_.toggleClass("hidden",!i)))}_set_field_desc(e,i){let s=0;return i&&e.set_new_description?s++&&e.set_new_description(i):e.set_description&&(e.df&&i&&(e.df.__description=e.df.description),e.df&&!i&&(i=e.df.__description,delete e.df.__description),s++&&e.set_description(i)),s&&e.toggle_description&&e.toggle_description(e,!!i),s}set_field_desc(e,i,s,n,r){if(!(e=this.get_form(e)))return this;r==null&&cstr(s).length&&n==null&&(r=s,s=null);try{let l=this._get_field(e,i,s,n,1);l&&this._set_field_desc(l,r)}catch(l){}return this}valid_field(e,i,s,n){if(!(e=this.get_form(e)))return this;try{let r=this._get_field(e,i,s,n,1);if(!r)return this;let l=0;r.df&&r.df.invalid&&(r.df.invalid=0,r.set_invalid&&r.set_invalid(),l++),this._set_field_desc(r)&&l++,l&&this._reload_field(e,i,s,n)}catch(r){}return this}invalid_field(e,i,s,n,r){if(!(e=this.get_form(e)))return this;r==null&&cstr(s).length&&n==null&&(r=s,s=null);try{let l=this._get_field(e,i,s,n,1);if(!l)return this;let _=0;l.df&&!l.df.invalid&&(l.df.invalid=1,l.set_invalid&&l.set_invalid(),_++),this.$isStrVal(r)&&this._set_field_desc(l,r)&&_++,_&&this._reload_field(e,i,s,n)}catch(l){}return this}},c=class{constructor(e){this._c=[],this._n=(e||0)+1;for(let i=0;i<this._n;i++)this._c[i]=[]}get length(){return this._c[0].length}col(e){return this._c[e||0]}idx(e,i){return this.col(i).indexOf(e)}has(e,i){return(e=this.idx(e,i))>=0&&this.col(i)[e]!=null}add(){let e=arguments,i=this.idx(e[0]);if(i>=0)for(let s=1;s<this._n;s++)(e[s]!=null||this._c[s][i]==null)&&(this._c[s][i]=e[s]);else for(let s=0;s<this._n;s++)this._c[s].push(e[s]);return this}del(e,i){if((i=this.idx(e,i))>=0)for(let s=0;s<this._n;s++)this._c[s].splice(i,1);return this}row(e,i){if((i=this.idx(e,i))<0)return null;let s=[];for(let n=0;n<this._n;n++)s[n]=this._c[n][i];return s}clear(){for(let e=0;e<this._n;e++)this._c[e].length&&this._c[e].splice(0,this._c[e].length);return this}};frappe.provide("frappe.exp");var p=class extends f{constructor(e){super(__("Expenses"),"exp","Expense","expenses.libs",0);this.options(e),this.$xdef({is_ready:!1,is_enabled:!1}),this._is_settings?this._init():this.request("is_enabled",null,this._init,function(){this.fatal(__("Status check failed."))})}get _is_settings(){return this.is_doctype("Expenses Settings")}_init(e){this._is_ready=!0,this._is_enabled=!!e,!this._is_settings&&this.xreal("app_status_changed",function(i){if(!this.$isDataObj(i)||i.is_enabled==null)this.fatal("Invalid status change event.");else{i.is_enabled=!!i.is_enabled;let s=this._is_enabled!==i.is_enabled;this._is_enabled=i.is_enabled,s&&this.emit("changed")}}),this.emit("ready")}focus(e,i,s,n){if(!(e=this.get_form(e)))return this;let r=this._get_field(e,i,s,n,1);if(r&&r.$input?r.$input.focus():!s&&r&&r.grid&&r.grid.wrapper&&r.grid.wrapper.focus(),!r||!s)return this;let l=this._get_field(e,i,s);return l&&l.row&&(r=l.row.find('[data-fieldname="'+n+'"]'),r.length?r.first().focus():l.row.find('input[type="Text"],textarea,select').filter(":visible:first").focus()),this}set_cache(e,i,s,n){i={___:i},cint(s)>0&&this.$isStrVal(n)&&(i.e=moment().add(s,n).format(frappe.defaultDatetimeFormat));try{sessionStorage.setItem(this._real+e,this.$toJson(i))}catch(r){}return this}get_cache(e){let i;try{i=this.$parseJson(sessionStorage.getItem(this._real+e))}catch(s){return}if(i&&i.___!=null){if(i.e!=null){let s=moment(i.e,frappe.defaultDatetimeFormat);if(cint(s.diff(moment(),"seconds"))>0)return}i=i.___}return i}pop_cache(e){let i=this.get_cache(e);return this.del_cache(e),i}del_cache(e){try{sessionStorage.removeItem(this._real+e)}catch(i){}return this}table(e){return new c(e)}};frappe.exp=function(a){return frappe.exp._init?frappe.exp._init.options(a):frappe.exp._init=new p(a),frappe.exp._init};$(document).ready(function(){function a(s){return typeof s=="function"}let e="core-polyfill",i=function(){Promise.wait=function(s){return new Promise(function(n){window.setTimeout(n,s)})},Promise.prototype.timeout=function(s){return Promise.race([this,Promise.wait(s).then(function(){throw new Error("Time out")})])}};if(a(String.prototype.trim)&&a(String.prototype.includes)&&a(String.prototype.startsWith)&&a(String.prototype.endsWith)&&a(Array.prototype.includes)&&a(Function.prototype.bind)&&a(window.Promise))i();else{let s=document.getElementById(e);s?i():(s=document.createElement("script"),s.id=e,s.src="https://polyfill.io/v3/polyfill.min.js?features=String.prototype.trim%2CString.prototype.includes%2CString.prototype.startsWith%2CString.prototype.endsWith%2CArray.prototype.includes%2CFunction.prototype.bind%2CPromise",s.type="text/javascript",s.async=!0,s.onload=i,document.getElementsByTagName("head")[0].appendChild(s))}XMLHttpRequest.prototype.clear=function(){this.onload=this.onerror=this.onabort=this.ontimeout=null}});})();
//# sourceMappingURL=expenses.bundle.6IJZP3CW.js.map
