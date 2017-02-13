//form ajax
$('.main__form').on('submit', function (e) {
    var $this = $(this),
        url = $this.data('action'),
        data = $this.serialize();

    sendForm(url, data, function () {
        $('.main').load('success.html')
        console.log(data);
    });
    return false;
});

function sendForm(url, data, callback) {
    $.ajax({
        url: url,
        data: data,
        method: 'POST',
        complete: callback
    });
};
//Програмный вызов event
// $('.main__button').on('click', function() {
//     alert('Clic');
// });
//
// $('.main__input').on('input', function() {
//     $('.main__button').trigger('click');
// });


//load content
$('.load-btn').on('click', function() {
    $('.content').load('content.html', function() {
        console.log('Загрузили контент на сайт');
    });
});

