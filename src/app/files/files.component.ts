import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable} from 'rxjs';
import {BackandService} from 'angular2bknd-sdk'

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  @ViewChild('inputFile') inputFile; 

  constructor(private backandService:BackandService, ) { 
  }


  ngAfterViewInit() {
	let source = Observable.fromEvent(this.inputFile.nativeElement, 'change');
	let backand = this.backandService;
	let subscription = source.subscribe(
	  function (event: Event) {
	    let reader = new FileReader();
	    reader.onload = function(e) {
	      let data = e.currentTarget.result;
	      backand.upload("todo", "files", file.name, data).subscribe(
	      	data => { 
	      		console.log(data);
	      	}, 
	      	err => backand.logError(err),
	        () => console.log('OK')
	      );
	    };
   		let file = event.target.files[0];
    	reader.readAsDataURL(file);

	  },
	  function (err) {
	    console.log('Error: %s', err);
	  },
	  function () {
	    console.log('Completed');
	  });

  }

  ngOnInit() {
  }

}
