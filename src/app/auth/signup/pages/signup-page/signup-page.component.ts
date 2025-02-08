import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerAuthComponent } from 'src/app/auth/core/containers/container-auth';
import { SignupFormComponent } from '../../components/signup-form';

@Component({
  selector: 'app-signup-page',
  imports: [ContainerAuthComponent, SignupFormComponent],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPageComponent {}
