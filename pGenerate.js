let outputOne = document.getElementById("output1");
let outputTwo = document.getElementById("output2");

let randomPassword = ["a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "1", "2",
    "3", "4", "5", "6", "7", "8", "9", "0", "!", "/",
    "@", "#", "*", "&", "$"
];

function generatePasswords() {
    let password1 = "";
    let password2 = "";

    for (let i = 0; i < 12; i++) {
        let randomIndex1 = Math.floor(Math.random() * randomPassword.length);
        let randomIndex2 = Math.floor(Math.random() * randomPassword.length);
        password1 += randomPassword[randomIndex1];
        password2 += randomPassword[randomIndex2];
    }

    outputOne.textContent = password1;
    outputTwo.textContent = password2;
}
