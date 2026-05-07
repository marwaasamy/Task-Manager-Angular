import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import {  } from "../Task-Input/TaskInput";
import { Task } from "../../types";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
     templateUrl:'./TaskList.html',
    selector:'app-TaskList',
    styleUrl:'./TaskList.css',
    imports : [RouterOutlet,RouterLink,RouterLinkActive],
})

export class TaskList{

}