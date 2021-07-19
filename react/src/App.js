import React, { useState } from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css'

import TreeView from 'devextreme-react/tree-view';
import products from './products';

function App() {
  const [selectedNode, setSelectedNode] = useState(products[0]);
  const selectProduct = (e) => {
    setSelectedNode(e.itemData);
  }

  const itemTemplate = (item) => {
    if (item.price) {
      return `<div> ${item.name} ($${item.price}) </div>`;
    } else {
      return `<div> ${item.name} </div>`;
    }
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
        itemTemplate={itemTemplate}
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