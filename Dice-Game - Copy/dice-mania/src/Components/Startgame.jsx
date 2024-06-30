import styled from 'styled-components'


const StartGame = ({toggle}) => {
    return <Container>
        <div><img src="/images/dices.png" />
        </div>
        
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button 
            onClick={toggle}>Play now</Button>
        </div>
    </Container>;
};

export default StartGame;

const Container = styled.div`
max-width: 1180px;
height: 100vh;
display: flex;
margin: 0 auto;
align-items: center;

.content {
  h1{
    font-size: 96px;
    white-space: nowrap;
 }
}
`;
const Button = styled.button`
color: white;
padding: 10px 18px;


background: #000000;
border-radius: 5px;
min-width: 220px;
border: none;
font-size: 16px;

&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
}
`;
