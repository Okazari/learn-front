<template>
  <GridList>
    <GridSlot :key="card.id" v-for="(card, index) in cardList">
      <Reveal :delay="50 * (1+index)">
        <Card
          :id="card.id"
          :name="card.name"
          :description="card.description"
          :strength="card.strength"
          :health="card.health"
          :author="card.author"
          :category="card.category"
          :image="card.image"
          :canDelete="true"
          @delete="onCardDelete"
        />
      </Reveal>
    </GridSlot>
  </GridList>
</template>

<script>
import { Card, Reveal, GridList, GridSlot } from "../components";
import { getAllCards, deleteCard } from "../services";
export default {
  components: {
    Card,
    Reveal,
    GridList,
    GridSlot
  },
  mounted: function() {
    this.refreshList();
  },
  methods: {
    refreshList: function() {
      getAllCards().then(allCards => (this.cardList = allCards));
    },
    onCardDelete: function(id) {
      deleteCard(id).then(this.refreshList);
    }
  },
  data: function() {
    return {
      cardList: []
    };
  }
};
</script>
