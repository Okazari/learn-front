<template>
  <div class="stats">{{strength}} /{{health}}</div>
</template>

<script>
export default {
  props: ["strength", "health"]
};
</script>

<style>
.stats {
  color: black;
  align-self: flex-end;
  background-color: white;
  padding: 2px 5px;
  border-radius: 5px;
  border: 2px solid lightgray;
}
</style>
