import SingleItem from "./SingleItem"

const DisplayItems =({item,eliminarItem, editItem})=> {
    return(
        <>
            <h2>Items</h2>
            {
                item.map(arti=>(
                    <SingleItem 
                    key={arti.id}
                    id={arti.id} 
                    price={arti.price} 
                    type={arti.type}
                    eliminarItem={eliminarItem}
                    editItem={editItem}/> 
                ))
            }
        </>
    );
}

export default DisplayItems;