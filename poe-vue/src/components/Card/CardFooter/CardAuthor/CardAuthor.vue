<template>
  <div class="sign">{{displayedAuthor}}</div>
</template>

<script>
export default {
  props: ["author"],
  computed: {
    displayedAuthor: function() {
      return this.author && `by ${this.author}`;
    }
  }
};
</script>

<style>
.sign {
  font-size: 0.9rem;
}
</style>
