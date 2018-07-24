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
  selectedProject: string = '1';

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.kbviewerService.getData().subscribe(
      data => { this.projects = data },
      err => console.error(err),
      () => console.log()
    );
  }

  getSelectedProject(event: any) {
    this.selectedProject = event.target.value;
    console.log(this.projects[this.selectedProject]);
  }

}
