<template>
  <div class="select-container">
    <label :for="id">{{label}}</label>
    <select :id="id" class="select" :type="type" :value="value" @input="onInput">
      <option v-for="option in options" :key="option.value" :value="option.value">{{option.label}}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["value", "type", "label", "id", "options"],
  methods: {
    onInput: function(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style lang="scss">
.select-container {
  display: flex;
  margin: 10px;
  flex-direction: column;
}

.select {
  margin-top: 5px;
  background-color: transparent;
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
