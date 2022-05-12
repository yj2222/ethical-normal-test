(function () {

    function canvasWave() {
        var unit = 100,
        canvasList, // キャンバスの配列
        info = {}, // 全キャンバス共通の描画情報
        colorList; // 各キャンバスの色情報

        /**
         * Init function.
         * 
         * Initialize variables and begin the animation.
         */
        function init() {
            info.seconds = 0;
            info.t = 0;
            canvasList = [];
            colorList = [];

            if(document.getElementById("sineCanvas") != null) {
                canvasList.push(document.getElementById("sineCanvas"));
                colorList.push(['#233060']);
    
                canvasList.push(document.getElementById("sineCanvas1"));
                colorList.push(['#E7E9EE']);
    
                canvasList.push(document.getElementById("waveWhite1"));
                colorList.push(['#FFFFFF']);
    
                canvasList.push(document.getElementById("waveGray1"));
                colorList.push(['#E7E9EE']);
    
                canvasList.push(document.getElementById("waveWhite2"));
                colorList.push(['#FFFFFF']);
    
                canvasList.push(document.getElementById("waveBlue1"));
                colorList.push(['#233060']);
    
                canvasList.push(document.getElementById("waveWhite3"));
                colorList.push(['#FFFFFF']);
    
                canvasList.push(document.getElementById("waveWhite4"));
                colorList.push(['#FFFFFF']);
    
                canvasList.push(document.getElementById("waveGray2"));
                colorList.push(['#E7E9EE']);
    
                canvasList.push(document.getElementById("waveWhite5"));
                colorList.push(['#FFFFFF']);
            }

            canvasList.push(document.getElementById("waveBlue2"));
            colorList.push(['#233060']);

            // 各キャンバスの初期化
            for(var canvasIndex in canvasList) {
                var canvas = canvasList[canvasIndex];
                canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
                canvas.height = 200;
                canvas.contextCache = canvas.getContext("2d");
            }
            // 共通の更新処理呼び出し
                update();
        }

        function update() {
            for(var canvasIndex in canvasList) {
                var canvas = canvasList[canvasIndex];
                // 各キャンバスの描画
                draw(canvas, colorList[canvasIndex], canvasIndex);
            }
            // 共通の描画情報の更新
            info.seconds = info.seconds + .014;
            info.t = info.seconds*Math.PI;
            // 自身の再起呼び出し
            setTimeout(update, 35);
        }

        /**
        * Draw animation function.
        * 
        * This function draws one frame of the animation, waits 20ms, and then calls
        * itself again.
        */
        function draw(canvas, color, canvasIndex) {
            // 対象のcanvasのコンテキストを取得
            var context = canvas.contextCache;
            // キャンバスの描画をクリア
            context.clearRect(0, 0, canvas.width, canvas.height);
            // console.log(canvasIndex);

            //波を描画
            switch (canvasIndex) {
                case '0':
                drawWave(canvas, color[0], 1, 5, 500);
                break;
                case '1':
                drawWave(canvas, color[0], 1, 3, 0);
                break;
                case '2':
                drawWave(canvas, color[0], 1, 5, 0);
                break;
                case '3':
                drawWave(canvas, color[0], 1, 5, 0);
                break;
                case '4':
                drawWave(canvas, color[0], 1, 5, 0);
                break;
                case '5':
                drawWave(canvas, color[0], 1, 5, 0);
                break;
                case '6':
                drawWave(canvas, color[0], 1, 5, 0);
                break;
                case '7':
                console.log(color);
                drawWave(canvas, color[0], 1, 5, 0);
                break;
                case '8':
                drawWave(canvas, color[0], 1, 5, 0);
                break;
                case '9':
                drawWave(canvas, color[0], 1, 5, 0);
                break;
                case '10':
                drawWave(canvas, color[0], 1, 5, 0);
                break;
            }
        };

        /**
        * 波を描画
        * drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
        */
        function drawWave(canvas, color, alpha, zoom, delay) {
            var context = canvas.contextCache;
            context.fillStyle = color;
            context.globalAlpha = alpha;

            context.beginPath(); //パスの開始
            drawSine(canvas, info.t / 1.4, zoom, delay); //info.tで速度調整
            context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ
            context.lineTo(0, canvas.height); //パスをCanvasの左下へ
            context.closePath() //パスを閉じる
            context.fill(); //塗りつぶす
        }

        /**
        * Function to draw sine
        * 
        * The sine curve is drawn in 10px segments starting at the origin. 
        * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
        */
        function drawSine(canvas, t, zoom, delay) {
            var xAxis = Math.floor(canvas.height/2);
            var yAxis = 0;
            var context = canvas.contextCache;
            // Set the initial x and y, starting at 0,0 and translating to the origin on
            // the canvas.
            var x = t; //時間を横の位置とする
            var y = Math.sin(x)/zoom;
            context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

            // Loop to draw segments (横幅の分、波を描画)
            for (i = yAxis; i <= canvas.width + 10; i += 10) {
                x = t+(-yAxis+i)/unit/zoom;
                y = Math.sin(x - delay)/3;
                context.lineTo(i, unit*y+xAxis);
            }
        }

        init();
    }

    window.addEventListener('load', canvasWave)

})();