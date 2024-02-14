import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const colorStrongCyan = "hsl(172, 67%, 45%)";
const colorVeryDarkCyan = "hsl(183, 100%, 15%)";
const colorDarkGrayishCyan = "hsl(186, 14%, 43%)";
const colorGrayishCyan = "hsl(184, 14%, 56%)";
const colorLightGrayishCyan = "hsl(185, 41%, 84%)";
const colorVeryLightGrayishCyan = "hsl(189, 41%, 97%)";
const colorWhite = "hsl(0, 0%, 100%)";

const Header = styled.header``;

const Main = styled.main``;

const Section = styled.section``;

const Input = styled.input``;

const Button = styled.button``;

const H1 = styled.h1``;

const H2 = styled.h2``;

const H3 = styled.h3``;

const P = styled.p``;


function App() {
  return (
    <div className="App">
      <Header>
        <H1>SPLITTER</H1>
      </Header>
      <Main>
        <Section>
          <H2>Bill</H2>
          <Input placeholder='0'></Input>
          <H2>Select Tip %</H2>
          <Button>5%</Button>
          <Button>10%</Button>
          <Button>15%</Button>
          <Button>25%</Button>
          <Button>50%</Button>
          <Input placeholder='Custom'></Input>
          <H2>Number of People</H2>
          <Input placeholder='0'></Input>
        </Section>
        <Section>
        <H2>Tip Amount</H2>
        <H3>/ person</H3>
        <P>$0.00</P>
        <H2>Totalnt</H2>
        <H3>/ person</H3>
        <P>$0.00</P>
        <Button>Reset</Button>
        </Section>
      </Main>
    </div>
  );
}

export default App;
