// describe('Advanced testing', () => {
//     it('file upload', async () => {
//         await browser.url(`https://the-internet.herokuapp.com/login`);

//         await $('#username').setValue('tomsmith');
//         await $('#password').setValue('SuperSecretPassword!');
//         await $('button[type="submit"]').click();

//         await expect($('#flash')).toBeExisting();
//         await expect($('#flash')).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });

describe("Advanced testing", () => {
  beforeEach(async () => {
    await loadWebsite();
  });
  it("file upload 1", async () => {
    const filePath = "./my-screenshot.png";
    const remoteFilePath = await browser.uploadFile(filePath);
    await $("#file-upload").setValue(remoteFilePath);
    await $("#file-submit").click();
    await browser.pause(2000);
  });
  it("file upload 2", async () => {
    const filePath = "./my-screenshot.png";
    const remoteFilePath = await browser.uploadFile(filePath);
    await $("#file-upload").setValue(remoteFilePath);
    await $("#file-submit").click();
    await browser.pause(2000);
  });
  it("file upload 3", async () => {
    const filePath = "./my-screenshot.png";
    // se configura en wdio.conf.js y es equivalente al file upload 1 y 2

    await browser.CustomFileUpload(filePath, "#file-upload", "#file-submit");
    await browser.pause(2000);
  });

  it("Display Title and URL", async () => {
    const results = await browser.getTitleAndUrl();
    console.log(results);

    await browser.waitAndClick("#file-submit");
    await browser.pause(5000);
  });

  it("Change browser session", async () => {
    console.log("session before reload " + browser.sessionId);
    await browser.reloadSession();
    console.log("session after reload " + browser.sessionId);
  });

  it("Create and Switch new window", async () => {
    await browser.url("https://www.google.com/");
    await browser.newWindow("https://webdriver.io/");
    await browser.pause(5000);
    await browser.switchWindow("https://www.google.com/");
    await browser.pause(3000);
  });

  it("Network throttling", async () => {
    await browser.throttle("Regular3G");
    await browser.url("https://webdriver.io/");
    await browser.pause(3000);

    await browser.throttle("Regular4G");
    await browser.url("https://webdriver.io/");
    await browser.pause(3000);

    await browser.throttle("offline");
    await browser.url("https://webdriver.io/");
    await browser.pause(3000);
  });

  it("execute js code", async () => {
    const res = await browser.execute(
      (a, b) => {
        return a + b;
      },
      5,
      10
    );
    console.log(res);
    await expect(res).toBe(15);
    await browser.pause(3000);
  });

  it.only("execute ASYNC js code", async () => {
    const res = await browser.executeAsync(
      (a, b, done) => {
        setTimeout(() => {
          done(a + b);
        }, 3000);
      },
      8,
      10
    );
    await expect(res).toBe(18)
  });

  async function loadWebsite() {
    await browser.url(`https://the-internet.herokuapp.com/upload`);
  }

  //   it.only("Before and after hooks", () => {

  //   })
});
