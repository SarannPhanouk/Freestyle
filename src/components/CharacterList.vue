<template>
  <div class="characters">
    <h1>One Piece Characters</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="grid-layout">
      <div v-for="character in characters" 
           :key="character.id" 
           class="card character-card">
        <div class="card-header">
          <h3>{{ character.name }}</h3>
          <span class="status" :class="character.status">{{ character.status }}</span>
        </div>
        
        <div class="character-info">
          <p><i class="fas fa-ruler"></i> Height: {{ character.size }}</p>
          <p><i class="fas fa-birthday-cake"></i> Age: {{ character.age }}</p>
          <p><i class="fas fa-user-tie"></i> Role: {{ character.job }}</p>
          <div class="bounty">
            <i class="fas fa-money-bill"></i>
            <span>{{ formatBounty(character.bounty) }} ฿</span>
          </div>
        </div>

        <div class="crew-info" v-if="character.crew">
          <h4>{{ character.crew.name }}</h4>
          <p>{{ character.crew.roman_name }}</p>
          <span v-if="character.crew.is_yonko" class="yonko-badge">Yonko Crew</span>
        </div>

        <div class="devil-fruit" v-if="character.fruit">
          <h4>Devil Fruit</h4>
          <img :src="character.fruit.filename" :alt="character.fruit.name">
          <p>{{ character.fruit.name }}</p>
          <p class="fruit-type">Type: {{ character.fruit.type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getCharacters } from '../api/onePiece';

export default {
  setup() {
    const characters = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const formatBounty = (bounty) => {
      return bounty?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    onMounted(async () => {
      try {
        const response = await getCharacters();
        characters.value = response.data;
      } catch (err) {
        error.value = 'Failed to load characters';
        console.error(err);
      } finally {
        loading.value = false;
      }
    });

    return { characters, loading, error, formatBounty };
  }
}
</script>

<style scoped>
.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  padding: 20px;
}

.character-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.character-card:hover {
  transform: translateY(-5px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.card-header h3 {
  margin: 0;
  color: #333;
  font-size: 1.5rem;
}

.status {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}

.status.living {
  background: #4caf50;
  color: white;
}

.character-info {
  margin: 15px 0;
}

.character-info p {
  margin: 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.bounty {
  margin-top: 10px;
  padding: 10px;
  background: #ffd700;
  border-radius: 8px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
}

.crew-info {
  margin-top: 15px;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 8px;
}

.yonko-badge {
  background: #ff4444;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}

.devil-fruit {
  margin-top: 15px;
  text-align: center;
}

.devil-fruit img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin: 10px 0;
}

.fruit-type {
  color: #666;
  font-style: italic;
}
</style>