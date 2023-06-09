import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName } from "../store/slice/userName.slice";
import logoPokeApi from "../assets/images/pokeApi.png";
import pokebola from "../assets/images/pokebola1.png";


const UserInput = () => {

  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  const dispatchUserName = () => {
    dispatch(changeName(userName));
    navigate("/characters");
  };

  return (

    <div className="conteinerUserInput">

      <div className="containerLogo">
        <img className="logo" src={logoPokeApi} alt="" />
      </div>

      <div className="conteinerUserInput--form">
        <img className="conteinerUserInput--imgHeader" src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1664755200&Signature=D1-cUDtim09VyodQPnnSOTElNzktpmU~nrpj~CGRaCZ-4IyFvQ9hCqwGrhLof5ZI6L3ws5diSiGQj6KyhxsK1-sXIqnQsUdY31SdN-xU9yAgZzZEJAmzGpIlOv2S2ce11b5T9cauXtvyOkJXtkJx5puEa1XxRV2Ed~xEOs4C~EqmgjL00JCf0SP7-VJo2rZMbxng0NHfc0qnjQoXi9XAek6yJzMWIxONEBOUvkjfotKvPtdYG-Bvv-aVxGMx~qhtlvzzvvksDLi9WOhi-D-EQ-2zcOCdrreoxp1x23sr6vYzswtosAtxIoiDFICdtWjrC~vWFFrWXLwdJPxgENdjdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
        <h1 className="hello"><b>¡Hello trainer!</b></h1>
        <p >Give me your name, to start</p>

        <form onSubmit={dispatchUserName}>
          <input
            type="text"
            className="conteinerUserInput--input"
            required
            value={userName}
            placeholder="Name..."
            onChange={e => setUserName(e.target.value)} />
          <button className="conteinerUserInput--button">
            <i className="fa-sharp fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>

      <footer className="footer">
      <div className="footer--Img1"></div>
      <div className="footer--Img2">
        <img className="footer--Img" src={pokebola} alt="imagen" />
      </div>
      </footer>
    </div>

  );
};

export default UserInput;
