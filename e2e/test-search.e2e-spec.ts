// Use browser to access other sites (that are running angular)
import { browser, element, by } from 'protractor';

// Use SkyHostBrowser to access your locally served SPA
import { SkyHostBrowser } from '@blackbaud/skyux-builder/runtime/testing/e2e';

const fs = require('fs');
const path = require('path');

const walkSync = (dir, filePaths: string[] = []) => {
  let files = fs.readdirSync(dir);
  files.forEach(file => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filePaths = walkSync(path.join(dir, file), filePaths);
    } else {
      if (file.indexOf('index.html') > -1) {
        filePaths.push(path.join(dir, file));
      }
    }
  });
  return filePaths;
};

describe('Search Results', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
  });

  let files = walkSync(path.join(__dirname, '../src/app'));
  files = files.map(file => {
    let route = file.split('/app')[1];
    route = route.slice(0, route.length - 11);
    return route;
  });

  it('should generate search results', (done) => {
    let content = {};
    let appName = JSON.parse(browser.params.skyPagesConfig).skyux.name;

    content[appName] = [];

    function scrapePageContent(file) {
      SkyHostBrowser.get(file);
      return element(by.css('body'))
        .getText()
        .then((text: string): Promise<any> => {
          content[appName].push({
            path: file,
            text: text
          });
          return Promise.resolve();
        });
    }

    Promise.all(files.map(file => {
      return scrapePageContent(file);
    }))
      .then(() => {
        return new Promise((resolve, reject) => {
          fs.writeFile(
            path.join('src/search/search.json'),
            JSON.stringify(content),
            (err) => {
              err ? reject(err) : resolve();
            });
        });
      })
      .then(() => {
        done();
      })
      .catch(error => {
        console.log('ERROR', error);
        done();
      });
  });
});
