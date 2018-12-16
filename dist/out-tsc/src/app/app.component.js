import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'paragraph-generator';
        this.charLimit = 100;
        this.textContent = '';
        this.formatedContent = [];
        this.numberOfTimeIteration = 0;
        this.startPosition = 0;
        this.endPosition = 0;
        this.filteredString = '';
        this.temp = 0;
        this.str = '';
        this.numberOfChar = 0;
        this.spacePosition = [];
    }
    AppComponent.prototype.onSelectCharLimit = function (value) {
        this.charLimit = value;
        this.endPosition = value;
        this.onContentChange(this.textContent);
    };
    AppComponent.prototype.onContentChange = function (value) {
        this.numberOfChar = value.replace(/\s/g, '').length;
        this.filteredString = value.replace(/\s/g, '');
        this.numberOfTimeIteration = Number((this.numberOfChar / this.charLimit).toString().charAt(0)) + 1;
        this.endPosition = this.numberOfChar;
        console.log('this.numberOfTimeIteration: ', this.numberOfTimeIteration);
        this.formatedContent.length = 0;
        for (var i = 1; i <= this.numberOfTimeIteration; i++) {
            if (i === 1) {
                this.startPosition = 0;
                if (this.numberOfChar < this.charLimit) {
                    this.endPosition = value.length;
                }
                else {
                    this.endPosition = this.charLimit + this.getSpacePosition(value, this.startPosition, this.charLimit).length + 1;
                }
            }
            else {
                console.log('length: ', this.getFormatedContentLength());
                console.log(' this.charLimit * i -----', this.charLimit * i);
                this.startPosition = this.getFormatedContentLength();
                if (this.numberOfChar <= this.charLimit * i) {
                    this.endPosition = value.length;
                }
                else {
                    this.endPosition = (this.charLimit * i) + this.getSpacePosition(value, this.startPosition, this.charLimit * i).length;
                }
            }
            // if (this.formatedContent.length !== i) {
            console.log('start : ', this.startPosition);
            console.log('end: ', this.endPosition);
            this.formatedContent.push(value.substring(this.startPosition, this.endPosition));
            // }
        }
    };
    AppComponent.prototype.getSpacePosition = function (string, start, end) {
        var index = 0;
        var res = [];
        while ((index = string.substring(start, end).indexOf(' ', index + 1)) > 0) {
            res.push(index);
        }
        return res;
    };
    AppComponent.prototype.getFormatedContentLength = function () {
        var length = 0;
        for (var i = 0; i < this.formatedContent.length; i++) {
            length += this.formatedContent[i].length;
            console.log(this.formatedContent[i]);
        }
        return length;
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map