import { IUniversity } from "../interfaces/IUniversity";
import api from "./api";

const getAll = async () => {
 return (await api.get<IUniversity[]>('/search?')).data
}

const searchName = async (searchName : string) => {
  let name = new URLSearchParams(`/search?country=brazil&name=${searchName}`).toString();
  return (await api.get<IUniversity[]>(name)).data
 }

const UniversitiesService = {
    getAll,
    searchName
  };
  
  export default UniversitiesService;