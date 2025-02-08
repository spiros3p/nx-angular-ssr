import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { SignupPageComponent } from './signup-page.component';

describe('SignupPageComponent', () => {
  let spec: Spectator<SignupPageComponent>;
  let component: SignupPageComponent;
  const createComponent = createComponentFactory({
    component: SignupPageComponent,
  });

  beforeEach(() => {
    spec = createComponent();
    component = spec.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
