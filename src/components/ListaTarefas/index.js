import { useState, keyboardKey } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
  TarefaExcluida
} from "./styled";
import bin from "../../assets/bin.png";
import ListaExcluidos from "./ListaExcluidos";


const listaDeTarefasInicial = [
  {
    titulo: "Fazer exercícios"
  },
  {
    titulo: "Estudar React"
  }
];

export function ListaTarefas() {
  const [lista, setLista] = useState(listaDeTarefasInicial);
  const [novaTarefa, setNovaTarefa] = useState({ titulo: "" });

  const [listaExcluida, setListaExcluida] = useState([]);


  const onChangeTarefa = (event) => {
    const tarefa = {
      titulo: event.target.value
    };
    setNovaTarefa(tarefa);
  };

  const adicionaTarefa = () => {
    if (novaTarefa.titulo !== '') {
      const novaLista = [...lista, novaTarefa];
      setLista(novaLista);
      setNovaTarefa({ titulo: "" });
    };

  };

  const removeTarefa = (tarefaParaRemover) => {
    const listaFiltrada = lista.filter(
      (tarefa) => tarefa.titulo !== tarefaParaRemover.titulo
    );
    listaExcluida.push(tarefaParaRemover.titulo);

    setLista(listaFiltrada);
  };

  const teclaEnter = (e: keyboardKey) => {
    if (e.code === 'Enter' && novaTarefa.titulo !== '') {
      adicionaTarefa();
    };
  };

  const listaTarefasExcluidos = listaExcluida.map((excluidos) => {
    return <li>{excluidos}</li>
  })

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa.titulo}
          onChange={onChangeTarefa}
          onKeyUp={teclaEnter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <h1>PENDENTES</h1>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa.titulo}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
      {/* <h1>CONCLUÍDAS</h1>
      <ul>
        {listaExcluida.map((excluidos) => {
          return (
            <TarefaExcluida>
              <li key={excluidos.id}>{excluidos}</li>
            </TarefaExcluida>
          );
        })}
      </ul> */}
      <LinhaHorizontal />
      <ListaExcluidos listaExcluida={listaExcluida}>
      </ListaExcluidos>
    </ListaTarefasContainer>
  );
};
