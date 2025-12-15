// src/data.js

export const categories = [
  "Women Dresses",
  "Men Shirts",
  "Cosmetics",
  "Mobiles",
  "Laptops",
  "Kitchen",
  "Jewellery",
];

export const products = [
  // Women Dresses
  {
    id: 1,
    category: "Women Dresses",
    name: "Floral Summer Dress",
    price: 999,
    image: "https://media.istockphoto.com/id/2233340957/photo/woman-in-traditional-outfit-posing-at-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=wS6gZr4nC8RRSqQwefR9alnV1L2FaH6BGUsZl43c28U=",
  },
  {
    id: 2,
    category: "Women Dresses",
    name: "Party Gown",
    price: 1999,
    image: "https://images.unsplash.com/photo-1626193744876-3ee5bfe05902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhcnR5JTIwZ293biUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
  id: 3,
  name: "Skirt",
  price: 1299,
  category: "Women Dresses",
  image: "https://images.unsplash.com/photo-1527332042004-0b1a4d8646a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpcnQlMjBkcmVzc2VzJTIwaW1hZ2VzfGVufDB8fDB8fHww"
},
{
  id: 4,
  name: "Black Party Gown",
  price: 2499,
  category: "Women Dresses",
  image: "https://images.unsplash.com/photo-1741816219305-827580cab505?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBwYXJ0eSUyMGdvd258ZW58MHx8MHx8fDA%3D"
},
{
  id: 5,
  name: "Red Casual Dress",
  price: 999,
  category: "Women Dresses",
  image: "https://plus.unsplash.com/premium_photo-1669559419332-4fedadf9c3e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVkJTIwY2FzdWFsJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D"
},
{
  id: 6,
  name: "Long Maxi Dress",
  price: 1799,
  category: "Women Dresses",
  image: "https://images.unsplash.com/photo-1583333001978-8c57d752ce5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9uZyUyMG1heGklMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D"
},
{
  id: 7,
  name: "Printed Cotton Dress",
  price: 899,
  category: "Women Dresses",
  image: "https://images.unsplash.com/photo-1760287364219-160c234ded00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJpbnRlZCUyMGNvdHRvbiUyMGRyZXNzfGVufDB8fDB8fHww"
},
{
  id: 8,
  name: "Western Bodycon Dress",
  price: 1599,
  category: "Women Dresses",
  image: "https://images.unsplash.com/photo-1567541597957-cc11577236ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlc3Rlcm4lMjBib2R5Y29uJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D"
},
{
  id: 9,
  name: "Sleeveless Evening Dress",
  price: 1999,
  category: "Women Dresses",
  image: "https://images.unsplash.com/photo-1704775989614-8435994e4e97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2xlZXZlbGVzcyUyMGV2ZW5pbmclMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D"
},
{
  id: 10,
  name: "A-Line Casual Dress",
  price: 1299,
  category: "Women Dresses",
  image: "https://plus.unsplash.com/premium_photo-1708276238428-4131c56a5487?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QS1saW5lJTIwY2FzdWFsJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D"
},
{
  id: 11,
  name: "Blue Denim Dress",
  price: 1499,
  category: "Women Dresses",
  image: "https://plus.unsplash.com/premium_photo-1661667194349-ae6993f9df05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZS0lMjBkZW5pbSUyMGRyZXNzfGVufDB8fDB8fHww"
},
{
  id: 12,
  name: "Printed Kurti Dress",
  price: 999,
  category: "Women Dresses",
  image: "https://images.unsplash.com/photo-1742800786544-e935375035e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJpbnRlZCUyMGt1cnRoaSUyMGRyZXNzfGVufDB8fDB8fHww"
},


  // Men Shirts
  {
    id: 13,
    category: "Men Shirts",
    name: "Casual Blue Shirt",
    price: 799,
    image: "https://plus.unsplash.com/premium_photo-1661319118136-1e2ca313cda3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FzdWFsJTIwYmx1ZSUyMHNoaXJ0fGVufDB8fDB8fHww",
  },
  {
    id: 14,
    category: "Men Shirts",
    name: "Formal White Shirt",
    price: 899,
    image: "https://plus.unsplash.com/premium_photo-1661329970679-2cbca4fca739?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9ybWFsJTIwd2hpdGUlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
  id: 15,
  name: "Yellow T-Shirt",
  price: 1199,
  category: "Men Shirts",
  image: "https://images.unsplash.com/photo-1611202645713-c2ecb5aeb365?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eWVsbG93JTIwdC0lMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
},
{
  id: 16,
  name: "Black Slim Fit Shirt",
  price: 1499,
  category: "Men Shirts",
  image: "https://images.unsplash.com/photo-1651132101299-0a18dfa25ccd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmxhY2slMjBTbGltJTIwRml0JTIwU2hpcnR8ZW58MHx8MHx8fDA%3D"
},
{
  id: 17,
  name: "White Cotton Shirt",
  price: 999,
  category: "Men Shirts",
  image: "https://images.unsplash.com/photo-1713881604560-085594ed2c3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFdoaXRlJTIwQ290dG9uJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D"
},
{
  id: 18,
  name: "Checked Casual Shirt",
  price: 899,
  category: "Men Shirts",
  image: "https://plus.unsplash.com/premium_photo-1661546585832-979cde5fddc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2hlY2tlZCUyMENhc3VhbCUyMFNoaXJ0fGVufDB8fDB8fHww"
},
{
  id: 19,
  name: "Red Printed Shirt",
  price: 1299,
  category: "Men Shirts",
  image: "https://media.istockphoto.com/id/182663585/photo/let-the-vacation-begin.webp?a=1&b=1&s=612x612&w=0&k=20&c=5ILDVuTC9LEEwqmz_7anxUYGMeK9m2oxPrd4pcxWprs="
},
{
  id: 20,
  name: "Green Linen Shirt",
  price: 1599,
  category: "Men Shirts",
  image: "https://images.unsplash.com/photo-1708531375354-484e4ac78453?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyZWVuJTIwbGluZW4lMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
},
{
  id: 21,
  name: "Denim Shirt",
  price: 1799,
  category: "Men Shirts",
  image: "https://images.unsplash.com/photo-1613752978317-afcfd1bba65a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVuaW0lMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
},
{
  id: 22,
  name: "Yellow Casual Shirt",
  price: 799,
  category: "Men Shirts",
  image: "https://images.unsplash.com/photo-1634136912882-61fd36144a3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwY2FzdWFsJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D"
},
{
  id: 23,
  name: "Purple Party Wear Shirt",
  price: 1699,
  category: "Men Shirts",
  image: "https://plus.unsplash.com/premium_photo-1727976411239-0983f5dad5cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFB1cnBsZSUyMFBhcnR5JTIwV2VhciUyMFNoaXJ0fGVufDB8fDB8fHww"
},
{
  id: 24,
  name: "Grey Striped Shirt",
  price: 1099,
  category: "Men Shirts",
  image: "https://plus.unsplash.com/premium_photo-1679440415228-b90bffd34fd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R3JleSUyMFN0cmlwZWQlMjBTaGlydHxlbnwwfHwwfHx8MA%3D%3D"
},


  // Cosmetics
  {
    id: 25,
    category: "Cosmetics",
    name: "Red Lipstick",
    price: 499,
    image: "https://images.unsplash.com/photo-1645961359170-c01fa306aa6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwbGlwc3RpY2t8ZW58MHx8MHx8fDA%3D",
  },
  {
  id: 26,
  name: "Maybelline Fit Me Foundation",
  price: 499,
  image: "https://media.istockphoto.com/id/1392510565/photo/bottle-of-skin-foundation-on-white-background-3d-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=4-2v7q8xCAbgGtgeZgUmpOGUPENO1A_2maVz4y8IMm8=",
  category: "Cosmetics",
},

{
  id: 27,
  name: "Lakme Eyeconic Kajal",
  price: 210,
  image: "https://media.istockphoto.com/id/1440884939/photo/young-woman-using-eye-drops-isolated-over-yellow-background-eye-dropper-or-eyes-drop-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=i-1-MbMmqc1KJ8P3Al9ix3wLLCUyhIh8nHZKR7RIQ2s=",
  category: "Cosmetics",
},

{
  id: 28,
  name: "Swiss Beauty Liquid Concealer",
  price: 189,
  image: "https://media.istockphoto.com/id/1316142499/photo/under-eye-concealer.webp?a=1&b=1&s=612x612&w=0&k=20&c=iddxm7ypWv-bpYwBx0FH3RIQj4Y0Pj7VIqNBPbxhSkw=",
  category: "Cosmetics",
},

{
  id: 29,
  name: "Faces Canada Lip Crayon",
  price: 349,
  image: "https://media.istockphoto.com/id/1472512535/photo/woman-putting-on-lipstick.webp?a=1&b=1&s=612x612&w=0&k=20&c=urhAizpZRVbWZlapK8UbBYdbOgO9DTJdOLfCgude4Pw=",
  category: "Cosmetics",
},

{
  id: 30,
  name: "Mamaearth Vitamin C Face Wash",
  price: 249,
  image: "https://media.istockphoto.com/id/1490604383/photo/lime-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=GY68KpPzlXCqn7CstRRU2bSUCf5XPRyIbE2RgOsfqvQ=",
  category: "Cosmetics",
},

{
  id: 31,
  name: "Nykaa Nail Enamel",
  price: 199,
  image: "https://media.istockphoto.com/id/1308051816/photo/pretty-happy-young-woman-applying-pink-color-nail-polish-against-a-gray-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=rPB7xx9NmOdeJlTKgnL8UGV_4Zk5EYfJoXGwY2pgUe0=",
  category: "Cosmetics",
},


  // Mobiles
  {
    id: 32,
    category: "Mobiles",
    name: "Samsung Galaxy A15",
    price: 14999,
    image: "https://images.unsplash.com/photo-1709744722656-9b850470293f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNhbXN1bmclMjBHYWxheHklMjBBMTV8ZW58MHx8MHx8fDA%3D",
  },
  {
  id: 33,
  name: "Oppo",
  price: 17999,
  image: "https://images.unsplash.com/photo-1699796990081-f8eade0b84d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T3Bwb3xlbnwwfHwwfHx8MA%3D%3D",
  category: "Mobiles",
},

{
  id: 34,
  name: "iPhone 13",
  price: 52999,
  image: "https://images.unsplash.com/photo-1726574686436-5ef90358e032?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTN8ZW58MHx8MHx8fDA%3D",
  category: "Mobiles",
},

{
  id: 35,
  name: "Redmi 12 5G",
  price: 34999,
  image: "https://images.unsplash.com/photo-1635434651542-bcd747240352?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVkbWl8ZW58MHx8MHx8fDA%3D",
  category: "Mobiles",
},

{
  id: 36,
  name: "Realme Narzo 70 Pro",
  price: 19999,
  image: "https://images.unsplash.com/photo-1695499405433-63b7d42e7326?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbG1lfGVufDB8fDB8fHww",
  category: "Mobiles",
},

{
  id: 37,
  name: "OnePlus Nord CE 3 Lite",
  price: 19999,
  image: "https://images.unsplash.com/photo-1527747471697-174c755627dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9uZXBsdXN8ZW58MHx8MHx8fDA%3D",
  category: "Mobiles",
},

{
  id: 38,
  name: "Vivo T2 5G",
  price: 16999,
  image: "https://images.unsplash.com/photo-1746366782635-aabca81d2719?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dml2b3xlbnwwfHwwfHx8MA%3D%3D",
  category: "Mobiles",
},



  // Laptops
  {
    id: 39,
    category: "Laptops",
    name: "HP Pavilion",
    price: 56999,
    image: "https://images.unsplash.com/photo-1618410320928-25228d811631?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SFAlMjBQYXZpbGlvbiUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
 {
  id: 40,
  name: "HP Victus Gaming Laptop",
  price: 72999,
  image: "https://plus.unsplash.com/premium_photo-1681302477386-308736d98396?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SFAlMjBWaWN0dXMlMjBHYW1pbmclMjBMYXB0b3B8ZW58MHx8MHx8fDA%3D",
  category: "Laptops"
 },
 {
  id: 41,
  name: "Dell XPS 13 Plus",
  price: 129999,
  image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsbCUyMExhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
  category: "Laptops"
 },
 {
  id: 42,
  name: "Lenovo ThinkPad X1 Carbon",
  price: 159999,
  image: "https://plus.unsplash.com/premium_photo-1681302477386-308736d98396?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVub3ZvJTIwTGFwdG9wfGVufDB8fDB8fHww",
  category: "Laptops"
 },
 {
  id: 43,
  name: "ASUS ROG Strix G15",
  price: 139990,
  image: "https://images.unsplash.com/photo-1693206816374-c04522205b21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QVNVUyUyMFJPRyUyMFN0cml4JTIwRzE1JTIwbGFwdG9wfGVufDB8fDB8fHww",
  category: "Laptops"
 },
 {
  id: 44,
  name: "Acer Swift Go OLED",
  price: 74990,
  image: "https://images.unsplash.com/photo-1693206578613-144dd540b892?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWNlciUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
  category: "Laptops"
 },
 {
  id: 45,
  name: "Samsung Galaxy Book 3 Pro",
  price: 149999,
  image: "https://plus.unsplash.com/premium_photo-1681702178555-ab53d9f8d912?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Ftc3VuZyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
  category: "Laptops"
 },
 {
  id: 46,
  name: "Microsoft Surface Laptop 5",
  price: 124999,
  image: "https://images.unsplash.com/photo-1587613842560-0816bd27a096?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1pY3Jvc29mdCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
  category: "Laptops"
 },


 // Kitchen 
{
  id: 47,
  name: "Prestige Electric Kettle 1.8L",
  price: 1499,
  image: "https://media.istockphoto.com/id/1559699377/photo/plugged-in-kettle.webp?a=1&b=1&s=612x612&w=0&k=20&c=qdxriozwFQ4odvlBy9eq27TiZp8flhhvL_6xbnPVs-w=",
  category: "Kitchen"
},
{
  id: 48,
  name: "Butterfly Mixer Grinder 750W",
  price: 3499,
  image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWl4ZXIlMjBHcmluZGVyfGVufDB8fDB8fHww",
  category: "Kitchen"
},
{
  id: 49,
  name: "Hawkins Stainless Steel Pressure Cooker 5L",
  price: 2599,
  image: "https://media.istockphoto.com/id/153696914/photo/pressure-cooker-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=hwBbHATOMZNQdmf4pvHstw_03TTIT6X23xp-ybjaOBw=",
  category: "Kitchen"
},
{
  id: 50,
  name: "Milton Thermosteel Flask 1L",
  price: 799,
  image: "https://media.istockphoto.com/id/929349950/photo/bottle.webp?a=1&b=1&s=612x612&w=0&k=20&c=cTwulDkBvhrmTxK-P7P57nBCXRYSgpHdXTVsrp8KhtE=",
  category: "Kitchen"
},
{
  id: 51,
  name: "Pigeon Non-Stick Cookware Set (3 pcs)",
  price: 1999,
  image: "https://images.unsplash.com/photo-1588279102558-dabc7b32d9b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGlnZW9uJTIwTm9uLVN0aWNrJTIwQ29va3dhcmUlMjBTZXQlMjAoMyUyMHBjcyl8ZW58MHx8MHx8fDA%3D",
  category: "Kitchen"
},


// 5 More Jewellery Items
{
  id: 52,
  name: "Gold-Plated Kundan Necklace Set",
  price: 1899,
  image: "https://images.unsplash.com/photo-1727333010975-bad2be140373?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R29sZC1QbGF0ZWQlMjBLdW5kYW4lMjBOZWNrbGFjZSUyMFNldHxlbnwwfHwwfHx8MA%3D%3D",
  category: "Jewellery"
},
{
  id: 53,
  name: "Silver Oxidised Jhumka Earrings",
  price: 499,
  image: "https://plus.unsplash.com/premium_photo-1680181724947-75f0956f1469?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2lsdmVyJTIwT3hpZGlzZWQlMjBKaHVta2ElMjBFYXJyaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
  category: "Jewellery"
},
{
  id: 54,
  name: "Rose Gold Heart Pendant",
  price: 799,
  image: "https://images.unsplash.com/photo-1645313057147-9acf975e0ce9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFJvc2UlMjBHb2xkJTIwSGVhcnQlMjBQZW5kYW50fGVufDB8fDB8fHww",
  category: "Jewellery"
},
{
  id: 55,
  name: "Traditional Temple Design Bangles",
  price: 1299,
  image: "https://images.unsplash.com/photo-1758995119744-6454f091303f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHJhZGl0aW9uYWwlMjBUZW1wbGUlMjBEZXNpZ24lMjBCYW5nbGVzfGVufDB8fDB8fHww",
  category: "Jewellery"
},
{
  id: 56,
  name: "Pearl Stud Earrings",
  price: 299,
  image: "https://plus.unsplash.com/premium_photo-1739548338201-4c337ce176d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVhcmwlMjBTdHVkJTIwRWFycmluZ3N8ZW58MHx8MHx8fDA%3D",
  category: "Jewellery"
}
];
