<template>
  <div class="reveal" :class="{ revealed: revealed }">
    <slot/>
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data: function() {
    return {
      revealed: false
    };
  },
  mounted: function() {
    this.delay && setTimeout(() => (this.revealed = true), this.delay);
  }
};
</script>

<style lang="scss">
.reveal {
  transform: translateY(20px) translateZ(0);
  opacity: 0;
  transition: transform ease-in-out 200ms, opacity ease-in-out 200ms;
}

.revealed {
  transform: translateY(0) translateZ(0);
  opacity: 1;
}
</style>
