const Base = require('./base/base')

class Car extends Base{
    constructor({ name, id, releaseYear, avaiable, gasAvailable }){
        super({name, id})
        this.releaseYear = releaseYear
        this.avaiable = avaiable
        this.gasAvailable = gasAvailable 
    }
}

module.exports = Car