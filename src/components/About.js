import './About.css';
import sq1 from '../images/91.webp';
import sq2 from '../images/96.webp';
import sq3 from '../images/100.webp';

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
                    By minting or trading your GEMC NFT - we will donate 10% of the proceeds to offset the CO2 pollution by planting trees at select locations. Alina uses art to create awareness on the legacy humans create through their activity for future generations and the contemporary individual approach on the concept of “afterlife”. 
She is the founder of an international cultural educational Non for Profit project where artists from all around the world come together to join a collective search for fresh solutions and ideas for extending the life on Earth of all animal and plant species that inhabit it, while informing the public about the ecological breakdown and its immediate and future consequences.
Her works have been exhibited in museums and private collections in countries such as Belgium, Greece, Lebanon, UK, Thailand, China, India, Portugal, Brazil. 
                </p>
            </div>
        </section>
    )
}

export default About;