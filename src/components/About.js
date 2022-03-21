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
                    The Grand Escape Members Club Squirrels are a set of artwork generated programmatically using over 100 traits (to see how, <a href='https://github.com/rounakbanik/generative-art-nft' target='_blank' rel='noreferrer'>click here</a>). The squirrels were designed to serve as the perfect gateway NFT purchase. Learn about traits, perceived rarity, signaling, and price movements without having to invest a fortune.
                </p>
                <p>
                    An NFT purchase also supports the GEMC Team as we continue to create tools, resources, and guides to help people onboard into web3. Finally, get access to an exclusive community, guilds, roadmap unlocks, and much more!
                </p>
            </div>
        </section>
    )
}

export default About;