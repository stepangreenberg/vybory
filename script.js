const app = document.getElementById('app');

const byRegion = new Map();
for (const c of CANDIDATES) {
  if (!byRegion.has(c.r)) byRegion.set(c.r, []);
  byRegion.get(c.r).push(c);
}

const regions = [...byRegion.entries()].sort((a, b) => a[0].localeCompare(b[0], 'ru'));

const toc = document.createElement('nav');
toc.className = 'toc';
const tocUl = document.createElement('ul');
regions.forEach(([region], i) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '#reg-' + i;
  a.textContent = region;
  li.appendChild(a);
  tocUl.appendChild(li);
});
toc.appendChild(tocUl);
app.appendChild(toc);

regions.forEach(([region, cands], i) => {
  const h = document.createElement('h2');
  h.id = 'reg-' + i;
  h.textContent = region;
  app.appendChild(h);

  const ul = document.createElement('ul');
  for (const c of cands) {
    const li = document.createElement('li');
    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = c.n;
    li.appendChild(name);
    if (c.p) {
      const party = document.createElement('span');
      party.className = 'party';
      party.textContent = ' (' + c.p + ')';
      li.appendChild(party);
    }
    if (c.c.length) {
      const links = document.createElement('span');
      links.className = 'contacts';
      links.append(' — ');
      links.append(...c.c.map((u, i) => {
        const a = document.createElement('a');
        a.href = u;
        a.textContent = u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
        a.target = '_blank';
        a.rel = 'noopener';
        return i ? [', ', a] : [a];
      }).flat());
      li.appendChild(links);
    }
    ul.appendChild(li);
  }
  app.appendChild(ul);
});
