# CLAUDE.md

Personal academic website for Haoxian Chen — a Jekyll site deployed via GitHub Pages.
Live at https://haoxian-chen.github.io.

## Build & serve (local)

This machine has only system Ruby 2.6.10, whose gem dir is read-only, and
`Gemfile.lock` pins **bundler 2.4.19**. So bundler was installed into the user
gem dir. Every bundler command must have that dir on `PATH`/`GEM_HOME`:

```bash
export PATH="$HOME/.gem/ruby/2.6.0/bin:$PATH"
export GEM_HOME="$HOME/.gem/ruby/2.6.0"

bundle _2.4.19_ exec jekyll build        # one-off build -> _site/
bundle _2.4.19_ exec jekyll serve        # dev server at http://localhost:4000 (auto-regenerates)
```

`build.sh` runs `jekyll serve` but does NOT set those env vars, so it fails as-is
on this machine — use the commands above instead.

The "No GitHub API authentication" warning during build is harmless (metadata
enrichment only).

## Where content lives

- **Bio / homepage intro** — `index.md` (uses `layout: homepage`, then
  `include_relative`s the sections below).
- **News** — `_includes/news.md`, hand-written HTML. Each entry is a
  `.news-item` with a `.news-date` (`[Mon YYYY]`) and a `.news-text`.
  Link a highlighted paper as `<a href="..."><strong>Name</strong></a>`.
- **Publications** — data in `_data/publications.yml` (rendered by
  `_includes/publications.md`). The author's own name is bolded with
  `<strong>Haoxian Chen</strong>` in the `authors` field.
- Other sections: `_data/*.yml` + matching `_includes/*.md`
  (conferences, contact, navigation, projects).

## Styling

- **`assets/css/style.scss`** is the main stylesheet. It `@import`s
  `minimal-light` and defines theme CSS variables (`--link-color`,
  `--strong-color`, etc.) plus light/dark-mode overrides (`body.dark-mode`).
  Edit this for site-specific styling — not the `_sass/*` files.
- `_sass/minimal-light.scss` is the base theme; `_sass/*-ori.scss` and
  `*copy*` are unused backups.
- The site also pulls the remote theme `yaoyao-liu/minimal-light`
  (`remote_theme` in `_config.yml`) via `jekyll-remote-theme`.

## Notes

- `CNAME` contains `songchen.science`, which is leftover from the upstream
  template and mismatches the canonical `https://haoxian-chen.github.io`.
  Likely stale — confirm before relying on it.
- `_site/` is generated output; never edit it by hand.
