import {
  BottomBanner,
  Full,
  H1Container,
  TextContainer,
  TopBanner,
} from "./Hero.styled";

const Hero = () => {
  return (
    <div>
      <div>
        <Full>
          <TopBanner>
            <TextContainer>
              <H1Container>
                <h1>Sparta Hub</h1>
              </H1Container>
              <div>
                스파르타 내일배움캠프 수료생들을 위한 커뮤니티에서
                <br />
                다양한 정보를 공유해보세요.
              </div>
            </TextContainer>
          </TopBanner>
          <BottomBanner />
        </Full>
      </div>
    </div>
  );
};

export default Hero;
