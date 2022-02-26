import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavigationBar.css'
// import LogoutIcon from '@mui/icons-material/Logout';
function NavigationBar() {

    return (

        <div className="topnav">
            <Container>
                <img src='https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/Website/website_logo_6.png' alt='img' className='logo' />
                <Link to='/' className='logout' >Log Out</Link>



            </Container>
        </div>

    )
}

export default NavigationBar