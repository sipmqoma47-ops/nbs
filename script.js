// assets/js/script.js
function studioApp() {
  return {
    whatsapp: '27744444444',
    nailSets: [
      { id:1, name:'Short French Tips', price:180, img:'assets/images/nails/short-french-tips.jpg' },
      { id:2, name:'Acrylic Ombre', price:250, img:'assets/images/nails/acrylic-ombre.jpg' },
      { id:3, name:'Long Coffin Set', price:300, img:'assets/images/nails/long-coffin-set.jpg' }
    ],
    hairStyles: [
      { id:1, name:'Knotless Braids', price:600, img:'assets/images/hair/knotless-braids.jpg' },
      { id:2, name:'Silk Press', price:350, img:'assets/images/hair/silk-press.jpg' },
      { id:3, name:'Cornrows', price:250, img:'assets/images/hair/cornrows.jpg' }
    ],
    init() {
      this.populateGrid('nailGrid', this.nailSets);
      this.populateGrid('hairGrid', this.hairStyles);
    },
    populateGrid(containerId, items) {
      const container = document.getElementById(containerId);
      items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src='${item.img}' alt='${item.name}'>
          <div class='content'>
            <p class='font-semibold'>${item.name}</p>
            <p>ZAR ${item.price}</p>
            <div class='actions'>
              <div class='btn btn-light' onclick="window.location.href='https://wa.me/${this.whatsapp}?text=Hi Nothando, I have a question about ${item.name}'">Ask</div>
              <div class='btn btn-primary' onclick="window.location.href='https://wa.me/${this.whatsapp}?text=Hi Nothando, I would like to book ${item.name} (${item.price} ZAR)'">Book</div>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = studioApp();
  app.init();
});

