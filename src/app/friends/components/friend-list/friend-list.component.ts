import { Component, OnInit } from '@angular/core';
import { forkJoin, map, Observable, of, switchMap, take } from 'rxjs';
import { Friend, FriendViewItem } from 'src/app/models/friend.model';
import { FriendService } from 'src/app/services/friend.service';
import { myFakeFriends } from 'src/assets/friends-data';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css'],
})
export class FriendListComponent implements OnInit {
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
                friendsNames: myBuddies.map((pal) => pal?.name),
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
}
