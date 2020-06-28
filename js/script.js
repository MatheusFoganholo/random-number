// Selecting The Button and Adding Event to Generate a Random Number
const button = document.getElementById('button');
button.addEventListener('click', generateRandomNumber);

// Function
function generateRandomNumber() {
    const minNumber = document.getElementById('minNumber');
    const maxNumber = document.getElementById('maxNumber');
    const numberGenerated = document.getElementById('numberGenerated');
    const invalidNumber = document.getElementById('invalidNumber')

    // Picking The Number Inputed By User and Converting The String Value To Number
    let minNumberValue = +minNumber.value;
    let maxNumberValue = +maxNumber.value;

    if(minNumber.value === '') {
        alert('Digite um número mínimo!');
    } else if(maxNumber.value === '') {
        alert('Digite um número máximo!');
    } else if (minNumberValue <= maxNumberValue) {
        let randonNumber = Math.floor(Math.random() * (maxNumberValue - minNumberValue + 1)) + minNumberValue;
        numberGenerated.innerHTML = `Número Gerado:<br/><span id="number">${randonNumber}</span>`;
        invalidNumber.innerText = ``;
    } else {
        maxNumber.value = minNumberValue + 1;
        generateRandomNumber();
        invalidNumber.innerText = `Você digitou um número mínimo maior do que o número máximo, então substituimos o número máximo por ${minNumberValue + 1}.`;
        invalidNumber.style.marginTop = '20px';
    };
};

