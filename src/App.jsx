
import './App.css'
import Team from './components/team'
import Saptarshi from './assets/Saptarshi.jpg'
import Anirban from './assets/Anirban.png'
import Sujay from './assets/Sujay Dey.jpg'
import Priyobrata from './assets/Priyobrata.png'

function App() {
 return ( 
  <>
        <Team  userName= "Saptarshi Paul" deg = "Front-end Dev" img = {Saptarshi} />
        <Team  userName=" Sujay Dey " deg = " App -dev"  img={Sujay}    />
        <Team  userName=" Anirban" deg = "Team Lead"  img={Anirban}  />
        <Team   userName="Priyobarta" deg = " Team Co Lead"   img={Priyobrata}/>
  
  </>

 )
 
}

export default App
