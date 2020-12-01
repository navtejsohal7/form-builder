import { Component, OnInit, Inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { field, value } from '../global.modal';
import { BuilderService } from '../builder.service';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.sass']
})
export class BuilderComponent implements OnInit {

    constructor(
        public dialog: MatDialog,
        private builderService: BuilderService
    ) { }

    value:value={
        label:"",
        value:""
    };
    success = false;

    fieldModels:Array<field>=[];

    modelFields:Array<field>=[];

    ngOnInit(): void {
        this.getFormFields();
        this.getModelFields();
    }

    getFormFields() : void {
        this.builderService.getFormFields()
        .subscribe(fields => this.fieldModels  = fields);
    }

    getModelFields() : void {
        this.builderService.getModelFields()
        .subscribe(fields => this.modelFields  = fields);
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
        transferArrayItem(event.previousContainer.data,
                            event.container.data,
                            event.previousIndex,
                            event.currentIndex);
        }
    }

    openDialog(name: string): void {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            name: name,
            modelFields: this.modelFields
        };

        const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });
    }
}