import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
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
  selectedFriend$: any;
  constructor(private friendsService: FriendService) { }

  ngOnInit(): void {
    this.friends$ = this.friendsService.allFriends$.pipe(
      map((buddies) => buddies.map((bud) => bud as Friend))
    );
    this.selectedFriend$ = this.friendsService.selectedFriend;
  }

  formSubmit(data: any) {
    if (this.selectedFriend) {
      this.friendsService.updateFriend(this.selectedFriend, data);
    } else {
      this.friendsService.addFriend(data);
    }
  }

}
