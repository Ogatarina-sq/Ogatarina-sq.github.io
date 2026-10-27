# Quan Shi's academic website

Personal academic website for Quan Shi at the National University of Singapore,
served with Jekyll and GitHub Pages at <https://ogatarina-sq.github.io/>.

The About, Publications, and Awards pages use a lightweight layout inspired by
[Haolin He's website](https://harlandzzc.github.io/) and
[al-folio](https://github.com/alshedivat/al-folio). The LPG publication has a
prominent trophy badge inspired by the award treatment on
[Liying Wang's website](https://wang.ly/).

## Updating content

- `_pages/about.md`: biography, news, education, professional activities, and contact.
- `_pages/awards.md`: research and mathematical modeling awards.
- `_data/selected_publications.yml`: the shared publication list displayed on both pages.
  List papers in display order. Set `award` and `award_note` to show a trophy badge,
  and `arxiv` to add a preprint link.
- `profile.jpg`: the original portrait, cropped into a circle using CSS.
- `_config.yml`: name, description, email, and GitHub account.
- `_data/navigation.yml`: the About, Publications, and Awards navigation links.
- `assets/css/academic.css`: page layout, responsive styles, and light/dark colors.
- `assets/js/academic-theme.js`: theme preference and toggle behavior.

Blog posts, CV, archive pages, and demo publication entries are excluded from the
build in `_config.yml`. Their original source files remain available in Git.
Other legacy Academic Pages files are retained for future use.

## Local development

With Ruby and Bundler installed, run from the repository directory:

```sh
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

Open <http://localhost:4000/>. Restart Jekyll after changing `_config.yml`.

To check the production build:

```sh
bundle exec jekyll build --safe
```

There is no JavaScript build step for the new academic layout. All its assets,
including the portrait and trophy emoji, work without a CDN.

## Credits

The repository originally used [Academic Pages](https://academicpages.github.io/),
forked by Stuart Geiger from Michael Rose's
[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme.
The retained theme files are covered by the existing MIT license; see `LICENSE`.
