import { Link } from 'react-router-dom'


const Item = ({id, titulo, img, precio}) =>{
    
    return(
                 <article className="CardItem">
           <header className="Header">
               <h2 className="ItemHeader">
                   {titulo}
               </h2>
           </header>
           <picture>
               <img src={img} alt={titulo} className="ItemImg"/>
           </picture>
           <section>
               <p className="Info">
                   Precio: ${precio}
               </p>
           </section>           
           <footer className='ItemFooter'>
               <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
           </footer>
       </article>
    )
}
export default Item