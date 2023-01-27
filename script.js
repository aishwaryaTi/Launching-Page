const endDate = "10 febuary 2023 10:00 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}
clock()
setInterval(
    () => {
        clock()
    },
    1000
)
var slideImg = document.getElementById("img");
var images = new Array(
    "cctv2.png",
    "cctv3.png",
    "cctv4.png",
    "cctv7.png",
    "cctv8.png"
);
var len = images.length;
var i = 0;

function slider(){
    if(i > len-1){
    i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout("slider()",3000)
}


