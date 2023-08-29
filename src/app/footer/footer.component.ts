import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  myName: string = 'khaled'
  imgSrc:string= "https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
  test:string ='khaled'
  test1:number=5
  arr:Array<string>=['k','m','A','s']
  sayHello(){
    alert(`hello${this.myName}`)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
