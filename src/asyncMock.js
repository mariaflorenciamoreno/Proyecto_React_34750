const productos = [
    {
    id: '1',
    titulo:"Ambo Salmon" , 
    precio: 9799, 
    categoria: 'Ambos',
    stock: 3,
    img:"https://d2r9epyceweg5n.cloudfront.net/stores/337/759/products/e891e6c2-cefe-4471-9dc6-ec0ee4970ba9_nube-099f9a0b2c59c6ee8716068676169850-320-0.jpg",
    descripcion: "​La chaqueta es escote V en terminación recta, cuenta con un bolsillo superior ideal para credenciales y lapiceras.También tiene dos bolsillos delanteros internos para que puedas llevar todo con comodidad y nada se caiga. El pantalón tiene cintura elastizada, reforzada con elástico de algodón, cordón regulable de ajuste y punteras simil metálicas."
   },
   {id: '2', 
    titulo:"Ambo Celeste" ,
    precio: 10499, 
    categoria: 'Ambos',
    stock: 5, 
    img:"https://d2r9epyceweg5n.cloudfront.net/stores/337/759/products/2bd20ea9-e811-44c6-b2de-6a9c0e223d91_nube-94cf50223646dad13b16076020098807-320-0.jpg",
    descripcion: "​La chaqueta es escote V en terminación recta, cuenta con un bolsillo superior ideal para credenciales y lapiceras.También tiene dos bolsillos delanteros internos para que puedas llevar todo con comodidad y nada se caiga. El pantalón tiene cintura elastizada, reforzada con elástico de algodón, cordón regulable de ajuste y punteras simil metálicas."
   },
   {id: '3',
    titulo:"Ambo Bordo" ,
    precio: 9499,
    categoria: 'Ambos',
    stock: 9, 
    img:"https://d2r9epyceweg5n.cloudfront.net/stores/337/759/products/01e937ef-f12a-4641-9abb-6e71e24f09dd_nube-21f081eb706e441f5216070174044578-320-0.jpg",
    descripcion: "​La chaqueta es escote V en terminación recta, cuenta con un bolsillo superior ideal para credenciales y lapiceras.También tiene dos bolsillos delanteros internos para que puedas llevar todo con comodidad y nada se caiga. El pantalón tiene cintura elastizada, reforzada con elástico de algodón, cordón regulable de ajuste y punteras simil metálicas."
   },
   {id: '4', 
    titulo:"Ambo Flores" ,
    precio: 11899, 
    categoria: 'Ambos',
    stock: 8, 
    img:"https://d2r9epyceweg5n.cloudfront.net/stores/337/759/products/b1e8e88f-1b3d-4579-98fb-4fd4200fe3a7_nube-9acd49c1872c130ad916133124012181-320-0.jpg",
    descripcion: "​La chaqueta es escote V en terminación recta, cuenta con un bolsillo superior ideal para credenciales y lapiceras.También tiene dos bolsillos delanteros internos para que puedas llevar todo con comodidad y nada se caiga. El pantalón tiene cintura elastizada, reforzada con elástico de algodón, cordón regulable de ajuste y punteras simil metálicas."
   },
   {id: '5',
    titulo:"Chaqueta Chicory Manteca" ,
    precio: 5499,
    categoria: 'Chaquetas',
    stock: '6', 
    img:"https://d2r9epyceweg5n.cloudfront.net/stores/337/759/products/d0125370-3909-4748-b7a5-4315decc66b5_nube-7fbe1a806f11cbecb116153325448180-320-0.jpg",
    descripcion:"La chaqueta Chicory tiene cuello mao, cuenta con un cordon delantero regulable y un bolsillo superior ideal para lapiceras o credenciales y dos bolsillos laterales amplios donde podes guardar tu celular y demás accesorios de trabajo cómodamente."
   },
   {id: '6',
    titulo:"Chaqueta Chicory Rosa" ,
    precio: 5499,
    categoria: 'Chaquetas',
    stock: 10, 
    img:"https://d2r9epyceweg5n.cloudfront.net/stores/337/759/products/e41c52db-9477-46e1-9178-642d0ad2f76a_nube-879631eb2852f5e63015762759529933-320-0.jpg",
    descripcion:"La chaqueta Chicory tiene cuello mao, cuenta con un cordon delantero regulable y un bolsillo superior ideal para lapiceras o credenciales y dos bolsillos laterales amplios donde podes guardar tu celular y demás accesorios de trabajo cómodamente."
   },
   {id: '7',
    titulo:"Chaqueta Chicory Negra" ,
    precio: 6499,
    categoria: 'Chaquetas',
    stock: 8, 
    img:"https://d2r9epyceweg5n.cloudfront.net/stores/337/759/products/7694590b-4871-465e-aa7e-cefc2fe6b6a4_nube-5fd96fe3b1a65d5de215966504362971-320-0.jpg",
    descripcion:"La chaqueta Chicory tiene cuello mao, cuenta con un cordon delantero regulable y un bolsillo superior ideal para lapiceras o credenciales y dos bolsillos laterales amplios donde podes guardar tu celular y demás accesorios de trabajo cómodamente."
   },
   {id: '8',
    titulo:"Cofia Beirut Fuccia" ,
    precio: 3499,
    categoria: 'Cofias',
    stock: 7, 
    img:"hhttps://d2r9epyceweg5n.cloudfront.net/stores/337/759/products/84543ed3-9358-4143-8dd6-6d9976fc14b6_nube-4d9689bc4525ab487015754801293170-320-0.jpg",
    descripcion:"Cofia con tiras de ajuste regulables. Dentro de las mismas cabe todo el pelo realizando un rodete."
   },
   {id: '9',
    titulo:"Cofia Beirut Celeste" ,
    precio: 3499,
    categoria: 'Cofias',
    stock: 5, 
    img:"https://d2r9epyceweg5n.cloudfront.net/stores/337/759/products/d85f76b5-2a9e-4a2f-8f52-ac89daccb310_nube-43684041d21e90dac715754802694938-320-0.jpg",
    descripcion:"Cofia con tiras de ajuste regulables. Dentro de las mismas cabe todo el pelo realizando un rodete."
   },
   {id: '10',
    titulo:"Cofia Beirut Rosa" ,
    precio: 3499,
    categoria: 'Cofias',
    stock: 5, 
    img:"https://d2r9epyceweg5n.cloudfront.net/stores/337/759/products/cbc4181f-052f-40d1-a8a8-0271333eaa4f_nube-338a14e72ca31a718715754800814796-320-0.jpg",
    descripcion:"Cofia con tiras de ajuste regulables. Dentro de las mismas cabe todo el pelo realizando un rodete."
   }
]

export const getProductos = (categoriaId) => {
   return new Promise((resolve) => {
       setTimeout(() => {
           resolve(categoriaId ? productos.filter(prod => prod.categoria === categoriaId) : productos)
       }, 1000)
   })
}

export const getProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 2000)
    })
 }