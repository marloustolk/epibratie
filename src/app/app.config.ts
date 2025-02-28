import { ApplicationConfig } from '@angular/core';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

const MyPreset = definePreset(Aura, {
  semantic: {
      primary: {
          50: '{teal.50}',
          100: '{teal.100}',
          200: '{teal.200}',
          300: '{teal.300}',
          400: '{teal.400}',
          500: '{teal.500}',
          600: '{teal.600}',
          700: '{teal.700}',
          800: '{teal.800}',
          900: '{teal.900}',
          950: '{teal.950}'
      }
  },
  css: () => `
  html {
    font-family: 'Courier New', monospace;
  }
`
});

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: MyPreset
            }
        })
    ]
};