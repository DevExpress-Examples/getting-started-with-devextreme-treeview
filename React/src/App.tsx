import { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import TreeView from 'devextreme-react/tree-view';
import type { TreeViewTypes } from 'devextreme-react/tree-view';
import notify from 'devextreme/ui/notify';
import type { Product } from './types';
import { products } from './products';

function App(): JSX.Element {
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  const itemTemplate = useCallback((item: Product) => {
    if (item.price) {
      return `${item.name} ($${item.price})`;
    }
    return item.name;
  }, []);

  const selectProduct = useCallback((e: TreeViewTypes.ItemSelectionChangedEvent) => {
    const selectedProduct = e.itemData as Product;
    if (selectedProduct?.price) {
      setCurrentProduct(selectedProduct);
      notify(`Product selected: ${selectedProduct.name}`, 'success', 2000);
    } else {
      setCurrentProduct(null);
    }
  }, []);

  return (
    <div id="app-container">
      <TreeView
        id="tree-view"
        dataSource={products}
        dataStructure="plain"
        keyExpr="ID"
        displayExpr="name"
        parentIdExpr="categoryId"
        itemRender={itemTemplate}
        searchEnabled={true}
        searchMode="startswith"
        selectionMode="single"
        selectByClick={true}
        onItemSelectionChanged={selectProduct}
      />
      {currentProduct?.price && (
        <div id="product-details">
          <img src={currentProduct.image} alt={currentProduct.name} />
          <div className="name">{currentProduct.name}</div>
          <div className="price">${currentProduct.price}</div>
        </div>
      )}
    </div>
  );
}

export default App;
