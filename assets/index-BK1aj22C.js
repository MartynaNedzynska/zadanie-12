(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function h(o){let r=0;const n=i=>{r=i,o.innerHTML=`count is ${r}`};o.addEventListener("click",()=>n(r+1)),n(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" " class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="./javascript.svg" class="logo vanilla" alt="JavaScript logo" />
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

  
`;h(document.querySelector("#counter"));const u="https://kipkplviqflklgdjoxyg.supabase.co",s="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpcGtwbHZpcWZsa2xnZGpveHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0MTQ1MTAsImV4cCI6MjA2NDk5MDUxMH0.MS-azhCqRSWtDNkgnMYAv8KANtOxmLJS-SSQXFPr6r4",p={apikey:s,Authorization:`Bearer ${s}`,"Content-Type":"application/json"};async function c(){var e;const o=((e=document.getElementById("sortOrder"))==null?void 0:e.value)||"created_at.asc",n=await(await fetch(`${u}/rest/v1/articles?select=*&order=${o}`,{headers:p})).json(),i=document.getElementById("articles");i.innerHTML="",n.forEach(t=>{const a=document.createElement("div"),m=new Date(t.created_at).toLocaleDateString("pl-PL");a.innerHTML=`
      <h3>${t.title}</h3>
      <p><i>${t.subtitle}</i></p>
      <p><b>Autor:</b> ${t.author}</p>
      <p><b>Data:</b> ${m}</p>
      <p>${t.content}</p>
      <hr>
    `,i.appendChild(a)})}var l;(l=document.getElementById("articleForm"))==null||l.addEventListener("submit",async o=>{o.preventDefault();const r=o.target,n={title:r.title.value,subtitle:r.subtitle.value,author:r.author.value,content:r.content.value,created_at:r.created_at.value};await fetch(`${u}/rest/v1/articles`,{method:"POST",headers:p,body:JSON.stringify(n)}),r.reset(),c()});var d;(d=document.getElementById("sortOrder"))==null||d.addEventListener("change",c);c();
