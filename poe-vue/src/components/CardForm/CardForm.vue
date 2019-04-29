<template>
  <div>
    <form class="card-form">
      cardForm
      <input class="input" v-model="card.name">
      <input class="input" v-model="card.description">
      <input class="input" v-model="card.category">
      <input class="input" v-model="card.strength">
      <input class="input" v-model="card.health">
      <input class="input" v-model="card.author">
      <input class="input" v-model="card.image">
    </form>
  </div>
</template>
<script>
export default {
  props: ["card"]
};
</script>

<style lang="scss">
.card-form {
  display: flex;
  flex-direction: column;
}

.input {
  padding: 5px;
  border: 1px solid #ddd;
  &:focus,
  &:hover {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
