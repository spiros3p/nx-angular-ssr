import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  imports: [CommonModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupFormComponent {}
