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

        await page.waitForTimeout(1500)
        const resultTecnology = await page.evaluate(() => {
            const mapText = Array.from(document.querySelectorAll('.jobs-search-results-list__text'))
                                 .map(e => e.textContent.replace(/ /g, '').split('\n').join(''))
            

            const textResultsOfTecnology = mapText[1].split('resultados').join('')
            const tecnology = mapText[0].split('en')[0]
            const location = mapText[0].split('en')[1]
            console.log(textResultsOfTecnology, tecnology, location)
            
            const objData = {
                reuslt: textResultsOfTecnology,
                tecnology,
                location: location === 'Arg' ? 'Argentina': location
            }

            return objData
        })

        console.log(resultTecnology)

    }

    /**
     * 
     * 
 
 
         console.log(resultTecnology) */

    //await page.waitForTimeout(2000)
    //await page.goto('https://www.linkedin.com/jobs/')

    //}

})();