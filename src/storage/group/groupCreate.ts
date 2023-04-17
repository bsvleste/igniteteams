import AsyncStorage from "@react-native-async-storage/async-storage"
import { GROUP_COLECTION } from "@storage/storageConfig"
import { groupGetAll } from "./gropuGetAll"

export async  function groupCreate(newGroupName:string){
  try {
    const  storedGroups= await groupGetAll()
     await AsyncStorage.setItem(GROUP_COLECTION,JSON.stringify([...storedGroups,newGroupName]))
  } catch (error) {
    throw error
  }
}