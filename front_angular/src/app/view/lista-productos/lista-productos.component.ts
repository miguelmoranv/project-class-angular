import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../model/producto';

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

  openDIalog () {
    
  }

  productListMethod() {
    try {
      this.productoService.getProducts()
        .subscribe(item => this.ListaProductos = new MatTableDataSource(item));
    } catch (error) {
      console.log(error);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.ListaProductos.filter = filterValue.trim().toLowerCase();
  }
}
