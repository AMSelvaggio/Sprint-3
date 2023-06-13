// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
const cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

let total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (let i = 1; i <= products.length; i++) {
        if (i === (id)) {
            cartList.push(products[i - 1])

        }
    }

    calculateTotal()

    document.getElementById("count_product").innerHTML = cartList.length;

   

    //Prueba del ejercicio 8. 
    //addToCart()
}

// Exercise 2
function cleanCart() {




    cartList.splice(0, cartList.length)
    cart.splice(0, cart.length)

    printCart()

    total = 0


    document.getElementById("count_product").innerHTML = cartList.length;
    document.getElementById("total_price").innerHTML = total;


    




    //Primera opción

    /* for (let i = cartList.length; i >= cartList.length - 1; i--) {
 
         cartList.splice(i, 1)
 
 
     }*/

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    total = 0

    for (let i = 0; i < cartList.length; i++) {


        total += Number.parseFloat(cartList[i].price)

    }


    document.getElementById("total_price").innerHTML = total;

   





    //Prueba de hacer el ejercicio con la array cart.

    /*for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === 1 && cart[i].quantity >= 3) {
            total = Number(total + cart[i].subtotalWithDiscount)


        }
        if (cart[i].id === 3 && cart[i].quantity >= 10) {

            total = Number(total + cart[i].subtotalWithDiscount)

        }

        else {
            total = Number(total + cart[i].price);
        }



    }*/

}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    cart.splice(0, cart.length)

    for (let i = 0; i < cartList.length; i++) {

        const merchandise = cartList[i]
        const chosenMerchandise = cart.find((item) => item.id === merchandise.id)

        if (chosenMerchandise === undefined) {

            merchandise.quantity = 1;

            merchandise.subtotal = merchandise.price

            cart.push(merchandise)
        }
        else {
            chosenMerchandise.quantity = chosenMerchandise.quantity + 1;

           chosenMerchandise.subtotal = chosenMerchandise.quantity * chosenMerchandise.price

           
        }

    }

}




// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === 1 && cart[i].quantity >= 3) {
            cart[i].subtotalWithDiscount = cart[i].quantity * 10;
        }

        if (cart[i].id === 1 && cart[i].quantity < 3) {
            cart[i].subtotalWithDiscount = cart[i].subtotal
        }
    }

    for (let i = 0; i < cart.length; i++) {

        if (cart[i].id === 3 && cart[i].quantity >= 10) {

            cart[i].subtotalWithDiscount = (cart[i].subtotal * 0.66) // 2/3

        }

        if (cart[i].id === 3 && cart[i].quantity < 10) {
            cart[i].subtotalWithDiscount = cart[i].subtotal
        }
    }


}

// Exercise 6

let postedCart = []

function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    applyPromotionsCart()


    postedCart = []

    for (let i = 0; i < cart.length; i++) {
        postedCart.push(
            `<tr>
            <th>${cart[i].name}</th>
            <td>${cart[i].price}</td> 
            <td>${cart[i].quantity}</td>
            <td>${cart[i].subtotalWithDiscount ? cart[i].subtotalWithDiscount : cart[i].subtotal}</td>
            <td><a type="button" onclick="removeFromCart(${cart[i].id})">
            <i class="fa fa-trash" aria-hidden="true"></i></a></td>
            </tr>`)
    }


    document.getElementById("cart_list").innerHTML = postedCart.join('')






}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.



    for (let i = 0; i <= products.length - 1; i++) {
        if (i === (id - 1)) {
            const product = products[i];
            const selectedFromCartList = cart.find((item) => item.id === product.id);

            if (selectedFromCartList === undefined) {
                product.quantity = 1;
                product.subtotal = product.price
                cart.push(product);
            }
            else {
                selectedFromCartList.quantity++;
                selectedFromCartList.subtotal = selectedFromCartList.quantity * selectedFromCartList.price;
            }
        }
    }
    applyPromotionsCart()

    let totalQuantity = 0;

    for (let i = 0; i < cart.length; i++) {
        totalQuantity += cart[i].quantity;
        document.getElementById("count_product").innerHTML = totalQuantity;
    }
   
}


// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array




    for (let i = 0; i <= products.length - 1; i++) {



        if (i === (id - 1)) {

            

            const product = products[i];
            const toErase = cart.find((item) => item.id === product.id)
            

            if (product.quantity <= 1) {
                const index = cart.findIndex((item) => item.id === product.id)

                cart.splice(index, 1)
            }

    

                if (toErase.quantity === 3 && toErase.id === 1) {

                    toErase.quantity--
                    toErase.subtotal = toErase.subtotalWithDiscount - 9;
                    
                    printCart()
                    return
                    
                }

               if(toErase.quantity >3 && toErase.id === 1) {

                    toErase.quantity--
                    toErase.quantityWithDiscount = toErase.subtotalWithDiscount - 10;
                    
                    printCart()
                    return
                    
                }
            

                    else {
                toErase.quantity--
                toErase.subtotal = toErase.subtotal - toErase.price
                total = total - toErase.price

            }
        }

    } 

//Intento de modifocar count_product a la par que se restan productos del carro
  /*  let totalQuantity = 0;


    for (let i = 0; i < cart.length; i++) {
        
        if (cart[i].quantity >1){ totalQuantity += cart[i].quantity} 
        
        }
    
if (totalQuantity > 0) {
    document.getElementById("count_product").innerHTML = totalQuantity}

else {
    document.getElementById("count_product").innerHTML = 0
} */

     
    printCart()
    

}



function open_modal() {
    console.log("Open Modal");
    generateCart()
    printCart();
}