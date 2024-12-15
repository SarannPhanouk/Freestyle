<template>
    <div class="sagas">
      <h1>One Piece Sagas</h1>
      
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else class="saga-timeline">
        <div v-for="saga in sagas" 
             :key="saga.id" 
             class="saga-card">
          <div class="timeline-connector" :class="{ 'final': saga.saga_number === '10' }"></div>
          <div class="saga-number">{{ saga.saga_number }}</div>
          <div class="saga-content">
            <h2>{{ saga.title }}</h2>
            <div class="saga-details">
              <div class="detail-item">
                <i class="fas fa-book"></i>
                <span>Chapters: {{ saga.saga_chapitre }}</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-bookmark"></i>
                <span>Volumes: {{ saga.saga_volume }}</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-tv"></i>
                <span>Episodes: {{ saga.saga_episode }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSagas } from '@/composables/useSagas';

export default defineComponent({
  name: 'SagaList',
  setup() {
    const { sagas, loading, error, fetchSagas } = useSagas();

    // Call fetchSagas on mount
    fetchSagas();

    return {
      sagas,
      loading,
      error
    };
  }
});
</script>

<style scoped>
.sagas {
padding: 40px 20px;
background: #f5f5f5;
}

h1 {
text-align: center;
color: #c41e3a;
font-size: 2.5rem;
margin-bottom: 40px;
}

.saga-timeline {
position: relative;
max-width: 800px;
margin: 0 auto;
}

.saga-card {
position: relative;
margin: var(--spacing-lg) 0;
padding-left: 60px;
}

.saga-card:hover {
transform: translateX(10px);
}

.timeline-connector {
position: absolute;
left: 30px;
top: 0;
bottom: -40px;
width: 3px;
background: var(--primary);
}

.timeline-connector.final {
bottom: 0;
}

.saga-number {
position: absolute;
left: 15px;
top: 50%;
transform: translateY(-50%);
width: 30px;
height: 30px;
background: var(--primary);
color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
z-index: 1;
}

.saga-content {
background: var(--bg-card);
border-radius: var(--border-radius);
padding: var(--spacing-lg);
box-shadow: var(--shadow);
border-left: 4px solid var(--primary);
}

.saga-content h2 {
margin: 0 0 15px 0;
color: #333;
font-size: 1.5rem;
}

.saga-details {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
gap: 15px;
}

.detail-item {
display: flex;
align-items: center;
gap: 8px;
color: #666;
font-size: 0.9rem;
}

.detail-item i {
color: var(--primary);
}

@media (max-width: 600px) {
.saga-card {
    padding-left: 40px;
}

.timeline-connector {
    left: 20px;
}

.saga-number {
    left: 5px;
}
}
</style>