import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon'
})
export class IconPipe implements PipeTransform {
  transform(value: string): string {
    const icons: { [key: string]: string } = {
      dashboard: 'fa-solid fa-chart-line',
      administrador: 'fa-solid fa-user-tie',
      profesor: 'fa-solid fa-chalkboard-teacher',
      user: 'fa-solid fa-user',
      'user-list': 'fa-solid fa-users',
      materia: 'fa-solid fa-book',
      modulo: 'fa-solid fa-cubes',
      carrera: 'fa-solid fa-graduation-cap',
      gestion: 'fa-solid fa-calendar-alt',
    };
    return icons[value] || 'fa-solid fa-question'; // Icono por defecto
  }
}
