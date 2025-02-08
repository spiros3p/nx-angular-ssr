import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let spec: Spectator<LoginFormComponent>;
  let component: LoginFormComponent;
  const createComponent = createComponentFactory({
    component: LoginFormComponent,
  });

  beforeEach(() => {
    spec = createComponent();
    component = spec.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
