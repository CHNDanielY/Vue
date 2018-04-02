<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Header></Header>
    
      <echart></echart>
    
  </div>
</template>

<script>
import echart from './components/echars'
import  Header from './pages/header'
export default {
  name: 'App',
  data () {
    return {
      data: [
        ['', 'Kia', 'Nissan', 'Toyota', 'Honda'],
        ['2008', 10, 11, 12, 13],
        ['2009', 20, 11, 14, 13],
        ['2010', 30, 15, 12, 13]
      ]
    }
  },
  components:{
    Header, echart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
