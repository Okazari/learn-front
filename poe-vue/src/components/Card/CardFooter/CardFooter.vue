<template>
  <div class="footer">
    <CardAuthor :author="author"/>
    <CardStats :strength="strength" :health="health"/>
  </div>
</template>

<script>
import CardAuthor from "./CardAuthor";
import CardStats from "./CardStats";

export default {
  props: ["author", "strength", "health"],
  components: {
    CardAuthor,
    CardStats
  }
};
</script>

<style>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.stats {
  color: black;
  align-self: flex-end;
  background-color: white;
  padding: 2px 5px;
  border-radius: 5px;
  border: 2px solid lightgray;
}
</style>
