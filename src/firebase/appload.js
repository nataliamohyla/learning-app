import { ref, set } from "firebase/database";
import { database } from "./config";
import teachers from "./teachers.json";


export const appLoad = async () => {
  await set(ref(database, "teachers"), teachers);
  console.log("Teachers uploaded");
};  
//завантаження json в firebase, викликається в App.jsx при натисканні кнопки