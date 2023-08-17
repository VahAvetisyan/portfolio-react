import "../styles/contact.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Contact() {


  return (
    <div id="contacts">
    <div className="socials">
      <a href="https://www.instagram.com/vah_avetisian/" target="_blank"><button id="instagram"><InstagramIcon /></button></a>
      <a href="https://www.facebook.com/vah.avetisian" target="_blank"><button id="facebook"><FacebookIcon /></button></a>
      <a href="https://www.linkedin.com/in/vah-avetisyan-3366a7262/" target="_blank"><button id="linkedin"><LinkedInIcon /></button></a>
      <a href="https://github.com/VahAvetisyan" target="_blank"><button id="github"><GitHubIcon /></button></a>
    </div>
    <p><LocalPhoneIcon /> +374 55 99 01 03</p>
    <p><AlternateEmailIcon /> vahan.avetisyan.ait@gmail.com</p>
    </div>
  );
}
