export function switcher() {
    const switchButton = document.querySelector('#switcher') as HTMLIFrameElement

    switchButton?.addEventListener('click', () => {
        switchSides()
    })
}

function switchSides() {
    const leftSide = document.querySelector('#changeCurrency1 a') as HTMLAnchorElement
    const rightSide = document.querySelector('#changeCurrency2 a') as HTMLAnchorElement

    let value: string

    value = rightSide.innerText
    rightSide.innerText = leftSide.innerText
    leftSide.innerText = value
}