import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '@/App.vue';
import Header from '@/components/Header.vue';
import HorseList from '@/components/HorseList.vue';
import RaceDashboard from '@/components/RaceDashboard.vue';
import RaceResult from '@/components/RaceResult.vue';

describe('App.vue', () => {

  it('renders Header component', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent(Header).exists()).toBe(true);
  });

  it('renders HorseList component', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent(HorseList).exists()).toBe(true);
  });

  it('renders RaceDashboard component', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent(RaceDashboard).exists()).toBe(true);
  });

  it('renders RaceResult component', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent(RaceResult).exists()).toBe(true);
  });
});
