import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

interface Horse {
  id: number;
  name: string;
  condition: number;
  color: string;
}

export interface RootState {
  horses: Horse[];
  selectedHorses: Horse[][];
  raceResults: string[][];
  isPaused: boolean;
  isGenerated: boolean;
}

const storeOptions: StoreOptions<RootState> = {
  state: {
    horses: [
      {
        id: 1,
        name: "Alan Turing",
        condition: 85,
        color: 'blue'
      },
      {
        id: 2,
        name: "Grace Hopper",
        condition: 90,
        color: 'green'
      },
      {
        id: 3,
        name: "Charles Babbage",
        condition: 75,
        color: 'yellow'
      },
      {
        id: 4,
        name: "Katherine Johnson",
        condition: 95,
        color: 'purple'
      },
      {
        id: 5,
        name: "John von Neumann",
        condition: 80,
        color: 'orange'
      },
      {
        id: 6,
        name: "Hedy Lamarr",
        condition: 70,
        color: 'pink'
      },
      {
        id: 7,
        name: "Nikola Tesla",
        condition: 88,
        color: 'cyan'
      },
      {
        id: 8,
        name: "Marie Curie",
        condition: 92,
        color: 'magenta'
      },
      {
        id: 9,
        name: "Rosalind Franklin",
        condition: 78,
        color: 'red'
      },
      {
        id: 10,
        name: "Isaac Newton",
        condition: 85,
        color: 'blue'
      },
      {
        id: 11,
        name: "Galileo Galilei",
        condition: 83,
        color: 'green'
      },
      {
        id: 12,
        name: "Ada Lovelace",
        condition: 80,
        color: 'red'
      },
      {
        id: 13,
        name: "Carl Sagan",
        condition: 87,
        color: 'yellow'
      },
      {
        id: 14,
        name: "Albert Einstein",
        condition: 93,
        color: 'purple'
      },
      {
        id: 15,
        name: "Stephen Hawking",
        condition: 77,
        color: 'orange'
      },
      {
        id: 16,
        name: "Jane Goodall",
        condition: 86,
        color: 'pink'
      },
      {
        id: 17,
        name: "Margaret Hamilton",
        condition: 89,
        color: 'cyan'
      },
      {
        id: 18,
        name: "Leonardo da Vinci",
        condition: 91,
        color: 'magenta'
      },
      {
        id: 19,
        name: "Sally Ride",
        condition: 82,
        color: 'red'
      },
      {
        id: 20,
        name: "Neil deGrasse Tyson",
        condition: 84,
        color: 'blue'
      }
    ],
    selectedHorses: [],
    raceResults: [],
    isPaused: true,
    isGenerated: true,
  },
  getters: {
    horses: state => state.horses,
    selectedHorses: state => state.selectedHorses[state.selectedHorses.length - 1] || [],
    allSelectedHorses: state => state.selectedHorses,
    raceResults: state => state.raceResults,
    isPaused: state => state.isPaused,
    isGenerated: state => state.isGenerated
  },
  mutations: {
    setHorses(state, horses: Horse[]) {
      state.horses = horses;
    },
    setSelectedHorses(state, horses: Horse[]) {
      state.selectedHorses.push(horses);
    },
    addRaceResult(state, result: string[]) {
      state.raceResults.push(result);
    },
    resetRaceResults(state) {
      state.raceResults = [];
      state.selectedHorses = [];
    },
    setPause(state, puase: boolean) {
      state.isPaused = puase;
    },
    setGenerated(state, generated: boolean) {
      state.isGenerated = generated;
    },
  },
  actions: {
    generateHorses({ commit }, horses: Horse[]) {
      commit('setHorses', horses);
    },
    selectRandomHorses({ commit, state }) {
      const result: Horse[] = [];
      const usedIndices = new Set<number>();

      while (result.length < 10) {
        const randomIndex = Math.floor(Math.random() * state.horses.length);
        if (!usedIndices.has(randomIndex)) {
          result.push(state.horses[randomIndex]);
          usedIndices.add(randomIndex);
        }
      }
      commit('setSelectedHorses', result);
    },
    addRaceResult({ commit }, result: string[]) {
      commit('addRaceResult', result);
    },
    resetRaceResults({ commit }) {
      commit('resetRaceResults');
    },
    setPause({ commit }, result: boolean) {
      commit('setPause',result);
    },
    setGenerated({ commit }, result: boolean) {
      commit('setGenerated',result);
    },
  }
};

export default new Vuex.Store<RootState>(storeOptions);
