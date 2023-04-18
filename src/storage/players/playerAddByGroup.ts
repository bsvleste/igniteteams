import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLECTION } from '@storage/storageConfig';
import { PlayerStorageDTO } from './playerStorageDTO'
import { playerGetByGroup } from './playersGetByGroup';
import { AppError } from '@utils/AppError';

export async function playerAddByGroup(newPlayer:PlayerStorageDTO,group:string){
  try {
    const storedPlayers = await playerGetByGroup(group)
    const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name);
    if(playerAlreadyExists.length > 0){
        throw new AppError("Jogador ja cadastrado")
    }
    const storage = JSON.stringify([...storedPlayers,newPlayer])
    await AsyncStorage.setItem(`${PLAYER_COLECTION}-${group}`,storage)
  } catch (error) {
      throw error
  }

}