import './App.css';
import Menu from './componentes/Menu';
import Menuc from './componentes/Menuc';

function App() {

  const nombre = <h1>nombre: David Montilla</h1>
  const correo = <p>correo: David14@gmail.com</p>
  const telefono = <p>numero: 3003394453</p>
  const edad = <p>edad: 28</p>
  const empleado = <div> {nombre} {correo} {telefono} {edad}</div>
  return (
    <div className='app'>

      {empleado}

      <Persona nombre= 'Fabio Duran' edad='25' correo='fabio8@gmail.com' color='red'/>
      <Persona nombre= 'Pablo Martinez' edad='30' correo='pablom@gmail.com' color='blue'/>
      <Persona nombre= 'Andres Diaz' edad='35' correo='andrez.d@gmail.com' color='green'/>
      <Persona nombre= 'liliana Morales' edad='22' correo='Moralesl@gmail.com' color='pink'/>
      <Persona nombre= 'Julio Angarita' edad='40' correo='julitoa@gmail.com' color='black'/>

      

    <Menuc/>
    <Menu/>
    

    </div>
  );
}

function Persona (props){
  console.log(props);

 return (
 <div className='persona' 
 style={{
    backgroundColor: props.color,
  }}>
    <h3>nombre: {props.nombre}</h3>
    <p>edad: {props.edad}</p>
    <p>correo: {props.correo}</p>

  </div>
  );
}

function Automovil(props) {
  return (

    <div className='Automovil'>
      <h3>marca: {props.marca}</h3>
      <p>modelo: {props.modelo}</p>
      <p>precio: {props.precio}</p>
      <p>color: {props.color}</p>
      <p>cilindraje: {props.cilindraje}</p>

    </div>

  );
}

export default App;
