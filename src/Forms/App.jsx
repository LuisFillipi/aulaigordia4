import React from "react"
import Input from "./Input"

const App = () => {
    const [nome,setNome] = React.useState('')

    return(
        <>
        <Input
        label="Nome:"
        id="nome"
        type="text"
        placeholder="Digite seu Nome"
        value={nome}
        setValue={setNome}
        />
        </>
    )
}

export default App