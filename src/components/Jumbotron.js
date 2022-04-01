import './Jumbotron.css';
import squirrels from '../images/100.webp';
import ig from '../images/ig.png';
import dc from '../images/dc.png';
import twttr from '../images/twttr.png';

function Jumbotron() {
    return (
        <section className='jumbotron'>

            <div className='jt-container'>
                <div className='jt-image'>
                    <img src={squirrels} alt='Gallery of GEMC' />
                </div>
                <div className='jt-content'>
                    <h1>Grand Escape <br className='desktop-only' /> Members Club</h1>
                    <p>
                        Grand Escape Members Club is a collection of 10,000 NFTs. Each NFT is uniquely designed by our artist Alina who's artworks hangs across the globe and has been sold in Christie's Auction house in London. 
                    </p>
                    <p>
                        The animals are fed up with humans and they are stealing Elon Musk's space shuttle to escape to space and start a new world.
                    </p>
                    <button className='cta-link'>
                        <a href="https://discord.gg/vBjXYX85eZ"
                            target='_blank' rel='noreferrer'>
                            Join us on Discord
                        </a>
                    </button>
                    <div className='jt-social-links'>
                        <a href='https://twitter.com/gemcnft' target='_blank' rel='noreferrer'>
                            <img src={twttr} alt='Twitter'></img>
                        </a>
                        <a href='https://discord.gg/vBjXYX85eZ' target='_blank' rel='noreferrer'>
                            <img src={dc} alt='Discord'></img>
                        </a>
                        <a href='https://www.instagram.com/grand_escape_members_club/' target='_blank' rel='noreferrer'>
                            <img src={ig} alt='Instagram'></img>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Jumbotron;