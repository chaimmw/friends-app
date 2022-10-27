import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
