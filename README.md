# Hugo Scroll
A [Hugo](https://gohugo.io/) theme for pretty, quick and simple single-page websites.

For live demo of master branch, please visit https://zjedi.github.io/hugo-scroll/.
![Test](https://github.com/zjedi/hugo-scroll/workflows/CI/badge.svg?branch=master&event=push)

As a fallback, see a screenshot which may be a bit outdated: ![Screenshot Hugo Scroll Theme](https://raw.githubusercontent.com/zjedi/hugo-scroll/master/images/tn.png)

## Installation
If you already have a hugo site on your machine, you can simply add this theme via
```
git submodule add https://github.com/zjedi/hugo-scroll.git themes/hugo-scroll
```
Then, adjust the `config.toml` as detailed below & in the file comments.

If you simply want to check out the `exampleSite`, you can run
```
git clone https://github.com/zjedi/hugo-scroll.git hugo-scroll
cd hugo-scroll
hugo server --source=exampleSite --themesDir=../..
```

For more information, read the official [Hugo setup guide][hugo-setup-guide].

If you are starting fresh, simply copy over the contents of the `exampleSite`-directory included in this theme to your source directory. That should give you a good idea about how things work, and then you can go on from there to make the site your own.

Please check out the [config.toml](https://github.com/zjedi/hugo-scroll/blob/master/exampleSite/config.toml) included on the [exampleSite](https://github.com/zjedi/hugo-scroll/tree/master/exampleSite) of this theme.

You can add **a new section to the homepage** by running `hugo new homepage/my-new-content.md` (or craft the file manually)

To create **a page separate from the homepage**, run `hugo new my-new-page.md`

## Features
### Icons
This theme includes the full set of [Fork Awesome 1.2.0 Icons][fork-awesome-icons]. Use the `{{<icon>}}`-[shortcode][hugo-shortcodes] with the respective "fa fa-ICONNAME"-`class` to use an icon directly in your `.markdown` files à la
```markdown
Look at this nice »envelope«-icon: `{{<icon class="fa fa-envelope">}}`. I took this from https://forkaweso.me/Fork-Awesome/icon/envelope/ :-)
```

### Header logo
Configured in `_index.md`, see `exampleSite`: `header_logo: "images/chef-hat.png"`

### External links
You can add external link in the menu, see `external.md` in the `exampleSite`.

You can also use `extlink` shortcode to create a link opening in new tab:
```markdown
Visit as at {{<extlink text="Instagram" href="https://www.instagram.com/yourInstagramName/">}}
```

### Customizing CSS
Add a `custom_head.html`-file to your `layouts/partials`-directory. In there you may add a `<style>`-tag _or_ you may add a `<link>`-tag referencing your own `custom.css` (in case you prefer to have a separate `.css`-file). Checkout the [`custom_head.html`](https://github.com/zjedi/hugo-scroll/blob/master/exampleSite/layouts/partials/custom_head.html)-file from the `exampleSite`-directory to get started and to find more detailed instructions.

## Issues / Feedback / Contributing
Please use [GitHub issues](https://github.com/zjedi/hugo-scroll/issues) and [Pull Requests](https://github.com/zjedi/hugo-scroll/pulls). 
See [contributing guideline](https://github.com/zjedi/hugo-scroll/blob/master/contributing.md) for more. 

## Special Thanks 🎁
- [Jan Raasch](https://www.janraasch.com), original author of theme
- [Yonatan Wolowelsky](https://github.com/grmmph), author of [GhostScroll](https://github.com/grmmph/GhostScroll) theme, which formed the basis of this [Hugo](https://gohugo.io/) theme.
- [Pexels](https://www.pexels.com), for supplying those wonderful _free_ stock photos on the [exampleSite](https://github.com/zjedi/hugo-scroll/tree/master/exampleSite).

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[hugo-setup-guide]: https://gohugo.io/getting-started/installing
[fork-awesome-icons]: https://forkaweso.me/Fork-Awesome/icons/
[hugo-shortcodes]: https://gohugo.io/content-management/shortcodes/
