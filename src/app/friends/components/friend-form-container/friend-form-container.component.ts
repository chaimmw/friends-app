import { Component, OnInit } from '@angular/core';
import { map, Observable, take, tap } from 'rxjs';
import { Friend } from 'src/app/models/friend.model';
import { FriendService } from 'src/app/services/friend.service';

@Component({
  selector: 'app-friend-form-container',
  templateUrl: './friend-form-container.component.html',
  styleUrls: ['./friend-form-container.component.css']
})
export class FriendFormContainerComponent implements OnInit {

  friends$: Observable<Friend[]>;
  selectedFriend: any;
  selectedFriend$: Observable<Friend>;
  constructor(private friendsService: FriendService) { }

  ngOnInit(): void {
    this.friends$ = this.friendsService.allFriends$.pipe(
      map((buddies) => buddies.map((bud) => bud as Friend))
    );
    this.selectedFriend$ = this.friendsService.selectedFriend as Observable<Friend>;
  }

  formSubmit(data: any) {
    this.selectedFriend$.pipe(
      tap((frnd) => frnd ? this.friendsService.updateFriend(frnd.id as string, data) : this.friendsService.addFriend(data)),
      take(1)
    ).subscribe();
  }

}
