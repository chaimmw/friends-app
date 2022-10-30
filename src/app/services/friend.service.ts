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
  getMyFriends = (friendIds: string[]) => this.store.select(friendSelectors.getFriends(friendIds));


  constructor(private store: Store) {
    this.store.dispatch(friendActions.loadFriendss());


   }

  addFriend(friend: Friend) {
    this.store.dispatch(friendActions.addFriend({ friend }));
  }

  deleteFriend(id: string) {
    this.store.dispatch(friendActions.deleteFriend({ id }))
  }

  updateFriend(id: string, friend: Partial<Friend>) {
    const payload = {
      id,
      changes: friend
    };

    this.store.dispatch(friendActions.updateFriend({ friendUpdate: payload}))
  }

}
