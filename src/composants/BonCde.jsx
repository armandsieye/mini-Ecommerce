import { Navigate } from "react-router-dom";

export const BonCde = () => {
    const clientData = JSON.parse(localStorage.getItem("client"))
    const listeProduits = JSON.parse(localStorage.getItem("Panier"))
    console.log(listeProduits)
    localStorage.setItem("BonCde","Acheté!")
    return (<div>
        {clientData ? <><h2>Bon de Cde numéro 1</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">nom</th>
                <th scope="col">prix</th>
                
                </tr>
            </thead>
            <tbody>
                {listeProduits.map((produit,index) => {
                    return <tr key={index}>
                        <th scope="row">{produit.id}</th>
                        <td>{produit.titre}</td>
                        <td>{produit.prix}</td>
                        
                    </tr>
                })}
            </tbody>
        </table>
        <h2>Détail livraison</h2>
        <ul>
            <li>nom : {clientData.nom}</li>
            <li>email : {clientData.email}</li>
            <li>adresse : {clientData.adresse}</li>
            <li>commentaire : {clientData.commentaire}</li>
        </ul>
        </> : <Navigate to="/accueil"/>}
    </div>)
}