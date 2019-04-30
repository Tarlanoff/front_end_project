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
    // Menu bar search button toggle end //



    //Pop Categories carousel start
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }

    })


    //carousel nav button animation show/hide start
    $(".owl-stage-outer").mouseenter(function () {
        $(".owl-prev").stop();
        $(".owl-next").stop();
        $(".owl-prev").animate({ left: '7px' }).css("display", "block")
        $(".owl-next").animate({ right: '7px' }).css("display", "block")
    });

    $(".owl-stage-outer").mouseleave(function () {
        $(".owl-prev").stop();
        $(".owl-next").stop();
        $(".owl-prev").animate({ left: '-37px' }).css("display", "none")
        $(".owl-next").animate({ right: '-37px' }).css("display", "none")
    })
    //carousel nav button animation show/hide end



    //Pop Categories section carousel js end



});