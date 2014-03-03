// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require masonry/jquery.masonry
//= require masonry/box-maker
//= require masonry/jquery.loremimages.min
//= require masonry/jquery.event-drag
//= require masonry/jquery.imagesloaded.min
//= require masonry/jquery.infinitescroll
//= require masonry/modernizr-transitions
//= require_tree .

$(function(){ $(document).foundation(); });

var resizeBoxes = function()
{
    var columns    = 4,
        setColumns = function() { columns = $( window ).width() > 640 ? 4 : $( window ).width() > 320 ? 2 : 1; };

    setColumns();
    $( window ).resize( setColumns );

    $( '#list' ).masonry(
        {
            itemSelector: '.item',
            columnWidth:  function( containerWidth ) { return containerWidth / columns; }
        });


};

var renderTemplate = function (template_name){
    $('#current_template').removeAttr('id');
    $("." + template_name).attr('id', 'current_template');

}




$('div.itemwrapper').on('mouseenter', function(){
    $(this).find('.buytag').show();
})

$('div.itemwrapper').on('mouseleave', function(){
    $(this).find('.buytag').hide();
    $(this).find('.f-dropdown').removeClass('open').css('left', '-99999px');
})

$('.shoptag').on('mouseenter', function(){
    $(this).addClass('inverse');
})

$('.shoptag').on('mouseleave', function(){
    $(this).removeClass('inverse');
})

$(document).ready(function(){

    $('.f-dropdown a').click(function(event){
        event.preventDefault();
    })

    $('.shoptag').show();

    $('.link-bikes').click(function(event){
        event.preventDefault();
        renderTemplate('template-bikes');
        $('.active').removeClass('active');
        $('.link-bikes').parent('li').addClass("active");
//        $(this).parent().siblings().removeClass("active");
//        $(this).parent('li').addClass("active");
    });

    $('.link-parts').click(function(event){
        event.preventDefault();
        renderTemplate('template-parts');
        $('.active').removeClass('active');
        $('.link-parts').parent('li').addClass("active");
//        $(this).parent().siblings().removeClass("active");
//        $(this).parent('li').addClass("active");
    });

    $('.link-clothes').click(function(event){
        event.preventDefault();
        renderTemplate('template-clothes');
        $('.active').removeClass('active');
        $('.link-clothes').parent('li').addClass("active");
//        $(this).parent().siblings().removeClass("active");
//        $(this).parent('li').addClass("active");
    });

    $('.link-accessories').click(function(event){
        event.preventDefault();
        renderTemplate('template-accessories');
        $('.active').removeClass('active');
        $('.link-accessories').parent('li').addClass("active");
//        $(this).parent().siblings().removeClass("active");
//        $(this).parent('li').addClass("active");
    });

    $('.link-market').click(function(event){
        event.preventDefault();
        renderTemplate('template-market');
        $('.active').removeClass('active');
        $('.link-market').parent('li').addClass("active");
//        $(this).parent().siblings().removeClass("active");
//        $(this).parent('li').addClass("active");
    });

    $('.link-logo').click(function(event){
        event.preventDefault();
        renderTemplate('template-home');
        $('li').removeClass("active");
    });

    $('.link-join').click(function(event){
        event.preventDefault();
        renderTemplate('template-join');
        $('li').removeClass("active");
    });
})
