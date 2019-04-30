<template>
  <form class="card-form">
    <Input type="text" v-model="card.name" id="name" label="Name"/>
    <Input type="url" v-model="card.image" id="image" label="Image url"/>
    <TextArea type="text" v-model="card.description" id="description" label="Description"/>
    <Select
      label="Category"
      v-model="card.category"
      :options="[
        { label:'Spell', value: 'spell' },
        { label:'Creature', value: 'creature' },
        { label:'Autres', value: 'other' }
      ]"
    />
    <Input type="text" v-model="card.author" id="author" label="Author"/>
    <Input type="number" v-model="card.strength" id="strength" label="Strength"/>
    <Input type="number" v-model="card.health" id="health" label="Health"/>
    <Button @click="onSubmit">Add card</Button>
  </form>
</template>
<script>
import { Input, TextArea, Button, Select } from "../common";
export default {
  props: ["card"],
  components: {
    Input,
    TextArea,
    Button,
    Select
  },
  methods: {
    onSubmit: function(e) {
      e.preventDefault();
      this.$emit("submit", this.card);
    }
  }
};
</script>

<style lang="scss">
.card-form {
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 200px;
}
</style>
