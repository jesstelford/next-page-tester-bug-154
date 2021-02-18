const { initTestHelpers, getPage } = require("next-page-tester");

initTestHelpers();

describe("failing tests", () => {
  it("renders <head> content correctly from serverRender()", async () => {
    const { serverRender } = await getPage({
      route: "/",
      useDocument: true,
    });

    serverRender();

    const serverHtml = document.documentElement.outerHTML;
    expect(serverHtml).toMatchInlineSnapshot(
      `"<html><head><title>Server Side Title</title><meta name=\\"next-head-count\\" content=\\"0\\"><noscript data-n-css=\\"\\"></noscript></head><body><div id=\\"__next\\"><h1>Hello world</h1></div><script id=\\"__NEXT_DATA__\\" type=\\"application/json\\">{\\"page\\":\\"/index\\",\\"query\\":{},\\"buildId\\":\\"next-page-tester\\",\\"props\\":{}}</script></body></html>"`
    );
  });

  it("renders <head> content correctly from render()", async () => {
    const { render } = await getPage({
      route: "/",
    });

    render();

    const serverHtml = document.documentElement.outerHTML;
    expect(serverHtml).toMatchInlineSnapshot(
      `"<html data-reactroot=\\"\\"><head><title>Client Side Title</title></head><body><div id=\\"__next\\"><h1>Hello world</h1></div></body></html>"`
    );
  });
});
