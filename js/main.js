$(document).ready(function() {
	$('#fullpage').fullpage({
        navigation: true,
		navigationPosition: 'right',
        navigationTooltips: ['int','About', '','Work','Gallery','Contact Me'],
        showActiveTooltip: false,
        anchors:['int','one','', 'two', 'three', 'four'],
        afterLoad:function(anchorLink,index){
            if(index==1){
                $('.logo_img').removeClass('active');
            }else{
                $('.logo_img').addClass('active');
            }if (index == 2) {
                $(".skillbar").each(function () {
                  $(this)
                    .find(".skillbar-bar")
                    .animate(
                      {
                        width: $(this).attr("data-percent")
                      },
                      2500
                    );
                });
              }
        }
        
	});

    $('header nav .logo').click(function(){
        $('html,body').animate({'scrollTop':0});
    });
    
    $('.main').show(function(){
        $('.int .bg_int .sun').addClass('active');
        $('.int .bg_int .fish_l').addClass('active');
        $('.int .bg_int .fish_r').addClass('active');
        $('.int .bg_int .me').addClass('active');
    });

    $(window).scroll(function(event){ didScroll = true; });
    var winH=$(window).height();
    $(window).scroll(function(){
        var win=$(this).scrollTop();
        if(win > winH){
            $('header nav .logo .logo_img').addClass('active');
        }else{
            $('header nav .logo .logo_img').removeClass('active');
        }
    });


    $("#content > div").hide();     
    $("#content > div:first").fadeIn();
    $('#tabs li').click(function(e) {
        e.preventDefault();     
        var idx=$(this).index();
        $("#content > div").hide();
        $("#content > div").eq(idx).fadeIn();
        var num=$(this).index();
        $('#tabs li').removeClass('active');
        $(this).find('li').addClass('active');
    });
  
    var $grid = $('.img-grid').isotope({
        itemSelector: '.img-container'
    });
    
    var filterFns = {
        numberGreaterThan50: function() {
        }
    };
    
    $('#filter-btn').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
    });
    
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
        });
    });

    $('.popup-gallery').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });
    
});