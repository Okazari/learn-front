<template>
  <Card :name="fullName" :image="avatar" :description="quote" category="player"/>
</template>

<script>
import Card from "../Card";
export default {
  props: ["playerName", "pseudo", "lastName", "avatar", "quote"],
  components: { Card },
  computed: {
    fullName: function() {
      return `${this.playerName} "${this.pseudo}" ${this.lastName}`;
    }
  }
};
</script>

<style>
</style>
