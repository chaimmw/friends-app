import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { myFakeFriends } from 'src/assets/friends-data';

import { FriendFormComponent } from './friend-form.component';

describe('FriendFormComponent', () => {
  let component: FriendFormComponent;
  let fixture: ComponentFixture<FriendFormComponent>;
  const friend = myFakeFriends[0];
  const friends = myFakeFriends;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendFormComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendFormComponent);
    component = fixture.componentInstance;
    component.availableFriends = friends;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form with errors on start', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.friendForm.value).toEqual({
      name: null,
      age: null,
      weight: null,
      friends: null
    });

    const checkNameDirty = component.getFieldTouched('name');
    const checkAgeRequired = component.checkFieldError('age', 'required');
    expect(component.friendForm.valid).toBeFalse();
    expect(checkNameDirty).toBeFalse();
    expect(checkAgeRequired).toBeTrue();
  });

  it('should set errors when there and not submit if button clicked', () => {
    component.friendForm.patchValue({
      name: 'foo',
      age: 78
    });

    fixture.detectChanges();

    const submitSpy = spyOn(component.formComplete, 'emit');
    const checkAgeErrors = component.checkFieldError('age', 'required');
    const checkWeightErrors = component.checkFieldError('weight', 'required');
    expect(component.friendForm.invalid).toBeTrue();
    expect(checkAgeErrors).toBeFalse();
    expect(checkWeightErrors).toBeTrue();
    expect(submitSpy).not.toHaveBeenCalled();
    expect(component.isEdit).toBeFalse();
  });

  it('should set the values of the form to the friend', () => {
    component.friend = friend;

    const submitSpy = spyOn(component.formComplete, 'emit');
    const checkAgeErrors = component.checkFieldError('age', 'required');
    const checkWeightErrors = component.checkFieldError('weight', 'required');

    expect(component.friendForm.value).toEqual(friend);
    expect(component.isEdit).toBeTrue();
    expect(checkAgeErrors).toBeFalse();
    expect(checkWeightErrors).toBeFalse();
    expect(submitSpy).not.toHaveBeenCalled();

    component.submitForm();
    fixture.detectChanges();
    expect(submitSpy).toHaveBeenCalledWith(friend);
    expect(component.isEdit).toBeFalse();
    expect(component.friendForm.value).toEqual({
      name: null,
      age: null,
      weight: null,
      friends: null
    });
  });
});
