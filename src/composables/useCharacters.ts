import { ref, Ref } from 'vue';
import { Character } from '@/models/character';
import { getCharacters } from '@/api/onePiece';

export function useCharacters() {
  const characters: Ref<Character[]> = ref([]);
  const loading = ref(true);
  const error = ref<string | null>(null);

  const formatBounty = (bounty?: number): string => {
    return bounty?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ?? "0";
  };

  const fetchCharacters = async () => {
    try {
      const response = await getCharacters();
      characters.value = response.data;
    } catch (err) {
      error.value = 'Failed to load characters';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    characters,
    loading,
    error,
    formatBounty,
    fetchCharacters
  };
}