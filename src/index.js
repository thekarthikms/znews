import "./css/main.scss"

let subImg = document.querySelector('#subimg'),
    latestNews = document.querySelector('#latest'),
    comment = document.querySelector('#comment'),
    trending = document.querySelector('#trending'),
    newsContent = document.querySelector('#newscontent')

const newsContentGen = (data,info) => {
    removeAllChildNodes(newsContent)
    let articles = data.articles
    for (let i = info; i <info+6 ; i++) {
        createNews(articles[i])
    }

}



const getData = (info) => {
    fetch(' https://newsapi.org/v2/top-headlines?country=in&apiKey=c412f1ccc12b4bf28acf0968c17231ef').then(response => response.json()).then(data => {
        console.log(data.articles)
        newsContentGen(data,info)
    })
}

getData(0)


comment.addEventListener('click', () => {
    let x = document.querySelector('.active')
    x.classList.remove('active')
    comment.classList.add('active')
    getData(7)

})
trending.addEventListener('click', () => {
    let x = document.querySelector('.active')
    x.classList.remove('active')
    trending.classList.add('active')
    getData(12)

})
latestNews.addEventListener('click', () => {
    let x = document.querySelector('.active')
    x.classList.remove('active')
    latestNews.classList.add('active')
    getData(0)

})





const createNews = (article) => {
    let nContent = document.createElement('div')
    let newsImg = document.createElement('div')
    let newsDetail = document.createElement('div')
    let newsTitle = document.createElement('div')
    let newsAuthTime = document.createElement('div')
    let img = document.createElement('img')
    let h1 = document.createElement('h1')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')

    img.setAttribute('src', `${article.urlToImage}`)
    h1.innerHTML = `${article.title}`
    p1.innerHTML = `${article.author}`
    p2.innerHTML = `${article.publishedAt}`

    nContent.setAttribute('class', 'n-content')
    newsImg.setAttribute('class', 'news-img')
    newsDetail.setAttribute('class', 'news-details')
    newsTitle.setAttribute('class', 'news-title')
    newsAuthTime.setAttribute('class', 'news-author-time')

    newsAuthTime.append(p1)
    newsAuthTime.append(p2)
    newsTitle.append(h1)
    newsDetail.append(newsTitle)
    newsDetail.append(newsAuthTime)
    newsImg.append(img)
    nContent.append(newsImg)
    nContent.append(newsDetail)
    newsContent.append(nContent)
}


fetch('https://picsum.photos/v2/list').then(response => response.json()).then(data => {
    console.log(data)
    setImg(data)
})

const setImg = (data) => {
    removeAllChildNodes(subImg)
    for (let i = 0; i < 5; i++) {
        let sub = document.createElement('div')
        let img = document.createElement('img')
        let over = document.createElement('div')
        let h1 = document.createElement('h1')
        over.setAttribute('class', 'overlay')
        sub.setAttribute('class', `sub item${i+1}`)
        img.setAttribute('src', `${data[i].download_url}`)
        h1.innerHTML = `Photo by ${data[i].author}`
        sub.append(img)
        sub.append(over)
        sub.append(h1)
        subImg.append(sub)

    }
}

let removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}