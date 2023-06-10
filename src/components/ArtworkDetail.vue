<template>
  <div class="artwork-detail">
    <div class="artwork-image">
      <img :src="require('@/' + artwork.imageSrc)" :alt="artwork.title" />
    </div>
    <div class="artwork-info">
      <h2 class="title">作者：{{ artwork.title }}</h2>
      <p class="artist">{{ artwork.artist }}</p>
      <p class="description">{{ artwork.description }}</p>
      <p class="created-at">创作时间于: {{ artwork.createdAt }}</p>
      <p class="owner">所有者: {{ artwork.owner }}</p>
      <p class="price">建议价格: {{ artwork.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtworkDetail',
  props: {
    artwork: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.artwork-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}

.artwork-image {
  width: 300px;
  height: 300px;
}

.artwork-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.artwork-info {
  margin-top: 20px;
  text-align: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.artist {
  font-size: 18px;
  margin-bottom: 10px;
}

.description {
  font-size: 16px;
  margin-bottom: 10px;
}

.created-at {
  font-size: 14px;
  margin-bottom: 5px;
}

.owner {
  font-size: 14px;
  margin-bottom: 5px;
}

.price {
  font-size: 14px;
  margin-bottom: 5px;
}
</style>
