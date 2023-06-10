<template>
  <div>
    <AuthorShowcase :authors="authorList" @show-author-detail="showAuthorDetail"></AuthorShowcase>
    <CategoryBar :categories="['所有', '油画', '国画', '漫画', '我的']" @select-category="selectCategory" @show-my="showMy"></CategoryBar>
    <ArtworkList v-if="!selectedArtwork && !showMyFlag" :artworks="artworks" :selected-category="selectedCategory"
      @show-artwork-detail="showArtworkDetail">
    </ArtworkList>
    <showMy v-if="showMyFlag"></showMy>
    <!-- <router-view v-if="selectedArtwork" :artwork="artworks[selectedArtwork.id - 1]" :author="artworks[selectedArtwork.id - 1].authorInfo"
      @close-artwork-detail="closeArtworkDetail"></router-view> -->
    <router-view v-if="selectedArtwork && !showMyFlag" :artwork="artworks[selectedArtwork.id]" :author="authorList[selectedAuthor.authorId]"
      @close-artwork-detail="closeArtworkDetail"></router-view>
  </div>
</template>
  
<script>
import CategoryBar from './components/CategoryBar';
import ArtworkList from './components/ArtworkList';
import ArtworkDetail from './components/ArtworkDetail';

import OilPainting from './components/OilPainting';
import ChinesePainting from './components/ChinesePainting';
import Comic from './components/Comic';

import AuthorShowcase from './components/AuthorShowcase';
import ShowMy from './components/showMy'

import axios from 'axios'

export default {
  components: {
    CategoryBar,
    ArtworkList,
    ArtworkDetail,

    OilPainting,
    ChinesePainting,
    Comic,

    AuthorShowcase,
    ShowMy,
  },
  data() {
    return {
      authorList: [],

      artworks: [],
      selectedCategory: null,
      selectedArtwork: null,
      selectedAuthor: {
            "authorName": "",
            "authorId": 0,
            "authorBio": ""
        },
      
      showMyFlag: false,
    };
  },
  methods: {
    selectCategory(category) {
      this.showMyFlag = false;
      this.selectedArtwork = null;

      if (category === '所有') {
        this.selectedCategory = null;
      } else {
        this.selectedCategory = category;
      }
      this.$router.push('/artwork').catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    },
    showArtworkDetail(artwork) {
      this.showMyFlag = false;
      this.selectedArtwork = artwork;

      if (artwork.category === '油画') {
        this.$router.push({ name: 'OilPainting' });
      } else if (artwork.category === '国画') {
        this.$router.push({ name: 'ChinesePainting' });
      } else if (artwork.category === '漫画') {
        this.$router.push({ name: 'Comic' });
      }
    },
    closeArtworkDetail() {
      this.selectedArtwork = null;
    },
    showAuthorDetail(author) {
      this.selectedArtwork = false
      this.selectedArtwork = true
      this.selectedAuthor = author
    },
    showMy() {
      this.showMyFlag = true;
    }
  },
  created() {
    axios.get('http://127.0.0.1:5000/data')
      .then(response => {
        this.authorList = response.data.authorList
        this.artworks = response.data.artworks
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>