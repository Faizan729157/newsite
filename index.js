const newsApi = 'd5c867ea5a1247a4acd5db45d6b2c2b8';
const container = document.querySelector("#container-grid")


function emit() {
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2026-04-07&sortBy=publishedAt&pageSize=13&page=1&apiKey=${newsApi}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            localStorage.setItem('teslaArticles', JSON.stringify(data.articles))
            // console.log(data)

        })
        .catch((error) => console.log(error))
}

function cards() {
    const teslaArticles = JSON.parse(localStorage.getItem("teslaArticles"))
    for (let index = 0; index < teslaArticles.length; index++) {
        const element = teslaArticles[index];
        let card = document.createElement("div")
        let img = document.createElement("img")
        let contentBox = document.createElement("div")
        let nameAuthor = document.createElement("h3")
        card.classList.add("card")
        img.classList.add("card-image")
        contentBox.classList.add("card-content")
        nameAuthor.classList.add("card-title")
        img.setAttribute("src",element.urlToImage)
        nameAuthor.textContent=element.content
        container.appendChild(card)
        card.append(img,contentBox)
        contentBox.appendChild(nameAuthor)
    }
}
// emit()
cards()