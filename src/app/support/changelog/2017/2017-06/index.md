<stache
  pageTitle="June"
  navOrder="110"
  showTableOfContents="true">

  <stache-page-anchor>
    2.0.0-beta.8 (2017-06-30)
  </stache-page-anchor>

  <ul>
    <li>
      Added support for SKY UX 2.0.0-rc.2
    </li>
    <li>
      Added support for SKY UX Builder 1.0.0-rc.4
    </li>
  </ul>

  <stache-page-anchor>
    2.0.0-beta.7 (2017-06-22)
  </stache-page-anchor>

  <p>
    Updated SKY UX to <sky-code>2.0.0-rc.1</sky-code>.
  </p>

  <stache-page-anchor>
    2.0.0-beta.6 (2017-06-22)
  </stache-page-anchor>

  <p>
    Moved <sky-code>@blackbaud/skyux</sky-code> to package dependencies.
  </p>

  <stache-page-anchor>
    2.0.0-beta.5 (2017-06-22)
  </stache-page-anchor>

  <li>
    Updated SKY UX to <sky-code>2.0.0-rc.0</sky-code>.
  </li>
  <li>
    Updated SKY UX Builder to <sky-code>1.0.0-rc.2</sky-code>.
  </li>
  <li>
    Adjusted components to support Angular <sky-code>4.x</sky-code>. (<a href="https://github.com/blackbaud/stache2/issues/101">#101 <i class="fa fa-external-link" aria-hidden="true"></i></a>)
  </li>

  <stache-page-anchor>
    2.0.0-beta.4 (2017-06-16)
  </stache-page-anchor>

  <p>
    Updated version of plugin to accept all patch releases.
  </p>

  <stache-page-anchor>
    2.0.0-beta.3 (2017-06-15)
  </stache-page-anchor>

  <ul>
    <li>
      Fixed JSON Data, Route Metadata, and Config Service providers.
    </li>
    <li>
      Consolidated all plugins into a single plugin. (<a href="https://github.com/blackbaud/skyux-builder-plugin-stache">blackbaud/skyux-builder-plugin-stache <i class="fa fa-external-link" aria-hidden="true"></i></a>)
    </li>
    <li>
      Fixed StacheAffixTopDirective width bug. (<a href="https://github.com/blackbaud/stache2/issues/221">#221 <i class="fa fa-external-link" aria-hidden="true"></i></a>)
    </li>
    <li>
      Removed <sky-code>StacheConfigService</sky-code> and <sky-code>SkyAppConfig</sky-code> from <strong>app-extras.module.ts</strong>.
    </li>
  </ul>

  <stache-page-anchor>
    2.0.0-beta.2 (2017-06-08)
  </stache-page-anchor>

  <ul>
    <li>
      100% function code coverage
    </li>
    <li>
      Implemented new components and directives: <sky-code>StacheTutorialComponent</sky-code>, <sky-code>StacheAffixComponent</sky-code>, <sky-code>StacheGoogleAnalyticsDirective</sky-code>.
    </li>
    <li>
      Implemented service to convert JSON files into usable JavaScript objects, <sky-code>StacheJsonDataService</sky-code>.
    </li>
    <li>
      Route names can be changed using the <sky-code>&lt;stache&gt;</sky-code>attributes <sky-code>pageTitle</sky-code> or <sky-code>navTitle</sky-code>.
    </li>
    <li>
      New SKY UX Builder plugins were created for various reasons (check each plugin's README for more information):
      <ul>
        <li>
          <a href="https://github.com/blackbaud/skyux-builder-plugin-auth-email-whitelist">
            <sky-code>@blackbaud/skyux-builder-plugin-auth-email-whitelist</sky-code> <i class="fa fa-external-link" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/blackbaud/skyux-builder-plugin-stache-json-data">
            <sky-code>@blackbaud/skyux-builder-plugin-stache-json-data</sky-code> <i class="fa fa-external-link" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/blackbaud/skyux-builder-plugin-stache-template-reference-variable">
            <sky-code>@blackbaud/skyux-builder-plugin-stache-template-reference-variable</sky-code> <i class="fa fa-external-link" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/blackbaud/skyux-builder-plugin-stache-route-metadata">
            <sky-code>@blackbaud/skyux-builder-plugin-stache-route-metadata/collector</sky-code> <i class="fa fa-external-link" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/blackbaud/skyux-builder-plugin-stache-route-metadata">
            <sky-code>@blackbaud/skyux-builder-plugin-stache-route-metadata/generator</sky-code> <i class="fa fa-external-link" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </li>
    <li>
      Fixed line-heights for list items and navigation. (<a href="https://github.com/blackbaud/stache2/issues/158">#158 <i class="fa fa-external-link" aria-hidden="true"></i></a>)
    </li>
    <li>
      Fixed StacheActionButtonsComponent styles when displaying less than 4 Action Buttons. (<a href="https://github.com/blackbaud/stache2/issues/171">#171 <i class="fa fa-external-link" aria-hidden="true"></i></a>)
    </li>
  </ul>
</stache>
