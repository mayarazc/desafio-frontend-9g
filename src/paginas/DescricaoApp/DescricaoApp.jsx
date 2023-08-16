import { useNavigate, useParams } from "react-router-dom";
import Aplicativo from "../../componentes/Aplicativo/Aplicativo";

import { vetApps } from "../../API";

function DescricaoApp() {
    const voltarNav = useNavigate();
    const appID = useParams();
    const appSelecionado = vetApps.find((item) => {
        return item.id === appID.urlID;
    })

    return(
        <div>
            <Aplicativo app={appSelecionado}/>
            <button onClick={() => voltarNav(-1)}>Voltar</button>
        </div>
    )
}

export default DescricaoApp;