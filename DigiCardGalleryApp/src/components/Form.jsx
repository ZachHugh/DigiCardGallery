import React from 'react'

const Form = () => {
  return (
    <form>
            <label>Primary Color: </label>
            <select name="color" id="color">
                <option value="all"></option>
                <option value="black">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
                <option value="black">Black</option>
                <option value="white">White</option>
            </select>
            <label>Card Type: </label>
            <select name="type" id="type">
                <option value="all"></option>
                <option value="egg">Egg</option>
                <option value="digimon">Digimon</option>
                <option value="tamer">Tamer</option>
                <option value="option">Option</option>
            </select>
            <label>Level: </label>
            <select name="level">
                <option value="all"></option>
                <option value="none">-</option>
                <option value="two">2 (Egg)</option>
                <option value="three">3 (Rookie)</option>
                <option value="four">4 (Champion)</option>
                <option value="five">5 (Ultimate)</option>
                <option value="six">6 (Mega)</option>
                <option value="seven">7 (Ultra)</option>
            </select>
            <label>Card Code:</label>
            <label>Set Type: </label>
            <select name="setType" id="setType">
                <option value="all"></option>
                <option value="bt">BT</option>
                <option value="ex">EX</option>
                <option value="rb">RB</option>
                <option value="p">Promo</option>
            </select>
            <label>Set Number(Not needed for Promo cards): </label>
            <input type="number"></input>
            <label>Card Number:</label>
            <input type="number"></input>
            <input class="btn btn-primary" type="submit" value="Submit"/>
            <input class="btn btn-primary" type="reset" value="Reset" />
        </form>
  )
}

export default Form;