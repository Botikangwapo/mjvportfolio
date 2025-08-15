
document.getElementById('openModal').addEventListener('click', function () {
  const modal = document.getElementById('myModal');
  if (modal.style.display === 'none' || modal.style.display === '') {
    modal.style.display = 'flex';
  } else {
    modal.style.display = 'none';
  }
});


document.querySelectorAll('.color-picker').forEach(span => {
  span.addEventListener('click', function () {
    const color = this.getAttribute('data-color');
    const img = this.getAttribute('data-img');

    
    document.querySelectorAll(' .gallery i, .locals svg, .nav-samplefor h3 span, .Connect h3, .logo, .btn:hover, .nav-sample h3 span, .nav-sampletwo h3 span, .nav-bottom .links a:first-child svg, .box-content-contact h1')
      .forEach(el => {
        el.style.color = color;
      });

    document.querySelectorAll('.ctn, form button, .btn, .userlang span:nth-child(2), .second-sidebar')
      .forEach(el => {
        el.style.backgroundColor = color;
      });


    const imageElement = document.getElementById('theme-image');
    if (img && imageElement) {
      imageElement.src = img;
    }

    setHoverColor(color);

   
    setUserlangHover(color);

    
    document.getElementById('myModal').style.display = 'none';
  });
});

function setHoverColor(color) {
  let styleTag = document.getElementById('hover-color-style');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'hover-color-style';
    document.head.appendChild(styleTag);
  }

  styleTag.textContent = `
    .social-links a i:hover {
      color: ${color} !important;
    }
  `;
}


function setUserlangHover(bgColor) {
  let styleTag = document.getElementById('userlang-hover-style');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'userlang-hover-style';
    document.head.appendChild(styleTag);
  }

  styleTag.textContent = `
    .userlang span:hover {
      background-color: ${bgColor} !important;
    }
  `;
}

const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
const secondsidebar = document.getElementById('secondsidebar');
const menuLinks = sidebar.querySelectorAll('ul li a');

menuToggle.addEventListener('click', () => {
   
    secondsidebar.classList.add('active');

 
    setTimeout(() => {
        sidebar.classList.add('active');
    }, 300); 
});

closeBtn.addEventListener('click', () => {
   
    sidebar.classList.remove('active');

    
    setTimeout(() => {
        secondsidebar.classList.remove('active');
    }, 300);
});

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Optional: kung gusto mong smooth scroll sa section
        e.preventDefault();
        const targetId = link.getAttribute('href'); 

        sidebar.classList.remove('active');
        setTimeout(() => {
            secondsidebar.classList.remove('active');
            // Scroll sa section pagkatapos magsara
            document.querySelector(targetId).scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 400);
    });
});