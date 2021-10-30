import React from "react"
import "./Galeria.css"



export default function Galeria (props){
    return (<div className="div">
      
    
     <div className="imagens" >
     <img src={props.imagem} alt="img1"/>
     <h3>{props.nome}</h3>
     <p>{props.texto}</p>
   <a className="link" href="https://www.vivadecora.com.br/revista/lirio/#:~:text=O%20l%C3%ADrio%20%C3%A9%20uma%20planta,floristas%20e%20apreciadores%20de%20plantas." target="blank">VER</a></div>
    </div>)
}