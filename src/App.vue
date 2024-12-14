<template>
    <div class="app">
      <nav>
        <router-link to="/">Characters</router-link> |
        <router-link to="/sagas">Sagas</router-link> |
        <router-link to="/fruits">Fruits</router-link>
      </nav>
      <router-view></router-view>
    </div>
</template>

<style>
:root {
  --primary: #c41e3a;      /* One Piece red */
  --secondary: #ffd700;    /* Gold */
  --text-primary: #333;
  --text-secondary: #666;
  --bg-primary: #f5f5f5;
  --bg-card: #ffffff;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --border-radius: 12px;
  --shadow: 0 4px 12px rgba(0,0,0,0.1);
  --transition: all 0.3s ease;
}

.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
  background: var(--bg-primary);
}

nav {
  padding: var(--spacing-lg) 0;
  text-align: center;
}

nav a {
  color: var(--text-primary);
  text-decoration: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
  transition: var(--transition);
}

nav a:hover, nav a.router-link-active {
  background: var(--primary);
  color: white;
}

h1 {
  text-align: center;
  color: var(--primary);
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
}

.card {
  background: var(--bg-card);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.card:hover {
  transform: translateY(-5px);
}

.badge {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 4px;
  font-size: 0.9rem;
  display: inline-block;
}
</style>