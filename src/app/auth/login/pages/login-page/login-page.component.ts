import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerAuthComponent } from 'src/app/auth/core/containers/container-auth';
import { LoginFormComponent } from '../../components/login-form';

@Component({
  selector: 'app-login-page',
  imports: [ContainerAuthComponent, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {}
