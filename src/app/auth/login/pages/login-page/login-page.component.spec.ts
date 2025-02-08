import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let spec: Spectator<LoginPageComponent>;
  let component: LoginPageComponent;
  const createComponent = createComponentFactory({
    component: LoginPageComponent,
  });

  beforeEach(() => {
    spec = createComponent();
    component = spec.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
