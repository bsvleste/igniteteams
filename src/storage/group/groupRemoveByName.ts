import AsyncStorage from "@react-native-async-storage/async-storage"
import { groupGetAll } from "./gropuGetAll"
import { GROUP_COLECTION, PLAYER_COLECTION } from "@storage/storageConfig"

export async function groupRemoveByName(groupDeleted:string){
  try {
        const storedGroups = await groupGetAll()
        const groups = storedGroups.filter(groups=>groups !== groupDeleted)
        await AsyncStorage.setItem(`${GROUP_COLECTION}`,JSON.stringify(groups))
        await AsyncStorage.removeItem(`${PLAYER_COLECTION}-${groupDeleted}`)
  } catch (error) {
    throw error
  }
}