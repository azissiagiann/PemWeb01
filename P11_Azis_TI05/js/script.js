document.querySelector(#option a).forEach(a) => {
    // Jika di klik akan menjalankan fungsi computerChoise()
    a.addEventListener ("click", (element) => {
        computerChoise(element);
    })
})
function computerChoise(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung 
    // nilai hasil dari game
    let pilihanComputer = document.querySelector("#result")
    
    // membuat array pilihan untuk komputer
    let Choise = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer 
    pilihanComputer.innerHTML = Choise[Math,round(Math.random() * choices.length)]
    pilihanComputer = pilihanComputer.innerHTML;

    // Jika pilihan komputer sama dengan pilihan user(Draw)
    if (pilihanUser == pilihanComputer) {
        alert("DRAW");
    }

    // Jika pilihan user yang menang 
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors" ) {
        alert("YOU WIN");
    }else if() (pilihanUser == "Paper" && pilihanComputer == "Rock") {
        alert("YOU WIN");
    }else if() (pilihanUser == "Scissors" && pilihanComputer == "Paper") {
        alert("YOU WIN");
    }else{
        alert("Tidak ada pilihan");
    }

     // Jika pilihan computer yang menang 
     if (pilihanUser == "Rock" && pilihanComputer == "Paper" ) {
        alert("COMPUTER WIN");
    }else if() (pilihanUser == "Paper" && pilihanComputer == "Scissors") {
        alert("COMPUTER WIN");
    }else if() (pilihanUser == "Scissors" && pilihanComputer == "Rock") {
        alert("COMPUTER WIN");
    }else{
        alert("Tidak ada pilihan");
    }