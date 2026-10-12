// Pourcentage de code écrit par moi-même : 50 %

// Quand on clique sur « Réserver »
function reserver() {
  let date = document.getElementById("date").value;
  let debut = document.getElementById("debut").value;
  let fin = document.getElementById("fin").value;
  let salle = document.getElementById("salle").value;

  let texte = verifierReservation(date, debut, fin, salle);
  let message = document.getElementById("message");
  message.textContent = texte;

  if (texte == "Votre réservation est enregistrée.") {
    message.style.color = "green";

    // On ajoute la réservation dans la liste, avec un bouton Annuler
    let ligne = document.createElement("li");
    ligne.innerHTML = salle + " - " + date + " de " + debut + " à " + fin +
      ' <button onclick="annuler(this)">Annuler</button>';
    document.getElementById("liste").appendChild(ligne);
    document.getElementById("vide").classList.add("cache");
  } else {
    message.style.color = "red";
  }
}

// Quand on clique sur « Annuler »
function annuler(bouton) {
  bouton.parentElement.remove();

  // Si la liste est vide, on remontre le message
  if (document.getElementById("liste").children.length == 0) {
    document.getElementById("vide").classList.remove("cache");
  }
}

// Montre une page et cache les autres
function montrerPage(page) {
  document.getElementById("page-reserver").classList.add("cache");
  document.getElementById("page-liste").classList.add("cache");
  document.getElementById("page-aide").classList.add("cache");
  document.getElementById(page).classList.remove("cache");
}
