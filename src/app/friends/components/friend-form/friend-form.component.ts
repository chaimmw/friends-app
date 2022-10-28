import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Friend } from 'src/app/models/friend.model';

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendFormComponent implements OnInit {

  @Input() friend: Friend;
  @Input() availableFriends: Friend[] = [];
  @Output() formComplete = new EventEmitter<Friend>();
  friendForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.friendForm = this.formBuilder.group({
      name: [this.friend?.name, [Validators.required]],
      age: [this.friend?.age, [Validators.required, Validators.min(0)]],
      weight: [this.friend?.weight, [Validators.required, Validators.min(0)]],
      friends: []
    });
  }

  submitForm() {
    if (this.friendForm?.valid) {
      const formValues = this.friendForm?.value;

      this.formComplete.emit(formValues);
    }
  }

  checkFieldError(control: string, error: string): boolean {
    return this.friendForm?.get(control)?.hasError(error) ?? false;
  }

  getFieldTouched(control: string): boolean | undefined {
    return this.friendForm?.get(control)?.dirty;
  }

}
