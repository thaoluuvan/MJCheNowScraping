const phantom = require('phantom');
const url= "https://www.now.vn/ha-noi/tra-sua-heytea-nga-tu-so";

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    // await page.on("onResourceRequested", function(requestData) {
    //     console.info('Requesting', requestData.url)
    // });

    const status = await page.open(url);
   // console.log(status);

    const content = await page.property('body');
    console.log(content);
    await instance.exit();
}());