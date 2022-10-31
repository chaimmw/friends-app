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

  @Input() set friend(frnd: Friend | null) {
    this.buildForm();
    if (frnd) {
      setTimeout(() => {
        this.friendForm.patchValue(frnd);
        this.isEdit = true;
      });
      this.availableFriends = this.availableFriends.filter((pal) => pal.name !== frnd.name)
    }
  };
  @Input() availableFriends: Friend[] = [];
  @Output() formComplete = new EventEmitter<Friend>();
  friendForm: FormGroup;
  isEdit = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.friendForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required, Validators.min(0)]],
      weight: [null, [Validators.required, Validators.min(0)]],
      friends: []
    });
  }

  submitForm() {
    if (this.friendForm?.valid) {
      const formValues = this.friendForm?.value;

      this.formComplete.emit(formValues);
      this.friendForm.reset();
      this.isEdit = false;
    }
  }

  checkFieldError(control: string, error: string): boolean {
    return this.friendForm?.get(control)?.hasError(error) ?? false;
  }

  getFieldTouched(control: string): boolean | undefined {
    return this.friendForm?.get(control)?.dirty;
  }

}
