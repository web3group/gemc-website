import './Jumbotron.css';
import squirrels from '../images/sample.jpeg';
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
                        Grand Escape Members Club is a collection of 10,000 NFTs. Each NFT is uniquely designed by world famous digital artist from London, who has sold artworks at Sothesbys, Christies and private collectors. 
                    </p>
                    <p>
                        The animals are fed up with humans and they are stealing Elon Musk's space shuttle to escape to space and start a new world.
                    </p>
                    <button className='cta-link'>
                        <a href="https://docs.google.com/document/d/1kMCLilkfgVOyzw9ldIYGe495vrPRw11VbeUSzP3fY-s/edit?usp=sharing"
                            target='_blank' rel='noreferrer'>
                            Read the Vision Doc
                        </a>
                    </button>
                    <div className='jt-social-links'>
                        <a href='https://twitter.com/ScrappyNfts' target='_blank' rel='noreferrer'>
                            <img src={twttr} alt='Twitter'></img>
                        </a>
                        <a href='https://discord.gg/8UqJXTX7Kd' target='_blank' rel='noreferrer'>
                            <img src={dc} alt='Discord'></img>
                        </a>
                        <a href='https://www.instagram.com/scrappysquirrels/' target='_blank' rel='noreferrer'>
                            <img src={ig} alt='Instagram'></img>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Jumbotron;