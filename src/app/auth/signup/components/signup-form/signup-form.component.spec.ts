import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { SignupFormComponent } from './signup-form.component';

describe('SignupFormComponent', () => {
  let spec: Spectator<SignupFormComponent>;
  let component: SignupFormComponent;
  const createComponent = createComponentFactory({
    component: SignupFormComponent,
  });

  beforeEach(() => {
    spec = createComponent();
    component = spec.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
