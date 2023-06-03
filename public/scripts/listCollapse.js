function compactMedia(objectID, limit) {
  var ul = document.getElementById(objectID);
  var items = ul.getElementsByTagName("li");
  for ( var x = limit; x < items.length-1; x++) {
    items[x].style.display = (items[x].style.display == '') ? 'none' : '';
  }
}
