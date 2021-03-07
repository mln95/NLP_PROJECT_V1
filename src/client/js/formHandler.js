function handleSubmit(event) {
    event.preventDefault()
    // get the url from the users
    let user_url = document.getElementById('url').value;
    console.log(user_url);

    // send the url to the server for the API CALL
    if(Client.checkUrl(user_url)){
    fetch("http://localhost:3000/server", {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_url
            }),
        }).then((res) => res.json())
        .then((res) => {
            console.log(res);
            client_data(res);
        })
    } else{
        console.error("Please add a correct URL");
        alert("Please add a correct URL")
    }
        function client_data(res){
            document.getElementById('score_tags').innerText +=" " + res.score_tag;
            document.getElementById('irony').innerText +=" " + res.irony;
            document.getElementById('subjectivity').innerText +=" " + res.subjectivity;
            document.getElementById('confidence').innerText +=" " + res.confidence;
        }
        

   
    //  sendData("/server", user_url);
    //get the data of the API send by the server
    //     const url = "/server";
    //     function receiveData() {
    //       const serverResponse = fetch(`http://localhost:3000${url}`);
    //       const convertToJson = serverResponse.json();
    //       console.log(convertToJson);
    //       return convertToJson;
    //     }
    //     receiveData();
}
export {

    handleSubmit
}