import { Component, Input, OnChanges, OnInit, ngDoCheck } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, ngDoCheck {

  @Input() public title: string = 'menuProject';

  ngOnInit(): void {
    setTimeout(() => {
      alert("Teste ngOnInit with timeout");
    }, 5000);
  }

 //Sempre é ativado quando recebe um dado de fora
  ngOnChanges(): void {
    console.log("Sempre é ativado quando recebe um dado de fora");
  }

    ngDoCheck(): void {}

}
