import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { OrderService } from '../../core/services/order.service';
import { Order, CreateOrderPayload, OrderStatus } from '../../core/models/order.model';
import { ORDERS_FIXTURE } from '../fixtures/orders.fixture';
import { PRODUCTS_FIXTURE } from '../fixtures/products.fixture';

const SIMULATED_DELAY_MS = 500;

@Injectable()
export class MockOrderService extends OrderService {
  private orders: Order[] = [...ORDERS_FIXTURE];

  getOrders(): Observable<Order[]> {
    return of(this.orders).pipe(delay(SIMULATED_DELAY_MS));
  }

  getOrderById(id: string): Observable<Order> {
    const order = this.orders.find((o) => o.id === id)!;
    return of(order).pipe(delay(SIMULATED_DELAY_MS));
  }

  createOrder(payload: CreateOrderPayload): Observable<Order> {
    const resolvedItems = payload.items.map((item) => {
      const product = PRODUCTS_FIXTURE.find((p) => p.id === item.productId)!;
      return {
        productId: product.id,
        productName: product.name,
        thumbnail: product.thumbnail,
        price: product.price,
        quantity: item.quantity,
      };
    });

    const subtotal = resolvedItems.reduce((acc, i) => acc + i.price * i.quantity, 0);
    const shipping = subtotal >= 50 ? 0 : 5.99;

    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      userId: 'user-1',
      items: resolvedItems,
      status: 'pending' as OrderStatus,
      subtotal,
      shipping,
      total: subtotal + shipping,
      shippingAddress: payload.shippingAddress,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.orders = [...this.orders, newOrder];
    return of(newOrder).pipe(delay(SIMULATED_DELAY_MS));
  }

  cancelOrder(id: string): Observable<Order> {
    this.orders = this.orders.map((o) =>
      o.id === id ? { ...o, status: 'cancelled' as OrderStatus, updatedAt: new Date().toISOString() } : o
    );
    const updated = this.orders.find((o) => o.id === id)!;
    return of(updated).pipe(delay(SIMULATED_DELAY_MS));
  }
}
