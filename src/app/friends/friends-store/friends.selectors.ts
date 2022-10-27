import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFriends from './friends.reducer';

export const selectFriendsState = createFeatureSelector<fromFriends.State>(
  fromFriends.friendsFeatureKey
);
