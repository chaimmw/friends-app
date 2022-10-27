import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
