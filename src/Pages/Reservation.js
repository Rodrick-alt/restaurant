import { useState } from 'react';
import '../Styles/Reservation.css';
import { Link, useNavigate } from 'react-router-dom';

function Reservation() {
  const navigate = useNavigate();
  const [num, setNum] = useState([4, 'People']);
  const [activeStyle, setActiveStyle] = useState('reserveActive--off');
  const htmlElement = document.getElementsByTagName('html')[0];

  function ReservationActive(props) {
    const [style, setStyle] = useState(props.compStyle);
    return (
      <div className={style} onClick={((event) => {
        event.stopPropagation();
        setStyle(old => 'reserveActive--off');
        htmlElement.style.overflow = 'auto';
        navigate('/');
      })}>
        <div className='card'>
          <button onClick={(() => {
            setStyle(old => 'reserveActive--off');
            htmlElement.style.overflow = 'auto';
            navigate('/');
          })}>
            X
          </button>
          <h2>Thank you for booking!</h2>
        </div>
      </div>
    )
  }

  return (
    <div id='pageWrapper'>
      <ReservationActive compStyle={activeStyle} />
      <header className='hero hero2'>
        <Link to='/'>
          <img src={require('../Images/logo.svg').default}
            alt='logo' width={'103px'} height={'40px'} />
        </Link>
        <div className='hero-content hero2-content'>
          <h1>Reservations</h1>
          <p>We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below.
            We’ll be happy to accommodate you.</p>
        </div>
      </header>


      <main className='main2'>
        <form id='reservationForm'>
          <input className='form-name' name='name' type='text' placeholder='Name' required />
          <input className='form-email' name='email' type='email' placeholder='Email' required />

          <div className='input-container'>
            Pick a date:
            <div>
              <input type='number' name='month' min={1} max={12} placeholder='MM' required />
              <input type='number' name='day' min={1} max={30} placeholder='DD' required />
              <input type='number' name='year' min={2022} max={2025} placeholder='YYYY' required />
            </div>
          </div>

          <div className='input-container'>
            Pick a time:
            <div>
              <input type='number' name='time-hour' min={1} max={12} placeholder='09' required />
              <input type='number' name='time-min' min={0} max={59} placeholder='00' required />
              <select defaultValue={'AM'} name='time-format'>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          <div className='form-people'>
            <input className='button' type={'button'} value='-'
              onClick={() => setNum(old => {
                if (old[0] - 1 > 1) {
                  return [old[0] - 1, 'People']
                } else { return [1, 'Person'] }
              })} />

            <p> {num[0] + " " + num[1]}</p>

            <input className='button' value='+' type={'button'}
              onClick={() => setNum(old => {
                if (old[0] + 1 <= 10) {
                  return [old[0] + 1, "People"]
                } else { return [10, "People"] }
              })} />
          </div>

          <button type='submit' onClick={(e) => {
            if (document.getElementById('reservationForm').checkValidity()) {
              e.preventDefault();
              const formData = new FormData(document.querySelector('form'));
              const entires = formData.entries();
              for (var input of entires) {
                console.log(input[0] + ': ' + input[1]);
              }

              setActiveStyle(old => 'reserveActive--on');
              htmlElement.style.overflowY = 'hidden';
            }
          }}>
            MAKE RESERVATION
          </button>
        </form>

        <img className='form-image'
          src={require('../Images/pattern-lines.svg').default} alt=''
          loading='lazy' width={'160px'} height={'76px'} />
      </main>


      <footer>
        <Link to='/'>
          <img src={require('../Images/logo.svg').default}
            alt='logo' width={'103px'} height={'40px'} loading='lazy' />
        </Link>
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
  )
}

export default Reservation