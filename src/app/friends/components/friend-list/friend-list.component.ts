import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Friend, FriendViewItem } from 'src/app/models/friend.model';
import { FriendService } from 'src/app/services/friend.service';
import { myFakeFriends } from 'src/assets/friends-data';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  friends = myFakeFriends;

  friendWData: FriendViewItem[] | undefined;
  constructor(private friendService: FriendService) { }

  ngOnInit(): void {
    this.friendWData = this.friends.map(friend => this.addFriendViewData(friend));
  }


  addFriendViewData(friend: Friend): FriendViewItem {
    return {
      ...friend,
      friendsNames: ['Larry', 'Barry', 'Joe']
    }
  }
}
