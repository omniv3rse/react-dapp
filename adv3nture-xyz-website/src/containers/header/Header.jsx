import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import symbol from '../../assets/symbol.png';

let webHook = "https://hooks.airtable.com/workflows/v1/genericWebhook/appIxfq6Op2r5MWNj/wflpCbDRTufNWz80C/wtrbftfyKxg5c6frm";

const handleFormSubmit = (event) => {
  // event.preventDefault();
  console.log("form submitted");
  try {
    console.log(event.target.method);
  } catch (error) {
    console.log(event.target.method);
    console.error(error);
  }
}

const Header = () => {
  return (
    <div className="adv3__header section__padding" id="home">
        <div className="adv3__header-content">
          <h1 className="gradient__text">
            Explore an endless world of possibilities

          </h1>
          <p>Be whoever you want to be in an open-world action adventure MMORPG. Collaborate with other Gem Hunters to conquer quests and gather precious gems to save our land.</p>
          {/* <div className="adv3__header-content__input"> */}
            <form className="adv3__header-content__input" onSubmit={handleFormSubmit} action={webHook} method="POST">
              <input type="email" id="email" name="email" placeholder="Your Email Address" />
              <button type="submit">Get Started</button>
            </form>
          {/* </div> */}
          {/* <div className="adv3__header-content__people">
            <img src={people} alt="people" />
            <p>1,600 people requested early access in the last 24 hours</p>
          </div> */}
        </div>
        <div className="adv3__header-image">
          <img src={symbol} alt="symbol" />
        </div>
    </div>
  )
}

export default Header;