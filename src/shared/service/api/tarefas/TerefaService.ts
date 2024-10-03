import { ApiExeception } from "../ErroExeception";
import { Api } from "../ApiConfig";

export interface ITarefa {
    id:number;
    title: string;
    isCompleted: boolean;
  }
  
const getAll =async(): Promise<ITarefa[] | ApiExeception> => {
    try {
        const {data}= await Api().get('/tarefas');
        return data;
    } catch (error:any) {
        return new ApiExeception(error.message || "Erro ao  uscar os registros");
    }
    
};


const getById=async(id:number): Promise<ITarefa[] | ApiExeception> => {
    try {
        const {data}= await Api().get(`/tarefas/${id}`);
        return data;
    } catch (error:any) {
        return new ApiExeception(error.message || "Erro ao  consultar api");
    }
    
};

//arry e so get all
//Nao recebe ID 
//omit omite id
//dataToCreate e apenas para receber dados do title  iscomplete e omit ID
const create =async(dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa| ApiExeception> => {
    try {
        const {data}= await Api().post('/tarefas', JSON.stringify(dataToCreate));
        return data as ITarefa;
    } catch (error:any) {
        return new ApiExeception(error.message || "Erro ao  consultar o registro");
    }
    
}

const updateByID =async(id: number, dataToUpdate: ITarefa): Promise<ITarefa | ApiExeception> => {
    try {
        const {data}= await Api().put(`/tarefas/${id}`, dataToUpdate);
        return data;
    } catch (error:any) {
        return new ApiExeception(error.message || "Erro ao  atualizar registro registro");
    }
    
}


const deleteByID  =async(id: number): Promise<ITarefa[] | ApiExeception> => {
    try {
        const {data}= await Api().delete(`/tarefas/${id}`);
        return data;
    } catch (error:any) {
        return new ApiExeception(error.message || "Erro ao  consultar api");
    }
    
}
const getOne  =async(id:number): Promise<undefined | ApiExeception> => {
    try {
        await Api().delete(`/tarefas/${id}`)
        return undefined;
    } catch (error:any) {
        return new ApiExeception(error.message || "Erro ao  consultar api");
    }
    
}

export const TerefaService ={
    getAll,
    getById,
    create,
    updateByID,
    deleteByID,
    getOne

};
