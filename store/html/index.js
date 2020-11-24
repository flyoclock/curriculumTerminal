export default {
  state: {
    html: "",
    nombre:"Rigoberto Cazuela Fresca",
    direccion:"Poblado de NEVER NEVER LAND a la derecha",
    telefono:"555 55 55 55",
    email:"posallivoy@nevernever.land"
  },
  actions: {
    crearHabilidades(context) {
      context.commit("limpiarHtml");
      context.commit("anadirHtml", "<ul><li>Trabajador</li><li>Creador de equipos</li><li>Resolutivo</li><li>Observador</li><li>Ágil</li><li>Analítico</li><li>Determinado</li><li>Colaborador</li><li>Amable</li><li>Creativo</li><li>Flexible a diferentes situaciones.</li></ul><br><br><br>");
      context.commit("anadirHtml", "<div><div class='homeTerminal'>hector</div><div class='homeTerminalPath'>~</div><div class='parpadea cursor'> ..</div></div>");

    },
    crearFormacion(context) {
      context.commit("limpiarHtml");
      context.commit("anadirHtml", "Formación universitaria<br>");
      context.commit("anadirHtml", "************<br>");

      context.commit("anadirHtml", "<h3>Técnico en Informática de Sistemas</h3> ");
      context.commit("anadirHtml", "Universidad de Alcala de Henares<br>");
      context.commit("anadirHtml", "Septiembre 2002 - Junio 2006 <br>");

      context.commit("anadirHtml", "<h3>Licenciatura en Física</h3> ");
      context.commit("anadirHtml", "Universidad Complutense<br>");
      context.commit("anadirHtml", "Septiembre 1997 - Junio 2002 <br><br>");

      context.commit("anadirHtml", "Formación complementaria<br>");
      context.commit("anadirHtml", "************<br>");
      context.commit("anadirHtml", "- Diseño y desarrollo de paginas web (150 horas)<br>");
      context.commit("anadirHtml", "- Programación .NET con Visual Basic  (200 horas)<br>");
      context.commit("anadirHtml", "- Curso Photoshop  (80 horas)<br>");
      context.commit("anadirHtml", "- Comercio electrónico y negocios online  (80 horas)<br><br>");

      context.commit("anadirHtml", "Idiomas<br>");
      context.commit("anadirHtml", "************<br>");
      context.commit("anadirHtml", "- Castellano Lengua materna");
      context.commit("anadirHtml", "- Inglés Nivel medio hablado y escrito<br><br>");

      context.commit("anadirHtml", "<div><div class='homeTerminal'>hector</div><div class='homeTerminalPath'>~</div><div class='parpadea cursor'> ..</div></div>");

    },



    crearSobreMi(context) {
      context.commit("limpiarHtml");
      context.commit("anadirHtml", "&nbsp;Me defino como una persona inquieta y un curioso incansable en temas relacionados con las nuevas tecnologías y la informática desde que era niño.. <br><br> ");
      context.commit("anadirHtml", "&nbsp;Soy una persona altamente resolutiva que disfruta mucho en el proceso de búsqueda de soluciones. <br><br> ");
      context.commit("anadirHtml", "&nbsp;Dispongo de capacidad de liderazgo y puedo afirmar que en los proyectos en los que he participado he hecho gran equipo con mis compañeros, contribuyendo activamente en la colaboración y buen ambiente entre todos. Habiendo sido ésta una de las claves del éxito de la gran productividad conseguida.<br><br>");
      context.commit("anadirHtml", "&nbsp;Me enorgullece saber que mi trabajo tiene una finalidad y le doy más valor a esto que al aspecto económico.<br><br>");
      context.commit("anadirHtml", "&nbsp;Además, me considero una persona creativa que constantemente está proponiendo nuevas ideas.<br><br>");
      context.commit("anadirHtml", "Mi gran afición es el parapente y una frase que me define muy bien es esta: “En su sencillez radica su belleza”.<br><br>");
      context.commit("anadirHtml", "<div><div class='homeTerminal'>hector</div><div class='homeTerminalPath'>~</div><div class='parpadea cursor'> ..</div></div>");


    },
    crearExperiencia(context) {
      context.commit("limpiarHtml");
      context.commit("anadirHtml", "<div class='centrar'>******************************************************************************<h5>03/08/2018 -> ACTUALIDAD :  TANDEM TEAM, S.L.N.E.</h5>******************************************************************************</div>");

      context.commit("anadirHtml", "<br><b>&#9632;  Puesto</b> -> Analista Programador y Desarrollador<br>");
      context.commit("anadirHtml", "<b>&#9632;  Tecnologías usadas</b> -> Vue, nuxt, firebase  y bootstrap<br>");
      context.commit("anadirHtml", "<b>&#9632;  Herramientas</b> -> Gimp o Photoshop, Visual Studio Code y npm <br>");
      context.commit("anadirHtml", "<b>&#9632;  Descripción del trabajo realizado</b> -> Analizar y desarrollar una web app para la gestión interna de empresas de turismo activo  <br>");
      context.commit("anadirHtml", "<br>La Web app consta de:<br>- Panel de configuración: Este panel permite al usuario configurar la herramienta para adaptarla a su negocio (Cambiar colores, cambiar logo para impresión de vouchers,crear textos genéricos personalizados de Whats app, configurar tipo de actividades.... ).<br>  <br>");
      context.commit("anadirHtml", "<br>- Calendario: En el calendario podremos ver y gestionar las diversas actividades, realizar envíos de Whats app predeterminados, email, etc<br>");
      context.commit("anadirHtml", "<br>- Área de clientes: Permite realizar búsquedas de manera sencilla a la ficha de cada cliente, donde veremos las distintas actividades que realizó y sus datos personales.<br>");
      context.commit("anadirHtml", "<br>- Informes: Se pueden generar distintos informes de todos los tipos de actividades, pudiendo filtrar en tiempo real con búsquedas de distintos campos excluyentes.<br>");
      context.commit("anadirHtml", "<br>- Visión instructor: El “rol instructor” permite al instructor confirmar su trabajo de forma intuitiva y sencilla.<br>");
      context.commit("anadirHtml", "<br>- Visión proveedor: Permite a un proveedor poder realizar reservas y poder hacer un seguimiento de ellas<br>");
   

      context.commit("anadirHtml", "<div class='centrar'>******************************************************************************<h5>10/06/2014 -> 05/06/2018 :  THINGNOVATION, S.A.</h5>******************************************************************************</div>");

      context.commit("anadirHtml", "<br><b>&#9632;  Puesto</b> -> Analista Programador y Desarrollador,Programación robótica basada en arduino<br>");
      context.commit("anadirHtml", "<b>&#9632;  Tecnologías usadas</b> -> Magento, lenguaje de programación de Arduino basado en C++,Vue, nuxt, firebase, GeoPoint  y bootstrap<br>");
      context.commit("anadirHtml", "<b>&#9632;  Herramientas</b> -> Gimp o Photoshop, Atom y npm,  IDE de arduino. <br>");
      context.commit("anadirHtml", "<b>&#9632;  Descripción del trabajo realizado</b> ->Análisis y desarrollo de una aplicación web de geolocalización.<br> Adaptación y desarrollo de la tienda online de la empresa.<br>Desarrollo de varios proyectos con hadware libre(Arduino).<br> - Seguidor solar.<br>  - Impresora 3d redimensonable.<br> - Variómetro especifico para vuelo.<br>  - Pequeños proyectos enfocado a la venta de kits.<br>  - Domótica<br>   - Etc <br>");
      context.commit("anadirHtml", "<br>Desarrollo de aplicacion web para la recepción y muestra de datos meteorológicos, con estaciones metereológicas mostradas en mapa.<br><br><br>");

      context.commit("anadirHtml", "<div class='centrar'>******************************************************************************<h5>06/02/2008 -> 05/06/2014 :  ENTEL IT CONSULTING, S.A.</h5>******************************************************************************</div>");

      context.commit("anadirHtml", "<br><b>&#9632;  Puesto</b> -> Analista Programador y Desarrollador<br>");
      context.commit("anadirHtml", "<b>&#9632;  Tecnologías usadas</b> ->Flex y flash,C#,java,jquerry<br>");
      context.commit("anadirHtml", "<b>&#9632;  Herramientas</b> -> Visual estudio,Eclipse,Flex<br>");
      context.commit("anadirHtml", "<b>&#9632;  Descripción del trabajo realizado</b> -><br>");

      context.commit("anadirHtml", "Proyecto: Uno-e<br><br>");

      context.commit("anadirHtml", "Cambio de toda la estética a pantallas configurables con diversos widgets en Jquery<br>");

      context.commit("anadirHtml", "Proyecto: BBVA particulares<br>");

      context.commit("anadirHtml", "Cambio de toda la estética a pantallas configurables con diversos widgets en Jquery<br>");
      context.commit("anadirHtml", "Desarrollo de la Base de Datos para personalizar por cada usuario<br>");
      context.commit("anadirHtml", "Valoración de proyectos (definición de costes, recursos, jornadas, etc)<br>");

      context.commit("anadirHtml", "Proyecto: BBVA Mobility Office(I+D)<br><br>");

      context.commit("anadirHtml", "Analisis y desarrollo de un escritorio virtual analizando y desarrollando en .Net sobre base de datos en Sql <br>");
      context.commit("anadirHtml", "Herramienta para la administración del escritorio virtual (usuarios, menús, widget....)<br>");
      context.commit("anadirHtml", "Desarrollo de toda la parte móvil de este proyecto; para ello ha desarrollado controles de usuario que facilitará la creación de páginas wap, que se adaptan a las capacidades de cada terminal.<br><br><br>");



      context.commit("anadirHtml", "<div class='centrar'>******************************************************************************<h5>01/02/2002 -> 05/08/2008 :  EBRAIN-MOBIGROUND, S.L</h5>******************************************************************************</div>");

      context.commit("anadirHtml", "<br><b>&#9632;  Puesto</b> -> Analista Programador y Desarrollador<br>");
      context.commit("anadirHtml", "<b>&#9632;  Tecnologías usadas</b> ->C#, mysql,flash <br>");
      context.commit("anadirHtml", "<b>&#9632;  Herramientas</b> -> Visual estudio<br>");
      context.commit("anadirHtml", "<b>&#9632;  Descripción del trabajo realizado</b> ->Análisis y desarrollo de la parte de gestión de portales y contenidos (BACK y FRONT) de la plataforma ECAP.<br><br><br>");

      context.commit("anadirHtml", "<div><div class='homeTerminal'>hector</div><div class='homeTerminalPath'>~</div><div class='parpadea cursor'> ..</div></div>");
    }
  },
  mutations: {
    limpiarHtml(state) {
      state.html = "";
    },
    anadirHtml(state, html) {
      state.html = state.html + html;
    }
  },
}