import { urlChecker } from "../js/urlChecker";

describe("URL Checker Testing", ()=>{
    test("Check Defined", ()=>{
        expect(urlChecker).toBeDefined()
    })
    test("Check Truthy", ()=>{
        const urlExample='https://en.wikipedia.org/wiki/Star_Trek'
        expect(urlChecker(urlExample)).toBeTruthy()
    })
    test("Check Falsy", ()=>{
        const urlExample='invalid url'
        expect(urlChecker(urlExample)).toBeFalsy()
    })
})