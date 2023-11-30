const fns = () => {
  let bttBtn = document.querySelector('.btt img');
  
  window.onload = () => {
    bttBtn.style.display = 'none';
  };
  
  window.onscroll = () => {
    const sections = document.querySelectorAll( '.webpage-section' );
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
    for ( let s in sections )
    if ( sections.hasOwnProperty( s ) && sections[ s ].offsetTop - 96 <= scrollPos ) {
      const id = sections[ s ].id;
      document.querySelector( '.active' ).classList.remove( 'active' );
      document.querySelector( `a[href*=${ id }]` ).parentNode.classList.add( 'active' );
    }
    navbarScroll();
  
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      bttBtn.style.display = 'block';
    }else {
      bttBtn.style.display = 'none';
    }
  };
  
  const smoothNav = () => {
    const navLinks = document.querySelectorAll( '.nav-link' );
  
    for ( let n in navLinks ) {
      if ( navLinks.hasOwnProperty( n ) ) {
        navLinks[ n ].addEventListener( 'click', e => {
          e.preventDefault();
          document.querySelector( navLinks[ n ].hash )
            .scrollIntoView( {
              behavior: "smooth"
            });
        });
      }
    }
  };
  smoothNav();
  
  const navbarScroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector(".webpage-header").style.padding = "6px 0";
      document.querySelector(".webpage-logo").style.width = "164px";
    } else {
      document.querySelector(".webpage-header").style.padding = "8px 0";
      document.querySelector(".webpage-logo").style.width = "200px";
    }
  };
};
fns();

