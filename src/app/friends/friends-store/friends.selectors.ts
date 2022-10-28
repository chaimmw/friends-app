import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFriends from './friends.reducer';

export const selectFriendsState = createFeatureSelector<fromFriends.State>(
  fromFriends.friendsFeatureKey
);

const { selectAll } = fromFriends.adapter.getSelectors();

export const allFriends = selectAll;

export const getAllFriends = createSelector(
  selectFriendsState,
  allFriends
);

export const getFriends = (friendIds: number[]) =>
  createSelector(selectFriendsState, (state) =>
    friendIds.map((id) => state.entities[id])
  );

export const getFriend = (id: number) =>
  createSelector(selectFriendsState, (state) => state.entities[id]);
