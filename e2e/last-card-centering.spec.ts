import { test, expect, devices } from "@playwright/test";

const viewports = [
  { name: "mobile", ...devices["iPhone 13"].viewport },
  { name: "tablet", width: 820, height: 1180 },
  { name: "desktop", width: 1440, height: 900 },
] as const;

const TOLERANCE = 2; // px

for (const vp of viewports) {
  test.describe(`Last odd card centering — ${vp.name} (${vp.width}x${vp.height})`, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } });

    test("the last card is horizontally centered when count is odd", async ({ page }) => {
      // Pre-unlock the gated content
      await page.addInitScript(() => {
        localStorage.setItem("ceo-ose-subscribed", "true");
      });

      await page.goto("/");
      await page.waitForLoadState("networkidle");

      for (const gridId of ["business-grid", "famille-grid"] as const) {
        const grid = page.getByTestId(gridId);
        await expect(grid).toBeVisible();

        const wrappers = grid.getByTestId("card-wrapper");
        const count = await wrappers.count();
        const lastOddAttr = await wrappers.nth(count - 1).getAttribute("data-last-odd");

        // Skip the assertion when the section has an even count (no centering needed)
        if (lastOddAttr !== "true") continue;

        const gridBox = await grid.boundingBox();
        const lastBox = await wrappers.nth(count - 1).boundingBox();
        if (!gridBox || !lastBox) throw new Error("Missing bounding box");

        const leftGap = lastBox.x - gridBox.x;
        const rightGap = gridBox.x + gridBox.width - (lastBox.x + lastBox.width);

        expect(
          Math.abs(leftGap - rightGap),
          `${gridId} on ${vp.name}: left=${leftGap} right=${rightGap}`
        ).toBeLessThanOrEqual(TOLERANCE);

        if (vp.width >= 768) {
          // On tablet/desktop the centered card should be roughly half the grid width
          expect(lastBox.width).toBeLessThan(gridBox.width * 0.6);
          expect(lastBox.width).toBeGreaterThan(gridBox.width * 0.4);
        } else {
          // On mobile the single column spans the full grid
          expect(Math.abs(lastBox.width - gridBox.width)).toBeLessThanOrEqual(TOLERANCE);
        }
      }
    });
  });
}
