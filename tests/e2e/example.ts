describe("Main", function () {
  before((browser) => {
    browser.init();
  });

  it("Home View", function () {
    browser.assert.textContains("h1", "Test");
  });

  after((browser) => browser.end());
});
