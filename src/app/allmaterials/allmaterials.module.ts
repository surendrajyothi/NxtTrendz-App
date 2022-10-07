import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';



const materialCompoents = [

	MatButtonModule, MatToolbarModule, MatIconModule,
	MatFormFieldModule, MatInputModule, MatSelectModule,
	MatProgressSpinnerModule, MatDialogModule
]

@NgModule({
	// declarations: [],
	imports: [materialCompoents],
	exports: [materialCompoents]
})

export class AllmaterialsModule { }
