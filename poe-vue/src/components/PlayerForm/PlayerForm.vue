<template>
  <form class="player-form">
    <Input type="text" v-model="player.name" id="name" label="Name"/>
    <Input type="text" v-model="player.pseudo" id="pseudo" label="Pseudo"/>
    <Input type="text" v-model="player.lastName" id="lastName" label="Last Name"/>
    <Input type="url" v-model="player.image" id="image" label="Image url"/>
    <Button @click="onSubmit">Add Player</Button>
  </form>
</template>

<script>
import { Input, TextArea, Button, Select } from "../common";
export default {
  props: ["player"],
  components: {
    Input,
    TextArea,
    Button,
    Select
  },
  methods: {
    onSubmit: function(e) {
      e.preventDefault();
      this.$emit("submit", this.player);
    }
  }
};
</script>

<style lang="scss">
.player-form {
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 200px;
}
</style>
