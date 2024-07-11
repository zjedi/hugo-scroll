---
title: "Über mich (shared folder)"
weight: 3
header_menu: true
---

This demonstates localized variants `about-me.de.md` placed along the primary language content, such as `content/en`. Both localisation approaches (separate folder, suffixes in the same folder) can be used and mixed.

#### Local content

When localised page variants are placed along, images of other languages can't be used directly. You would need to use `.de`-suffixed copy of the image: `![Jane Doe](en-happy-ethnic-woman-sitting-at-table-with-laptop-3769021.de.jpg)`
Consider using assets instead.

Images from local content location can't be pipeline-processed.

#### Static

Alternatively, images can be injected from `static/images`:
![Jane Doe](/images/static-happy-ethnic-woman-sitting-at-table-with-laptop-3769021.jpg)
Note the leading `/` is required in this case.
Images from static location can't be pipeline-processed and are always copied when publishing the site, even if not linked from any page.

#### Assets

Latest Hugo version supports injection from `assets` via natural Markdown notation, which empowers this approach for injecting images since pipeline processing (resizing etc) can be used. However, It only worked for me with the local test deployment, there were issues while deploying previews Netlify. Possible workaround would be to use custom shortcode to "touch" the image via [Resources.GetMatch](https://gohugo.io/functions/resources/getmatch/). I hope this gets fixed someday.

![Broken image from assets](images/asset-happy-ethnic-woman-sitting-at-table-with-laptop-3769021.jpg)
Historically, Linking image from `assets` folder worked only via Hugo-specific shortcode, there was [a discussion with suggestions](https://discourse.gohugo.io/t/how-to-show-images-on-post-pages-if-theyre-located-in-the-assets-folder/34276/14).

Note that using images form assets folder is the only way to apply pipeline processing, such as resizing, when building the site. Fore more details, read about [asset vs static difference](https://discourse.gohugo.io/t/difference-between-asset-and-static-folder/41203)

Assets are only published if linked from a content page.
