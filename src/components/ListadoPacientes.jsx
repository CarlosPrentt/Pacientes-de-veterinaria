import Paciente from "./Paciente"


const ListadoPacientes = ({ pacientes, setPaciente }) => {

  //Para saber cuánto mide un arreglo o si tiene algo dentro
  // console.log(pacientes && pacientes.length)

  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {/* En este ternario cambiamos el texto dependiendo si hay o no pacientes */}
        {pacientes && pacientes.length ? (
          <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
        {/* Con este map iteramos en cada paciente que es el objeto y lo llevamos como prop a paciente */}
        { pacientes.map( paciente  => (
          <Paciente 
          //Aquí pasamos el id que creamos en formulario
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
          />
            
         ) ) }
         </>
        ) : (
          <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
          </>
        ) }

        

        
    </div>
  )
}

export default ListadoPacientes