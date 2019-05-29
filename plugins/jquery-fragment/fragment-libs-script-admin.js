$(document).ready(function () {

    loadHtmlFragment('views/info-clientes.html'); //page default
    window.activeLink = 'views/info-clientes.html';

    $("a.fragment-link").each(function (event) {
        $(this).on('click', function (e) {
            e.preventDefault();
            var href = $(this).attr("href");
            window.activeLink = href;
            loadHtmlFragment(href);
        });
    });

});
