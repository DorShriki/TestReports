function displayDetails(){
    let table = document.getElementById("test")
    let overlay = document.getElementById("overlay")
    table.setAttribute("style", "visibility: visible;")
    overlay.setAttribute("style", "visibility: visible;")
}

function cancle(){
    let table = document.getElementById("test")
    let overlay = document.getElementById("overlay")
    table.setAttribute("style", "visibility: hidden;")
    overlay.setAttribute("style", "visibility: hidden;")
}

function addTest(testName, testId, result){
    let isSuccess = result?'Pass' : 'Fail'
    let tableData = `
        <tr>
            <td>${testName}</td>
            <td>${testId}</td>
            <td>${isSuccess}</td>
            <td>
                <button class="btn-details" onclick="displayDetails()">Details</button>
            </td>
        </tr>`
    let testTable = document.getElementById('testsTable')
    testTable.insertAdjacentHTML("beforeend", tableData)

}

function addStep(stepName, expected, result){
    let isSuccess = result?'Pass' : 'Fail'
    let stepData = `
        <tr>
            <td>${new Date().getTime()}</td>
            <td>${stepName}</td>
            <td>${expected}</td>
            <td>${isSuccess}</td>
            <td>
                <button class="btn-details">Screen Shot</button>
            </td>
        </tr>`
    let stepTable = document.getElementById('stepsTable')
    stepTable.insertAdjacentHTML("beforeend", stepData)

}
