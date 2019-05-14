<template>
  <Card v-on="$listeners">
    <div class="container">
      <div class="name">{{name}}</div>
      <div class="price">{{price}} €</div>
    </div>
  </Card>
</template>

<script>
import { Card } from "../common";

export default {
  components: {
    Card
  },
  props: ["name", "price"]
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.price {
  margin: 5px;
}
.name {
  font-weight: 600;
  margin: 5px;
}
</style>
