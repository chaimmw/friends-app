import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendFormComponent } from './components/friend-form/friend-form.component';
import { FriendCardComponent } from './components/friend-card/friend-card.component';
import { FriendFormContainerComponent } from './components/friend-form-container/friend-form-container.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';



@NgModule({
  declarations: [
    FriendFormComponent,
    FriendCardComponent,
    FriendFormContainerComponent,
    FriendListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FriendsModule { }
