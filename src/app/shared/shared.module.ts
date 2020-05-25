import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HighlightDirective } from './highlight/highlight.directive';
import { ZoomDirective } from './zoom/zoom.directive';
import { MaterialModule } from './material.module';
import { OrderByPipe } from './pipes';

@NgModule({
    declarations: [HighlightDirective, ZoomDirective, OrderByPipe],
    exports: [
        HighlightDirective,
        ZoomDirective,
        MaterialModule,
        OrderByPipe,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
    ],
})
export class SharedModule {}
