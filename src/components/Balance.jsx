import { useEffect, useState } from "react";
import { moneyFormat } from "../Helper";

const Balance =({count, item, spent, setSpent})=> {

    const updateBalance = () =>{
        const spent = item.reduce((total,arti)=> Number(arti.price) + total, 0 );
        setSpent(spent);
    }

    useEffect(()=>{
        updateBalance();
    }, [item])

    return(
        <div className="balance">
            <h3>Presupuesto: {moneyFormat(count)}</h3>
            <h3>Disponible: {moneyFormat(count - spent)}</h3>
            <h3>Gastado: {moneyFormat(spent)}</h3>
        </div>
    );
}   

export default Balance;