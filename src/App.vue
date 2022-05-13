<template >
  <div class = "flex-container">
    <div class="card1">
    <img src="public\img\test2.svg" height="270" width="50" style="width:100%; shadow: 4px 3px 3pxalign-content: center;">
      <div class="text" >
      <h2 style="text-shadow: 4px 3px 3px #00000030"><b>Мусорка №<span id="number"></span></b></h2>
      <p>Адрес: М.Расковой 3</p>
      </div>
    </div>
    <div class="button1">
      <div class = "textbtn"><h3> 
        <a id="add"> Очистить </a></h3>
     </div>
    </div>

    <div class="card2">
      <div class="text">
      <h2 style="text-shadow: 4px 3px 3px #00000030">Что это? Зачем?</h2>
         <p>
            Вы попали на эту страницу, отсканировав qr-код на мусорном баке.</p>
            <p>
            Тут действия, которые помогут тебе накопить <a href="https://xn--80afmpobv.xn--p1ai/" style="color:#e7e8e5; font-weight:bolder">Ятѣ </a>.
          </p>
          <p>
            Волонтеры из <a href="https://rfrk.ru/" style="color:#e7e8e5; font-weight:bolder">фонда </a> пополняют
            мусорки и сканируют qr-коды за <a href="https://xn--80afmpobv.xn--p1ai/" style="color:#e7e8e5; font-weight:bolder">Ятѣ</a>. Вы тоже можете поучаствовать.
            <b style=" font-weight:bolder"> добавить эту страничку на главный экран, чтобы постоянно не сканировать qr-код.</b>
          </p>
          <p>
            Вопросы и предложения принимаем на почту регионального фонда
            <a href="mailto:rfrk26@gmail.com" style="color:#e7e8e5; font-weight:bolder"  >РФРК</a>
          </p>
      </div>
    </div>
    <div class="button2" style="color: #54bf8a" >
      <div class = "textbtn"><h3> <a href="https://omvu.ru/" style="text-decoration: none" >Задонатить :)</a> </h3></div>
    </div>
    <div class="card2" style="margin-top: 20px margin-bottom: 5px">
        <div class="text" >  MADE IN: <a href="https://omvu.ru/">OMVU</a></div>
    </div>
</div>
</template>

<style>
  A {
  color: #e7e8e5;} 
  A:visited {
  color: #e7e8e5;
   } 
 .flex-container {
  display: flex;
  flex-direction:column;
  

}

  .button1 {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  margin-top: 20px;
  content: 'center';
  outline: none;
  color: #fff;
  background-color: #44ab78;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #3d6351;
  margin-left: 10%;
  margin-right: 10%;
  
  position:static;
  top: 40%;
  left: 90%;

  }
 .button1:active {
  background-color: #40956bf9;
  box-shadow: 0 2px #00000033;
  transform: translateY(7px);
  }
  .button2 {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  margin-top: 20px;
  content: 'center';
  outline: none;
  color: #fff;
  background-color: #4198a8;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #2b5f68;
  margin-left: 10%;
  margin-right: 10%;
  }
  .button2:active {
  background-color: #2a656e;
  box-shadow: 0 2px #00000033;
  transform: translateY(7px);
  }
.text{
  color:#e7e8e5;
  text-align: center;
  font-family:"Century Gothic";
  border-radius: 5px; }
.textbtn{
  color:#e7e8e5;
  text-shadow: 1px 1px 2px #00000030;
  text-align: center;
  font-family:"Century Gothic";
  border-radius: 5px; 
  -webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
  }
.card1 {
    box-shadow: 0 4px 16px 0 #00000033, 0 6px 20px 0 #00000030;
    background-color: #37474f ;
    padding:7px;
  }
.card1:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
.card2 {
    margin-top: 25px;
    box-shadow: 0 4px 16px 0 #00000033, 0 6px 20px 0 #00000030;
    background-color: #37474f ;
    padding:7px;
  }
.card2:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
</style>