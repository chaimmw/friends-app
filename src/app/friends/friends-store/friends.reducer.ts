import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Friend } from 'src/app/models/friend.model';
import { myFakeFriends } from 'src/assets/friends-data';
import * as FriendsActions from './friends.actions';

export const friendsFeatureKey = 'friends';

export interface State extends EntityState<Friend> {
  friends: Friend[];
}

export const adapter: EntityAdapter<Friend> = createEntityAdapter<Friend>({
  selectId: selectUserId
});

export function selectUserId(f: Friend): string {
  //In this case this would be optional since primary key is id
  return f.name + f.age;
}

export const initialState: State = adapter.getInitialState({ friends: [] });

export const reducer = createReducer(
  initialState,
  on(FriendsActions.loadFriendss, state => adapter.addMany(myFakeFriends, state)),
  on(FriendsActions.addFriend, (state, { friend }) => adapter.addOne(friend, state)),
  on(FriendsActions.updateFriend, (state, { friendUpdate }) => adapter.updateOne(friendUpdate, state)),
  on(FriendsActions.deleteFriend, (state, { id }) => adapter.removeOne(id, state)),
);
