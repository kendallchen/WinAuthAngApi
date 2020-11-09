import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICustomer } from '../../model/ICustomer';

@Component({
    selector: 'customer-dialog',
    templateUrl: 'customer-dialog.component.html',
})
export class CustomerDialog {

    action: string;
    customer: ICustomer;

    constructor(public dialogRef: MatDialogRef<CustomerDialog>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
        this.action = data.action;
        this.customer = data.customer;
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }

    onOkClick(): void { 
        //pass data back to caller
        this.dialogRef.close(this.customer);
    }

}