import $ from "jquery";
import * as Toastr from "toastr";

function init(url) {

    $.getJSON(url, function( data ) {
        createButton(data.btncolor);
        for (var i = 0; i<data.apps.length; i++){
            var item = data.apps[i];
            createSmallButton(item.url,item.icon,item.color,item.app,item.target)
        }
    });
    $(document).on('click','#h2-invent-apps_allAps',function (e){
        e.preventDefault();
        $('#h2-invent-apps_floatingList').toggleClass('h2-invent-apps-visible');
        $('#h2-invent-apps_floatingList').toggleClass('h2-invent-apps-hidden');
    })
    $(document).on('click',function (e){
        var container = $("#h2-invent-apps_menue");

        if (!container.is(e.target) && container.has(e.target).length === 0){
            $('#h2-invent-apps_floatingList').removeClass('h2-invent-apps-visible');
            $('#h2-invent-apps_floatingList').addClass('h2-invent-apps-hidden');
        }
    })
}
function initNotification(url){
    $.getJSON(url, function (data) {
        var notification = data
        for (var i = 0; i < notification.length; i++) {
            Toastr[notification[i].type](notification[i].text,notification[i].head )
            Toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
        }
    });
}
function createButton(color) {

    $('body').append('<div id="h2-invent-apps_menue"><a href="#" class="h2-invent-apps_float" style="background-color: '+color+'" id="h2-invent-apps_allAps">\n' +
        '      <img src="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJ0aCIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXRoIGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTQ5LjMzMyA1NnY4MGMwIDEzLjI1NS0xMC43NDUgMjQtMjQgMjRIMjRjLTEzLjI1NSAwLTI0LTEwLjc0NS0yNC0yNFY1NmMwLTEzLjI1NSAxMC43NDUtMjQgMjQtMjRoMTAxLjMzM2MxMy4yNTUgMCAyNCAxMC43NDUgMjQgMjR6bTE4MS4zMzQgMjQwdi04MGMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRIMjA1LjMzM2MtMTMuMjU1IDAtMjQgMTAuNzQ1LTI0IDI0djgwYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGgxMDEuMzMzYzEzLjI1NiAwIDI0LjAwMS0xMC43NDUgMjQuMDAxLTI0em0zMi0yNDB2ODBjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0SDQ4OGMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjRWNTZjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0SDM4Ni42NjdjLTEzLjI1NSAwLTI0IDEwLjc0NS0yNCAyNHptLTMyIDgwVjU2YzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNEgyMDUuMzMzYy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR2ODBjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDEwMS4zMzNjMTMuMjU2IDAgMjQuMDAxLTEwLjc0NSAyNC4wMDEtMjR6bS0yMDUuMzM0IDU2SDI0Yy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR2ODBjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDEwMS4zMzNjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0di04MGMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjR6TTAgMzc2djgwYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGgxMDEuMzMzYzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNHYtODBjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0SDI0Yy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR6bTM4Ni42NjctNTZINDg4YzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNHYtODBjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0SDM4Ni42NjdjLTEzLjI1NSAwLTI0IDEwLjc0NS0yNCAyNHY4MGMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjR6bTAgMTYwSDQ4OGMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjR2LTgwYzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNEgzODYuNjY3Yy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR2ODBjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0ek0xODEuMzMzIDM3NnY4MGMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjRoMTAxLjMzM2MxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjR2LTgwYzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNEgyMDUuMzMzYy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR6Ij48L3BhdGg+PC9zdmc+">\n' +
        '  </a>\n' +
        '    <ul id="h2-invent-apps_floatingList" class="h2-invent-apps-hidden">\n' +
        '        \n' +
        '    </ul></div> ')
}
function createSmallButton(url,icon,color,text,target) {
    $('#h2-invent-apps_floatingList').append('<li class="h2-invent-apps_list"><span class="h2-invent-apps_text">'+text+'</span><a target="'+target+'" style="background-color: '+color+'" href="'+url+'">\n' +
        '<img src="data:image/svg+xml;base64,'+icon+'">\n' +
        '</a></li>')
}
export {init,initNotification}