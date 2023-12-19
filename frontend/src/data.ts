import { Collection } from "./app/models/collection";
import { Glasses } from "./app/models/glasses";
import { Details } from "./app/models/productDetails";

export const sampleGlasses: Glasses[] = [
  {
    productImg: '../assets/glasses/enshi-blue.jpg',
    productName: 'Enshi',
    productNumber:100152000 ,
    material: 'Acetat',
    shape: 'Round',
    color: ['Black', 'Blue', 'Blue Waters', 'Sky Gray Mat', 'Ice Tea Mat'] ,
    frameSize: ['Small', 'Medium', 'Large', 'Extra Large' ] ,
    gender: 'Men',
    eyeWearType: 'Glasses',
    collectionName: 'Silk Collection',
    polarized: false
  },
  {productImg: '../assets/glasses/magnus-skyGray.jpg',
    productName: 'Magnus',
    productNumber:100162000 ,
    material: 'Metal',
    shape: 'Rectangular',
    color: ['Rose-Gold', 'Copper Lilac', 'Shiny Graphgite', 'Black'] ,
    frameSize: ['Small', 'Medium', 'Large'] ,
    gender: 'Women',
    eyeWearType: 'Glasses',
    collectionName: 'Silk Collection',
    polarized: true
  },
  {
    productImg: '../assets/glasses/minho-goldAngel.jpg',
    productName: 'Minho',
    productNumber:100172000 ,
    material: 'metal',
    shape: 'Round',
    color: ['Black', 'Gold Angel', 'Grapgite'] ,
    frameSize: ['Medium', 'Large'] ,
    gender: 'Men',
    eyeWearType: 'Glasses',
    collectionName: 'Classic Collection',
    polarized: false
  },
  {
    productImg: '../assets/glasses/nori-rosegold-angle.jpg',
    productName: 'Nori',
    productNumber:100182000 ,
    material: 'Metal',
    shape: 'Aviator',
    color: ['Black', 'Blue', 'Rose Gold', 'Aubergine'] ,
    frameSize: ['Small', 'Medium', 'Large'] ,
    gender: 'Men',
    eyeWearType: 'Glasses',
    collectionName: 'Silk Collection',
    polarized: true
  },
  {
    productImg: '../assets/glasses/rio.jpg',
    productName: 'Rio',
    productNumber:100192000 ,
    material: 'Hybrid',
    shape: 'Cat Eye',
    color: ['Teak Magma', 'Blue', 'Rose Gold', 'Black Mat'] ,
    frameSize: ['Small', 'Medium', 'Large', 'Extra Large' ] ,
    gender: 'Unisex',
    eyeWearType: 'Glasses',
    collectionName: 'Silk Collection',
    polarized: false
  },
  {
    productImg: '../assets/glasses/juna.jpg',
    productName: 'Juna',
    productNumber:100202000 ,
    material: 'Hybrid',
    shape: 'Cat Eye',
    color: ['Teak Magma', 'Blue', 'Rose Gold'] ,
    frameSize: ['Small', 'Medium', 'Large', 'Extra Large' ] ,
    gender: 'Women',
    eyeWearType: 'Glasses',
    collectionName: 'Silk Collection',
    polarized: true
  },
  {
    productImg: '../assets/glasses/raidon.jpg',
    productName: 'Raidon',
    productNumber:100212000 ,
    material: 'Acetat',
    shape: 'Rectangular',
    color: ['Crystal Clear', 'Brown DriftWood', 'Blue Waters', 'Ice Tea Mat'] ,
    frameSize: ['Small', 'Medium', 'Large', 'Extra Large' ] ,
    gender: 'Unisex',
    eyeWearType: 'Glasses',
    collectionName: 'Classic Collection',
    polarized: false
  },
  {
    productImg: '../assets/glasses/evelyn.jpg',
    productName: 'Evelyn',
    productNumber:100222000 ,
    material: 'Metal',
    shape: 'Cat Eye',
    color: ['Bronze', 'Blue Shiny', 'Sky Gray Mat', 'Ice Tea Mat'] ,
    frameSize: ['Small', 'Medium', 'Large', 'Extra Large' ] ,
    gender: 'Men',
    eyeWearType: 'Glasses',
    collectionName: 'Classic Collection',
    polarized: false
  },
  {
    productImg: '../assets/glasses/glen.jpg',
    productName: 'Glen',
    productNumber:100232000 ,
    material: 'Acetat',
    shape: 'Round',
    color: ['Black Mat', 'Gray Smoke', 'Gray', 'Sky Gray Mat'] ,
    frameSize: ['Large', 'Extra Large' ] ,
    gender: 'Unisex',
    eyeWearType: 'Glasses',
    collectionName: 'Classic Collection',
    polarized: true
  },
  {
    productImg: '../assets/glasses/flx-01.jpg',
    productName: 'FLX_01',
    productNumber:100242000 ,
    material: 'Metal',
    shape: 'Round',
    color: ['Row Night', 'Medium Night', 'Blue Waters', 'Sky Gray Mat', 'Ice Tea Mat'] ,
    frameSize: ['Small', 'Medium', 'Large', 'Extra Large' ] ,
    gender: 'Women',
    eyeWearType: 'Glasses',
    collectionName: 'FLEXARBON',
    polarized: false
  },
  {
    productImg: '../assets/glasses/flx-02.jpg',
    productName: 'FLX_02',
    productNumber:100252000 ,
    material: 'Metal',
    shape: 'Round',
    color: ['Row Night', 'Medium Night', 'Ice Tea Mat'] ,
    frameSize: ['Small', 'Medium', 'Extra Large' ] ,
    gender: 'Men',
    eyeWearType: 'Glasses',
    collectionName: 'FLEXARBON',
    polarized: true
  },
  {
    productImg: '../assets/sunglasses/flx-03.jpg',
    productName: 'FLX_S02',
    productNumber:100262000 ,
    material: 'Metal',
    shape: 'Cat Eye',
    color: [ 'Medium Night', 'Black Nylon'] ,
    frameSize: [ 'Medium', 'Larg','Extra Large' ] ,
    gender: 'Unisex',
    eyeWearType: 'Sunglasses',
    collectionName: 'FLEXARBON',
    polarized: true
  },
  {
    productImg: '../assets/sunglasses/FLX-S02.jpg',
    productName: 'FLX_S02',
    productNumber:100272000 ,
    material: 'Metal',
    shape: 'Cat Eye',
    color: [ 'Medium Night', 'Black Nylon', 'Night Row'] ,
    frameSize: [ 'Medium', 'Larg','Extra Large' ] ,
    gender: 'Women',
    eyeWearType: 'Sunglasses',
    collectionName: 'FLEXARBON',
    polarized: true
  },
  {
    productImg: '../assets/sunglasses/FLX-S02.jpg',
    productName: 'FLX_S02',
    productNumber:100282000 ,
    material: 'Metal',
    shape: 'Cat Eye',
    color: [ 'Medium Night', 'Black Nylon', 'Night Row'] ,
    frameSize: [ 'Medium', 'Larg','Extra Large' ] ,
    gender: 'Women',
    eyeWearType: 'Sunglasses',
    collectionName: 'FLEXARBON',
    polarized: true
  },
  {
    productImg: '../assets/sunglasses/FLX-S02.jpg',
    productName: 'FLX_S02',
    productNumber:100292000 ,
    material: 'Metal',
    shape: 'Cat Eye',
    color: [ 'Medium Night', 'Black Nylon', 'Night Row'] ,
    frameSize: [ 'Medium', 'Larg','Extra Large' ] ,
    gender: 'Women',
    eyeWearType: 'Sunglasses',
    collectionName: 'FLEXARBON',
    polarized: true
  },
  {
    productImg: '../assets/sunglasses/mib14.jpg',
    productName: 'MIB 14',
    productNumber:100302000 ,
    material: 'Metal',
    shape: 'Cat Eye',
    color: [ 'Medium Night', 'Black Nylon', 'Night Row'] ,
    frameSize: [ 'Medium', 'Larg','Extra Large' ] ,
    gender: 'Unisex',
    eyeWearType: 'Sunglasses',
    collectionName: 'Mercedes-Bens Collection',
    polarized: true
  },
  {
    productImg: '../assets/sunglasses/mib15.jpg',
    productName: 'MIB 15',
    productNumber:100312000 ,
    material: 'Metal',
    shape: 'Cat Eye',
    color: [ 'Medium Night', 'Black Nylon', 'Night Row'] ,
    frameSize: [ 'Medium', 'Larg','Extra Large' ] ,
    gender: 'Men',
    eyeWearType: 'Sunglasses',
    collectionName: 'Mercedes-Bens Collection',
    polarized: true
  },
  {
    productImg: '../assets/sunglasses/mib16.jpg',
    productName: 'MIB 16',
    productNumber:100322000 ,
    material: 'Metal',
    shape: 'Cat Eye',
    color: [ 'Medium Night', 'Black Nylon', 'Night Row'] ,
    frameSize: [ 'Medium', 'Larg','Extra Large' ] ,
    gender: 'Women',
    eyeWearType: 'Sunglasses',
    collectionName: 'Mercedes-Bens Collection',
    polarized: true
  },
  {
    productImg: '../assets/sunglasses/mib04.jpg',
    productName: 'MIB 04',
    productNumber:100332000 ,
    material: 'Acetat',
    shape: 'Rectangular',
    color: [ 'Medium Night', 'Black Nylon', 'Night Row'] ,
    frameSize: [ 'Medium', 'Larg','Extra Large' ] ,
    gender: 'Men',
    eyeWearType: 'Sunglasses',
    collectionName: 'Mercedes-Bens Collection',
    polarized: true
  },
]

export const sampleDetails:Details[] = [
  {
    productNumber:100152000 ,
    material: 'Acetat',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100162000 ,
    material: 'Metal',
    size: 'Small' ,
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100172000 ,
    material: 'metal',
    size: 'Large',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100182000 ,
    material: 'Metal',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100192000 ,
    material: 'Hybrid',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100202000 ,
    material: 'Hybrid',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100212000 ,
    material: 'Acetat',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100222000 ,
    material: 'Metal',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100232000 ,
    material: 'Acetat',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100242000 ,
    material: 'Metal',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100252000 ,
    material: 'Metal',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100262000 ,
    material: 'Metal',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100272000 ,
    material: 'Metal',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100282000 ,
    material: 'Metal',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100292000 ,
    material: 'Metal',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100302000 ,
    material: 'Metal',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100312000 ,
    material: 'Metal',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100322000 ,
    material: 'Metal',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
  {
    productNumber:100332000 ,
    material: 'Acetat',
    size: 'Medium',
    lensDestance:16,
    lensWidth: 58,
    lensHeight: 38
  },
]

export const sampleCollection:Collection[] = [
  {
    name:'Classic Collection' ,
    ImgUrl: '../assets/collections/classic-collection.jpg',
    path: '/collection/classic'
  },
  {
    name:'FLEXARBON',
    ImgUrl: '../assets/collections/flxarbon-collection.jpg',
    path: '/collection/flex'
  },
  {
    name:'Silk Collection',
    ImgUrl: '../assets/collections/silk-collection.jpg',
    path: '/collection/silk'
  },
  {
    name:'Mercedes-Benz Collection',
    ImgUrl: '../assets/collections/mercedes-benz-collection.jpg',
    path: '/collection/mercedes'
  }
]
