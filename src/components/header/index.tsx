import { Container, LogoContainer, 
    ButtonContainer, ButtonIcon, 
    SearchContainer, SearchInputContainer,
    SearchInput } from "./style";
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo_2.png'

function Header() {
    return (
        <Container>
            <LogoContainer>
                <ButtonContainer>
                    <ButtonIcon alt="" src={HamburguerIcon}  />
                </ButtonContainer>
                <img
                    style={{ cursor: 'pointer', width: '100px' }} 
                    alt=''
                    src={Logo}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="pesquisar" />
                </SearchInputContainer>
            </SearchContainer>

        </Container>
    )
}

export default Header;