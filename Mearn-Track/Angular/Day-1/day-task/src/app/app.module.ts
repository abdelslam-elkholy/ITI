import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductCardDirective } from './product-card.directive';
import { CreditCardPipe } from './credit-card.pipe';
import { AboutComponent } from './about/about/about.component';
import { FilteredWithPriceComponent } from './filtered-with-price/filtered-with-price.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    SideBarComponent,
    ProductCardDirective,
    CreditCardPipe,
    AboutComponent,
    FilteredWithPriceComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
