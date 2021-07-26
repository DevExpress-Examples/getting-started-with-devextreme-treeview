import React, { useState } from 'react';
import 'devextreme/dist/css/dx.light.css';
import './App.css'

import TreeView from 'devextreme-react/tree-view';
import products from './products';

const itemTemplate = (item) => {
  if (item.price) {
    return `${item.name} ($${item.price})`;
  } else {
    return `${item.name}`;
  }
}

function App() {
  const [selectedNode, setSelectedNode] = useState(products[0]);
  const selectProduct = (e) => {
    setSelectedNode(e.itemData);
  }

  return (
    <div>
      <TreeView 
        id="treeView"
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

      {
        selectedNode.price &&
        <div id="product-details">
          <img src={selectedNode.image}/>
          <div className="name">{selectedNode.name}</div>
          <div className="price">{`$${ selectedNode.price}`}</div>
        </div>
      }
    </div>
  );
}

export default App;