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
      productStock: new FormControl('99', Validators.required),
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
      var dropdown = document.getElementById("dropdown");
      this.hideDropdown()
   }

   onSubmit() {
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
         console.log(res)
      },
      (error) => {
         console.log(error)
      })
   }


   // HANDLING DROPDOWN 
   dropdownInstance!: DropdownInterface;
   dropdownVisible = false;
   ngOnInit(): void {
      this.userService.checkAdmin().subscribe({
         next: (res) => {
            const resp = JSON.parse(res.toString())
            this.isAdmin = resp.isAdmin;
         },
         error: (error) => {
            this.router.navigate(['/']);
         }
      })

      const $targetEl = document.getElementById('dropdown');
      const $triggerEl = document.getElementById('dropdownDefaultButton');
      // Opciones del dropdown
      const options: DropdownOptions = {
         placement: 'bottom',
         triggerType: 'click',
         // ... otras opciones
      };
      const instanceOptions: InstanceOptions = {
         id: 'dropdown',
         override: true,
      };
      this.dropdownInstance = new Dropdown($targetEl, $triggerEl, options, instanceOptions);
   }
   hideDropdown() {
      // Oculta el dropdown al hacer clic en un elemento de la lista
      this.dropdownInstance.hide();
   }
}
