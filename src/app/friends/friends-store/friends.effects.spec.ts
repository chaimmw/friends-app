import { fakeAsync, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';

import { FriendsEffects } from './friends.effects';
import * as friendsActions from './friends.actions';

describe('FriendsEffects', () => {
  let actions$: Observable<any>;
  let effects: FriendsEffects;
  actions$ = of({ type: friendsActions.deleteFriend.type, id: 'bob' })

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FriendsEffects,
        provideMockStore(),
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FriendsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should call the proper action on delete', fakeAsync(() => {
    effects.loadFriendss$.subscribe((action) => {
      expect(action).toEqual({
        type: friendsActions.removeFriendsFriend.type,
        id: 'bob'
      });
    });
  }));
});
