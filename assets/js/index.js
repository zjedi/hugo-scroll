/**
 * Main JS file for GhostScroll behaviours
 */

var $post = $(".post");
var $first = $(".post.first");
var $last = $(".post.last");
var $fnav = $(".fixed-nav");
var $postholder = $(".post-holder");
var $postafter = $(".post-after");
var $sitehead = $("#site-head");

/* Globals jQuery, document */
(function ($) {
  "use strict";
  function srcTo(el, dur = 1000) {
    $("html, body").animate(
      {
        scrollTop: el.offset().top,
      },
      dur,
      function() {
        window.location.hash = el.attr("id");
      }
    );
  }
  function srcToAnchorWithTitle(str) {
    var $el = $("#" + str);
    if ($el.length) {
      srcTo($el);
    }
  }
  $(document).ready(function () {
    $postafter.each(function (e) {
      var bg = $(this).parent().css("background-color");
      $(this).css("border-top-color", bg);
    });

    $("a.btn.site-menu").click(function (e) {
      srcToAnchorWithTitle($(e.target).data("title-anchor"));
    });
    $("#header-arrow").click(function () {
      srcTo($first);
    });

    $(".post-title").each(function () {
      var t = $(this).data("fnav-title");
      var index = $(this).parents(".post-holder").index();
      var postId = $(this).closest("article.post").attr('id');
      $fnav.append(
        "<a class='fn-item' item_index='" + index + "' data-post-id='" + postId + "'>" + t + "</a>"
      );
      $(".fn-item").click(function () {
        var postId = $(this).data("post-id");
        var s = $("#" + postId);
        srcTo(s, 200);
      });
    });

    $(".post.last").next(".post-after").hide();
    if ($sitehead.length) {
      $(window).scroll(function () {
        var w = $(window).scrollTop();
        var g = $sitehead.offset().top;
        var h = $sitehead.offset().top + $sitehead.height() - 100;

        if (w >= Math.floor(g) && w <= Math.ceil(h)) {
          $(".fixed-nav").fadeOut("fast");
        } else if ($(window).width() > 500) {
          $(".fixed-nav").fadeIn("fast");
        }

        $post.each(function () {
          if (($(window).height() + w) > ($(document).height() - $(".site-footer").height())) {
            var l = $postholder.length;
            $(".fn-item[item_index='" + (l - 1) + "']").removeClass("active")
            $(".fn-item[item_index='" + (l) + "']").addClass("active")
          } else {
            var f = $(this).offset().top;
            var b = $(this).offset().top + $(this).height();
            var t = $(this).parent(".post-holder").index();
            var i = $(".fn-item[item_index='" + t + "']");
            var a = $(this)
              .parent(".post-holder")
              .prev(".post-holder")
              .find(".post-after");

            $(this).attr("item_index", t);

            if (w >= f && w <= b) {
              i.addClass("active");
              a.fadeOut("slow");
            } else {
              i.removeClass("active");
              a.fadeIn("slow");
            }
        }
        });
      });
    }

    $('ul').addClass("fa-ul");
    $("ul li").prepend('<span class="fa-li"><i class="fa fa-asterisk"></i></span>');
    $("blockquote p").prepend('<span class="quo fa fa-quote-left"></span>');
    $("blockquote p").append('<span class="quo fa fa-quote-right"></span>');
  });

  $post.each(function () {
    var postText = $(this).html();
    var fa = [];
    for (var i = 0; i < icons.length; i++) {
      fa[i] = {};
      fa[i].str = "@" + icons[i] + "@";
      fa[i].icon = icons[i];
      fa[i].int = postText.search(fa[i].str);

      if (fa[i].int > -1) {
        fa[i].count = postText.match(new RegExp(fa[i].str, "g")).length;
        for (var j = 0; j < fa[i].count; j++) {
          $(this).html(
            $(this)
              .html()
              .replace(fa[i].str, "<i class='fa " + fa[i].icon + "'></i>")
          );
        }
      }
    }
  });
})(jQuery);
