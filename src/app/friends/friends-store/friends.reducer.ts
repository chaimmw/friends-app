import { Action, createReducer, on } from '@ngrx/store';
import * as FriendsActions from './friends.actions';

export const friendsFeatureKey = 'friends';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(FriendsActions.loadFriendss, state => state),

);
