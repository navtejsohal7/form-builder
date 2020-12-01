import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { BuilderService } from '../builder.service';
import { field, DialogData, value } from '../global.modal';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {

    modelFields:Array<field>=[];
    name: string;
    types: any;
    type: any;
    fieldType: any = [
        {
            "name": "input",
            "type": [ "text", "email", "password", "number" ]
        }, 
        {
            "name": "button",
            "type": [ "submit", "reset" ]
        }
    ];

    constructor(
        private builderService: BuilderService,
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: any
    ) {
        this.name = data.name;
    }

    ngOnInit(): void {
        this.getModelFields();
        const type = this.getType(this.name);
        this.type = type[0].type;
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.setLatestFormFields();
        });
    }

    getModelFields() : void {
        this.builderService.getModelFields()
        .subscribe(fields => this.modelFields  = fields);
    }

    setLatestFormFields() : void {
        var fields = this.modelFields.map(mod => {
            if(mod.name == this.name) {
                mod.value = "test";
            }
            return mod;
        });

        this.builderService.setModelFields(fields);
    }

    getType(value: any) : void {
        const test = this.fieldType.filter(type => type.name == value);

        return test;
    }

    onSubmit(values: any) : void {
        var fields: any = this.modelFields.map(mod => {
            if(mod.name == values.name){
                const returnedTarget = Object.assign(mod, values);

                return returnedTarget;
            }
        });

        this.builderService.setModelFields(fields);
        this.dialogRef.close();
        
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
