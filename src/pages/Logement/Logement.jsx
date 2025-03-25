import { useParams } from "react-router-dom";

function Logement (){ 
    const params =useParams()
    console.log(params.id)
    return ( 
        <p>page logement</p>

    )
}
export default Logement;