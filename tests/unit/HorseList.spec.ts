import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import HorseList from '@/components/HorseList.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('HorseList.vue', () => {
  let getters: any;
  let store: any;

  beforeEach(() => {
    getters = {
      horses: () => [
        { id: 1, name: "Horse 1", condition: 85, color: 'blue' },
        { id: 2, name: "Horse 2", condition: 90, color: 'green' },
        { id: 3, name: "Horse 3", condition: 75, color: 'red' },
        { id: 4, name: "Horse 4", condition: 60, color: 'yellow' },
        { id: 5, name: "Horse 5", condition: 95, color: 'purple' },
        { id: 6, name: "Horse 6", condition: 80, color: 'orange' },
        { id: 7, name: "Horse 7", condition: 70, color: 'black' },
        { id: 8, name: "Horse 8", condition: 65, color: 'pink' },
        { id: 9, name: "Horse 9", condition: 85, color: 'cyan' },
        { id: 10, name: "Horse 10", condition: 55, color: 'magenta' },
        { id: 11, name: "Horse 11", condition: 80, color: 'blue' },
        { id: 12, name: "Horse 12", condition: 90, color: 'green' },
        { id: 13, name: "Horse 13", condition: 75, color: 'red' },
        { id: 14, name: "Horse 14", condition: 60, color: 'yellow' },
        { id: 15, name: "Horse 15", condition: 95, color: 'purple' },
        { id: 16, name: "Horse 16", condition: 80, color: 'orange' },
        { id: 17, name: "Horse 17", condition: 70, color: 'black' },
        { id: 18, name: "Horse 18", condition: 65, color: 'pink' },
        { id: 19, name: "Horse 19", condition: 85, color: 'cyan' },
        { id: 20, name: "Horse 20", condition: 55, color: 'magenta' },
      ],
    };

    store = new Vuex.Store({
      getters
    });
  });

  it('renders 20 horses in the list', () => {
    const wrapper = shallowMount(HorseList, { store, localVue });
    const rows = wrapper.findAll('tbody tr');
    expect(rows.length).toBe(20);
  });
});
