<template>
  <div class="chinese-painting">
    <img :src="require('@/' + artwork.imageSrc)" :alt="artwork.title">
    <div class="artwork-details">
      <h2>{{ artwork.title }}</h2>
      <router-link :to="`/author/${artwork.authorId}`">{{ artwork.artist }}</router-link>
      <p>{{ artwork.description }}</p>
    </div>
    <interaction-panel :artwork="artwork"></interaction-panel>
  </div>
</template>
  
<script>
import InteractionPanel from './InteractionPanel';
export default {
  name: 'ChinesePainting',
  components: {
    InteractionPanel,
  },
  props: {
    artwork: {
      type: Object,
      required: true,
    },
  },
};
</script>
  
<style>
.chinese-painting {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.chinese-painting img {
  width: 400px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}

.artwork-details {
  text-align: center;
}

.artwork-details h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.artwork-details p {
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
}
</style>