import profilePic from './assets/Default_pfp.jpg';

function Card() {

  const schoolLink = "https://www.appstate.edu/";

  return (
    <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Austin Blaylock</h2>
            <p className="card-text">
              I am a Computer Science undergraduate student at&nbsp;
              <a className="AppStateLink" href={schoolLink}>Appalachian State University </a>
              <br/>
              Graduating in December 2024
              <br/>
              Thanks for visiting my portfolio site!
            </p>
    </div>
  );
}

export default Card;