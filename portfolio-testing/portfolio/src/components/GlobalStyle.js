import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing: border-box;
}
html{
        @media (max-width: 1500px) {
            font-size: 85%;
        }
   
}
body{
    background: #1b1b1b;
    font-family: "PT Sans", sans-serif;
    overflow-x: hidden;

}
.img{
    border-radius: 10px;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    border-radius: 5px;
    background:transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #23d997 ;
        color: white
    }
}
h2{
    font-weight: lighter;
    font-size: 3rem;

}
h3{
    color: white;

}
i{
    font-weight: bold;
    color: #23d997 ;
}
a{
    font-size: 1.1rem;
}
span{
    font-weight: bold;
    color: #23d997 ;
}
h4{
    font-weight: bold;
    font-size: 2rem;
   

}
p{
    padding: 3rem 0rem ;
    color : #ccc;
    font-size: 1.4rem;
    line-height: 200%;
}
`;
export default GlobalStyle;
