<template>
  <div>
    <AuthorShowcase :authors="authorList"></AuthorShowcase>
    <CategoryBar :categories="['所有', '油画', '国画', '漫画']" @select-category="selectCategory"></CategoryBar>
    <ArtworkList v-if="!selectedArtwork" :artworks="artworks" :selected-category="selectedCategory"
      @show-artwork-detail="showArtworkDetail">
    </ArtworkList>
    <router-view v-if="selectedArtwork" :artwork="artworks[selectedArtwork.id - 1]" :author="artworks[selectedArtwork.id - 1].authorInfo"
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

export default {
  components: {
    CategoryBar,
    ArtworkList,
    ArtworkDetail,

    OilPainting,
    ChinesePainting,
    Comic,

    AuthorShowcase,
  },
  data() {
    return {
      authorList: [
        {
          name: '文森特·梵高',
          bio: '文森特·威廉·梵高（Vincent Willem van Gogh，1853年3月30日—1890年7月29日），荷兰后印象派画家。代表作有《星月夜》、自画像系列、向日葵系列等。'
        },
        {
          name: '徐悲鸿',
          bio: '文森特·威廉·梵高（Vincent Willem van Gogh，1853年3月30日—1890年7月29日），荷兰后印象派画家。代表作有《星月夜》、自画像系列、向日葵系列等。'
        },
        {
          name: '尾田荣一郎',
          bio: '文森特·威廉·梵高（Vincent Willem van Gogh，1853年3月30日—1890年7月29日），荷兰后印象派画家。代表作有《星月夜》、自画像系列、向日葵系列等。'
        },
      ],

      artworks: [
        {
          id: 1,
          title: '星空',
          artist: 'Vincent Van Gogh',
          imageSrc: 'assets/fangao1_xiangrikui.png',
          category: '油画',
          description: '这是一幅描绘星空的油画。',
          authorInfo: {
            authorName: '文森特·梵高',
            authorBio: "文森特·威廉·梵高（Vincent Willem van Gogh，1853年3月30日—1890年7月29日），荷兰后印象派画家。代表作有《星月夜》、自画像系列、向日葵系列等。",
            artWorkList: [
              {
                artWorkName: "风车磨坊",
                artworkDescription: "规格: 61cm*50cm, 类型: 布面油画, 创作年份: 1886-1887年",
              },
              {
                artWorkName: "奥弗的教堂",
                artworkDescription: "规格: 94cm*74cm, 类型: 布面油画, 创作年份: 1890年",
              },
            ]
          }
        },
        {
          id: 2,
          title: '奔马图',
          artist: '徐悲鸿',
          imageSrc: 'assets/guohua1.png',
          category: '国画',
          description: '这是一部国画。',
          authorInfo: {
            authorName: "徐悲鸿",
            authorBio: "徐悲鸿（1895年7月19日—1953年9月26日），原名徐寿康，汉族，江苏宜兴屺亭镇人，中国现代画家、美术教育家 [1] ，其主要绘画作品有《田横五百士》《九方皋》《漓江春雨》《晨曲》《泰戈尔像》《奔马》等。",
            artWorkList: [
              {
                artWorkName: "天女散花图",
                artworkDescription: "规格: 95cm*53cm, 类型: 绢本设色, 创作年份: 1918年",
              },
              {
                artWorkName: "三马图",
                artworkDescription: "规格: 90cm*174cm, 类型: 纸本设色, 创作年份: 1919年",
              },
            ]
          }
        },
        {
          id: 3,
          title: '海贼王',
          artist: '尾田荣一郎',
          imageSrc: 'assets/manhua1.png',
          category: '漫画',
          description: '这是一部关于忍者的漫画。',
          authorInfo: {
            authorName: "尾田荣一郎",
            authorBio: "尾田荣一郎（おだ えいいちろう），男，1975年1月1日出生于日本熊本县熊本市，是日本漫画家。",
            artWorkList: [
              {
                artWorkName: "海贼王",
                artworkDescription: "《海贼王》是日本漫画家尾田荣一郎作画的少年漫画作品，于1997年07月22日在集英社《周刊少年Jump》开始连载。改编的电视动画《海贼王》于1999年10月20日起在富士电视台首播。",
              }
            ]
          }
        },
        
      ],
      selectedCategory: null,
      selectedArtwork: null,
    };
  },
  methods: {
    selectCategory(category) {
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
  },
  mounted() {
    // this.$http.get('/data.json').then(response => {
    //   // this.items = response.data
    //   console.log(response)
    // })
  }
};
</script>