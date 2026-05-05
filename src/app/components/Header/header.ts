import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    templateUrl:'./header.html',
    selector:'app-header',
    styleUrl:'./header.css',
    imports: [RouterLink, RouterLinkActive],
})

export class header {}