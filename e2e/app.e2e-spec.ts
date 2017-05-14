import { VirtDancerPage } from './app.po';

describe('virt-dancer App', () => {
  let page: VirtDancerPage;

  beforeEach(() => {
    page = new VirtDancerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
