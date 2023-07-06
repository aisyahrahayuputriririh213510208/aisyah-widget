<template>
  <div class="guess-animal-widget">
    <h2>Tebak Hewan</h2>
    <div v-if="isGameEnded" class="result-message">{{ resultMessage }}</div>
    <div v-else>
      <label for="guess-input">{{ currentAnimal.text }}</label>
      <input type="text" id="guess-input" v-model.trim="userGuess">
      <button @click="checkGuess">Tebak</button>
    </div>
    <button v-if="isGameEnded" @click="playAgain">Main Lagi</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animals: [
        { name: 'singa', text: 'Hewan ini memiliki rambut tebal dan singa jantan memiliki jambul.' },
        { name: 'gajah', text: 'Hewan ini memiliki belalai panjang dan dua gigi taring yang disebut gading.' },
        { name: 'jerapah', text: 'Hewan ini memiliki leher panjang dan memiliki lidah yang sangat panjang.' },
        { name: 'harimau', text: 'Hewan ini merupakan kucing besar dengan belang hitam dan cokelat pada tubuhnya.' },
      ],
      currentAnimalIndex: Math.floor(Math.random() * 4),
      userGuess: '',
      isGameEnded: false,
      resultMessage: '',
    };
  },
  computed: {
    currentAnimal() {
      return this.animals[this.currentAnimalIndex];
    },
  },
  methods: {
    checkGuess() {
      const correctAnswer = this.currentAnimal.name.toLowerCase();
      const userAnswer = this.userGuess.toLowerCase();

      if (userAnswer === correctAnswer) {
        this.isGameEnded = true;
        this.resultMessage = 'Selamat! Jawaban Anda benar!';
      } else {
        this.resultMessage = 'Ups! Jawaban Anda salah. Coba lagi!';
      }
    },
    playAgain() {
      this.currentAnimalIndex = Math.floor(Math.random() * 4);
      this.userGuess = '';
      this.isGameEnded = false;
      this.resultMessage = '';
    },
  },
};
</script>

<style scoped>
.guess-animal-widget {
  padding-top: 20px;
  text-align: center;
  background-color: #f7f6b7;
}

h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

label {
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
}

input[type="text"] {
  width: 200px;
  height: 30px;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

button {
  background-color: pink;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.result-message {
  font-size: 18px;
  margin-top: 20px;
}
</style>
