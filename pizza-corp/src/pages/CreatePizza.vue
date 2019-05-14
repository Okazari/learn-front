<template>
  <div class="container">
    <PizzaForm :ingredients="ingredients" @submit="savePizza"/>
  </div>
</template>

<script>
import {
  IngredientCard,
  Reveal,
  GridList,
  GridSlot,
  PizzaForm
} from "../components";
import { getAllIngredients, savePizza } from "../services";

export default {
  components: {
    PizzaForm
  },
  mounted: function() {
    this.refreshIngredients();
  },
  methods: {
    refreshIngredients: function() {
      getAllIngredients().then(ingredients => (this.ingredients = ingredients));
    },
    savePizza: function(pizza) {
      console.log(savePizza);
      savePizza(pizza);
    }
  },
  data: function() {
    return {
      ingredients: []
    };
  }
};
</script>


<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 50px);
  background-color: rgb(245, 245, 245);
}
</style>
