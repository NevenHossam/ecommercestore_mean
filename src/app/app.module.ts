import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TooltipModule } from 'ng2-tooltip-directive';
import { CommonModule } from '@angular/common';

import { ProductsService } from './services/products.service';
import { UsersService } from './services/users.service';
import { OrdersService } from './services/orders.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SearchComponent } from './components/search/search.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UsersComponent } from './components/users/users.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { PromotedProductsComponent } from './components/promoted-products/promoted-products.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProtectedDirective } from './directives/protected.directive';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsListComponent,
    ProductItemComponent,
    SearchComponent,
    ShoppingCartComponent,
    ContactUsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    OrdersComponent,
    UsersComponent,
    ProductDetailsComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    PromotedProductsComponent,
    DropdownComponent,
    OrderItemComponent,
    UserOrdersComponent,
    ProtectedDirective,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    TooltipModule,
    CommonModule,
    FontAwesomeModule,
  ],
  providers: [ProductsService, OrdersService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
