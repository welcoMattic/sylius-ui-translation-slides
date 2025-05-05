---
layout: section-title
---

# Practical Examples

---
layout: section
---

# Let's translate UI elements

<v-clicks>

- In **Twig** templates (layouts, partials, macros, components, …)?
- In **PHP** code (FormType, Constraint, Grid, …)?
- In **Symfony UX** components (templates, Stimulus Controllers, …)?

</v-clicks>

<v-click>

<div class="text-center text-8xl mt-20">😩</div>

</v-click>

---
layout: section
---

# Let's translate UI elements

<v-clicks>

- Sylius is based on **Symfony**
- Symfony provides a **Translation component**
- Translation component is full of features ✨
- **UX Translator** package provides translations to frontend

</v-clicks>

<v-click>

<div class="text-center text-8xl mt-20">🤩</div>

</v-click>

---
layout: section
---

# Translation component

<v-clicks>

- Translator service
- Twig filter (`|trans`)
- Extractor command (for PHP and Twig files)
- Translation Providers (Loco, Lokalise, Phrase, Crowdin)

</v-clicks>

---
layout: section
---

# Override existing translations

<v-clicks>

1. Extract existing translations
   - ```shell
     bin/console translation:extract en_US --domain messages --force
     ```
2. Find the one you want to override
   - ```xml
     <!-- in translations/messages.en_US.xlf -->
     <source>sylius.ui.dashboard</source>
     ```

</v-clicks>

<!--
- Extract Sylius translations using Symfony command
- Find the one you want to override. I advise to leave the file as it is generated during the extraction to avoid issues with a future extraction
- Let's push the extracted translations to a TMS
-->

---
layout: section
---

# Push translations to a TMS

<v-clicks>


- Choose your TMS => Lokalise
- Install the provider
```shell
composer require symfony/lokalise-translation-provider
```

- Configure the provider
```dotenv 
# .env
LOKALISE_DSN=lokalise://PROJECT_ID:API_KEY@default
```

- Push translations
```shell 
bin/console translation:push lokalise --domain messages
```

</v-clicks>

<!--
- Choose your TMS, install its provider into your app
- Configure the provider with your Project ID and API key
- Push translations of "messages" domain in all enabled locales of your app to the TMS
-->

---
layout: section
---

# Make your changes and pull back translations

<v-clicks>

- Make your changes in the TMS
- Pull translations
```shell
bin/console translation:pull lokalise --domain messages
```

- Clear the cache
```shell
bin/console cache:clear
```

- Check the translations in your app
- Tada! 🎉

</v-clicks>

<!--
- Make your changes in the TMS like a translator
- Pull translations from the TMS using `translation:pull` command
- Clear the cache to have fresh translations
- Check the translations in your app!
-->

---
layout: section
---

# Get translations from JavaScript

<v-clicks>

- Ensure you have StimulusBundle installed and configured (with AssetMapper or Webpack Encore)
- Install UX Translator

```shell
composer require symfony/ux-translator
```

- Configure the domains you want to use on frontend
```yaml
ux_translator:
    domains: ~ # all domains
    # or
    domains: foo  # Include only domain 'foo'
    # or
    domains: '!foo' # Include all domains, except 'foo'
```

</v-clicks>

<!--
- Ensure you have StimulusBundle installed and configured (with AssetMapper or Webpack Encore)
- Install UX Translator package
- Configure the domains you want to use on frontend
-->

---
layout: section
---

# Get translations from JavaScript

A `translator.js` file will be generated

```javascript
// assets/translator.js
import { trans, getLocale, setLocale, setLocaleFallbacks, throwWhenNotFound } from '@symfony/ux-translator';
import { localeFallbacks } from '../var/translations/configuration';

setLocaleFallbacks(localeFallbacks);
throwWhenNotFound(true)

export { trans }
export * from '../var/translations';
```

<!--
- A `translator.js` file will be generated
- It will contain the `trans` function and all the keys exported as constants
- You can benefit from the same fallback locales configuration as in Symfony side
- You can configure your app to throw an error when a translation is not found
-->

---
layout: section
---

# Get translations from JavaScript

You can now use your translations in frontend code

<v-clicks>

- Configure the default locale

```html
<html data-symfony-ux-translator-locale="{{ app.request.locale }}">
```

- Use the `trans` function with keys exported as constants

```javascript
import {
    trans,
    SYLIUS_UI_DASHBOARD,
} from './translator';

trans(SYLIUS_UI_DASHBOARD); // will return "✨ Brand new shiny Dashboard ✨"
```

</v-clicks>

<!--
- Configure the default locale in your HTML
- Use the `trans` function with keys exported as constants
-->

---
layout: section
---

# Get translations from JavaScript

Same as you would do in PHP, you can pass parameters, domain and locale

```javascript {hide|all}
import {
    trans,
    TRANSLATION_WITH_PARAMETERS,
    TRANSLATION_IN_ANOTHER_DOMAIN,
    TRANSLATION_MULTI_LOCALES,
} from './translator';

trans(TRANSLATION_WITH_PARAMETERS, { count: 123, foo: 'bar' });

trans(TRANSLATION_IN_ANOTHER_DOMAIN, {}, 'validators');

trans(TRANSLATION_MULTI_LOCALES, {}, 'messages', 'fr');
trans(TRANSLATION_MULTI_LOCALES, {}, 'messages', 'it');
```
<!--
- Use the `trans` function with parameters
- Use the `trans` function with a different domain
- Use the `trans` function with a different locale
-->
