import { MyDreamAppPage } from './app.po';

describe('my-dream-app App', function() {
  let page: MyDreamAppPage;

  beforeEach(() => {
    page = new MyDreamAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
