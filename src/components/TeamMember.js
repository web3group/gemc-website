import './TeamMember.css';

function TeamMember(props) {
    return (
        <div className='team-member'>
            <div>
                <img src={props.avatar} alt="GEMC Avatar" />
            </div>
            <h3><a href={props.twitter}>{props.name}</a></h3>
        </div>
    )
}

export default TeamMember;