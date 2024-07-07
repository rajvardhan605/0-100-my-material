import {atom} from "recoil";

export const todos = atom({
  key: 'todos',
  default : []
})

export const todoKey = atom({
  key: 'todoKey',
  default : 0
})

export const search = atom({
  key: 'search',
  default : ''
})