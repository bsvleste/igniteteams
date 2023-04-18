import AsyncStorage from "@react-native-async-storage/async-storage"
import { GROUP_COLECTION } from "@storage/storageConfig"
import { groupGetAll } from "./gropuGetAll"
import { AppError } from "@utils/AppError"

export async  function groupCreate(newGroupName:string){
  try {
    const  storedGroups= await groupGetAll()
    const groupAlreadyExists = storedGroups.includes(newGroupName)
    if(groupAlreadyExists){
      throw new AppError("Este grupo ja existe! Tente outro nome")
    }
     await AsyncStorage.setItem(GROUP_COLECTION,JSON.stringify([...storedGroups,newGroupName]))
  } catch (error) {
    throw error
  }
}