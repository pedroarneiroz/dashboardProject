import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-root',
  template: `<app-menu></app-menu> 
            <router-outlet></router-outlet> 
              
            `
})
export class AppComponent {}
