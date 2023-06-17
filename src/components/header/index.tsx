import { Container, LogoContainer, ButtonContainer, ButtonIcon } from "./style";
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo_2.png'

function Header() {
    return (
        <Container>
            <LogoContainer>
                <ButtonContainer>
                    <ButtonIcon alt='' src={HamburguerIcon} />
                </ButtonContainer>
                <img
                    style={{ cursor: 'pointer', width: '100px' }} 
                    alt=''
                    src={Logo}
                />
            </LogoContainer>
        </Container>
    )
}

export default Header;