import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Friend } from 'src/app/models/friend.model';
import * as FriendsActions from './friends.actions';

export const friendsFeatureKey = 'friends';

export interface State extends EntityState<Friend> {
  friends: Friend[];
}

export const adapter: EntityAdapter<Friend> = createEntityAdapter<Friend>();

export const initialState: State = adapter.getInitialState({ friends: [] });

export const reducer = createReducer(
  initialState,
  on(FriendsActions.loadFriendss, state => state),
  on(FriendsActions.addFriend, (state, { friend }) => adapter.addOne(friend, state)),
  on(FriendsActions.updateFriend, (state, { friendUpdate }) => adapter.updateOne(friendUpdate, state)),
  on(FriendsActions.deleteFriend, (state, { id }) => adapter.removeOne(id, state)),
);
