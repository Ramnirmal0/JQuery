$(document).ready( function () {
    var t=$('#table_id').DataTable();

    $('#add_person').click(function(){
      var name=$('#name').val();
      var address=$('#address').val();
      var age=$('#age').val();
      var table_rows = '<tr><td>'+name+'</td><td>'+address+'</td><td>'+age+'</td><td><input type="button" value="Delete" class="btn btn-danger" onclick="deleteRow(this)"></td></tr>';
      t.row.add($(table_rows)).draw();
    });


      $('#table_id tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            t.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );

    $('#delete').click( function () {
        t.row('.selected').remove().draw( false );
    } );

} );

function deleteRow(r) {
var i = r.parentNode.parentNode.rowIndex;
document.getElementById("table_id").deleteRow(i);
}
