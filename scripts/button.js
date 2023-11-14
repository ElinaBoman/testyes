
/**
 * @jest-environment jsdom
 */

function buttonClick() {
    document.getElementById("par").innerHTML = "You Clicked";
}

module.exports = buttonClick;