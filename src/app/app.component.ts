import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //1.Make a new array of objects called productNamePrice from the products array; it should contain only productName and productPrice
  products = [
    {
      productName: "Stamps and Flowers - Amethyst",
      productPrice: 3725,
    },
    {
      productName: "Stamps and Flower - Sage",
      productPrice: 6000,
     },
    {
      productName: "Stamps and Flower - Sage",
      productPrice: 4109,
    },
    {
      productName: "Secrets of the Amazon - Pistachio",
      productPrice: 3009,
    },
    {
      productName: "Stamps and Flowers - Amethyst",
      productPrice: 3725,
    },
    {
      productName: "Stamps and Flower - Sage",
      productPrice: 2109,
    },
    {
      productName: "Stamps and Flower - Sage",
      productPrice: 2109,
    },
    {
      productName: "Secrets of the Amazon - Pistachio",
      productPrice: 2119,
    },
  ];

  cart = [
    {
      customID: "5A9FFA2C-5D9D-4A1E-88CF-40AA3384D6FC",
      id: "5A9FFA2C-5D9D-4A1E-88CF-40AA3384D6FC",
      addons: [
      ],
      name: "Copy of Copy of Mehndi Combo Yellow",
      basePrice: 8000,
      price: 16000,
      quantity: 2,
      sku: "12",
      barcode: "12",
      image: "1503306146546-product.jpeg",
      key: "XS,Yellow",
      productUrl: "copy-of-copy-of-mehndi-combo-yellow",
      combination: [
        "XS",
        "Yellow"
      ],
      pMOL: [
        {
          optionSelected: "size",
          custom: "",
          value: [
            {
              value: "XS"
            },
            {
              value: "S"
            },
            {
              value: "M"
            },
            {
              value: "L"
            }
          ]
        },
        {
          optionSelected: "color",
          custom: "",
          value: [
            {
              value: "Yellow"
            }
          ]
        }
      ],
      weight: 12,
      productTypeName: "2 Piece",
      discountedPrice: 14400,
    },
    {
      customID: "2CD622F6-01BA-404B-8755-E9DCD722BF4C",
      id: "2CD622F6-01BA-404B-8755-E9DCD722BF4C",
      addons: [
      ],
      name: "Purple Multi Shalwar",
      basePrice: 2750,
      price: 8250,
      quantity: 3,
      sku: "CZ104802",
      barcode: "8000000011942",
      image: "1503305912595-product.jpeg",
      key: "S,Purple",
      productUrl: "purple-multi-shalwar",
      combination: [
        "S",
        "Purple"
      ],
      pMOL: [
        {
          optionSelected: "Size",
          value: [
            {
              value: "S"
            },
            {
              value: "M"
            },
            {
              value: "L"
            }
          ]
        },
        {
          optionSelected: "Color",
          value: [
            {
              value: "Purple"
            }
          ]
        }
      ],
      weight: 0.25,
      productTypeName: "Shalwar",
      discountedPrice: 7425,
    },
    {
      customID: "EEB4AB00-F5B0-487C-A5B7-8E8ECF4BC06D",
      id: "EEB4AB00-F5B0-487C-A5B7-8E8ECF4BC06D",
      addons: [
      ],
      name: "Leaf Stencil Red",
      basePrice: 2500,
      price: 2500,
      quantity: 1,
      sku: "CZ105004",
      barcode: "8000000011950",
      image: "1503305994543-product.jpeg",
      key: "S,Red,X",
      productUrl: "leaf-stencil-red",
      combination: [
        "S",
        "Red",
        "X"
      ],
      pMOL: [
        {
          optionSelected: "size",
          custom: "",
          value: [
            {
              value: "S"
            },
            {
              value: "A"
            }
          ]
        },
        {
          optionSelected: "color",
          custom: "",
          value: [
            {
              value: "Red"
            },
            {
              value: "Blue"
            }
          ]
        },
        {
          optionSelected: "material",
          custom: "",
          value: [
            {
              value: "X"
            },
            {
              value: "Q"
            }
          ]
        }
      ],
      weight: 0.5,
      productTypeName: "Shalwar",
      discountedPrice: 0,
    },
    {
      customID: "E6E2ED4E-CCAF-4D29-9469-806248CD27EE",
      id: "E6E2ED4E-CCAF-4D29-9469-806248CD27EE",
      addons: [
      ],
      name: "test123",
      basePrice: 599,
      price: 599,
      quantity: 4,
      sku: "123",
      barcode: "123",
      image: "aaa-84021c4-legal.jpg",
      key: null,
      productUrl: "test123",
      combination: null,
      pMOL: null,
      weight: 0,
      productTypeName: "Shrug",
      discountedPrice: 0,
    }
  ];
  ngOnInit() {
    this.leastPriceWithThisName("Stamps and Flower - Sage");
    this.totalItemsInCart();
    this.minAndMaxValue();
    this.totalPriceOfCart();
  }

  //2.You'll notice that some products have the same name, make a function called leastPriceWithThisName which will take one parameter (name). It should return the product with least price which has the parameter name passed to the function
  // function format -> leastPriceWithThisName(name)
  leastPriceWithThisName(name){
   let min = Math.min(...this.products.map(item => item.productPrice))
   let result = this.products.filter(item => item.productName === name && item.productPrice === min)
   console.log(result)
   return result;
 }

 // 3.Extract the total quantity of items from the carts array.
  totalItemsInCart(){
   let totalItems = this.cart.reduce(function (tItems, obj) { return tItems + obj.quantity; }, 0); 
   console.log(totalItems);
 }

 //4.Extract a cart item with the least price and a cart item with the max price.
  minAndMaxValue(){
  let min = Math.min(...this.cart.map(item => item.price))
  let minResult = this.cart.filter(item => item.price === min)
  console.log(minResult)
  let max = Math.max(...this.cart.map(item => item.price))
  let maxResult = this.cart.filter(item => item.price === max)
  console.log(maxResult)
 }

 //5.Calculate the total price of the cart, keep in mind any discounts applied to a cart item. Note:
  totalPriceOfCart(){
  let totalPrice = this.cart.reduce(function (cart, obj) { return cart + obj.price; }, 0); 
  console.log(totalPrice);
 }

}
