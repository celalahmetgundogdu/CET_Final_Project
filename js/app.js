const text=document.querySelector(".fancy");
const strText=text.textContent;
const splitText=strText.split("");
                  
for(leti=0;i<splitText.length;i++){
  text.innerHTML+="<span>"+splitText[i]+"</span>";
}
let char=0;
let timer=setInterval(onTick,50);
function onTick(){
    const span=text.querySelectorAll('span')[char];
    span.classList.add("fade");
    char ++
    if(char == splitText.length){
        complete();
        return;
    }
}

$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
              $('navbar').addClass('fix');
      } else {
          $('navbar').removeClass('fix');
      }
});