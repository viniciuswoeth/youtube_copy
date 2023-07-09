import { Container, LogoContainer, 
    ButtonContainer, ButtonIcon, 
    SearchContainer, SearchInputContainer,
    SearchInput, SearchButton, HeaderButton } from "./style";
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo_2.png';
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microfone-gravador.png';
import VideoIcon from '../../assets/video.png';
import NotificationIcon from '../../assets/sino.png';

function Header() {
    return (
        <Container>
            <LogoContainer>
                <ButtonContainer margin='0 10px 0 0'>
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
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon}/>
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon}/>
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={VideoIcon}/>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={NotificationIcon}/>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    P
                </ButtonContainer>
            </HeaderButton>

        </Container>
    )
}

export default Header;