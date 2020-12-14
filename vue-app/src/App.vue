<template>
  <form @submit="handleSubmit">
    <h1>BMI calculator</h1>

    <div>
      <label for="height">Height (KG)</label>
      <input id="height" />
    </div>

    <div>
      <label for="weight">Weight (M)</label>
      <input id="weight" />
    </div>

    <button type="submit">Send</button>

    <h2 v-if="bmi">Result: {{ bmi.toLocaleString() }}</h2>
    <p v-if="bmiEstimation">Estimation: {{ bmiEstimation }}</p>
  </form>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      bmi: null,
      bmiEstimation: null,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const { height, weight } = e.target.elements;
      const bmi = this.calculateBmi({
        height: height.value,
        weight: weight.value,
      });
      const bmiEstimation = this.calculateBmiEstimation({ bmi });

      this.bmi = bmi;
      this.bmiEstimation = bmiEstimation;
    },
    calculateBmi({ height, weight }) {
      return weight / (height * height);
    },
    calculateBmiEstimation({ bmi }) {
      if (bmi <= 18.5) {
        return "Thinness";
      }

      if (bmi > 18.5 && bmi <= 24.9) {
        return "Normal";
      }

      if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
      }

      if (bmi > -30) {
        return "Obese";
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
