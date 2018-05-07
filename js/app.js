(function ($, window, document, undefined) {

    'use-strict';

    var winWidth, socialHeight;

    function setWidth() {

        winWidth = $(window).innerWidth(); //This may need to be width()	
        socialHeight = (winWidth > 640) ? 120 : 160;

    }

    setWidth();

    $(window).on('resize', setWidth);
    //Dom Ready
    $(function () {

        var didScroll = false,
            icon = $(".huge-title, #godown"),
            $window = $(window);

        $(window).scroll(function () {
            didScroll = true;
        });

        window.setInterval(function () {
            if (didScroll) {
                if (1 - $window.scrollTop() / 200 > -20) {
                    icon.css({
                        opacity: 1 - $window.scrollTop() / 500
                    });
                }
                didScroll = false;
            }
        }, 50);

        //Social Scroll
        $(window).scroll(function () {
            if ($(window).scrollTop() < 300) {
                $('#socialsection').css({
                    opacity: "0"
                }, 500);
            } else if ($(window).scrollTop() > 300) {
                $('#socialsection').css({
                    opacity: "1"
                }, 500);
            }
        });
        //Menu Icon
        var trigger = $('#hamburger'),
            isClosed = true;

        trigger.on('click', function () {
            burgerTime();
        });

        function burgerTime() {
            if (isClosed == true) {
                trigger.removeClass('is-closed');
                trigger.addClass('is-open');
                isClosed = false;
            } else {
                trigger.removeClass('is-open');
                trigger.addClass('is-closed');
                isClosed = true;
            }
        }

        $('#nav > ul > li ').each(function (index) {
            var _self = $(this).children();

            $(this).on('click', function () {
                var href = $(_self).attr("href");
                scrollToDiv(href);
            });
        });

        function scrollToDiv(element) {
            $('html,body')
                .unbind()
                .animate(
                    {
                        scrollTop: $(element).offset().top - 50
                    }
                    , 'slow');
        };

        $('#nav ul li').on('click', function () {
            burgerTime();
        });
        //Menu toggle
        $('.menu').on('click', function () {

            $('.nav').animate({
                height: 'toggle'
            });
        });

        $('#socialsection').on('click', function () {

            if ($(this).hasClass('hide')) {
                $(this).animate({
                    height: 40
                }, 200).removeClass('hide');
            } else {
                $(this).animate({
                    height: socialHeight
                }, 200).addClass('hide');
            }
        });

        //Knob
        $(".knob").knob({
            change: function (value) {
                //console.log("change : " + value);
            },
            release: function (value) {
                //console.log(this.$.attr('value'));
                console.log("release : " + value);
            },
            cancel: function () {
                console.log("cancel : ", this);
            },
            draw: function () {

                // "cr3ativ" case
                if (this.$.data('skin') == 'cr3ativ') {

                    var a = this.angle(this.cv) // Angle
                        ,
                        sa = this.startAngle // Previous start angle
                        ,
                        sat = this.startAngle // Start angle
                        ,
                        ea // Previous end angle
                        , eat = sat + a // End angle
                        ,
                        r = 1;

                    this.g.lineWidth = this.lineWidth;

                    this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);

                    if (this.o.displayPrevious) {
                        ea = this.startAngle + this.angle(this.v);
                        this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                        this.g.beginPath();
                        this.g.strokeStyle = this.pColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                        this.g.stroke();
                    }

                    this.g.beginPath();
                    this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                    this.g.stroke();

                    this.g.lineWidth = 2;
                    this.g.beginPath();
                    this.g.strokeStyle = this.o.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                    this.g.stroke();

                    return false;
                }
            }
        });




        //plusAnchor
        $('body').plusAnchor({
            easing: 'easeInOutExpo',
            offsetTop: -75,
            speed: 800,
            onInit: function (base) {

                if (base.initHash != '' && $(base.initHash).length > 0) {
                    window.location.hash = 'hash_' + base.initHash.substring(1);
                    window.scrollTo(0, 0);

                    $(window).load(function () {

                        timer = setTimeout(function () {
                            $(base.scrollEl).animate({
                                scrollTop: $(base.initHash).offset().top
                            }, base.options.speed, base.options.easing);
                        }, 2000); // setTimeout
                    }); // window.load
                }; // if window.location.hash
            } // onInit
        });

        //Video Wallpaper Settings - alter the URL's to your converted videos		
        $("#video_element").wallpaper({
            source: {
                mp4: "videos/For_Wes.mp4",
                ogg: "videos/For_Wes.ogv",
                webm: "videos/For_Wes.webm"
            }
        });

        //fitVids
        $(".video-container").fitVids();

        //fancybox
        $(".fancybox").fancybox();

        //ScrolltoTop
        $("#toTop").scrollToTop(1000);

        //owlCarousel - these settings are for the testimonials and sub heading under your name title at the top
        $(".testimonials").owlCarousel({

            // Most important owl features
            items: 1,
            itemsCustom: false,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            singleItem: false,
            itemsScaleUp: false,

            //Basic Speeds - set your speeds in milliseconds here!
            slideSpeed: 400,
            paginationSpeed: 800,
            rewindSpeed: 1000,

            //Autoplay
            autoPlay: true,
            stopOnHover: true

        })
        //owlCarousel - these settings are for the client logos
        $(".owl-example").owlCarousel({

            // Most important owl features
            items: 4,
            itemsCustom: false,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            singleItem: false,
            itemsScaleUp: false,

            //Basic Speeds - set your speeds in milliseconds here!
            slideSpeed: 400,
            paginationSpeed: 800,
            rewindSpeed: 1000,

            //Autoplay
            autoPlay: true,
            stopOnHover: true,

            // Navigation
            navigation: false,
            navigationText: ["prev", "next"],
            rewindNav: true,
            scrollPerPage: false,

            //Pagination
            pagination: true,
            paginationNumbers: false,

            // Responsive 
            responsive: true,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,

            // CSS Styles
            baseClass: "owl-carousel",
            theme: "owl-theme",

            //Lazy load
            lazyLoad: false,
            lazyFollow: true,
            lazyEffect: "fade",

            //Auto height
            autoHeight: true,

            //JSON 
            jsonPath: false,
            jsonSuccess: false,

            //Mouse Events
            dragBeforeAnimFinish: true,
            mouseDrag: true,
            touchDrag: true,

            //Transitions
            transitionStyle: false,

            // Other
            addClassActive: false,

            //Callbacks
            beforeUpdate: false,
            afterUpdate: false,
            beforeInit: false,
            afterInit: false,
            beforeMove: false,
            afterMove: false,
            afterAction: false,
            startDragging: false,
            afterLazyLoad: false

        });

        new WOW().init();
    });

})(window.jQuery, this, document);



