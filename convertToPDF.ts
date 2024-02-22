import * as html2pdf from 'html2pdf.js';

function afficherPDF(): void {
    const form_nom = (document.querySelector('.form-nom') as HTMLInputElement).value;
    const form_prenom = (document.querySelector('.form-prenom') as HTMLInputElement).value;
    const form_entreprise_nom = (document.querySelector('.form-entreprise-nom') as HTMLInputElement).value;
    const form_entreprise_siren = (document.querySelector('.form-entreprise-siren') as HTMLInputElement).value;
    const form_prix = (document.querySelector('.form-prix') as HTMLInputElement).value;

    const body = document.querySelector('body');
    body.innerHTML = `
        <div class="piece">
            <p>Generateur de Facture</p>
            <h1>Facture partielle</h1>
            <div class="elements">
                <p>Nom: <strong>${form_nom}</strong></p>
                <p>Prenom: <strong>${form_prenom}</strong></p>
                <p>Nom de l'entreprise: <strong>${form_entreprise_nom}</strong></p>
                <p>SIREN: <strong>${form_entreprise_siren}</strong></p>
                <p>Prix: <strong>${form_prix}</strong></p>
            </div>
        </div>
        <div class="generateutBtn">
            <button class="submit" onclick="generateurPDF()">Telecharger le PDF</button>
            <a href="index.html" class="submit"> Génerer un autre PDF</a>
        </div>
    `;
}

function generateurPDF(): void {
    const piece = document.querySelector(".piece");
    html2pdf()
        .from(piece)
        .save();
}
