// var data = $.getJSON("table.json", function (result) { return result });
$(document).ready(function(){
    $('#jquerytable').DataTable();
    
    $('#addRow').click(function(){
        var name=$('#name').val();
        var position=$('#position').val();
        var office=$('#office').val();
        var date=$('#startDate').val();
        var income=$('#salary').val();
        $('.table tbody tr').last().after(
            '<tr>'+
                '<td>'+name+'</td>'+
                '<td>'+position+'</td>'+
                '<td>'+office+'</td>'+
                '<td>'+date+'</td>'+
                '<td>'+income+'</td>'+
            '</tr>'
        );
    })
        // ADD a row
        // $('#addRow').submit((e) => {
        //     e.preventDefault()
        //     let name = $('#name').val()
        //     let position = $('#position').val()
        //     let office = $('#office').val()
        //     let startDate = $('#startDate').val()
        //     let salary = $('#salary').val()
        //     data.push({
        //         'name': name,
        //         'position': position,
        //         'office': office,
        //         'startDate': startDate,
        //         'salary': '$' + salary
        //     })
        //     save(data)
        // })
    
        // FETCHING DATA
        // data = data.responseJSON
        // for (let i = 0; i < data.length; i++) {
        //     $('.tBody').append(`<tr><td>` + data[i].name + `</td><td>` + data[i].position + `</td><td>` + data[i].office + `</td><td>` + data[i].startDate + `</td><td>` + data[i].salary + `</td></tr>`);
        // }
});
// function save(storageObj) {
//     var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(storageObj));
//     var dlAnchorElem = document.getElementById('downloadAnchorElem');
//     dlAnchorElem.setAttribute("href", dataStr);
//     dlAnchorElem.setAttribute("download", "table.json");
//     dlAnchorElem.click();
// }

