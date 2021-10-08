import CardRazasPerros from "components/CardRazasPerros";
import borderCollie from "media/borderCollie.jpg";
import Rhodesian from "media/Rhodesian.jpg";

function Index(){
    return(
        <div>

 
            
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


        </div>
  
    )

}
export default Index; 