// TODO: this file! :)
//add number' button.
const inputNum = document.querySelector("input");
const addButton = document.querySelector(".submit-btn");

//bank outputs numbers
const bank = document.getElementById("numberBank").querySelector("output");
let bankedNumbers = [];

//sortAll buttons.
const sortO = document.getElementById("sortOne");
const sortA = document.getElementById("sortAll");
// odds box.
const oddOutput = document.getElementById("odds").querySelector("output");
const evenOutput = document.getElementById("evens").querySelector("output");

//event listener for 'add number' button.
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    bank.innerText = "";
    bankedNumbers.push(inputNum.value);
    bank.innerText = bankedNumbers;
});

//starts sort from the ending of the array.
sortO.addEventListener("click", () => {
    if (bankedNumbers.length !== 0) {
        let popped = bankedNumbers.pop(); 
        if (popped % 2 === 0) {
            evenOutput.append(popped + ",");
        } else {
            oddOutput.append(popped + ",");
        }
        bank.innerText = bankedNumbers;
    }
});

//starts sort from the beginning of the array.
sortA.addEventListener("click", () => {
    if (bankedNumbers.length !== 0) {
        for (let bankedNumber of bankedNumbers) {
            if (bankedNumber % 2 === 0) {
                evenOutput.append(bankedNumber + ",");
            } else {
                oddOutput.append(bankedNumber + ",");
            }
        }
        bankedNumbers = [];
        bank.innerText = "";
    }
});



                                                                                                                                                                                                        