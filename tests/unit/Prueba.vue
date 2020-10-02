<template>
  <div>
    <h1>{{ titulo }}</h1>
  </div>
</template>

<script>
export default {
  name: "Prueba",
  data() {
    return {
      titulo: "Bueno, es una prueba",
    };
  },
  created() {
    this.titulo = "okey, intentemos";
  },
};
</script>

<style></style>
