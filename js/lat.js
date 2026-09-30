let pertandingan = {
  player1: "",
  player2: "",

  games: [],
  kemenanganA: 0,
  kemenanganB: 0,
};
function tambahGame() {
  let player1 = document.getElementById("player1").value;
  let player2 = document.getElementById("player2").value;
  let scoreA = Number(document.getElementById("score1").value);
  let scoreB = Number(document.getElementById("score2").value);

  pertandingan.player1 = player1;
  pertandingan.player2 = player2;

  pertandingan.games.push({
    scoreA: scoreA,
    scoreB: scoreB,
  });

  if (scoreA > scoreB) {
    pertandingan.kemenanganA++;
  } else if (scoreB > scoreA) {
    pertandingan.kemenanganB++;
  }

  tampilkanHasil();
}

function tampilkanHasil() {
  let tampilHasil = document.getElementById("hasil");
  tampilHasil.innerHTML = "";

  pertandingan.games.forEach(function (game, index) {
    tampilHasil.innerHTML += `
        <p>Game ${index + 1} : ${pertandingan.player1} ${game.scoreA} - ${game.scoreB} ${pertandingan.player2}</p>
        `;
  });

  tampilHasil.innerHTML += `
  <h4>
    POINT ${pertandingan.player1} : ${pertandingan.kemenanganA}
  </h4>
  <h4>
    POINT ${pertandingan.player2} : ${pertandingan.kemenanganB}
  </h4>
  `;

  if (pertandingan.kemenanganA === 3) {
    tampilHasil.innerHTML += `
  <h4>PEMENANG ADALAH ${pertandingan.player1}</h4>
  `;
  } else if (pertandingan.kemenanganB === 3) {
    tampilHasil.innerHTML += `
      <h4>PEMENANG NYA ADALAH :${pertandingan.player2}</h4>
      `;
  }
}
