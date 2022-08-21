const { protractor } = require('protractor');

const expect = require('chai').expect
const EC = protractor.ExpectedCondition

describe('First suit', function(){
    
    const serchValue = 'qa automation engineer '

    it('first test', async function(){
    const searchInputSelector = '#__next > main > section.Intro_container__sdhOk.Container_container__r5p_u.Container_whiteBG__T_ryt > div > div.SearchInput_wrapper__gzx1Y.Intro_search__SB5t4 > div > input'
    const searchInput = $(searchInputSelector)

    const searchButtonSelector = '#__next > main > section.Intro_container__sdhOk.Container_container__r5p_u.Container_whiteBG__T_ryt > div > div.SearchInput_wrapper__gzx1Y.Intro_search__SB5t4 > div > svg'
    const serchButton = $(searchButtonSelector)

    const catalogTiileSelector = '#__next > main > section.Container_container__r5p_u.Container_whiteBG__T_ryt.Container_paddingWithout__ApVLg > div > div > div > h1'
    const catalogTiile = $(catalogTiileSelector)    


    await browser.get('https://people.andersenlab.com/ua')

    await browser.wait(EC.visibilityOf(searchInput), 5000, 'Search input should be visible')
    await browser.wait(EC.visibilityOf(searchButton), 5000, 'Search input should be visible')

    await searchInput.sendkeys(serchValue)
    await searchButton.click()

    await browser.wait(EC.visibilityOf(catalogTiile), 5000, 'Catalog title should be visible')
    
    const catalogTitleValue = await catalogTiile.getText()
    expect(catalogTitleValue).to.include('Вакансії в Andersen')

    })
});
