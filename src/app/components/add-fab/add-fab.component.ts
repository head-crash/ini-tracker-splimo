import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-add-fab',
  imports: [NgClass],
  templateUrl: './add-fab.component.html',
})
export class AddFabComponent {
  onAdd = output();
  classes = input<string | string[]>();
}
