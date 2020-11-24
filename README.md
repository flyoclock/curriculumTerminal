# curriculumTerminal
<h1>Curriculum virtual formato circulos y Terminal</h1>

<h4>Antes de nada deberemos tener instalados git y nuxt</h4>
    <b>https://nuxtjs.org/docs/2.x/get-started/installation</b>
    <b>https://www.atlassian.com/es/git/tutorials/install-git</b>
<h4>Para empezar a trabajar haremos un clone de nuestra aplicación</h4>

Abrimos un terminal:

Vamos a la ubicacion donde queramos clonar la aplicación:

<b>cd [path donde queremos que se clone]</b>

<b>git clone https://github.com/flyoclock/curriculumTerminal.git</b>

Para lanzar la aplicación en nuestro local:

<b>cd curriculumTerminal</b>

<b>npm install</b>

<b>npm run dev</b>


<h4>En "store/html/index.js modifique los siguientes valores</h4>
<ul>
<li>nombre:"Rigoberto Cazuela Fresca",</li>
<li>direccion:"Poblado de NEVER NEVER LAND a la derecha",</li>
<li>telefono:"555 55 55 55",</li>
<li>email:"posallivoy@nevernever.land"</li>
</ul>

Hay una acción para cada parte del curriculum (crearHabilidades,crearFormacion,crearSobreMi,crearExperiencia)

Enpezaremos con:
 <b>context.commit("limpiarHtml");</b>

Entre medias añadiremos el html (recomiendo linea por linea) con :
 <b>context.commit("anadirHtml", "<br><b>&#9632;  Puesto</b> -> Analista Programador y Desarrollador<br>");</b>

Y siempre finalizaremos con:ç

 <b>context.commit("anadirHtml", "<div><div class='homeTerminal'>hector</div><div class='homeTerminalPath'>~</div><div class='parpadea cursor'> ..</div></div>");</b>

<h4>Reemplazaremos la imagen en stati/images/foto.png</h4>





