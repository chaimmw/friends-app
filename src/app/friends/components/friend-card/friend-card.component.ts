import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventActions, EventActionType, FriendAction } from 'src/app/models/actions.model';
import { FriendViewItem } from 'src/app/models/friend.model';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendCardComponent {

  @Input() friend: any;
  @Output() actionEvent = new EventEmitter<FriendAction>();


  sendAction(friend: FriendViewItem, type: EventActionType) {
    this.actionEvent.emit({
      type,
      friend
    });
  }

}
