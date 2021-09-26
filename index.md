# JS DateTime Picker
This is a combination of

[https://www.npmjs.com/package/@holema/mdtimepicker](https://www.npmjs.com/package/@holema/mdtimepicker)
[https://www.npmjs.com/package/@holema/datepicker](https://www.npmjs.com/package/@holema/datepicker)

First the two packages are completly ungoogled, so the Roboto Font was made offline available.
This is needed in Germany to be completle GDPR compliant.

## Demo
[https://codepen.io/h2entwicklung/pen/abwQvPz](https://codepen.io/h2entwicklung/pen/abwQvPz)


The Package creates a new Input Field.
![img.png](https://imgur.com/ydE1plD.png)
The Field existing field still stays and will be sand by the form submit to the Server.
The visible Field is only a dummy field.

When klicking the small clock then the timepicker opens
![img_1.png](https://imgur.com/mswlHZH.png)

When no Date was selected before, then the date today will be selected.
When clicking the Datefield, then first the datepicker is opend.
![img_2.png](https://imgur.com/jXaIpPj.png)
After selecting the date, the timepicker opens automaticaly.




## Installation:

`npm i @holema/datepicker`

In the main CSS

`@import "~@holema/h2datetimepicker/css/dateTimePicker.css";`

in the main JS

`import {initdateTimePicker,cleanDateTimePicker} from '@holema/h2datetimepicker';`

To render a datetime input field as datetimepicker, activate the plugin with:

Input the class or id of the element.

`initdateTimePicker('#schedulePickr')`

To clean the input, enter the original DOM element.
`cleanDateTimePicker(document.getElementById('schedulePickr'))`

This package was brought to you by [https://h2-invent.com](https://h2-invent.com)

![https://h2-invent.com](https://imgur.com/LxTvCbV.png)