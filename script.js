
function klikMenu(){
    $(".tombol-menu").click(function(){
        $("nav .menu ul").toggle();
      });
      $("nav .menu ul").click(function(){
        $("nav .menu ul").toggle();
      })
  }

  $(document).ready (function () {
      var width = $(window).width();
      if(width < 990){
          klikMenu();
      }
  })


  //check lebar
  $(window).resize (function(){
      var width = $(window).width();
      if(width > 989){
          $("nav .menu ul").css("display","flex");
          //display:flex
      } else {
          $("nav .menu ul").css("display", "none");
      }
      klikMenu();
  })

  function datetime() {
    var currentdate = new Date(); 
    var datetime = "Date Time: " + currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear() + " "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes() + ":" 
        + currentdate.getSeconds();
        console.log(datetime)
        $("#datetime").text(datetime);
  }

  //efek scroll
  $(document).ready (function () {
    setInterval(datetime, 1000);


    var scroll_pos = 0;
    $(document).scroll(function(){
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 0){
        $("nav").addClass("putih");
        
      }else{
        $("nav").removeClass("putih");
      }
    })
  });

  function showFullArticle(articleId) {
      var fullArticle = document.getElementById('full-' + articleId);

      if (fullArticle.style.display === 'none' || fullArticle.style.display === '') {
          fullArticle.style.display = 'block';
      } else {
          fullArticle.style.display = 'none';
      }
  }
