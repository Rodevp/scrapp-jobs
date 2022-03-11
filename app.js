const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.linkedin.com/login/es?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin');

    await page.waitForTimeout(2000)
    await page.evaluateHandle(() => {
        const input = document.getElementById('username')
        const inputPass = document.getElementById('password')


        input.value = 'rodriguezrodrigor12@gmail.com'
        inputPass.value = 'roxd**17'

    })

    const btn = await page.evaluateHandle(() => 
        document.querySelector('.btn__primary--large')
    )
    btn.click()

    await page.waitForTimeout(2000)
    page.goto('https://www.linkedin.com/jobs/')
  
})();