const bicycles = [
    {
        nome: "Bottecchia",
        peso: 14,
    },
    {
        nome: "Graziella",
        peso: 15,
    },
    {
        nome: "HBM",
        peso: 8,
    },
    {
        nome: "Nilox",
        peso: 12,
    },
    {
        nome: "Schiano bici",
        peso: 13,
    },
    {
        nome: "Simoncini",
        peso: 10,
    },
    {
        nome: "Alpek",
        peso: 23,
    },
    {
        nome: "Cipollini",
        peso: 19,
    },
    {
        nome: "Kento",
        peso: 9,
    },
    {
        nome: "Somec",
        peso: 7,
    }
]

const listElem = document.querySelector("ul");
console.log(listElem);
let selectedBicycle = "";

for (i = 0; i < bicycles.length; i++) {
    const curObj = bicycles[i];
    const {nome, peso} = curObj;
    // console.log(nome, peso);
    if (peso < 11) {
        let nameBicycle = nome
        console.log(nameBicycle);
        selectedBicycle += `<li>${nameBicycle}</li>`
    }
}

console.log(selectedBicycle);
listElem.innerHTML = selectedBicycle;