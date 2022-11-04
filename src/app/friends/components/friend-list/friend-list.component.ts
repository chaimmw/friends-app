import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EventActions, FriendAction } from 'src/app/models/actions.model';
import { FriendService } from 'src/app/services/friend.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css'],
})
export class FriendListComponent implements OnInit {
  @Output() listAction = new EventEmitter();
  friends$: Observable<any>;
  constructor(private friendService: FriendService) {}

  ngOnInit(): void {
    this.friends$ = this.friendService.getFullyLoaded;
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
