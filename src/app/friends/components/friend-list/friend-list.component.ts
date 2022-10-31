import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { forkJoin, map, Observable, of, switchMap, take } from 'rxjs';
import { EventActions, FriendAction } from 'src/app/models/actions.model';
import { Friend, FriendViewItem } from 'src/app/models/friend.model';
import { FriendService } from 'src/app/services/friend.service';
import { myFakeFriends } from 'src/assets/friends-data';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css'],
})
export class FriendListComponent implements OnInit {
  @Output() listAction = new EventEmitter();
  friends = myFakeFriends;
  friends$: Observable<any>;

  friendWData: FriendViewItem[];
  constructor(private friendService: FriendService) {}

  ngOnInit(): void {
    this.friends$ = this.friendService.allFriends$.pipe(
      switchMap((buddies) => {
        const getFriendData = buddies.map((buddy) => {
          const myBud = buddy as Friend;
          if (myBud.friends?.length > 0) {
            return this.friendService.getMyFriends(myBud.friends).pipe(
              take(1),
              map((myBuddies) => ({
                ...myBud,
                // just to check that they were not deleted
                // until we can do that in the reducer
                friendsNames: myBuddies.map((pal) => pal?.name).filter((pal) => !!pal),
              }))
            );
          } else {
            return of({
              ...myBud,
              friendsNames: [],
            });
          }
        });

        return forkJoin(getFriendData);
      })
    );
  }

  handleEvent(cardAction: FriendAction) {
    if (cardAction.type === EventActions.edit) {
      this.friendService.editFriend(cardAction.friend.id as string);
      this.listAction.emit();
    } else if (cardAction.type === EventActions.delete){
      this.friendService.deleteFriend(cardAction.friend.id as string);
    }
  }
}
