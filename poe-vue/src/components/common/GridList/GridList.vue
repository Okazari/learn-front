<template>
  <div class="grid-list">
    <slot/>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.grid-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
