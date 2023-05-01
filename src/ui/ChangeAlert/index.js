import React from "react";
import './ChangeAlert.css';
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({ sincronize }) {

    const { show, toggleShow } = useStorageListener(sincronize);

    if (show) {
        return (
            <div className="ChangeAlert-bg">   
              <div className="ChangeAlert-container">
                 <p>Hubo cambios en tus TODOS!</p>
                <button 
                    className="ChangeAlert-button"
                    onClick={() => toggleShow(false)}
                >
                    RECARGAR
                 </button>
              </div>
            </div> 
        );
    } else {
        return null;
    }
}

export { ChangeAlert };