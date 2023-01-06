import './Styles/App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div id="pageWrapper">
      <header className='hero'>
        <img src={require('./Images/logo.svg').default}
          alt='logo' width={'103px'} height={'40px'} />
        <div className='heroContent'>
          <h1>Exquisite dining since 1989</h1>
          <p>Experience our seasonal menu in beautiful country surroundings.
            Eat the freshest produce from the comfort of our farmhouse.</p>
          <Link to='/reservation'>
            <button>
              BOOK A TABLE
            </button>
          </Link>
        </div>
      </header>


      <main>
        <section className='highlights'>
          <div className='highlight-1'>
            <img className='highlight-img' src={require('./Images/enjoyable-place-desktop@2x.jpg')}
              alt='country side' width={'400px'} height={'533px'} loading='lazy' />
            <div className='highlight-content'>
              <img src={require('./Images/pattern-divide.svg').default} alt=''
                loading='lazy' width={'71px'} height={'7px'} />
              <h2>Enjoyable place for all the family</h2>
              <p>Our relaxed surroundings make
                dining with us a great experience for everyone.
                We can even arrange a tour of the farm before your meal.</p>
            </div>
          </div>

          <div className='highlight-2'>
            <div className='highlight-content'>
              <img src={require('./Images/pattern-divide.svg').default} alt=''
                loading='lazy' width={'71px'} height={'7px'} />
              <h2>The most locally sourced food</h2>
              <p>All our ingredients come directly from our farm or local fishery.
                So you can be sure that you're eating the freshest,
                most sustainable food.</p>
            </div>
            <img className='highlight-img' src={require('./Images/locally-sourced-desktop@2x.jpg')}
              alt='country side' width={'400px'} height={'533px'} loading='lazy' />
          </div>
        </section>


        <section className='menu'>
          <div className='menuContent-1'>
            <img src={require('./Images/pattern-divide.svg').default} alt=''
              loading='lazy' width={'71px'} height={'7px'} />
            <h2>A few highlights from our menu</h2>
            <p>We cater for all dietary requirements,
              but here’s a glimpse at some of our diner’s favourites.
              Our menu is revamped every season.</p>
          </div>

          <div className='menuContent-2'>
            <div className='menu-item'>
              <div className='imgContainer'>
                <div className='image1 salmon' />
                <img className='image2' src={require('./Images/pattern-divide.svg').default} alt=''
                  loading='lazy' width={'71px'} height={'7px'} />
              </div>
              <div className='textContainer'>
                <h3>Seared Salmon Fillet</h3>
                <p>Our locally sourced salmon served with a refreshing
                  buckwheat summer salad.</p>
              </div>
            </div>

            <div className='menu-item'>
              <div className='imgContainer'>
                <div className='image1 beef' />
                <img className='image2' src={require('./Images/pattern-divide.svg').default} alt=''
                  loading='lazy' width={'71px'} height={'7px'} />
              </div>
              <div className='textContainer'>
                <h3>Rosemary Filet Mignon</h3>
                <p>Our prime beef served to your taste with
                  a delicious choice of seasonal sides.</p>
              </div>
            </div>

            <div className='menu-item'>
              <div className='imgContainer'>
                <div className='image1 chocolate' />
                <img className='image2' src={require('./Images/pattern-divide.svg').default} alt=''
                  loading='lazy' width={'71px'} height={'7px'} />
              </div>
              <div className='textContainer'>
                <h3>Summer Fruit Chocolate Mousse</h3>
                <p>Creamy mousse combined with summer
                  fruits and dark chocolate shavings.</p>
              </div>
            </div>
          </div>
        </section>


        <section className='events'>
          <div className='imgContainer'>
            <img className='image1' src={require('./Images/pattern-lines.svg').default} alt=''
              loading='lazy' width={'160px'} height={'76px'} />
            <img className='image2' src={require('./Images/family-gathering-desktop.jpg')}
              alt='' width={'400px'} height={'444px'} loading='lazy' />
            <img className='image3' src={require('./Images/pattern-divide.svg').default} alt=''
              loading='lazy' width={'71px'} height={'7px'} />
          </div>

          <div className='eventsContent'>
            <h2>Family Gathering</h2>
            <p>We love catering for entire families. So please bring everyone
              along for a special meal with your loved ones.
              We’ll provide a memorable experience for all.</p>
            <Link to='/reservation'>
              <button>
                BOOK A TABLE
              </button>
            </Link>
            <pre>
              <span>FAMILY GATHERING</span>
              <br />
              SPECIAL eVENTS
              <br />
              SOCIAL eVENTS
            </pre>
          </div>
        </section>


        <section className='CTA'>
          <h2>Ready to make a reservation?</h2>
          <Link to='/reservation'>
            <button>
              BOOK A TABLE
            </button>
          </Link>
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
