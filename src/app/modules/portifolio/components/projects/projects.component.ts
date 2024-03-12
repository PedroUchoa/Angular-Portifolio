import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.Interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enums/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: "Vida FullStack",
      width: '100px',
      height: '51px',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut nec metus vestibulum risus interdum pharetra.Sed eget lacus porta, interdum purus in, dictum erat.Praesent fringilla ligula vitae euismod semper.Proin ullamcorper sapien in libero vulputate, quis congue massa pulvinar.Proin non justo mauris.Ut sodales rhoncus finibus.Ut ornare, dolor id dapibus finibus, enim felis euismod odio, a mattis ligula nulla id arcu.',
    links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com',
        },
    ]
  },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: "Vida FullStack",
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com',
        },
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: "Vida FullStack",
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com',
        },
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: "Vida FullStack",
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com',
        },
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: "Vida FullStack",
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com',
        },
      ]
    }
  ])


  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }

}
