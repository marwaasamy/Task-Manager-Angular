import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { UserService } from "../../services/user-service";

@Component({
    templateUrl:'./header.html',
    selector:'app-header',
    styleUrl:'./header.css',
    imports: [RouterLink, RouterLinkActive],
})

export class header {
logout() {
this.userService.logout();
}
    userService = inject(UserService);
}