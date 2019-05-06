<template>
  <GridList>
    <GridSlot :key="player.id" v-for="(player, index) in playerList">
      <Reveal :delay="50 * (1+index)">
        <Player
          :playerName="player.name"
          :pseudo="player.pseudo"
          :lastName="player.lastName"
          :avatar="player.avatar"
          :quote="player.quote"
        />
      </Reveal>
    </GridSlot>
  </GridList>
</template>

<script>
import { Player, Reveal, GridList, GridSlot } from "../components";
import { getAllPlayers } from "../services";
export default {
  components: {
    Player,
    Reveal,
    GridList,
    GridSlot
  },
  mounted: function() {
    getAllPlayers().then(allPlayers => (this.playerList = allPlayers));
  },
  data: function() {
    return {
      playerList: []
    };
  }
};
</script>