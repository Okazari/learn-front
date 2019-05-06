<template>
  <div class="input-container">
    <label :for="id">{{label}}</label>
    <input :id="id" class="input" :type="type" :value="value" @input="onInput">
  </div>
</template>

<script>
export default {
  props: ["value", "required", "type", "label", "id"],
  computed: {
    errors: function() {
      const errors = [];
      if (this.required && !this.value) errors.push("required");
    }
  },
  methods: {
    onInput: function(event) {
      this.$emit("input", {
        value: event.target.value,
        errors: this.errors
      });
    }
  }
};
</script>

<style lang="scss">
.input-container {
  display: flex;
  margin: 10px;
  flex-direction: column;
}

.input {
  margin-top: 5px;
  padding: 5px;
  border: 0;
  outline: none;
  transition: border-color 200ms;
  border-bottom: 1px solid #ddd;
  &:focus,
  &:hover {
    border-color: darkcyan;
  }
}
</style>
