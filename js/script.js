$(document).ready(function () {
			//Data Table JS
			$('#example,#example1').DataTable( {
				responsive: {
					details: {
						display: $.fn.dataTable.Responsive.display.modal( {
							header: function ( row ) {
								var data = row.data();
								return 'Details for '+data[0]+' '+data[1];
							}
						} ),
						renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
							tableClass: 'table'
						} )
					}
				}
			} );	
		} );	