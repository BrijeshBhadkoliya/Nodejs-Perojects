const puppeteer = require('puppeteer');

(async () => {
    // Use a specific browser profile or set up a custom user profile directory
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', // Path to your Chrome installation
        userDataDir: 'C:/Users/YourUsername/AppData/Local/Google/Chrome/User Data' // Replace with your profile path
    });

    const page = await browser.newPage();

    const targetUrl = 'https://web.whatsapp.com';
    // const defaultUrl = 'https://www.brijeshbhadkoliya.com'; // Example default page (replace with a real URL if needed)

    try {
        await page.goto(targetUrl, { waitUntil: 'networkidle2', timeout: 60000 });
        console.log(`Navigated to ${targetUrl} successfully`);
    } catch (error) {
        console.error(`Failed to navigate to ${targetUrl}. Redirecting to default page.`);
        await page.goto(defaultUrl, { waitUntil: 'networkidle2', timeout: 60000 });
        console.log(`Navigated to ${defaultUrl}`);
        await browser.close();
        return;
    }

    // Wait for the QR code to be scanned
    try {
        await page.waitForSelector("._3FRCZ", { timeout: 60000 }); // Adjust this selector as needed
        console.log("Logged in successfully");
    } catch (error) {
        console.error("Error: QR code not scanned in time or selector not found.");
        await browser.close();
        return;
    }

    const contactName = "CONTACT_NAME"; // Replace with the contact name
    const message = "Hi"; // Replace with your message

    // Search for the contact
    try {
        await page.type("._3FRCZ", contactName, { delay: 100 });
        await page.keyboard.press('Enter');
    } catch (error) {
        console.error("Error: Unable to find the contact search box or contact.");
        await browser.close();
        return;
    }

    // Wait for the chat to open by checking if the message input box appears
    try {
        await page.waitForSelector("._2A8P4", { timeout: 10000 }); // Adjust this selector as needed
    } catch (error) {
        console.error("Error: Chat box did not open.");
        await browser.close();
        return;
    }

    // Type the message
    try {
        await page.type("._2A8P4", message, { delay: 100 });
        await page.keyboard.press('Enter');
        console.log("Message sent successfully");
    } catch (error) {
        console.error("Error: Unable to type or send the message.");
    }

    // Keep the browser open with the chat open, if you don't want to close it
    // await browser.close(); // Uncomment this line if you want to close the browser
})();
