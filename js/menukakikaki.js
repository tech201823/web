// copyright©menukakikaki.js
// made by hasegawa taito
// 再配布禁止

function navkakitakunaihasegawataito() {
    // ファイル名取得処理
    var filename =
        location.href
        .split(/\/(?!.*\/)/)[1]
        .split(/\.(?!.*\.)/)[0];

    var array = [];
    // menu の.htmlの前のファイル名
    // index.html だったらindex
    var array = ['index', 'clang', 'cs', 'ht', 'jas', 'jav','rub','phy','kot','mac'];
    var array2 = [];
    // arrayに対応するメニューの名前
    // ～.html のページ名みたいな
    var array2 = ['TOP', 'C言語', 'CSS', 'HTML', 'javascript', 'java','Ruby','Phython','Kotlin','mac'];
    // ここからループ分岐
    // for のまんなかは配列要素数
    if (array.length !== array2.length) {
        document.write("<p>null</p>")
    }
    for (i = 0; i < array.length; i++) {
        if (filename == array[i]) {
            document.write("<li><a class=now>" + array2[i] + "</a></li >");
        } else {
            document.write("<li><a href=" + array[i] + ".html>" + array2[i] + "</a></li >");

        }
    }
}

navkakitakunaihasegawataito();