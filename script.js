// Example article data
const articles = [
  { title: "My First Article", content: "This is my very first article!" },
  { title: "Learning JavaScript", content: "JavaScript lets you make your site dynamic." },
  { title: "Future Ideas", content: "I plan to add more articles soon!" }
];

const articlesDiv = document.getElementById('articles');

// Loop through articles and display them
articles.forEach(article => {
  const div = document.createElement('div');
  div.className = 'article';
  div.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
  articlesDiv.appendChild(div);
});
