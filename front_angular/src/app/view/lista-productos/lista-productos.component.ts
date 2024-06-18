import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../model/Producto';
import { ProductFormComponent } from '../form-producto/form-producto.component';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductos implements OnInit {
  ListaProductos!: MatTableDataSource<Producto>;
  columnsHeader = ["date", "name", "price", "amount", "status", "opciones"];
  @ViewChild('deleteDialog') deleteDialog!: TemplateRef<any>;

  constructor(
    private productoService: ProductoService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productListMethod();
  }

  openDialog(producto?: Producto): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: '400px',
      data: producto ? { ...producto } : { id: '', code: '', name: '', category: '', description: '', price: 0, amount: 0, status: true, creationDate: new Date(), deleteDate: new Date() }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productListMethod(); // Refresh the list after closing the dialog
      }
    });
  }

  openDeleteDialog(producto: Producto): void {
    const dialogRef = this.dialog.open(this.deleteDialog, {
      width: '250px',
      data: producto
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteProduct(producto._id);
      }
    });
  }

  deleteProduct(id: string): void {
    if (!id) {
      console.error('Producto ID is undefined');
      return;
    }

    this.productoService.deleteProduct(id).subscribe(
      () => this.productListMethod(), // Refresh the list after deletion
      error => console.error('Error deleting product', error)
    );
  }

  productListMethod(): void {
    this.productoService.getProducts().subscribe(
      products => {
        this.ListaProductos = new MatTableDataSource(products);
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.ListaProductos.filter = filterValue.trim().toLowerCase();
  }
}
