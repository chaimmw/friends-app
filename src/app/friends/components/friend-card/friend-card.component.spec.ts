import { ComponentFixture, TestBed } from '@angular/core/testing';
import { myFakeFriends } from 'src/assets/friends-data';

import { FriendCardComponent } from './friend-card.component';

describe('FriendCardComponent', () => {
  let component: FriendCardComponent;
  let fixture: ComponentFixture<FriendCardComponent>;
  const friend = {...myFakeFriends[0], friendsNames: []};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when an action is called', () => {
    const eventSpy = spyOn(component.actionEvent, 'emit')
    component.sendAction(friend, 'edit');

    expect(eventSpy).toHaveBeenCalledWith({ type: 'edit', friend })

  })
});
