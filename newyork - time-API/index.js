let myApiKey = 'iNGU9sj7ppJ2ooSxcivij5osj3K9lKmE',
    topStoriesApi = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${myApiKey}`,
    booksApi = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${myApiKey}`,
    mostPopularApi = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${myApiKey}`,
    movieReviewsApi = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=${myApiKey}`,
    mainPage = document.querySelector('.mainPage'),
    h1 = document.querySelector('h1'),
    h2 = document.querySelector('h2'),
    h6 = document.querySelector('h6'),
    topStories = document.querySelector('.topStories'),
    books = document.querySelector('.books'),
    mostPopular = document.querySelector('.mostPopular'),
    movieReviews = document.querySelector('.movieReviews'),
    headLines1 = document.querySelector('.headLines1'),
    headLines2 = document.querySelector('.headLines2'),
    headLines3 = document.querySelector('.headLines3'),
    headLines4 = document.querySelector('.headLines4');
    

async function collectData (){
    if (!localStorage.getItem("tempStorage")){
    let data = await( await fetch (topStoriesApi)).json();
    let data1 = await( await fetch (booksApi)).json();
    let data2 = await( await fetch (mostPopularApi)).json();
    let data3 = await( await fetch (movieReviewsApi)).json();
    localStorage.setItem("tempStorage", JSON.stringify({ data: data, data1: data1, data2: data2, data3: data3 }))
}
let data = JSON.parse(localStorage.getItem("tempStorage"))
 
    
    console.log(data);
    h1.innerHTML = `${data.data.section}<span>by Shadi</span>`;
    h2.innerHTML = data.data.last_updated;
    h6.innerHTML = data.data.copyright
    

    data.data.results.forEach((el) => {
        headLines1.innerHTML += buildHeadLine(el)
    });
    data.data1.results.books.forEach((el) => {
        headLines2.innerHTML += buildHeadLine2(el)
    });
    data.data2.results.forEach((el) => {
        headLines3.innerHTML += buildHeadLine3(el)
    });
    data.data3.results.forEach((el) => {
        headLines4.innerHTML += buildHeadLine4(el)
    });

};
collectData()


// <!-- copyright: "Copyright (c) 2021 The New York Times Company. All Rights Reserved."
// last_updated: "2021-10-13T02:55:07-04:00"
// num_results: 37
// results: (37) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// section: "World News"
// status: "OK" -->
function buildHeadLine (result) {
    let str = `<div class="headLine">`;
        str += `<h3> ${result.title}</h3>`;
        str += `<h6> ${result.published_date}</h6>`;
        str += `<h5> ${result.byline}</h5>`;
        str += `<p> ${result.abstract}</p>`;
        str += `<p><img src="${result.multimedia[0].url}"> </p>`;
        str += `<h6> <a href="${result.url}">link</a></h6>`;
        str +=  `</div>`;
        return str;
    }
function buildHeadLine2 (result) {
    let str = `<div class="headLine">`;
        str += `<h3> ${result.title}</h3>`;
        str += `<h6> rank ${result.rank}</h6>`;
        str += `<h5> ${result.author}</h5>`;
        str += `<p> ${result.description}</p>`;
        str += `<p><img src="${result.book_image}"> </p>`;
        str += `<h6>where to buy <a href="${result.amazon_product_url}">link</a></h6>`;
        str +=  `</div>`;
        return str;
    }
function buildHeadLine3 (result) {
    let str = `<div class="headLine">`;
        str += `<h3> ${result.title}</h3>`;
        str += `<h6> ${result.updated}</h6>`;
        str += `<h5> ${result.byline}</h5>`;
        str += `<p> ${result.abstract}</p>`;
        // str += `<p><img src="${result.media.media-metadata[0].url}"> </p>`;
        str += `<h6> <a href="${result.url}">link</a></h6>`;
        str +=  `</div>`;
        return str;
    }
function buildHeadLine4 (result) {
    let str = `<div class="headLine">`;
        str += `<h3> ${result.display_title}</h3>`;
        str += `<h6> ${result.date_updated}</h6>`;
        str += `<h5> ${result.byline}</h5>`;
        str += `<p>  ${result.headline}</p>`;
        // str += `<p><img src="${result.multimedia.src}"> </p>`;
        str += `<h6> <a href="${result.link.url}">link</a></h6>`;
        str +=  `</div>`;
        return str;
    }
        

    topStories.addEventListener('click', ()=>{
        headLines1.style.display ='block'
        headLines2.style.display ='none'
        headLines3.style.display ='none'
        headLines4.style.display ='none'
})  
    books.addEventListener('click', ()=>{
        headLines1.style.display ='none'
        headLines2.style.display ='block'
        headLines3.style.display ='none'
        headLines4.style.display ='none'
})  
mostPopular.addEventListener('click', ()=>{
        headLines1.style.display ='none'
        headLines2.style.display ='none'
        headLines3.style.display ='block'
        headLines4.style.display ='none'
})  
movieReviews.addEventListener('click', ()=>{
        headLines1.style.display ='none'
        headLines2.style.display ='none'
        headLines3.style.display ='none'
        headLines4.style.display ='block'
})  
//         abstract: "Martín Zamora, the owner of a funeral parlor near Gibraltar, has found an unusual line of business among the relatives of those who drown trying to reach Europe."
// byline: "By Nicholas Casey and Leire Ariz Sarasketa"
// created_date: "2021-10-12T05:00:23-04:00"
// des_facet: (7) ['Drownings', 'Middle East and Africa Migrant Crisis', 'Illegal Immigration', 'Funerals and Memorials', 'Maritime Accidents and Safety', 'Immigration and Emigration', 'Morgues and Mortuaries']
// geo_facet: (3) ['Spain', 'Morocco', 'Mediterranean Sea']
// item_type: "Article"
// kicker: ""
// material_type_facet: ""
// multimedia: (5) [{…}, {…}, {…}, {…}, {…}]
// org_facet: []
// per_facet: []
// published_date: "2021-10-12T05:00:23-04:00"
// section: "world"
// short_url: "https://nyti.ms/3asstZZ"
// subsection: "europe"
// title: "The Body Collector of Spain: When Migrants Die at Sea, He Gets Them Home"
// updated_date: "2021-10-12T23:41:54-04:00"
// uri: "nyt://article/e34dfa1a-0009-5d08-8ba3-43ba24ab7328"
// url: "https://www.nytimes.com/2021/10/12/world/europe/spain-migrants-funeral-home.html"
// [[Prototype]]: Object