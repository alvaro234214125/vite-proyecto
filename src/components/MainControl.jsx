import { useState } from "react";
import Balance from "./Balance";
import FormAddGastos from "./FormAddGastos";
import DisplayItems from "./DisplayItems";

const MainControl =({count})=> {
    const[item,setItem] = useState([]);
    const[type,setType] = useState("");
    const[price,setPrice] = useState("");
    const[editID,setEditId] = useState("");
    const[spent, setSpent]=useState(0);

    const eliminarItem = id=>{
        const newList= item.filter(arti=>arti.id != id);
        setItem(newList);
    }

    const editItem = id =>{
        setEditId(id);
        item.map(arti =>{
            if(arti.id === id){
                setType(arti.type);
                setPrice(arti.price);
            }
        })
    }
    
    return(
        <>
            <div className="main-form">
                <Balance count={count} item={item} spent={spent} setSpent={setSpent}/>
                <FormAddGastos 
                setType={setType} 
                setPrice={setPrice}
                type={type}
                price={price}
                setItem={setItem}
                item={item}
                editID={editID}
                setEditId={setEditId}
                spent={spent}
                count={count}
                />
            </div>
            <DisplayItems item={item} eliminarItem={eliminarItem} editItem={editItem}/>
        </>
    );
}

export default MainControl;