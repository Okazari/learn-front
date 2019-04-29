<template>
  <div class="container">
    <div class="card-slot" :key="card.name" v-for="card in cardList">
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
export default {
  components: {
    Card
  },
  data: function() {
    return {
      cardList: [
        {
          category: "creature",
          name: "Dragons",
          description: "Agrougrou",
          strength: 10,
          health: 5,
          author: "by BenJ",
          image:
            "https://webcdn.triongames.com/archeage/blogs/dragonraising/legends-return-dragons.gif"
        },
        {
          category: "spell",
          name: "Dragon Lego",
          description: "My Second Card",
          strength: 9,
          health: 3,
          author: "by OKazari",
          image:
            "https://media.playmobil.com/i/playmobil/70037_product_detail/Krokmou%20et%20Harold%20avec%20un%20b%C3%A9b%C3%A9%20dragon?locale=fr-FR,fr,*&$product_search_hit_tile_xl$&strip=true"
        }
      ]
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
