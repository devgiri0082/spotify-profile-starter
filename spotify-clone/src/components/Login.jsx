import styled from "styled-components"

let Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(25,25,24);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    gap: 20px;
    .title {
        font-size: 25px;
    }
    button {
        background: rgb(29,184,85);
        text-transform: uppercase;
        padding: 10px 20px;
        border: none;
        color: white;
        border-radius: 20px;
        cursor: pointer;
    }
`
export default function Login(props) {
    let myURL = encodeURI("http://localhost:3000/callback");
    let clientId = "2cede5eb11ad40a7957d539e35fed5d7";
    let spotify = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${myURL}&scope=user-read-private%20user-read-email&state=34fFs29kd09`
    return (
        <Container>
            <div className="title">Spotify Profile</div>
            <a href={spotify}> <button>Log In To Spotify</button></a>
        </Container>
    )
}