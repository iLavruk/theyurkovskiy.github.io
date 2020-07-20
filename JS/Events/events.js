window.addEventListener("keydown", handler);

divShip = document.getElementById("ship");

const KEY_ARRLEFT = 37;
const KEY_ARRUP = 38;
const KEY_ARRRIGHT = 39;
const KEY_ARRDOWN = 40;
const STEP = 50;
const MAX_X = 550;
const MAX_Y = 550;


function handler(e) {
    if (e.keyCode == KEY_ARRRIGHT) {
        if (divShip.style.left !== "") {
            if (parseInt(divShip.style.left) < MAX_X) {
                divShip.style.left = parseInt(divShip.style.left) + STEP + "px";
            }
        }
        else {
            divShip.style.left = STEP + "px";
        }
    }

    if (e.keyCode == KEY_ARRLEFT) {
        if (divShip.style.left !== "") {
            if (parseInt(divShip.style.left) >= STEP) {
                divShip.style.left = parseInt(divShip.style.left) - STEP + "px";
            }
        }
        else {
            divShip.style.left = STEP + "px";
        }
    }

    if (e.keyCode == KEY_ARRUP) {
        if (divShip.style.top !== "") {
            if (parseInt(divShip.style.top) >= STEP) {
                divShip.style.top = parseInt(divShip.style.top) - STEP + "px";
            }
        }
        else {
            divShip.style.top = STEP + "px";
        }
    }

    if (e.keyCode == KEY_ARRDOWN) {
        if (divShip.style.top !== "") {
            if (parseInt(divShip.style.top) < MAX_Y) {
                divShip.style.top = parseInt(divShip.style.top) + STEP + "px";
            }
        }
        else {
            divShip.style.top = STEP + "px";
        }
    }

}