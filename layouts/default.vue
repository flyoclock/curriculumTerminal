<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.dedo{
  cursor: pointer;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.cursor{
  height: 15px;
  width: 8px;
  background-color:#008F11;
  float:left;
}
.parpadea {
  
  animation-name: parpadeo;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  -webkit-animation-name:parpadeo;
  -webkit-animation-duration: 1s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
}

@-moz-keyframes parpadeo{  
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
  100% { opacity: 1.0; }
}

@-webkit-keyframes parpadeo {  
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
   100% { opacity: 1.0; }
}

@keyframes parpadeo {  
  0% { opacity: 1.0; }
   50% { opacity: 0.0; }
  100% { opacity: 1.0; }
}
.homeTerminal {
      color: #fff;
    font-weight: bold;
    position: relative;
    width: 60px;
    background-color: #1271d6;
    float: left;    
    padding-left: 5px;
}

.homeTerminal:after {
  content: '';
    position: absolute;
    left: 60px;
    width: 0;
    height: 0;
    border: transparent solid 7.5px;
    border-left-color: #1271d6;
    z-index: 100;
      
}
.homeTerminalPath {
      color: #fff;
    font-weight: bold;
    position: relative;
    width: 30px;
    background-color: #5f6266;
    float: left;
    margin-right: 15px;
    padding-left: 15px;
}

.homeTerminalPath:after {
  content: '';
    position: absolute;
    left: 30px;
    width: 0;
    height: 0;
    border: transparent solid 7.5px;
    border-left-color: #5f6266;
      
}
.centrar{
  text-align: center;
}
</style>
