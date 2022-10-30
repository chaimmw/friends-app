import { Update } from '@ngrx/entity';
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
  '[Friends] Update Friend',
  props<{ id: string }>()
);

export const updateFriend = createAction(
  '[Friends] Update Friend',
  props<{ friendUpdate: Update<Friend> }>()
);




