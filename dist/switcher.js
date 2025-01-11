export function switcher() {
    const switchButton = document.querySelector('#switcher');
    switchButton === null || switchButton === void 0 ? void 0 : switchButton.addEventListener('click', () => {
        switchSides();
    });
}
function switchSides() {
    const leftSide = document.querySelector('#changeCurrency1 a');
    const rightSide = document.querySelector('#changeCurrency2 a');
    let value;
    value = rightSide.innerText;
    rightSide.innerText = leftSide.innerText;
    leftSide.innerText = value;
}
