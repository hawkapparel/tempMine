/********* Menu Responsive ***********/
var menuGeneral = function(){
  var nav = "";
  var holdMobile = document.getElementById("hold-mobile");
  this.menuVertical = function(btnBurguer, idLienzo){
    btnBurguer.addEventListener("click",function(){
      var altoBody = document.querySelector('body').scrollHeight;
      nav = this.nextElementSibling;
      this.firstElementChild.classList.toggle("animate");
      if (idLienzo.style.right === "") {
        idLienzo.style.overflow = "inherit";
        idLienzo.style.right = nav.clientWidth + "px";
        nav.style.height = altoBody + "px";
        holdMobile.style.display = "block";
      }else{
        idLienzo.style = null;
        holdMobile.style = null;
        setTimeout(function(){
          nav.style.height = null;
        }, 500);
      }
    });
    holdMobile.addEventListener("click",function(){
      btnBurguer.click();
    });
    // Event Touch
    var elHammer = new Hammer(holdMobile); 
    elHammer.on("swiperight", function(ev) {
      holdMobile.click();
    });
    //Resize
    window.onresize = function() {
      setTimeout(function(){
        w = window.innerWidth;
        if (w >= 768 && idLienzo.style.right !== "") {
          idLienzo.style.right = null;
          holdMobile.style = null;
          btnBurguer.firstElementChild.classList.remove("animate");
          nav.style = null;
        }
      }, 10);
    };
  }
  
  // PAra Menu horizontal
  this.menuHorizontal = function(btnBurguer){
    btnBurguer.addEventListener("click",function(){
     this.firstElementChild.classList.toggle("animate");
     nav = this.nextElementSibling;
     var altoNav = nav.firstElementChild.scrollHeight + 10;
     if (nav.style.height === "") {
       nav.style.height = altoNav + "px";
       holdMobile.style.display = "block";
     }else{
       nav.style = null;
     }
    });
    holdMobile.addEventListener("click",function(){
      btnBurguer.click();
    });
    //Resize
    window.onresize = function() {
      setTimeout(function(){
        w = window.innerWidth;
        if (w >= 768 && nav.style !== "") {
            holdMobile.style.display = null;
            btnBurguer.firstElementChild.classList.remove("animate");
            nav.style = null;
          }
      }, 10);
    };
  }
}

module.exports = menuGeneral;
