import React from 'react';
import '@styles/About/About.scss';

const About = () => {
  return (
    <main>
      <h1 className="about__title">About Achorded</h1>
      <section className="about__container">
        <p className="about__container--content">Hi, my name is Esteban Santiago and if you are reading this, then it means that you want to know more about this project. <br /><br />
        
        One of the milestones I wanted to achieve while learning to code was to create an e-commerce website, I thought than by doing this I would be more than ready to start looking for a job as a frontend developer. That is the main reason why I decided to create Achorded, a website that is born as a personal project for my portfolio, and that I hope to keep upgrading bit by bit to hone my skills as a developer, adding new features overtime to learn and practice new abilities or technologies. <br /><br />
        
        Speaking more about Achorded itself, this is am e-commerce about electric and acoustic guitars that seeks to provide the full experience of buying a product online; where you can select the items that you want to add to the cart, proceed to checkout, make the payment (where I actually don't charge anything because Achorded does not sell any real products), and see the orders that you have placed previously on the website. <br /><br />

        Achorded achieves all this by using the Local Storage, the Effects, and the States of React.js, this whole website was built using React.js, SASS, WebPack, Babel, and some React libraries like React Router, Framer Motion and React Slick. <br /><br />

        I used React Router to create the routes needed to link the different parts of the website, Framer Motion was used to add animations when a component mount or dismounts, this can be seen when adding or removing an item from the cart (while having that tab open), or in the "Highlights" section of the home page when cycling through the options. I used React Slick to create the "Recommendations" carousel on the bottom of the home page, and the "Similar Products" carousel at the end of each individual product page. <br /><br />

        With nothing more to say, I gladly invite you to keep exploring and searching for features on Achorded, and if you have already seen them all and liked my job, then please feel free to contact me through my social media or e-mail account if you have a job proposal for me. <br /><br />

        Best regards,<br />
        Esteban Santiago
        </p>
      </section>
    </main>
  )
}

export {About}