<template>
  <div class="wrapper2">
    
     <div class="circulo dedo" :style="tamano" @click="mostrarDiv">
       
         <icon :name="icono" class="vcs" :scale="tamanoIcono"></icon>
         <h3>{{titulo}}</h3>
         
       
       </div>
      
     
    
  </div>
</template>

<script>
export default {
  data(){
    return{
     
    }
  },
    props:["diametro","titulo","icono","tamanoIcono","padding"],
  methods:{
    mostrarDiv(){
      this.$emit("mostrarDiv",{titulo:this.titulo});
    }
    
  },
  computed:{
    tamano()
    {
      return "height: "+ this.diametro +"px;  width: "+this.diametro +"px;padding: " + this.padding + "; "
    }
  }
   
}
</script>
<style scoped>


.wrapper2 {
  position: fixed;
  
  
  /* this is what centers your element in the fixed wrapper*/
  display: flex;
  flex-flow: column nowrap;
  justify-content: center; /* aligns on vertical for column */
  align-items: center; /* aligns on horizontal for column */
  z-index: 1001;

}


.circulo {
  
  text-align: center;
  vertical-align: middle;
  
   
  background-color: #3166d6;
  border-radius: 50%;
  border: 4px solid #6f96ec;
  color: #eff3f6;
  font-weight: bold;
   background-image: url("/images/fondoAzul.jpg");
   box-shadow: 10px 10px 5px rgba(49, 165, 219, 0.5);
  
  
}

</style>

