import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom"
export const FormulaireCommande = () => {
    const navigate = useNavigate()

    const [form,setForm] = useState({nom:"",email:"",adresse:"",commentaire:""})
    function handleChange(e) {
        const {name,value} = e.target;
        setForm({...form, [name]: value})
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log("submit bouton appuyé ! ")
        if(form.login != "" && form.password != "" && form.adresse != "") {
           localStorage.setItem("client",JSON.stringify({nom:form.nom,email:form.email,adresse:form.adresse,commentaire:form.commentaire}))
           console.log(localStorage.getItem("client"))
            navigate('/boncde')
        }
    }
    return <div>
        <h2>Votre profil</h2>
        <form>
            <label htmlFor="nom">Votre nom : </label>
            <input type="text" className="form-control" name="nom" value={form.nom} onChange={handleChange} placeholder="votre nom"></input>
            <label htmlFor="email">Votre email : </label>
            <input type="text" className="form-control" name="email" value={form.email} onChange={handleChange} placeholder="Votre email "></input>
            <label htmlFor="email">Votre adresse : </label>
            <input type="text" className="form-control" name="adresse" value={form.adresse} onChange={handleChange} placeholder="Votre rue / code postal / ville "></input>
            <label htmlFor="email">Vos commentaires : </label>
            <textarea id="" cols="30" rows="10" className="form-control my-3" name="commentaire" onChange={handleChange} value={form.commentaire} placeholder="commentaires"></textarea>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Commander</button>
        </form>
        
    </div>
}