import { NgFormsPage } from './app.po';

describe('ng-forms App', () => {
  let page: NgFormsPage;

  beforeEach(() => {
    page = new NgFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
