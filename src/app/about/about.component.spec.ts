import { TestBed } from '@angular/core/testing';
import { expect, SkyAppTestModule } from '@blackbaud/skyux-builder/runtime/testing/browser';

// Component we're going to test
import { AboutComponent } from './about.component';

describe('About component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });
  });

  it('should display a new teammate when one is added', () => {
    const name = 'Blackbaud';
    const email = 'no-reply@blackbaud.com';
    const fixture = TestBed.createComponent(AboutComponent);

    fixture.componentInstance.team.push({
      name: 'Blackbaud',
      email: 'no-reply@blackbaud.com'
    });

    fixture.detectChanges();

    const el = fixture.nativeElement;
    const lastTeamEl = el.querySelector('.template-about-teams .template-about-team:last-child');
    const namesEl = lastTeamEl.querySelector('sky-key-info-value');
    const emailsEl = lastTeamEl.querySelector('sky-key-info-label');

    // Using custom expect matchers
    expect(namesEl).toHaveText(name);
    expect(emailsEl).toHaveText(email);
  });

});
