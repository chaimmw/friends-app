import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Friend } from 'src/app/models/friend.model';
import { myFakeFriends } from 'src/assets/friends-data';
import * as FriendsActions from './friends.actions';

export const friendsFeatureKey = 'friends';

export interface State extends EntityState<Friend> {
  friends: Friend[];
  selectedId: string | null;
}

export const adapter: EntityAdapter<Friend> = createEntityAdapter<Friend>({
  selectId: selectUserId
});

export function selectUserId(f: Friend): string {
  return f.name + f.age;
}

export const initialState: State = adapter.getInitialState({ friends: [], selectedId: null });

export const reducer = createReducer(
  initialState,
  on(FriendsActions.loadFriendss, state => adapter.addMany(myFakeFriends, state)),
  on(FriendsActions.addFriend, (state, { friend }) => adapter.addOne(friend, state)),
  on(FriendsActions.updateFriend, (state, { update }) => adapter.updateOne({id: update.id as string, changes: update}, { ...state, selectedId: null})),
  on(FriendsActions.deleteFriend, (state, { id }) => adapter.removeOne(id, state)),
  on(FriendsActions.editFriend, (state, { id }) => ({ ...state, selectedId: id})),
  on(FriendsActions.removeFriendsFriend, (state, { id }) => adapter.map((entity) => ({
    ...entity,
    friends: entity.friends.filter((pal) => id !== pal)
  }), state)
));
