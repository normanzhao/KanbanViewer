import { Component, OnInit } from '@angular/core';
import { KanbanviewerService } from '../kanbanviewer.service';
import { Observable } from 'rxjs';
import { project } from './project';

@Component({
  selector: 'app-kanbanviewer',
  templateUrl: './kanbanviewer.component.html',
  styleUrls: ['./kanbanviewer.component.css']
})
export class KanbanviewerComponent implements OnInit {

  constructor(private kbviewerService: KanbanviewerService) { }

  public projects;
  openItems = [];
  ongoingItems = [];
  closedItems = [];
  releasedItems = [];
  selectedProject: string = '0';

  priority = ["fas fa-angle-double-down", "fas fa-angle-down", "far fa-circle", "fas fa-angle-up", "fas fa-angle-double-up"];
  type = { Story: "fas fa-book", Feature: "fas fa-exclamation", Request: "fas fa-question", Bug: "fas fas fa-bug", Epic: "fas fa-bolt" };

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.kbviewerService.getData().subscribe(
      data => { this.projects = data; this.loadItems(this.selectedProject); },
      err => console.error(err),
      () => console.log()
    );
  }

  loadItems(projectID) {
    this.openItems = [];
    this.ongoingItems = [];
    this.closedItems = [];
    this.releasedItems = [];

    var projectItems = this.projects[projectID]["items"];
    for (var itemID in projectItems) {
      switch (projectItems[itemID].status) {
        case "open":
          this.openItems.push(projectItems[itemID]);
          break;
        case "ongoing":
          this.ongoingItems.push(projectItems[itemID]);
          break;
        case "closed":
          this.closedItems.push(projectItems[itemID]);
          break;
        case "released":
          this.releasedItems.push(projectItems[itemID]);
          break;
        default:
          break
      }
    }
  }

  getSelectedProject(event: any) {
    this.selectedProject = event.target.value;
    this.loadItems(this.selectedProject);
  }

}
