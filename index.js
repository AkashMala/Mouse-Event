body{
    margin: 0;
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    background-color: darkblue;
    color: white;
    font-family: cursive;
    /* text-align: center; */

}
.container{
    display: flex;
    text-align: center;
  }
.mouse-event{
    border: solid 1px lightgray;
    margin: 40px;
    min-width: 180px;
    min-height: 100px;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 30px;
}
.mouse-event h4{
    position: absolute;
    top: -50px;
    font-size: 14px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-weight: 100;
    color: lightgray;

}

@media (max-width:500px){
    .container{
        flex-direction: column;
    }
}
