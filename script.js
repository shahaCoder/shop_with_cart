// Покажите товары по следующему массиву

let arr = [{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday,transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10,",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}, {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
        "rate": 4.1,
        "count": 259
    }
}, {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 500
    }
}, {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description. transfers Improve PC Performance High Capacity; ",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
        "rate": 2.1,
        "count": 430
    }
}, {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be smth",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
}, {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.transfers Improve PC Performance High Capacity; ",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
}, {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day... transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10,transfer,and los  ",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 3,
        "count": 400
    }
}, {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel, transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10,transfers ",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 1.9,
        "count": 100
    }
}, {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems;",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
        "rate": 3.3,
        "count": 203
    }
}, {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive;he loves cars,and airplanes,you must teach,for your opinion transfer speeds Remarkable transfer speeds",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
        "rate": 2.9,
        "count": 470
    }
}, {
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating": {
        "rate": 4.8,
        "count": 319
    }
}, {
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": {
        "rate": 4.8,
        "count": 400
    }
}, {
    "id": 13,
    "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price": 599,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin and ultra light" ,
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "rating": {
        "rate": 2.9,
        "count": 250
    }
}, {
    "id": 14,
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": {
        "rate": 2.2,
        "count": 140
    }
}, {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly,and you? we have to do",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": {
        "rate": 2.6,
        "count": 235
    }
}, {
    "id": 16,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "rating": {
        "rate": 2.9,
        "count": 340
    }
}, {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design.Lorem ipsum dolor sit amet,lorem dolor smth ello,la,lorem,smth abcd you should buy smth for me ",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": {
        "rate": 3.8,
        "count": 679
    }
}, {
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem lorem ipsum",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 130
    }
}, {
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": {
        "rate": 4.5,
        "count": 146
    }
}, {
    "id": 20,
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": {
        "rate": 3.6,
        "count": 145
    }
}]
 
let inf = arr.map(item => item.count = 1)
let cartBox = []
let closeCart = document.querySelector('.close')

// a create
let wraperDown = document.createElement('div')
let grid = document.createElement('div')

function shop(array) {
    grid.innerHTML = ''
    for(let index of array){
        // a create
        let item = document.createElement('div')
        let img = document.createElement('img')
        let blackBlock = document.createElement('div')
        let h1 = document.createElement('h1')
        let p = document.createElement('p')
        let wrap = document.createElement('div')
        let wrap2 = document.createElement('div')
        let wrap3 = document.createElement('div')
        let wrap4 = document.createElement('div')
        let image2 = document.createElement('img')
        let rent = document.createElement('span')
        let span = document.createElement('span')
        let span2 = document.createElement('span')
        let image3 = document.createElement('img')
        let image4 = document.createElement('img')
        let button = document.createElement('button')
        let one = document.querySelector('.one')
        

        // b decor
        grid.classList.add('grid')
        item.classList.add('item')
        img.src = index.image
        img.classList.add('images')
        blackBlock.classList.add('blackBlock')
        h1.classList.add('h1Text')
        h1.innerHTML = index.title
        p.classList.add('pText')
        p.innerHTML = index.description
        wrap.classList.add('wrap')
        image2.src = 'img/Vector.svg'
        image3.src = 'img/Vector (1).svg'
        image4.src = 'img/Group 9.svg'
        image2.classList.add('image2')
        rent.innerHTML = index.price
        span.innerHTML = index.rating.rate
        span2.innerHTML = index.rating.count
        rent.classList.add('rent')
        span.classList.add('rent')
        span2.classList.add('rent')
        wrap2.classList.add('wrap2')
        wrap3.classList.add('wrap2')
        wrap4.classList.add('wrap2')
        button.classList.add('btn')
        button.innerHTML = 'В избранное'
        button.onclick = () => {
            if(!cartBox.includes(index)){
                cartBox.push(index)
                cartReload(cartBox, ModalCart)
            } else {
                cartBox.splice(index, 1)
                cartReload(cartBox, ModalCart)
            }
            
            
            

             
            button.classList.toggle('active')
            
           button.innerHTML = 'Добавлено'
           if(button.classList.contains('active')){  one.innerHTML++
        } else{
            one.innerHTML--
            button.innerHTML = 'В избранное'
        }
        }

        closeCart.onclick = () => {
            // cartBox.splice(cartBox, ModalCart)
            // cartReload(cartBox, ModalCart)
            alert()
         }
        
                
        // c add
        wrap4.prepend(image4,span2)
        wrap3.prepend(image3,span)
        wrap2.prepend(image2,rent)
        wrap.prepend(wrap2,wrap3,wrap4)
        blackBlock.prepend(h1,p,wrap,button)
        item.prepend(img,blackBlock)
        grid.prepend(item)
    }
}
    let show = document.querySelector('.smth')
    let showAll = document.querySelector('.right')
    console.log(show);

    show.onclick = () => {
        shop(arr.slice(0,5))
    }
    showAll.onclick = () => {
        shop(arr)
    }
shop(arr)

// b decor


// c add
wraperDown.append(grid)
document.body.append(wraperDown)



let ModalCart = document.querySelector('.modal-cart')
function cartReload(data, place) {
    place.innerHTML = ''
    for (let item of data) {
        place.innerHTML += `
        <div class="modal-cart">
           <div class="cart-block">
               <div class="left-block">
                   <img src="${item.image}">
                   <h1>${item.title}</h1>
               </div>
               <img src="./img/3671739_close_solid_icon.png" class="close">
               <div class="right-block">
                   <h1>${item.price}</h1>
                   <div class="button" id= "${item.id}">
                       <button data-order="inc" class="btn11">+</button>
                       <span>${item.count}</span>
                       <button data-order="dec" class="btn11">&mdash;</button>
                   </div>
               </div>
           </div>
        </div>
        `
    }
    let countButtons = document.querySelectorAll('button[data-order]')
    countButtons.forEach(btn => {
        btn.onclick = () => {
            let id = btn.parentNode.id
            console.log(id)
            let atr = btn.getAttribute('data-order');
            if(atr === 'inc'){
                increment(id)
            } else{
                decrement(id)
            }
        }
    })
} 
cartReload(cartBox, ModalCart)

function increment(id) {
    let finded = arr.find(item => item.id === +id)
    finded.count++
    cartReload(cartBox, ModalCart)
}
function decrement(id) {
    let finded = arr.find(item => item.id === +id)
    if(finded.count > 0) finded.count--
    if(finded.count === 0) {
        cartBox.splice(finded, 1)
        location.reload()
        cartReload(cartBox, ModalCart)
    }
    cartReload(cartBox, ModalCart)
}