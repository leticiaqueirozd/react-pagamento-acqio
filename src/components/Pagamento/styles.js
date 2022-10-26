import styled from "styled-components";

export const Container = styled.div`
margin-top: 5%;
width: 400px;
height: 400px;
padding: 40px;
border-radius: 10px;
-webkit-box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
-moz-box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
background-color: #ffd14e;
margin-left: 32%;

.formulario {
margin-top: 5%;
display: flex;
flex-direction: column;
gap: 8px;

input {
    border: none;
    color: #1e1e1e;
    background-color: #ffff;
    border-radius: 13px;
    height: 35px;
    width: 90%;
    padding-left: 10px;
    margin-left: 12px;
  }
.lado {
    width: 45%;


}
.outrolado {
    width: 45%;
}

Button {
    border-radius: 13px;
    border: transparent;
    width: 20%;
    height: 35px;
    background: #00afb4 ;
    color: white;
    font-family: 'Lato', sans serif;
    font-weight: 700;
    margin-left: 11px;
}
}
`;

  