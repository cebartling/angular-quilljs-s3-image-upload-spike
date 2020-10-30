import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-view',
  templateUrl: './editor-view.component.html',
  styleUrls: ['./editor-view.component.scss']
})
export class EditorViewComponent implements OnInit {
  placeholder = 'Placeholder text';
  content: string;

  constructor() { }

  ngOnInit(): void {
  }

}