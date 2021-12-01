import { urlChecker } from './urlChecker'

function handleSubmit(event) {
    event.preventDefault()

    let urlInput = document.getElementById('name').value
    if(urlChecker(urlInput)){
        document.getElementById('results').innerHTML = 'Loading, Please wait...'
        fetch('http://localhost:8081/evaluate',{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({url: urlInput})
        })
        .then(res => res.json())
        .then((res) => {
            const { agreement, subjectivity, confidence, irony } = res
            document.getElementById('results').innerHTML = `Results from API: 
             Agreement: ${agreement},
             Subjectivity: ${subjectivity}, 
             Confidence: ${confidence}, 
             Irony: ${irony}`
        })
    }else{
        document.getElementById('results').innerHTML = 'Invalid URL, Please Enter a Valid URL.'
    }
}

export { handleSubmit }
