import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as friendSelectors from '../friends/friends-store/friends.selectors';

@Injectable()
export class FriendService {

  allFriends$ = friendSelectors.getAllFriends;
  getMyFriends = friendSelectors.getFriends;


  constructor(private store: Store) { }

  addFriend() {

  }

  deleteFriend() {

  }

  updateFriend() {

  }

}
