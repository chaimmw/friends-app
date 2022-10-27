import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendFormContainerComponent } from './friend-form-container.component';

describe('FriendFormContainerComponent', () => {
  let component: FriendFormContainerComponent;
  let fixture: ComponentFixture<FriendFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendFormContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
