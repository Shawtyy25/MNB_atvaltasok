// aef946711fc0464b8717cf3f  ---> ExchangeRate-API
// 071cc690970b097e7f58865219f2f182 ---> exchangerates
// 7c94698cc33d784078f32287f60025d5 ---> fixer
// e79942db6a178419abdaa49e44696de5 ---> exchangerate.host @{correct}
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function change() {
    const search1 = document.querySelector('#searchBar1');
    const curr1 = document.querySelector('.curr1 a');
    const curr2 = document.querySelector('.curr2 a');
    search1.addEventListener('input', () => {
        forChange(curr1.innerText, curr2.innerText, search1.value);
    });
}
// nem jo az API
function forChange(curr1, curr2, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiPath = `https://api.exchangerate.host/convert?access_key=e79942db6a178419abdaa49e44696de5&from=${curr1}&to=${curr2}&amount=${amount}`;
        try {
            const response = yield fetch(apiPath);
            if (!response.ok) {
                throw new Error(`HTTP hiba: ${response.status}`);
            }
            const data = yield response.json();
            output(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function output(data) {
    const output = document.querySelector('#output');
    output.value = data.result;
}
export { change };
