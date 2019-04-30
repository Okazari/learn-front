<template>
  <div class="container">
    <div class="column">
      <CardForm :card="card" @submit="addCard"/>
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
import { saveCard } from "../services";

export default {
  components: {
    Card,
    CardForm
  },
  methods: {
    addCard: function() {
      saveCard(this.card).then(() => (this.card = {}));
    }
  },
  data: function() {
    return {
      cardList: [
        {
          name: "Toto"
        }
      ],
      card: {
        name: "",
        description: "",
        health: 0,
        strength: 0,
        image: "",
        category: "",
        author: ""
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
  align-items: center;
}

.container {
  height: calc(100vh - 60px);
  min-height: 500px;
  display: flex;
  justify-content: space-between;
}
</style>












