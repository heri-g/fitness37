import { Fitness37Page } from './app.po';

describe('fitness37 App', function() {
  let page: Fitness37Page;

  beforeEach(() => {
    page = new Fitness37Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
