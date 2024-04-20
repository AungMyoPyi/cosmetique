const product =[
    {
        id:0,
        image:"pJ.webp",
        title:'Vaseline 100% Pure Petroleum Jelly, Original Skin Protectant',
        price: 1000,
    },
    {
        id:1,
        image:'menlotion.jpg',
        title:'Vaseline Men Lotion, Body & Face, Extra Strength',
        price: 20000,
    },
    {
        id:2,
        image:'dailysunrefreshing.jpg',
        title:'Vaseline Healthy Bright  Refreshing Serum SPF50',
        price: 16000,
    },
    {
        id:3,
        image:'night.jpg',
        title:'Vaseline Healthy Bright Gluta-Hya Overnight Lotion',
        price: 10000,
    },
    {
        id:4,
        image:"spray.jpg",
        title:"Vaseline Intensive Care Cocoa Radiant Spray Moisturiser",
        price:22000,
    },
    {
        id:5,
        image:"oil.jpg",
        title:" Vaseline Total Moisture Cocoa Radiant Body Gel Oil",
        price:12000,
    },
    {
        id:6,
        image:"cocoa.webp",
        title:"Vaseline Intensive Care Cocoa Radiant Body Lotion ",
        price:18000,
    },
    {
        id:7,
        image:"hand.webp",
        title:" Vaseline Intensive Care Healthy Hands & Stronger Nails lotion",
        price:9000,
    },
    {
        id:8,
        image:"menfacescrub.jpg",
        title:"L'Oreal Paris Men Energetic Deep Exfoliating Face Scrub ",
        price:10000,
    },
    {
        id:9,
        image:"facewash.jpg",
        title:" L'Oreal Men Expert Pure Charcoal Daily Face Wash",
        price:12000,
    },
    {
        id:10,
        image:"scrub.jpg",
        title:"L'Oreal Paris  Aura Perfect Anti-Dullness Scrub",
        price:12000,
    },
    {
        id:11,
        image:"cleanser.jpg",
        title:"L'Oreal Paris White Perfect Milky Foam Facial Cleanser",
        price:15000,
    },
    {
        id:12,
        image:"menpoooo.jpg",
        title:"L'Oreal Men Expert Total Clean Shampoo Imported",
        price:12000,
    },
    {
        id:13,
        image:"gel.jpg",
        title:"L’Oreal Men Extreme Fix Indestructible Strong Hold Gel  ",
        price:12000,
    },
    {
        id:14,
        image:"poo.jpg",
        title:"L'Oreal Paris Total Repair 5 Shampoo for damaged Hair",
        price:17000,
    },
    {
        id:15,
        image:"conditioner.jpg",
        title:"L'Oréal Paris Hair Repair 5 Conditioner for damaged Hair",
        price:15000,
    },
    {
        id:16,
        image:"lipcream.jpg",
        title:"Strawberry Rococo Cloud Lip Cream",
        price:48800,
    },
    {
        id:17,
        image:"swan.webp",
        title:"Swan Ballet Shine Lipstick",
        price:56500,
    },
    {
        id:18,
        image:"lipGloss.jpg",
        title:"Moonlight Mermaid Jewelry Lip Gloss",
        price:48800,
    },
    {
        id:19,
        image:"Powder.jpg",
        title:"Moonlight Mermaid Setting Powder",
        price:65000,
    },
    {
        id:20,
        image:"Palette.webp",
        title:"Strawberry Rococo 5 Color Eyeshadow Palette",
        price:56000,
    },
    {
        id:21,
        image:"Eyeliner.webp",
        title:"Moonlight Mermaid Eyeliner",
        price:28500,
    },
    {
        id:22,
        image:"Mascara.webp",
        title:"Chocolate Wonder-shop Mascara",
        price:38000,
    },
    {
        id:23,
        image:"blushhhh.webp",
        title:"Strawberry Rococo Embossed Blush",
        price:46000,
    },
    {
        id:24 ,
        image:"FaithB.webp",
        title:"Color:Faith",
        price:95000,
    },
    {
        id: 25,
        image:"GratefulB.webp",
        title:"Color:Grateful",
        price:95000,
    },
    {
        id: 26,
        image:"JoyB.webp",
        title:"Color:Joy",
        price:95000,
    },
    {
        id:27 ,
        image:"LuckyB.webp",
        title:"Color:Lucky",
        price:95000,
    },
    {
        id: 28,
        image:"HonestyL.webp",
        title:"Color:Honesty",
        price:76000,
    },
    {
        id:29 ,
        image:"HopeL.webp",
        title:"Color:Hope",
        price:76000,
    },
    {
        id:30 ,
        image:"AffectionL.webp",
        title:"Color:Affection",
        price:76000,
    },
    {
        id:31 ,
        image:"WonderL.webp",
        title:"Color:Wonder",
        price:76000,
    },
    {
        id: 32,
        image:"04.jpg",
        title:"04 Radwood",
        price:20500,
    },
    {
        id:33 ,
        image:"05.webp",
        title:"05 Bibi Candy",
        price:20500,
    },
    {
        id: 34,
        image:"7ROMAND.jpg",
        title:"07 Cool Rose Up",
        price:20500,
    },
    {
        id: 35,
        image:"09CoralJublee.jpg",
        title:"09 Coral Jublee",
        price:20500,
    },
    {
        id:36 ,
        image:"02Lovelypink.jpg",
        title:"02 Lovely Pink",
        price:22000,
    },
    {
        id:37,
        image:"03SorbetBalm.jpg",
        title:"03 Sorbet Balm",
        price:22000,
    },
    {
        id:38 ,
        image:"05NougatSand.jpg",
        title:"05 Nougat Sand",
        price:22000,
    },
    {
        id:39,
        image:"06.melting.jpg",
        title:"06 Kaya Fig",
        price:22000,
    },
  
];

const categories = [...new Set(product.map((item)=>{
    return item}))]
   let i=0;
  const dispalyItem= (Items)=>{
   document.getElementById('root').innerHTML=Items.map((Items)=>{
   var {image, title, price} =Items;
   return(

       `<div class='box'>
         <div class='img-box'>
           <img class='images' src=${image}></img>
           </div>
           <div class='bottom'>
           <p>${title}</p>
           <h2>${price} mmK</h2>`+
           "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
           `</div>
           </div>`
   )}).join('') 
   }
   dispalyItem(categories);

   var cart =[];
    function addtocart(a){
       cart.push({...categories[a]});
       displaycart();
    }
    function delElement(a){
       cart.splice(a,1);
       displaycart();
    }

   const displaycart=(a) =>{
       let j=0;
       total=0;
      
       document.getElementById("count").innerHTML=cart.length;
       
       if (cart.length===0){
           document.getElementById('cartItem').innerHTML ="Your cart is empty";
           document.getElementById("total").innerHTML=0 +" "+"mmK";
       }
       else {
           document.getElementById("cartItem").innerHTML =cart.map((Items)=>
           {

               var {image , title , price} = Items;
               total=total+price;
               document.getElementById("total").innerHTML=total+" "+"mmK";
               return(
                   `<div class='cart-item'>
                   <div class=row-img'>
                   <img class='rowimg' src=${image}>
                   </div>
                   <p style='font-size:12px;'>${title}</p>
                   <h2 style='font-size:15px;'>${price}</h2>`+
                   "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
               );
           }).join('')
       }
   }