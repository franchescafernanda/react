import "./App.css"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css'
/*import MyCard from "./components/MyCard"*/



function App() {
  

  return (
    <>
      <Header titulo = "Adopta un perrito"/>

      <Card
            img="https://images.pexels.com/photos/803766/pexels-photo-803766.jpeg?auto=compress&cs=tinysrgb&w=300"
            name="Bartolo"
            information="Lleno de energía y listo para jugar. !Dale a Bartolo el hogar amoroso que se merece¡"
            btn="Husky"
      />
      <Card
            img="https://images.pexels.com/photos/16353650/pexels-photo-16353650/free-photo-of-jardin-animal-perro-mascota.jpeg?auto=compress&cs=tinysrgb&w=300"
            name="Gohan"
            information=""
            btn="Shar Pei"
      />
      <Card
            img="https://images.pexels.com/photos/373467/pexels-photo-373467.jpeg?auto=compress&cs=tinysrgb&w=300"
            name="Chuchu"
            information="Es jugueton, amigable y cariñoso con los niños. !Haz de Messi parte de tu familia hoy¡"
            btn="Poddle"
      />
      <Card
            img="https://images.pexels.com/photos/3764319/pexels-photo-3764319.jpeg?auto=compress&cs=tinysrgb&w=300"
            name="Princesa"
            information="Es una compañera leal y cariñosa que adora los mimos y los abrazos !Ayuda a Princesa a encontrar su final feliz¡"
            btn="Beagle"
      />

      <Footer description ="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto.
      Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar cálido y amoroso."/>
      
    </>
  )
}

export default App