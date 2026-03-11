document.addEventListener('DOMContentLoaded',function(){
  var link=document.getElementById('politica-datos-link');
  var popup=document.getElementById('popup-politica-datos');
  if(link&&popup){
    link.addEventListener('click',function(){
      popup.style.display='flex';
    });
  }
});
