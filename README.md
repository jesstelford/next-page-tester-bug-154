Bug reproduction for [next-page-tester#154](https://github.com/toomuchdesign/next-page-tester/issues/154).

Instructions:

1. `git clone https://github.com/jesstelford/next-page-tester-bug-154.git`
2. `cd next-page-tester-bug-154`
3. `yarn`
4. `yarn jest`
5. Note the error (below) shows the `<title>` tags are missing


```
❯ yarn jest
yarn run v1.22.10
$ next-page-tester-bug-154/node_modules/.bin/jest
 FAIL  __tests__/test.js
  failing tests
    ✕ renders <head> content correctly from serverRender() (51 ms)
    ✕ renders <head> content correctly from render() (24 ms)

  ● failing tests › renders <head> content correctly from serverRender()

    expect(received).toMatchInlineSnapshot(snapshot)

    Snapshot name: `failing tests renders <head> content correctly from serverRender() 1`

    Snapshot: "<html><head><title>Server Side Title</title><meta name=\"next-head-count\" content=\"0\"><noscript data-n-css=\"\"></noscript></head><body><div id=\"__next\"><h1>Hello world</h1></div><script id=\"__NEXT_DATA__\" type=\"application/json\">{\"page\":\"/index\",\"query\":{},\"buildId\":\"next-page-tester\",\"props\":{}}</script></body></html>"
    Received: "<html><head><meta name=\"next-head-count\" content=\"0\"><noscript data-n-css=\"\"></noscript></head><body><div id=\"__next\"><h1>Hello world</h1></div><script id=\"__NEXT_DATA__\" type=\"application/json\">{\"page\":\"/index\",\"query\":{},\"buildId\":\"next-page-tester\",\"props\":{}}</script></body></html>"

      13 |
      14 |     const serverHtml = document.documentElement.outerHTML;
    > 15 |     expect(serverHtml).toMatchInlineSnapshot(
         |                        ^
      16 |       `"<html><head><title>Server Side Title</title><meta name=\\"next-head-count\\" content=\\"0\\"><noscript data-n-css=\\"\\"></noscript></head><body><div id=\\"__next\\"><h1>Hello world</h1></div><script id=\\"__NEXT_DATA__\\" type=\\"application/json\\">{\\"page\\":\\"/index\\",\\"query\\":{},\\"buildId\\":\\"next-page-tester\\",\\"props\\":{}}</script></body></html>"`
      17 |     );
      18 |   });

      at Object.<anonymous> (__tests__/test.js:15:24)

  ● failing tests › renders <head> content correctly from render()

    expect(received).toMatchInlineSnapshot(snapshot)

    Snapshot name: `failing tests renders <head> content correctly from render() 1`

    Snapshot: "<html data-reactroot=\"\"><head><title>Client Side Title</title></head><body><div id=\"__next\"><h1>Hello world</h1></div></body></html>"
    Received: "<html data-reactroot=\"\"><head></head><body><div id=\"__next\"><h1>Hello world</h1></div></body></html>"

      26 |
      27 |     const serverHtml = document.documentElement.outerHTML;
    > 28 |     expect(serverHtml).toMatchInlineSnapshot(
         |                        ^
      29 |       `"<html data-reactroot=\\"\\"><head><title>Client Side Title</title></head><body><div id=\\"__next\\"><h1>Hello world</h1></div></body></html>"`
      30 |     );
      31 |   });

      at Object.<anonymous> (__tests__/test.js:28:24)

 › 2 snapshots failed.
Snapshot Summary
 › 2 snapshots failed from 1 test suite. Inspect your code changes or re-run jest with `-u` to update them.

Test Suites: 1 failed, 1 total
Tests:       2 failed, 2 total
Snapshots:   2 failed, 2 total
Time:        1.558 s, estimated 2 s
Ran all test suites.
```
