---
title: "The Services I Offer"
header_menu_title: "Services"
navigation_menu_title: "My Services"
weight: 2
header_menu: true
---

Feature notice: This section displays options to customize title:

- has a normal section title (`title` = "The Services I Offer"),
- custom welcome screen title (`header_menu_title` = "Services"),
- custom navigation menu title (`navigation_menu_title` = "My Services").

That is the important part, right? You want to know what I can do for you. This is why I put this right up there into the header menu of the website.

---

### Icons

This theme includes the full set of [Font Awesome v6.6.0 icons](https://fontawesome.com/icons). Use the `{{</* icon */>}}` [shortcode](https://gohugo.io/content-management/shortcodes/) with the respective `name` to use an icon directly in your `.md` files. For example "{{< icon name="envelope" >}}":

```html
{{</* icon name="envelope" */>}}
```

If you want to use one of Font Awesome's brand icons—the ones that have a trademark warning and the `fa-brands` class—add `brand=true`. For example "{{< icon name="github" brand=true >}}":

```html
{{</* icon name="github" brand=true */>}}
```
If you want to use these branded icons in your contact list, use the full class names in your `hugo.toml`:

```toml
[[params.contacts]]
  label = "GitHub"
  value = "github.com/zjedi/hugo-scroll"
  url = "https://github.com/zjedi/hugo-scroll"
  icon = "fa-brands fa-github"
```

### Nutrition Coaching

This is not an easy task.
You will likely have to pay money for this.

### Chef Consulting

I can raise your table culture!

![Let us get started on a clean slate](images/woman-pouring-juice-on-glass-3184192.jpg)

Want to learn more about my services? See [dedicated page](services) with more details.
[font-awesome-icons]: https://fontawesome.com/icons
[hugo-shortcodes]: https://gohugo.io/content-management/shortcodes/
