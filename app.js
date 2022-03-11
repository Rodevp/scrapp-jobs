const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false, defaultViewport: null});
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
    await page.goto('https://www.linkedin.com/jobs/')
  
    const inputs_search = [
        {
            tecnology: 'python',
            countrie: 'Colombia'
        }
    ]

    for(let i = 0; i < inputs_search.length; i++) {

        await page.waitForTimeout(1500)
        
        const tecnology = inputs_search[i].tecnology 
        const countrie = inputs_search[i].countrie 
        
        await page.type('#jobs-search-box-keyword-id-ember31', tecnology)
        await page.type('#jobs-search-box-location-id-ember31', countrie)
        await page.click('.jobs-search-box__submit-button')

        //await page.goto('https://www.linkedin.com/jobs/')


    }

})();