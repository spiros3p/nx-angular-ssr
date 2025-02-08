import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-container-auth',
  imports: [],
  template: `
    <div
      class="flex align-items-center justify-content-center h-screen surface-ground p-3">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerAuthComponent {}
