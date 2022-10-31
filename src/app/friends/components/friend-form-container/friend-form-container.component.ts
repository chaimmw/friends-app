import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map, Observable, take, tap } from 'rxjs';
import { Friend } from 'src/app/models/friend.model';
import { FriendService } from 'src/app/services/friend.service';

@Component({
  selector: 'app-friend-form-container',
  templateUrl: './friend-form-container.component.html',
  styleUrls: ['./friend-form-container.component.css'],
})
export class FriendFormContainerComponent implements OnInit {
  friends$: Observable<Friend[]>;
  selectedFriend$: Observable<Friend>;
  selectedFriendId$: Observable<string>;
  @Output() actionEnd = new EventEmitter();
  constructor(private friendsService: FriendService) {}

  ngOnInit(): void {
    this.friends$ = this.friendsService.allFriends$.pipe(
      map((buddies) => buddies.map((bud) => bud as Friend))
    );
    this.selectedFriend$ = this.friendsService
      .selectedFriend as Observable<Friend>;
      this.selectedFriendId$ = this.friendsService
      .selectedFriendId as Observable<string>;
  }

  formSubmit(data: any) {
    this.selectedFriendId$
      .pipe(
        take(1),
        tap((id) =>
          id
            ? this.friendsService.updateFriend(id as string, data)
            : this.friendsService.addFriend(data)
        ),
      )
      .subscribe(() => this.actionEnd.emit());
  }
}
