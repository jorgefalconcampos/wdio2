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
    await browser.url(`https://the-internet.herokuapp.com/upload`);
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
    const remoteFilePath = await browser.uploadFile(filePath);
    await $("#file-upload").setValue(remoteFilePath);
    await $("#file-submit").click();
    await browser.pause(2000);
  });

  //   it.only("Before and after hooks", () => {

  //   })
});
