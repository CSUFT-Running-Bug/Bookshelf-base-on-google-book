$(document).ready(function () {
    console.log('jQuery sucessful')
    $(".btn-search").bind('click', function () {
        var search = $("#books").val();
        console.log(search);
        if (search === '') {
            alert('Please enter something');
        } else {
            var url = '';
            var img = '';
            var title = '';
            var author = '';
            var btn = '';
            $.ajax({
                url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
                dataType: "json",
                success: function (res) {
                    console.log(res);
                    for (var i = 0; i < res.items.length; i++) {
                        title = $('<div class="book-name" style="margin:auto auto">' + res.items[i].volumeInfo.title + '</div>');
                        author = $('<div class="autor">' + "Autor: " + res.items[i].volumeInfo.authors + '</div>');
                        img = $('<img>');
                        btn = $('<a style="display:block;margin-left:20px" class="bb" href=' + res.items[i].volumeInfo.infoLink + '><button class="blue-text">Read More>></button></a>');
                        url = res.items[i].volumeInfo.imageLinks.thumbnail;
                        img.attr('src', url);

                        var item = $("<div class='item'><div>");
                        item.append(title);
                        item.append(author);
                        var imgBox = $("<div class='imgBox'></div>");
                        imgBox.append(img);
                        imgBox.append(btn);
                        item.append(imgBox);
                        // var divBtn = $('<div class="divBtn"></div>');
                        // divBtn.append(btn)
                        // item.append(divBtn);

                        $('#result').append(item);
                    }
                },
                error: function (res) {
                    if (res === null) {
                        alert('请输入正确的书名');
                    }
                }
            });
        }
    })
});

