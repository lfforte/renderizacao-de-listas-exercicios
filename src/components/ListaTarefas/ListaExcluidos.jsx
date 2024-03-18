import React from "react";
import {
  ListaContainer,
  TarefaExcluida
} from "./styled";

function ListaExcluidos({ listaExcluida }) {

  return (
    <ListaContainer>
      <h1>CONCLUÍDAS</h1>
      <ul>
        {listaExcluida.map((excluidos) => {
          return (
            <TarefaExcluida>
              <li key={excluidos.id}>{excluidos}</li>
            </TarefaExcluida>
          );
        })}
      </ul>
    </ListaContainer>
  );
}

export default ListaExcluidos;