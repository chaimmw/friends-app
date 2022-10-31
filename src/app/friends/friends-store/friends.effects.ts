import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as FriendsActions from './friends.actions';


@Injectable()
export class FriendsEffects {


  loadFriendss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(FriendsActions.deleteFriend),
      concatMap((action) => of(FriendsActions.removeFriendsFriend({ id: action.id })))
    );
  });


  constructor(private actions$: Actions, private store: Store) {}

}
