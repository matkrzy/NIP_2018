import { browser, element, by, ExpectedConditions } from 'protractor';
import { PostAddPo } from './post-add.po';

describe('Post add component', () => {
  let page: PostAddPo;

  beforeEach(() => {
    page = new PostAddPo();
    page.navigateTo();
  });

  it('should add new post', () => {
    const addButton = element(by.id('addPostButton'));

    const titleField = element(by.name('title'));
    const contentField = element(by.name('description'));

    const until = ExpectedConditions;
    browser.wait(until.presenceOf(addButton), 5000, 'Element taking too long to appear in the DOM');

    addButton.click().then(() => {
      titleField.sendKeys('Test title from e2e');
      contentField.sendKeys('Test content from e2e');

      const sendButton = element(by.tagName('button'));
      sendButton.click();
    });

    browser.wait(until.urlIs('/posts'), 5000, 'cannot back to main page');
  });
})
