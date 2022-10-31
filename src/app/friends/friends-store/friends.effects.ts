import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

import * as FriendsActions from './friends.actions';


@Injectable()
export class FriendsEffects {


  loadFriendss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(FriendsActions.deleteFriend),
      tap((action) => {
        this.store.dispatch(FriendsActions.removeFriendsFriend({ id: action.id }))
      }),
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });


  constructor(private actions$: Actions, private store: Store) {}

}
