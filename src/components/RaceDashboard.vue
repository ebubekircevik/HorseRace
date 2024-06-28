<template>
  <div>
    <div style="padding: 0 25px;">
      <div class="container" ref="container">
        <div class="line" v-for="(horse, index) in currentSelectedHorses" :key="index">
          <div class="line-number d-inline"><span>{{ index + 1 }}</span></div>
          <div class="road d-inline" style="width: 100%;">
            <img class="horse-icon" :id="`horse${index + 1}`" src="../../public/icons/horses.svg">
          </div>
        </div>
      </div>
    </div>
    <div class="finish-course">
      <div class="course" style="text-align: end;">{{ currentLapText }}</div>
      <div class="finish" style="text-align: end;">FINISH</div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {
    mapGetters,
    mapActions
  } from 'vuex';

  interface Horse {
    id: number;
    name: string;
    condition: number;
    color: string;
  }

  export default Vue.extend({
    name: 'RaceDashboard',
    components: {},
    data() {
      return {
        currentLap: 0,
        laps: [1200, 1400, 1600, 1800, 2000, 2200], // Lap distances
        raceInterval: null as any, // To store the interval ID
        positions: Array(10).fill(0), // Track positions of horses
        finishedHorses: [] as Horse[]
      };
    },
    watch: {
      isPaused(value) {
        this.toggleRace();
      },
      isGenerated() {
        this.generateProgram();
      },
    },
    computed: {
      ...mapGetters({
        horses: 'horses',
        selectedHorses: 'selectedHorses',
        allSelectedHorses: 'allSelectedHorses',
        raceResults: 'raceResults',
        isPaused: 'isPaused',
        isGenerated: 'isGenerated',
      }),
      currentLapText(): string {
        if (this.currentLap >= this.laps.length) {
          return `${this.laps.length}. Lap ${this.laps[this.laps.length - 1]}m`;
        } else {
          return `${this.currentLap + 1}. Lap ${this.laps[this.currentLap]}m`;
        }
      },
      currentSelectedHorses(): Horse[] {
        return this.allSelectedHorses[this.currentLap] || Array(10).fill(0);
      }
    },
    methods: {
      ...mapActions(['selectRandomHorses', 'addRaceResult', 'resetRaceResults', 'setPause']),
      toggleRace() {
        if (!this.isPaused) {
          this.moveHorses();
        } else {
          clearInterval(this.raceInterval);
        }
      },
      generateProgram() {
        clearInterval(this.raceInterval);
        this.currentLap = 0;
        this.positions = Array(10).fill(0);
        this.resetHorsesPosition();
        this.finishedHorses = [];
        this.resetRaceResults();
        this.selectRandomHorses();
      },
      moveHorses() {
        if (this.currentLap >= this.laps.length) {
          console.log('All races completed');
          return;
        }

        const container = this.$refs.container as HTMLElement;
        if (!container) {
          return;
        }

        const horses = container.querySelectorAll('.horse-icon') as NodeListOf < HTMLElement > ;
        const horseConditions = (this.currentSelectedHorses as Horse[]).map(horse => horse.condition);

        const distance = container.offsetWidth - 110;

        const move = () => {
          horses.forEach((horse, index) => {
            if (!this.finishedHorses.includes(this.currentSelectedHorses[index])) {
              this.positions[index] += horseConditions[index] * 0.1; // Adjust speed based on condition
              horse.style.marginLeft = `${this.positions[index]}px`;

              if (this.positions[index] >= distance) {
                this.finishedHorses.push(this.currentSelectedHorses[index]);
                // console.log(`Finished: ${this.currentSelectedHorses[index].name}`);
              }
            }
          });

          if (this.finishedHorses.length < 10) { // Continue the race till all horses finish
            if (!this.isPaused) {
              this.raceInterval = setTimeout(move, 100);
            }
          } else {
            console.log(`Race ${this.currentLap + 1} finished:`, this.finishedHorses.map(horse => horse.name));
            this.addRaceResult(this.finishedHorses.map(horse => horse.name));
            this.currentLap++;
            if (this.currentLap < this.laps.length) {
              this.finishedHorses = [];
              this.positions = Array(10).fill(0); // Reset positions for the next race

              this.selectRandomHorses();
              this.moveHorses();
            } else {
              console.log('All races completed');
              this.setPause(true);
            }
          }
        };

        move();
      },
      resetHorsesPosition() {
        const container = this.$refs.container as HTMLElement;
        if (!container) {
          return;
        }
        const horses = container.querySelectorAll('.horse-icon') as NodeListOf < HTMLElement > ;
        horses.forEach((horse, index) => {
          horse.style.marginLeft = '10px';
        });
      }
    },
    mounted() {
      this.generateProgram();
    }
  });
</script>

<style scoped>
  .d-inline {
    display: inline-block;
  }

  .header {
    padding: 5px;
    background-color: #f2eb47;
  }

  .container {
    background-color: #d6d6d6;
    border-bottom: 1px dashed black;
    border-right: 5px solid red;
  }

  .track {
    position: relative;
    width: 100%;
    height: 520px;
    background-color: #f0f0f0;
  }

  .horse {
    position: absolute;
    width: 40px;
    height: 40px;
    background-image: url('file:///Users/ebubekircevik/Downloads/horse-svgrepo-com.svg');
    background-size: cover;
    transition: left 1s linear;
  }

  .line {
    display: flex;
    align-items: center;
    border-top: 1px dashed black;
  }

  .line-number {
    background-color: green;
    padding: 20px 10px;
    margin: -1px 0;
    border: 3px solid white;
  }

  .line-number>span {
    transform: rotate(-90deg);
    display: inline-block;
    width: 16px;
  }

  .finish-course {
    margin-top: 10px;
    color: red;
    font-weight: bold;
    display: grid;
    grid-template-columns: auto auto;
  }

  .horse-icon {
    width: 50px;
    margin-left: 10px;
  }
</style>