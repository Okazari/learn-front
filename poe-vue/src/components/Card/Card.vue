<template>
  <div
    class="card"
    :class="{
      creature: category === 'creature',
      spell: category === 'spell',
    }"
  >
    <CardTitle :title="name"/>
    <CardImage :src="image"/>
    <CardDescription :description="description"/>
    <CardFooter :author="author" :strength="strength" :health="health"/>
  </div>
</template>

<script>
import CardTitle from "./CardTitle";
import CardImage from "./CardImage";
import CardFooter from "./CardFooter";
import CardDescription from "./CardDescription";

export default {
  props: [
    "name",
    "category",
    "image",
    "description",
    "author",
    "strength",
    "health"
  ],
  components: {
    CardTitle,
    CardImage,
    CardFooter,
    CardDescription
  }
};
</script>

<style>
.card {
  width: 200px;
  height: 300px;
  background-color: darkred;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  align-content: space-between;
  border-radius: 10px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.spell {
  background-color: aqua;
  color: black;
}

.creature {
  background-color: cornflowerblue;
}
</style>
