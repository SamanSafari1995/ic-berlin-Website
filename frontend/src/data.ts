import { Collection } from "./app/models/collection";
import { Glasses } from "./app/models/glasses";
import { Details } from "./app/models/productDetails";

export const sampleGlasses: Glasses[] = [
  {
    productImg1: '../assets/glasses/elis-1.jpg',
    productImg2: '../assets/glasses/elis-2.jpg',
    productName: 'Enshi',
    productNumber:100152000 ,
    material: 'Acetat',
    shape: 'Round',
    color: ['Black ', 'Blue ', 'Blue Waters ', 'Sky Gray Mat ', 'Ice Tea Mat'] ,
    frameSize: 'Small',
    gender: 'Men',
    eyeWearType: 'Glasses',
    collectionName: 'Silk Collection',
    polarized: false
  },
  {
    productImg1: '../assets/glasses/amg-1.jpg',
    productImg2: '../assets/glasses/amg-2.jpg',
    productName: 'Magnus',
    productNumber:100162000 ,
    material: 'Metal',
    shape: 'Rectangular',
    color: ['Rose-Gold', 'Copper Lilac', 'Shiny Graphgite', 'Black'] ,
    frameSize: 'Medium',
    gender: 'Women',
    eyeWearType: 'Glasses',
    collectionName: 'Silk Collection',
    polarized: true
  },
  {
    productImg1: '../assets/glasses/minho-1.jpg',
    productImg2: '../assets/glasses/minho-2.jpg',
    productName: 'Minho',
    productNumber:100172000 ,
    material: 'metal',
    shape: 'Round',
    color: ['Black', 'Gold Angel', 'Grapgite'] ,
    frameSize: 'large',
    gender: 'Men',
    eyeWearType: 'Glasses',
    collectionName: 'Classic Collection',
    polarized: false
  },
  {
    productImg1: '../assets/glasses/nori-1.jpg',
    productImg2: '../assets/glasses/nori-2.jpg',
    productName: 'Nori',
    productNumber:100182000 ,
    material: 'Metal',
    shape: 'Cat Eye',
    color: ['Black', 'Blue', 'Rose Gold', 'Aubergine'] ,
    frameSize: 'Medium',
    gender: 'Men',
    eyeWearType: 'Glasses',
    collectionName: 'Silk Collection',
    polarized: true
  },
  {
    productImg1: '../assets/glasses/rio-2.jpg',
    productImg2: '../assets/glasses/rio-1.jpg',
    productName: 'Rio',
    productNumber:100192000 ,
    material: 'Hybrid',
    shape: 'Cat Eye',
    color: ['Teak Magma', 'Blue', 'Rose Gold', 'Black Mat'] ,
    frameSize: 'Medium',
    gender: 'Men',
    eyeWearType: 'Glasses',
    collectionName: 'Silk Collection',
    polarized: false
  },
  {
    productImg1: '../assets/glasses/juna-2.jpg',
    productImg2: '../assets/glasses/juna-1.jpg',
    productName: 'Juna',
    productNumber:100202000 ,
    material: 'Hybrid',
    shape: 'Cat Eye',
    color: ['Teak Magma', 'Blue', 'Rose Gold'] ,
    frameSize: 'Small',
    gender: 'Women',
    eyeWearType: 'Glasses',
    collectionName: 'Silk Collection',
    polarized: true
  },
  {
    productImg1: '../assets/glasses/radion-2.jpg',
    productImg2: '../assets/glasses/radion-1.jpg',
    productName: 'Radion',
    productNumber:100212000 ,
    material: 'Acetat',
    shape: 'Rectangular',
    color: ['Crystal Clear', 'Brown DriftWood', 'Blue Waters', 'Ice Tea Mat'] ,
    frameSize: 'Small',
    gender: 'Women',
    eyeWearType: 'Glasses',
    collectionName: 'Classic Collection',
    polarized: false
  },
  {
    productImg1: '../assets/glasses/sora-1.jpg',
    productImg2: '../assets/glasses/sora-2.jpg',
    productName: 'Sora',
    productNumber:100222000 ,
    material: 'Acetat',
    shape: 'Cat Eye',
    color: ['Bronze', 'Blue Shiny', 'Sky Gray Mat', 'Ice Tea Mat'] ,
    frameSize: 'Medium',
    gender: 'Men',
    eyeWearType: 'Glasses',
    collectionName: 'Classic Collection',
    polarized: false
  },
  {
    productImg1: '../assets/glasses/glen-2.jpg',
    productImg2: '../assets/glasses/glen-1.jpg',
    productName: 'Glen',
    productNumber:100232000 ,
    material: 'Acetat',
    shape: 'Round',
    color: ['Black Mat', 'Gray Smoke', 'Gray', 'Sky Gray Mat'] ,
    frameSize: 'Extra Large',
    gender: 'Women',
    eyeWearType: 'Glasses',
    collectionName: 'Classic Collection',
    polarized: true
  },
  {
    productImg1: '../assets/glasses/FLX-01.jpg',
    productImg2: '../assets/glasses/FLX-2.jpg',
    productName: 'FLX_01',
    productNumber:100242000 ,
    material: 'Metal',
    shape: 'Round',
    color: ['Row Night', 'Medium Night', 'Blue Waters', 'Sky Gray Mat', 'Ice Tea Mat'] ,
    frameSize: 'Medium',
    gender: 'Women',
    eyeWearType: 'Glasses',
    collectionName: 'FLEXARBON',
    polarized: false
  },
  {
    productImg1: '../assets/glasses/FLX-02.jpg',
    productImg2: '../assets/glasses/FLX-2.jpg',
    productName: 'FLX_02',
    productNumber:100252000 ,
    material: 'Metal',
    shape: 'Round',
    color: ['Row Night', 'Medium Night', 'Ice Tea Mat'] ,
    frameSize: 'Small',
    gender: 'Men',
    eyeWearType: 'Glasses',
    collectionName: 'FLEXARBON',
    polarized: true
  },
  {
    productImg1: '../assets/sunglasses/flx-2.jpg',
    productImg2: '../assets/sunglasses/flx-1.jpg',
    productName: 'FLX_S02',
    productNumber:100262000 ,
    material: 'Metal',
    shape: 'Cat Eye',
    color: [ 'Medium Night', 'Black Nylon'] ,
    frameSize: 'Large',
    gender: 'Men',
    eyeWearType: 'Sunglasses',
    collectionName: 'FLEXARBON',
    polarized: true
  },
  {
    productImg1: '../assets/sunglasses/nina-1.jpg',
    productImg2: '../assets/sunglasses/nina-2.jpg',
    productName: 'Nina',
    productNumber:100262000 ,
    material: 'Acetat',
    shape: 'Cat Eye',
    color: [ 'Medium Night', 'Black Nylon'] ,
    frameSize: 'Large',
    gender: 'Women',
    eyeWearType: 'Sunglasses',
    collectionName: 'Classic Collection',
    polarized: true
  },
  {
    productImg1: '../assets/sunglasses/FLX-S02.jpg',
    productImg2: '../assets/sunglasses/FLX-S01.jpg',
    productName: 'FLX_S02',
    productNumber:100272000 ,
    material: 'Metal',
    shape: 'Cat Eye',
    color: [ 'Medium Night', 'Black Nylon', 'Night Row'] ,
    frameSize: 'Extra Large',
    gender: 'Women',
    eyeWearType: 'Sunglasses',
    collectionName: 'FLEXARBON',
    polarized: true
  },
  {
    productImg1: '../assets/sunglasses/FLX-S4-2.jpg',
    productImg2: '../assets/sunglasses/FLX-S4-1.jpg',
    productName: 'FLX_S4',
    productNumber:100282000 ,
    material: 'Hybrid',
    shape: 'Cat Eye',
    color: [ 'Medium Night', 'Black Nylon', 'Night Row'] ,
    frameSize: 'Small',
    gender: 'Men',
    eyeWearType: 'Sunglasses',
    collectionName: 'FLEXARBON',
    polarized: true
  },
  {
    productImg1: '../assets/sunglasses/FLX-S5-2.jpg',
    productImg2: '../assets/sunglasses/FLX-S5-1.jpg',
    productName: 'FLX_S5',
    productNumber:100292000 ,
    material: 'Metal',
    shape: 'Cat Eye',
    color: [ 'Medium Night', 'Black Nylon', 'Night Row'] ,
    frameSize: 'Medium',
    gender: 'Women',
    eyeWearType: 'Sunglasses',
    collectionName: 'FLEXARBON',
    polarized: true
  },
  {
    productImg1: '../assets/sunglasses/mib14-01.jpg',
    productImg2: '../assets/sunglasses/mib14-02.jpg',
    productName: 'MIB 14',
    productNumber:100302000 ,
    material: 'Metal',
    shape: 'Rectangular',
    color: [ 'Medium Night', 'Black Nylon', 'Night Row'] ,
    frameSize: 'medium',
    gender: 'Men',
    eyeWearType: 'Sunglasses',
    collectionName: 'Mercedes-Bens Collection',
    polarized: true
  },
  {
    productImg1: '../assets/sunglasses/mib15-01.jpg',
    productImg2: '../assets/sunglasses/mib15-02.jpg',
    productName: 'MIB 15',
    productNumber:100312000 ,
    material: 'Metal',
    shape: 'Cat Eye',
    color: [ 'Medium Night', 'Black Nylon', 'Night Row'] ,
    frameSize: 'Small',
    gender: 'Men',
    eyeWearType: 'Sunglasses',
    collectionName: 'Mercedes-Bens Collection',
    polarized: true
  },
  {
    productImg1: '../assets/sunglasses/mib-12-02.jpg',
    productImg2: '../assets/sunglasses/mib-12-01.jpg',
    productName: 'MIB 12',
    productNumber:100322000 ,
    material: 'Metal',
    shape: 'Rectangular',
    color: [ 'Medium Night', 'Black Nylon', 'Night Row'] ,
    frameSize: 'Large',
    gender: 'Women',
    eyeWearType: 'glasses',
    collectionName: 'Mercedes-Bens Collection',
    polarized: true
  },
  {
    productImg1: '../assets/sunglasses/mib-04-02.jpg',
    productImg2: '../assets/sunglasses/mib-04-01.jpg',
    productName: 'MIB 04',
    productNumber:100332000 ,
    material: 'Acetat',
    shape: 'Rectangular',
    color: [ 'Medium Night', 'Black Nylon', 'Night Row'] ,
    frameSize: 'Extra Large',
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
