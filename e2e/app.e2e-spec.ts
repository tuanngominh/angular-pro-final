import { AngularProFinalPage } from './app.po';

describe('angular-pro-final App', () => {
  let page: AngularProFinalPage;

  beforeEach(() => {
    page = new AngularProFinalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
