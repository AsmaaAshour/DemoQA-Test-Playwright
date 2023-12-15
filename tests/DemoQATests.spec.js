//ts-check
import { test, expect } from "@playwright/test";

test("radia & checkbox", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");

  //radio
  await page.locator("label[for='gender-radio-2']").click();

  //checkbox
  await page.locator("label[for='hobbies-checkbox-1']").click();
  await page.locator("label[for='hobbies-checkbox-2']").click();
  await page.locator("label[for='hobbies-checkbox-3']").click();

  await page.waitForTimeout(10000);
});

test.skip("dealing with keybord ", async ({ page }) => {
  await page.goto("https://demoqa.com/auto-complete");
  await page.waitForTimeout(5000);

  await page.locator("#autoCompleteMultipleInput").fill("r");
  await page.waitForTimeout(2000);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(2000);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);

  await page.locator("#autoCompleteMultipleInput").fill("p");
  await page.waitForTimeout(2000);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);

  await page.locator("#autoCompleteMultipleInput").fill("l");
  await page.waitForTimeout(2000);
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(2000);
  await page.keyboard.press("Enter");

  await page.waitForTimeout(3000);
});

test.skip("alert", async ({ page }) => {
  //normal alert
  // await page.goto("https://demoqa.com/alerts")

  // page.on('dialog', dialog => dialog.accept());
  // await page.locator('#alertButton').click();

  //confirm alert
  //   await page.goto("https://demoqa.com/alerts")

  //   page.on('dialog',  dialog => {
  //   if (dialog.type() === 'confirm') {
  //    dialog.accept()
  //    //dialog.dismiss()
  //   }
  // })
  //   await page.locator('#confirmButton').click()

  //promet alert
  // await page.goto("https://demoqa.com/alerts")

  // page.on('dialog', dialog => {
  //   if (dialog.type() === 'prompt') {
  //    dialog.accept('automation tester')
  //    //dialog.dismiss()
  //   }
  // });
  // await page.locator('#promtButton').click();

  await page.waitForTimeout(3000);
});

test.skip("increase window screen", async ({ page }) => {
  await page.goto("https://demoqa.com/alerts");
  await page.setViewportSize({ width: 1500, height: 1000 });
  await page.waitForTimeout(3000);
});
