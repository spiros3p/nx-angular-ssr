import { TranslocoHttpLoader } from './transloco.loader';

export const i18nOptions = (isDevMode: boolean) => ({
  config: {
    availableLangs: ['en', 'el'],
    defaultLang: 'en',
    reRenderOnLangChange: true,
    prodMode: !isDevMode,
  },
  loader: TranslocoHttpLoader,
});
