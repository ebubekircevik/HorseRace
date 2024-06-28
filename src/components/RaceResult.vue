<template>
  <div>
    <div class="tables">
      <div class="programs">
        <div class="program-header">Program</div>
        <div class="program-horses list">
          <div class="item" v-for="(program, raceIndex) in allSelectedHorses" :key="raceIndex">
            <div class="header">{{(raceIndex+1)}}ST Lap - {{laps[raceIndex]}}m</div>
            <table>
              <thead>
                <tr>
                  <th class="positon">Positon</th>
                  <th class="name">Name</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white" v-for="(item, index) in program">
                  <td class="positon">{{ (index+1) }}</td>
                  <td class="name">{{ item.name }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="results">
        <div class="result-header">Results</div>
        <div class="result-horses list">
          <div class="item" v-for="(result, raceIndex) in raceResults" :key="raceIndex">
            <div class="header">{{(raceIndex+1)}}ST Lap - {{laps[raceIndex]}}m</div>
            <table>
              <thead>
                <tr>
                  <th class="positon">Positon</th>
                  <th class="name">Name</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white" v-for="(item, index) in result">
                  <td class="positon">{{ (index+1) }}</td>
                  <td class="name">{{ item }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {
    mapGetters
  } from 'vuex';

  export default Vue.extend({
    name: 'RaceResult',
    data() {
      return {
        laps: [1200, 1400, 1600, 1800, 2000, 2200],
      };
    },
    computed: {
      ...mapGetters(['raceResults', 'allSelectedHorses']),
    },
  });
</script>

<style scoped>
  .tables {
    display: grid;
    grid-template-columns: 50% 50%;
    text-align: center;
    border: 1px solid black;
  }

  .program-header {
    border-right: 1px solid black;
    padding: 10px;
    background-color: #3d8af7;
  }

  .result-header {
    padding: 10px;
    background-color: #93d26c;
  }

  .item>.header {
    background-color: #ef6e59;
  }

  table {
    width: 100%;
  }

  table,
  th,
  td {
    border: 1px solid gray;
    border-collapse: collapse;
  }

  .bg-white {
    background-color: white;
  }

  .list {
    max-height: calc(100vh - 120px);
    overflow-y: auto;
  }
</style>