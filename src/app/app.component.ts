import { Component, ViewEncapsulation, Input } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @Input() controlNameDropdown: any = 'controlNameDropdown';
  @Input() formGroup: UntypedFormGroup;

  constructor() {
    this.formGroup = new UntypedFormBuilder().group({
      name: new UntypedFormControl('Daniel Zamora'),
      phone: new UntypedFormControl(3208765384),
      gender: new UntypedFormControl(),
      country: new UntypedFormControl(),
      address: new UntypedFormControl(),
      city: new UntypedFormControl(),
      destiny: new UntypedFormControl(),
      description: new UntypedFormControl(),
      selection1: new UntypedFormControl(),
      selection2: new UntypedFormControl(),
      range: new UntypedFormControl(),
      state: new UntypedFormControl(),
    });
  }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((val) => {
      console.log(val, this.formGroup);
    });
  }
}
