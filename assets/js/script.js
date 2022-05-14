if (!window.jQuery) {
    alert('Для этого плагина необходимо подключение библиотеки jquery')
} else {
    plugin();
}

function plugin() {
    function color() {
        $('body').removeClass('whiteblack');
        $('body').removeClass('blackwhite');
        $('body').removeClass('blue');
        $('body').removeClass('brown');
    }

    function size() {
        $('body').removeClass('size18');
        $('body').removeClass('size22');
        $('body').removeClass('size26');
    }

    $(document).ready(function() {
        $(document).on('click', '.js-color-button', function() {
            color();
            var dataColor = $(this).attr('data-color');
            $('body').addClass(dataColor);
        })
    });

    $(document).ready(function() {
        $(document).on('click', '.js-size-button', function() {
            size();
            var dataColor = $(this).attr('data-size');
            $('body').addClass(dataColor);
        })
    });


}