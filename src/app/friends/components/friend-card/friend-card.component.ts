import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FriendViewItem } from 'src/app/models/friend.model';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendCardComponent implements OnInit {

  @Input() friend: FriendViewItem | undefined;
  @Output() actionEvent = new EventEmitter<{ type: 'edit' | 'delete', friend: FriendViewItem}>();

  constructor() { }

  ngOnInit(): void {
  }

  editFriend(friend: FriendViewItem) {
    const action = {
      friend,
      type: 'edit'
    };

    this.actionEvent.emit(action);

  }

  deleteFriend(friend: FriendViewItem) {
    const action = {
      friend,
      type: 'delete'
    };

    this.actionEvent.emit(action);
  }

}
