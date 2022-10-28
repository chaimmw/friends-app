import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendFormComponent } from './components/friend-form/friend-form.component';
import { FriendCardComponent } from './components/friend-card/friend-card.component';
import { FriendFormContainerComponent } from './components/friend-form-container/friend-form-container.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';

import { StoreModule } from '@ngrx/store';
import * as fromFriends from './friends-store/friends.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FriendsEffects } from './friends-store/friends.effects';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

import { FriendService } from '../services/friend.service';



@NgModule({
  declarations: [
    FriendFormComponent,
    FriendCardComponent,
    FriendFormContainerComponent,
    FriendListComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatDividerModule,


    StoreModule.forFeature(fromFriends.friendsFeatureKey, fromFriends.reducer),
    EffectsModule.forFeature([FriendsEffects])
  ],
  exports: [FriendListComponent],
  providers: [FriendService]
})
export class FriendsModule { }
