window.onload = function() {


    var indexPage = getId("index-page");
    var pausePage = getId("pause-page");
    var header = getTagName("header")[0];
    var starBtn = getClassName("star-btn")[0];
    var gameTime = getClassName("game-time")[0];
    var pauseBtn  = getClassName("pause-btn")[0];
    var continueBtn = getClassName("continue-btn")[0];
    var overTime = getId("overtime");
    var gameNum = getClassName("game-num")[0];
    var gameLevel = getClassName("game-level-num")[0];
    var level = getClassName("level")[0]
    var playAgain = getClassName("play-again")[0];
    var colorBox = getId("color-box");
    var levelNum = 0;
    var times = 1;
    var num = 2;
    var timer = null;
    var comments = [
        "基本上是瞎子！",
        "相当于鼴鼠的视力！",
        "低于大部分人的水平",
        "接近正常人的水平",
        "达到了正常人的水平",
        "超过大部分人的水平",
        "优秀级水平",
        "可以去“最强大脑”了",
        "对色差具有超凡的能力！作弊？？"
    ]

    //设置高度
    function setHeight(obj) {
        var windowHeight = document.documentElement.clientHeight;//窗口高度
        obj.style.height = windowHeight + "px";//高度等于窗口高度。
    }
    setHeight(indexPage);
    setHeight(pausePage);
    setHeight(overTime);

    //页面高度随高口大小变化
    window.onresize = function() {
        setHeight(indexPage);
        setHeight(pausePage);
        setHeight(overTime);
    };

    //点击开始按钮开始,开始计时
    starBtn.onclick = function() {
        timeingStars();
        indexPage.style.display = "none";
        creatColorBlock();
        setColor();
    };

    //暂停
    pauseBtn.onclick = function() {
        pausePage.style.display = "block";
        clearInterval(timer);
    };

    //继续
    continueBtn.onclick = function() {
        pausePage.style.display = "none";
        timeingStars();
    };
    //再来一次
    playAgain.onclick = function() {
        timeingStars();
        num = 1;
        levelNum = 0;
        clickSpecial();
        overTime.style.display = "none";
        gameTime.innerHTML = 60;
    };

    //计时
    function timeingStars() {
        gameTime.style.background = "#FD9090";
        gameTime.style.color = "#FFCACA";
        timer = setInterval(function() {
            if(gameTime.innerHTML > 10 && gameTime.innerHTML <= 60) {
                gameTime.innerHTML -= 1;
            } else if (gameTime.innerHTML > 0 && gameTime.innerHTML <= 10) {
                gameTime.style.background = "#fff";
                gameTime.style.color = "#FF0505";
                gameTime.innerHTML -= 1;
            } else if (gameTime.innerHTML <= 0) {
                gameTime.innerHTML = 0;
                JudgmentLevel();
                overTime.style.display = "block";
                clearInterval(timer);
            }
        },1000);
    }

    //创建颜色块
    function creatColorBlock() {
        colorBox.className = "row"+num;
        for(var i = 1; i <= num*num; i++) {
            colorBox.innerHTML += "<span></span>";
        }
    }

    //设置随机颜色
    function setColor() {
        var temp = colorBox.getElementsByTagName("span");
        var a = 15*(9-num) ==0?15:15*(9-num);
        var randomColorR =  ~~(Math.random()*(255-a));
        var randomColorG =  ~~(Math.random()*(255-a));
        var randomColorb =  ~~(Math.random()*(255-a));
        var randomBlock = temp[~~(Math.random()*temp.length)];
        var sameColor = "rgb(" + randomColorR+","+randomColorG+","+randomColorb+")";
        var specialColor = "rgb(" + (randomColorR+a) +","+ (randomColorG+a) +","+ (randomColorb+a) +")";
        for(var i = 0; i < temp.length; i++) {
            temp[i].style.background = sameColor;
        }
        randomBlock.style.background = specialColor;
        randomBlock.className = "temp";
        getClassName("temp")[0].onclick = function() {
            clickSpecial();
        };

    }

    //点击不同颜色的函数
    function clickSpecial() {
        if (num == 4) {
            times == 2 ? (num++,times = 0) :(num = 4,times++);
            console.log(times);
        } else if (num == 5) {
            times == 3 ? (num++,times = 0) :(num = 5,times++);
        } else if (num == 6) {
            times == 3 ? (num++,times = 0) :(num = 6,times++);
        } else if (num == 7) {
            times == 4 ? (num++,times = 0) :(num = 7,times++);
        } else if (num == 8){
            times == 5 ? (num++,times = 0) :(num = 8,times++);
        } else if (num == 9) {
            num = 9;
        } else {
            num++;
        }
        gameLevel.innerHTML = levelNum++;
        colorBox.innerHTML = "";
        creatColorBlock();
        setColor();
    }



    //判定辨别等级
    function JudgmentLevel() {
        console.log(1);
        gameNum.innerHTML = gameLevel.innerHTML;
        if(gameLevel.innerHTML >=0 && gameLevel.innerHTML <= 15) {
            level.innerHTML = comments[0];
        } else if(gameLevel.innerHTML >= 16 && gameLevel.innerHTML <= 20) {
            level.innerHTML = comments[1];
        } else if(gameLevel.innerHTML >= 21 && gameLevel.innerHTML <= 25) {
            level.innerHTML = comments[2];
        } else if(gameLevel.innerHTML >= 26 && gameLevel.innerHTML <= 30) {
            level.innerHTML = comments[3];
        } else if(gameLevel.innerHTML >= 31 && gameLevel.innerHTML <= 35) {
            level.innerHTML = comments[4];
        } else if(gameLevel.innerHTML >= 36 && gameLevel.innerHTML <= 40) {
            level.innerHTML = comments[5];
        } else if(gameLevel.innerHTML >= 41 && gameLevel.innerHTML <= 45) {
            level.innerHTML = comments[6];
        } else if(gameLevel.innerHTML >= 46 && gameLevel.innerHTML <= 50) {
            level.innerHTML = comments[7];
        }  else {
            level.innerHTML = comments[8];
        }
    }


    //设置color-box宽高
    function setSize() {
        var windowWidth = document.documentElement.clientWidth;
        colorBox.style.width = windowWidth<550? windowWidth*0.95 + "px" : "500px";
        colorBox.style.height = windowWidth<550? windowWidth*0.95 + "px" : "500px";
    }
    setSize();
    window.onresize = function() {
        setSize();
    }


    //通过id获取
    function getId(id) {
        return document.getElementById(id);
    }

    //通过className获取
    function getClassName(className) {
        return document.getElementsByClassName(className);
    }

    function getTagName(tagName) {
        return document.getElementsByTagName(tagName);
    }

};
