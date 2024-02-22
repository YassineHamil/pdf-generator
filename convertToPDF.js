"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var html2pdf = require("html2pdf.js");
function afficherPDF() {
    var form_nom = document.querySelector('.form-nom').value;
    var form_prenom = document.querySelector('.form-prenom').value;
    var form_entreprise_nom = document.querySelector('.form-entreprise-nom').value;
    var form_entreprise_siren = document.querySelector('.form-entreprise-siren').value;
    var form_prix = document.querySelector('.form-prix').value;
    var body = document.querySelector('body');
    body.innerHTML = "\n        <div class=\"piece\">\n            <p>Generateur de Facture</p>\n            <h1>Facture partielle</h1>\n            <div class=\"elements\">\n                <p>Nom: <strong>".concat(form_nom, "</strong></p>\n                <p>Prenom: <strong>").concat(form_prenom, "</strong></p>\n                <p>Nom de l'entreprise: <strong>").concat(form_entreprise_nom, "</strong></p>\n                <p>SIREN: <strong>").concat(form_entreprise_siren, "</strong></p>\n                <p>Prix: <strong>").concat(form_prix, "</strong></p>\n            </div>\n        </div>\n        <div class=\"generateutBtn\">\n            <button class=\"submit\" onclick=\"generateurPDF()\">Telecharger le PDF</button>\n            <a href=\"index.html\" class=\"submit\"> G\u00E9nerer un autre PDF</a>\n        </div>\n    ");
}
function generateurPDF() {
    var piece = document.querySelector(".piece");
    html2pdf()
        .from(piece)
        .save();
}
