import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SimplePageComponent, TitleComponent, WordWrapPipe, ItemQuantityComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule, MatMenuModule, RouterModule],
  exports: [
    CommonModule,
    ItemQuantityComponent,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    SimplePageComponent,
    TitleComponent,
    WordWrapPipe
  ]
})
export class SharedModule { }