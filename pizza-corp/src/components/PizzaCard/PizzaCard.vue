<template>
  <Card v-on="$listeners">
    <div class="container">
      <div class="ingredient-list">
        <div
          class="ingredient"
          :key="name"
          v-for="(ingredient, name) in groupedIngredients"
        >{{name}} x {{ingredient.length}}</div>
      </div>
      <div class="pizza-name">
        <div class="price">{{price}} €</div>
        {{name}}
      </div>
    </div>
  </Card>
</template>

<script>
import { Card } from "../common";
import sum from "lodash/sum";
import groupBy from "lodash/groupBy";
export default {
  components: {
    Card
  },
  props: ["name", "ingredients"],
  computed: {
    groupedIngredients: function() {
      return groupBy(this.ingredients, "name");
    },
    price: function() {
      return 7 + sum(this.ingredients.map(i => i.price));
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.ingredient-list {
  padding: 10px;
  overflow: auto;
}

.ingredient {
  margin: 5px;
}

.price {
  font-size: 1.5em;
}

.pizza-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 40px;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  color: white;
}
</style>
