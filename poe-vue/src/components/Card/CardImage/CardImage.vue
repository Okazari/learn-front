<template>
  <div class="image" :style="{ backgroundImage: `url(${src})`}"></div>
</template>

<script>
export default {
  props: ["src"]
};
</script>

<style>
.image {
  background-color: white;
  flex: 6;
  border-radius: 5px;
  margin: 10px 0;
  background-position: center;
  background-size: cover;
}
</style>
