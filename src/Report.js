const Test = require('./Test')
const fs = require('fs')

class Report{

    constructor(){
        // this.tests = []
        // this.amountOfTests = 0
        // this.runTime
        // this.versoin
        // this.testType
        // this.getBaseHTML()
        this.baseHTML
        this.getBaseHTML()
        console.log(this.baseHTML)
        // fs.writeFile(`./reports/${new Date().getTime()}.html`, this.baseHTML, (error) => console.error('error', error))
    }

    async getBaseHTML(){
        const bubu = ''
        await fs.readFile('index.html', (err, data) => { 
            if (err) throw err; 
          
            bubu = data.toString() 
        }) 
        console.log(bubu)
    }

    increaseAmountOfTests(){
        this.amountOfTests++
    }

    addTest(){
        this.tests.push(new Test())
    }

}

const r1 = new Report()


module.exports = Report