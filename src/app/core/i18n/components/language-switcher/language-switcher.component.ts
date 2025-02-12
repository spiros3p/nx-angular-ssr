import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  private readonly translocoService = inject(TranslocoService);

  readonly availableLanguages = signal(
    this.translocoService.getAvailableLangs(),
  );

  setLanguage(e: any) {
    this.translocoService.setActiveLang(e.target.value);
  }
}
