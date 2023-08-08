import { useState } from 'react';
import './App.css';
import MiOrg from './componentes/miOrg';
import Header from './componentes/header/Header';
import Formulario from './componentes/formulario/formulario';
import Equipo from './componentes/Equipo';
import Footer from './componentes/footer';
import { v4 as uuid } from "uuid"

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);

  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    nombre: "Christian",
    puesto: "Encargado",
    foto: "https://github.com/christianpva.png",
    equipo: "Programacion",
    fav: true,
  },
  {
    id: uuid(),
    nombre: "Harland",
    puesto: "Instructor",
    foto: "https://github.com/harlandlohora.png",
    equipo: "Programacion",
    fav: false,
  }
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57C278" ,
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA" ,
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157" ,
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69" ,
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF" ,
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05" ,
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29" ,
      colorSecundario: "#FFEEDF"
    },
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }
  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color,id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id:uuid() }])
  }

  const like = (id) => {
    console.log(id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      { mostrarFormulario === true ? <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}/> : <></> }

      <MiOrg cambiarMostrar={cambiarMostrar}/> 
      
      { 
        equipos.map((equipo) => {
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        })

      }

      <Footer/>

    </div>
  );
}

export default App;
