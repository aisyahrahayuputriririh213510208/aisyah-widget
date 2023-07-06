<template>
  <div id="app">
    <header class="app-header">
      <div class="header-container">
        <h1 class="header-title">My<span class="header-highlight">Widgets</span></h1>
        <nav>
          <ul>
            <li><router-link to="/cuaca" class="nav-link">Cuaca</router-link></li>
            <li><router-link to="/lokasi" class="nav-link">Lokasi</router-link></li>
            <li><router-link to="/stopwatch" class="nav-link">Stopwatch</router-link></li>
            <li><router-link to="/tebak" class="nav-link">Tebak Hewan</router-link></li>
            <li><router-link to="/poto" class="nav-link">Photo</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  text-align: center;
}

.app-header {
  background: linear-gradient(135deg, #f3a8de, #b07bc4);
  padding: 20px;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-title {
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  margin: 0;
}

.header-highlight {
  color: #ffcc00;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
}

nav a:hover {
  text-decoration: underline;
}
</style>
