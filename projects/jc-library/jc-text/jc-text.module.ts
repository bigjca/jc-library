import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JcTextComponent } from './jc-text.component';

import { JcLabelModule} from 'jc-library/jc-label';


@NgModule({
  declarations: [JcTextComponent],
  imports: [
    CommonModule,
    JcLabelModule
  ]
})
export class JcTextModule { }
