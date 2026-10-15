(() => {
  const products = window.norlandProducts || [];
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);

  grid.innerHTML = products.map((product, index) => {
    const href = `product.html?id=${encodeURIComponent(index)}`;
    const isRecentlyAdded = index >= products.length - 6;
    const imageSrc = isRecentlyAdded
      ? `${product.image}?v=20261014-firefox-image-load`
      : product.image;
    const imageLoading = isRecentlyAdded ? 'eager' : 'lazy';
    return `<article class="product-card">
      <a class="product-card-link" href="${href}" aria-label="View details for ${escapeHtml(product.name)}">
        <div class="product-image product-image-featured"><img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(product.alt)}" loading="${imageLoading}" decoding="async"></div>
        <div class="product-body"><div class="eyebrow">Norland Kenya</div><h3>${escapeHtml(product.name)}</h3>
        <div class="product-price">${escapeHtml(product.price)}</div>
        <p class="small">${escapeHtml(product.description)}</p><span class="product-detail-link">View product details →</span></div>
      </a>
      <div class="product-order"><button class="btn btn-dark" onclick="ready('Product: ${escapeHtml(product.name).replace(/'/g, '&#39;')}')">Order on WhatsApp</button></div>
    </article>`;
  }).join('');

  const search = document.getElementById('productSearch');
  const count = document.getElementById('productCount');
  const none = document.getElementById('noProducts');
  search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    grid.querySelectorAll('.product-card').forEach((card) => {
      const show = card.innerText.toLowerCase().includes(query);
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    count.textContent = `${visible} product${visible === 1 ? '' : 's'}`;
    none.style.display = visible ? 'none' : 'block';
  });
})();
