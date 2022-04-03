import { useState } from "react";
import { FormulaireCommande } from "./FormulaireCommande";

export const Panier = () => {
    const [listeProduits, setListeProduits] = useState(JSON.parse(localStorage.getItem("Panier")) ? JSON.parse(localStorage.getItem("Panier")) : [])
    
    function viderPanier() {
        localStorage.removeItem("Panier")
    }

    function supprimerProduit(e) {
        const id = e.target.value
        const result = listeProduits.filter(produit => produit.id != id)
        setListeProduits(result)
        localStorage.setItem("Panier", JSON.stringify(result))
    }
    return <div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">nom</th>
                <th scope="col">prix</th>
                <th scope="col">action</th>
                </tr>
            </thead>
            <tbody>
                {listeProduits.map((produit,index) => {
                    return <tr key={index}>
                        <th scope="row">{produit.id}</th>
                        <td>{produit.titre}</td>
                        <td>{produit.prix}</td>
                        <td><button className="btn btn-primary" onClick={supprimerProduit} value={produit.id}>Supprimer</button></td>
                    </tr>
                })}
            </tbody>
        </table>
        <button className="btn btn-primary" onClick={viderPanier}>Vider panier</button>
        <FormulaireCommande></FormulaireCommande>
    </div>
}