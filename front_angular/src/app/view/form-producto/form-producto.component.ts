import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../../model/producto';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss']
})
export class ProductFormComponent implements OnInit {
  formGroup!: FormGroup;
  isEditMode: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto,
    private formBuilder: FormBuilder,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.initForm();
    if (this.data && this.data.id) {
      this.isEditMode = true;
    }
  }

  initForm(): void {
    this.formGroup = this.formBuilder.group({
      id: [this.data.id],
      name: [this.data.name, Validators.required],
      code: [this.data.code, Validators.required],
      category: [this.data.category, Validators.required],
      description: [this.data.description, Validators.required],
      price: [this.data.price, Validators.required],
      amount: [this.data.amount, Validators.required],
      status: [this.data.status],
      creationDate: [this.data.creationDate],
      deleteDate: [this.data.deleteDate]
    });
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      if (this.isEditMode) {
        this.productoService.updateProduct(this.formGroup.value).subscribe(() => {
          this.dialogRef.close(true);
        }, error => {
          console.error('Error updating product', error);
        });
      } else {
        this.productoService.addProduct(this.formGroup.value).subscribe(() => {
          this.dialogRef.close(true);
        }, error => {
          console.error('Error adding product', error);
        });
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
