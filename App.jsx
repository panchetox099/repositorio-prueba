
import React from 'react'
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'
import Componente from './componentes/Componente.jsx'
import CartWidget from './componentes/CartWidget.jsx'
import Item from './componentes/Item'


const App = () => {


   return (
     <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a Nullaby"} />
  
    </div>
    //// )
  
   )









  //const App = () => {




 // return (
 //   <div>App</div>
///  )
//}


// no bloqureante
//promesas (FULL-FILLED  - REJECTED  -  PENDING)

//const aplicarDescuento = new Promise((resolve, reject) => {
// const descuento = true
// if (descuento) {
//  resolve("descuento aplicado")
// } else {
//   reject("no se ha aplicado el descuento")
///}
//  })



//console.log(aplicarDescuento)


//aplicarDescuento
//  .then((resultado) => {
//     console.log(resultado)
//  })
//  .catch((error) => {
//     console.log(error)
//  })




  // return (
  // <div>
  //   <NavBar />
  //   <ItemListContainer greeting={"Bienvenido a Nullaby"} />
  //
  // </div>
  //// )

  //return(

  // {productos.map((p) => {
  //  return(
  //    <div key={p.id}>
  //      <h1>Producto: {p.name}</h1>
  //      <p>Descripcion: {p.descripcion}</p>
  //      <p>Stock: {p.stock}</p>
  //    </div>
  //   )
  // }

  //)}
  // </>
  //)

  //  <ComponenteDePresentacion productos={productos}/>
  // < Item productos = { productos } />

}
export default App

