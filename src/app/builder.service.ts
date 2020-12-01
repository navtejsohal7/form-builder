import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { field } from './global.modal';
import { fieldModels, modelFields, model } from './mock-fields';

@Injectable({
    providedIn: 'root'
})
export class BuilderService {
    constructor() { }
    
    getFormFields(): Observable<field[]> {
        return of(fieldModels);
    }

    getModelFields(): Observable<field[]> {
        return of(this.fields);
    }

    setModelFields(fields: field[]): Observable<field[]> {
        this.fields = fields;

        return of(this.fields);
    }

    

    private fields = modelFields
}
