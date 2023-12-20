import { useState } from "react";

const FormAddGastos =({setType,setPrice, type, price, setItem, item, editID,setEditId, spent, count})=> {
    const [error,setError]=useState(false);
    const [errorMoney,setErrorMoney]=useState(false);

    const handleGastos=e=>{
        e.preventDefault();
        if(price ===""||Number(price) < 0 || type ===""){
            setError(true);
            return;
        }
        if(count - spent < Number(price)){
            setErrorMoney(true);
            return; 
        }
        setError(false);
        setErrorMoney(false);
        if(editID != ""){
            setEditId("");
            const newItem = item.map(arti =>{
                if(arti.id === editID){
                    arti.type = type;
                    arti.price = price;
                }
                return arti;
            })
            setItem(newItem);
        } else{
            const data = {
                type: type,
                price: price,
                id: Date.now()
            }
            setItem([...item,data]);
        }
        setType("");
        setPrice("");
        //console.log(item);
        //console.log(type);
        //console.log(price);
    }
    
    return(
        <div className="add-gastos">
            <h3>Agregar Compra</h3>
            <form onSubmit={handleGastos}>
                <p>Producto</p>
                <input type="text" placeholder="¿En que vas a gastar?" onChange={e => setType(e.target.value)} value={type}/>
                <p>Cantidad</p>
                <input type="number" placeholder="20$" onChange={e => setPrice(e.target.value)} value={price} />
                {editID != "" ? <input type="submit" value="Guardar"/> : <input type="submit" value="Agregar"/>}
            </form>
            {error ? <p className="error">Campos Invalidos</p> : null}
            {errorMoney ? <p className="error">No hay suficiente presupuesto</p> : null}
        </div>
    );
}

export default FormAddGastos;