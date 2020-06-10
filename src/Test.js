const Step = require('./Step')

class Test{
    constructor(testName, testId){
        this.testName = testName
        this.testId = testId
        this.steps = []
        this.amountOfSteps = 0

        this.test = 
        `<tr>
            <td>${this.testName}</td>
            <td>${this.testId}</td>
            <td>${true?'Pass':'Fail'}</td>
            <td>
                <button class="btn-details" onclick="displayDetails()">Details</button>
            </td>
        </tr>`
    }

    increaseAmountOfSteps(){
        this.amountOfSteps++
    }

    addStep(stepName, expected){
        this.steps.push(new Step())
    }

    getTest(){
        return this.test
    }
}

module.exports = Test