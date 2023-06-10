<template>
  <div class="artwork-list">
    <div class="artwork-thumbnail" v-for="artwork in artworks" :key="artwork.id" 
    >
    <!-- @mouseout="hideArtworkInfo" -->
      <img :src="require('@/' + artwork.thumbnail)"
        :alt="'This is a thumbnail created by ' + artwork.artist + ' named ' + artwork.name + ', which cannot be realistically realized due to certain reasons'" 
        :style="{ 
          width: isHovered && hoveredArtworkId === artwork.id ? 'auto' : '150px', 
          height: isHovered && hoveredArtworkId === artwork.id ? 'auto' : '200px' 
        }"
        @mouseover="showArtworkInfo(artwork)"
      />
      
      <h3 style="text-align: center;">{{ artwork.name }}</h3>
      <p style="text-align: center;">{{ artwork.artist }}</p>

      <div class="artwork-info" v-if="isHovered && hoveredArtworkId === artwork.id">
        <h3>《 {{ artwork.name }} 》</h3>
        <p>By {{ artwork.artist }}</p>
        <p>创作于 {{ artwork.year }}</p>
      </div>

    </div>
  </div>
</template>
  
<script>
export default {
  name: 'ArtworkList',
  props: {
    artworks: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isHovered: false,
      hoveredArtworkId: null,
    };
  },
  methods: {
    showArtworkInfo(artwork) {
      this.isHovered = true;
      this.hoveredArtworkId = artwork.id;
    },
    hideArtworkInfo() {
      this.isHovered = false;
      this.hoveredArtworkId = null;
    },
  },
};
</script>
  
<style scoped>
.artwork-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.artwork-thumbnail {
  position: relative;
  margin: 10px;
  cursor: pointer;
}

.artwork-thumbnail img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.artwork-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.artwork-info h3 {
  margin: 5px 0;
  font-size: 16px;
}

.artwork-info p {
  margin: 5px 0;
  font-size: 14px;
}
</style>
  