const  { arrSearchReusults } = require('./data.js')
const { chromium } = require('playwright')
const { client } = require('./db.js')

const init = async () => {

    const browser = await chromium.launch({ headless: false })
    const page = await browser.newPage()

    await page.goto('https://www.linkedin.com/login/es?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin')

    await page.waitForTimeout(1000)

    await page.fill('input[id="username"]', 'rodriguezrodrigo17@hotmail.com')
    await page.fill('input[id="password"]', 'Roxd**17')
    await page.click('button[aria-label="Iniciar sesión"]')

    await page.waitForTimeout(1500)
    await page.goto('https://www.linkedin.com/jobs/')

  

    const resultOfTecnologys = []

    await page.waitForTimeout(2000)

    for (let i = 0; i < arrSearchReusults.length; i++) {

        const tecnology = arrSearchReusults[i].tecnology
        const countrie = arrSearchReusults[i].countrie

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
                location: location === 'Arg' ? 'Argentina': location,
            }

            return objData
        })

        resultOfTecnologys.push(resultTecnology)

    }

    console.log(resultOfTecnologys)

}

//init()

/**
 * 
 * {
 *  result,
 *  tecnology,
 *  location
 * }
 * 
 * 
 * saveLocation(location)
 * saveTecnology(tecnology)
 * result(result, [i + 1], [i + 1])
 * 
 * 
*/