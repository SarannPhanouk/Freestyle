import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import CharacterList from '../components/CharacterList.vue';
import FruitList from '../components/FruitList.vue';
import SagaList from '../components/SagaList.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Characters',
    component: CharacterList
  },
  {
    path: '/fruits',
    name: 'Fruits', 
    component: FruitList
  },
  {
    path: '/sagas',
    name: 'Sagas',
    component: SagaList
  }
];

export default createRouter({
  history: createWebHashHistory(),  // Change to hash history
  routes
});