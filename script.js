const cubeImage = document.getElementById("cubeImage");
const shipImage = document.getElementById("shipImage");
const ballImage = document.getElementById("ballImage");
const ufoImage = document.getElementById("ufoImage");
const waveImage = document.getElementById("waveImage");
const robotImage = document.getElementById("robotImage");
const spiderImage = document.getElementById("spiderImage");
const swingImage = document.getElementById("swingImage");
const jetpackImage = document.getElementById("jetpackImage");
const trailImage = document.getElementById("trailImage");
const deathEffectImage = document.getElementById("deathEffectImage");
const shipFireImage = document.getElementById("shipFireImage");
const pColorImage = document.getElementById("pColorImage");
const sColorImage = document.getElementById("sColorImage");
const gColorImage = document.getElementById("gColorImage");

const anim1Check = document.getElementById("anim1Check");
const anim2Check = document.getElementById("anim2Check");
const anim3Check = document.getElementById("anim3Check");
const explodeCheck = document.getElementById("explodeCheck");
const miniCheck = document.getElementById("miniCheck");
const sptrailCheck = document.getElementById("sptrailCheck");
const dsfireCheck = document.getElementById("dsfireCheck");
const wvtrailCheck = document.getElementById("wvtrailCheck");

const colors = ["#7dff00","#00ff00","#00ff7d","#00ffff","#007dff","#0000ff","#7d00ff","#ff00ff","#ff007d","#ff0000","#ff7d00","#ffff00","#ffffff","#b900ff","#ffb900","#000000","#00c8ff","#afafaf","#5a5a5a","#ff7d7d","#00af4b","#007d7d","#004baf","#4b00af","#7d007d","#af004b","#af4b00","#7d7d00","#4baf00","#ff4b00","#963200","#966400","#649600","#009664","#006496","#640096","#960064","#960000","#009600","#000096","#7dffaf","#7d7dff","#fffa7f","#fa7fff","#00ffc0","#50320e","#cda576","#b680ff","#ff3a3a","#4d4d8f","#000a4c","#fdd4ce","#beb5ff","#700000","#520200","#380106","#804f4f","#7a3535","#512424","#a36246","#754936","#563528","#ffb972","#ffa040","#66311e","#5b2700","#472000","#a77b4d","#6d5339","#513e2a","#ffffc0","#fde0a0","#c0ffa0","#b1ff6d","#c0ffe0","#94ffe4","#43a18a","#316d5f","#265449","#006000","#004000","#006060","#004040","#a0ffff","#010770","#00496d","#00324c","#002638","#5080ad","#335375","#233c56","#e0e0e0","#3d068c","#370860","#404040","#6f49a4","#54367f","#422a63","#fcb5ff","#af57af","#824382","#5e315e","#808080","#66033e","#470134","#d2ff32","#76bdff","transparent"];

const iconList = ["cube", "ship", "ball", "UFO", "wave", "robot", "spider", "swing", "jetpack"];
const itemList = ["trail", "deathEffect", "shipFire"];
const colorList = ["primary color", "secondary color", "glow"];
const groupList = ["icon", "icon", "icon", "icon", "icon", "icon", "icon", "icon", "icon", "effect", "effect", "effect", "color", "color", "color"];
const imageList = [cubeImage, shipImage, ballImage, ufoImage, waveImage, robotImage, spiderImage, swingImage, jetpackImage, trailImage, deathEffectImage, shipFireImage, pColorImage, sColorImage, gColorImage];
const idList = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 107];

let id;
const decimalID = document.getElementById("decimalID");
const base36ID = document.getElementById("base36ID");

update();

function update() {
    for (let i = 0; i < imageList.length; i++) {
        if (groupList[i] === "icon") {
            imageList[i].src = `https://gdbrowser.com/iconkit/premade/${iconList[i].toLowerCase()}_${idList[i]}.png`;
            imageList[i].title = `${iconList[i]} ${idList[i]}`;
        } else if (groupList[i] === "effect") {
            imageList[i].src = `https://gdbrowser.com/iconkit/items/${itemList[i-9]}_${idList[i]}.png`;
            imageList[i].title = `${itemList[i-9]} ${idList[i]}`;
        } else if (groupList[i] === "color") {
            imageList[i].style.backgroundColor = colors[idList[i]];
            imageList[i].title = `${colorList[i-12]} ${idList[i]}`;
        }
    }

    if (anim1Check.checked) {
        anim1Image.style.filter = "brightness(100%)";
    } else {
        anim1Image.style.filter = "brightness(75%)";
    }

    if (anim2Check.checked) {
        anim2Image.style.filter = "brightness(100%)";
    } else {
        anim2Image.style.filter = "brightness(75%)";
    }

    if (anim3Check.checked) {
        anim3Image.style.filter = "brightness(100%)";
    } else {
        anim3Image.style.filter = "brightness(75%)";
    }
   
    if (explodeCheck.checked) {
        explodeImage.src = "https://gdbrowser.com/assets/check-on.png";
    } else {
        explodeImage.src = "https://gdbrowser.com/assets/check-off.png";
    }

    if (miniCheck.checked) {
        miniImage.src = "https://gdbrowser.com/assets/check-on.png";
    } else {
        miniImage.src = "https://gdbrowser.com/assets/check-off.png";
    }

    if (sptrailCheck.checked) {
        sptrailImage.src = "https://gdbrowser.com/assets/check-on.png";
    } else {
        sptrailImage.src = "https://gdbrowser.com/assets/check-off.png";
    }

    if (dsfireCheck.checked) {
        dsfireImage.src = "https://gdbrowser.com/assets/check-on.png";
    } else {
        dsfireImage.src = "https://gdbrowser.com/assets/check-off.png";
    }

    if (wvtrailCheck.checked) {
        wvtrailImage.src = "https://gdbrowser.com/assets/check-on.png";
    } else {
        wvtrailImage.src = "https://gdbrowser.com/assets/check-off.png";
    }

    getID();
}

function getID() {
    let cubeID = BigInt(idList[0]-1)*(122420238600941950489067520n);
    let shipID = BigInt(idList[1]-1)*(724380110064745269166080n);
    let ballID = BigInt(idList[2]-1)*(6138814492074112450560n);
    let ufoID = BigInt(idList[3]-1)*(41200097262242365440n);
    let waveID = BigInt(idList[4]-1)*(429167679815024640n);
    let robotID = BigInt(idList[5]-1)*(6311289409044480n);
    let spiderID = BigInt(idList[6]-1)*(91467962449920n);
    let swingID = BigInt(idList[7]-1)*(2127161917440n);
    let jetpackID = BigInt(idList[8]-1)*(265895239680n);
    let trailID = BigInt(idList[9]-1)*(37985034240n);
    let deathEffectID = BigInt(idList[10]-1)*(39567744n);
    let shipFireID = BigInt(idList[11]-1)*(6330839040n);
    let anim1ID = BigInt(anim1Check.checked)*(3165419520n);
    let anim2ID = BigInt(anim2Check.checked)*(1582709760n);
    let anim3ID = BigInt(anim3Check.checked)*(791354880n);
    let explodeID = BigInt(explodeCheck.checked)*(19783872n);
    let pColorID = BigInt(idList[12])*(184896n);
    let sColorID = BigInt(idList[13])*(1728n);
    let gColorID = BigInt(idList[14])*(16n);
    let miniID = BigInt(miniCheck.checked)*(8n);
    let sptrailID = BigInt(sptrailCheck.checked)*(4n);
    let dsfireID = BigInt(dsfireCheck.checked)*(2n);
    let wvtrailID = BigInt(wvtrailCheck.checked);

    id = cubeID+shipID+ballID+ufoID+waveID+robotID+spiderID+swingID+jetpackID+trailID+deathEffectID+shipFireID+anim1ID+anim2ID+anim3ID+explodeID+pColorID+sColorID+gColorID+miniID+sptrailID+dsfireID+wvtrailID;
    decimalID.innerHTML = `Decimal: ${id}`;
    base36ID.innerHTML = `Base36: ${id.toString(36)}`;
}

function popup(icon, min, max, group) {
    let answer = Number(prompt(`Enter your ${icon} ID (${min} to ${max})`));
    
    if (min <= answer && answer <= max && Math.round(answer) === answer) {
        if (group === "icon") {
            idList[iconList.indexOf(icon)] = answer;
        } else if (group === "effect") {
            idList[itemList.indexOf(icon)+9] = answer;
        } else if (group === "color") {
            idList[colorList.indexOf(icon)+12] = answer;
        }
    } else {
        alert(`Please enter an integer from ${min} to ${max}`);
        if (group === "icon") {
            idList[iconList.indexOf(icon)] = 1;
        } else if (group === "effect") {
            idList[itemList.indexOf(icon)+9] = 1;
        } else if (group === "color") {
            idList[colorList.indexOf(icon)+12] = 0;
        }
    }

    update();
}

function importID() {
    let loadID = prompt('Enter a decimal ID');

    if (isNaN(loadID) || loadID === null || Math.round(Number(loadID)) !== Number(loadID) || BigInt(loadID) < 0 || BigInt(loadID) > 59373815721456845987197747199) {
        alert('Error: Invalid ID');
    } else {
        loadID = BigInt(loadID);

        idList[0] = Number(loadID/122420238600941950489067520n+1n);
        loadID -= (BigInt(idList[0])-1n)*122420238600941950489067520n;

        idList[1] = Number(loadID/724380110064745269166080n+1n);
        loadID -= (BigInt(idList[1])-1n)*724380110064745269166080n;

        idList[2] = Number(loadID/6138814492074112450560n+1n);
        loadID -= (BigInt(idList[2])-1n)*6138814492074112450560n;

        idList[3] = Number(loadID/41200097262242365440n+1n);
        loadID -= (BigInt(idList[3])-1n)*41200097262242365440n;

        idList[4] = Number(loadID/429167679815024640n+1n);
        loadID -= (BigInt(idList[4])-1n)*429167679815024640n;

        idList[5] = Number(loadID/6311289409044480n+1n);
        loadID -= (BigInt(idList[5])-1n)*6311289409044480n;

        idList[6] = Number(loadID/91467962449920n+1n);
        loadID -= (BigInt(idList[6])-1n)*91467962449920n;

        idList[7] = Number(loadID/2127161917440n+1n);
        loadID -= (BigInt(idList[7])-1n)*2127161917440n;

        idList[8] = Number(loadID/265895239680n+1n);
        loadID -= (BigInt(idList[8])-1n)*265895239680n;

        idList[9] = Number(loadID/37985034240n+1n);
        loadID -= (BigInt(idList[9])-1n)*37985034240n;

        idList[11] = Number(loadID/6330839040n+1n);
        loadID -= (BigInt(idList[11])-1n)*6330839040n;

        anim1Check.checked = Number(loadID/3165419520n);
        loadID -= BigInt(anim1Check.checked)*3165419520n;

        anim2Check.checked = Number(loadID/1582709760n);
        loadID -= BigInt(anim2Check.checked)*1582709760n;

        anim3Check.checked = Number(loadID/791354880n);
        loadID -= BigInt(anim3Check.checked)*791354880n;

        idList[10] = Number(loadID/39567744n+1n);
        loadID -= (BigInt(idList[10])-1n)*39567744n;

        explodeCheck.checked = Number(loadID/19783872n);
        loadID -= BigInt(explodeCheck.checked)*19783872n;

        idList[12] = Number(loadID/184896n);
        loadID -= BigInt(idList[12])*184896n;

        idList[13] = Number(loadID/1728n);
        loadID -= BigInt(idList[13])*1728n;

        idList[14] = Number(loadID/16n);
        loadID -= BigInt(idList[14])*16n;

        miniCheck.checked = Number(loadID/8n);
        loadID -= BigInt(miniCheck.checked)*8n;

        sptrailCheck.checked = Number(loadID/4n);
        loadID -= BigInt(sptrailCheck.checked)*4n;

        dsfireCheck.checked = Number(loadID/2n);
        loadID -= BigInt(dsfireCheck.checked)*2n;

        wvtrailCheck.checked = Number(loadID);

        update();
    }
}