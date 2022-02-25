import duDatepicker from '@holema/datepicker'
import mdtimepicker from '@holema/mdtimepicker'
import moment from 'moment'

var dateSave;
var timeSave = null;
var $options;

function initdateTimePicker($element, $optionsL = {
    altFormat: 'DD.MM.YYYY HH:mm',
    dateFormatOnly: 'DD.MM.YYYY',
    dateFormat: 'YYYY-MM-DDTHH:mm',
    enableTime: true,
    time_24hr: true,
    minDate: "today",
    language : 'de',
    format: 'dd.mm.yyyy',
    auto:true
}) {
    $options = $optionsL;
    var $name = $element.slice(1);

    var $ele = document.querySelectorAll($element);

    var $length = $ele.length
    for (var $i = 0; $i < $length; $i++) {
        $ele[$i].style.display = 'none';
        $ele[$i].classList.add('original');
        $ele[$i].type='datetime';
        //here we create the new input field
        var $input = document.createElement("input");
        $input.type = "text";
        $input.setAttribute('data-mindate',$ele[$i].hasAttribute('data-mindate')?$ele[$i].getAttribute('data-mindate'):'today');
        $input.placeholder = $ele[$i].placeholder;
        $input.style.display = 'block';
        $input.style.cursor = 'pointer';
        for (var $c = 0; $c < $ele[$i].classList.length; $c++) {
            $input.classList.add($ele[$i].classList[$c]);
        }
        if ($ele[$i].value !== "") {
            $input.value = moment($ele[$i].value).format($options.altFormat);
        }
        $input.classList.add('dateTimePicker_h2');
        //here we create the dummy holder of the input group
        var group = document.createElement('div');
        group.classList.add('input-group');
        group.classList.add('mb-3');
        //here we create the button group
        var btnWrapper = document.createElement('div');
        btnWrapper.classList.add('input-group-prepend');
        //here we create the clock button
        var btn = document.createElement('button');
        btn.classList.add('btn');
        btn.classList.add('btn-md');
        btn.classList.add('btn-outline-primary');
        btn.classList.add('m-0');
        btn.classList.add('px-3');
        btn.classList.add('py-2');
        btn.classList.add('z-depth-0');
        btn.classList.add('waves-effect');
        btn.type = 'button';
        btn.innerHTML = '<i class="far fa-clock"></i>';
        btn.addEventListener('click', function () {
            var $date = this.closest('.input-group').querySelector('.original').value;
            if($date ===''){
                dateSave = moment().format('YYYY-MM-DD');
            }else {
                dateSave = moment($date).format('YYYY-MM-DD');
            }

            initTimePicker(this.closest('.input-group').querySelector('.dateTimePicker_h2'));
        })

        var btn2 = document.createElement('button');
        btn2.classList.add('btn');
        btn2.classList.add('btn-md');
        btn2.classList.add('btn-outline-primary');
        btn2.classList.add('m-0');
        btn2.classList.add('px-3');
        btn2.classList.add('py-2');
        btn2.classList.add('z-depth-0');
        btn2.classList.add('waves-effect');
        btn2.type = 'button';
        btn2.innerHTML = '<i class="fas fa-calendar-day"></i>';
        btn2.addEventListener('click', function () {
            duDatepicker(this.closest('.input-group').querySelector('.dateTimePicker_h2'), 'show');
        })
        btnWrapper.appendChild(btn2);
        btnWrapper.appendChild(btn);
        group.appendChild(btnWrapper);
        group.appendChild($input);
        var parent = $ele[$i].parentNode;
        var $before = $ele[$i].nextSibling;
        group.insertBefore($ele[$i],btnWrapper);
        parent.insertBefore(group, $before);
    }
    initDatePicker($optionsL);
    //first we let the people select the date

}

function initDatePicker($optionsL = {
    language : 'de',
    minDate: "today",
    format: 'dd.mm.yyyy',
    auto:true
}) {
    duDatepicker('.dateTimePicker_h2', {
        i18n: $optionsL.language, format: $optionsL.format, auto: $optionsL.auto, minDate: $optionsL.minDate,
        events: {
            dateChanged(data, datepicker) {
                dateSave = moment(data._date).format('YYYY-MM-DD')
                timeSave = null;
                initTimePicker(datepicker.input)
            }
        }
    });
}

function initTimePicker($input) {
    mdtimepicker($input, {
        is24hour: true,
        events: {
            timeChanged(data, timepicker) {
                console.log('test');
                timeSave = data.time;
                var $time = moment(dateSave + 'T' + timeSave);
                timepicker.input.value = $time.format($options.altFormat)
                timepicker.input.closest('.input-group').querySelector('.original').value = $time.format($options.dateFormat)
            },
            show() {
                var $time = moment(dateSave);
                this.input.value = $time.format($options.dateFormatOnly);
            },
            hidden() {
                mdtimepicker(this.input, 'destroy');
                this.input.readOnly = true;
                if (timeSave === null) {
                    var $time = moment(dateSave);
                    this.input.value = $time.format($options.dateFormatOnly);
                }
                if (this.input.closest('.input-group').querySelector('.original').value !== '') {
                    var $time2 = moment(this.input.closest('.input-group').querySelector('.original').value);
                    this.input.value = $time2.format($options.altFormat)
                }
            }
        }
    })
    if ($input.closest('.input-group').querySelector('.original').value === '') {
        var $time= moment().add(1,'hour').startOf('hour');
        mdtimepicker($input, 'setValue', $time.format('HH:mm'));
    } else {
        mdtimepicker($input, 'setValue', moment($input.closest('.input-group').querySelector('.original').value).format('HH:mm'));
    }
    mdtimepicker($input, 'show');
}
function cleanDateTimePicker($element) {
    $element.value = '';
    $element.closest('.input-group').querySelector('.dateTimePicker_h2').value = ''
}

export
{
    initdateTimePicker,
    cleanDateTimePicker
}
