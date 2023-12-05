function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6bkpLFTtvj0":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyPKkwahBp5R9VFZP6mvjRdO6X0PqcrlxQTxe5S2SUxaG7TPbono2NVp075gJngQ32Q/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v1q1attempts:player.GetVar("v1q1attempts"),v1q1answeredcorrect:player.GetVar("v1q1answeredcorrect")})
	}
	)
}

