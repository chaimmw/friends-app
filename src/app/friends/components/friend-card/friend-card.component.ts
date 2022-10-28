import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventActions, FriendAction } from 'src/app/models/actions.model';
import { FriendViewItem } from 'src/app/models/friend.model';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendCardComponent implements OnInit {

  @Input() friend: FriendViewItem | undefined;
  @Output() actionEvent = new EventEmitter<FriendAction>();

  constructor() { }

  ngOnInit(): void {
  }

  editFriend(friend: FriendViewItem): void {
    const action: FriendAction = {
      friend,
      type: EventActions.edit
    };

    this.actionEvent.emit(action);

  }

  deleteFriend(friend: FriendViewItem): void {
    const action: FriendAction = {
      friend,
      type: EventActions.delete
    };

    this.actionEvent.emit(action);
  }

}
