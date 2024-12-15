import { ref, Ref } from 'vue';
import { Saga } from '@/models/saga';
import { getSagas } from '@/api/onePiece';

export function useSagas() {
  const sagas: Ref<Saga[]> = ref([]);
  const loading = ref(true);
  const error = ref<string | null>(null);

  const fetchSagas = async () => {
    try {
      const response = await getSagas();
      sagas.value = response.data;
    } catch (err) {
      error.value = 'Failed to load sagas';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    sagas,
    loading,
    error,
    fetchSagas
  };
}