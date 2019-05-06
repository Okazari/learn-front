<template>
  <div class="container">
    <div class="column">
      <PlayerForm :card="player" @submit="addCard"/>
    </div>
    <div class="column">
      <Card
        :name="player.name"
        :description="player.description"
        :strength="player.strength"
        :health="player.health"
        :author="player.author"
        :category="player.category"
        :image="player.image"
      />
    </div>
  </div>
</template>

<script>
import { PlayerForm, Player } from "../components";

export default {
  components: { PlayerForm, Player },

  methods: {
    addPlayer: function() {
      savePlayer(this.player).then(() => (this.player = {}));
    }
  },
  data: function() {
    return {
      player: {
        name: "",
        description: "",
        health: 0,
        strength: 0,
        image: "",
        category: "",
        author: ""
      }
    };
  }
};
</script>


<style scoped>
.column {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  height: calc(100vh - 60px);
  min-height: 500px;
  display: flex;
  justify-content: space-between;
}
</style>









