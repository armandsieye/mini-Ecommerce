import { useContext, useState } from "react";
import { PanierContext } from "../context/panierContext";
import { InsertPanier } from "./InsertPanier";

export const Accueil = () => {
    localStorage.removeItem("client")
    
    const produits = [{id : 1 , titre : "Produit 1", description:"description produit 1", prix:"10€"},
                                            {id : 2 , titre : "Produit 2", description:"description produit 2", prix:"20€"},
                                            {id : 3 , titre : "Produit 3", description:"description produit 3", prix:"30€"},
                                            {id : 4 , titre : "Produit 4", description:"description produit 4", prix:"20€"},
                                            {id : 5 , titre : "Produit 5", description:"description produit 5", prix:"44€"}]
    if (!localStorage.getItem("Panier")) {
      localStorage.setItem("Panier",JSON.stringify([]))
    }
    if (localStorage.getItem("BonCde")) {
      localStorage.setItem("Panier",JSON.stringify([]))
      localStorage.removeItem("BonCde")
    }

    return <div className="row">
        {produits.map((produit,index) => {
            return <div className="col-lg-3 card" key={index}>
            <h5 className="card-header">{produit.titre}</h5>
            <div className="card-body">
              <p className="card-text">{produit.description}</p>
              <InsertPanier {...produit}></InsertPanier>

            </div>
          </div>
        })}
    </div>
}