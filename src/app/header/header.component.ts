import { Component, OnInit } from '@angular/core';
import { SignServiceService } from '../sign-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private header : SignServiceService) { }

  ngOnInit(): void {
  }

}
