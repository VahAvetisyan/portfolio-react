import "../styles/contact.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {


  return (
    <div className="container">
      {/* <div><a href='tel:+37455990103'>(+374) 55 99 01 03</a></div>
      <div><a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNsvTrfGGjtGSvsJgNdcxtwcBQvxHdSRwQrxZdLBMPnvkBmCVkblwFTsCpsftrZkTkPXlq'>vahan.avetisyan.ait@gmail.com</a></div> */}
      <div id="instagram"><a href="https://www.instagram.com/vah_avetisian/" target="_blank"><InstagramIcon /></a></div>
      <div id="facebook"><a href="https://www.facebook.com/vah.avetisian" target="_blank"><FacebookIcon /></a></div>
      <div id="linkedin"><a href="https://www.linkedin.com/in/vah-avetisyan-3366a7262/" target="_blank"><LinkedInIcon /></a></div>
      <div id="github"><a href="https://github.com/VahAvetisyan" target="_blank"><GitHubIcon /></a></div>
    </div>
  );
}
