import './Community.css';
import community from '../images/87.webp';

function Community() {
    return (
        <section className='community'>
            <div className='community-container'>
                <div className='comm-image'>
                    <img src={community} alt="Placeholder" />
                </div>
                <div className='comm-content'>
                    <h2>Join the Community!</h2>
                    <p>As part of the Grand Members Escape Club, you will firstly join a unique club that with your unique artwork. This is just the start and we are going to expand the community and as original holder of a GEMZ you will be white listed for new series in the future.</p>
                    <p>
                        Members are encouraged to join the Discord group to join forces and learn from each other.
                    </p>
                    
                </div>
            </div>
        </section>
    )
}

export default Community;