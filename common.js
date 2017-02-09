// $('.main__input').on('click', function (e) {
//     $this = this;
//     console.log($this);
// });

$('.main__form').on('submit', function (e) {
    var $this = $(this),
        url = $this.data('action'),
        data = $this.serialize();

    sendForm(url, data, function () {
        alert('Письмо отправленно !');
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