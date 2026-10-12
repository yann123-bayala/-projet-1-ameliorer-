// Pourcentage de code écrit par moi-même : 60 %

// Vérifie la réservation et retourne le message à afficher
function verifierReservation(date, debut, fin, salle) {
  if (date == "") return "Veuillez choisir une date.";
  if (debut == "") return "Veuillez choisir une heure de début.";
  if (fin == "") return "Veuillez choisir une heure de fin.";
  if (salle == "") return "Veuillez choisir une salle.";
  if (fin <= debut) return "L'heure de fin doit être après l'heure de début.";
  return "Votre réservation est enregistrée.";
}

// Permet aux tests d'utiliser la fonction
if (typeof module != "undefined") {
  module.exports = verifierReservation;
}
