import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente }) => {
    // Siempre la variable se modifica por la función, en este caso setNombre es la función modificadora
    const [ nombre, setNombre ] = useState('');
    const [ propietario, setPropietario ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ fecha, setFecha ] = useState('');
    const [ sintomas, setSintomas ] = useState('');//Es importante tener el orden de states conforme se va requiriendo 

    const [ error, setError ] = useState(false)

    

    // Esto es para generar un id único
    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validación del formulario
        if([ nombre, propietario, email, fecha, sintomas ].includes('')) {
            console.log('Hay al menos un campo vacío')

            setError(true)
            return;
        }
        // Este setError aquí es si todos los campos están llenos, se va a borrar el mensaje de 'Todos los campos son obligatorios'
        setError(false)

        //Objeto de Paciente, no necesitamos especificar llave y valor porque son iguales
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            id: generarId()
        }

        // Con este generamos un nuevo arreglo con copia de pacientes para no modificar el arreglo original y así podemos registrar más de uno
        setPacientes([ ...pacientes, objetoPaciente ])

        //Reiniciar el form para escribir un nuevo registro, vuelven a un string vacío
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form 
            onSubmit={handleSubmit}/*Se recomienda poner un handleSubmit a un submit en react como en setNombre */
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">
                {/* Aquí importamos el componente error */}
                {/* Forma 1 de pasar props */}
                {/* {error && <Error mensaje='Todos los campos son obligatorios'/>} */}
                {/* Forma 2 */}
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}

            <div className="mb-5">{/*El htmlFor es de jsx y es para que cuando le den click al label ponga para escribir en el input */}
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                <input
                    id="mascota"
                    type="text" 
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    // El onChange es como si fuenra un addEventtListener cuando algo cambie pero en React, y aquí estamos agregando un evento de que cuando el usuario escriba con e.target.value que es cuando el valor cambie, va a modificar el state con setNombre
                    onChange={ (e) => setNombre(e.target.value) }
                />
            </div>

            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                <input
                    id="propietario"
                    type="text" 
                    placeholder="Nombre del propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario}
                    onChange={ (e) => setPropietario(e.target.value) }
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                <input
                    id="email"
                    type="email" 
                    placeholder="Email Contacto Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }
                />
            </div>

            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                <input
                    id="alta"
                    type="date" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    onChange={ (e) => setFecha(e.target.value) }
                />
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                <textarea 
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe los Sintomas"
                    value={sintomas}
                    onChange={ (e) => setSintomas(e.target.value) }
                />
            </div>

            <input 
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value='Agregar Paciente'
            />
        </form>
    </div>
  )
}

export default Formulario