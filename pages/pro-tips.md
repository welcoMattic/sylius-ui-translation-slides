---
layout: section-title
---

# Pro Tips ©

---
layout: section
---

# Pro Tips ©

## Phone number
Use [odolbeau/phone-number-bundle](https://github.com/odolbeau/phone-number-bundle) to format international phone numbers painlessly.

<v-clicks>

- Doctrine type
- Symfony Form Type
- Twig filter
- Symfony Validator

</v-clicks>

---
layout: section
---

# Pro Tips ©

## Cron / Scheduler

Configure your infrastructure to periodically fetch translations using `bin/console translation:pull` command.

<v-clicks>

This can be handled by a cron job or a scheduler
- [Symfony Scheduler](https://symfony.com/doc/current/scheduler.html)
- [Synolia Scheduler Command Plugin](https://github.com/synolia/SyliusSchedulerCommandPlugin)

</v-clicks>

---
layout: section
---

# Pro Tips ©

In `test` environment, leverage `IdentityTranslator` from Symfony to avoid breaking your tests when translations are changed.

```yaml
# services.yaml
when@test:
    services:
        translator: '@identity_translator'
```

https://github.com/symfony/symfony/blob/7.3/src/Symfony/Component/Translation/IdentityTranslator.php
