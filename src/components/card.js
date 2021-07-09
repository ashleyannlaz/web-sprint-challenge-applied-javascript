const Card = (article) => {
  const cardsDiv = document.createElement('div');
  cardsDiv.classList.add('card');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imgContain = document.createElement('div')
    const imgAuthor = document.createElement('img');
    const authorName = document.createElement('span');

    headLine.classList.add('headline');
    author.classList.add('author');
    imgContain.classList.add('img-container');

    headLine.textContent = article.headline;
    imgAuthor.src = article.authorPhoto;
    authorName.textContent = `By ${article.authorName}`;

    cardsDiv.appendChild(headLine);
    cardsDiv.appendChild(author);
    author.appendChild(imgContain);
    imgContain.appendChild(imgAuthor);
    author.appendChild(authorName);

    cardsDiv.addEventListener('click', function() {
      console.log(article.headline);
    })
  return cardsDiv;
  // Task 5 Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
}
const cardAppender = (selector) => {
  const axios = require('axios');
  const sel = document.querySelector(selector);
  // Importing array data
  axios.get('http://localhost:5000/api/articles')
  .then(function (response) { // handle success
     const bs = response.data.articles.bootstrap;
     bs.forEach(arts => {
      sel.appendChild(Card(arts)); 
     })
     const js = response.data.articles.javascript;
     js.forEach(arts => {
      sel.appendChild(Card(arts)); 
     })
     const jq = response.data.articles.jquery;
     jq.forEach(arts => {
      sel.appendChild(Card(arts)); 
     })
     const node = response.data.articles.node;
     node.forEach(arts => {
      sel.appendChild(Card(arts)); 
     })
     const ty = response.data.articles.technology;
     ty.forEach(arts => {
      sel.appendChild(Card(arts)); 
     })
    console.log("These are the articles:", response); 
  })
  // Task 6 Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
}
export { Card, cardAppender }
