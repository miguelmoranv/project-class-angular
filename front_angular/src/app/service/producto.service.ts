import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'http://localhost:5000/api'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/product`);
  }

  addProduct(product: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.apiUrl}/product`, product);
  }

  updateProduct(product: Producto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/product/${product.id}`, product);
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/product/${id}`);
  }
}
