import { urlChecker } from './urlChecker'

function handleSubmit(event) {
    event.preventDefault()

    let urlInput = document.getElementById('name').value
    if(urlChecker(urlInput)){
        fetch('http://localhost:8081/evaluate',{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({url: urlInput})
        })
        .then(res => res.json())
        .then((res) => {
            const { summary } = res
            document.getElementById('results').innerHTML = `Summary from API: ${summary}`
        })
    }else{
        document.getElementById('results').innerHTML = 'Invalid URL, Please Enter a Valid URL.'
    }
}

export { handleSubmit }
