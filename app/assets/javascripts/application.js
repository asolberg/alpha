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

$('#bikes').click(function(event){
    event.preventDefault();
    renderTemplate('template-bikes');
    $(this).parent().siblings().removeClass("active");
    $(this).parent('li').addClass("active");
});

$('#parts').click(function(event){
    event.preventDefault();
    renderTemplate('template-parts');
    $(this).parent().siblings().removeClass("active");
    $(this).parent('li').addClass("active");
});

$('#clothes').click(function(event){
    event.preventDefault();
    renderTemplate('template-clothes');
    $(this).parent().siblings().removeClass("active");
    $(this).parent('li').addClass("active");
});

$('#accessories').click(function(event){
    event.preventDefault();
    renderTemplate('template-accessories');
    $(this).parent().siblings().removeClass("active");
    $(this).parent('li').addClass("active");
});

$('#market').click(function(event){
    event.preventDefault();
    renderTemplate('template-market');
    $(this).parent().siblings().removeClass("active");
    $(this).parent('li').addClass("active");
});

$('#logo').click(function(event){
    event.preventDefault();
    renderTemplate('template-home');
    $('li').removeClass("active");
});

$('#join').click(function(event){
    event.preventDefault();
    renderTemplate('template-join');
    $('li').removeClass("active");
});

$.fx.speeds._default = 9000;

$('div.columns').on('mouseover', function(){
    $(this).find('.buytag').show();
})

$('div.columns').on('mouseout', function(){
    $(this).find('.buytag').hide();
    $(this).find('.f-dropdown').removeClass('open').css('left', '-99999px');
})

