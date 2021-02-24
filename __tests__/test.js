const { getPage } = require("next-page-tester");

describe("failing tests", () => {
  it("renders <head> content correctly from serverRender()", async () => {
    const { serverRender } = await getPage({
      route: "/",
      useDocument: true,
    });

    serverRender();

    const serverHtml = document.querySelector("head").outerHTML;
    expect(serverHtml).toMatchInlineSnapshot(
      `"<head><meta name=\\"viewport\\" content=\\"width=device-width\\"><meta charset=\\"utf-8\\"><link rel=\\"canonical\\" href=\\"http://example.com\\"><title>Server Side Title</title><meta name=\\"next-head-count\\" content=\\"4\\"><noscript data-n-css=\\"\\"></noscript></head>"`
    );
  });

  it("renders <head> content correctly from render()", async () => {
    const { render } = await getPage({
      route: "/",
      useDocument: true,
    });

    render();

    const serverHtml = document.querySelector("head").outerHTML;
    expect(serverHtml).toMatchInlineSnapshot(
      `"<head><meta name=\\"viewport\\" content=\\"width=device-width\\"><meta charset=\\"utf-8\\"><link rel=\\"canonical\\" href=\\"http://example.com\\"><title>Client Side Title</title><meta name=\\"next-head-count\\" content=\\"4\\"><noscript data-n-css=\\"\\"></noscript></head>"`
    );
  });
});
