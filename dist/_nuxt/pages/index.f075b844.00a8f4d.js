(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1547:function(t,o,n){},1548:function(t,o,n){},1549:function(t,o,n){"use strict";n.r(o);var r={data:function(){return{}},props:["diametro","titulo","icono","tamanoIcono","padding"],methods:{mostrarDiv:function(){this.$emit("mostrarDiv",{titulo:this.titulo})}},computed:{tamano:function(){return"height: "+this.diametro+"px;  width: "+this.diametro+"px;padding: "+this.padding+"; "}}},c=(n(1550),n(22)),component=Object(c.a)(r,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"wrapper2"},[n("div",{staticClass:"circulo dedo",style:t.tamano,on:{click:t.mostrarDiv}},[n("icon",{staticClass:"vcs",attrs:{name:t.icono,scale:t.tamanoIcono}}),t._v(" "),n("h3",[t._v(t._s(t.titulo))])],1)])}),[],!1,null,"62b02438",null);o.default=component.exports},1550:function(t,o,n){"use strict";var r=n(1547);n.n(r).a},1551:function(t,o,n){"use strict";var r=n(1548);n.n(r).a},1552:function(t,o,n){"use strict";n.r(o);var r={data:function(){return{verDatos:!0,mostrarInfo:!1,titulo:"",tamanoTerminal:"terminalSmall",iconAmpliacion:"window-maximize"}},components:{circulo:n(1549).default},methods:{apliarTerminal:function(){"terminalFull"===this.tamanoTerminal?(this.tamanoTerminal="terminalSmall",this.iconAmpliacion="window-maximize"):(this.tamanoTerminal="terminalFull",this.iconAmpliacion="window-restore")},cerrarTerminal:function(){this.mostrarInfo=!1,this.tamanoTerminal="terminalSmall",this.iconAmpliacion="window-maximize"},mostrarDiv:function(t){"Experiencia"===t.titulo?this.$store.dispatch("crearExperiencia"):"Sobre mí"===t.titulo?this.$store.dispatch("crearSobreMi"):"Formación"===t.titulo?this.$store.dispatch("crearFormacion"):"Habilidades"===t.titulo&&this.$store.dispatch("crearHabilidades"),this.titulo=t.titulo,this.mostrarInfo=!0},irAMapa:function(){window.open("https://goo.gl/maps/ooWd3fMBohv5coKr6","_blank")},irAEmail:function(){window.open("mailto:garsanhector@gmail.com")},irAtelefono:function(){window.open("tel:0034658527049")}},computed:{html:function(){return this.$store.state.html.html}}},c=(n(1551),n(22)),component=Object(c.a)(r,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"wrapper"},[n("circulo",{staticClass:"experiencia",attrs:{diametro:"250",titulo:"Experiencia",icono:"briefcase",tamanoIcono:"5",padding:"65px 0px 0px 0px;"},on:{mostrarDiv:t.mostrarDiv}}),t._v(" "),n("circulo",{staticClass:"formacion",attrs:{diametro:"200",titulo:"Formación",icono:"user-graduate",tamanoIcono:"4",padding:"45px 0px 0px;"},on:{mostrarDiv:t.mostrarDiv}}),t._v(" "),n("circulo",{staticClass:"sobremi",attrs:{diametro:"150",titulo:"Sobre mí",icono:"user-secret",tamanoIcono:"4",padding:"30px 0px 0px;"},on:{mostrarDiv:t.mostrarDiv}}),t._v(" "),n("circulo",{staticClass:"habilidades",attrs:{diametro:"200",titulo:"Habilidades",icono:"user-ninja",tamanoIcono:"4",padding:"45px 0px 0px;"},on:{mostrarDiv:t.mostrarDiv}}),t._v(" "),n("div",{staticClass:"circulo"},[n("div",[n("img",{staticClass:"foto",attrs:{src:"images/foto.jpg"}}),t._v(" "),n("h1",[t._v("Héctor García Sánchez")]),t._v(" "),n("ul",[n("li",{staticClass:"dedo",on:{click:t.irAMapa}},[n("icon",{staticClass:"vcs",attrs:{name:"map-marked",scale:"1"}}),t._v(" "),n("span",[t._v("Carretera de Benasque 1 1ºC cp: 22467 Villanova, Huesca")])],1),t._v(" "),n("li",{staticClass:"dedo",on:{click:t.irAEmail}},[n("icon",{staticClass:"vcs",attrs:{name:"at",scale:"1"}}),t._v(" "),n("span",[t._v("garsanhector@gmail.com")])],1),t._v(" "),n("li",{staticClass:"dedo",on:{click:t.irAtelefono}},[n("icon",{staticClass:"vcs",attrs:{name:"phone",scale:"1"}}),t._v(" "),n("span",[t._v("+34 658 52 70 49")])],1)])])]),t._v(" "),t.mostrarInfo?n("div",{staticClass:"wrapper3"},[n("div",{class:["terminal",t.tamanoTerminal]},[n("div",{staticClass:"barraSuperior"},[t._v("Terminal\n           \n           "),n("span",{on:{click:t.cerrarTerminal}},[n("icon",{staticClass:"vcs",attrs:{name:"window-close",scale:"1"}})],1),t._v(" "),n("span",{on:{click:t.apliarTerminal}},[n("icon",{staticClass:"vcs",attrs:{name:t.iconAmpliacion,scale:"1"}})],1)]),t._v(" "),n("div",{staticClass:"divHtml"},[n("div",{staticClass:"titulo"},[n("h2",[t._v(t._s(t.titulo))])]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.html)}})])])]):t._e()],1)}),[],!1,null,"2a32883f",null);o.default=component.exports;installComponents(component,{Circulo:n(1549).default})}}]);