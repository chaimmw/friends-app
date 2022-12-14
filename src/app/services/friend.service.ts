import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as friendSelectors from '../friends/friends-store/friends.selectors';
import * as friendActions from '../friends/friends-store/friends.actions';
import { Friend } from '../models/friend.model';
import { map, tap } from 'rxjs';

@Injectable()
export class FriendService {

  allFriends$ = this.store.select(friendSelectors.getAllEntities).pipe(
    map((everybody) => Object.keys(everybody).map((key) => ({
      ...everybody[key],
      id: key
    })))
  );

  getFullyLoaded = this.store.select(friendSelectors.getAllFriendsData);
  getMyFriends = (friendIds: string[]) => this.store.select(friendSelectors.getFriends(friendIds));
  selectedFriend = this.store.select(friendSelectors.getSelectedFriend);
  selectedFriendId = this.store.select(friendSelectors.getSelectedFriendId);


  constructor(private store: Store) {
    this.store.dispatch(friendActions.loadFriendss());


   }

  addFriend(friend: Friend) {
    this.store.dispatch(friendActions.addFriend({ friend }));
  }

  deleteFriend(id: string) {
    this.store.dispatch(friendActions.deleteFriend({ id }));
  }

  editFriend(id: string) {
    this.store.dispatch(friendActions.editFriend({ id }));
  }

  updateFriend(id: string, friend: Friend) {
    const payload = {
      id,
      ...friend
    };

    this.store.dispatch(friendActions.updateFriend({ update: payload}));
  }

}
