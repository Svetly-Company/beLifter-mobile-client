import { create } from "zustand";
import { IAlimento } from "../../app/alimentos";


interface userProps{
  id: number,
  name: string
  email: string,
  exp: number,
  iat: number,
  token: string,
  profilePicture: string
}

type userStore = {
  user: userProps,
  setUser: (item : any) => void
}

type alimentoStore = {
  cafe: IAlimento[],
  almoco: IAlimento[],
  janta: IAlimento[],
  addCafe: (item : IAlimento) => void,
  removeCafe: (name : string) => void,
  removeAlmoco: (name : string) => void,
  removeJanta: (name : string) => void
}

export const alimentosStorage = create<alimentoStore>((set) => ({
  cafe: [],
  almoco: [
    { name: "Arroz", weight: 500, kcal: 400 },
    { name: "Feijão", kcal: 200, weight: 400 },
    { name: "Filé de frango", weight: 200, kcal: 200 },
  ],
  janta: [
    { name: "Cuscuz", kcal: 300, weight: 200 },
    { name: "Picanha", kcal: 600, weight: 150 },
  ],
  addCafe: (item) => set((state) => ({ cafe: [...state.cafe, item] })),
  removeCafe: (name) => set((state) => ({ cafe: state.cafe.filter(i => i.name != name) })),
  removeAlmoco: (name) => set((state) => ({ almoco: state.almoco.filter(i => i.name != name) })),
  removeJanta: (name) => set((state) => ({ janta: state.janta.filter(i => i.name != name) }))

}));

export const userStorage = create<userStore>((set) => ({
  user: { 
    id: 0,
    name: '',
    email: '',
    exp: 0,
    iat: 0,
    token: '',
    profilePicture: ''
  },
  setUser: (item) => set((state) => ({user: {...item}}))
  
}))