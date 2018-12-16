import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paragraph-generator';
  charLimit: any = 100;
  textContent: String = '';
  formatedContent: any = [];
  numberOfTimeIteration: Number = 0;
  startPosition: Number = 0;
  endPosition: Number = 0;
  numberOfChar = 0;

  constructor() {
  }

  onSelectCharLimit(value) {
    this.charLimit = Number(value);
    this.endPosition = value;
    this.onContentChange(this.textContent);
  }

  onContentChange(value) {
    this.numberOfChar = value.replace(/\s/g, '').length;
    this.numberOfTimeIteration = Number((this.numberOfChar / this.charLimit).toString().charAt(0)) + 1;
    this.formatedContent.length = 0;
    this.endPosition = 0;

    for (let i = 1; i <= this.numberOfTimeIteration; i++) {
      if (i === 1) {
        this.startPosition = 0;
        if (this.numberOfChar <= this.charLimit) {
          this.endPosition = value.length;
        } else {
          this.endPosition = this.charLimit + this.getNumberOfSpaces(value, i);
        }
      } else {
        this.startPosition = this.getFormatedContentLength();
        if (this.numberOfChar <= this.charLimit * i) {
          this.endPosition = value.length;
        } else {
          this.endPosition = (this.charLimit * i) + this.getNumberOfSpaces(value, i);
        }
      }

      if (this.startPosition !== this.endPosition) {
        this.formatedContent.push(value.substring(this.startPosition, this.endPosition));
      }
    }
  }

  getNumberOfSpaces(value, i) {
    let space = 0;
    let chartTotal = 0;
    for (let k = 0; k < value.length; k++) {
      if (value.charAt(k) === ' ') {
        space++;
      } else {
        chartTotal++;
      }

      if (chartTotal === this.charLimit * i) {
        break;
      }
    }
    return space;
  }

  getSpacePosition(string, start, end): any {
    let index = 0;
    const res = [];
    while ((index = string.substring(start, end).indexOf(' ', index + 1)) > 0) {
      res.push(index);
    }
    return res;
  }

  getFormatedContentLength() {
    let length = 0;
    for (let i = 0; i < this.formatedContent.length; i++) {
      length += this.formatedContent[i].length;
    }
    return length;
  }
}


