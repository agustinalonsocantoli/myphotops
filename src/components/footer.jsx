import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export const FooterComponent = () => {

    return (
        <div>
            <footer className="footer">
                <div className='footer__text'>
                    <h4>AGUSTIN ALONSO CANTOLI</h4>
                    <p>&copy; All Rights Reserved.</p>
                </div>

                <div className='footer__icons'>
                    <a href='http://github.com/agustinalonsocantoli' target='_blank' rel='noopener noreferrer'><GitHubIcon sx={{ color: 'black', fontSize: 35 }}/></a>
                    <a href='http://www.linkedin.com/in/agustin-alonso-cantoli-5a54a0182/' target='_blank' rel='noopener noreferrer'><LinkedInIcon sx={{ color: 'black', fontSize: 35 }}/></a>
                    <a href='http://www.instagram.com/alonsoagus_/' target='_blank' rel='noopener noreferrer'><InstagramIcon sx={{ color: 'black', fontSize: 35}}/></a>
                </div>
            </footer>
        </div>
    );
}