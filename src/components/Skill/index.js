import './index.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'



const Skill = () => {
    return (
        <>
        <div className = 'container skill-page'>
            <div className = 'text-zone' >
                <h1>Projects</h1>
            </div>
            {/* Silly way to align their position by declaring every variables as individuals */}
            {/* <div className = 'subTProj1-text-zone'>
                <h2>Solar System</h2>    
            </div> */}
            <Link to = 'https://github.com/Hiromichi-1449/Solar-System' className = 'flat-button-solar'> Solar System </Link>
            <div className = 'subTProj2-text-zone'>
                <h2>3D Geometry</h2>    
            </div>    
            {/* Containers for embedded videos */}
            <Container>
            <div class = "project001 ratio-16x9">
                <iframe src = "https://cdnapisec.kaltura.com/p/391241/sp/39124100/embedIframeJs/uiconf_id/22119142/partner_id/391241?iframeembed=true&playerId=kaltura_player&entry_id=1_sa6kqqad&flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_wdfamdch" width="640" height="394" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" 
                title = "Kaltura video" allowFullcreen></iframe>
            </div>

            <div class = "project002 ratio-16x9">
                <iframe src = "https://cdnapisec.kaltura.com/p/391241/sp/39124100/embedIframeJs/uiconf_id/22119142/partner_id/391241?iframeembed=true&playerId=kaltura_player&entry_id=1_mbb6p17n&flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_6kzxwkz1" width="640" height="394" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" 
                title = "Kaltura video" allowFullcreen></iframe>
            </div>
            </Container>
        </div>
        <Loader type = 'line-scale-pulse-out' />
        </>
    )
}

// <iframe id="kaltura_player" src= frameborder="0" title="project#7_demo"></iframe>

export default Skill