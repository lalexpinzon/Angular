import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems, {});
    });
  }

}
