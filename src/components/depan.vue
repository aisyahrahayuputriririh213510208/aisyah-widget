<template>
  <div class="widget">
    <h2 class="widget-title">{{ title }}</h2>
    <p class="widget-message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'WELCOME TO MY WIDGET',
      message: 'by aisyah',
    };
  },
};
</script>

<style scoped>
.widget {
  background-color: #dee6fa;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.widget-title {
  font-size: 32px;
  color: #333;
  margin-bottom: 10px;
}

.widget-message {
  font-size: 18px;
  color: #666;
  margin-bottom: 0;
}
</style>
