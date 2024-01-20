import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Dropdown, DropdownOptions, DropdownInterface, InstanceOptions } from 'flowbite';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../../user/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit {
   loading = false;
   urlImages: string[] = [];
   tags: string[] = []
   chosenCategory = 'Choose Category';
   isAdmin: boolean = false;

   

   productForm = new FormGroup({
      productName: new FormControl('', Validators.required),
      productBrand: new FormControl(''),
      productDescription: new FormControl(''),
      productPrice: new FormControl('', Validators.required),
      discountPrice: new FormControl(''),
      productImageUrls: new FormControl(''),
      productStock: new FormControl(99, Validators.required),
      productStatus: new FormControl('true'),
      productTags: new FormControl(''),
      productSKU: new FormControl('', Validators.required),
   });

   constructor(private productService: ProductService, private userService: UserService, private router: Router) { }
   
   addImage() {
      const url = this.productForm.get('productImageUrls')?.value
      if (url) {
         this.urlImages.push(url);
         this.productForm.get('productImageUrls')?.setValue('');
      }
   }
   removeImage(url: string) {
      const index = this.urlImages.indexOf(url);
      if (index > -1) {
         this.urlImages.splice(index, 1);
      }
   }

   addTag() {
      const tag = this.productForm.get('productTags')?.value
      if (tag) {
         this.tags.push(tag);
         this.productForm.get('productTags')?.setValue('');
      }
   }

   removeTag(tag: string) {
      const index = this.tags.indexOf(tag);
      if (index > -1) {
         this.tags.splice(index, 1);
      }
   }

   changeCategory(category: string) {
      this.chosenCategory = category
   }

   onSubmit() {
      this.loading = true;
      const name = this.productForm.get('productName')?.value!
      const price = +this.productForm.get('productPrice')?.value!
      const discountPrice = +(this.productForm.get('discountPrice')?.value !== '' ? this.productForm.get('discountPrice')?.value : '0')!
      const category = this.chosenCategory
      const images = this.urlImages.length > 0 ? this.urlImages : ['https://cdn.discordapp.com/attachments/1191538444468490342/1194342394842333223/Image-not-found.png?ex=65b00108&is=659d8c08&hm=d94f890fd60036aa104f8c0fca4b3bc704f20ae4bf95d5b53a070c43cf1481b2&']
      const numberInStock = +this.productForm.get('productStock')?.value!
      const active = Boolean(this.productForm.get('productStatus')?.value)
      const rating = 0
      const tags = this.tags
      const brand = this.productForm.get('productBrand')?.value!
      const description = (this.productForm.get('productDescription')?.value !== '' ? this.productForm.get('productDescription')?.value : 'No description provided.')!
      const SKU = this.productForm.get('productSKU')?.value!

      this.productService.createProduct(name, price, discountPrice, category, images, numberInStock, active, rating, tags, brand, description, SKU).subscribe(
      (res) => {
         this.router.navigate(['product-details', 1], {state: {product: res}});
      },
      (error) => {
         this.loading = false;
         console.log(error)
      })
   }

   ngOnInit(): void {
      this.userService.checkAdmin().subscribe({
         next: (res) => {
            this.isAdmin = res.isAdmin;
         },
         error: (error) => {
            this.router.navigate(['/']);
         }
      })
   }
   handlePlus() {
      const quantity: number = +this.productForm.get('productStock')!.value!;
      if (quantity < 999) {
         this.productForm.get('productStock')!.setValue(quantity + 1);
      }
   }
   handleMinus() {
      const quantity: number = +this.productForm.get('productStock')!.value!;
      if (quantity > 1) {
         this.productForm.get('productStock')!.setValue(this.productForm.get('productStock')!.value! - 1)
      }
   }
}
