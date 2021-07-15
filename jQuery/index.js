$(function(){
  $("#treeView").dxTreeView({ 
      dataSource: products,
      dataStructure: "plain",
      keyExpr: "ID",
      displayExpr: "name",
      parentIdExpr: "categoryId",
      itemTemplate: function(item) {
        if (item.price) {
          return `<div> ${item.name} ($${item.price}) </div>`;
        } else {
          return `<div> ${item.name} </div>`;
        }
      },
      searchEnabled: true,
      selectionMode: "single",
      selectByClick: true,        
      onItemSelectionChanged: function(e) {
        var selectedProduct = e.itemData;
        if(selectedProduct.price) {
            $("#product-details").removeClass("hidden");
            $("#product-details > img").attr("src", selectedProduct.image);
            $("#product-details > .price").text("$" + selectedProduct.price);
            $("#product-details > .name").text(selectedProduct.name);
        } else {
            $("#product-details").addClass("hidden");
        }
      }
  });
});
