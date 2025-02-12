import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { LanguageSwitcherComponent } from './language-switcher.component';

describe('LanguageSwitcherComponent', () => {
  let spec: Spectator<LanguageSwitcherComponent>;
  let component: LanguageSwitcherComponent;
  const createComponent = createComponentFactory({
    component: LanguageSwitcherComponent,
  });

  beforeEach(() => {
    spec = createComponent();
    component = spec.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
