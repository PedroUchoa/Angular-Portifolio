import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: 'Estágiario em TI',
        p: 'IFCE | Jul 2017 - Dez 2017',
      },
      text: '<p>Estagiário no Instituto Federal responsável pelo desenvolvimento e manutenção de redes de computadores e desenvolvimento de software.</p>',
    },
    {
      summary: {
        strong: 'Estágiario em TI',
        p: 'IFCE | Jul 2017 - Dez 2017',
      },
      text: '<p>Estagiário no Instituto Federal responsável pelo desenvolvimento e manutenção de redes de computadores e desenvolvimento de software.</p>',
    },
  ])
}
