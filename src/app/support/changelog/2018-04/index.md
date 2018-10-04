<stache
  pageTitle="April 2018"
  navTitle="April 2018"
  navOrder="90"
  showTableOfContents="true">

  <stache-page-summary>
    Monitor this page to keep up with the latest changes and releases for {{ stache.jsonData.global.productNameLong }}.
  </stache-page-summary>

  <stache-markdown>
## 2.6.0 (2018-4-13)

- Refactored Table of Contents and Page Anchor components. [#441](https://github.com/blackbaud/stache2/pull/441) - Thanks [@Blackbaud-StacyCarlos](https://github.com/Blackbaud-StacyCarlos)!
  - Fixed a bug where the TOC would not load links until the user scrolled.
  - Refactored the page anchors to allow nested anchors from child components to still load in the TOC.
- Fixed a bug that caused tutorial card headers to have too much space above the title when the Omnibar was present. [#440](https://github.com/blackbaud/stache2/pull/440)

## 2.5.2 (2018-4-11)

- Fixed a bug that caused the sidebar to jitter when it required a scroll bar while the main content did not. [#438](https://github.com/blackbaud/stache2/pull/438)

## 2.5.1 (2018-4-2)

- Fixed a bug that caused `stache-code-block` to render without new lines in IE11. [#433](https://github.com/blackbaud/stache2/pull/433)
- Fixed a bug that caused the window to scroll too far down on `stache-page-anchors` when omnibar was present without `affix-top` being called first. [#431](https://github.com/blackbaud/stache2/pull/431)

  </stache-markdown>
</stache>
