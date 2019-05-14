<template>
  <div class="textarea-container">
    <label :for="id">{{label}}</label>
    <textarea :id="id" class="textarea" :type="type" :value="value" @input="onInput"/>
  </div>
</template>

<script>
export default {
  props: ["value", "type", "label", "id"],
  methods: {
    onInput: function(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style lang="scss">
.textarea-container {
  display: flex;
  margin: 10px;
  flex-direction: column;
}

.textarea {
  padding: 5px;
  border: 0;
  outline: none;
  transition: border-color 200ms;
  border-bottom: 1px solid #ddd;
  &:focus,
  &:hover {
    border-color: darkred;
  }
}
</style>
