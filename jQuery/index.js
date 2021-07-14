$(function(){
  $("#simple-treeview").dxTreeView({ 
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
      onItemClick: function(e) {
          const item = e.itemData;
          if(item.price) {
              $("#product-details").removeClass("hidden");
              $("#product-details > img").attr("src", item.image);
              $("#product-details > .name").text(item.name);
              $("#product-details > .price").text("$" + item.price);
          } else {
              $("#product-details").addClass("hidden");
          }
      }
  }).dxTreeView("instance");
});
