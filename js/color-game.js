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
        indexPage.style.display = "none";
        timeingStars();
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
        overTime.style.display = "none";
        gameTime.innerHTML = 60;
        gameLevel.innerHTML = 0;
    };

    //计时
    function timeingStars() {
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

    //判定辨别等级
    function JudgmentLevel() {
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
