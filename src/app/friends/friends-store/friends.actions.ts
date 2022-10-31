import { createAction, props } from '@ngrx/store';
import { Friend } from 'src/app/models/friend.model';

export const loadFriendss = createAction(
  '[Friends] Load Friendss'
);

export const addFriend = createAction(
  '[Friends] Add Friend',
  props<{ friend: Friend }>()
);

export const deleteFriend = createAction(
  '[Friends] Delete Friend',
  props<{ id: string }>()
);


export const editFriend = createAction(
  '[Friends] Edit Friend',
  props<{ id: string }>()
);

export const updateFriend = createAction(
  '[Friends] Update Friend',
  props<{ update: Friend }>()
);


export const removeFriendsFriend = createAction(
  '[Friends] Remove Friend from Friends',
  props<{ id: string }>()
);




