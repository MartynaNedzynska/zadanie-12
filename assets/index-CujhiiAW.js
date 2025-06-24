(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const m="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e",v="/technologie-webowe/vite.svg";function g(r){let o=0;const c=i=>{o=i,r.innerHTML=`count is ${o}`};r.addEventListener("click",()=>c(o+1)),c(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${v}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${m}" class="logo vanilla" alt="JavaScript logo" />
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

  
`;g(document.querySelector("#counter"));const u="https://kipkplviqflklgdjoxyg.supabase.co",s="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpcGtwbHZpcWZsa2xnZGpveHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0MTQ1MTAsImV4cCI6MjA2NDk5MDUxMH0.MS-azhCqRSWtDNkgnMYAv8KANtOxmLJS-SSQXFPr6r4",p={apikey:s,Authorization:`Bearer ${s}`,"Content-Type":"application/json"};async function a(){var e;const r=((e=document.getElementById("sortOrder"))==null?void 0:e.value)||"created_at.asc",c=await(await fetch(`${u}/rest/v1/articles?select=*&order=${r}`,{headers:p})).json(),i=document.getElementById("articles");i.innerHTML="",c.forEach(t=>{const n=document.createElement("div"),h=new Date(t.created_at).toLocaleDateString("pl-PL");n.innerHTML=`
      <h3>${t.title}</h3>
      <p><i>${t.subtitle}</i></p>
      <p><b>Autor:</b> ${t.author}</p>
      <p><b>Data:</b> ${h}</p>
      <p>${t.content}</p>
      <hr>
    `,i.appendChild(n)})}var l;(l=document.getElementById("articleForm"))==null||l.addEventListener("submit",async r=>{r.preventDefault();const o=r.target,c={title:o.title.value,subtitle:o.subtitle.value,author:o.author.value,content:o.content.value,created_at:o.created_at.value};await fetch(`${u}/rest/v1/articles`,{method:"POST",headers:p,body:JSON.stringify(c)}),o.reset(),a()});var d;(d=document.getElementById("sortOrder"))==null||d.addEventListener("change",a);a();
