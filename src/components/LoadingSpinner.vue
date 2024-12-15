<template>
  <div class="loading-container">
    <div class="loading-content">
      <img src="https://seeklogo.com/images/M/mugiwara-logo-303FD55C54-seeklogo.com.png" 
           alt="Straw Hat Pirates Logo" 
           class="spinning-logo">
      <p class="loading-text">Loading...</p>
    </div>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  width: 100%;
}

.loading-content {
  text-align: center;
}

.spinning-logo {
  width: 100px;
  height: 100px;
  animation: spin 2s infinite linear, bounce 1s infinite alternate;
}

.loading-text {
  color: var(--primary);
  font-size: 1.2rem;
  margin-top: 1rem;
  animation: pulse 1.5s infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  from {
    transform: translateY(0) rotate(0deg);
  }
  to {
    transform: translateY(-10px) rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}
</style>