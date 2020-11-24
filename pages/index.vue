<template>
  <div class="wrapper">
    <circulo
      diametro="250"
      titulo="Experiencia"
      icono="briefcase"
      tamanoIcono="5"
      padding="65px 0px 0px 0px;"
      class="experiencia"
      @mostrarDiv="mostrarDiv"
    ></circulo>
    <circulo
      diametro="200"
      titulo="Formación"
      icono="user-graduate"
      tamanoIcono="4"
      padding="45px 0px 0px;"
      class="formacion"
      @mostrarDiv="mostrarDiv"
    ></circulo>
    <circulo
      diametro="150"
      titulo="Sobre mí"
      icono="user-secret"
      tamanoIcono="4"
      padding="30px 0px 0px;"
      class="sobremi"
      @mostrarDiv="mostrarDiv"
    ></circulo>
    <circulo
      diametro="200"
      titulo="Habilidades"
      icono="user-ninja"
      tamanoIcono="4"
      padding="45px 0px 0px;"
      class="habilidades"
      @mostrarDiv="mostrarDiv"
    ></circulo>

    <div class="circulo">
      <div>
        <img src="images/foto.png" class="foto" />
        <h1>{{nombre}}</h1>
        <ul>
          <li @click="irAMapa" class="dedo">
            <icon name="map-marked" class="vcs" scale="1"></icon>
            <span>{{direccion}}</span>
          </li>
          <li @click="irAEmail" class="dedo">
            <icon name="at" class="vcs" scale="1"></icon>
            <span>{{email}}</span>
          </li>
          <li @click="irAtelefono" class="dedo">
            <icon name="phone" class="vcs" scale="1"></icon>
            <span>{{telefono}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrapper3" v-if="mostrarInfo">
      <div :class="['terminal',tamanoTerminal]">
        <div class="barraSuperior">
          Terminal
          <span @click="cerrarTerminal">
            <icon name="window-close" class="vcs" scale="1"></icon>
          </span>
          <span @click="apliarTerminal">
            <icon :name="iconAmpliacion" class="vcs" scale="1"></icon>
          </span>
        </div>
        <div class="divHtml">
          <div class="titulo">
            <h2>{{titulo}}</h2>
          </div>

          <div v-html="html"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import circulo from "~/components/circulo.vue";
export default {
  data() {
    return {
      nombre: this.$store.state.html.nombre,
      telefono: this.$store.state.html.telefono,
      email: this.$store.state.html.email,
      direccion: this.$store.state.html.direccion,
      verDatos: true,
      mostrarInfo: false,
      titulo: "",
      tamanoTerminal: "terminalSmall",
      iconAmpliacion: "window-maximize"
    };
  },
  components: {
    circulo: circulo
  },
  methods: {
    apliarTerminal() {
      if (this.tamanoTerminal === "terminalFull") {
        this.tamanoTerminal = "terminalSmall";
        this.iconAmpliacion = "window-maximize";
      } else {
        this.tamanoTerminal = "terminalFull";
        this.iconAmpliacion = "window-restore";
      }
    },
    cerrarTerminal() {
      this.mostrarInfo = false;
      this.tamanoTerminal = "terminalSmall";
      this.iconAmpliacion = "window-maximize";
    },
    mostrarDiv(obj) {
      if (obj.titulo === "Experiencia") {
        this.$store.dispatch("crearExperiencia");
      } else if (obj.titulo === "Sobre mí") {
        this.$store.dispatch("crearSobreMi");
      } else if (obj.titulo === "Formación") {
        this.$store.dispatch("crearFormacion");
      } else if (obj.titulo === "Habilidades") {
        this.$store.dispatch("crearHabilidades");
      }

      this.titulo = obj.titulo;
      this.mostrarInfo = true;
    },
    irAMapa() {
      window.open("https://goo.gl/maps/ooWd3fMBohv5coKr6", "_blank");
    },
    irAEmail() {
      window.open("mailto:garsanhector@gmail.com");
    },
    irAtelefono() {
      window.open("tel:0034658527049");
    }
  },
  computed: {
    html() {
      return this.$store.state.html.html;
    }
  }
};
</script>
<style scoped>
.habilidades {
  bottom: 5px;
  right: 5px;
}
.formacion {
  left: 5px;
  bottom: 5px;
}
.sobremi {
  left: 5px;
  top: 5px;
}
.experiencia {
  right: 5px;
  top: 5px;
}

@media screen and (max-width: 700px) {
  .habilidades {
    bottom: -40px;
    right: -40px;
  }
  .formacion {
    left: -40px;
    bottom: -40px;
  }
  .sobremi {
    left: -30px;
    top: -30px;
  }
  .experiencia {
    right: -60px;
    top: -60px;
  }
}

/*@media screen and (max-width: 800px) {
      .habilidades{
      margin-left: 200px;
      margin-top: 200px;
    }
    .formacion{
      margin-left: -200px;
      margin-top: 200px;
    }
    .sobremi{
      margin-left: -250px;
      margin-top: -150px;
    }
    .experiencia{
      margin-left: 200px;
      margin-top: -200px;

    }
}
@media screen and (max-width: 680px) {

      .habilidades{
      margin-left: 150px;
      margin-top: 200px;
    }
    .formacion{
      margin-left: -150px;
    margin-top: 200px;
    }
    .sobremi{
      margin-left: -200px;
    margin-top: -150px;
    }
    .experiencia{
      margin-left: 150px;
      margin-top: -240px;

    }
}
@media screen and (max-width: 550px) {
      .habilidades{
      margin-left: 110px;
      margin-top: 220px;
    }
    .formacion{
      margin-left: -120px;
    margin-top: 220px;
    }
    .sobremi{
          margin-left: -140px;
    margin-top: -240px;
    }
    .experiencia{
      margin-left: 120px;
      margin-top: -245px;

    }
}*/

.wrapper3 {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* this is what centers your element in the fixed wrapper*/
  display: flex;
  flex-flow: column nowrap;
  justify-content: center; /* aligns on vertical for column */
  align-items: center; /* aligns on horizontal for column */
  z-index: 2000;
}
.barraSuperior {
  padding: 10px;
  background-color: #6f96ec;
  color: #05173b;
  text-align: center;
}
.barraSuperior span {
  float: right;
  margin-left: 10px;
  cursor: pointer;
}
.titulo {
  text-align: center;
  padding: 10px;
}
.terminalFull {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.terminalSmall {
  width: 700px;
  min-height: 400px;
  max-height: 600px;
}
@media screen and (max-width: 680px) {
  .terminalSmall {
    width: 100%;
    min-height: 400px;
    max-height: 600px;
  }
}
.terminal {
  bottom: 0;
  background-color: #0d0208;
  color: #ffffff;
  border-radius: 10px;
  border: 4px solid #6f96ec;
  font-size: 0.9rem;
}
.divHtml {
  padding: 2px;
  overflow: auto;
  max-height: 90%;
}

.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  /* this is what centers your element in the fixed wrapper*/
  display: flex;
  flex-flow: column nowrap;
  justify-content: center; /* aligns on vertical for column */
  align-items: center; /* aligns on horizontal for column */

  background-image: url("/images/fondoGlobal.jpg");
  background-position: center top;
  background-size: 100% auto;
}

.circulo {
  text-align: center;
  vertical-align: middle;
  padding: 80px;
  height: 500px;
  width: 500px;
  background-color: #3166d6;
  border: 4px solid #6f96ec;
  border-radius: 50%;
  color: #eff3f6;
  font-weight: bold;
  background-image: url("/images/fondoAzul.jpg");
  box-shadow: 10px 10px 5px rgba(49, 165, 219, 0.8);
}
.foto {
  width: 100px;
  border: 3px solid #ffffff;
}
ul li {
  padding: 10px;
}
ul li span {
  padding: 5px;
}
</style>

