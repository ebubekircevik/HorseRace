<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div> -->
  <div>
    <div>
      <Header @toggle-race="toggleRace" @generate-program="generateProgram"/>
    </div>
    <div class="grid-container">
      <div class="horses-list">
        <HorseList />
      </div>
      <div class="horses-race">
        <RaceDashboard :isPaused="isPaused" :isGenerated="isGenerated" />
      </div>
      <div class="horses-result">
        <RaceResult />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  // import HelloWorld from './components/HelloWorld.vue';
  import Header from './components/Header.vue';
  import HorseList from './components/HorseList.vue';
  import RaceDashboard from './components/RaceDashboard.vue';
  import RaceResult from './components/RaceResult.vue';

  export default Vue.extend({
    name: 'App',
    components: {
      // HelloWorld
      Header,
      HorseList,
      RaceDashboard,
      RaceResult
    },
    data() {
      return {
        isPaused: true,
        isGenerated: true,
      };
    },
    methods: {
      generateProgram(value: boolean) {
        this.isGenerated = value
      },
      toggleRace(value: boolean) {
        this.isPaused = value
      }
    }
  });
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }

  .grid-container {
    overflow: hidden;
    height: calc(100vh - 60px);
    display: grid;
    gap: 10px;
    grid-template-columns: 3fr 5fr 4fr;
    margin-top: 20px;
  }

  .grid-container>div {
    padding: 10px;
    background-color: #d6d6d6;
  }
</style>