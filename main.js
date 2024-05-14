
var coll = document.getElementsByClassName("experience");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.querySelector('.material-icons').classList.toggle("up");
    this.classList.toggle('expanded');
    var content = this.parentElement.querySelector('.block-content');
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}