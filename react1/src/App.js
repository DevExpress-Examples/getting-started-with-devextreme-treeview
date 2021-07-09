import React, { useState } from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css'

import TreeView from 'devextreme-react/tree-view';
import  books from './books';

function App() {
  const [selectedNode, setSelectedNode] = useState();
  const selectNode = (e) => {
    e.component.byKey(e.currentSelectedRowKeys[0]).done(employee => {
      setSelectedEmployee(employee);
    });
  }

  const itemTemplate = (item) => {
    if (item.year) {
      return "<div>" + item.text + " (" + item.year + ")" + "</div>";
    } else {
        return "<div>" + item.text + "</div>";
    }
  }

  // const displayBookAndAuthor = (e) => {
  //   const clickedNode = e.itemData;
  //   if (!clickedNode.items) {
  //     const parentNode = e.node.parent;
  //     $("#book-details").removeClass("hidden");
  //     $("#book-details > .book").text(`${clickedNode.text} by ${parentNode.text}`);
  //   } else {
  //     $("#book-details").addClass("hidden");
  //   }
  // }

  return (
    <div className="App">
      <div id="simple-treeview">
        <TreeView
          dataSource={books}
          itemTemplate={itemTemplate}
          searchEnabled={true}
          selectByClick={true}
          onItemClick={displayBookAndAuthor}
          selectionMode="single"
          virtualModeEnabled={true} />
      </div>

      <div id="book-details" class="hidden">
        <div class="book"></div>
        <div class="author"></div> 
      </div>

      {currentItem.price &&
        <div id="product-details">
          <img src={currentItem.image} />
          <div className="name">{currentItem.text}</div>
          <div className="price">{`$${ currentItem.price}`}</div>
        </div>
        }
    </div>
  );
}

export default App;