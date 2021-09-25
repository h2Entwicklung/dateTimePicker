# H2 Invent Apps Builder
Dies ist ein Package für H2-Invent Apps. 

Dieses Package rendert unten recht einen Button, welche alle Apps enthält, die von der H2 Invent GmbH angeboten werden.

Installation:

`npm i h2-invent-apps`

In die haupt CSS:

`@import '~h2-invent-apps/css/h2-invent-apps.css';`

in die Haupt-JS:

`import * as h2Button from 'h2-invent-apps';`

Damit der Button aktiviert wird, muss noch die init Funktion ausgeführt werden:

`$(document).ready(function () {
h2Button.init();
})`

Wichtig: Die Url welche die aktuellen Apps abruft muss im CSP-Header freigegeben sein.
