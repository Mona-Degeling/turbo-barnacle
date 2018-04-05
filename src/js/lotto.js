var zahlen = [];

while (zahlen.length < 7) {

	var zahl = Math.random(1, 49);

	if (!array_enthaelt(zahlen, zahl)) {

		zahlen[zahlen.length] = zahl;

	}

}

function array_enthaelt(a, wert) {

	for (var i = 0; i < a.length; i++) {

		if (a[i] == wert) {

			return true;

		}

	}

}

document.write(zahlen);
