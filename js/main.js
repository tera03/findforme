$(document).ready(function(){

    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();


    if ($(".left-menu").length) {
        for (var i=0; i <  $(".left-menu > ul > li").length; i++ ) {
            $(".left-menu > ul > li").eq(i).addClass("menu-"+i);
        }
    }

    if($("select").length){
        $("select").multiselect({
            selectedList: 100,
            header: false,
            noneSelectedText: 'Не важно'
        });
    }

    if($(".ui-multiselect-menu").length) {

        var array = [];
        $(".ui-multiselect-menu").each(function(i,o) {
            array.push($(o));
        });

        $(".ui-multiselect").click(function() {
            var index = $(this).parent().index();

            if( array[index].children(".jspContainer").length) {
                array[index].children(".jspContainer").css("width","163px");
                array[index].children(".jspContainer").parent().css("width","163px");
            } else {
                array[index].jScrollPane();
            }
         })
    }


    Modernizr.load([
        // Presentational polyfills
        {
            // Logical list of things we would normally need
            test : Modernizr.borderradius,
            // Modernizr.load loads css and javascript by default
            nope : ['js/PIE_IE678.js'],
            callback: function initPIE678() {
                var selectors = '.wrapper, .map .catalog-item, .title-search-result';
                jQuery(selectors).each(function() {
                    PIE.attach(this);
                });

                $(".two-col .catalog-item:eq(1)").addClass("second");
                $(".two-col .catalog-item:nth-child(even)").addClass("even");
            }
        },
        {
            test : Modernizr.input.placeholder,
            // Modernizr.load loads css and javascript by default
            nope : ['js/jquery.placeholder.js'],
            callback: function () {
                jQuery('input[placeholder], textarea[placeholder]').placeholder();
            }
        }
    ]);

});