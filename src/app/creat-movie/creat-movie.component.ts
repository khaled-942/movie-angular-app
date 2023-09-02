import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creat-movie',
  templateUrl: './creat-movie.component.html',
  styleUrls: ['./creat-movie.component.scss'],
})
export class CreatMovieComponent implements OnInit {
  moviesReactiveForm: FormGroup | any;
  constructor(private fb: FormBuilder) {}

  submitMovie(values: any) {
    console.log(values);
  }

  reactiveSubmit() {
    console.log(this.moviesReactiveForm.controls.movieReactiveName)
  }
  get controls(){
    return this.moviesReactiveForm.controls;
  }
  ngOnInit(): void {
    this.moviesReactiveForm = this.fb.group({
      movieReactiveName:[null,[Validators.required,Validators.minLength(3)]]
    })
    // this.moviesReactiveForm = new FormGroup({
    //   movieReactiveName: new FormControl(null, [Validators.required]),
    // });
  }
}
