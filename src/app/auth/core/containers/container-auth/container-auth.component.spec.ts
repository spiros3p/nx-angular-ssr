import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { ContainerAuthComponent } from './container-auth.component';

describe('ContainerAuthComponent', () => {
  let spec: Spectator<ContainerAuthComponent>;
  let component: ContainerAuthComponent;
  const createComponent = createComponentFactory({
    component: ContainerAuthComponent,
  });

  beforeEach(() => {
    spec = createComponent();
    component = spec.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
