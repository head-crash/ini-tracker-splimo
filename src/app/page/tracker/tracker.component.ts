import { Component, inject } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { CharacterCardComponent } from "../../components/character-card/character-card.component";
import { SceneService } from '../../services/scene.service';
import { AddFabComponent } from '../../components/add-fab/add-fab.component';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-tracker',
  templateUrl: `./tracker.component.html`,
  styles: [],
  standalone: true,
  imports: [CharacterCardComponent, AddFabComponent]
})
export class TrackerComponent {
  navigation = inject(NavigationService);
  scene = inject(SceneService);
}
