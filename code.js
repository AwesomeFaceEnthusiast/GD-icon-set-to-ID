var cube = 1;
var cubeRangeID = document.getElementById("cubeRange");
var cubeTextID = document.getElementById("cubeText");
var cubeImageID = document.getElementById("cubeImage");
var ship = 1;
var shipRangeID = document.getElementById("shipRange");
var shipTextID = document.getElementById("shipText");
var shipImageID = document.getElementById("shipImage");
var ball = 1;
var ballRangeID = document.getElementById("ballRange");
var ballTextID = document.getElementById("ballText");
var ballImageID = document.getElementById("ballImage");
var ufo = 1;
var ufoRangeID = document.getElementById("ufoRange");
var ufoTextID = document.getElementById("ufoText");
var ufoImageID = document.getElementById("ufoImage");
var wave = 1;
var waveRangeID = document.getElementById("waveRange");
var waveTextID = document.getElementById("waveText");
var waveImageID = document.getElementById("waveImage");
var robot = 1;
var robotRangeID = document.getElementById("robotRange");
var robotTextID = document.getElementById("robotText");
var robotImageID = document.getElementById("robotImage");
var spider = 1;
var spiderRangeID = document.getElementById("spiderRange");
var spiderTextID = document.getElementById("spiderText");
var spiderImageID = document.getElementById("spiderImage");
var swing = 1;
var swingRangeID = document.getElementById("swingRange");
var swingTextID = document.getElementById("swingText");
var swingImageID = document.getElementById("swingImage");
var jetpack = 1;
var jetpackRangeID = document.getElementById("jetpackRange");
var jetpackTextID = document.getElementById("jetpackText");
var jetpackImageID = document.getElementById("jetpackImage");
var trail = 1;
var trailRangeID = document.getElementById("trailRange");
var trailTextID = document.getElementById("trailText");
var trailImageID = document.getElementById("trailImage");
var shipFire = 1;
var shipFireRangeID = document.getElementById("shipFireRange");
var shipFireTextID = document.getElementById("shipFireText");
var shipFireImageID = document.getElementById("shipFireImage");
var animationOne = false;
var animationTwo = false;
var animationThree = false;
var deathEffect = 1;
var deathEffectRangeID = document.getElementById("deathEffectRange");
var deathEffectTextID = document.getElementById("deathEffectText");
var deathEffectImageID = document.getElementById("deathEffectImage");
var explode = false;
var primaryColor = 0;
var primaryColorRangeID = document.getElementById("primaryColorRange");
var primaryColorTextID = document.getElementById("primaryColorText");
var primaryColorPreviewID = document.getElementById("primaryColorPreview");
var secondaryColor = 0;
var secondaryColorRangeID = document.getElementById("secondaryColorRange");
var secondaryColorTextID = document.getElementById("secondaryColorText");
var secondaryColorPreviewID = document.getElementById("secondaryColorPreview");
var glow = 107;
var glowRangeID = document.getElementById("glowRange");
var glowTextID = document.getElementById("glowText");
var glowPreviewID = document.getElementById("glowPreview");
var miniDefaultIcons = false;
var switchSpider = false;
var switchDash = false;
var switchWave = false;
var id;
var iconSetID = document.getElementById("iconSet");
var colors = ["#7dff00","#00ff00","#00ff7d","#00ffff","#007dff","#0000ff","#7d00ff","#ff00ff","#ff007d","#ff0000","#ff7d00","#ffff00","#ffffff","#b900ff","#ffb900","#000000","#00c8ff","#afafaf","#5a5a5a","#ff7d7d","#00af4b","#007d7d","#004baf","#4b00af","#7d007d","#af004b","#af4b00","#7d7d00","#4baf00","#ff4b00","#963200","#966400","#649600","#009664","#006496","#640096","#960064","#960000","#009600","#000096","#7dffaf","#7d7dff","#fffa7f","#fa7fff","#00ffc0","#50320e","#cda576","#b680ff","#ff3a3a","#4d4d8f","#000a4c","#fdd4ce","#beb5ff","#700000","#520200","#380106","#804f4f","#7a3535","#512424","#a36246","#754936","#563528","#ffb972","#ffa040","#66311e","#5b2700","#472000","#a77b4d","#6d5339","#513e2a","#ffffc0","#fde0a0","#c0ffa0","#b1ff6d","#c0ffe0","#94ffe4","#43a18a","#316d5f","#265449","#006000","#004000","#006060","#004040","#a0ffff","#010770","#00496d","#00324c","#002638","#5080ad","#335375","#233c56","#e0e0e0","#3d068c","#370860","#404040","#6f49a4","#54367f","#422a63","#fcb5ff","#af57af","#824382","#5e315e","#808080","#66033e","#470134","#d2ff32","#76bdff","transparent"];

function update(prompt) {
    // I know there is definitely a quicker way to do this but it's one in the morning, give me a break :(
    if (prompt !== 'cube') {
        cube = cubeRangeID.value-1;
    } else {
        cubeRangeID.value = cube+1;
    }
    if (prompt !== 'ship') {
        ship = shipRangeID.value-1;
    } else {
        shipRangeID.value = ship+1;
    }
    if (prompt !== 'ball') {
        ball = ballRangeID.value-1;
    } else {
        ballRangeID.value = ball+1;
    }
    if (prompt !== 'ufo') {
        ufo = ufoRangeID.value-1;
    } else {
        ufoRangeID.value = ufo+1;
    }
    if (prompt !== 'wave') {
        wave = waveRangeID.value-1;
    } else {
        waveRangeID.value = wave+1;
    }
    if (prompt !== 'robot') {
        robot = robotRangeID.value-1;
    } else {
        robotRangeID.value = robot+1;
    } if (prompt !== 'spider') {
        spider = spiderRangeID.value-1;
    } else {
        spiderRangeID.value = spider+1;
    }
    if (prompt !== 'swing') {
        swing = swingRangeID.value-1;
    } else {
        swingRangeID.value = swing+1;
    }
    if (prompt !== 'primaryColor') {
        primaryColor = primaryColorRangeID.value;
    } else {
        primaryColorRangeID.value = primaryColor;
    }
    if (prompt !== 'secondaryColor') {
        secondaryColor = secondaryColorRangeID.value;
    } else {
        secondaryColorRangeID.value = secondaryColor;
    }
    if (prompt !== 'glow') {
        glow = glowRangeID.value;
    } else {
        glowRangeID.value = glow;
    }
    cubeTextID.innerHTML = cube+1;
    cubeImageID.src = "https://gdbrowser.com/iconkit/premade/cube_"+(cube+1)+".png";
    shipTextID.innerHTML = ship+1;
    shipImageID.src = "https://gdbrowser.com/iconkit/premade/ship_"+(ship+1)+".png";
    ballTextID.innerHTML = ball+1;
    ballImageID.src = "https://gdbrowser.com/iconkit/premade/ball_"+(ball+1)+".png";
    ufoTextID.innerHTML = ufo+1;
    ufoImageID.src = "https://gdbrowser.com/iconkit/premade/ufo_"+(ufo+1)+".png";
    waveTextID.innerHTML = wave+1;
    waveImageID.src = "https://gdbrowser.com/iconkit/premade/wave_"+(wave+1)+".png";
    robotTextID.innerHTML = robot+1;
    robotImageID.src = "https://gdbrowser.com/iconkit/premade/robot_"+(robot+1)+".png";
    spiderTextID.innerHTML = spider+1;
    spiderImageID.src = "https://gdbrowser.com/iconkit/premade/spider_"+(spider+1)+".png";
    swingTextID.innerHTML = swing+1;
    swingImageID.src = "https://gdbrowser.com/iconkit/premade/swing_"+(swing+1)+".png";
    jetpack = jetpackRangeID.value-1;
    jetpackTextID.innerHTML = jetpack+1;
    jetpackImageID.src = "https://gdbrowser.com/iconkit/premade/jetpack_"+(jetpack+1)+".png";
    trail = trailRangeID.value-1;
    trailTextID.innerHTML = trail+1;
    trailImageID.src = "https://gdbrowser.com/iconkit/items/trail_"+(trail+1)+".png";
    shipFire = shipFireRangeID.value-1;
    shipFireTextID.innerHTML = shipFire+1;
    shipFireImageID.src = "https://gdbrowser.com/iconkit/items/shipFire_"+(shipFire+1)+".png";
    deathEffect = deathEffectRangeID.value-1;
    deathEffectTextID.innerHTML = deathEffect+1;
    deathEffectImageID.src = "https://gdbrowser.com/iconkit/items/deathEffect_"+(deathEffect+1)+".png";
    primaryColorTextID.innerHTML = primaryColor;
    primaryColorPreviewID.style.backgroundColor = colors[primaryColor];
    secondaryColorTextID.innerHTML = secondaryColor;
    secondaryColorPreviewID.style.backgroundColor = colors[secondaryColor];
    glowTextID.innerHTML = glow;
    glowPreviewID.style.backgroundColor = colors[glow];
    if (glow == 107) {
        glowPreviewID.innerHTML = "Off";
    } else {
        glowPreviewID.innerHTML = "";
    }
    changeID();
}
function changeID() {
    id = BigInt(cube)*122420238600941950489067520n+BigInt(ship)*724380110064745269166080n+BigInt(ball)*6138814492074112450560n+BigInt(ufo)*41200097262242365440n+BigInt(wave)*429167679815024640n+BigInt(robot)*6311289409044480n+BigInt(spider)*91467962449920n+BigInt(swing)*2127161917440n+BigInt(jetpack)*265895239680n+BigInt(trail)*37985034240n+BigInt(shipFire)*6330839040n+BigInt(animationOne)*3165419520n+BigInt(animationTwo)*1582709760n+BigInt(animationThree)*791354880n+BigInt(deathEffect)*39567744n+BigInt(explode)*19783872n+BigInt(primaryColor)*184896n+BigInt(secondaryColor)*1728n+BigInt(glow)*16n+BigInt(miniDefaultIcons)*8n+BigInt(switchSpider)*4n+BigInt(switchDash)*2n+BigInt(switchWave);
    iconSetID.innerHTML = "Your icon set ID: "+id;
}
function popUp(max,icon) {
    let answer = prompt("Type your "+icon+" ID");
    if (!isFinite(answer) || answer > max || answer <= 0) {
        alert("Please enter a positive integer less than or equal to "+max);
    } else {
        if (icon === "cube") {
            cube = answer-1;
        } else if (icon === "ship") {
            ship = answer-1;
        } else if (icon === "ball") {
            ball = answer-1;
        } else if (icon === "ufo") {
            ufo = answer-1;
        } else if (icon === "wave") {
            wave = answer-1;
        } else if (icon === "robot") {
            robot = answer-1;
        } else if (icon === "spider") {
            spider = answer-1;
        } else if (icon === "swing") {
            swing = answer-1;
        } else if (icon === "primaryColor") {
            primaryColor = answer;
        } else if (icon === "secondaryColor") {
            secondaryColor = answer;
        } else if (icon === "glow") {
            glow = answer;
        }
        update(icon);
    }
}
function toggle(number) {
    // Update: now it's two in the morning T_T I just wanna get this done bruh
    if (number === 1) {
        animationOne = document.getElementById("checkbox1").checked;
        document.getElementById("animOneImage").style.filter = "brightness("+(75+animationOne*25)+"%)";
    } else if (number === 2) {
        animationTwo = document.getElementById("checkbox2").checked;
        document.getElementById("animTwoImage").style.filter = "brightness("+(75+animationTwo*25)+"%)";
    } else if (number === 3) {
        animationThree = document.getElementById("checkbox3").checked;
        document.getElementById("animThreeImage").style.filter = "brightness("+(75+animationThree*25)+"%)";
    } else if (number === 4) {
        explode = document.getElementById("checkbox4").checked;
        if (explode === false) {
            document.getElementById("explodeImage").src = "https://gdbrowser.com/assets/check-off.png";
        } else {
            document.getElementById("explodeImage").src = "https://gdbrowser.com/assets/check-on.png";
        }
    } else if (number === 5) {
        miniDefaultIcons = document.getElementById("checkbox5").checked;
        if (miniDefaultIcons === false) {
            document.getElementById("miniImage").src = "https://gdbrowser.com/assets/check-off.png";
        } else {
            document.getElementById("miniImage").src = "https://gdbrowser.com/assets/check-on.png";
        }
    } else if (number === 6) {
        switchSpider = document.getElementById("checkbox6").checked;
        if (switchSpider === false) {
            document.getElementById("spiderColorImage").src = "https://gdbrowser.com/assets/check-off.png";
        } else {
            document.getElementById("spiderColorImage").src = "https://gdbrowser.com/assets/check-on.png";
        }
    } else if (number === 7) {
        switchDash = document.getElementById("checkbox7").checked;
        if (switchDash === false) {
            document.getElementById("dashColorImage").src = "https://gdbrowser.com/assets/check-off.png";
        } else {
            document.getElementById("dashColorImage").src = "https://gdbrowser.com/assets/check-on.png";
        }
    } else if (number === 8) {
        switchWave = document.getElementById("checkbox8").checked;
        if (switchWave === false) {
            document.getElementById("waveColorImage").src = "https://gdbrowser.com/assets/check-off.png";
        } else {
            document.getElementById("waveColorImage").src = "https://gdbrowser.com/assets/check-on.png";
        } 
    }
    update();
}

// Now it's 3:00 AM, I will stop at nothing to finish this...
// It's finally finished... 3:28 AM EST..
