<template>
  <div>
    <div class="header">Horse List (1-20)</div>
    <div class="container">
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th class="name">Name</th>
              <th class="condition">Condition</th>
              <th class="color">Color</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="horse in horses" :key="horse.id">
              <td class="name">{{ horse.name }}</td>
              <td class="condition">{{ horse.condition }}</td>
              <td class="color">{{ horse.color }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters(['horses']),
  },
});
</script>

<style scoped>
.header {
  padding: 5px;
  background-color: #f2eb47;
}

.container {
  background-color: white;
}

.table-container {
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #e5e5e5;
}

thead tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

thead, th {
  position: sticky;
  top: 0;
  z-index: 1;
}

tbody {
  display: block;
  width: 100%;
}

tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

.name {
  width: 50%;
  text-align: center;
}

.condition {
  width: 30%;
  text-align: center;
}

.color {
  width: 20%;
  text-align: center;
}

table,
th,
td {
  border: 1px solid gray;
  padding: 10px;
}
</style>
