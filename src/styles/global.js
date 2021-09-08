import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

main {
  background-color: #c7a6e6;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='p' width='250' height='30' patternUnits='userSpaceOnUse'%3E%3Cpath id='a' data-color='outline' fill='none' stroke='%23BE96E4' stroke-width='5' d='M-62.5-15C-31.3-15 0-7.5 0-7.5S31.3 0 62.5 0 125-7.5 125-7.5s31.3-7.5 62.5-7.5S250-7.5 250-7.5 281.3 0 312.5 0'%3E%3C/path%3E%3Cuse xlink:href='%23a' y='15'%3E%3C/use%3E%3Cuse xlink:href='%23a' y='30'%3E%3C/use%3E%3Cuse xlink:href='%23a' y='45'%3E%3C/use%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23p)' width='100%25' height='100%25'%3E%3C/rect%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);

}
li {
  text-transform: lowercase;
  font-family: "Quicksand", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 100%;
  background-color: rgb(255, 255, 255, 0.3);
  padding: 5px 15px;
  border-radius: 5px;
  margin: 10px 0;
}

svg {
  padding: 3px;
  margin-left: 5px;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: linear;
}
svg:hover {
  border-radius: 50%;
  cursor: pointer;
  background-color: #ffffff;
  transition: 0.3s;
}
svg:active {
  border-radius: 50%;
  cursor: pointer;
  background-color: #8117e4;
  transition: 0.1s;
  color: #ffffff;
}
h1 {
  font-family: "Comfortaa", cursive;
  font-size: 4rem;
  color: #ffffff;
}
span.do {
  color: #8117e4;
}
input {
  width: 330px;
  border: none;
  height: 32px;
  padding: 11px;
  margin: 0 5px;
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
}
textarea:focus,
input:focus,
select:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}
.search {
  width: 400px;
}

h3 {
  color: #8117e4;
  font-family: "Comfortaa", cursive;
  font-weight: 900;
  font-size: 2rem;
}
.done {
  text-decoration: line-through;
}
.container {
  padding: 10px;
  display: flex;
  justify-content: center;
}
ul {
  margin: 0 10px;
  width: 400px;
  padding: 10px;
}
p {
  margin: 0;
}
.buttons {
  display: flex ;
}
@media (max-width: 830px) {
  .search {
    width: 100%;
  }
  input {
    width: 200px;
  }
  .container {
    width: 100%;
    padding: 0;
    flex-direction: column;
  }
  ul {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  li {
    width: 80%;
    margin: 10px auto;
    padding: 0 10px;
  }
}

`;
export default GlobalStyle;
