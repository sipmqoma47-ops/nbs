// assets/js/script.js
function studioApp() {
  return {
    whatsapp: '27744444444',

    nailSets: [
      // ✅ NEW NAIL IMAGES
      { id:4, name:'Nail Two', price:200, img:'assets/images/Nail.two.jpg' },
      { id:5, name:'Nail Three', price:250, img:'assets/images/Nail.three.jpg' },
      { id:6, name:'Nail Four', price:300, img:'assets/images/Nail.four.jpg' },
      { id:7, name:'Nail Five', price:450, img:'assets/images/Nail.five.jpg' }
    ],

    hairStyles: [
   
      // ✅ NEW HAIR IMAGES
      { id:4, name:'Kids Hair Styles', price:350, img:'assets/images/Kids hair styles.jpg' },
      { id:5, name:'Braiding Style 2', price:250, img:'assets/images/Braiding2.jpg' },
      { id:6, name:'Ghana Braids', price:300, img:'assets/images/ghana.webp' },
      { id:7, name:'Ma Hairstyle', price:200, img:'assets/images/ma.jpg' },
      { id:8, name:'Lexi Hairstyle', price:150, img:'assets/images/lexi.jpg' }
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
              <div class='btn btn-light'
                onclick="window.location.href='https://wa.me/${this.whatsapp}?text=Hi Nothando, I have a question about ${item.name}'">
                Ask
              </div>
              <div class='btn btn-primary'
                onclick="window.location.href='https://wa.me/${this.whatsapp}?text=Hi Nothando, I would like to book ${item.name} (${item.price} ZAR)'">
                Book
              </div>
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

