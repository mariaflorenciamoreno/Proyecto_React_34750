const Item = ({prod}) =>{
    return(
            <div key={prod.id}>
            <h1>{prod.titulo}</h1>
            <h2>${prod.precio}</h2>
            <button>Ver detalle</button>
           </div>
    )
}
export default Item