<script setup lang="ts">
import { ref } from 'vue';
import DxTreeView from 'devextreme-vue/tree-view';
import type { DxTreeViewTypes } from 'devextreme-vue/tree-view';
import notify from 'devextreme/ui/notify';
import type { Product } from '../types';
import { products } from '../products';

const currentProduct = ref<Product | null>(null);

const selectProduct = (e: DxTreeViewTypes.ItemSelectionChangedEvent): void => {
  const selectedProduct = e.itemData as Product;
  if (selectedProduct?.price) {
    currentProduct.value = selectedProduct;
    notify(`Product selected: ${selectedProduct.name}`, 'success', 2000);
  } else {
    currentProduct.value = null;
  }
};
</script>

<template>
  <div id="app-container">
    <DxTreeView
      id="tree-view"
      :data-source="products"
      data-structure="plain"
      key-expr="ID"
      display-expr="name"
      parent-id-expr="categoryId"
      item-template="product-template"
      :search-enabled="true"
      search-mode="startswith"
      selection-mode="single"
      :select-by-click="true"
      @item-selection-changed="selectProduct"
    >
      <template #product-template="{ data }">
        {{ data.price ? `${data.name} ($${data.price})` : data.name }}
      </template>
    </DxTreeView>

    <div
      v-if="currentProduct?.price"
      id="product-details"
    >
      <img
        :src="currentProduct.image"
        :alt="currentProduct.name"
      >
      <div class="name">{{ currentProduct.name }}</div>
      <div class="price">${{ currentProduct.price }}</div>
    </div>
  </div>
</template>

<style scoped>
#app-container {
  position: relative;
  padding: 20px;
  width: 900px;
  margin: 50px auto;
}

#tree-view,
#product-details {
  display: inline-block;
  width: 300px;
}

#product-details {
  vertical-align: top;
  width: 400px;
  height: 420px;
  margin-left: 20px;
  border: 1px solid #ddd;
  padding: 20px;
  position: relative;
}

#product-details > img {
  border: none;
  height: 300px;
  width: 400px;
}

#product-details > .name {
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
}

#product-details > .price {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #337ab7;
  margin-top: 10px;
}
</style>
