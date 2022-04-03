import { useContext, useState } from "react";
import { PanierContext } from "../context/panierContext";

export const InsertPanier = (props) => {
    const panierClient = useContext(PanierContext)
    
    panierClient.panier[0] = JSON.parse(localStorage.getItem("Panier"))
    function ajoutPanier() {
          panierClient.panier[0].push(props)
          localStorage.setItem("Panier", JSON.stringify(panierClient.panier[0]))
      }
    return <><button className="btn btn-primary" onClick={ajoutPanier}>Mettre au panier</button>
    </>
}