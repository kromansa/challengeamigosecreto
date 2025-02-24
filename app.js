// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const Friendlist = [];

document.addEventListener("DOMContentLoaded", function() {
  const inputFriends = document.getElementById("amigo");
  const ulFriendList = document.getElementById("listaAmigos");
  const buttonAdd = document.querySelector(".button-add");
  const buttonDraw = document.querySelector(".button-draw");
  const resultado = document.getElementById("resultado");

  function agregarAmigo() {
    const name = inputFriends.value.trim();
    if (name !== "") {
      Friendlist.push(name);
      ulFriendList.innerHTML += `<li>${name}</li>`;
      inputFriends.value = "";
    }
  }

  function sortearAmigo() {
    if (Friendlist.length < 2) {
      alert("Necesitas al least 2 amigos para poder sortear.");
      return;
    }

    resultado.innerHTML = "";

    const friendsCopy = [...Friendlist];
    shuffleArray(friendsCopy);

    for (let i = 0; i < friendsCopy.length; i++) {
      let recipient = friendsCopy[i];
      let giver = Friendlist[i];

      // Asegurarse de que el amigo secreto no sea el mismo que el dador
      while (recipient === giver) {
        shuffleArray(friendsCopy);
        recipient = friendsCopy[i];
      }

      resultado.innerHTML += `<li>${giver} le tocó ${recipient}</li>`;
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  buttonAdd.addEventListener("click", agregarAmigo);
  buttonDraw.addEventListener("click", sortearAmigo);
});