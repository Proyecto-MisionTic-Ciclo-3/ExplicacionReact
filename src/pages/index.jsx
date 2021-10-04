import CardRazasPerros from "components/CardRazasPerros";
import logo from "media/Logo.png";
import borderCollie from "media/borderCollie.jpg";
import Rhodesian from "media/Rhodesian.jpg";

function Index(){
    return(
        <div>

            <header>
                <ul className="navbar">
                    <li>
                        <div>
                            <img src= {logo} alt="imagen" className = "logo"/>
                        </div>
                    </li>
                     
                     <li>
                        <button className="button mainButton"> Nuevo post</button>
                    </li>
                    <li><button className="button secondaryButton">Login</button></li>
                    <li>
                         <div className ="buscar">
                            <input placeholder="Buscar una raza"/>
                            <i className="fas fa-search button iconoBusqueda"></i>
                        </div>                   
                    </li> 
                    <li><button className="button mainButton">Registro</button></li>
                    </ul>
            </header>
            
            <main>
                <section>
                    <h1>Razas de perros</h1>
                    <ul className="breedCardContainer">
                        <CardRazasPerros nombreRaza ="Border Collie" imagen={borderCollie}/>
                        <CardRazasPerros nombreRaza = "Rhodesian" imagen = {Rhodesian}/>
                    </ul>
                </section>
                <section></section>
            </main>
            <footer>    
            </footer> 

        </div>
  
    )

}
export default Index; 