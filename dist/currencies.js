var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function currencySymbols() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiPath = `https://api.exchangerate.host/list?access_key=e79942db6a178419abdaa49e44696de5`;
        try {
            const response = yield fetch(apiPath);
            if (!response.ok) {
                throw new Error(`HTTP hiba a status lekérésekor: ${response.status}`);
            }
            const data = yield response.json();
            insertChanges(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function insertChanges(currencies) {
    const select1 = document.querySelector('#changeCurrency1 ul');
    const select2 = document.querySelector('#changeCurrency2 ul');
    const symbols = currencies.currencies;
    for (let key in symbols) {
        select1.appendChild(makeOption(key, symbols[key]));
        select2.appendChild(makeOption(key, symbols[key]));
    }
    selectOptions();
}
function makeOption(key, value) {
    const li = document.createElement('li');
    li.innerText = value;
    li.classList.add('dropdown-item', key);
    return li;
}
function selectOptions() {
    const s1Li = document.querySelectorAll('#changeCurrency1 li');
    const s2Li = document.querySelectorAll('#changeCurrency2 li');
    const s1a = document.querySelector('#changeCurrency1 a');
    const s2a = document.querySelector('#changeCurrency2 a');
    s1Li.forEach(option => {
        option.addEventListener('click', () => {
            if (option.classList[1] !== 'search') {
                s1a.innerText = option.classList[1];
            }
        });
    });
    s2Li.forEach(option => {
        option.addEventListener('click', () => {
            if (option.classList[1] !== 'search') {
                s2a.innerText = option.classList[1];
            }
        });
    });
}
