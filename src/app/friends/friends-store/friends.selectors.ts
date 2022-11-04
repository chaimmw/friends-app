import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFriends from './friends.reducer';

export const selectFriendsState = createFeatureSelector<fromFriends.State>(
  fromFriends.friendsFeatureKey
);

const { selectAll, selectEntities } = fromFriends.adapter.getSelectors();

export const allFriends = selectAll;

export const getAllFriends = createSelector(
  selectFriendsState,
  allFriends
);

export const getFriends = (friendIds: string[]) =>
  createSelector(selectFriendsState, (state) =>
    friendIds.map((id) => state.entities[id])
  );

export const getAllFriendsData = createSelector(
  selectFriendsState,
  (state) => state.ids.map((friendId) => {
    const buddy = state.entities[friendId];

    const friendsNames = buddy?.friends.map((id) => state.entities[id]?.name);
    return {
      ...buddy,
      friendsNames
    }
  }));

export const getFriend = (id: string) =>
  createSelector(selectFriendsState, (state) => state.entities[id]);

export const getAllEntities = createSelector(
  selectFriendsState,
  selectEntities
);

export const getSelectedFriendId = createSelector(selectFriendsState, (state) => state.selectedId);
export const getSelectedFriend = createSelector(selectFriendsState, (state) => state.selectedId ? state.entities[state.selectedId] : null);

