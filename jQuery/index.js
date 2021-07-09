$(function(){
    $("#simple-treeview").dxTreeView({ 
        items: books,
        searchEnabled: true,
        selectByClick: true,
        selectionMode: "single",
        virtualModeEnabled: true,
        itemTemplate: function(item) {
          if (item.year) {
            return "<div>" + item.text + " (" + item.year + ")" + "</div>";
          } else {
              return "<div>" + item.text + "</div>";
          }
        },
        onItemClick: function(e) {
          var clickedNode = e.itemData;
          if (!clickedNode.items) {
            var parentNode = e.node.parent;
            $("#book-details").removeClass("hidden");
            $("#book-details > .book").text(`${clickedNode.text} by ${parentNode.text}`);
          } else {
            $("#book-details").addClass("hidden");
          }
        }
    }).dxTreeView("instance");
});

