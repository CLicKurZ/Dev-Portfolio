import githubLogo from './assets/Github-desktop-logo-symbol.svg.png';

/*
Make a new component named GithubLink that renders a link to your Github profile. 
The link should have the text "My Github" and should link to your Github profile. 
Your Github profile URL should be stored in a variable named githubURL.
Use the style given from index.css for the link.
*/
function GithubLink() {
    const githubURL = "https://github.com/CLicKurZ";
    
    const styles = {
        backgroundColor: "hsl(30, 95%, 55%)",
        color: "white",
        padding: "20px 15px", 
        borderRadius: "5px",   
        border: "none",  
        cursor: "pointer",
        boxShadow: "5px 5px 5px hsla(290, 85%, 34%, 0.734)",
        fontFamily: "Arial",
        textDecoration: "none",
    }
    
    return (
        <p>
        <a className="githubURL" href = {githubURL} target="_blank">
            <img src={githubLogo} className="githubLogo" alt="Github Logo" />
            My Github
        </a>
        </p>
    );
}

export default GithubLink;