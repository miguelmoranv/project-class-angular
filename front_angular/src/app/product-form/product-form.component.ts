import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../model/Producto';
import { ListProductComponent } from '../component/product/list-product/list-product.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  formGroup!: FormGroup

  constructor(public dialogRef: MatDialogRef<ListProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    if(!this.data){
      this.formGroup=this.formBuilder.group({
        name:["", Validators.required],
        code:["", Validators.required],
        category:["", Validators.required],
        description:["", Validators.required],
        price:["", Validators.required],
        amount:["", Validators.required]
      });
    }else{
      this.formGroup=this.formBuilder.group({
        name:[this.data.name||"", Validators.required],
        code:[this.data.code||"", Validators.required],
        category:[this.data.category||"",Validators.required],
        description:[this.data.description||"", Validators.required],
        price:[this.data.price||"", Validators.required],
        amount:[this.data.amount||"",Validators.required],
      })
    }
  }

  onSave() {
    if (this.formGroup.valid) {
      this.dialogRef.close(this.formGroup.value);
    }
  }

}
