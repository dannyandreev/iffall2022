function navClick(id) {
  console.log(id);
  var contents = document.getElementsByClassName("content");
  console.log(contents);
  for (var content of contents) {
    if(content.id == id) {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }
}
