import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../model/producto';
import { ProductFormComponent } from '../form-producto/form-producto.component';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductos implements OnInit {
  ListaProductos!: MatTableDataSource<Producto>;
  columnsHeader = ["date", "name", "price", "amount", "status", "opciones"];

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

  deleteProduct(producto: Producto): void {
    if (confirm(`Are you sure you want to delete ${producto.name}?`)) {
      this.productoService.deleteProduct(producto.id).subscribe(() => {
        this.productListMethod(); // Refresh the list after deletion
      });
    }
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
