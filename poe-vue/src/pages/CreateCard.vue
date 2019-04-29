<template>
  <div class="container">
    <div class="column">
      <CardForm :card="card"/>
    </div>
    <div class="column">
      <Card
        :name="card.name"
        :description="card.description"
        :strength="card.strength"
        :health="card.health"
        :author="card.author"
        :category="card.category"
        :image="card.image"
      />
    </div>
  </div>
</template>

<script>
import { Card, CardForm } from "../components";

export default {
  components: {
    Card,
    CardForm
  },
  data: function() {
    return {
      card: {
        name: "bla"
      }
    };
  }
};
</script>

<style>
.column {
  flex: 1;
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: space-between;
}
</style>
