import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventActions } from 'src/app/models/actions.model';
import { FriendService } from 'src/app/services/friend.service';
import { FriendServiceStub } from 'src/app/services/friend.service.stub';
import { myFakeFriends } from 'src/assets/friends-data';

import { FriendListComponent } from './friend-list.component';

describe('FriendListComponent', () => {
  let component: FriendListComponent;
  let fixture: ComponentFixture<FriendListComponent>;
  let friendService: FriendService;
  const friends = myFakeFriends;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendListComponent ],
      providers: [ { provide: FriendService, useClass: FriendServiceStub } ]
    })
    .compileComponents();

    friendService = TestBed.inject(FriendService);

    fixture = TestBed.createComponent(FriendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the right action', () => {
    const editSpy = spyOn(friendService, 'editFriend');
    const deleteSpy = spyOn(friendService, 'deleteFriend');
    const listActionSpy = spyOn(component.listAction, 'emit');

    const editAction = {
      type: EventActions.edit,
      friend: friends[0]
    };

    const deleteAction = {
      type: EventActions.delete,
      friend: friends[0]
    };

    component.handleEvent(editAction);

    expect(editSpy).toHaveBeenCalled();
    expect(listActionSpy).toHaveBeenCalled();


    component.handleEvent(deleteAction);

    expect(deleteSpy).toHaveBeenCalled();

  });
});
