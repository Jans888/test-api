const fs = require('fs')

const fileContents = fs.readFileSync('log').toString()
let details = []
let keyStringStart = ' AssertionError '
let section = fileContents.split(keyStringStart)

if (section.length > 1) {
    let keyStringStart = '#  failure         detail'
    let keyStringEnd = '#### Finished Execution ####'
    let sectionTemp = fileContents.substring( 0, fileContents.indexOf(keyStringEnd) ).replace("", "")
    details = sectionTemp.substring(sectionTemp.indexOf(keyStringStart) + 1).replace(" failure         detail", "").replace(/^\s*\n/gm, "").replace(/^/gm, '<br>').replace(/AssertionError/g, "<b>AssertionError - </b>")

} else {
    details = ["No issues"]
}

fs.writeFile("details.txt", details, function (err) {

    // Checks if there is an error
    if (err) return console.log(err);
})