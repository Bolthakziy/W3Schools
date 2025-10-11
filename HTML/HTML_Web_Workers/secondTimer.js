var i = 0;

function timeCount()
{
	i = i + 1;

	if (i == 60) {
		i = 0;
	} else {

	}

	postMessage(i);
	setTimeout("timeCount()", 1000);
}

timeCount();
