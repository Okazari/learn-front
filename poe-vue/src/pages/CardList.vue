<template>
  <div class="container">
    <div class="card-slot" :key="card.id" v-for="card in cardList">
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
import { Card } from "../components";
import { getAllCards } from "../services";
export default {
  components: {
    Card
  },
  mounted: function() {
    getAllCards().then(allCards => (this.cardList = allCards));
  },
  data: function() {
    return {
      cardList: []
    };
  }
};
</script>

<style>
.card-slot {
  display: inline-block;
  margin: 10px;
}
</style>
