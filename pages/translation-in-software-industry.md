---
layout: section-title
---

# Translation in software industry

---
layout: section
---

# Translation in software industry

<v-switch>
  <template #1> 

## Translation file standard format?

  </template>
  <template #2> 

![xkcd-standards.png](../assets/xkcd-standards.png)

  </template>
</v-switch>

<!--
- Is there a standard file format for translation?
- Yes, but. JSON, INI, YAML, PO, CSV, XLIFF, etc.
-->

---
layout: section
---

# Translation in software industry

<v-clicks depth="2">

- **OASIS** Consortium
- **O**rganization for the **A**dvancement of **S**tructured **I**nformation **S**tandards
- XLIFF Format
    - 1.2 and 2.0 live side by side
- Most complete translation format
    - Source locale
    - Metadata (notes, …)
    - Translation status

</v-clicks>

<!--
- OASIS is in charge of specifying many formats (OpenDocument, AMQP, SAML, etc.)
- One of those translation formats is "more" standard than the others
- XLIFF (XML Localization Interchange File Format)
-->

---
layout: section
---

# Translation in software industry
![xliff-file.png](../assets/xliff-file.png)

<!--
Extract of a XLIFF 1.2 translation file from Symfony
-->

---
layout: section
---

# Translation in software industry

ICU message format

```xml
<trans-unit id="invitation_title">
  <source>invitation_title</source>
  <!-- the 'other' key is required, and is selected if no other case matches -->
  <target>{organizer_gender, select,
    female   {{organizer_name} has invited you to her party!}
    male     {{organizer_name} has invited you to his party!}
    multiple {{organizer_name} have invited you to their party!}
    other    {{organizer_name} has invited you to their party!}
    }</target>
</trans-unit>
```

<!--
- This is the recommended way to format your messages
- It acts like a switch statement in PHP
- It support pluralization (count keyword), and cases (select keyword) 
-->

---
layout: section
---

# Translation in software industry

ICU message format

```xml
<trans-unit id="invitation_description">
  <source>invitation_description</source>
  <!-- the 'other' key is required, and is selected if no other case matches -->
  <target>{gender_of_host, select,
    female {{num_guests, plural, offset:1
      =0    {{host} does not give a party.}
      =1    {{host} invites {guest} to her party.}
      =2    {{host} invites {guest} and one other person to her party.}
      other {{host} invites {guest} and # other people to her party.}
    }}
    male {{num_guests, plural, offset:1
      =0    {{host} does not give a party.}
      =1    {{host} invites {guest} to his party.}
      =2    {{host} invites {guest} and one other person to his party.}
      other {{host} invites {guest} and # other people to his party.}
    }}
    other {{num_guests, plural, offset:1
      =0    {{host} does not give a party.}
      =1    {{host} invites {guest} to their party.}
      =2    {{host} invites {guest} and one other person to their party.}
      other {{host} invites {guest} and # other people to their party.}
    }}
    }</target>
</trans-unit>
```

<!--
- You can combine the select and plural keywords to handle complex cases
- It is encouraged to provide XLIFF notes to help translators understand the context and all cases handled by such a formatted message
-->

---
layout: two-cols-header
---

# Translation Management Systems

## SaaS

::left::

<v-clicks >

- **Lokalise**
- **Crowdin**
- **Loco**
- **Phrase**
- Transifex
- POEditor
- …

</v-clicks>

::right::

<div class="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10">

<v-click at="1">

![](../assets/lokalise.png)

</v-click>

<v-click at="2">

![](../assets/crowdin.png)

</v-click>

<v-click at="3">

![](../assets/localise.png)

</v-click>

<v-click at="4">

![](../assets/phrase.png)

</v-click>

<v-click at="5">

![](../assets/transifex.png)

</v-click>

<v-click at="6">

![](../assets/poeditor.png)

</v-click>

<v-click at="7">

…

</v-click>

</div>

<!--
- Loco, Lokalize, Crowdin and Phrase are supported by a Translator Provider in Symfony
- If you use another TMS, you are welcome to contribute the corresponding provider to Symfony
-->

---
layout: two-cols-header
---

# Translation Management Systems

## Open Source / Self-hosted

::left::

<v-clicks>

- _Weblate_
- Tolgee
- Accent
- Traduora
- Texterify
- …

</v-clicks>

::right::

<div class="mx-auto mt--6 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-6">

<v-click at="1">

![](../assets/weblate.png)

</v-click>

<v-click at="2">

![](../assets/tolgee.svg)

</v-click>

<v-click at="3">

![](../assets/accent.svg)

</v-click>

<v-click at="4">

![](../assets/traduora.png)

</v-click>

<v-click at="5">

![](../assets/texterify.png)

</v-click>

<v-click at="6">

…

</v-click>

</div>

<!--
- Weblate has a third-party Translation Provider (https://github.com/m2mtech/weblate-translation-provider)
- If you use another TMS, you are welcome to contribute the corresponding provider to Symfony
-->

---
layout: section
---

# Translation Management Systems

![lokalise-ui.png](../assets/lokalise-ui.png)

<!--
- Here it's a screenshot of Lokalise UI
- Your translators will act here to do the translations
-->
