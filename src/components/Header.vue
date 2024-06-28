<template>
  <div class="container">
    <div>Horse Racing</div>
    <div>
      <button @click="generateProgram">GENERATE PROGRAM</button>
      <button @click="toggleRace">{{ isPaused ? 'START' : 'PAUSE' }}</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {
    mapGetters,
    mapActions
  } from 'vuex';

  export default Vue.extend({
    name: 'Header',
    computed: {
      ...mapGetters(['isPaused','isGenerated']),
    },
    methods: {
      ...mapActions(['setPause', 'setGenerated']),
      generateProgram() {
        this.setGenerated(!this.isGenerated);
        this.setPause(true);
      },
      toggleRace() {
        this.setPause(!this.isPaused);
      }
    }
  });
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    background-color: #fe8a84;
  }

  button {
    margin-right: 10px;
  }
</style>