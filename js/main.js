$(document).ready(function() {
    "use strict";

    $(document).click(function(e) {
        var search = $(".dropdown_menu");
        var tooltip = $(".header_block_btn");
        if (!search.is(e.target) && search.has(e.target).length === 0 && !tooltip.is(e.target) && tooltip.has(e.target).length === 0) {
            $(".header_block_btn").removeClass("active");
            $(".dropdown_menu").removeClass("active");
            $("body").removeClass("scroll");
        }
    });

    $('.main_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 500,
		autoplay: true,
        fade: true,
		prevArrow: $('.main_arrows_prev'),
      	nextArrow: $('.main_arrows_next')
	});

    $('.about_block_item_img_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 500,
		autoplay: true,
        fade: true,
		prevArrow: $('.about_block_item_img_arrows_prev'),
      	nextArrow: $('.about_block_item_img_arrows_next')
	});

    $(".dropdown_menu_parent ul li span").click(function() {
        $(".dropdown_menu_parent ul li span").removeClass("active");
        $(this).addClass("active");
        var name = $(this).text();
        $("#changeTitle").text(name);
        $(".dropdown_menu").addClass("show");
        var attr = $(this).attr("data-target");
        $(".dropdown_menu_children_item").removeClass("active");
        $(`#${attr}`).addClass("active");
    });

    $(".dropdown_menu_top_back").click(function() {
        $(".dropdown_menu").removeClass("show");
        $(".dropdown_menu_children_item").removeClass("active");
    });

    $(".dropdown_menu_top_close").click(function() {
        $(".dropdown_menu").removeClass("show");
        $(".dropdown_menu").removeClass("active");
        $(".dropdown_menu_children_item").removeClass("active");
        $("body").removeClass("scroll");
    });

    $(".terms_block_item_top").click(function() {
        $(this).toggleClass("active");
        $(this).parent().find(".terms_block_item_body").slideToggle();
    });

    $(".header_block_btn").click(function() {
        $(this).toggleClass("active");
        $(".dropdown_menu").toggleClass("active");
        $("body").toggleClass("scroll");
        if($(window).width() > 1023) {
            $(".dropdown_menu_parent ul li span").removeClass("active");
            $(".dropdown_menu_parent ul li").first().find("span").addClass("active");
            $("#nav_products").addClass("active");
        }
    });
    
    $(".products_nav_wrap_item span").click(function() {
        $(".products_nav_wrap_item span").removeClass("active");
        $(this).addClass("active");
        var attr = $(this).attr("data-target");
        var title = $(this).text();
        if(attr == "all") {
            $(".products_wrap_item").removeClass("hidden");
            $(".products_top h1").text("все продукты");
        } else {
            $(".products_wrap_item").addClass("hidden");
            $(`#${attr}`).removeClass("hidden");
            $(".products_top h1").text(title);
        }
        
    });

});