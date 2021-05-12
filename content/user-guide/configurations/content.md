---
title: "content"
description: "terraform-docs configuration file, i.e. .terraform-docs.yml"
menu:
  docs:
    parent: "Configuration"
weight: 126
toc: false
---

Since `v0.14.0`

Generated content can be customized further away with `content` in configuration.
If the `content` is empty the default orders of section is used. `content` is a
Go template with following additional variables:

- `{{ .Header }}`
- `{{ .Footer }}`
- `{{ .Inputs }}`
- `{{ .Modules }}`
- `{{ .Outputs }}`
- `{{ .Providers }}`
- `{{ .Requirements }}`
- `{{ .Resources }}`

```yaml
content: |-
  Any arbitrary text can be placed anywhere in the content

  {{ .Header }}

  and even in between sections

  {{ .Providers }}

  and they don't even need to be in the default order

  {{ .Outputs }}

  {{ .Inputs }}
```

These variables are the generated output of individual sections in the selected
formatter. For example `{{ .Inputs }}` is Markdown Table representation of _inputs_
when formatter is set to `markdown table` and AsciiDoc Document representation
when formatter is set to `asciidoc document` and so on.

Compatible formats for customized content are:

- `asciidoc document`
- `asciidoc table`
- `markdown document`
- `markdown table`

**Note:** Sections visibility (i.e. `sections.show` and `sections.hide`) takes
precedence over the `content`. In the following example although `{{ .Providers }}`
is used it won't be rendered because `providers` is not set to be shown in
`sections.show`.

```yaml
sections:
  show:
    - header
    - inputs
    - outputs

content: |-
  {{ .Header }}

  Some more information can go here.

  {{ .Providers }}

  {{ .Inputs }}

  {{ .Outputs }}
```
