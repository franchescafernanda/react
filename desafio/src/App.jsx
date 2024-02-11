import React from "react"

import "./App.css" /*importar con esto en css en cada una*/
import MyCard from "./components/MyCard"
import Footer from "./components/Footer"
import Header from './components/Header'

import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div>
      <Header titulo="Adopta un perrito" />

      <div>
        <MyCard
          img="https://images.pexels.com/photos/803766/pexels-photo-803766.jpeg?auto=compress&cs=tinysrgb&w=300"
          name="Bartolo"
          information="Lleno de energía y listo para jugar. !Dale a Bartolo el hogar amoroso que se merece¡"
          btn="Husky"
          textobadge="adoptar"
          colorbadge="info"
        />
        <MyCard
          img="https://images.pexels.com/photos/16353650/pexels-photo-16353650/free-photo-of-jardin-animal-perro-mascota.jpeg?auto=compress&cs=tinysrgb&w=300"
          name="Gohan"
          information="Un perro detamaño pequeño pero con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional"
          btn="Shar Pei"
          textobadge="adoptar"
          colorbadge="info"
        />
        <MyCard
          img="https://images.pexels.com/photos/373467/pexels-photo-373467.jpeg?auto=compress&cs=tinysrgb&w=300"
          name="Chuchu"
          information="Es jugueton, amigable y cariñoso con los niños. !Haz de Messi parte de tu familia hoy¡"
          btn="Poddle"
          textobadge="adoptar"
          colorbadge="info"
        />
        <MyCard
          img="https://images.pexels.com/photos/3764319/pexels-photo-3764319.jpeg?auto=compress&cs=tinysrgb&w=300"
          name="Princesa"
          information="Es una compañera leal y cariñosa que adora los mimos y los abrazos !Ayuda a Princesa a encontrar su final feliz¡"
          btn="Beagle"
          textobadge="adoptar"
          colorbadge="info"
        />
      </div>

      <Footer description ="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto.
      Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar cálido y amoroso."/>
    </div>
  )
}

export default App