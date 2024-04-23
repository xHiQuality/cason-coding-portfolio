import '../css/links.css';
import LinkedIn from '../images/icons/linkedin.svg';
import acm from '../images/icons/acm.svg';
import github from '../images/icons/github.svg';
import email from '../images/icons/email.svg';
import ministry from '../images/icons/ministry.svg';
import osp from '../images/icons/osp.svg';


export default function Links() {
    return(
        <div className="linksPage">
            <h1 id="titleLinks">Social Media & Important Links</h1>
            <div id="linksSection">
                <div id='socials'>
                <h2>LinkedIn</h2>
                
                <h2>GitHub</h2>
                
                <h2>Email</h2>     
                </div>
                <div id='linkSocials'>
                <a href='https://www.linkedin.com/in/cason-pittman/' target='_blank'><img src={LinkedIn} alt='LinkedIn' /></a>
                <a href='https://github.com/xHiQuality' target='_blank'><img src={github} alt='Github' /></a>
                <a href='mailto:casonjpittman@gmail.com'><img src={email} alt='email' /></a>
               
                </div>
                <h1>Involvement</h1>
                <div id='what-i-do'>
                   
                   <div id='athenscampus'>
                    <h3>Athens Campus Ministry</h3>
                    <a href='https://uga.campuslabs.com/engage/organization/athens_campus_ministry' target='_blank'><img src={ministry} alt='Athens Campus Ministry' /></a>
                   </div>
                    <div id='osp'>
                    <h3>Open Source Club</h3>
                    <a href='https://github.com/acm-uga/ACM-OSP-Fall-2023' target='_blank'><img src={osp} alt='Open Source Club' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}