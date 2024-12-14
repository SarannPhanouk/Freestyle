<template>
  <div class="fruits">
    <h1>Devil Fruits</h1>
    <div class="filters">
      <button 
        v-for="type in fruitTypes" 
        :key="type"
        @click="filterByType(type)"
        :class="{ active: currentType === type }">
        {{ type }}
      </button>
    </div>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="grid-layout">
      <div v-for="fruit in filteredFruits" 
           :key="fruit.id" 
           class="card fruit-card">
        <div class="fruit-image">
          <img :src="fruit.filename" :alt="fruit.name">
        </div>
        <div class="fruit-info">
          <h3>{{ fruit.name }}</h3>
          <p class="roman-name">{{ fruit.roman_name }}</p>
          <span class="type-badge" :class="fruit.type.toLowerCase()">
            {{ fruit.type }}
          </span>
          <p class="description">{{ fruit.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { getFruits } from '../api/onePiece';

export default {
  setup() {
    const fruits = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const currentType = ref('All');
    const fruitTypes = ['All', 'Paramecia', 'Logia', 'Zoan'];

    const filterByType = (type) => {
      currentType.value = type;
    };

    const filteredFruits = computed(() => {
      if (currentType.value === 'All') {
        return fruits.value;
      }
      return fruits.value.filter(fruit => fruit.type === currentType.value);
    });

    onMounted(async () => {
      try {
        const response = await getFruits();
        fruits.value = response.data;
      } catch (err) {
        error.value = 'Failed to load fruits';
        console.error(err);
      } finally {
        loading.value = false;
      }
    });

    return { 
      fruits, 
      loading, 
      error, 
      currentType, 
      fruitTypes, 
      filterByType,
      filteredFruits
    };
  }
}
</script>

<style scoped>
.fruits {
  padding: 20px;
}

.filters {
  margin: 20px 0;
  display: flex;
  gap: 10px;
}

.filters button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.filters button.active {
  background: #4a90e2;
  color: white;
}

.fruit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.fruit-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s;
}

.fruit-card:hover {
  transform: translateY(-5px);
}

.fruit-card img {
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.fruit-info {
  padding: 15px;
}

.roman-name {
  color: #666;
  font-style: italic;
}

.type-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  margin: 8px 0;
  font-size: 0.9rem;
}

.type-badge.paramecia { background: #ffeb3b; }
.type-badge.logia { background: #f44336; color: white; }
.type-badge.zoan { background: #4caf50; color: white; }

.description {
  font-size: 0.9rem;
  line-height: 1.4;
}
</style>