import { moneyFormat } from "../Helper";
const SingleItem =({price,type,id,eliminarItem,editItem})=> {
    const HandleDelete = (e) =>{
        e.preventDefault();
        const answer = window.confirm(`Borrar Articulo a${type}`)
        if(answer ){
            eliminarItem(id);
        }
    }

    const HandleEdit = e =>{
        e.preventDefault();
        editItem(id);
    }

    return(
        <div className="single-item">
            <img src="../src/imgs/6498834.png" alt="" />
            <h3>Producto: {type}</h3>
            <h3>Precio: {moneyFormat(Number(price))}</h3>
            <a href="" className="delete" onClick={HandleDelete}>Borrar</a>
            <a href="" className="edit" onClick={HandleEdit}>Editar</a>
        </div>
    );
}

export default SingleItem;