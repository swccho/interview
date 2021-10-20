import { Component } from '@angular/core';
import {Router} from "@angular/router"
declare let $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './cases.component.html',
})
export class CasesComponent {
  title = 'interview';
  dtOptions: DataTables.Settings = {
    columnDefs: [
      {
      "targets": [0, 8, 9, 10],
      "orderable": false
      },
      ],
    order: [[ 1, 'asc' ]],
    dom: '<"top"f<"create-new">>rt<"bottom"<"bottom-left-wrapper"li>p><"clear">',
    language: {
      "search": "",
      "searchPlaceholder": "Search",
    },
    drawCallback: ( settings ) => {
      this.IsAllCheck()
    }
  };

  constructor(private router: Router) { }


  ViewSingle(){
    this.router.navigate(['cases/view'])
  }

  toggleAllCheck (event) {
    let trigger = $(event.target);
    let status = trigger.prop('checked')
    if(status == true){
      $('.row-checkbox').prop('checked', true);
    }else{
      $('.row-checkbox').prop('checked', false);
    }
  }
  IsAllCheck () {
    let trigger = $('.all-checkbox');
    let status = trigger.prop('checked')
    if(status == true){
      $('.row-checkbox').prop('checked', true);
    }else{
      $('.row-checkbox').prop('checked', false);
    }
  }

  ngOnInit() {
    $('#casesTable').DataTable( {
      columnDefs: [ {
        orderable: false,
        className: 'select-checkbox',
        targets:   0
      } ],
      select: {
        style:    'os',
        selector: 'td:first-child'
      },
      order: [[ 2, 'asc' ]]
    } );
  }
}
