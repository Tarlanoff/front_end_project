$(document).ready(function () {

    $(window).scroll(function () {
        if ($("html").scrollTop() >= 70) {
            $("#main-menu .navbar").addClass("fixed-top");
        } else {
            $("#main-menu .navbar").removeClass("fixed-top");
        }
    });

    // alert close button event
    $("#alert i").click(function () {
        $("#alert").hide()
    });
    // event end

    $(".btn-main").mouseover(function () {
        var line = $("<div></div>")
    });


    // modal close event
    $("#modal-registration .modal").on("hide.bs.modal", function () {
        $("#modal-registration ul .nav-link:first").addClass("active")
        $("#modal-registration .nav-link:last").removeClass("active")
        $("#modal-registration #login").addClass("active");
        $("#modal-registration #signup").removeClass("active");
    });
    // event end


    // navbar mouse events
    var navOption = $("#main-menu .nav-item")
    var navDropdown = $("#main-menu .nav-item .dropdown-menu")


    for (let i = 0; i < navOption.length; i++) {

        $(navOption[i]).on("mouseover mouseout", function () {
            $(navDropdown[i]).toggleClass("show")
            $(navOption[i]).toggleClass("show")
        })
    }
    // events end


    // navbar search event // 
    $("#main-menu .search-link").click(function (e) {
        e.preventDefault();

        if ($("#main-menu .search-link i").hasClass("fa-search")) {
            $("#main-menu .search-link i").removeClass("fa-search")
            $("#main-menu .search-link i").addClass("fa-times").css("font-size", "20px")

        }
        else if ($("#main-menu .search-link i").hasClass("fa-times")) {
            $("#main-menu .search-link i").removeClass("fa-times")
            $("#main-menu .search-link i").addClass("fa-search").css("font-size", "15px")
        }
        $("#main-menu .search").toggleClass("active")
        $("#main-menu .search input").val('')
    })
    // event end //


<<<<<<< HEAD
    // main slide carousel start
    $('#main-slide .items').owlCarousel({
        loop: true,
        autoWidth: false,
        margin: 0,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,

        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    ResetText();
    TextAnimation();
    var owl = $('#main-slide .owl-carousel');
    owl.owlCarousel();

    owl.on('translated.owl.carousel', function (event) {
        TextAnimation();
    });
    owl.on('change.owl.carousel', function (event) {
        ResetText();
    });


    function ResetText() {
        $("#main-slide h1").css({
            top: '30%',
            opacity: '0'
        });
        $("#main-slide h4").css({
            top: '60%',
            opacity: '0'
        });
        $("#main-slide ul").css({
            top: '70%',
            opacity: '0'
        });
    }

    function TextAnimation() {

        $("#main-slide .items .active h1").animate({
            top: '40%',
            opacity: '1'
        }, 500);
        $("#main-slide .items .active h4").animate({
            top: '50%',
            opacity: '1'
        }, 900);
        $("#main-slide .items .active ul").animate({
            top: '60%',
            opacity: '1'
        }, 900);

    }
    // main slide carousel end

=======

   
>>>>>>> ffe93e87717703d7911a47218d97b00f53510060

    // popular categories slide carousel start
    $("#popular .items").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })
    // popular categories slide carousel end
});

<<<<<<< HEAD
=======
});
>>>>>>> ffe93e87717703d7911a47218d97b00f53510060
