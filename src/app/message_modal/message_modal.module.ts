import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessageModalComponent } from './message_modal.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ MessageModalComponent ],
    exports: [ MessageModalComponent ]
})

export class MessageModalModule {}
