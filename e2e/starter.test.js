const { device, element, by, expect } = require('detox');

describe('Find Elements by Text', () => {
  // Runs once before all tests in this suite
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true, // Launches a new instance of the app
      permissions: {
        notifications: 'YES', // Allow notifications
        location: 'always' // Always allow location access
      }
    });
  });

  // Runs before each test in this suite
  beforeEach(async () => {
    await device.reloadReactNative(); // Reload the React Native app
  });

  // Test to verify visibility of an element by its ID
  it("should verify the visibility of the element with id 'UniqueId345'", async () => {
    await expect(element(by.id('UniqueId345'))).toBeVisible();
  });
});

// Helper function for delays
