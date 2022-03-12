const { chromium } = require('playwright');

(async () => {

    const browser = await chromium.launch({ headless: false })
    const page = await browser.newPage()

    await page.goto('https://www.linkedin.com/login/es?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin')

    await page.waitForTimeout(1000)

    await page.fill('input[id="username"]', 'rodriguezrodrigor12@gmail.com')
    await page.fill('input[id="password"]', 'roxd**17')
    await page.click('button[aria-label="Iniciar sesión"]')

    await page.waitForTimeout(1500)
    await page.goto('https://www.linkedin.com/jobs/')

    const inputs_search = [
        {
            tecnology: 'python',
            countrie: 'Argentina'
        },
        {
            tecnology: 'python',
            countrie: 'Colombia'
        },
        {
            tecnology: 'python',
            countrie: 'Chile'
        },
        {
            tecnology: 'python',
            countrie: 'Ecuador'
        },
        {
            tecnology: 'python',
            countrie: 'Peru'
        }
    ]

    await page.waitForTimeout(2000)

    for (let i = 0; i < inputs_search.length; i++) {

        const tecnology = inputs_search[i].tecnology
        const countrie = inputs_search[i].countrie

        await page.waitForTimeout(2000)

        await page.locator('//*/div[6]/header/div/div/div/div[2]/div[1]/div/div/input[1]').fill(tecnology)
        await page.locator('//*/div[6]/header/div/div/div/div[2]/div[2]/div/div/input[1]').fill(countrie)
        await page.locator('//*/div[6]/header/div/div/div/div[2]/button[1]').click()


    }

    /**
     * 
     * 
 
     for(let i = 0; i < inputs_search.length; i++) {
 
          
         
         await page.waitForTimeout(5000)
         const inputs = await page.evaluate(() => document.querySelectorAll('.jobs-search-box__text-input'))
         console.log(inputs[0], inputs[3])
 
         //await page.click('.jobs-search-box__submit-button')
         /**
 
         await page.waitForTimeout(2000)
         const resultTecnology = await page.evaluate( () => {
 
             const mapText = Array.from( document.querySelectorAll('.jobs-search-results-list__text') )
                                  .map( e => e.textContent.replace(/ /g, '').split('\n').join('') )
 
             const textResultsOfTecnology = mapText[1].split('resultados').join('')
             const tecnology = mapText[0]
 
             console.log(tecnology)
             
             return textResultsOfTecnology
 
         })
 
         console.log(resultTecnology) */

    //await page.waitForTimeout(2000)
    //await page.goto('https://www.linkedin.com/jobs/')

    //}

})();