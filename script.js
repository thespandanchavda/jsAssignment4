document.getElementById('fetchDogImage').addEventListener('click', fetchDogImage);

function fetchDogImage() {
    const url = `https://dog.ceo/api/breeds/image/random`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const dogImageResultsDiv = document.getElementById('dogImageResults');
            dogImageResultsDiv.innerHTML = `
                <h2>Here's a random dog for you!</h2>
                <img src="${data.message}" alt="Random Dog" width="300">
            `;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
