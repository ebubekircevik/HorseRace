import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Header from '@/components/Header.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Header.vue', () => {
  let actions: any;
  let getters: any;
  let store: any;

  beforeEach(() => {
    actions = {
      setPause: jest.fn(),
      setGenerated: jest.fn()
    };
    getters = {
      isPaused: () => true,
      isGenerated: () => false
    };
    store = new Vuex.Store({
      actions,
      getters
    });
  });

  it('calls generateProgram when GENERATE PROGRAM button is clicked', async () => {
    const wrapper = shallowMount(Header, { store, localVue });
    const generateProgramButton = wrapper.find('button');
    
    await generateProgramButton.trigger('click');
    
    expect(actions.setGenerated).toHaveBeenCalled();
  });

  it('calls toggleRace when START/PAUSE button is clicked', async () => {
    const wrapper = shallowMount(Header, { store, localVue });
    const toggleRaceButton = wrapper.findAll('button').at(1);
    
    await toggleRaceButton.trigger('click');
    
    expect(actions.setPause).toHaveBeenCalled();
  });
});
