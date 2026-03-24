import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, CreateOrderPayload } from '../models/order.model';

@Injectable()
export abstract class OrderService {
  abstract getOrders(): Observable<Order[]>;
  abstract getOrderById(id: string): Observable<Order>;
  abstract createOrder(payload: CreateOrderPayload): Observable<Order>;
  abstract cancelOrder(id: string): Observable<Order>;
}
