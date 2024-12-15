import { ref, computed, Ref } from 'vue';
import { Fruit } from '@/models/fruit';
import { getFruits } from '@/api/onePiece';

export function useFruits() {
  const fruits: Ref<Fruit[]> = ref([]);
  const loading = ref(true);
  const error = ref<string | null>(null);
  const currentType = ref<string>('All');
  const fruitTypes = ['All', 'Paramecia', 'Logia', 'Zoan'];

  const filteredFruits = computed(() => {
    if (currentType.value === 'All') {
      return fruits.value;
    }
    return fruits.value.filter(fruit => fruit.type === currentType.value);
  });

  const filterByType = (type: string) => {
    currentType.value = type;
  };

  const fetchFruits = async () => {
    try {
      const response = await getFruits();
      fruits.value = response.data;
    } catch (err) {
      error.value = 'Failed to load fruits';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    fruits,
    loading,
    error,
    currentType,
    fruitTypes,
    filteredFruits,
    filterByType,
    fetchFruits
  };
}