import { AfterViewChecked, Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  description: string = '';
  name: string = '';
  validate: boolean = false;
  titleAlert: string = 'This field is required';

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : ''
    });

  }
  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }
  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(

      (validate) => {
        console.log('check validate...');

        if (validate === true) {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();

      });
  }
}
