import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {
  ListaProductos: Producto[] = [];
  isLoading = true; 

  constructor(private productService: ProductoService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  async getProduct() {
    try {
      this.productService.getProducts()
        .subscribe(item => {
          setTimeout(() => {
            this.ListaProductos = item;
            this.isLoading = false; 
          }, 1000); 
        });
    } catch (error) {
      console.log(error);
      this.isLoading = false; 
    }
  }
}
