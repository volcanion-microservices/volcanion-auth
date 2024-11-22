import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { KanbanBoardComponent } from './pages/kanban-board/kanban-board.component';
import { ErrorComponent } from './pages/error/error.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
  { path: 'kanban-board', component: KanbanBoardComponent, canActivate: [authGuard] },
  { path: 'error', component: ErrorComponent },
  { path: '**', pathMatch: 'full', component: NotfoundComponent },
];
