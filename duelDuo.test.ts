
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(3000)
})

test('draw button displays choices', async () => {
    await driver.findElement(By.id('draw')).click()
    const view = await driver.findElement(By.id('choices'))
    const displayed = await view.isDisplayed()
    expect(displayed).toBe(true)
    
    await driver.sleep(3000)
})

test('add to duo adds cards', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.css('[class= "bot-btn"]')).click()
    const duoHeader = await driver.findElement(By.id('your-duo-header'))
    const displayed = await duoHeader.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(3000)
})