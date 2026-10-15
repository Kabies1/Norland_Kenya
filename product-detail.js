(() => {
  const products = window.norlandProducts || [];
  const index = Number(new URLSearchParams(window.location.search).get('id'));
  const product = Number.isInteger(index) ? products[index] : null;
  const root = document.getElementById('productDetail');
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);

  if (!product) {
    root.innerHTML = '<section class="section"><div class="container"><div class="eyebrow">Norland Kenya</div><h1>Product not found</h1><p>That product could not be found in the catalogue.</p><a class="btn btn-dark" href="products.html">Back to products</a></div></section>';
    return;
  }

  document.title = `${product.name} | Norland Kenya`;
  const productDetails = Array.isArray(product.details) ? `<section class="product-info-block"><h2>Pack contents</h2><dl class="product-info-list">${product.details.map((item) => `<div><dt>${escapeHtml(item.label)}</dt><dd>${escapeHtml(item.value)}</dd></div>`).join('')}</dl>${product.detailsNote ? `<p class="small">${escapeHtml(product.detailsNote)}</p>` : ''}${product.detailsSource ? `<a class="product-source-link" href="${escapeHtml(product.detailsSource)}" target="_blank" rel="noopener noreferrer">Source: Norland International product page ↗</a>` : ''}</section>` : '';
  document.title = `${product.name} | Norland Kenya`;
  root.innerHTML = `<section class="page-hero"><div class="container"><div class="eyebrow">Norland Kenya · Product details</div><h1>${escapeHtml(product.name)}</h1><p>${escapeHtml(product.description)}</p></div></section>
    <section class="section"><div class="container product-detail-layout"><div class="product-detail-image"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.alt)}"></div><div class="product-detail-copy"><div class="eyebrow">Current Kenya retail catalogue</div><div class="product-price">${escapeHtml(product.price)}</div><p>${escapeHtml(product.description)}</p>${productDetails}<p class="small">Retail price shown in KSh. Please confirm current availability with a Norland Kenya distributor. Read the product label for ingredients and directions.</p><div class="hero-actions"><button class="btn btn-dark" onclick="ready('Product: ${escapeHtml(product.name).replace(/'/g, '&#39;')}')">Enquire on WhatsApp</button><a class="btn btn-product-back" href="products.html">← Back to products</a></div></div></div></section>`;
})();
