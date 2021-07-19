<template>
    <div>
      <DxTreeView
        id="treeView"
        :data-source=products
        dataStructure="plain"
        keyExpr="ID"
        displayExpr="name"
        parentIdExpr="categoryId"
        item-template="product-template"
        :search-enabled="true"
        search-mode="startswith"
        selectionMode="single"
        :select-by-click="true"
        @item-selection-changed="selectProduct" 
      >
      
        <template #product-template="product">
          {{ product.data.price ? product.data.name + " ($" + product.data.price + ")" : product.data.name }}
        </template>

      </DxTreeView>

      <div id="product-details" v-if="currentProduct.price">
        <img :src="currentProduct.image" >
        <div class="name">{{ currentProduct.name }}</div>
        <div class="price">${{ currentProduct.price }}</div> 
      </div>
    </div>
</template>

<script>
import DxTreeView from 'devextreme-vue/tree-view';
import products from './products';

export default {
  components: {
    DxTreeView
  },
  data() {
    return {
      products: products,
      currentProduct: products[0],
    }
  },
  methods: {
    selectProduct(e) {
      this.currentProduct = e.itemData;
    }
  }
}
</script>

<style>
  #treeView, #product-details {
      display: inline-block;
      width: 300px;
  }

  #product-details {
      vertical-align: top;
      width: 400px;
      height: 420px;
      margin-left: 20px;
  }

  #product-details > img {
      border: none;
      height: 300px;
      width: 400px;
  }

  #product-details > .name {
      text-align: center;
      font-size: 20px;
  }

  #product-details > .price {
      text-align: center;
      font-size: 24px;
  }
</style>
