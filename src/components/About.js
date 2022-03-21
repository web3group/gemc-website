import './About.css';
import sq1 from '../images/gallery-1.jpeg';
import sq2 from '../images/gallery-2.jpeg';
import sq3 from '../images/gallery-3.jpeg';

function About() {
    return (
        <section className='about'>
            <div className='about-container'>
                <h2>About Grand Escape Members Club </h2>
                <div className='about-gallery'>
                    {[sq1, sq2, sq3].map(img_src => <img src={img_src}
                        alt='Sample Squirrel'
                        key={Math.random().toString()} />)}
                </div>
                <p>
                    The Grand Escape Members Club is exclusive and our goal is to draw attention to the destructive force we have on our planet. The character, in the first collection, is the Rhino. The Rhino is also known as one of the most endangered species on the planet, and is en route to extinction!
The Rhino has no other choice than to Hijack Elon Musks' jet to escape the planet. 

 
  </p>
                <p>
                    By minting or trading your GEMC NFT - we will donate 10% of the proceeds to offset the CO2 pollution by planting trees at select locations. The artist Alina, is focused on her mission to create awareness through digital art. In fact, she owns a private gallery in a Monastery where people from all over the world come to learn, paint and get a launchpad to their careers. 
                </p>
            </div>
        </section>
    )
}

export default About;