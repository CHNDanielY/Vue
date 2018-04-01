<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <cool-table :data="data" :settings="{}"></cool-table>
  </div>
</template>

<script>
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
