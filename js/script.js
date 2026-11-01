;(function($){
  $(function(){

      // header 스크롤 스크립트
      window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          var target = document.getElementById("header")
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $(target).addClass("on");
        } else {
          $(target).removeClass("on");
        }
      }

      // sitemap display 스크립트
      $("#sitemap_open").click(function(){
        var sitemap = document.getElementById("sitemap");
        $(sitemap).addClass("on");
      });

      $("#sitemap_close").click(function(){
        var sitemap = document.getElementById("sitemap");
        $(sitemap).removeClass("on");
      });

  });
})(jQuery);
