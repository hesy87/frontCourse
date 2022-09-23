// function bannertimer () {
//     banner2on()
// }
// onclick="setTimeout(bannertimer , 30000);"


function banner1on() {
    document.querySelector('#banner1').style.display = "block";
    document.querySelector('#banner2').style.display = "none";
    document.querySelector('#banner3').style.display = "none";
}

function banner2on() {
    document.querySelector('#banner1').style.display = "none";
    document.querySelector('#banner2').style.display = "block";
    document.querySelector('#banner3').style.display = "none";
}

function banner3on() {
    document.querySelector('#banner1').style.display = "none";
    document.querySelector('#banner2').style.display = "none";
    document.querySelector('#banner3').style.display = "block";
}