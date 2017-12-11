import { Component, OnInit, Input } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.scss'],
  inputs: ['qz', 'index', 'isLastQ', 'navigateNext', 'headerSectionFormGroup', 'fieldName']
})

export class SingleChoiceComponent implements OnInit {

  private newFormControl: FormControl;
  private selectedValue: string;

  @Input() headerSectionFormGroup: FormGroup;
  @Input() fieldName: string;
  @Input() qz: any;

  constructor(private _scrollToService: ScrollToService) {}

  ngOnInit() {

    var isRequired = (this.qz.required ? Validators.required : null);

    this.newFormControl = new FormControl(this.selectedValue, isRequired);
    this.headerSectionFormGroup.addControl(this.fieldName, this.newFormControl);

  }

  navTo($ev,navId) {

    this.selectedValue = $ev.target.value;
    this.newFormControl.setValue(this.selectedValue);

    if(navId) {

    	const config: ScrollToConfigOptions = {
        target: navId
      };
   
      this._scrollToService.scrollTo(config);
    }

  }

}