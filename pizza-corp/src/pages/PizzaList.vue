<template>
  <div class="container">
    <GridList>
      <GridSlot :key="pizza.id" v-for="(pizza, index) in pizzas">
        <Reveal :delay="50 * (1+index)">
          <PizzaCard
            @click.prevent="deletePizza(pizza)"
            :name="pizza.name"
            :ingredients="pizza.ingredients"
          />
        </Reveal>
      </GridSlot>
    </GridList>
  </div>
</template>

<script>
import { PizzaCard, Reveal, GridList, GridSlot } from "../components";
import { getAllPizzas, deletePizza } from "../services";

export default {
  components: {
    PizzaCard,
    Reveal,
    GridList,
    GridSlot
  },
  mounted: function() {
    this.refreshPizzas();
  },
  methods: {
    refreshPizzas: function() {
      getAllPizzas().then(pizzas => (this.pizzas = pizzas));
    },
    deletePizza: function(pizza) {
      deletePizza(pizza.id).then(() => this.refreshPizzas());
    }
  },
  data: function() {
    return {
      pizzas: []
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
