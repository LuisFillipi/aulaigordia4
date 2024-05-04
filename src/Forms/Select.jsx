import React from "react";

const Select = () => {

    const [estado, setEstado]  = React.useState('')

    return(
        <form>
            <select value = {estado} onChange={({target})=> setEstado(target.value)}>
                <option disabled value=''>Selecione</option>
                <option value="Acre">Acre</option>
                <option value="Alagoas">Alagoas</option>
                <option value="Brasilia">Brasilia</option>
                <option value="Bahia">Bahia</option>
                <option value="Ceará">Ceará</option>
            </select>
            {estado}
        </form>
    )
}

export default Select;