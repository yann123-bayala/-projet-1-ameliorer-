// Pourcentage de code écrit par moi-même : ___ %
// Pour lancer les tests : npm test

const test = require("node:test");
const assert = require("node:assert");
const verifierReservation = require("../reservation.js");

test("Cas 1 : réservation correcte", function () {
  let resultat = verifierReservation("2026-10-05", "10:00", "12:00", "Salle A101");
  assert.strictEqual(resultat, "Votre réservation est enregistrée.");
});

test("Cas 2 : la date est vide", function () {
  let resultat = verifierReservation("", "10:00", "12:00", "Salle A101");
  assert.strictEqual(resultat, "Veuillez choisir une date.");
});

test("Cas 3 : l'heure de début est vide", function () {
  let resultat = verifierReservation("2026-10-05", "", "12:00", "Salle A101");
  assert.strictEqual(resultat, "Veuillez choisir une heure de début.");
});

test("Cas 4 : l'heure de fin est vide", function () {
  let resultat = verifierReservation("2026-10-05", "10:00", "", "Salle A101");
  assert.strictEqual(resultat, "Veuillez choisir une heure de fin.");
});

test("Cas 5 : la salle est vide", function () {
  let resultat = verifierReservation("2026-10-05", "10:00", "12:00", "");
  assert.strictEqual(resultat, "Veuillez choisir une salle.");
});

test("Cas 6 : l'heure de fin est avant l'heure de début", function () {
  let resultat = verifierReservation("2026-10-05", "14:00", "10:00", "Salle A101");
  assert.strictEqual(resultat, "L'heure de fin doit être après l'heure de début.");
});

test("Cas 7 : l'heure de fin est égale à l'heure de début", function () {
  let resultat = verifierReservation("2026-10-05", "10:00", "10:00", "Salle A101");
  assert.strictEqual(resultat, "L'heure de fin doit être après l'heure de début.");
});
