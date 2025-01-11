// aef946711fc0464b8717cf3f  ---> ExchangeRate-API
// 071cc690970b097e7f58865219f2f182 ---> exchangerates
// 7c94698cc33d784078f32287f60025d5 ---> fixer
// e79942db6a178419abdaa49e44696de5 ---> exchangerate.host @{correct}

function change(): void {
    const search1 = document.querySelector('#searchBar1') as HTMLInputElement
    const curr1 = document.querySelector('.curr1 a') as HTMLAnchorElement
    const curr2 = document.querySelector('.curr2 a') as HTMLAnchorElement

    search1.addEventListener('input', () => {
        
        forChange(curr1.innerText, curr2.innerText, search1.value)
        
    })
}
// nem jo az API

async function forChange(curr1: string, curr2: string, amount: string) {
    const apiPath = `https://api.exchangerate.host/convert?access_key=e79942db6a178419abdaa49e44696de5&from=${curr1}&to=${curr2}&amount=${amount}`

    try {
        const response = await fetch(apiPath)
        if (!response.ok) {
            throw new Error(`HTTP hiba: ${response.status}`)
        }

        const data = await response.json()

        output(data)
        

    } catch (error) {
        console.error(error);
    }
}

function output(data: any): void {
    const output = document.querySelector('#output') as HTMLInputElement

    output.value = data.result
    
}


export { change }