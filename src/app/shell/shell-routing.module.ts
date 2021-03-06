import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormGuard } from '../guards/form.guard';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'create-course',
        loadChildren: () =>
          import('../create-course/create-course.module').then(
            (m) => m.CreateCourseModule
          ),
      },
      {
        path: 'course/:id',
        loadChildren: () =>
          import('../course/course.module').then((m) => m.CourseModule),
      },
      {
        path: 'play-course',
        loadChildren: () =>
          import('../play-course/play-course.module').then(
            (m) => m.PlayCourseModule
          ),
      },
      {
        path: 'user/:creatorId',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'settings/:creatorId',
        loadChildren: () =>
          import('../settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'privacy',
        loadChildren: () =>
          import('../privacy/privacy.module').then((m) => m.PrivacyModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
