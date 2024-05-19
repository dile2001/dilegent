
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
$('.skill-modetail').on('click', (e) => {
  const $e = $(e.target);
  var content = $e.closest('.block').find('.block-content');
  var inc = content.find('.corp-content');
  if($e.text() === 'View more')
  {
    setTimeout(()=>$e.text('View less'), 700);
    content.height(inc.outerHeight(true)).addClass('border-top');
    $e.closest('.block').get(0).scrollIntoView({
      behavior: 'smooth',
    });
    
  } else {
    $e.text('View more');
    content.removeClass('border-top').height(0);
  }
  
  $e.next().toggleClass('up180');
 
});