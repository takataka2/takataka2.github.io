var Matrix_Rows = 16;
var Matrix_Cols = 16;
var Color_Index = "#ffffff";

window.onload = function(){
    var myTbl = document.getElementById("TBL");

    for(var i = 0; i < Matrix_Rows ; i++){
        var row = myTbl.insertRow(-1);

        for(var j = 0; j < Matrix_Cols ; j++){
            var col = row.insertCell(-1);
        }
    }

    for (var i=0; i<myTbl.rows.length; i++) {
        // tr内のtdをループ。cellsコレクションで行内セル位置取得。
        for (var j=0; j<myTbl.rows[i].cells.length; j++) {
            var Cells=myTbl.rows[i].cells[j]; //i番行のj番列のセル "td"
            Cells.style.backgroundColor = "#FFFFFF";
        }
    }
};

// クリックしたカラーインデックスの色を取得する
function getColor() {
    var myTbl = document.getElementById('ColorTBL');

    // trをループ。rowsコレクションで,行位置取得。
    for (var i=0; i<myTbl.rows.length; i++) {
        // tr内のtdをループ。cellsコレクションで行内セル位置取得。
        for (var j=0; j<myTbl.rows[i].cells.length; j++) {
            var Cells=myTbl.rows[i].cells[j]; //i番行のj番列のセル "td"

            // onclickで 'getColorIndex'を実行。thisはクリックしたセル"td"のオブジェクトを返す。
            Cells.onclick =function(){getColorIndex(this);}
        }
    }
}

//描画欄内のセルをすべて白色にする
function cellClear(){
    var button = document.getElementById("button");

    button.onclick = function(){

        var myTbl = document.getElementById('TBL');
        // trをループ。rowsコレクションで,行位置取得。

        for (var i=0; i<myTbl.rows.length; i++) {
            // tr内のtdをループ。cellsコレクションで行内セル位置取得。
            for (var j=0; j<myTbl.rows[i].cells.length; j++) {
                var Cells=myTbl.rows[i].cells[j]; //i番行のj番列のセル "td"
                Cells.style.backgroundColor = "#FFFFFF";
            }
        }
    }
}

//描画欄のセルの色情報を元にPNG画像を生成する
function picMake(){
    var button = document.getElementById("button2");
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    button.onclick = function(){

        var myTbl = document.getElementById('TBL');

        // trをループ。rowsコレクションで,行位置取得。
        for (var i=0; i<myTbl.rows.length; i++) {
            // tr内のtdをループ。cellsコレクションで行内セル位置取得。
            for (var j=0; j<myTbl.rows[i].cells.length; j++) {
                var Cells=myTbl.rows[i].cells[j]; //i番行のj番列のセル "td"

                context.fillStyle = Cells.style.backgroundColor;
                context.fillRect(j*10, i*10, 10, 10);
            }
        }
    }
}
//描画欄内のクリックしたセルの色を変更する
function cellChangeColor() {
    var myTbl = document.getElementById('TBL');
    // trをループ。rowsコレクションで,行位置取得。
    for (var i=0; i<myTbl.rows.length; i++) {
        // tr内のtdをループ。cellsコレクションで行内セル位置取得。
        for (var j=0; j<myTbl.rows[i].cells.length; j++) {
            var Cells=myTbl.rows[i].cells[j]; //i番行のj番列のセル "td"

            // onclickで 'cellChangeColor'を実行。thisはクリックしたセル"td"のオブジェクトを返す。
            Cells.onclick =function(){changeColor(this);}
        }
    }
}

function changeColor(Cell) {
    Cell.style.backgroundColor = Color_Index;
}

function getColorIndex(Cell) {
    Color_Index = Cell.style.backgroundColor;
}

// try ～ catch 例外処理、エラー処理
// イベントリスナーaddEventListener,attachEventメソッド
try{
    window.addEventListener("load",cellChangeColor,false);
    window.addEventListener("load",cellClear,false);
    window.addEventListener("load",getColor,false);
    window.addEventListener("load",picMake,false);
}catch(e){
    window.attachEvent("onload",cellChangeColor);
    window.attachEvent("onload",cellClear);
    window.attachEvent("onload",getColor);
    window.attachEvent("onload",picMake);
}
