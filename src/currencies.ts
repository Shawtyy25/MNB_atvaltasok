export async function currencySymbols(){
    const apiPath: string = `https://api.currencyfreaks.com/v2.0/currency-symbols`
    try {
        const response = await fetch(apiPath)

        if (!response.ok) {
            throw new Error(`HTTP hiba a status lekérésekor: ${response.status}`);
        }

        const data = await response.json()

        insertChanges(data)

    } catch (error){
        console.error(error);
    }
}


function insertChanges(currencies: any): void {
    const select1 = document.querySelector('#changeCurrency1 ul') as HTMLUListElement
    const select2 = document.querySelector('#changeCurrency2 ul') as HTMLUListElement

    const symbols = currencies.currencySymbols
        
    for (let key in symbols) {
        select1.appendChild(makeOption(key, symbols[key]))
        select2.appendChild(makeOption(key, symbols[key]))
    }    

    selectOptions()

}

function makeOption(key: string, value: string): HTMLLIElement {
    const li = document.createElement('li') as HTMLLIElement
    li.innerText = value
    li.classList.add('dropdown-item', key)

    return li
}

function selectOptions(): void {
    const s1Li = document.querySelectorAll('#changeCurrency1 li') as NodeListOf<HTMLLIElement>
    const s2Li = document.querySelectorAll('#changeCurrency2 li') as NodeListOf<HTMLLIElement>
    const s1a = document.querySelector('#changeCurrency1 a') as HTMLAnchorElement
    const s2a = document.querySelector('#changeCurrency2 a') as HTMLAnchorElement

    s1Li.forEach(option => {
        option.addEventListener('click', () => {
            if (option.classList[1] !== 'search') {
                s1a.innerText = option.classList[1]
            }
            
        })
    });

    s2Li.forEach(option => {
        option.addEventListener('click', () => {
            if (option.classList[1] !== 'search') {
                s2a.innerText = option.classList[1]
            }
            
        })
    });


}

