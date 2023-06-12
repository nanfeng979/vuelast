<template>
  <div class="author-detail">
    <h2>{{ authorList[selectedAuthorId].authorName }}</h2>
    <p>{{ authorList[selectedAuthorId].authorBio }}</p>
    <div v-for="artWork in authorList[selectedAuthorId].artWorkList" :key="artWork.artWorkName" class="artwork">
      <h3>{{ artWork.artWorkName }}</h3>
      <ul class="artwork-details">
        <li><span>规格:</span> {{ artWork.artWorkSize }}</li>
        <li><span>类型:</span> {{ artWork.artWorkType }}</li>
        <li><span>创作年份:</span> {{ artWork.artWorkYear }}</li>
      </ul>
      <p class="artwork-description">{{ artWork.artWorkDescription }}</p>
      <img :src="require('@/' + artWork.artWorkImageSrc)" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AuthorDetail',
  data() {
    return {
      authorList: [{}],
    };
  },
  computed: {
    selectedAuthorId() {
      return this.$route.params.id;
    },
  },
  created() {
    axios
      .get('http://127.0.0.1:5000/data')
      .then((response) => {
        this.authorList = response.data.authorList;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style>
.author-detail {
  background-color: #f5f5f5;
  background-image: url(/assets/background.jpg);
  background-size: cover;
  background-position: center;
  text-align: center;
  max-width: 800px;
  margin: 20px auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #333;
}

.author-detail h2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.author-detail p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.author-detail .artwork {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-bottom: 30px;
  text-align: left;
}

.author-detail .artwork h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.author-detail .artwork .artwork-details {
  margin-bottom: 20px;
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #666;
  border-top: 1px solid #ccc;
  padding-top: 10px;
  margin-top: 20px;
}

.author-detail .artwork .artwork-details li {
  margin-right: 20px;
  padding-right: 20px;
  position: relative;
}

.author-detail .artwork .artwork-details li span {
  font-weight: bold;
}

.author-detail .artwork p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.artwork-description {
  text-indent: 2em;
  /* margin-left: 2em; */
}

.author-detail .artwork img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
</style>