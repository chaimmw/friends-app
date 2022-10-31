import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FriendService } from 'src/app/services/friend.service';
import { FriendServiceStub } from 'src/app/services/friend.service.stub';
import { myFakeFriends } from 'src/assets/friends-data';

import { FriendFormContainerComponent } from './friend-form-container.component';

describe('FriendFormContainerComponent', () => {
  let component: FriendFormContainerComponent;
  let fixture: ComponentFixture<FriendFormContainerComponent>;
  const friends = myFakeFriends;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendFormContainerComponent ],
      providers: [ { provide: FriendService, useClass: FriendServiceStub } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when the form completes', () => {

    const actionSpy = spyOn(component.actionEnd, 'emit');
    component.formSubmit(friends[0]);

    expect(actionSpy).toHaveBeenCalledWith();

  });
});
