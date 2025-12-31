const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--window-size=1800,1080"],
  });

  const page = await browser.newPage();

  await page.setViewport({ width: 1800, height: 1080 });

  await page.goto("https://dev-tidner.netlify.app", {
    waitUntil: "networkidle2",
  });

  console.log("Webpage loaded");

  // wait for username input
  await page.waitForSelector(".input.validator");

  // type email
  await page.type(".input.validator", "akshithg01@gmail.com", {
    delay: 100, // human-like typing
  });

  // wait for password input
  await page.waitForSelector('input[type="password"]');

  // type password
  await page.type('input[type="password"]', "Akshithg123#", {
    delay: 100,
  });

  const loginButton = ".btn.btn-primary.mt-4";

  await page.waitForSelector(loginButton);

  await page.click(loginButton);

  await browser.close();
})();
