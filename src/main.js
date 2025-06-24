import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '..public/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button" class="bg-blue-300 p-4"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <section>
      <h2>Lista artykułów</h2>
      <select id="sortOrder">
        <option value="created_at.asc">Po dacie rosnąco</option>
        <option value="created_at.desc">Po dacie malejąco</option>
        <option value="title.asc">Po tytule A-Z</option>
      </select>
      <div id="articles"></div>
    </section>

    <section>
      <h2>Dodaj nowy artykuł</h2>
      <form id="articleForm">
        <input name="title" placeholder="Tytuł" required><br>
        <input name="subtitle" placeholder="Podtytuł" required><br>
        <input name="author" placeholder="Autor" required><br>
        <textarea name="content" placeholder="Treść" required></textarea><br>
        <input type="date" name="created_at" required><br>
        <button type="submit">Dodaj artykuł</button>
      </form>
    </section>
  </div>

  
`

setupCounter(document.querySelector('#counter'))
const SUPABASE_URL = 'https://kipkplviqflklgdjoxyg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpcGtwbHZpcWZsa2xnZGpveHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0MTQ1MTAsImV4cCI6MjA2NDk5MDUxMH0.MS-azhCqRSWtDNkgnMYAv8KANtOxmLJS-SSQXFPr6r4';

const headers = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
};

// Pobieranie artykułów
async function fetchArticles() {
  const sortOrder = document.getElementById('sortOrder')?.value || 'created_at.asc';
  const res = await fetch(`${SUPABASE_URL}/rest/v1/articles?select=*&order=${sortOrder}`, {
    headers,
  });
  const articles = await res.json();

  const container = document.getElementById('articles');
  container.innerHTML = '';

  articles.forEach(article => {
    const div = document.createElement('div');
    const formattedDate = new Date(article.created_at).toLocaleDateString('pl-PL');
    div.innerHTML = `
      <h3>${article.title}</h3>
      <p><i>${article.subtitle}</i></p>
      <p><b>Autor:</b> ${article.author}</p>
      <p><b>Data:</b> ${formattedDate}</p>
      <p>${article.content}</p>
      <hr>
    `;
    container.appendChild(div);
  });
}

document.getElementById('articleForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;

  const newArticle = {
    title: form.title.value,
    subtitle: form.subtitle.value,
    author: form.author.value,
    content: form.content.value,
    created_at: form.created_at.value,
  };

  await fetch(`${SUPABASE_URL}/rest/v1/articles`, {
    method: 'POST',
    headers,
    body: JSON.stringify(newArticle),
  });

  form.reset();
  fetchArticles();
});

document.getElementById('sortOrder')?.addEventListener('change', fetchArticles);

fetchArticles();
