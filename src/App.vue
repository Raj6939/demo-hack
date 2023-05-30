<template>
  <div id="app">
    <HelloWorld v-for="(card, index) in cards" :key="index" :card="card"/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import project from "../projects.json"
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      cards:project
      // cards: [
      //   { id: 1, title: 'Card 1', description: 'Description for Card 1' },
      //   { id: 2, title: 'Card 2', description: 'Description for Card 2' },
      //   { id: 3, title: 'Card 3', description: 'Description for Card 3' },
      //   { id: 4, title: 'Card 3', description: 'Description for Card 3' },
      //   { id: 5, title: 'Card 3', description: 'Description for Card 3' },
      //   { id: 6, title: 'Card 3', description: 'Description for Card 3' }
      // ]
    }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
