import './Styles/App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div id="page-wrapper">
      <header className='Hero'>
        <img src={require('./Images/logo.svg').default}
          alt='logo' width={'103px'} height={'40px'} />
        <div className='hero-content'>
          <h1>Exquisite dining since 1989</h1>
          <p>Experience our seasonal menu in beautiful country surroundings.
            Eat the freshest produce from the comfort of our farmhouse.</p>
          <button>
            <Link to='/reservation'>
              BOOK A TABLE
            </Link>
          </button>
        </div>
      </header>

      <main>
        <section className='Highlights'>
          <div className='highlight-1'>
            <img className='image' src={require('./Images/enjoyable-place-desktop@2x.jpg')}
              alt='country side' width={'400px'} height={'533px'} loading='lazy' />
            <div className='highlight-1__content'>
              <img src={require('./Images/pattern-divide.svg').default} alt=''
                loading='lazy' width={'71px'} height={'7px'} />
              <h2>Enjoyable place for all the family</h2>
              <p>Our relaxed surroundings make
                dining with us a great experience for everyone.
                We can even arrange a tour of the farm before your meal.</p>
            </div>
          </div>

          <div className='highlight-2'>
            <div className='highlight-2__content'>
              <img src={require('./Images/pattern-divide.svg').default} alt=''
                loading='lazy' width={'71px'} height={'7px'} />
              <h2>The most locally sourced food</h2>
              <p>All our ingredients come directly from our farm or local fishery.
                So you can be sure that you're eating the freshest,
                most sustainable food.</p>
            </div>
            <img className='image' src={require('./Images/locally-sourced-desktop@2x.jpg')}
              alt='country side' width={'400px'} height={'533px'} loading='lazy' />
          </div>
        </section>

        <section className='Menu'>
          <div className='menu__content1'>
            <img src={require('./Images/pattern-divide.svg').default} alt=''
              loading='lazy' width={'71px'} height={'7px'} />
            <h2>A few highlights from our menu</h2>
            <p>We cater for all dietary requirements,
              but here’s a glimpse at some of our diner’s favourites.
              Our menu is revamped every season.</p>
          </div>

          <div className='menu__content2'>
            <div className='menu-item'>
              <div className='image-container'>
                <img className='image1' src={require('./Images/salmon-desktop-tablet.jpg')}
                  alt='' width={'96px'} height={'72px'} loading='lazy' />
                <img src={require('./Images/pattern-divide.svg').default} alt=''
                  loading='lazy' width={'71px'} height={'7px'} />
              </div>
              <div className='text-container'>
                <h3>Seared Salmin Fillet</h3>
                <p>Our locally sourced salmon served with a refreshing
                  buckwheat summer salad.</p>
              </div>
            </div>

            <div className='menu-item'>
              <div className='image-container'>
                <img className='image1' src={require('./Images/beef-desktop-tablet.jpg')}
                  alt='' width={'96px'} height={'72px'} loading='lazy' />
                <img src={require('./Images/pattern-divide.svg').default} alt=''
                  loading='lazy' width={'71px'} height={'7px'} />
              </div>
              <div className='text-container'>
                <h3>Rosemary Filet Mignon</h3>
                <p>Our prime beef served to your taste with
                  a delicious choice of seasonal sides.</p>
              </div>
            </div>

            <div className='menu-item'>
              <div className='image-container'>
                <img className='image1' src={require('./Images/chocolate-desktop-tablet.jpg')}
                  alt='' width={'96px'} height={'72px'} loading='lazy' />
                <img src={require('./Images/pattern-divide.svg').default} alt=''
                  loading='lazy' width={'71px'} height={'7px'} />
              </div>
              <div className='text-container'>
                <h3>Summer Fruit Chocolate Mousse</h3>
                <p>Creamy mousse combined with summer
                  fruits and dark chocolate shavings.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='Events'>
          <div className='image-container'>
            <img className='image1' src={require('./Images/pattern-lines.svg').default} alt=''
              loading='lazy' width={'160px'} height={'76px'} />
            <img className='image2' src={require('./Images/family-gathering-desktop.jpg')}
              alt='' width={'400px'} height={'444px'} loading='lazy' />
            <img className='image3' src={require('./Images/pattern-divide.svg').default} alt=''
              loading='lazy' width={'71px'} height={'7px'} />
          </div>

          <div className='events__content'>
            <h2>Family Gathering</h2>
            <p>We love catering for entire families. So please bring everyone
              along for a special meal with your loved ones.
              We’ll provide a memorable experience for all.</p>
            <button>
              <Link to='/reservation'>
                BOOK A TABLE
              </Link>
            </button>
            <pre>
              <span>FAMILY GATHERING</span>
              <br />
              SPECIAL EVENTS
              <br />
              SOCIAL EVENTS
            </pre>
          </div>
        </section>

        <section className='CTA'>
          <h2>Ready to make a reservation?</h2>
          <button>
            <Link to='/reservation'>
              BOOK A TABLE
            </Link>
          </button>
        </section>
      </main>

      <footer>
        <img src={require('./Images/logo.svg').default}
          alt='logo' width={'103px'} height={'40px'} loading='lazy'
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }} />
        <pre>
          MARTHWAITE, SEDBERGH
          <br />
          CUMBRIA
          <br />
          +00 44 123 4567
        </pre>
        <pre>
          OPEN TIMES
          <br />
          MON - FRI: 09:00 AM - 10:00 PM
          <br />
          SAT - SUN: 09:00 AM - 11:30 PM
        </pre>
      </footer>
    </div>
  );
}

export default App;
