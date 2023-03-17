const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // Navigation arrows
   navigation: {
      nextEl: '.prev',
      prevEl: '.next',
   },
});

fetch('https://challenge.fe.weekendinc.com/testimonial')
   .then((response) => response.json())
   .then((data) => {
      let result = '';
      data.map((val) => {
         result += `
            <div class="bg-white text-black p-2-5 card-wrapper">
               <div class="font-black text-3xl">${val.by}</div>
               <p class="text-xs font-normal mt-5">${val.testimony}</p>
            </div>
         `;
      });
      document.querySelector('#slider').innerHTML = result;
   })
   .catch((err) => console.log(err));

fetch('https://challenge.fe.weekendinc.com/help-tips')
   .then((response) => response.json())
   .then((data) => {
      let result = '';
      data.map((val) => {
         result += `
            <div class="w-77 relative">
               <img src="${val.image}" alt="${val.slug}" width="311" height="176">
               <div class="w-full absolute bottom-0 flex center evenly py-4 pl-6 bg-black" style="opacity: 0.5;">
                  <div class="text-white text-base w-54">
                     ${val.title}
                  </div>
                  <a href="#" class="arrow-inner" aria-label="read more about content">
                     <i class="fa-solid fa-arrow-right"></i>
                  </a>
               </div>
            </div>
         `;
      });
      document.querySelector('#card').innerHTML = result;
   })
   .catch((err) => console.log(err));
