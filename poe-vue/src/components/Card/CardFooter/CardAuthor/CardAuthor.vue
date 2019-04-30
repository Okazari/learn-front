<template>
  <div class="sign">by {{author}}</div>
</template>

<script>
import CardAuthor from "./CardAuthor";

export default {
  props: ["author"]
};
</script>

<style>
.sign {
  font-size: 0.9rem;
}
</style>
