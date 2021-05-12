---
title: "sort"
description: "terraform-docs configuration file, i.e. .terraform-docs.yml"
menu:
  docs:
    parent: "Configuration"
weight: 128
toc: false
---

Since `v0.10.0`

To enable sorting of elements `sort.enabled` (or `--sort bool` CLI flag) can be
used. This will indicate sorting is enabled or not, but consecutively type of
sorting can also be specified with `sort.by` (or `--sort-by string` CLI flag).
The following sort types are supported:

- `name` (default): name of items
- `required`: by name of inputs AND show required ones first
- `type`: type of inputs

**Note:** As of `v0.13.0`, `sort.by` is converted from `list` to `string`.

```yaml
sort:
  enabled: true
  by: required   # this now only accepts string
```

The following error is an indicator that `.terraform-docs.yml` still uses
list for `sort.by`.

```text
Error: unable to decode config, 1 error(s) decoding:

* 'sort.by' expected type 'string', got unconvertible type '[]interface {}'
```
