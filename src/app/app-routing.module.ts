import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudComponent } from './cloud/cloud.component';
import { EventsComponent } from './events/events.component';
import { HireComponent } from './hire/hire.component';
import { HomeComponent } from './home/home.component';
import { ProgComponent } from './prog/prog.component';
import { TeamComponent } from './team/team.component';
import { TestComponent } from './test/test.component';
import { TListComponent } from './tlist/tlist.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '',
      component: HomeComponent,
      data: { animationState: 'One' }
      },
      {path: 'Events/GoogleCloud', 
      component: EventsComponent,
      data: { animationState: 'one' },
      children: [
        
      ]
      },
      {
        path: 'prog_tools',
        component: ProgComponent
      },
      {path: 'Team', 
      component: TeamComponent,
      data: { animationState: 'Two' },
      },
      {path: 'Roles', 
      component: HireComponent,
      },
      {path: 'Test', 
      component: TestComponent,
      },
      {
				path: '**',
				redirectTo: ''
			}
    ]
  },
  {
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
