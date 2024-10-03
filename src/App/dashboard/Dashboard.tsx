import { useCallback, useEffect, useState } from 'react'
import { ITarefa, TerefaService } from '../../shared/service/api/tarefas/TerefaService';
import { ApiExeception } from '../../shared/service/api/ErroExeception';


export default function Dashboard() {
  //listas
  const [lista, setLista] = useState<ITarefa[]>([]);

  // todos dados do api
  useEffect(() => {
    TerefaService.getAll()
      .then((result) => {
        if (result instanceof ApiExeception) {
          alert(result.message)
        }
        else {

          setLista(result);
        }
      })
  }, [])

  const handleInputKeyDow: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {

    if (e.key === 'Enter') {
      if (e.currentTarget.value.trim().length === 0) return

      //fazer react emtender que houve uma alteracao
      const value = e.currentTarget.value;

      e.currentTarget.value = '';

      //verficao de adiconamos dados na lista
      //if se algum intem da lsita tiver intem igual canselamos
      if (lista.some((listItem) => listItem.title === value)) return;
      //create  metedos dpar a mandar dados a banco de dados

      TerefaService.create({ title: value, isCompleted: false })
        .then((result) => {
          // trata caso de excessao do create 
          if (result instanceof ApiExeception) {
            alert(result.message)
          } else {
            setLista((oldLista) => [
              ...oldLista,
              result
            ]);
          }
          // console.log({result});

        })


    }
  }, [lista]);


  const handleToggleComplete = useCallback((id: number) => {
    const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id)
    if (!tarefaToUpdate) return;
    TerefaService.updateByID(id, {
      ...tarefaToUpdate,
      isCompleted: !tarefaToUpdate.isCompleted,
    })
      .then((result) => {
        if (result instanceof ApiExeception) {
          alert(result.message)
        } else {
          setLista(oldLista => {

            //so iremos retornar inoformcao quando ID for  ifual a id do parametro
            return oldLista.map(oldListItem => {
              if (oldListItem.id === id) return result;
              // /verficar se  tarefa actual e igual a tarefa que queremos carregar
              return {
                ...oldListItem
              }
            })
          })
        }
      });
  }, [lista])



  const handleDelete = useCallback((id: number) => {
    TerefaService.deleteByID(id)
      .then((result) => {
        if (result instanceof ApiExeception) {
          alert(result.message)
        } else {
          setLista(oldLista => {
            //remove is state
            return oldLista.filter(oldListItem => oldListItem.id !==id)
          })
        }
      });
  },[])


  // const counteref = useRef({ counter: 0 })

  // const usuarioLogadoContext = useUsuarioLogado(); //partilhr informaoes entre os componnts


  return (
    <div>
      <h1>Dashboard</h1>
      {/* map e como se dosse um foraceah preocre todo arry */}

      <input
        onKeyDown={handleInputKeyDow}
      />

      {/* //numero de istens selecionados */}
      <p>{lista.filter((listItem) => listItem.isCompleted).length}</p>

      <ul>
        {lista.map((listItem) => {
          // return <li key={listItem.tit}></li>
          return <li key={listItem.id}>
            <input type="checkbox"
              onChange={() =>
                handleToggleComplete(listItem.id)
              } />
            {listItem.title}


            <button onClick={()=> handleDelete(listItem.id)}>Apagar</button>
          </li>
        })}
      </ul>
      {/* {lista.map((item, index) => {
        // return <p key={index}>{item}</p>
        return <li>{item}</li>
      })} */}
    </div>
  )
}
