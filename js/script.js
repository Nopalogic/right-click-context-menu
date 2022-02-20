const contextMenu = document.querySelector(".wrapper");
shareMenu = contextMenu.querySelector(".share-menu");

document.addEventListener('contextmenu', e => {
    // console.log("oke")
    e.preventDefault(); //biar klik kanannya ga muncul

    let x = e.offsetX, y = e.offsetY;
    winWidth = window.innerWidth, cmWidth = contextMenu.offsetWidth;
    winHeight = window.innerHeight, cmHeight = contextMenu.offsetHeight;

    if(x > (winWidth - cmWidth - shareMenu.offsetWidth)){
        shareMenu.style.left = "-200px";
    } else {
        shareMenu.style.right = "-200px";
    }

    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';

    contextMenu.style.visibility = "visible";
});

document.addEventListener("click", () => contextMenu.style.visibility = "hidden");