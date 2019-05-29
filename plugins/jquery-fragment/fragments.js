function loadHtmlFragment(url) {
    // Use jQuery "ajax" instead of jQuery "load", because "load" will get the whole div, 
    // when used with selector "#page" and not the contents.
    // You can get only the contents with "load", by using "url #page > *", 
    // but that will only get the child elements of the div, 
    // stripping out any direct child text.

    $('.spinner-container').removeClass('haidden-lol').show();
    $.ajax({
        url: url,
        type: 'GET',
        dataType: "html",
        success: function (data) {
            $('.spinner-container').addClass('haidden-lol').fadeOut('slow');
            // Strip out any javascript by using "parseHtml".
            // Only use the contents of the html fragment by using "html()".
            var dom = $("<div>").append(data).html();
            // Adjust UI.
            $('#contenido').html(dom);
        }
    });
};

