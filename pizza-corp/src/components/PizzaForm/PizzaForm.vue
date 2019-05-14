<template>
  <div class="pizza-form">
    <div class="block-content">
      <Block>
        <div class="pizza-title">
          <Input placeholder="Nom de la pizza" v-model="name"/>
        </div>
        <div class="selected-ingredients">
          <div>Ingrédients :</div>
          <div class="no-ingredient" v-if="selectedIngredients.length === 0">Aucun ingrédient</div>
          <div
            class="pizza-ingredient"
            :key="name"
            v-for="(ingredient, name) in groupedIngredients"
          >{{name}} x {{ingredient.length}}</div>
        </div>
        <div class="price">
          Total:
          <span class="emphasis">{{price}}</span> €
        </div>
        <Button @click="onAdd">Ajouter</Button>
      </Block>
    </div>
    <GridList>
      <GridSlot :key="ingredient.id" v-for="(ingredient, index) in ingredients">
        <Reveal :delay="50 * (1+index)">
          <IngredientCard
            @mousedown.prevent
            @click.prevent="addIngredient(ingredient)"
            :name="ingredient.name"
            :price="ingredient.price"
          />
        </Reveal>
      </GridSlot>
    </GridList>
  </div>
</template>

<script>
import IngredientCard from "../IngredientCard";
import sum from "lodash/sum";
import groupBy from "lodash/groupBy";
import { Reveal, GridList, GridSlot, Input, Block, Button } from "../common";
export default {
  components: {
    IngredientCard,
    Reveal,
    GridList,
    GridSlot,
    Input,
    Block,
    Button
  },
  props: ["ingredients"],
  data: function() {
    return {
      name: "",
      selectedIngredients: []
    };
  },
  methods: {
    addIngredient: function(ingredient) {
      this.selectedIngredients.push(ingredient);
    },
    resetPizza: function() {
      this.name = "";
      this.selectedIngredients = [];
    },
    onAdd: function() {
      this.$emit("submit", {
        name: this.name,
        ingredients: [...this.selectedIngredients]
      });
      this.resetPizza();
    }
  },
  computed: {
    groupedIngredients: function() {
      return groupBy(this.selectedIngredients, "name");
    },
    price: function() {
      return 7 + sum(this.selectedIngredients.map(i => i.price));
    }
  }
};
</script>

<style lang="scss" scoped>
.pizza-title {
  margin-bottom: 10px;
  min-width: 300px;
}

.selected-ingredients {
  margin-bottom: 10px;
  margin-left: 5px;
}

.pizza-ingredient {
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 20px;
}
.no-ingredient {
  display: flex;
  justify-content: center;
  color: #999;
}

.block-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.price {
  display: flex;
  margin: 0 10px;
  padding: 5px;
  border: 1px dashed darkred;
  justify-content: center;
  font-size: 1.2em;
}
.emphasis {
  font-weight: 600;
  margin: 0 5px;
}
</style>
