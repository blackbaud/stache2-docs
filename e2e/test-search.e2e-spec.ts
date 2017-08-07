// Use browser to access other sites (that are running angular)
import { element, by } from 'protractor';

// Use SkyHostBrowser to access your locally served SPA
import { SkyHostBrowser } from '@blackbaud/skyux-builder/runtime/testing/e2e';

// import { SkyAppConfig } from '@blackbaud/skyux-builder/runtime';

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
  // files.unshift('/');

  it('should generate search results', (done) => {

    function scrapePageContent(file) {
      SkyHostBrowser.get(file);

      return element(by.css('stache-container'))
        .getText()
        .then((bodyText: string) => {
          return new Promise((resolve, reject) => {
            let fileName = file.replace(/\//g, '-');
            fs.writeFile(fileName + '.txt', bodyText, (err) => {
              err ? reject(err) : resolve();
            });
          });
        });
    }

    Promise.all(files.map(file => {
      return scrapePageContent(file);
    }))
      .then(() => {
        done();
      })
      .catch(error => {
        console.log('ERROR', error);
        done();
      });
  });
});
