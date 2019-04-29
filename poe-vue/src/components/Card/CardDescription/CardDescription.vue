<template>
  <div class="description">{{description}}</div>
</template>

<script>
export default {
  props: ["description"]
};
</script>

<style>
.description {
  color: black;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  font-size: 0.8rem;
  flex: 2;
  text-align: justify;
  border-radius: 5px;
  border: 2px solid lightgray;
  margin-bottom: 5px;
}
</style>
