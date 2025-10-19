// 📝 Add your articles here (you can add as many as you want)
const articles = [
  {
    date: "January 19, 2025",
    title: "The Beauty of Thinking",
    link: "articles/beauty-of-thinking.html",
    image: "images/klara.jpeg",
    preview: "Exploring how deep thinking can shape our perspective of the world and help us build a meaningful life."
  },
  {
    date: "January 16, 2025",
    title: "Understanding Simplicity",
    link: "articles/understanding-simplicity.html",
    image: "images/klara.jpeg",
    preview: "In a noisy world, simplicity is powerful. Here’s why clarity and minimalism matter in both design and thought."
  },
  {
    date: "January 14, 2025",
    title: "Reflections of the Mind",
    link: "articles/reflections.html",
    image: "images/klara.jpeg",
    preview: "Every thought leaves an imprint. This article explores how self-reflection fuels creativity and growth."
  },
 
  {
    date: "February 2, 2025",
    title: "My New Article",                 // 👈 title here
    link: "articles/my-new-article.html",    // 👈 link to the file you created
    image: "images/klara.jpeg",              // 👈 image path (optional)
    preview: "This is a short preview of my new article." // 👈 small intro
  }


];

// 📌 Select the container in index.html where articles will be added
const container = document.querySelector('.article-list');

// 🪄 Dynamically add articles to the page
articles.forEach(article => {
  const el = document.createElement('article');
  el.className = 'article-preview';
  el.innerHTML = `
    <div class="article-date">${article.date}</div>
    <h2><a href="${article.link}">${article.title}</a></h2>
    <img class="article-image" src="${article.image}" alt="${article.title}">
    <p>${article.preview}</p>
    <a href="${article.link}" class="read-more">Read more →</a>
  `;
  container.appendChild(el);
});
