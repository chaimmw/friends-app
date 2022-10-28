import { Friend } from "./friend.model";


export type EventActionType = 'edit' | 'delete' | 'add';


export enum EventActions {
  edit = 'edit',
  delete = 'delete',
  add = 'add'
}

export interface FriendAction {
  type: EventActionType,
  friend: Friend
}
