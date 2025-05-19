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
<div class="code-lg">
   
   - ```shell
     bin/console translation:extract en_US --domain messages --force
     ```

</div>

2. Find the one you want to override
<div class="code-lg">

   - ```xml
     <!-- in translations/messages.en_US.xlf -->
     <source>sylius.ui.dashboard</source>
     <target>Dashboard</target>
     ```

</div>
     
![sylius-dashboard.png](../assets/sylius-dashboard.png)

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
<div class="code-lg">

```shell
composer require symfony/lokalise-translation-provider
```

</div>

- Configure the provider
<div class="code-lg">

```dotenv 
# .env.local / Or use Symfony secrets
LOKALISE_DSN=lokalise://PROJECT_ID:API_KEY@default
```

</div>

</v-clicks>

---
layout: section
---

# Push translations to a TMS

<v-clicks>

- Push translations
<div class="code-lg">

```shell 
bin/console translation:push lokalise --domain messages
```

</div>

- Make your changes on TMS platform
<div class="code-lg">

```diff
- Dashboard
+ ✨ Brand new shiny Dashboard ✨
```

</div>

</v-clicks>

<!--
- Choose your TMS, install its provider into your app
- Configure the provider with your Project ID and API key (be sure to use safely your credentials, in .local file or using Symfony secrets)
- Push translations of "messages" domain in all enabled locales of your app to the TMS
- Make your changes
-->

---
layout: section
---

# Make your changes and pull

<v-clicks>

- Pull translations
<div class="code-lg">

```shell
bin/console translation:pull lokalise --domain messages
```

</div>

- Clear the cache
<div class="code-lg">

```shell
bin/console cache:clear
```

</div>

- Tada! 🎉

![sylius-dashboard-updated.png](../assets/sylius-dashboard-updated.png)

</v-clicks>

<!--
- Make your changes in the TMS like a translator
- Pull translations from the TMS using `translation:pull` command
- Clear the cache to have fresh translations
- Check the translations in your app!
- It's been done without editing manually the translation files
-->

---
layout: section
---

# Get translations from JavaScript

<v-clicks>

- Ensure you have StimulusBundle installed and configured (with AssetMapper or Webpack Encore)
- Install UX Translator
<div class="code-lg">

```shell
composer require symfony/ux-translator
```

</div>

- Configure the domains you want to use on frontend
<div class="code-lg">

```yaml
ux_translator:
    domains: ~ # all domains
    # or
    domains: foo  # Include only domain 'foo'
    # or
    domains: '!foo' # Include all domains, except 'foo'
```

</div>

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
<div class="code-lg">

```javascript
// assets/translator.js
import { trans, setLocaleFallbacks, throwWhenNotFound } from '@symfony/ux-translator';
import { localeFallbacks } from '../var/translations/configuration';

setLocaleFallbacks(localeFallbacks);
throwWhenNotFound(true)

export { trans }
export * from '../var/translations';
```

</div>

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
<div class="code-lg">

```html
<html data-symfony-ux-translator-locale="{{ app.request.locale }}">
```

</div>

- Use the `trans` function with keys exported as constants
<div class="code-lg">

```javascript
import {
    trans,
    SYLIUS_UI_DASHBOARD,
} from './translator';

trans(SYLIUS_UI_DASHBOARD); // will return "✨ Brand new shiny Dashboard ✨"
```

</div>

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
<div class="code-lg">

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

</div>

<!--
- Use the `trans` function with parameters
- Use the `trans` function with a different domain
- Use the `trans` function with a different locale
-->
