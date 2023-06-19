<template>
  <div class="category-bar">
    <div v-for="(category, index) in categories" :key="index" @click="selectCategory(category)">
      {{ category }}
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'CategoryBar',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectCategory(category) {
      if (category === '我的') {
        this.$emit('show-my');
        return
      }
      this.$emit('select-category', category);
    },
  },
};
</script>
  
<style>
.category-bar {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.category-bar div {
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s ease-in-out;
}

.category-bar div:hover {
  background-color: #f2f2f2;
}

.category-bar div.selected {
  background-color: #333;
  color: #fff;
}
</style>