import { Component } from '@angular/core';
import { header } from "../../components/Header/header";
import { RouterOutlet } from '@angular/router';
import { footer } from "../../components/Footer/footer";
@Component({
  selector: 'app-layout',
  imports: [header, RouterOutlet, footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
