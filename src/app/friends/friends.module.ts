import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendFormComponent } from './components/friend-form/friend-form.component';
import { FriendCardComponent } from './components/friend-card/friend-card.component';
import { FriendFormContainerComponent } from './components/friend-form-container/friend-form-container.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';

import { StoreModule } from '@ngrx/store';
import * as fromFriends from './friends-store/friends.reducer';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FriendService } from '../services/friend.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';



@NgModule({
  declarations: [
    FriendFormComponent,
    FriendCardComponent,
    FriendFormContainerComponent,
    FriendListComponent,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatDividerModule,
    BrowserAnimationsModule,


    StoreModule.forFeature(fromFriends.friendsFeatureKey, fromFriends.reducer)
  ],
  exports: [FriendListComponent, FriendFormContainerComponent, BarChartComponent],
  providers: [FriendService]
})
export class FriendsModule { }
