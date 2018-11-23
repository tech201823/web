// copyright©kusokuso-navkakitakunaihasegawa.js 
// made by hasegawa
function navkakitakunaihase() {
    // ファイル名取得処理
    var filename =
        location.href
            .split(/\/(?!.*\/)/)[1]
            .split(/\.(?!.*\.)/)[0];

    var array = [];
    // menu の.htmlの前のファイル名
    // index.html だったらindex
    var array = ['index', 'clang', 'cs', 'ht', 'jas', 'jav', 'rub'];
    var array2 = [];
    // arrayに対応するメニューの名前
    // ～.html のページ名みたいな
    var array2 = ['TOP', 'ｃ言語', 'css', 'html', 'javascript', 'java', 'ruby'];
    // ここからループ分岐
    // for のまんなかは配列要素数
    for (i = 0; i < 7; i++) {
        if (filename == array[i]) {
            document.write("<li><a class=now>" + array2[i] + "</a></li >");
        } else {
            document.write("<li><a href=" + array[i] + ".html>" + array2[i] + "</a></li >");

        }
    }
}

navkakitakunaihase();