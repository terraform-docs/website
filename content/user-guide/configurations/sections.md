---
title: "sections"
description: "terraform-docs configuration file, i.e. .terraform-docs.yml"
menu:
  docs:
    parent: "Configuration"
weight: 125
toc: false
---

Since `v0.10.0`

The following options are supported and can be used for `sections.show` and
`sections.hide`:

- `data-sources` (since `v0.13.0`)
- `header`
- `footer` (since `v0.12.0`)
- `inputs`
- `modules` (since `v0.11.0`)
- `outputs`
- `providers`
- `requirements`
- `resources` (since `v0.11.0`)

**Note:** As of `v0.13.0`, `sections.hide-all` and `sections.show-all` are deprecated
and removed in favor of explicit use of `sections.hide` and `sections.show`.
