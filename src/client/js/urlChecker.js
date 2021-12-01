function urlChecker(url) {
    const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    
    const validURL = pattern.test(url)
    
    return validURL
}

export { urlChecker }
