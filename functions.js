function CelsiusSelected() {
    // alert( "C" );

    document.getElementById( "ButtonC" ).style.color = "black";
    document.getElementById( "ButtonC" ).style.backgroundColor = "green";

    document.getElementById( "ButtonF" ).style.color = null;
    document.getElementById( "ButtonF" ).style.backgroundColor = null;

    ConvertToC();
  }

function FahrenheitSelected() {
    // alert( "F" );

    document.getElementById( "ButtonF" ).style.color = "black";
    document.getElementById( "ButtonF" ).style.backgroundColor = "green";

    document.getElementById( "ButtonC" ).style.color = null;
    document.getElementById( "ButtonC" ).style.backgroundColor = null;

    ConvertToF();
  }

function ConvertToC() {
  // alert( "ConvertToC" );
  
  var InputValue = document.getElementById( "InputValueBox" ).value;

  var FinalValue = InputValue - 32;
  
  FinalValue = FinalValue * ( 5 / 9 );

  document.getElementById( "OutputValueBox" ).value = FinalValue.toFixed( 1 ) + " °C";
}

function ConvertToF() {
  // alert( "ConvertToF" );

  var InputValue = document.getElementById( "InputValueBox" ).value;

  var FinalValue = InputValue * 1.8
  FinalValue += 32;

  document.getElementById( "OutputValueBox" ).value = FinalValue.toFixed( 1 ) + " °F";
}

function Init() {
  document.getElementById( "InputValueBox" ).value = "";
  document.getElementById( "OutputValueBox" ).value = "";
}

window.onload = Init;