import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../shared/components/layout/sidebar/sidebar.component';
import { NavegacionComponent } from '../../shared/components/layout/navegacion/navegacion.component';
import { BreadcrumbComponent } from '../../shared/components/layout/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, SidebarComponent, NavegacionComponent, BreadcrumbComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {

}
