import { defineConfig, devices } from '@playwright/test';

// Set webServer.url and use.baseURL with the location of the WebServer
const baseURL = 'http://localhost:3000';

export default defineConfig({
  testDir: './e2e',
  outputDir: './.playwright/output',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI
    ? [
        ['list'],
        ['html', { open: 'never', outputFolder: './.playwright/report' }],
      ]
    : [['html', { open: 'on-failure', outputFolder: './.playwright/report' }]],
  use: {
    baseURL: baseURL,
    trace: 'on-first-retry',
  },

  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  // Run your local dev server before starting the tests.
  webServer: {
    command: 'pnpm dev',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    stderr: 'pipe',
  },
});
