// import React, { useState, useMemo, useContext, createContext, useEffect, useRef, useCallback } from "react";

// /* =========================================================
//    DESIGN TOKENS
//    Primary: Deep Teal #1A3C34
//    Accent:  Marigold #C6A15B
//    Surface: #F5F5F5 / #FFFFFF
//    Text:    #212121
//    ========================================================= */
// const SLIDES = [
//   {
//     tag: "PREMIUM QUALITY",
//     title: "Your Stitch",
//     desc: "Crafted, customized, and effortless. Made your way.",
//     ctaText: "Shop Unstitched",
//     ctaCategory: "unstitched",
//     imgSrc: "https://zellbury.com/cdn/shop/collections/Women_UNS_eaa27ee4-9ee1-46a6-93f7-61c8877b7905.jpg?v=1754372222&width=832", // Replace with actual asset path
//   },
//   {
//     tag: "LUXE COLLECTION",
//     title: "Designed to Stand Out",
//     desc: "Premium craftsmanship, and timeless festive looks.",
//     ctaText: "Shop Luxury",
//     ctaCategory: "luxury",
//     imgSrc: "https://zellbury.com/cdn/shop/collections/Men_Outerwear_1_76deaf62-3447-450a-9421-0c60eddf63cb.jpg?v=1732365904&width=832",
//   },
//   {
//     tag: "TRUSTED BY MODERN MEN",
//     title: "Built for Everyday Style",
//     desc: "Smart fits and effortless essentials for work, weekends, and everything in between.",
//     ctaText: "SHOP MEN →",
//     ctaCategory: "men",
//     imgSrc: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1400&q=85",
//   },
//   {
//     tag: "BIG SMILES",
//     title: "Bright Looks",
//     desc: "Adorable, durable outfits designed for every little adventure.",
//     ctaText: "Shop Kids",
//     ctaCategory: "kids",
//     imgSrc: "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?w=1400&q=85",
//   }
// ];

// const PRODUCTS = [
//   {
//     id: "wk-001",
//     name: "Peach Embroidered Lawn Kurta",
//     category: "women",
//     price: 4499,
//     salePrice: 3299,
//     isNew: true,
//     rating: 4.6,
//     reviews: 128,
//     colors: ["Peach", "Mint", "Ivory"],
//     colorImages: {
//       Peach: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
//       Mint: "https://images.unsplash.com/photo-1594938298603-c8148c4b4b5e?w=600&q=80",
//       Ivory: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80",
//     },
//     sizes: ["S", "M", "L", "XL"],
//     fabric: "Lawn Cotton",
//     description: "A breezy lawn kurta with delicate floral embroidery along the neckline and hem. Perfect for warm-weather wear, work, or casual outings.",
//     care: "Hand wash separately in cold water. Do not bleach. Iron on low heat.",
//     images: [
//       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
//       "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
//     ],
//   },
//   {
//     id: "wk-002",
//     name: "Teal Threadwork Festive Kurta",
//     category: "women",
//     price: 7499,
//     salePrice: null,
//     isNew: false,
//     rating: 4.8,
//     reviews: 92,
//     colors: ["Teal", "Maroon"],
//     colorImages: {
//       Teal: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80",
//       Maroon: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=600&q=80",
//     },
//     sizes: ["S", "M", "L"],
//     fabric: "Chiffon",
//     description: "Rich threadwork detailing on flowing chiffon, designed for festive occasions and evening gatherings. Lined for comfort.",
//     care: "Dry clean only.",
//     images: [
//       "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80",
//       "https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=600&q=80",
//     ],
//   },
//   {
//     id: "wk-003",
//     name: "Ivory Printed Cotton Kurta",
//     category: "women",
//     price: 2999,
//     salePrice: 2499,
//     isNew: false,
//     rating: 4.3,
//     reviews: 64,
//     colors: ["Ivory", "Sky Blue"],
//     colorImages: {
//       Ivory: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80",
//       "Sky Blue": "https://images.unsplash.com/photo-1594938298603-c8148c4b4b5e?w=600&q=80",
//     },
//     sizes: ["XS", "S", "M", "L", "XL"],
//     fabric: "Cotton",
//     description: "An everyday block-printed cotton kurta with a relaxed fit. Breathable, low-maintenance, and easy to style.",
//     care: "Machine washable, gentle cycle.",
//     images: [
//       "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80",
//       "https://images.unsplash.com/photo-1594938298603-c8148c4b4b5e?w=600&q=80",
//     ],
//   },
//   {
//     id: "mk-001",
//     name: "Charcoal Slim-Fit Kurta",
//     category: "men",
//     price: 3799,
//     salePrice: null,
//     isNew: true,
//     rating: 4.5,
//     reviews: 47,
//     colors: ["Charcoal", "Navy"],
//     colorImages: {
//       Charcoal: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
//       Navy: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
//     },
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     fabric: "Cambric",
//     description: "A modern slim-fit kurta with a mandarin collar, suitable for both office wear and casual Fridays.",
//     care: "Machine wash cold, hang dry.",
//     images: [
//       "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
//     ],
//   },
//   {
//     id: "mk-002",
//     name: "White Eid Edition Kurta",
//     category: "men",
//     price: 4999,
//     salePrice: 3999,
//     isNew: true,
//     rating: 4.9,
//     reviews: 210,
//     colors: ["White", "Cream"],
//     colorImages: {
//       White: "https://images.unsplash.com/photo-1598808503246-2ffbfaece5e6?w=600&q=80",
//       Cream: "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600&q=80",
//     },
//     sizes: ["M", "L", "XL", "XXL"],
//     fabric: "Karandi",
//     description: "Crisp white kurta with subtle self-stripe texture, tailored for a sharp silhouette. A staple for Eid and festive days.",
//     care: "Dry clean recommended for first wash.",
//     images: [
//       "https://images.unsplash.com/photo-1598808503246-2ffbfaece5e6?w=600&q=80",
//       "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600&q=80",
//     ],
//   },
//   {
//     id: "mk-003",
//     name: "Olive Green Casual Kurta",
//     category: "men",
//     price: 2899,
//     salePrice: null,
//     isNew: false,
//     rating: 4.1,
//     reviews: 33,
//     colors: ["Olive", "Khaki"],
//     colorImages: {
//       Olive: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80",
//       Khaki: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
//     },
//     sizes: ["S", "M", "L", "XL"],
//     fabric: "Linen Blend",
//     description: "A relaxed-fit casual kurta in a versatile olive tone. Light enough for daily wear, sturdy enough to last.",
//     care: "Machine wash cold, iron medium heat.",
//     images: [
//       "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80",
//       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
//     ],
//   },
//   {
//     id: "wk-004",
//     name: "Maroon Velvet Winter Kurta",
//     category: "women",
//     price: 8999,
//     salePrice: 6999,
//     isNew: false,
//     rating: 4.7,
//     reviews: 58,
//     colors: ["Maroon", "Bottle Green"],
//     colorImages: {
//       Maroon: "https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?w=600&q=80",
//       "Bottle Green": "https://images.unsplash.com/photo-1609206988940-98de2bd6e75a?w=600&q=80",
//     },
//     sizes: ["S", "M", "L", "XL"],
//     fabric: "Velvet",
//     description: "Luxurious velvet kurta with gold-tone embellishments, designed for winter weddings and evening events.",
//     care: "Dry clean only. Store on a padded hanger.",
//     images: [
//       "https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?w=600&q=80",
//       "https://images.unsplash.com/photo-1609206988940-98de2bd6e75a?w=600&q=80",
//     ],
//   },
//   {
//     id: "mk-004",
//     name: "Sky Blue Embroidered Kurta",
//     category: "men",
//     price: 4299,
//     salePrice: null,
//     isNew: false,
//     rating: 4.4,
//     reviews: 21,
//     colors: ["Sky Blue"],
//     colorImages: {
//       "Sky Blue": "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&q=80",
//     },
//     sizes: ["M", "L", "XL"],
//     fabric: "Lawn Cotton",
//     description: "Subtle collar embroidery on soft lawn cotton, designed for warm-weather comfort with a refined finish.",
//     care: "Hand wash, do not wring.",
//     images: [
//       "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&q=80",
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
//     ],
//   },
//   // WOMEN PRODUCTS

// {
//   id: "wk-005",
//   name: "Black Luxury Embroidered Kurta",
//   category: "women",
//   price: 6999,
//   salePrice: 5999,
//   isNew: true,
//   rating: 4.8,
//   reviews: 87,
//   colors: ["Black", "Gold"],
//   sizes: ["S","M","L","XL"],
//   fabric: "Silk Blend",
//   description: "Premium embroidered kurta for festive occasions.",
//   care: "Dry clean only.",
//   images: ["/images/products/wk-005-1.jpg","/images/products/wk-005-2.jpg"]
// },
// {
//   id: "wk-006",
//   name: "Pink Floral Lawn Kurta",
//   category: "women",
//   price: 3499,
//   salePrice: 2899,
//   isNew: true,
//   rating: 4.5,
//   reviews: 56,
//   colors: ["Pink","White"],
//   sizes: ["S","M","L","XL"],
//   fabric: "Lawn",
//   description: "Comfortable floral lawn kurta.",
//   care: "Machine wash.",
//   images: ["/images/products/wk-006-1.jpg","/images/products/wk-006-2.jpg"]
// },
// {
//   id: "wk-007",
//   name: "Navy Blue Party Wear Kurta",
//   category: "women",
//   price: 7999,
//   salePrice: 6999,
//   isNew: false,
//   rating: 4.9,
//   reviews: 121,
//   colors: ["Navy Blue"],
//   sizes: ["S","M","L"],
//   fabric: "Chiffon",
//   description: "Elegant party wear kurta.",
//   care: "Dry clean only.",
//   images: ["/images/products/wk-007-1.jpg","/images/products/wk-007-2.jpg"]
// },
// {
//   id: "wk-008",
//   name: "Lavender Printed Kurta",
//   category: "women",
//   price: 3299,
//   salePrice: 2799,
//   isNew: false,
//   rating: 4.4,
//   reviews: 48,
//   colors: ["Lavender"],
//   sizes: ["S","M","L","XL"],
//   fabric: "Cotton",
//   images: ["/images/products/wk-008-1.jpg","/images/products/wk-008-2.jpg"]
// },
// {
//   id: "wk-009",
//   name: "Mustard Casual Kurta",
//   category: "women",
//   price: 2999,
//   salePrice: 2499,
//   isNew: true,
//   rating: 4.3,
//   reviews: 63,
//   colors: ["Mustard"],
//   sizes: ["S","M","L","XL"],
//   fabric: "Cotton",
//   images: ["/images/products/wk-009-1.jpg","/images/products/wk-009-2.jpg"]
// },
// {
//   id: "wk-010",
//   name: "Bottle Green Wedding Kurta",
//   category: "women",
//   price: 9999,
//   salePrice: 8499,
//   isNew: true,
//   rating: 4.9,
//   reviews: 156,
//   colors: ["Bottle Green"],
//   sizes: ["S","M","L","XL"],
//   fabric: "Velvet",
//   images: ["/images/products/wk-010-1.jpg","/images/products/wk-010-2.jpg"]
// },
// {
//   id: "wk-011",
//   name: "Sky Blue Cotton Kurta",
//   category: "women",
//   price: 2799,
//   salePrice: null,
//   isNew: false,
//   rating: 4.2,
//   reviews: 44,
//   colors: ["Sky Blue"],
//   sizes: ["XS","S","M","L"],
//   fabric: "Cotton",
//   images: ["/images/products/wk-011-1.jpg","/images/products/wk-011-2.jpg"]
// },
// {
//   id: "wk-012",
//   name: "Pearl White Embroidered Kurta",
//   category: "women",
//   price: 5499,
//   salePrice: 4699,
//   isNew: true,
//   rating: 4.7,
//   reviews: 90,
//   colors: ["White"],
//   sizes: ["S","M","L","XL"],
//   fabric: "Lawn",
//   images: ["/images/products/wk-012-1.jpg","/images/products/wk-012-2.jpg"]
// },
// {
//   id: "wk-013",
//   name: "Rust Orange Casual Kurta",
//   category: "women",
//   price: 3199,
//   salePrice: null,
//   isNew: false,
//   rating: 4.4,
//   reviews: 52,
//   colors: ["Rust"],
//   sizes: ["S","M","L"],
//   fabric: "Cotton",
//   images: ["/images/products/wk-013-1.jpg","/images/products/wk-013-2.jpg"]
// },
// {
//   id: "wk-014",
//   name: "Royal Purple Kurta",
//   category: "women",
//   price: 6799,
//   salePrice: 5999,
//   isNew: true,
//   rating: 4.8,
//   reviews: 112,
//   colors: ["Purple"],
//   sizes: ["S","M","L","XL"],
//   fabric: "Silk",
//   images: ["/images/products/wk-014-1.jpg","/images/products/wk-014-2.jpg"]
// },
// {
//   id: "wk-015",
//   name: "Coral Summer Kurta",
//   category: "women",
//   price: 2899,
//   salePrice: 2399,
//   isNew: false,
//   rating: 4.2,
//   reviews: 38,
//   colors: ["Coral"],
//   sizes: ["S","M","L","XL"],
//   fabric: "Lawn",
//   images: ["/images/products/wk-015-1.jpg","/images/products/wk-015-2.jpg"]
// },
// {
//   id: "wk-016",
//   name: "Grey Printed Kurta",
//   category: "women",
//   price: 2699,
//   salePrice: null,
//   isNew: false,
//   rating: 4.3,
//   reviews: 29,
//   colors: ["Grey"],
//   sizes: ["S","M","L"],
//   fabric: "Cotton",
//   images: ["/images/products/wk-016-1.jpg","/images/products/wk-016-2.jpg"]
// },
// {
//   id: "wk-017",
//   name: "Golden Festive Kurta",
//   category: "women",
//   price: 8999,
//   salePrice: 7999,
//   isNew: true,
//   rating: 4.9,
//   reviews: 175,
//   colors: ["Golden"],
//   sizes: ["S","M","L","XL"],
//   fabric: "Jacquard",
//   images: ["/images/products/wk-017-1.jpg","/images/products/wk-017-2.jpg"]
// },
// {
//   id: "wk-018",
//   name: "Turquoise Lawn Kurta",
//   category: "women",
//   price: 3599,
//   salePrice: 2999,
//   isNew: true,
//   rating: 4.6,
//   reviews: 61,
//   colors: ["Turquoise"],
//   sizes: ["S","M","L","XL"],
//   fabric: "Lawn",
//   images: ["/images/products/wk-018-1.jpg","/images/products/wk-018-2.jpg"]
// },
// {
//   id: "wk-019",
//   name: "Chocolate Brown Kurta",
//   category: "women",
//   price: 3899,
//   salePrice: null,
//   isNew: false,
//   rating: 4.4,
//   reviews: 43,
//   colors: ["Brown"],
//   sizes: ["S","M","L","XL"],
//   fabric: "Cotton",
//   images: ["/images/products/wk-019-1.jpg","/images/products/wk-019-2.jpg"]
// },

// // MEN PRODUCTS

// {
//   id: "mk-005",
//   name: "Black Classic Kurta",
//   category: "men",
//   price: 3999,
//   salePrice: 3499,
//   isNew: true,
//   rating: 4.7,
//   reviews: 143,
//   colors: ["Black"],
//   sizes: ["S","M","L","XL","XXL"],
//   fabric: "Cotton",
//   images: ["/images/products/mk-005-1.jpg","/images/products/mk-005-2.jpg"]
// },
// {
//   id: "mk-006",
//   name: "Beige Summer Kurta",
//   category: "men",
//   price: 2999,
//   salePrice: 2499,
//   isNew: false,
//   rating: 4.4,
//   reviews: 74,
//   colors: ["Beige"],
//   sizes: ["M","L","XL"],
//   fabric: "Linen",
//   images: ["/images/products/mk-006-1.jpg","/images/products/mk-006-2.jpg"]
// },
// {
//   id: "mk-007",
//   name: "Royal Blue Eid Kurta",
//   category: "men",
//   price: 5499,
//   salePrice: 4999,
//   isNew: true,
//   rating: 4.9,
//   reviews: 198,
//   colors: ["Royal Blue"],
//   sizes: ["M","L","XL","XXL"],
//   fabric: "Karandi",
//   images: ["/images/products/mk-007-1.jpg","/images/products/mk-007-2.jpg"]
// },
// {
//   id: "mk-008",
//   name: "Dark Grey Kurta",
//   category: "men",
//   price: 3799,
//   salePrice: null,
//   isNew: false,
//   rating: 4.3,
//   reviews: 56,
//   colors: ["Dark Grey"],
//   sizes: ["S","M","L","XL"],
//   fabric: "Cotton",
//   images: ["/images/products/mk-008-1.jpg","/images/products/mk-008-2.jpg"]
// },
// {
//   id: "mk-009",
//   name: "Cream Wedding Kurta",
//   category: "men",
//   price: 6499,
//   salePrice: 5899,
//   isNew: true,
//   rating: 4.8,
//   reviews: 133,
//   colors: ["Cream"],
//   sizes: ["M","L","XL","XXL"],
//   fabric: "Jamawar",
//   images: ["/images/products/mk-009-1.jpg","/images/products/mk-009-2.jpg"]
// },
// {
//   id: "mk-010",
//   name: "Maroon Embroidered Kurta",
//   category: "men",
//   price: 4899,
//   salePrice: 4299,
//   isNew: true,
//   rating: 4.7,
//   reviews: 95,
//   colors: ["Maroon"],
//   sizes: ["M","L","XL"],
//   fabric: "Cotton",
//   images: ["/images/products/mk-010-1.jpg","/images/products/mk-010-2.jpg"]
// },
// {
//   id: "mk-011",
//   name: "Olive Premium Kurta",
//   category: "men",
//   price: 4199,
//   salePrice: null,
//   isNew: false,
//   rating: 4.5,
//   reviews: 66,
//   colors: ["Olive"],
//   sizes: ["S","M","L","XL"],
//   fabric: "Linen Blend",
//   images: ["/images/products/mk-011-1.jpg","/images/products/mk-011-2.jpg"]
// },
// {
//   id: "mk-012",
//   name: "Navy Formal Kurta",
//   category: "men",
//   price: 4599,
//   salePrice: 3999,
//   isNew: true,
//   rating: 4.6,
//   reviews: 84,
//   colors: ["Navy"],
//   sizes: ["M","L","XL","XXL"],
//   fabric: "Karandi",
//   images: ["/images/products/mk-012-1.jpg","/images/products/mk-012-2.jpg"]
// },
// {
//   id: "mk-013",
//   name: "Brown Casual Kurta",
//   category: "men",
//   price: 2799,
//   salePrice: null,
//   isNew: false,
//   rating: 4.2,
//   reviews: 41,
//   colors: ["Brown"],
//   sizes: ["S","M","L"],
//   fabric: "Cotton",
//   images: ["/images/products/mk-013-1.jpg","/images/products/mk-013-2.jpg"]
// },
// {
//   id: "mk-014",
//   name: "Mustard Traditional Kurta",
//   category: "men",
//   price: 3899,
//   salePrice: 3299,
//   isNew: true,
//   rating: 4.5,
//   reviews: 59,
//   colors: ["Mustard"],
//   sizes: ["M","L","XL"],
//   fabric: "Cambric",
//   images: ["/images/products/mk-014-1.jpg","/images/products/mk-014-2.jpg"]
// },
// {
//   id: "mk-015",
//   name: "White Premium Eid Kurta",
//   category: "men",
//   price: 5999,
//   salePrice: 5499,
//   isNew: true,
//   rating: 4.9,
//   reviews: 243,
//   colors: ["White"],
//   sizes: ["M","L","XL","XXL"],
//   fabric: "Karandi",
//   images: ["/images/products/mk-015-1.jpg","/images/products/mk-015-2.jpg"]
// },
// {
//   id: "mk-016",
//   name: "Light Blue Casual Kurta",
//   category: "men",
//   price: 2999,
//   salePrice: 2599,
//   isNew: false,
//   rating: 4.3,
//   reviews: 37,
//   colors: ["Light Blue"],
//   sizes: ["S","M","L","XL"],
//   fabric: "Cotton",
//   images: ["/images/products/mk-016-1.jpg","/images/products/mk-016-2.jpg"]
// },
// {
//   id: "mk-017",
//   name: "Charcoal Festive Kurta",
//   category: "men",
//   price: 5299,
//   salePrice: 4799,
//   isNew: true,
//   rating: 4.7,
//   reviews: 101,
//   colors: ["Charcoal"],
//   sizes: ["M","L","XL","XXL"],
//   fabric: "Silk Blend",
//   images: ["/images/products/mk-017-1.jpg","/images/products/mk-017-2.jpg"]
// },
// {
//   id: "mk-018",
//   name: "Forest Green Kurta",
//   category: "men",
//   price: 3599,
//   salePrice: null,
//   isNew: false,
//   rating: 4.4,
//   reviews: 47,
//   colors: ["Forest Green"],
//   sizes: ["S","M","L","XL"],
//   fabric: "Linen",
//   images: ["/images/products/mk-018-1.jpg","/images/products/mk-018-2.jpg"]
// },
// {
//   id: "mk-019",
//   name: "Burgundy Luxury Kurta",
//   category: "men",
//   price: 7299,
//   salePrice: 6499,
//   isNew: true,
//   rating: 4.9,
//   reviews: 158,
//   colors: ["Burgundy"],
//   sizes: ["M","L","XL","XXL"],
//   fabric: "Jamawar",
//   images: ["/images/products/mk-019-1.jpg","/images/products/mk-019-2.jpg"]
// },
// ];

// const CATEGORIES = [
//   { id: "women", label: "Women's Kurtas" },
//   { id: "men", label: "Men's Kurtas" },
// ];

// const COLOR_SWATCHES = {
//   Peach: "#FFCBA4",
//   Mint: "#A8E6CF",
//   Ivory: "#FFFFF0",
//   Teal: "#1A3C34",
//   Maroon: "#7B1E1E",
//   "Sky Blue": "#87CEEB",
//   Charcoal: "#36454F",
//   Navy: "#1B2A4A",
//   White: "#FFFFFF",
//   Cream: "#FFFDD0",
//   Olive: "#6B7A3A",
//   Khaki: "#C3B091",
//   "Bottle Green": "#1B4D3E",
// };

// const formatPKR = (amount) =>
//   new Intl.NumberFormat("en-PK", {
//     style: "currency",
//     currency: "PKR",
//     maximumFractionDigits: 0,
//   }).format(amount);

// /* =========================================================
//    GLOBAL KEYFRAMES
//    ========================================================= */
// const GlobalStyles = () => (
//   <style>{`
//     @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//     @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
//     @keyframes fadeSlide { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
//     @keyframes popIn { 0% { transform: scale(0); } 70% { transform: scale(1.2); } 100% { transform: scale(1); } }
//     @keyframes slideUp { from { opacity: 0; transform: translate(-50%, 10px); } to { opacity: 1; transform: translate(-50%, 0); } }
//     @keyframes wordSwap {
//       0% { opacity: 0; transform: translateY(10px) rotateX(45deg); }
//       15% { opacity: 1; transform: translateY(0) rotateX(0deg); }
//       85% { opacity: 1; transform: translateY(0) rotateX(0deg); }
//       100% { opacity: 0; transform: translateY(-10px) rotateX(-45deg); }
//     }
//     @keyframes floatSlow {
//       0%, 100% { transform: translateY(0) translateX(0); }
//       50% { transform: translateY(-18px) translateX(10px); }
//     }
//     @keyframes twinkle {
//       0%, 100% { opacity: 0.2; transform: scale(0.8); }
//       50% { opacity: 1; transform: scale(1.2); }
//     }
//     @keyframes bounceY {
//       0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.7; }
//       50% { transform: translateX(-50%) translateY(6px); opacity: 1; }
//     }
//     @keyframes drawerIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
//     @keyframes overlayIn { from { opacity: 0; } to { opacity: 1; } }
//     @keyframes modalIn { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
//     @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
//     @media (prefers-reduced-motion: reduce) {
//       * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
//     }
//   `}</style>
// );

// /* =========================================================
//    APP CONTEXT
//    ========================================================= */
// const AppContext = createContext(null);
// const useApp = () => useContext(AppContext);

// function AppProvider({ children }) {
//   const [page, setPage] = useState({ name: "home" });
//   const [cart, setCart] = useState([]);
//   const [user, setUser] = useState(null);
//   const [wishlist, setWishlist] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [toast, setToast] = useState(null);
//   const [quickViewProduct, setQuickViewProduct] = useState(null);

//   const showToast = (msg) => {
//     setToast(msg);
//     window.clearTimeout(window.__toastTimer);
//     window.__toastTimer = window.setTimeout(() => setToast(null), 2200);
//   };

//   const navigate = (name, params = {}) => {
//     setPage({ name, ...params });
//     window.scrollTo?.({ top: 0, behavior: "smooth" });
//   };

//   const addToCart = (product, size, color, qty = 1) => {
//     setCart((prev) => {
//       const idx = prev.findIndex((i) => i.id === product.id && i.size === size && i.color === color);
//       if (idx > -1) {
//         const copy = [...prev];
//         copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
//         return copy;
//       }
//       return [...prev, { id: product.id, size, color, qty }];
//     });
//     showToast(`${product.name} added to cart`);
//   };

//   const updateQty = (id, size, color, qty) => {
//     setCart((prev) =>
//       prev
//         .map((i) => (i.id === id && i.size === size && i.color === color ? { ...i, qty: Math.max(1, qty) } : i))
//         .filter((i) => i.qty > 0)
//     );
//   };

//   const removeFromCart = (id, size, color) => {
//     setCart((prev) => prev.filter((i) => !(i.id === id && i.size === size && i.color === color)));
//     showToast("Item removed from cart");
//   };

//   const toggleWishlist = (productId) => {
//     setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]));
//   };

//   const placeOrder = (orderDetails) => {
//     const order = {
//       id: `KTA-${Math.floor(10000 + Math.random() * 90000)}`,
//       date: new Date().toLocaleDateString("en-GB"),
//       status: "Pending",
//       items: cart,
//       total: orderDetails.total,
//       ...orderDetails,
//     };
//     setOrders((prev) => [order, ...prev]);
//     setCart([]);
//     return order;
//   };

//   const value = {
//     page, navigate, cart, addToCart, updateQty, removeFromCart,
//     user, setUser, wishlist, toggleWishlist, orders, placeOrder,
//     toast, showToast, quickViewProduct, setQuickViewProduct,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// }

// /* =========================================================
//    SHARED UI
//    ========================================================= */
// function PriceTag({ price, salePrice, size = "base" }) {
//   const big = size === "lg" ? "text-2xl" : "text-base";
//   if (salePrice) {
//     return (
//       <div className="flex items-baseline gap-2 flex-wrap">
//         <span className={`${big} font-semibold text-[#1A3C34]`}>{formatPKR(salePrice)}</span>
//         <span className="text-sm text-gray-400 line-through">{formatPKR(price)}</span>
//         <span className="text-xs font-medium text-[#8C6D3F] bg-[#FFF6E0] px-1.5 py-0.5 rounded">
//           {Math.round(((price - salePrice) / price) * 100)}% off
//         </span>
//       </div>
//     );
//   }
//   return <span className={`${big} font-semibold text-[#212121]`}>{formatPKR(price)}</span>;
// }

// function Stars({ rating, count }) {
//   return (
//     <div className="flex items-center gap-1">
//       <span className="text-[#C6A15B] text-sm">{"★".repeat(Math.round(rating))}{"☆".repeat(5 - Math.round(rating))}</span>
//       <span className="text-xs text-gray-500">{rating}{count !== undefined && ` (${count})`}</span>
//     </div>
//   );
// }

// function Badge({ children, tone = "new" }) {
//   const styles = tone === "new" ? "bg-[#1A3C34] text-white" : "bg-[#C6A15B] text-[#212121]";
//   return (
//     <span className={`absolute top-2 left-2 z-10 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded shadow-sm ${styles}`}>
//       {children}
//     </span>
//   );
// }

// function Breadcrumbs({ items }) {
//   const { navigate } = useApp();
//   return (
//     <nav className="text-sm text-gray-500 mb-6">
//       <ol className="flex flex-wrap items-center gap-1">
//         {items.map((item, idx) => (
//           <li key={idx} className="flex items-center gap-1">
//             {idx > 0 && <span className="text-gray-300">/</span>}
//             {item.page ? (
//               <button type="button" onClick={() => navigate(item.page, item.params)} className="hover:text-[#1A3C34] transition-colors duration-200">
//                 {item.label}
//               </button>
//             ) : (
//               <span className="text-[#212121] font-medium">{item.label}</span>
//             )}
//           </li>
//         ))}
//       </ol>
//     </nav>
//   );
// }

// /* =========================================================
//    QUICK VIEW MODAL
//    ========================================================= */
// function QuickViewModal() {
//   const { quickViewProduct, setQuickViewProduct, addToCart, wishlist, toggleWishlist, navigate } = useApp();
//   const [size, setSize] = useState(null);
//   const [color, setColor] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (quickViewProduct) {
//       setSize(null);
//       setColor(quickViewProduct.colors[0]);
//       setError("");
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => { document.body.style.overflow = ""; };
//   }, [quickViewProduct]);

//   if (!quickViewProduct) return null;
//   const p = quickViewProduct;
//   const isWishlisted = wishlist.includes(p.id);
//   const displayImage = (p.colorImages && p.colorImages[color]) || p.images[0];

//   const handleAdd = () => {
//     if (!size) { setError("Select a size"); return; }
//     addToCart(p, size, color);
//     setQuickViewProduct(null);
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center p-4"
//       style={{ animation: "overlayIn 0.2s ease-out" }}
//     >
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setQuickViewProduct(null)} />
//       <div
//         className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//         style={{ animation: "modalIn 0.25s ease-out" }}
//       >
//         <button
//           type="button"
//           onClick={() => setQuickViewProduct(null)}
//           className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
//         >
//           ✕
//         </button>
//         <div className="grid grid-cols-1 sm:grid-cols-2">
//           <div className="aspect-[3/4] sm:aspect-auto overflow-hidden rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none">
//             <img src={displayImage} alt={p.name} className="w-full h-full object-cover" style={{ minHeight: 260 }} />
//           </div>
//           <div className="p-6 flex flex-col gap-4">
//             <div>
//               <h2 className="text-lg font-bold text-[#212121] mb-1">{p.name}</h2>
//               <Stars rating={p.rating} count={p.reviews} />
//               <div className="mt-2"><PriceTag price={p.price} salePrice={p.salePrice} /></div>
//             </div>
//             <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
//             <fieldset>
//               <legend className="text-sm font-semibold mb-2">Color: {color}</legend>
//               <div className="flex flex-wrap gap-2">
//                 {p.colors.map((c) => (
//                   <button
//                     key={c}
//                     type="button"
//                     onClick={() => setColor(c)}
//                     className={`w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-110 ${color === c ? "ring-2 ring-offset-1 ring-[#1A3C34] border-white scale-110" : "border-gray-300"}`}
//                     style={{ backgroundColor: COLOR_SWATCHES[c] || "#ccc" }}
//                     title={c}
//                   />
//                 ))}
//               </div>
//             </fieldset>
//             <fieldset>
//               <legend className="text-sm font-semibold mb-2">Size</legend>
//               <div className="flex flex-wrap gap-2">
//                 {p.sizes.map((s) => (
//                   <button
//                     key={s}
//                     type="button"
//                     onClick={() => { setSize(s); setError(""); }}
//                     className={`text-xs border rounded px-3 py-1.5 font-medium transition-all duration-200 hover:scale-105 ${size === s ? "border-[#1A3C34] bg-[#E0F2F1] text-[#1A3C34]" : "border-gray-300 hover:border-[#1A3C34]"}`}
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>
//               {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
//             </fieldset>
//             <div className="flex gap-2 mt-auto">
//               <button
//                 type="button"
//                 onClick={handleAdd}
//                 className="flex-1 bg-[#1A3C34] text-white font-semibold rounded-full py-2.5 text-sm transition-all duration-300 hover:bg-[#00695C] hover:shadow-lg active:scale-[0.98]"
//               >
//                 Add to Cart
//               </button>
//               <button
//                 type="button"
//                 onClick={() => toggleWishlist(p.id)}
//                 className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-base transition-all duration-200 hover:border-red-300 hover:scale-110"
//               >
//                 <span className={isWishlisted ? "text-red-500" : "text-gray-400"}>{isWishlisted ? "♥" : "♡"}</span>
//               </button>
//             </div>
//             <button
//               type="button"
//               onClick={() => { setQuickViewProduct(null); navigate("product", { id: p.id }); }}
//               className="text-sm text-[#1A3C34] text-center hover:underline"
//             >
//               View full details →
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    PRODUCT CARD — upgraded
//    ========================================================= */
// function ProductCard({ product, dark = false }) {
//   const { navigate, addToCart, wishlist, toggleWishlist, setQuickViewProduct } = useApp();
//   const isWishlisted = wishlist.includes(product.id);
//   const [activeColor, setActiveColor] = useState(product.colors[0]);

//   const displayImage = (product.colorImages && product.colorImages[activeColor]) || product.images[0];

//   return (
//     <div className="group flex flex-col">
//       <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4] shadow-sm transition-shadow duration-300 group-hover:shadow-2xl">
//         {product.isNew && <Badge tone="new">New</Badge>}
//         {product.salePrice && !product.isNew && <Badge tone="sale">Sale</Badge>}
//         <button
//           type="button"
//           onClick={() => toggleWishlist(product.id)}
//           className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95"
//         >
//           <span className={`inline-block transition-transform duration-300 text-base ${isWishlisted ? "scale-110 text-red-500" : "text-gray-400"}`}>
//             {isWishlisted ? "♥" : "♡"}
//           </span>
//         </button>
//         <button type="button" onClick={() => navigate("product", { id: product.id })} className="block w-full h-full overflow-hidden">
//           <img
//             key={displayImage}
//             src={displayImage}
//             alt={`${product.name} in ${activeColor}`}
//             className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//             style={{ animation: "fadeIn 0.35s ease-out" }}
//           />
//         </button>
//         {/* Hover overlay: Quick View + Quick Add */}
//         <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col">
//           <button
//             type="button"
//             onClick={() => setQuickViewProduct(product)}
//             className="bg-white/95 text-[#1A3C34] text-xs font-semibold py-2 text-center border-b border-gray-100 hover:bg-white transition-colors duration-200"
//           >
//             Quick View
//           </button>
//           <button
//             type="button"
//             onClick={() => addToCart(product, product.sizes[1] || product.sizes[0], activeColor)}
//             className="bg-[#1A3C34] text-white text-sm font-semibold py-3 text-center hover:bg-[#00695C] transition-colors duration-200"
//           >
//             Quick Add
//           </button>
//         </div>
//       </div>

//       {/* Color swatches */}
//       {product.colors.length > 1 && (
//         <div className="mt-2.5 flex items-center gap-1.5">
//           {product.colors.map((c) => (
//             <button
//               key={c}
//               type="button"
//               title={c}
//               aria-label={`View in ${c}`}
//               aria-pressed={activeColor === c}
//               onClick={(e) => { e.preventDefault(); setActiveColor(c); }}
//               className={`w-4 h-4 rounded-full border transition-all duration-200 hover:scale-125 ${activeColor === c ? "ring-2 ring-offset-1 ring-[#1A3C34] border-white scale-110" : "border-gray-300"}`}
//               style={{ backgroundColor: COLOR_SWATCHES[c] || "#ccc" }}
//             />
//           ))}
//         </div>
//       )}

//       <button
//         type="button"
//         onClick={() => navigate("product", { id: product.id })}
//         className={`mt-2.5 text-left text-sm font-semibold line-clamp-1 transition-colors duration-200 hover:text-[#1A3C34] ${dark ? "text-gray-100" : "text-[#212121]"}`}
//       >
//         {product.name}
//       </button>
//       <div className="mt-1.5 flex items-center justify-between gap-2">
//         <PriceTag price={product.price} salePrice={product.salePrice} />
//         <Stars rating={product.rating} />
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    HEADER — improved mobile drawer + smarter search
//    ========================================================= */
// function Header() {
//   const { navigate, cart, user, page } = useApp();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchValue, setSearchValue] = useState("");
//   const searchRef = useRef(null);
//   const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

//   // Close drawer on route change
//   useEffect(() => { setDrawerOpen(false); setSearchOpen(false); }, [page.name]);

//   const suggestions = useMemo(() => {
//     if (!searchValue.trim()) return [];
//     const q = searchValue.toLowerCase();
//     return PRODUCTS.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 5);
//   }, [searchValue]);

//   const submitSearch = (e) => {
//     e.preventDefault();
//     if (!searchValue.trim()) return;
//     navigate("search", { query: searchValue.trim() });
//     setSearchValue("");
//     setSearchOpen(false);
//   };

//   const navLink = (label, name, params) => (
//     <button
//       type="button"
//       onClick={() => { navigate(name, params); setDrawerOpen(false); }}
//       className={`relative text-sm font-medium transition-colors duration-200 hover:text-[#1A3C34] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#1A3C34] after:transition-all after:duration-300 ${page.name === name ? "text-[#1A3C34] after:w-full" : "text-[#212121] after:w-0 hover:after:w-full"}`}
//     >
//       {label}
//     </button>
//   );

//   return (
//     <>
//       <header className="sticky top-0 z-40 bg-white/97 backdrop-blur-md border-b border-gray-100 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="flex items-center justify-between h-16 gap-4">
//             {/* Logo */}
//             <button type="button" onClick={() => navigate("home")} className="flex items-center gap-0.5 shrink-0 group">
//               <span className="text-2xl font-extrabold tracking-tight text-[#1A3C34] group-hover:opacity-90 transition-opacity">Kurta</span>
//               <span className="text-2xl font-extrabold tracking-tight text-[#C6A15B] group-hover:opacity-90 transition-opacity">Studio</span>
//             </button>

//             {/* Desktop nav */}
//             <nav className="hidden md:flex items-center gap-7">
//               {navLink("Women", "category", { id: "women" })}
//               {navLink("Men", "category", { id: "men" })}
//               {navLink("Sale", "search", { query: "sale" })}
//               {navLink("About", "about")}
//             </nav>

//             {/* Desktop search */}
//             <form onSubmit={submitSearch} className="relative hidden sm:block flex-1 max-w-xs">
//               <input
//                 ref={searchRef}
//                 type="search"
//                 value={searchValue}
//                 onChange={(e) => setSearchValue(e.target.value)}
//                 placeholder="Search kurtas…"
//                 className="w-full border border-gray-200 rounded-full px-4 py-2 text-sm bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1A3C34] focus:border-[#1A3C34] focus:bg-white"
//               />
//               {suggestions.length > 0 && (
//                 <ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50" style={{ animation: "fadeIn 0.15s ease-out" }}>
//                   {suggestions.map((s) => (
//                     <li key={s.id}>
//                       <button type="button" onClick={() => { navigate("product", { id: s.id }); setSearchValue(""); }} className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#E0F2F1] hover:text-[#1A3C34] transition-colors duration-150 flex items-center gap-2">
//                         <span className="text-gray-400 text-xs">🔍</span>
//                         {s.name}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </form>

//             {/* Actions */}
//             <div className="flex items-center gap-2 shrink-0">
//               {/* Mobile search toggle */}
//               <button type="button" onClick={() => setSearchOpen((o) => !o)} className="sm:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-lg">
//                 🔍
//               </button>
//               <button type="button" onClick={() => navigate("account")} className="text-sm font-medium text-[#212121] hover:text-[#1A3C34] hidden sm:inline-block transition-colors duration-200">
//                 {user ? user.name.split(" ")[0] : "Sign In"}
//               </button>
//               <button type="button" onClick={() => navigate("cart")} className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors active:scale-95">
//                 <span className="text-xl">🛍️</span>
//                 {cartCount > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-[#C6A15B] text-[#212121] text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center" style={{ animation: "popIn 0.25s ease-out" }}>
//                     {cartCount}
//                   </span>
//                 )}
//               </button>
//               <button type="button" onClick={() => setDrawerOpen((o) => !o)} className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-lg">
//                 {drawerOpen ? "✕" : "☰"}
//               </button>
//             </div>
//           </div>

//           {/* Mobile search bar */}
//           {searchOpen && (
//             <div className="sm:hidden pb-3" style={{ animation: "fadeIn 0.15s ease-out" }}>
//               <form onSubmit={submitSearch}>
//                 <input
//                   autoFocus
//                   type="search"
//                   value={searchValue}
//                   onChange={(e) => setSearchValue(e.target.value)}
//                   placeholder="Search kurtas…"
//                   className="w-full border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C34] bg-gray-50"
//                 />
//               </form>
//               {suggestions.length > 0 && (
//                 <ul className="mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden" style={{ animation: "fadeIn 0.15s ease-out" }}>
//                   {suggestions.map((s) => (
//                     <li key={s.id}>
//                       <button type="button" onClick={() => { navigate("product", { id: s.id }); setSearchValue(""); setSearchOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#E0F2F1] hover:text-[#1A3C34] transition-colors">
//                         {s.name}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Mobile full-height drawer */}
//       {drawerOpen && (
//         <>
//           <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden" style={{ animation: "overlayIn 0.2s ease-out" }} onClick={() => setDrawerOpen(false)} />
//           <div className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl flex flex-col md:hidden" style={{ animation: "drawerIn 0.25s ease-out" }}>
//             <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
//               <span className="font-bold text-[#1A3C34]">KurtaStudio</span>
//               <button type="button" onClick={() => setDrawerOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500">✕</button>
//             </div>
//             <nav className="flex flex-col gap-1 px-4 py-4 flex-1">
//               {[
//                 { label: "Women's Kurtas", name: "category", params: { id: "women" } },
//                 { label: "Men's Kurtas", name: "category", params: { id: "men" } },
//                 { label: "Sale", name: "search", params: { query: "sale" } },
//                 { label: "About Us", name: "about" },
//                 { label: "FAQs", name: "faq" },
//               ].map((item) => (
//                 <button
//                   key={item.label}
//                   type="button"
//                   onClick={() => { navigate(item.name, item.params); setDrawerOpen(false); }}
//                   className="text-left px-3 py-3 rounded-xl text-sm font-medium text-[#212121] hover:bg-[#E0F2F1] hover:text-[#1A3C34] transition-colors duration-200"
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </nav>
//             <div className="px-4 pb-6 border-t border-gray-100 pt-4">
//               <button
//                 type="button"
//                 onClick={() => { navigate("account"); setDrawerOpen(false); }}
//                 className="w-full bg-[#1A3C34] text-white font-semibold rounded-full py-3 text-sm hover:bg-[#00695C] transition-colors"
//               >
//                 {user ? `Hi, ${user.name.split(" ")[0]}` : "Sign In / Register"}
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// /* =========================================================
//    FOOTER
//    ========================================================= */
// function Footer() {
//   const { navigate } = useApp();
//   return (
//     <footer className="bg-[#1a1a1a] text-gray-400 mt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//         <div>
//           <div className="flex items-center gap-0.5 mb-3">
//             <span className="text-xl font-extrabold text-[#1A3C34]">Kurta</span>
//             <span className="text-xl font-extrabold text-[#C6A15B]">Studio</span>
//           </div>
//           <p className="text-sm text-gray-500 leading-relaxed">Ethnic wear for everyday and every occasion. Designed and shipped across Pakistan.</p>
//         </div>
//         <div>
//           <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Shop</h3>
//           <ul className="space-y-2.5 text-sm">
//             {[["Women's Kurtas", "category", { id: "women" }], ["Men's Kurtas", "category", { id: "men" }], ["Sale", "search", { query: "sale" }]].map(([label, name, params]) => (
//               <li key={label}><button onClick={() => navigate(name, params)} className="hover:text-white transition-colors duration-200">{label}</button></li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Help</h3>
//           <ul className="space-y-2.5 text-sm">
//             {[["About Us", "about"], ["FAQs", "faq"], ["My Orders", "account"]].map(([label, name]) => (
//               <li key={label}><button onClick={() => navigate(name)} className="hover:text-white transition-colors duration-200">{label}</button></li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Payment</h3>
//           <div className="flex flex-wrap gap-2 text-xs">
//             {["JazzCash", "Easypaisa", "Visa/MC", "COD"].map((m) => (
//               <span key={m} className="border border-gray-700 rounded-md px-2.5 py-1 hover:border-[#C6A15B] hover:text-[#C6A15B] transition-colors duration-200">{m}</span>
//             ))}
//           </div>
//           <p className="text-xs text-gray-600 mt-5 leading-relaxed">Free shipping on orders above Rs. 2,000 · 30-day returns</p>
//         </div>
//       </div>
//       <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-600">
//         © 2026 Kurta Studio. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// function Toast() {
//   const { toast } = useApp();
//   if (!toast) return null;
//   return (
//     <div role="status" aria-live="polite" className="fixed bottom-6 left-1/2 bg-[#212121] text-white text-sm px-5 py-2.5 rounded-full shadow-xl z-50" style={{ animation: "slideUp 0.3s ease-out", transform: "translateX(-50%)" }}>
//       {toast}
//     </div>
//   );
// }

// /* =========================================================
//    HOME PAGE
//    ========================================================= */

// function AnnouncementBar() {
//   const items = [
//     "🎉 Summer Sale — Up to 30% Off",
//     "🚚 Free Shipping on orders above Rs. 2,000",
//     "✨ New Arrivals Every Friday",
//     "💸 Pay with JazzCash, Easypaisa, or Cash on Delivery",
//   ];
//   const [idx, setIdx] = useState(0);
//   useEffect(() => {
//     const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 3000);
//     return () => clearInterval(t);
//   }, []);
//   return (
//     <div className="bg-[#1A3C34] text-white text-xs font-medium text-center py-2 px-4 overflow-hidden">
//       <span key={idx} style={{ display: "inline-block", animation: "fadeSlide 0.5s ease-out" }}>{items[idx]}</span>
//     </div>
//   );
// }



//  function HeroSection() {
//   const { navigate } = useApp(); // Kept from your original logic
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-advance slides every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full overflow-hidden bg-zinc-900" style={{ height: "640px" }}>
      
//       {/* Slides Wrapper */}
//       <div className="absolute inset-0 w-full h-full">
//         {SLIDES.map((slide, idx) => (
//           <div
//             key={idx}
//             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//               idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//           >
//             {/* Background Image with dimming overlay for readable text */}
//             <img
//               src={slide.imgSrc}
//               alt={slide.title}
//               className="w-full h-full object-cover object-center"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            
//             {/* Content Container aligned exactly as shown in the layout */}
//             <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-2xl text-white select-none">
//               <span className="text-xs md:text-sm font-semibold tracking-widest text-zinc-300 uppercase mb-2 block animate-fade-in">
//                 {slide.tag}
//               </span>
//               <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-sm leading-tight">
//                 {slide.title}
//               </h1>
//               <p className="text-base md:text-lg text-zinc-200 mb-8 max-w-md font-light leading-relaxed">
//                 {slide.desc}
//               </p>
//               <div>
//                 <button
//                   type="button"
//                   onClick={() => navigate("category", { id: slide.ctaCategory })}
//                   className="bg-white text-zinc-900 font-medium px-8 py-3 rounded-none text-sm tracking-wider uppercase transition-all duration-300 hover:bg-zinc-200 hover:scale-102 active:scale-98 shadow-md"
//                 >
//                   {slide.ctaText}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Segmented Progress Bars (Bottom Indicators) */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-11/12 max-w-3xl flex items-center justify-between gap-3 px-4">
//         {SLIDES.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentSlide(idx)}
//             className="flex-1 h-1 relative overflow-hidden bg-white/30 rounded-sm focus:outline-none"
//             aria-label={`Go to slide ${idx + 1}`}
//           >
//             {/* Active loading fills only for the active bar indicator */}
//             <div
//               className={`absolute top-0 left-0 h-full bg-white transition-all duration-none ${
//                 idx === currentSlide ? "w-full" : "w-0"
//               }`}
//               style={{
//                 transitionDuration: idx === currentSlide ? "5000ms" : "0ms",
//                 transitionTimingFunction: "linear"
//               }}
//             />
//           </button>
//         ))}
//       </div>

//     </section>
//   );
// }
// function StatsStrip() {
//   const stats = [
//     { value: "10K+", label: "Happy Customers" },
//     { value: "200+", label: "Fabric Designs" },
//     { value: "3–5", label: "Day Delivery" },
//     { value: "30", label: "Day Returns" },
//   ];
//   return (
//     <section className="bg-[#212121] text-white py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
//         {stats.map((s) => (
//           <div key={s.label} className="transition-transform duration-300 hover:scale-105">
//             <p className="text-3xl font-extrabold text-[#C6A15B]">{s.value}</p>
//             <p className="text-xs text-gray-500 mt-1.5 uppercase tracking-wider">{s.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function CategoryGrid() {
//   const { navigate } = useApp();
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
//       <div className="text-center mb-10">
//         <p className="text-xs font-bold uppercase tracking-widest text-[#1A3C34] mb-2">Collections</p>
//         <h2 className="text-3xl font-extrabold text-[#212121]">Shop by Style</h2>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         <div className="sm:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow duration-300" style={{ minHeight: 440 }} onClick={() => navigate("category", { id: "women" })}>
//           <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=85" alt="Women's" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" style={{ minHeight: 440 }} />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent group-hover:from-black/80 transition-all duration-300" />
//           <div className="absolute bottom-5 left-5 translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
//             <span className="text-white text-2xl font-extrabold block">Women's</span>
//             <span className="text-[#C6A15B] text-sm font-semibold">View Collection →</span>
//           </div>
//         </div>
//         <div className="relative rounded-2xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow duration-300" style={{ minHeight: 210 }} onClick={() => navigate("category", { id: "men" })}>
//           <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=85" alt="Men's" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" style={{ minHeight: 210 }} />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:from-black/80 transition-all duration-300" />
//           <div className="absolute bottom-4 left-4 group-hover:-translate-y-1 transition-transform duration-300">
//             <span className="text-white text-xl font-extrabold block">Men's</span>
//             <span className="text-[#C6A15B] text-xs font-semibold">View Collection →</span>
//           </div>
//         </div>
//         <div className="relative rounded-2xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow duration-300" style={{ minHeight: 210 }} onClick={() => navigate("search", { query: "festive" })}>
//           <img src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=85" alt="Festive" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" style={{ minHeight: 210 }} />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:from-black/80 transition-all duration-300" />
//           <div className="absolute bottom-4 left-4 group-hover:-translate-y-1 transition-transform duration-300">
//             <span className="text-white text-xl font-extrabold block">Festive</span>
//             <span className="text-[#C6A15B] text-xs font-semibold">View Collection →</span>
//           </div>
//         </div>
//         <div className="sm:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow duration-300" style={{ minHeight: 160 }} onClick={() => navigate("search", { query: "sale" })}>
//           <img src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=1200&q=85" alt="Sale" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" style={{ minHeight: 160 }} />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#C6A15B]/85 to-transparent group-hover:from-[#C6A15B]/95 transition-all duration-300" />
//           <div className="absolute inset-0 flex items-center pl-8">
//             <div className="group-hover:-translate-y-1 transition-transform duration-300">
//               <span className="text-[#212121] text-2xl font-extrabold block">Sale — Up to 30% Off</span>
//               <span className="text-[#212121]/75 text-sm font-semibold">Shop Now →</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function NewArrivalsSection() {
//   const { navigate } = useApp();
//   const newArrivals = PRODUCTS.filter((p) => p.isNew);
//   return (
//     <section className="py-20 bg-[#F8F8F8]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex items-end justify-between mb-10">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-widest text-[#1A3C34] mb-1">Just In</p>
//             <h2 className="text-3xl font-extrabold text-[#212121]">New Arrivals</h2>
//           </div>
//           <button onClick={() => navigate("search", { query: "new" })} className="text-sm font-semibold text-[#1A3C34] border border-[#1A3C34] rounded-full px-5 py-2 transition-all duration-200 hover:bg-[#1A3C34] hover:text-white hover:shadow-md">
//             View All →
//           </button>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7">
//           {newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}
//         </div>
//       </div>
//     </section>
//   );
// }
// function WasimAkramBanner() {
//   const { navigate } = useApp(); // Access your app's navigation function

//   return (
//     <section className="relative w-full overflow-hidden bg-[#1e140f]" style={{ height: "520px" }}>
//       {/* Background Image Container */}
//       <div className="absolute inset-0 w-full h-full">
//         <img
//           src="https://almirah.com.pk/cdn/shop/files/wa-1.jpg?v=1778844642&width=1920" // Replace with your actual Wasim Akram image asset path
//           alt="Wasim Akram Collection"
//           className="w-full h-full object-cover object-center"
//         />
//         {/* Soft dark vignette overlay to replicate the studio lighting/wood-paneled atmosphere */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
//       </div>

//       {/* Centered Content Overlay */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 select-none">
        
//         {/* Heading in an elegant serif font style */}
//         <h1 
//           className="text-white text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide mb-6 drop-shadow-sm"
//           style={{ fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif" }}
//         >
//           Wasim Akram Collection
//         </h1>

//         {/* Clean, rectangular tracking button */}
//         <button
//           type="button"
//           onClick={() => navigate("category", { id: "wasim-akram" })}
//           className="bg-white/90 hover:bg-white text-zinc-950 font-medium text-xs sm:text-sm tracking-[0.2em] uppercase px-10 py-3.5 transition-all duration-300 shadow-lg active:scale-98"
//         >
//           Shop Now
//         </button>

//       </div>
//     </section>
//   );
// }
// function SherwaniSection() {
//   const { navigate } = useApp(); // Kept from your previous components

//   return (
//     <section className="w-full bg-white max-w-7xl mx-auto px-6 py-12 md:py-20">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
//         {/* Left Column: Content Block */}
//         <div className="lg:col-span-5 flex flex-col items-start justify-center max-w-md mx-auto lg:mx-0 pr-0 lg:pr-8">
//           {/* Serif Heading */}
//           <h2 
//             className="text-[#1a1a1a] text-4xl sm:text-5xl font-normal tracking-wide mb-5"
//             style={{ fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif" }}
//           >
//             Sherwani
//           </h2>
          
//           {/* Description Paragraph */}
//           <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-8 font-light">
//             Crafted for ceremonial grandeur, a silhouette that celebrates tradition at its finest.
//           </p>
          
//           {/* Bordered Action Button */}
//           <button
//             type="button"
//             onClick={() => navigate("category", { id: "sherwani" })}
//             className="border border-zinc-950 text-zinc-950 font-medium text-xs tracking-[0.25em] uppercase px-9 py-3.5 bg-transparent hover:bg-zinc-950 hover:text-white transition-all duration-300 active:scale-98"
//           >
//             Shop Now
//           </button>
//         </div>

//         {/* Right Column: Split Image Grid Display */}
//         <div className="lg:col-span-7 grid grid-cols-2 gap-4">
//           {/* First Model Image (Sitting) */}
//           <div className="aspect-[4/5] w-full bg-zinc-50 overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80" // Replace with your sitting model asset link
//               alt="Sherwani collection showcase - sitting pose"
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
          
//           {/* Second Model Image (Standing) */}
//           <div className="aspect-[4/5] w-full bg-zinc-50 overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=800&q=80" // Replace with your standing model asset link
//               alt="Sherwani collection showcase - standing pose"
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
// function AccessoriesSection() {
//   const { navigate } = useApp(); // Kept from your previous layout logic

//   return (
//     <section className="w-full bg-white max-w-7xl mx-auto px-6 py-12 md:py-20">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
//         {/* Left Column: Split Asset Display (Images) */}
//         <div className="lg:col-span-7 grid grid-cols-2 gap-4 order-2 lg:order-1">
//           {/* First Image (Peshawari Chappal / Footwear) */}
//           <div className="aspect-[4/5] w-full bg-white overflow-hidden flex items-center justify-center">
//             <img
//               src="https://almirah.com.pk/cdn/shop/files/AL-MFW-HC-168_1_da907164-5d1a-4aed-8843-10c43a72b73a.jpg?v=1762338019&width=1284" // Replace with your shoe asset link
//               alt="Premium leather Peshawari sandals"
//               className="w-full h-full object-contain"
//             />
//           </div>
          
//           {/* Second Image (Model wearing shawl/accessory) */}
//           <div className="aspect-[4/5] w-full bg-zinc-50 overflow-hidden">
//             <img
//               src="https://almirah.com.pk/cdn/shop/files/Shawl.jpg?v=1763119433&width=1284" // Replace with your model accessory asset link
//               alt="Model showcasing traditional shawl accessory"
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
//         </div>

//         {/* Right Column: Content Block */}
//         <div className="lg:col-span-5 flex flex-col items-start justify-center max-w-md mx-auto lg:mx-0 lg:pl-12 order-1 lg:order-2">
//           {/* Serif Heading */}
//           <h2 
//             className="text-[#1a1a1a] text-4xl sm:text-5xl font-normal tracking-wide mb-5"
//             style={{ fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif" }}
//           >
//             Accessories
//           </h2>
          
//           {/* Description Paragraph */}
//           <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-8 font-light max-w-xs">
//             Add the final touch to your ensemble with pieces that speak style and purpose.
//           </p>
          
//           {/* Bordered Action Button */}
//           <button
//             type="button"
//             onClick={() => navigate("category", { id: "accessories" })}
//             className="border border-zinc-950 text-zinc-950 font-medium text-xs tracking-[0.25em] uppercase px-9 py-3.5 bg-transparent hover:bg-zinc-950 hover:text-white transition-all duration-300 active:scale-98"
//           >
//             Shop Now
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }

// function PromoBanner() {
//   const { navigate } = useApp();
//   return (
//     <section className="relative overflow-hidden group">
//       <img
//         src="https://images.unsplash.com/photo-1609206988940-98de2bd6e75a?w=1400&q=80"
//         alt="Festive collection"
//         className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
//         style={{ maxHeight: 400, objectPosition: "center 30%" }}
//       />
//       <div className="absolute inset-0 bg-gradient-to-l from-[#1A3C34]/96 via-[#1A3C34]/55 to-transparent" />
//       <div className="absolute inset-0 flex items-center justify-end">
//         <div className="max-w-md pr-8 sm:pr-16 text-right">
//           <p className="text-xs font-bold uppercase tracking-widest text-[#C6A15B] mb-2">Limited Time</p>
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">Festive Velvet<br />Collection</h2>
//           <p className="text-teal-100 text-sm mb-6">Winter weddings. Evening events. Designed to make you the best-dressed in the room.</p>
//           <button onClick={() => navigate("search", { query: "velvet" })} className="bg-[#C6A15B] text-[#212121] font-bold px-6 py-3 rounded-full text-sm transition-all duration-300 hover:bg-[#FFC433] hover:scale-105 hover:shadow-xl active:scale-95">
//             Explore Velvet →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function BestSellersSection() {
//   const { navigate } = useApp();
//   const bestSellers = [...PRODUCTS].sort((a, b) => b.reviews - a.reviews).slice(0, 4);
//   return (
//     <section className="py-20 bg-[#212121]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex items-end justify-between mb-10">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-widest text-[#C6A15B] mb-1">Community Picks</p>
//             <h2 className="text-3xl font-extrabold text-white">Best Sellers</h2>
//           </div>
//           <button onClick={() => navigate("home")} className="text-sm font-semibold text-[#C6A15B] border border-[#C6A15B] rounded-full px-5 py-2 transition-all duration-200 hover:bg-[#C6A15B] hover:text-[#212121] hover:shadow-md">
//             View All →
//           </button>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-7">
//           {bestSellers.map((p) => <ProductCard key={p.id} product={p} dark />)}
//         </div>
//       </div>
//     </section>
//   );
// }

// function HowItWorksSection() {
//   const steps = [
//     { icon: "🔍", title: "Browse & Pick", desc: "Explore our curated collections by category, fabric, or occasion." },
//     { icon: "📦", title: "Easy Checkout", desc: "Pay with JazzCash, Easypaisa, card, or Cash on Delivery — your choice." },
//     { icon: "🚚", title: "Fast Delivery", desc: "Delivered anywhere in Pakistan within 3–5 business days." },
//     { icon: "↩️", title: "30-Day Returns", desc: "Not happy? Return within 30 days, no questions asked." },
//   ];
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
//       <div className="text-center mb-12">
//         <p className="text-xs font-bold uppercase tracking-widest text-[#1A3C34] mb-2">The Process</p>
//         <h2 className="text-3xl font-extrabold text-[#212121]">How Kurta Studio Works</h2>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
//         {steps.map((s, i) => (
//           <div key={s.title} className="flex flex-col items-center text-center gap-3">
//             <div className="w-16 h-16 rounded-2xl bg-[#E0F2F1] flex items-center justify-center text-3xl transition-all duration-300 hover:bg-[#1A3C34] group">
//               <span className="group-hover:scale-110 transition-transform duration-300 inline-block">{s.icon}</span>
//             </div>
//             <div className="w-6 h-6 rounded-full bg-[#1A3C34] text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</div>
//             <p className="font-bold text-sm text-[#212121]">{s.title}</p>
//             <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function TestimonialsSection() {
//   const reviews = [
//     { name: "Aiman R.", city: "Karachi", rating: 5, text: "Ordered the Peach Lawn Kurta for Eid and got so many compliments. Fabric is so soft and delivery was super fast!", avatar: "A" },
//     { name: "Bilal K.", city: "Lahore", rating: 4, text: "White Eid Edition kurta is exactly what I wanted. Great stitching, true to size, and Cash on Delivery made it so easy.", avatar: "B" },
//     { name: "Sana M.", city: "Islamabad", rating: 5, text: "Festive Teal Chiffon kurta arrived beautifully packaged. Quality is premium. Will definitely order again.", avatar: "S" },
//     { name: "Hassan A.", city: "Peshawar", rating: 5, text: "The Charcoal Slim-Fit is now my go-to for office days. Fabric doesn't wrinkle easily and fits perfectly.", avatar: "H" },
//   ];
//   return (
//     <section className="py-20 bg-[#F8F8F8]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="text-center mb-12">
//           <p className="text-xs font-bold uppercase tracking-widest text-[#1A3C34] mb-2">Reviews</p>
//           <h2 className="text-3xl font-extrabold text-[#212121]">What Our Customers Say</h2>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {reviews.map((r) => (
//             <div key={r.name} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
//               <Stars rating={r.rating} />
//               <p className="text-sm text-gray-700 leading-relaxed flex-1">"{r.text}"</p>
//               <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
//                 <div className="w-9 h-9 rounded-full bg-[#1A3C34] text-white text-sm font-bold flex items-center justify-center shrink-0">{r.avatar}</div>
//                 <div>
//                   <p className="text-sm font-semibold text-[#212121]">{r.name}</p>
//                   <p className="text-xs text-gray-400">{r.city}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function NewsletterSection() {
//   const [email, setEmail] = useState("");
//   const [sent, setSent] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email.trim()) return;
//     setSent(true);
//   };
//   return (
//     <section className="bg-[#1A3C34] py-20">
//       <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
//         <p className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-2">Stay in the loop</p>
//         <h2 className="text-3xl font-extrabold text-white mb-3">Get 10% Off Your First Order</h2>
//         <p className="text-teal-100 text-sm mb-8">New arrival alerts, styling tips, and exclusive offers — no spam, we promise.</p>
//         {sent ? (
//           <div className="bg-white/20 rounded-2xl py-6 text-white font-semibold" style={{ animation: "fadeIn 0.3s ease-out" }}>
//             🎉 You're in! Check your inbox for your discount code.
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto">
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="flex-1 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C6A15B] text-[#212121]" />
//             <button type="submit" className="bg-[#C6A15B] text-[#212121] font-bold rounded-full px-6 py-3 text-sm transition-all duration-300 hover:bg-[#FFC433] hover:scale-105 active:scale-95 shrink-0">Subscribe</button>
//           </form>
//         )}
//         <p className="text-xs text-teal-300 mt-5">Use code <span className="font-bold text-[#C6A15B]">EID10</span> at checkout for 10% off.</p>
//       </div>
//     </section>
//   );
// }

// function TrustStrip() {
//   return (
//     <section className="border-t border-gray-100 bg-white py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex flex-wrap items-center justify-center gap-8 text-center">
//           {[
//             { icon: "🔒", label: "Secure Payments" },
//             { icon: "🚚", label: "Free Shipping over Rs. 2,000" },
//             { icon: "↩️", label: "30-Day Returns" },
//             { icon: "📞", label: "Customer Support" },
//             { icon: "📦", label: "Cash on Delivery" },
//           ].map((t) => (
//             <div key={t.label} className="flex flex-col items-center gap-1.5 min-w-[80px] hover:-translate-y-1 transition-transform duration-300">
//               <span className="text-2xl">{t.icon}</span>
//               <span className="text-xs text-gray-500 font-medium">{t.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function HomePage() {
//   return (
//     <div>
//       <AnnouncementBar />
//       <HeroSection />
//       <StatsStrip />
//       <CategoryGrid />
//       <NewArrivalsSection />
//       <PromoBanner />
//       <BestSellersSection />
//       <WasimAkramBanner />
//       <SherwaniSection />
//       <AccessoriesSection />
//       <HowItWorksSection />
//       <TestimonialsSection />
//       <NewsletterSection />
//       <TrustStrip />
//     </div>
//   );
// }

// /* =========================================================
//    LISTING PAGE — with sticky filters + active filter chips
//    ========================================================= */
// function ActiveFilterChips({ filters, onRemoveColor, onRemoveSize, onClearPrice }) {
//   const chips = [
//     ...filters.colors.map((c) => ({ label: `Color: ${c}`, onRemove: () => onRemoveColor(c) })),
//     ...filters.sizes.map((s) => ({ label: `Size: ${s}`, onRemove: () => onRemoveSize(s) })),
//     ...(filters.maxPrice < 10000 ? [{ label: `Max: ${formatPKR(filters.maxPrice)}`, onRemove: onClearPrice }] : []),
//   ];
//   if (!chips.length) return null;
//   return (
//     <div className="flex flex-wrap gap-2 mb-5">
//       {chips.map((chip) => (
//         <span key={chip.label} className="inline-flex items-center gap-1.5 bg-[#E0F2F1] text-[#1A3C34] text-xs font-medium rounded-full px-3 py-1" style={{ animation: "fadeIn 0.2s ease-out" }}>
//           {chip.label}
//           <button type="button" onClick={chip.onRemove} className="hover:text-[#004D40] font-bold leading-none">×</button>
//         </span>
//       ))}
//     </div>
//   );
// }

// function ListingPage({ mode }) {
//   const { page, navigate } = useApp();
//   const [filters, setFilters] = useState({ colors: [], sizes: [], maxPrice: 10000 });
//   const [sort, setSort] = useState("popular");
//   const [filtersOpen, setFiltersOpen] = useState(false);

//   const categoryId = mode === "category" ? page.id : null;
//   const query = mode === "search" ? (page.query || "") : "";

//   const baseList = useMemo(() => {
//     let list = PRODUCTS;
//     if (categoryId) list = list.filter((p) => p.category === categoryId);
//     if (query) {
//       const q = query.toLowerCase();
//       if (q === "sale") list = list.filter((p) => p.salePrice);
//       else if (q === "new") list = list.filter((p) => p.isNew);
//       else list = list.filter((p) => p.name.toLowerCase().includes(q) || p.fabric.toLowerCase().includes(q) || p.colors.some((c) => c.toLowerCase().includes(q)));
//     }
//     return list;
//   }, [categoryId, query]);

//   const allColors = useMemo(() => Array.from(new Set(baseList.flatMap((p) => p.colors))).sort(), [baseList]);
//   const allSizes = useMemo(() => Array.from(new Set(baseList.flatMap((p) => p.sizes))).sort(), [baseList]);

//   const filtered = useMemo(() => {
//     let list = baseList.filter((p) => {
//       const ep = p.salePrice || p.price;
//       if (ep > filters.maxPrice) return false;
//       if (filters.colors.length && !p.colors.some((c) => filters.colors.includes(c))) return false;
//       if (filters.sizes.length && !p.sizes.some((s) => filters.sizes.includes(s))) return false;
//       return true;
//     });
//     switch (sort) {
//       case "price-asc": return [...list].sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
//       case "price-desc": return [...list].sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
//       case "newest": return [...list].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
//       default: return [...list].sort((a, b) => b.reviews - a.reviews);
//     }
//   }, [baseList, filters, sort]);

//   const toggleFilter = (key, value) => {
//     setFilters((prev) => {
//       const set = new Set(prev[key]);
//       set.has(value) ? set.delete(value) : set.add(value);
//       return { ...prev, [key]: Array.from(set) };
//     });
//   };
//   const clearFilters = () => setFilters({ colors: [], sizes: [], maxPrice: 10000 });

//   const title = mode === "category" ? CATEGORIES.find((c) => c.id === categoryId)?.label || "Products" : `Search: "${query}"`;
//   const breadcrumbItems = mode === "category"
//     ? [{ label: "Home", page: "home" }, { label: title }]
//     : [{ label: "Home", page: "home" }, { label: "Search" }];

//   const FilterPanel = () => (
//     <div className="space-y-7">
//       <fieldset>
//         <legend className="font-semibold text-sm mb-3">Price (max)</legend>
//         <input type="range" min="1000" max="10000" step="500" value={filters.maxPrice} onChange={(e) => setFilters((f) => ({ ...f, maxPrice: Number(e.target.value) }))} className="w-full accent-[#1A3C34]" />
//         <p className="text-xs text-gray-500 mt-1.5">Up to {formatPKR(filters.maxPrice)}</p>
//       </fieldset>
//       {allColors.length > 0 && (
//         <fieldset>
//           <legend className="font-semibold text-sm mb-3">Color</legend>
//           <div className="flex flex-col gap-2.5">
//             {allColors.map((color) => (
//               <label key={color} className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#1A3C34] transition-colors duration-150">
//                 <input type="checkbox" checked={filters.colors.includes(color)} onChange={() => toggleFilter("colors", color)} className="accent-[#1A3C34]" />
//                 <span className="w-3.5 h-3.5 rounded-full border border-gray-300 inline-block shrink-0" style={{ backgroundColor: COLOR_SWATCHES[color] || "#ccc" }} />
//                 {color}
//               </label>
//             ))}
//           </div>
//         </fieldset>
//       )}
//       {allSizes.length > 0 && (
//         <fieldset>
//           <legend className="font-semibold text-sm mb-3">Size</legend>
//           <div className="flex flex-wrap gap-2">
//             {allSizes.map((size) => (
//               <button key={size} type="button" onClick={() => toggleFilter("sizes", size)} aria-pressed={filters.sizes.includes(size)}
//                 className={`text-xs font-medium border rounded-md px-2.5 py-1.5 transition-all duration-200 hover:scale-105 ${filters.sizes.includes(size) ? "bg-[#1A3C34] text-white border-[#1A3C34]" : "border-gray-300 hover:border-[#1A3C34]"}`}>
//                 {size}
//               </button>
//             ))}
//           </div>
//         </fieldset>
//       )}
//       {(filters.colors.length > 0 || filters.sizes.length > 0 || filters.maxPrice < 10000) && (
//         <button onClick={clearFilters} className="text-sm text-[#1A3C34] hover:underline">Clear all filters</button>
//       )}
//     </div>
//   );

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
//       <Breadcrumbs items={breadcrumbItems} />
//       <div className="flex items-center justify-between mb-2">
//         <h1 className="text-2xl font-bold">{title}</h1>
//         {mode === "search" && <button onClick={() => navigate("home")} className="text-sm text-[#1A3C34] hover:underline transition-colors">Clear search</button>}
//       </div>
//       <p className="text-sm text-gray-500 mb-6">{filtered.length} product{filtered.length === 1 ? "" : "s"}</p>

//       {/* Mobile filter toggle */}
//       <button type="button" onClick={() => setFiltersOpen((o) => !o)} className="md:hidden border border-gray-300 rounded-full px-4 py-2 text-sm font-medium mb-4 hover:border-[#1A3C34] hover:text-[#1A3C34] transition-colors">
//         {filtersOpen ? "Hide Filters" : `Show Filters${filters.colors.length + filters.sizes.length > 0 ? ` (${filters.colors.length + filters.sizes.length})` : ""}`}
//       </button>

//       <ActiveFilterChips
//         filters={filters}
//         onRemoveColor={(c) => toggleFilter("colors", c)}
//         onRemoveSize={(s) => toggleFilter("sizes", s)}
//         onClearPrice={() => setFilters((f) => ({ ...f, maxPrice: 10000 }))}
//       />

//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Filter sidebar — sticky on desktop, collapsible on mobile */}
//         <aside className={`${filtersOpen ? "block" : "hidden"} md:block w-full md:w-52 shrink-0`}>
//           <div className="md:sticky md:top-24">
//             <FilterPanel />
//           </div>
//         </aside>

//         <div className="flex-1">
//           <div className="flex items-center justify-end mb-5">
//             <select value={sort} onChange={(e) => setSort(e.target.value)} className="border border-gray-200 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C34] hover:border-[#1A3C34] transition-colors bg-white">
//               <option value="popular">Most Popular</option>
//               <option value="price-asc">Price: Low to High</option>
//               <option value="price-desc">Price: High to Low</option>
//               <option value="newest">Newest</option>
//             </select>
//           </div>
//           {filtered.length === 0 ? (
//             <div className="text-center py-20">
//               <p className="text-lg font-semibold mb-4">No products found</p>
//               <button onClick={clearFilters} className="text-sm font-medium text-white bg-[#1A3C34] rounded-full px-6 py-2.5 hover:bg-[#00695C] transition-colors">Clear filters</button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-7">
//               {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    PRODUCT PAGE — sticky buy area + improved trust block
//    ========================================================= */
// function ProductPage() {
//   const { page, navigate, addToCart, wishlist, toggleWishlist } = useApp();
//   const product = PRODUCTS.find((p) => p.id === page.id);
//   const [activeImg, setActiveImg] = useState(0);
//   const [size, setSize] = useState(null);
//   const [color, setColor] = useState(null);
//   const [qty, setQty] = useState(1);
//   const [tab, setTab] = useState("description");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (product) { setActiveImg(0); setSize(null); setColor(product.colors[0]); setQty(1); setTab("description"); setError(""); }
//   }, [page.id]);

//   if (!product) return (
//     <div className="max-w-7xl mx-auto px-4 py-20 text-center">
//       <p className="text-lg font-semibold mb-4">Product not found.</p>
//       <button onClick={() => navigate("home")} className="text-[#1A3C34] hover:underline">Back to Home</button>
//     </div>
//   );

//   const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
//   const isWishlisted = wishlist.includes(product.id);
//   const categoryLabel = CATEGORIES.find((c) => c.id === product.category)?.label;

//   const handleColorChange = (c) => {
//     setColor(c);
//     if (product.colorImages && product.colorImages[c]) {
//       const idx = product.images.findIndex((img) => img === product.colorImages[c]);
//       setActiveImg(idx > -1 ? idx : 0);
//     }
//   };

//   const handleAddToCart = () => {
//     if (!size) { setError("Please select a size."); return; }
//     setError("");
//     addToCart(product, size, color, qty);
//   };

//   const mainImage = (product.colorImages && product.colorImages[color]) || product.images[activeImg];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
//       <Breadcrumbs items={[{ label: "Home", page: "home" }, { label: categoryLabel, page: "category", params: { id: product.category } }, { label: product.name }]} />
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
//         {/* Gallery */}
//         <div>
//           <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-[3/4] mb-3 shadow-sm">
//             <img key={mainImage} src={mainImage} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" style={{ animation: "fadeIn 0.3s ease-out" }} />
//           </div>
//           <div className="flex gap-2">
//             {product.images.map((img, idx) => (
//               <button key={idx} type="button" onClick={() => setActiveImg(idx)} className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${activeImg === idx ? "border-[#1A3C34]" : "border-transparent opacity-70 hover:opacity-100"}`}>
//                 <img src={img} alt="" className="w-full h-full object-cover" />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Buy area — sticky on desktop */}
//         <div className="md:sticky md:top-24 md:self-start">
//           <h1 className="text-2xl sm:text-3xl font-bold text-[#212121] mb-2">{product.name}</h1>
//           <div className="mb-3"><Stars rating={product.rating} count={product.reviews} /></div>
//           <div className="mb-5"><PriceTag price={product.price} salePrice={product.salePrice} size="lg" /></div>
//           <p className="text-sm text-gray-600 leading-relaxed mb-6">{product.description}</p>

//           <fieldset className="mb-5">
//             <legend className="text-sm font-semibold mb-2.5">Color: <span className="text-[#1A3C34]">{color}</span></legend>
//             <div className="flex flex-wrap gap-2">
//               {product.colors.map((c) => (
//                 <button key={c} type="button" onClick={() => handleColorChange(c)}
//                   className={`flex items-center gap-2 text-sm border rounded-full pl-1.5 pr-3 py-1 transition-all duration-200 hover:scale-105 ${color === c ? "border-[#1A3C34] bg-[#E0F2F1] text-[#1A3C34]" : "border-gray-300 hover:border-[#1A3C34]"}`}>
//                   <span className="w-4 h-4 rounded-full border border-gray-300 shrink-0" style={{ backgroundColor: COLOR_SWATCHES[c] || "#ccc" }} />
//                   {c}
//                 </button>
//               ))}
//             </div>
//           </fieldset>

//           <fieldset className="mb-5">
//             <legend className="text-sm font-semibold mb-2.5">Size</legend>
//             <div className="flex flex-wrap gap-2">
//               {product.sizes.map((s) => (
//                 <button key={s} type="button" onClick={() => { setSize(s); setError(""); }}
//                   className={`text-sm border rounded-lg w-12 h-10 font-medium transition-all duration-200 hover:scale-105 ${size === s ? "border-[#1A3C34] bg-[#E0F2F1] text-[#1A3C34]" : "border-gray-300 hover:border-[#1A3C34]"}`}>
//                   {s}
//                 </button>
//               ))}
//             </div>
//             {error && <p role="alert" className="text-sm text-red-600 mt-2" style={{ animation: "fadeIn 0.2s ease-out" }}>{error}</p>}
//           </fieldset>

//           <div className="mb-6">
//             <label className="text-sm font-semibold block mb-2.5">Quantity</label>
//             <div className="inline-flex items-center border border-gray-300 rounded-lg overflow-hidden">
//               <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-10 h-10 text-lg hover:bg-gray-100 transition-colors">−</button>
//               <span className="w-10 text-center text-sm font-medium">{qty}</span>
//               <button type="button" onClick={() => setQty((q) => q + 1)} className="w-10 h-10 text-lg hover:bg-gray-100 transition-colors">+</button>
//             </div>
//           </div>

//           <div className="flex gap-3 mb-6">
//             <button type="button" onClick={handleAddToCart} className="flex-1 bg-[#1A3C34] text-white font-semibold rounded-full py-3.5 transition-all duration-300 hover:bg-[#00695C] hover:shadow-lg active:scale-[0.98]">
//               Add to Cart
//             </button>
//             <button type="button" onClick={() => toggleWishlist(product.id)} className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full text-xl transition-all duration-200 hover:scale-110 hover:border-red-300">
//               <span className={isWishlisted ? "text-red-500" : "text-gray-400"}>{isWishlisted ? "♥" : "♡"}</span>
//             </button>
//           </div>

//           {/* Trust block */}
//           <div className="bg-[#F8F8F8] rounded-xl p-4 grid grid-cols-3 gap-3 mb-6">
//             <div className="text-center">
//               <p className="text-base mb-1">🚚</p>
//               <p className="text-xs text-gray-600 font-medium">Free shipping<br /><span className="text-gray-400">over Rs. 2,000</span></p>
//             </div>
//             <div className="text-center border-x border-gray-200">
//               <p className="text-base mb-1">↩️</p>
//               <p className="text-xs text-gray-600 font-medium">30-day<br /><span className="text-gray-400">returns</span></p>
//             </div>
//             <div className="text-center">
//               <p className="text-base mb-1">📦</p>
//               <p className="text-xs text-gray-600 font-medium">Cash on<br /><span className="text-gray-400">Delivery</span></p>
//             </div>
//           </div>

//           {/* Tabs */}
//           <div>
//             <div role="tablist" className="flex gap-4 border-b border-gray-200">
//               {[{ id: "description", label: "Description" }, { id: "care", label: "Fabric & Care" }, { id: "reviews", label: `Reviews (${product.reviews})` }].map((t) => (
//                 <button key={t.id} role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)}
//                   className={`pb-2.5 text-sm font-medium border-b-2 -mb-px transition-colors duration-200 ${tab === t.id ? "border-[#1A3C34] text-[#1A3C34]" : "border-transparent text-gray-400 hover:text-[#1A3C34]"}`}>
//                   {t.label}
//                 </button>
//               ))}
//             </div>
//             <div className="py-5 text-sm text-gray-600 leading-relaxed" style={{ animation: "fadeIn 0.2s ease-out" }}>
//               {tab === "description" && <p>{product.description} Fabric: {product.fabric}.</p>}
//               {tab === "care" && <p>{product.care}</p>}
//               {tab === "reviews" && (
//                 <div>
//                   <div className="flex items-center gap-2 mb-4"><Stars rating={product.rating} /><span className="text-gray-500">based on {product.reviews} reviews</span></div>
//                   <div className="space-y-4">
//                     <div className="border-t border-gray-100 pt-4"><p className="font-medium text-[#212121]">Aiman R.</p><Stars rating={5} /><p className="mt-1 text-gray-600">Lovely fabric and true to size.</p></div>
//                     <div className="border-t border-gray-100 pt-4"><p className="font-medium text-[#212121]">Bilal K.</p><Stars rating={4} /><p className="mt-1 text-gray-600">Good quality for the price. Delivery took 4 days.</p></div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {related.length > 0 && (
//         <section className="mt-16">
//           <h2 className="text-xl font-bold mb-7">You might also like</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-7">
//             {related.map((p) => <ProductCard key={p.id} product={p} />)}
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }

// /* =========================================================
//    CART PAGE
//    ========================================================= */
// function CartPage() {
//   const { cart, updateQty, removeFromCart, navigate } = useApp();
//   const [coupon, setCoupon] = useState("");
//   const [couponMsg, setCouponMsg] = useState(null);
//   const [appliedDiscount, setAppliedDiscount] = useState(0);
//   const items = cart.map((item) => { const p = PRODUCTS.find((p) => p.id === item.id); return p ? { ...item, product: p } : null; }).filter(Boolean);
//   const subtotal = items.reduce((sum, i) => sum + (i.product.salePrice || i.product.price) * i.qty, 0);
//   const shipping = subtotal === 0 || subtotal >= 2000 ? 0 : 150;
//   const discount = appliedDiscount ? Math.round(subtotal * appliedDiscount) : 0;
//   const total = subtotal - discount + shipping;

//   const applyCoupon = (e) => {
//     e.preventDefault();
//     const code = coupon.trim().toUpperCase();
//     if (code === "EID10") { setAppliedDiscount(0.1); setCouponMsg({ type: "success", text: "Coupon applied! 10% off." }); }
//     else if (!code) setCouponMsg({ type: "error", text: "Please enter a coupon code." });
//     else { setAppliedDiscount(0); setCouponMsg({ type: "error", text: "Invalid coupon code." }); }
//   };

//   if (items.length === 0) return (
//     <div className="max-w-3xl mx-auto px-4 py-24 text-center">
//       <p className="text-5xl mb-5">🛍️</p>
//       <h1 className="text-xl font-bold mb-2">Your cart is empty</h1>
//       <p className="text-sm text-gray-500 mb-6">Browse our collection and find something you love.</p>
//       <button onClick={() => navigate("home")} className="bg-[#1A3C34] text-white font-semibold rounded-full px-7 py-3 hover:bg-[#00695C] hover:scale-105 transition-all duration-300">Shop Kurtas</button>
//     </div>
//   );

//   return (
//     <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
//       <Breadcrumbs items={[{ label: "Home", page: "home" }, { label: "Cart" }]} />
//       <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
//       {subtotal > 0 && subtotal < 2000 && (
//         <div className="bg-[#FFF6E0] text-sm text-[#212121] rounded-xl px-4 py-3 mb-7" style={{ animation: "fadeIn 0.3s ease-out" }}>
//           Add {formatPKR(2000 - subtotal)} more for free shipping!
//         </div>
//       )}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2 space-y-5">
//           {items.map((item) => (
//             <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4 border-b border-gray-100 pb-5">
//               <img src={item.product.images[0]} alt={item.product.name} className="w-20 h-24 object-cover rounded-xl" />
//               <div className="flex-1 min-w-0">
//                 <p className="font-semibold text-sm text-[#212121]">{item.product.name}</p>
//                 <p className="text-xs text-gray-500 mt-1">Size: {item.size} · Color: {item.color}</p>
//                 <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
//                   <div className="inline-flex items-center border border-gray-200 rounded-lg overflow-hidden">
//                     <button type="button" onClick={() => updateQty(item.id, item.size, item.color, item.qty - 1)} className="w-8 h-8 text-base hover:bg-gray-100 transition-colors">−</button>
//                     <span className="w-8 text-center text-sm">{item.qty}</span>
//                     <button type="button" onClick={() => updateQty(item.id, item.size, item.color, item.qty + 1)} className="w-8 h-8 text-base hover:bg-gray-100 transition-colors">+</button>
//                   </div>
//                   <button type="button" onClick={() => removeFromCart(item.id, item.size, item.color)} className="text-xs text-red-500 hover:underline">Remove</button>
//                 </div>
//               </div>
//               <div className="text-right shrink-0">
//                 <PriceTag price={item.product.price * item.qty} salePrice={item.product.salePrice ? item.product.salePrice * item.qty : null} />
//               </div>
//             </div>
//           ))}
//           <button onClick={() => navigate("home")} className="text-sm font-medium text-[#1A3C34] hover:underline">← Continue Shopping</button>
//         </div>
//         <div className="border border-gray-200 rounded-2xl p-5 h-fit shadow-sm">
//           <h2 className="font-bold mb-4">Order Summary</h2>
//           <form onSubmit={applyCoupon} className="mb-4">
//             <div className="flex gap-2">
//               <input id="coupon" type="text" value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Try EID10" className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C34] bg-gray-50" />
//               <button type="submit" className="border border-[#1A3C34] text-[#1A3C34] font-medium rounded-lg px-4 text-sm hover:bg-[#1A3C34] hover:text-white transition-all duration-200">Apply</button>
//             </div>
//             {couponMsg && <p role="alert" className={`text-xs mt-2 ${couponMsg.type === "success" ? "text-[#1A3C34]" : "text-red-600"}`} style={{ animation: "fadeIn 0.2s ease-out" }}>{couponMsg.text}</p>}
//           </form>
//           <dl className="space-y-2.5 text-sm">
//             <div className="flex justify-between"><dt className="text-gray-500">Subtotal</dt><dd>{formatPKR(subtotal)}</dd></div>
//             {discount > 0 && <div className="flex justify-between text-[#1A3C34]"><dt>Discount</dt><dd>−{formatPKR(discount)}</dd></div>}
//             <div className="flex justify-between"><dt className="text-gray-500">Shipping</dt><dd>{shipping === 0 ? <span className="text-[#1A3C34]">Free</span> : formatPKR(shipping)}</dd></div>
//             <div className="flex justify-between font-bold text-base border-t border-gray-200 pt-3 mt-1"><dt>Total</dt><dd>{formatPKR(total)}</dd></div>
//           </dl>
//           <button type="button" onClick={() => navigate("checkout")} className="w-full mt-5 bg-[#1A3C34] text-white font-semibold rounded-full py-3 hover:bg-[#00695C] hover:shadow-lg transition-all duration-300 active:scale-[0.98]">
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    CHECKOUT PAGE
//    ========================================================= */
// function CheckoutPage() {
//   const { cart, navigate, placeOrder, user } = useApp();
//   const [step, setStep] = useState(1);
//   const [form, setForm] = useState({ name: user?.name || "", email: user?.email || "", phone: "", address: "", city: "", postalCode: "", country: "Pakistan", payment: "cod" });
//   const [errors, setErrors] = useState({});
//   const [confirmedOrder, setConfirmedOrder] = useState(null);
//   const items = cart.map((item) => { const p = PRODUCTS.find((p) => p.id === item.id); return p ? { ...item, product: p } : null; }).filter(Boolean);
//   const subtotal = items.reduce((sum, i) => sum + (i.product.salePrice || i.product.price) * i.qty, 0);
//   const shipping = subtotal === 0 || subtotal >= 2000 ? 0 : 150;
//   const total = subtotal + shipping;

//   const validateShipping = () => {
//     const e = {};
//     if (!form.name.trim()) e.name = "Please enter your full name.";
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address.";
//     if (!/^03\d{9}$/.test(form.phone.replace(/[\s-]/g, ""))) e.phone = "Please enter a valid phone number, e.g. 03001234567.";
//     if (!form.address.trim()) e.address = "Please enter your street address.";
//     if (!form.city.trim()) e.city = "Please enter your city.";
//     if (!/^\d{5}$/.test(form.postalCode)) e.postalCode = "Postal code must be 5 digits.";
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const handleField = (key, value) => setForm((f) => ({ ...f, [key]: value }));
//   const goToPayment = (e) => { e.preventDefault(); if (validateShipping()) setStep(2); };
//   const placeOrderHandler = (e) => { e.preventDefault(); const order = placeOrder({ ...form, total }); setConfirmedOrder(order); setStep(3); };

//   if (items.length === 0 && !confirmedOrder) return (
//     <div className="max-w-3xl mx-auto px-4 py-20 text-center">
//       <p className="text-lg font-semibold mb-2">Your cart is empty</p>
//       <button onClick={() => navigate("home")} className="text-[#1A3C34] hover:underline">Continue shopping</button>
//     </div>
//   );

//   if (step === 3 && confirmedOrder) return (
//     <div className="max-w-2xl mx-auto px-4 py-20 text-center" style={{ animation: "fadeIn 0.4s ease-out" }}>
//       <p className="text-5xl mb-5" style={{ animation: "popIn 0.4s ease-out" }}>✅</p>
//       <h1 className="text-2xl font-bold mb-2">Thank you, {confirmedOrder.name}!</h1>
//       <p className="text-sm text-gray-600 mb-1">Order <span className="font-semibold text-[#1A3C34]">#{confirmedOrder.id}</span> placed successfully.</p>
//       <p className="text-sm text-gray-500 mb-8">Confirmation sent to {confirmedOrder.email}. Estimated delivery: 3–5 business days.</p>
//       <div className="flex justify-center gap-6">
//         <button onClick={() => navigate("account", { tab: "orders" })} className="text-sm font-semibold text-[#1A3C34] border border-[#1A3C34] rounded-full px-5 py-2 hover:bg-[#1A3C34] hover:text-white transition-all duration-200">View my orders</button>
//         <button onClick={() => navigate("home")} className="text-sm font-semibold bg-[#1A3C34] text-white rounded-full px-5 py-2 hover:bg-[#00695C] transition-all duration-200">Continue shopping</button>
//       </div>
//     </div>
//   );

//   const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1A3C34] focus:bg-white transition-all duration-200";

//   return (
//     <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
//       <Breadcrumbs items={[{ label: "Home", page: "home" }, { label: "Cart", page: "cart" }, { label: "Checkout" }]} />
//       <h1 className="text-2xl font-bold mb-6">Checkout</h1>
//       <ol className="flex items-center gap-4 mb-8 text-sm font-medium">
//         <li className={step >= 1 ? "text-[#1A3C34]" : "text-gray-400"}>1. Shipping</li>
//         <li className="text-gray-200">—</li>
//         <li className={step >= 2 ? "text-[#1A3C34]" : "text-gray-400"}>2. Payment & Review</li>
//       </ol>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           {step === 1 && (
//             <form onSubmit={goToPayment} className="space-y-4" style={{ animation: "fadeIn 0.25s ease-out" }} noValidate>
//               <h2 className="font-bold text-lg mb-3">Shipping Information</h2>
//               {[["name", "Full Name", "text", "name"], ["email", "Email", "email", "email"], ["phone", "Phone", "tel", "tel"], ["address", "Street Address", "text", "street-address"]].map(([key, label, type, auto]) => (
//                 <div key={key}>
//                   <label htmlFor={key} className="text-sm font-medium block mb-1.5">{label}</label>
//                   <input id={key} type={type} autoComplete={auto} value={form[key]} onChange={(e) => handleField(key, e.target.value)} className={inputClass} />
//                   {errors[key] && <p role="alert" className="text-xs text-red-600 mt-1" style={{ animation: "fadeIn 0.2s ease-out" }}>{errors[key]}</p>}
//                 </div>
//               ))}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="city" className="text-sm font-medium block mb-1.5">City</label>
//                   <input id="city" type="text" value={form.city} onChange={(e) => handleField("city", e.target.value)} className={inputClass} />
//                   {errors.city && <p role="alert" className="text-xs text-red-600 mt-1">{errors.city}</p>}
//                 </div>
//                 <div>
//                   <label htmlFor="postalCode" className="text-sm font-medium block mb-1.5">Postal Code</label>
//                   <input id="postalCode" type="text" inputMode="numeric" value={form.postalCode} onChange={(e) => handleField("postalCode", e.target.value)} className={inputClass} />
//                   {errors.postalCode && <p role="alert" className="text-xs text-red-600 mt-1">{errors.postalCode}</p>}
//                 </div>
//               </div>
//               <button type="submit" className="bg-[#1A3C34] text-white font-semibold rounded-full px-7 py-3 hover:bg-[#00695C] hover:shadow-lg transition-all duration-300 active:scale-[0.98]">Continue to Payment</button>
//             </form>
//           )}
//           {step === 2 && (
//             <form onSubmit={placeOrderHandler} className="space-y-4" style={{ animation: "fadeIn 0.25s ease-out" }} noValidate>
//               <h2 className="font-bold text-lg mb-3">Payment Method</h2>
//               <fieldset className="space-y-2.5">
//                 {[
//                   { id: "jazzcash", label: "JazzCash", hint: "Pay via JazzCash mobile wallet" },
//                   { id: "easypaisa", label: "Easypaisa", hint: "Pay via Easypaisa mobile wallet" },
//                   { id: "card", label: "Credit / Debit Card", hint: "Visa, Mastercard" },
//                   { id: "cod", label: "Cash on Delivery", hint: "Pay when your order arrives" },
//                 ].map((opt) => (
//                   <label key={opt.id} className={`flex items-start gap-3 border rounded-xl p-4 cursor-pointer transition-all duration-200 hover:border-[#1A3C34] ${form.payment === opt.id ? "border-[#1A3C34] bg-[#E0F2F1]" : "border-gray-200"}`}>
//                     <input type="radio" name="payment" value={opt.id} checked={form.payment === opt.id} onChange={() => handleField("payment", opt.id)} className="mt-0.5 accent-[#1A3C34]" />
//                     <span>
//                       <span className="block font-medium text-sm">{opt.label}</span>
//                       <span className="block text-xs text-gray-500 mt-0.5">{opt.hint}</span>
//                     </span>
//                   </label>
//                 ))}
//               </fieldset>
//               <div className="flex items-center gap-4 pt-2">
//                 <button type="button" onClick={() => setStep(1)} className="text-sm font-medium text-[#1A3C34] hover:underline">← Back</button>
//                 <button type="submit" className="ml-auto bg-[#1A3C34] text-white font-semibold rounded-full px-7 py-3 hover:bg-[#00695C] hover:shadow-lg transition-all duration-300 active:scale-[0.98]">Place Order</button>
//               </div>
//             </form>
//           )}
//         </div>
//         <div className="border border-gray-200 rounded-2xl p-5 h-fit shadow-sm">
//           <h2 className="font-bold mb-4">Order Summary</h2>
//           <div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
//             {items.map((item) => (
//               <div key={`${item.id}-${item.size}-${item.color}`} className="flex justify-between text-sm gap-2">
//                 <span className="line-clamp-1 text-gray-600">{item.product.name} ({item.size}) × {item.qty}</span>
//                 <span className="shrink-0 font-medium">{formatPKR((item.product.salePrice || item.product.price) * item.qty)}</span>
//               </div>
//             ))}
//           </div>
//           <dl className="space-y-2.5 text-sm border-t border-gray-200 pt-3">
//             <div className="flex justify-between"><dt className="text-gray-500">Subtotal</dt><dd>{formatPKR(subtotal)}</dd></div>
//             <div className="flex justify-between"><dt className="text-gray-500">Shipping</dt><dd>{shipping === 0 ? <span className="text-[#1A3C34]">Free</span> : formatPKR(shipping)}</dd></div>
//             <div className="flex justify-between font-bold text-base border-t border-gray-200 pt-2.5 mt-1"><dt>Total</dt><dd>{formatPKR(total)}</dd></div>
//           </dl>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    ACCOUNT PAGE
//    ========================================================= */
// function AccountPage() {
//   const { user, setUser, orders, wishlist, navigate, page, showToast } = useApp();
//   const [tab, setTab] = useState(page.tab || "profile");
//   const [authMode, setAuthMode] = useState("login");
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const [addresses, setAddresses] = useState([{ id: 1, label: "Home", line: "House 12, Street 4, F-8", city: "Islamabad", postalCode: "44000" }]);
//   const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1A3C34] focus:bg-white transition-all duration-200";

//   if (!user) {
//     const validate = () => {
//       const e = {};
//       if (authMode === "signup" && !form.name.trim()) e.name = "Please enter your full name.";
//       if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address.";
//       if (form.password.length < 6) e.password = "Password must be at least 6 characters.";
//       setErrors(e);
//       return Object.keys(e).length === 0;
//     };
//     const handleSubmit = (e) => { e.preventDefault(); if (!validate()) return; setUser({ name: form.name || form.email.split("@")[0], email: form.email }); showToast(authMode === "login" ? "Signed in" : "Account created"); };
//     return (
//       <div className="max-w-md mx-auto px-4 py-14">
//         <h1 className="text-2xl font-bold mb-7">{authMode === "login" ? "Sign In" : "Create Account"}</h1>
//         <form onSubmit={handleSubmit} className="space-y-4" noValidate>
//           {authMode === "signup" && (
//             <div style={{ animation: "fadeIn 0.2s ease-out" }}>
//               <label htmlFor="acc-name" className="text-sm font-medium block mb-1.5">Full Name</label>
//               <input id="acc-name" type="text" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className={inputClass} />
//               {errors.name && <p role="alert" className="text-xs text-red-600 mt-1">{errors.name}</p>}
//             </div>
//           )}
//           <div>
//             <label htmlFor="acc-email" className="text-sm font-medium block mb-1.5">Email</label>
//             <input id="acc-email" type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className={inputClass} />
//             {errors.email && <p role="alert" className="text-xs text-red-600 mt-1">{errors.email}</p>}
//           </div>
//           <div>
//             <label htmlFor="acc-password" className="text-sm font-medium block mb-1.5">Password</label>
//             <input id="acc-password" type="password" value={form.password} onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))} className={inputClass} />
//             {errors.password && <p role="alert" className="text-xs text-red-600 mt-1">{errors.password}</p>}
//           </div>
//           <button type="submit" className="w-full bg-[#1A3C34] text-white font-semibold rounded-full py-3 hover:bg-[#00695C] hover:shadow-lg transition-all duration-300 active:scale-[0.98]">
//             {authMode === "login" ? "Sign In" : "Create Account"}
//           </button>
//         </form>
//         <p className="text-sm text-gray-500 mt-5 text-center">
//           {authMode === "login" ? "New here?" : "Already have an account?"}{" "}
//           <button onClick={() => { setAuthMode(authMode === "login" ? "signup" : "login"); setErrors({}); }} className="text-[#1A3C34] font-medium hover:underline">
//             {authMode === "login" ? "Create an account" : "Sign in"}
//           </button>
//         </p>
//       </div>
//     );
//   }

//   const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));
//   const tabs = [{ id: "profile", label: "Profile" }, { id: "addresses", label: "Addresses" }, { id: "orders", label: "Orders" }, { id: "wishlist", label: "Wishlist" }];

//   return (
//     <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
//       <h1 className="text-2xl font-bold mb-7">My Account</h1>
//       <div className="flex flex-col md:flex-row gap-8">
//         <nav className="flex md:flex-col gap-1 md:w-48 shrink-0 overflow-x-auto">
//           {tabs.map((t) => (
//             <button key={t.id} onClick={() => setTab(t.id)} className={`text-left text-sm font-medium px-4 py-2.5 rounded-xl whitespace-nowrap transition-colors duration-200 ${tab === t.id ? "bg-[#E0F2F1] text-[#1A3C34]" : "text-[#212121] hover:bg-gray-100"}`}>
//               {t.label}
//             </button>
//           ))}
//           <button onClick={() => { setUser(null); navigate("home"); }} className="text-left text-sm font-medium px-4 py-2.5 rounded-xl text-red-500 hover:bg-red-50 transition-colors duration-200">
//             Sign Out
//           </button>
//         </nav>
//         <div className="flex-1" style={{ animation: "fadeIn 0.25s ease-out" }}>
//           {tab === "profile" && (
//             <form className="space-y-4 max-w-sm" onSubmit={(e) => { e.preventDefault(); showToast("Profile updated"); }}>
//               <h2 className="font-bold text-lg mb-3">Profile</h2>
//               <div><label className="text-sm font-medium block mb-1.5">Name</label><input type="text" defaultValue={user.name} className={inputClass} /></div>
//               <div><label className="text-sm font-medium block mb-1.5">Email</label><input type="email" defaultValue={user.email} className={inputClass} /></div>
//               <button type="submit" className="bg-[#1A3C34] text-white font-semibold rounded-full px-6 py-2.5 hover:bg-[#00695C] hover:shadow-md transition-all duration-300">Save Changes</button>
//             </form>
//           )}
//           {tab === "addresses" && (
//             <div>
//               <h2 className="font-bold text-lg mb-5">Saved Addresses</h2>
//               <div className="space-y-3 mb-5">
//                 {addresses.map((addr) => (
//                   <div key={addr.id} className="border border-gray-200 rounded-xl p-4 flex justify-between items-start hover:shadow-sm transition-shadow duration-200">
//                     <div className="text-sm"><p className="font-semibold">{addr.label}</p><p className="text-gray-500 mt-0.5">{addr.line}, {addr.city}, {addr.postalCode}</p></div>
//                     <button onClick={() => setAddresses((a) => a.filter((x) => x.id !== addr.id))} className="text-xs text-red-500 hover:underline">Delete</button>
//                   </div>
//                 ))}
//                 {addresses.length === 0 && <p className="text-sm text-gray-500">No saved addresses.</p>}
//               </div>
//               <button onClick={() => setAddresses((a) => [...a, { id: Date.now(), label: "New Address", line: "Street address", city: "Karachi", postalCode: "75000" }])} className="text-sm font-medium border border-[#1A3C34] text-[#1A3C34] rounded-full px-5 py-2 hover:bg-[#1A3C34] hover:text-white transition-all duration-200">
//                 + Add New Address
//               </button>
//             </div>
//           )}
//           {tab === "orders" && (
//             <div>
//               <h2 className="font-bold text-lg mb-5">Order History</h2>
//               {orders.length === 0 ? (
//                 <p className="text-sm text-gray-500">No orders yet.</p>
//               ) : (
//                 <table className="w-full text-sm">
//                   <thead><tr className="text-left text-gray-400 text-xs uppercase tracking-wide border-b border-gray-200"><th className="pb-3 pr-4">Order #</th><th className="pb-3 pr-4">Date</th><th className="pb-3 pr-4">Status</th><th className="pb-3">Total</th></tr></thead>
//                   <tbody>
//                     {orders.map((o) => (
//                       <tr key={o.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
//                         <td className="py-3 pr-4 font-medium text-[#1A3C34]">{o.id}</td>
//                         <td className="py-3 pr-4 text-gray-500">{o.date}</td>
//                         <td className="py-3 pr-4"><span className="bg-[#FFF6E0] text-[#8C6D3F] text-xs font-medium rounded-full px-2.5 py-1">{o.status}</span></td>
//                         <td className="py-3 font-medium">{formatPKR(o.total)}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}
//             </div>
//           )}
//           {tab === "wishlist" && (
//             <div>
//               <h2 className="font-bold text-lg mb-5">Wishlist</h2>
//               {wishlistProducts.length === 0 ? (
//                 <p className="text-sm text-gray-500">No items saved yet.</p>
//               ) : (
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">{wishlistProducts.map((p) => <ProductCard key={p.id} product={p} />)}</div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function AboutPage() {
//   return (
//     <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
//       <Breadcrumbs items={[{ label: "Home", page: "home" }, { label: "About Us" }]} />
//       <h1 className="text-2xl font-bold mb-5">About Kurta Studio</h1>
//       <p className="text-sm text-gray-600 mb-4 leading-relaxed">Kurta Studio brings together modern silhouettes and traditional craftsmanship, with a focus on fabrics suited to Pakistan's climate and occasions.</p>
//       <p className="text-sm text-gray-600 leading-relaxed">Every order ships nationwide with Cash on Delivery, JazzCash, Easypaisa, and card options at checkout, and comes with a 30-day return policy.</p>
//     </div>
//   );
// }

// function FaqPage() {
//   const faqs = [
//     { q: "What payment methods do you accept?", a: "We accept JazzCash, Easypaisa, major credit/debit cards, and Cash on Delivery." },
//     { q: "How long does delivery take?", a: "Orders are typically delivered within 3–5 business days across Pakistan." },
//     { q: "What is your return policy?", a: "Items can be returned within 30 days of delivery in original condition with tags attached." },
//     { q: "Do you ship internationally?", a: "Currently we ship within Pakistan only. International shipping is coming soon." },
//   ];
//   return (
//     <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
//       <Breadcrumbs items={[{ label: "Home", page: "home" }, { label: "FAQs" }]} />
//       <h1 className="text-2xl font-bold mb-7">Frequently Asked Questions</h1>
//       <div className="space-y-3">
//         {faqs.map((f, idx) => (
//           <details key={idx} className="border border-gray-200 rounded-xl p-4 hover:border-[#1A3C34] transition-colors duration-200">
//             <summary className="font-medium cursor-pointer text-sm">{f.q}</summary>
//             <p className="text-sm text-gray-600 mt-3 leading-relaxed">{f.a}</p>
//           </details>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    ROUTER
//    ========================================================= */
// function PageRouter() {
//   const { page } = useApp();
//   switch (page.name) {
//     case "home": return <HomePage />;
//     case "category": return <ListingPage mode="category" />;
//     case "search": return <ListingPage mode="search" />;
//     case "product": return <ProductPage />;
//     case "cart": return <CartPage />;
//     case "checkout": return <CheckoutPage />;
//     case "account": return <AccountPage />;
//     case "about": return <AboutPage />;
//     case "faq": return <FaqPage />;
//     default: return <HomePage />;
//   }
// }

// export default function App() {
//   return (
//     <AppProvider>
//       <GlobalStyles />
//       <div className="min-h-screen flex flex-col bg-white text-[#212121] font-sans">
//         <Header />
//         <main className="flex-1">
//           <PageRouter />
//         </main>
//         <Footer />
//         <Toast />
//         <QuickViewModal />
//       </div>
//     </AppProvider>
//   );
// }


import React, { useState, useMemo, useContext, createContext, useEffect, useRef, useCallback } from "react";
import storeData from "./Data.json";
import { api, getToken, setToken, clearToken } from "./lib/api";

/* =========================================================
   DESIGN TOKENS — Bazaro Fashion V2 inspired
   Primary: Deep Teal #1A3C34  |  Accent: Marigold #C6A15B
   Base: #FFFFFF / #F2EEE6     |  Dark: #111111 / #1a1a1a
   Serif display, clean editorial grid, luxury fashion feel
   ========================================================= */

/* =========================================================
   ALL PRODUCT / CONTENT DATA NOW LIVES IN data.json
   Edit prices, add products, swap banners, etc. there —
   no code changes needed.
   ========================================================= */
const {
  slides: SLIDES,
  categories: CATEGORIES,
  colorSwatches: COLOR_SWATCHES,
  banners: BANNERS_DATA,
  shopTheLook: LOOK_DATA,
  showcaseCarousel: CAROUSEL_ITEMS,
  testimonials: TESTIMONIALS,
  faqs: FAQS,
  products: PRODUCTS,
} = storeData;

const formatPKR = (n) => new Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR", maximumFractionDigits: 0 }).format(n);

/* Swaps a broken product photo for a blank transparent image instead of the
   browser's broken-icon + overflowing alt text, so a missing asset just
   shows the element's own background color. */
const BLANK_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E";
const onImgError = (e) => { e.currentTarget.onerror = null; e.currentTarget.src = BLANK_IMG; };

/* Rotating backdrop for the sign in / create account / reset password screen */
const AUTH_BG_IMAGES = ["/product/pro9-1.jpeg", "/product/pro11-1.jpeg", "/product/pro13-1.jpeg", "/product/pro2-1.jpeg"];

/* Size-based price & image helpers */
const getSizePrice = (product, size) => {
  if (product.sizePrices && size && product.sizePrices[size] != null) return product.sizePrices[size];
  return product.salePrice ?? product.price;
};
const getSizeImages = (product, size) => {
  if (product.sizeImages && size && product.sizeImages[size]?.length) return product.sizeImages[size];
  return product.images || [];
};
const getMinSizePrice = (product) => {
  if (product.sizePrices) return Math.min(...Object.values(product.sizePrices));
  return product.salePrice ?? product.price;
};

/* Shared form styles used across auth / profile / address forms */
const labelStyle = { fontSize:10, letterSpacing:"0.15em", textTransform:"uppercase", fontWeight:600, color:"#96917E", display:"block", marginBottom:6 };
const errStyle = { fontSize:11, color:"#B3372B", marginTop:3 };

/* Thin-stroke line icons — replaces emoji for a more refined look */
function LineIcon({ name, size=18, color="currentColor", strokeWidth=1.4, style }) {
  const paths = {
    search: <><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.8-4.8"/></>,
    heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>,
    bag: <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></>,
    truck: <><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8Z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
    returns: <><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></>,
    box: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="M3.27 6.96 12 12.01l8.73-5.05"/><path d="M12 22.08V12"/></>,
    lock: <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.22a2 2 0 0 1 2.11-.45c.84.31 1.73.53 2.63.65A2 2 0 0 1 22 16.92Z"/>,
    check: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m22 4-10 10.01-3-3"/></>,
    card: <><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></>,
    ticket: <><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></>,
    package: <><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="M3.27 6.96 12 12.01l8.73-5.05"/><path d="M12 22.08V12"/></>,
    pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

/* =========================================================  GLOBAL STYLES  ========================================================= */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    /* Belt-and-braces: the 3D showcase carousel (perspective + translateZ cards
       in a max-content flex track) can escape its own overflow:hidden in Chrome,
       which widens the page's layout viewport and breaks position:fixed;right:0
       elements (the mobile nav drawer) elsewhere on the page. Clamping scroll at
       the document root keeps that contained regardless of what any one section does. */
    html, body { overflow-x: hidden; max-width: 100%; }
    body { font-family: 'Inter', sans-serif; color: #1D1C18; background: #FBF9F4; -webkit-font-smoothing: antialiased; }
    ::selection { background:#1A3C34; color:#F6F3ED; }

    .font-serif { font-family: 'Cormorant Garamond', Georgia, serif; }

    @keyframes fadeIn { from{opacity:0} to{opacity:1} }
    @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    @keyframes slideDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
    @keyframes popIn { 0%{transform:scale(0)} 70%{transform:scale(1.2)} 100%{transform:scale(1)} }
    @keyframes toastIn { from{opacity:0;transform:translate(-50%,10px)} to{opacity:1;transform:translate(-50%,0)} }
    @keyframes drawerIn { from{transform:translateX(100%)} to{transform:translateX(0)} }
    @keyframes modalIn { from{opacity:0;transform:scale(0.97)} to{opacity:1;transform:scale(1)} }
    @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    @media (prefers-reduced-motion:reduce) { *{animation-duration:0.01ms!important;transition-duration:0.01ms!important} }

    .line-clamp-1 { overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical }
    .line-clamp-2 { overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical }

    input[type=range] { accent-color:#1A3C34; }
    input[type=checkbox] { accent-color:#1A3C34; }
    input[type=radio] { accent-color:#1A3C34; }

    ::-webkit-scrollbar { width:4px; }
    ::-webkit-scrollbar-track { background:#F2EEE6; }
    ::-webkit-scrollbar-thumb { background:#C8BFA9;border-radius:2px; }
    ::-webkit-scrollbar-thumb:hover { background:#A9885A; }

    .product-card-img { transition: transform 0.6s ease; }
    .product-card:hover .product-card-img { transform: scale(1.06); }
    .product-card-actions { transform: translateY(100%); transition: transform 0.3s ease; }
    .product-card:hover .product-card-actions { transform: translateY(0); }

    .nav-link { position:relative; }
    .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:#A9885A; transition:width 0.3s ease; }
    .nav-link:hover::after, .nav-link.active::after { width:100%; }

    .btn-primary { background:#1D1C18; color:#F6F3ED; border:1px solid #1D1C18; padding:14px 36px; font-size:11px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; cursor:pointer; transition:all 0.3s ease; display:inline-flex;align-items:center;gap:10px; }
    .btn-primary:hover { background:transparent; color:#1D1C18; }
    .btn-outline { background:transparent; color:#1D1C18; border:1px solid #1D1C18; padding:14px 36px; font-size:11px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; cursor:pointer; transition:all 0.3s ease; display:inline-flex;align-items:center;gap:10px; }
    .btn-outline:hover { background:#1D1C18; color:#F6F3ED; }
    .btn-teal { background:#1A3C34; color:#F6F3ED; border:1px solid #1A3C34; padding:14px 36px; font-size:11px; font-weight:500; letter-spacing:0.22em; text-transform:uppercase; cursor:pointer; transition:all 0.3s ease; }
    .btn-teal:hover { background:#122B26; border-color:#122B26; }

    .category-card { overflow:hidden; position:relative; cursor:pointer; }
    .category-card img { transition:transform 0.7s ease; }
    .category-card:hover img { transform:scale(1.05); }

    details summary { list-style:none; }
    details summary::-webkit-details-marker { display:none; }

    .order-card { position:relative; }
    .order-card::before { content:''; position:absolute; left:calc(148px - 7px); top:-1px; width:14px; height:14px; border-radius:50%; background:#FBF9F4; border:1px solid #E7E0D2; border-right:none; border-bottom:none; transform:rotate(-45deg) translateY(-50%); }
    .order-card::after { content:''; position:absolute; left:calc(148px - 7px); bottom:-1px; width:14px; height:14px; border-radius:50%; background:#FBF9F4; border:1px solid #E7E0D2; border-left:none; border-top:none; transform:rotate(-45deg) translateY(50%); }
  `}</style>
);

/* =========================================================  CONTEXT  ========================================================= */
const AppContext = createContext(null);
const useApp = () => useContext(AppContext);

function AppProvider({ children }) {
  const [page, setPage] = useState({ name:"home" });
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [myReviews, setMyReviews] = useState([]);
  const [toast, setToast] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    window.clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => setToast(null), 2200);
  };

  const navigate = (name, params={}) => {
    setPage({ name, ...params });
    window.scrollTo?.({ top:0, behavior:"smooth" });
  };

  const addToCart = (product, size, color, qty=1) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.id===product.id && i.size===size && i.color===color);
      if (idx > -1) { const c=[...prev]; c[idx]={...c[idx],qty:c[idx].qty+qty}; return c; }
      return [...prev, { id:product.id, size, color, qty }];
    });
    showToast(`${product.name} added to cart`);
  };

  const updateQty = (id, size, color, qty) => {
    setCart(prev => prev.map(i => i.id===id&&i.size===size&&i.color===color ? {...i,qty:Math.max(1,qty)} : i).filter(i=>i.qty>0));
  };

  const removeFromCart = (id, size, color) => {
    setCart(prev => prev.filter(i => !(i.id===id&&i.size===size&&i.color===color)));
    showToast("Item removed");
  };

  /* ---- Auth + account data, backed by the Google Sheet / Apps Script API ----
     Uses allSettled so one endpoint being unavailable (e.g. a backend that
     hasn't been redeployed with the latest Code.gs yet) can't take down the
     whole session — it just leaves that one slice of data empty. */
  const loadUserData = async () => {
    const [wl, ord, addr, rev] = await Promise.allSettled([api.getWishlist(), api.getOrders(), api.getAddresses(), api.getMyReviews()]);
    if (wl.status === "fulfilled") setWishlist(wl.value.wishlist || []);
    if (ord.status === "fulfilled") setOrders(ord.value.orders || []);
    if (addr.status === "fulfilled") setAddresses(addr.value.addresses || []);
    if (rev.status === "fulfilled") setMyReviews(rev.value.reviews || []);
  };

  useEffect(() => {
    Promise.resolve().then(() => {
      const token = getToken();
      if (!token) { setAuthLoading(false); return; }
      return api.getProfile()
        .then(res => { setUser(res.user); return loadUserData(); })
        .catch(() => { clearToken(); })
        .finally(() => setAuthLoading(false));
    });
  }, []);

  const login = async (email, password) => {
    const res = await api.login(email, password);
    setToken(res.token);
    setUser(res.user);
    await loadUserData();
    return res.user;
  };

  const signup = async (name, email, password) => {
    const res = await api.signup(name, email, password);
    setToken(res.token);
    setUser(res.user);
    await loadUserData();
    return res.user;
  };

  const logout = () => {
    clearToken();
    setUser(null);
    setWishlist([]);
    setOrders([]);
    setAddresses([]);
    setMyReviews([]);
    navigate("home");
  };

  const updateProfile = async (name, phone) => {
    const res = await api.updateProfile(name, phone);
    setUser(res.user);
    return res.user;
  };

  const toggleWishlist = async (productId) => {
    if (!user) { showToast("Sign in to save favorites"); navigate("account"); return; }
    setWishlist(prev => prev.includes(productId) ? prev.filter(id=>id!==productId) : [...prev, productId]);
    try {
      const product = PRODUCTS.find(p => p.id === productId);
      await api.toggleWishlist(productId, { productName: product?.name, productPrice: getMinSizePrice(product || {}) });
    } catch (err) {
      // Revert the optimistic update — toggling twice restores the original state.
      setWishlist(prev => prev.includes(productId) ? prev.filter(id=>id!==productId) : [...prev, productId]);
      showToast(err.message);
    }
  };

  const submitReview = async (orderId, productId, rating, comment) => {
    await api.submitReview(orderId, productId, rating, comment);
    const res = await api.getMyReviews();
    setMyReviews(res.reviews || []);
  };

  const deleteReview = async (id) => {
    await api.deleteReview(id);
    setMyReviews(prev => prev.filter(r => r.id !== id));
  };

  const addAddress = async (address) => {
    const res = await api.addAddress(address);
    setAddresses(prev => [...prev, res.address]);
    return res.address;
  };

  const updateAddress = async (id, address) => {
    await api.updateAddress(id, address);
    setAddresses(prev => prev.map(a => a.id===id ? { ...a, ...address } : a));
  };

  const deleteAddress = async (id) => {
    await api.deleteAddress(id);
    setAddresses(prev => prev.filter(a => a.id !== id));
  };

  const placeOrder = async (details) => {
    const res = await api.placeOrder({ ...details, items: cart });
    setOrders(prev => [res.order, ...prev]);
    setCart([]);
    return res.order;
  };

  return (
    <AppContext.Provider value={{
      page, navigate, cart, addToCart, updateQty, removeFromCart,
      user, authLoading, login, signup, logout, updateProfile,
      wishlist, toggleWishlist,
      addresses, addAddress, updateAddress, deleteAddress,
      orders, placeOrder,
      myReviews, submitReview, deleteReview,
      toast, showToast, quickViewProduct, setQuickViewProduct,
    }}>
      {children}
    </AppContext.Provider>
  );
}

/* =========================================================  SHARED UI  ========================================================= */
function Stars({ rating, count }) {
  return (
    <div style={{display:"flex",alignItems:"center",gap:4}}>
      <span style={{color:"#C6A15B",fontSize:"11px"}}>{"★".repeat(Math.round(rating))}{"☆".repeat(5-Math.round(rating))}</span>
      {count!==undefined && <span style={{fontSize:"11px",color:"#96917E"}}>({count})</span>}
    </div>
  );
}

function Breadcrumbs({ items }) {
  const { navigate } = useApp();
  return (
    <nav style={{marginBottom:24,fontSize:12,color:"#96917E",letterSpacing:"0.05em"}}>
      <ol style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:6,listStyle:"none"}}>
        {items.map((item,idx) => (
          <li key={idx} style={{display:"flex",alignItems:"center",gap:6}}>
            {idx>0 && <span style={{color:"#ddd"}}>/</span>}
            {item.page ? (
              <button onClick={()=>navigate(item.page,item.params)} style={{background:"none",border:"none",cursor:"pointer",fontSize:12,color:"#96917E",letterSpacing:"0.05em",textTransform:"uppercase"}}>{item.label}</button>
            ) : (
              <span style={{color:"#111",textTransform:"uppercase"}}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* =========================================================  QUICK VIEW  ========================================================= */
function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, wishlist, toggleWishlist, navigate } = useApp();
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [error, setError] = useState("");
  const [lastOpened, setLastOpened] = useState(null);

  // Reset the form fields when a different product opens, adjusted during
  // render (React's recommended pattern for this) rather than in an effect,
  // so it lands in the same commit instead of triggering a second render.
  if (quickViewProduct !== lastOpened) {
    setLastOpened(quickViewProduct);
    setSize(null);
    setColor(quickViewProduct ? quickViewProduct.colors[0] : null);
    setError("");
  }

  useEffect(() => {
    document.body.style.overflow = quickViewProduct ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;
  const p = quickViewProduct;
  const isWishlisted = wishlist.includes(p.id);
  const sizeImgs = getSizeImages(p, size);
  const displayImage = p.colorImages?.[color]?.[0] || sizeImgs[0] || p.images?.[0];
  const currentPrice = size ? getSizePrice(p, size) : getMinSizePrice(p);

  return (
    <div style={{position:"fixed",inset:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:16,animation:"fadeIn 0.2s ease"}}>
      <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)"}} onClick={()=>setQuickViewProduct(null)} />
      <style>{`@media(max-width:640px){.qv-grid{grid-template-columns:1fr!important;}}`}</style>
      <div className="qv-grid" style={{position:"relative",background:"#fff",width:"100%",maxWidth:700,maxHeight:"90vh",overflowY:"auto",animation:"modalIn 0.25s ease",display:"grid",gridTemplateColumns:"1fr 1fr"}}>
        <div style={{aspectRatio:"3/4",overflow:"hidden",background:"#F2EEE6"}}>
          <img src={displayImage} alt={p.name} onError={onImgError} style={{width:"100%",height:"100%",objectFit:"cover"}} />
        </div>
        <div style={{padding:32,display:"flex",flexDirection:"column",gap:16}}>
          <button onClick={()=>setQuickViewProduct(null)} style={{position:"absolute",top:12,right:12,width:32,height:32,border:"1px solid #E7E0D2",background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"#6B675C"}}>✕</button>
          <div>
            <p style={{fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",color:"#96917E",marginBottom:6}}>{p.fabric}</p>
            <h2 className="font-serif" style={{fontSize:22,fontWeight:400,marginBottom:8}}>{p.name}</h2>
            <Stars rating={p.rating} count={p.reviews} />
            <div style={{marginTop:10}}>
              <span style={{fontSize:"20px",fontWeight:600,color:"#1A3C34"}}>{formatPKR(currentPrice)}</span>
              {!size && <span style={{fontSize:"12px",color:"#96917E",marginLeft:8}}>(select size)</span>}
            </div>
          </div>
          <p style={{fontSize:13,color:"#6B675C",lineHeight:1.7}}>{p.description}</p>
          <div>
            <p style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:8,fontWeight:500}}>Color: {color}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {p.colors.map(c => (
                <button key={c} onClick={()=>setColor(c)} title={c} style={{width:22,height:22,borderRadius:"50%",border:color===c?"2px solid #1A3C34":"2px solid #D9D2C2",background:COLOR_SWATCHES[c]||"#ccc",cursor:"pointer",outline:color===c?"2px solid #fff":"none",outlineOffset:color===c?"-4px":"none",transition:"all 0.2s"}} />
              ))}
            </div>
          </div>
          <div>
            <p style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:8,fontWeight:500}}>Size {size && <span style={{color:"#1A3C34"}}>— {formatPKR(getSizePrice(p, size))}</span>}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {p.sizes.map(s => (
                <button key={s} onClick={()=>{setSize(s);setError("");}} style={{width:44,height:36,border:size===s?"1px solid #111":"1px solid #D9D2C2",background:size===s?"#111":"#fff",color:size===s?"#fff":"#111",fontSize:12,fontWeight:500,cursor:"pointer",transition:"all 0.2s"}}>{s}</button>
              ))}
            </div>
            {error && <p style={{fontSize:11,color:"#B3372B",marginTop:4}}>{error}</p>}
          </div>
          <div style={{display:"flex",gap:8,marginTop:"auto"}}>
            <button className="btn-primary" style={{flex:1,justifyContent:"center"}} onClick={()=>{if(!size){setError("Select a size");return;}addToCart(p,size,color);setQuickViewProduct(null);}}>Add to Cart</button>
            <button onClick={()=>toggleWishlist(p.id)} style={{width:44,height:44,border:"1px solid #D9D2C2",background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0,transition:"all 0.2s"}}>
              <LineIcon name="heart" size={17} color={isWishlisted?"#9E3B32":"#96917E"} style={{fill:isWishlisted?"#9E3B32":"none"}} />
            </button>
          </div>
          <button onClick={()=>{setQuickViewProduct(null);navigate("product",{id:p.id});}} style={{background:"none",border:"none",fontSize:12,color:"#1A3C34",cursor:"pointer",letterSpacing:"0.08em",textTransform:"uppercase",textAlign:"center"}}>View full details →</button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================  PRODUCT CARD — Bazaro style  ========================================================= */
function ProductCard({ product }) {
  const { navigate, wishlist, toggleWishlist, setQuickViewProduct } = useApp();
  const isWishlisted = wishlist.includes(product.id);
  const [activeColor, setActiveColor] = useState(product.colors[0]);
  const defaultSize = product.sizes?.[0];
  const displayImage = product.colorImages?.[activeColor]?.[0] || (getSizeImages(product, defaultSize)[0]) || product.images?.[0];
  const minPrice = getMinSizePrice(product);

  return (
    <div className="product-card" style={{position:"relative"}}>
      {/* Image area */}
      <div style={{position:"relative",overflow:"hidden",background:"#F2EEE6",aspectRatio:"3/4",cursor:"pointer"}} onClick={()=>navigate("product",{id:product.id})}>
        {/* Badge */}
        {product.isNew && <span style={{position:"absolute",top:10,left:10,zIndex:2,fontSize:10,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",background:"#111",color:"#fff",padding:"4px 10px"}}>New</span>}
        {product.salePrice && !product.isNew && <span style={{position:"absolute",top:10,left:10,zIndex:2,fontSize:10,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",background:"#1A3C34",color:"#fff",padding:"4px 10px"}}>Sale</span>}

        {/* Wishlist */}
        <button onClick={e=>{e.stopPropagation();toggleWishlist(product.id);}} style={{position:"absolute",top:10,right:10,zIndex:2,width:32,height:32,background:"rgba(255,255,255,0.95)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,transition:"all 0.2s"}}>
          <LineIcon name="heart" size={15} color={isWishlisted?"#9E3B32":"#96917E"} style={{fill:isWishlisted?"#9E3B32":"none"}} />
        </button>

        <img className="product-card-img" src={displayImage} alt={product.name} onError={onImgError} style={{width:"100%",height:"100%",objectFit:"cover",position:"absolute",inset:0}} />

        {/* Bottom hover actions — size/color selection is required, so this
            opens Quick View rather than adding to cart directly. */}
        <div className="product-card-actions" style={{position:"absolute",inset:"auto 0 0",display:"flex",flexDirection:"column"}}>
          <button onClick={e=>{e.stopPropagation();setQuickViewProduct(product);}} style={{background:"#111",border:"none",padding:"11px",fontSize:11,fontWeight:500,letterSpacing:"0.1em",textTransform:"uppercase",cursor:"pointer",color:"#fff",transition:"background 0.2s"}}>Quick View</button>
        </div>
      </div>

      {/* Info below card */}
      <div style={{padding:"12px 0 0",minWidth:0}}>
        {product.colors.length > 1 && (
          <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:8}}>
            {product.colors.map(c => (
              <button key={c} title={c} onClick={()=>setActiveColor(c)} style={{width:14,height:14,borderRadius:"50%",border:activeColor===c?"2px solid #111":"1px solid #D9D2C2",background:COLOR_SWATCHES[c]||"#ccc",cursor:"pointer",transition:"all 0.2s",flexShrink:0}} />
            ))}
          </div>
        )}
        <button onClick={()=>navigate("product",{id:product.id})} style={{background:"none",border:"none",cursor:"pointer",textAlign:"left",width:"100%"}}>
          <p style={{fontSize:13,fontWeight:500,color:"#111",marginBottom:4,lineHeight:1.4}} className="line-clamp-1">{product.name}</p>
        </button>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:6}}>
          <span style={{fontSize:"13px",fontWeight:600,color:"#111",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>From {formatPKR(minPrice)}</span>
          <span style={{flexShrink:0}}><Stars rating={product.rating} /></span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================  ANNOUNCEMENT BAR  ========================================================= */
function AnnouncementBar() {
  const items = ["Summer Sale — Up to 30% Off","Complimentary Shipping on Orders Above Rs. 2,000","New Arrivals Every Friday","JazzCash · Easypaisa · Cash on Delivery"];
  const [idx, setIdx] = useState(0);
  useEffect(()=>{const t=setInterval(()=>setIdx(i=>(i+1)%items.length),3000);return()=>clearInterval(t);},[]);
  return (
    <div style={{background:"#14211D",color:"#D8C9A5",fontSize:10,fontWeight:500,letterSpacing:"0.28em",textTransform:"uppercase",textAlign:"center",padding:"9px 16px",overflow:"hidden"}}>
      <span key={idx} style={{display:"inline-block",animation:"slideDown 0.4s ease"}}>{items[idx]}</span>
    </div>
  );
}

/* =========================================================  HEADER — Bazaro style  ========================================================= */
function Header() {
  const { navigate, cart, user, page, wishlist } = useApp();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [lastPageName, setLastPageName] = useState(page.name);
  const cartCount = cart.reduce((s,i)=>s+i.qty, 0);
  const wishCount = wishlist.length;

  // Close any open drawer/search on navigation, adjusted during render
  // rather than in an effect so it lands in the same commit.
  if (page.name !== lastPageName) {
    setLastPageName(page.name);
    setDrawerOpen(false);
    setSearchOpen(false);
  }

  const suggestions = useMemo(()=>{
    if(!searchValue.trim()) return [];
    const q=searchValue.toLowerCase();
    return PRODUCTS.filter(p=>p.name.toLowerCase().includes(q)).slice(0,5);
  },[searchValue]);

  const submitSearch = (e) => {
    e.preventDefault();
    if(!searchValue.trim()) return;
    navigate("search",{query:searchValue.trim()});
    setSearchValue(""); setSearchOpen(false);
  };

  return (
    <>
      <AnnouncementBar />
      <header style={{position:"sticky",top:0,zIndex:50,background:"rgba(251,249,244,0.96)",backdropFilter:"blur(8px)",borderBottom:"1px solid #E7E0D2"}}>
        <div className="header-inner" style={{maxWidth:1320,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",height:70,gap:24}}>
          {/* Logo */}
          <button onClick={()=>navigate("home")} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",flexShrink:0}}>
            <img className="header-logo-img" src="/logo.png" alt="MD Fashion" onError={onImgError} style={{height:60,width:60,objectFit:"contain",flexShrink:0}} />
          </button>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{display:"flex",alignItems:"center",gap:32,flex:1,justifyContent:"center"}}>
            {[["Kids",()=>navigate("category",{id:"kids"})],["New Arrivals",()=>navigate("search",{query:"new"})],["Sale",()=>navigate("search",{query:"sale"})],["About",()=>navigate("about")]].map(([label,action])=>(
              <button key={label} onClick={action} className="nav-link" style={{background:"none",border:"none",cursor:"pointer",fontSize:12,fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:"#111",padding:"4px 0"}}>{label}</button>
            ))}
          </nav>

          {/* Actions */}
          <div className="header-actions" style={{display:"flex",alignItems:"center",gap:16,flexShrink:0}}>
            <button onClick={()=>setSearchOpen(o=>!o)} style={{background:"none",border:"none",cursor:"pointer",color:"#1D1C18",display:"flex",alignItems:"center"}}><LineIcon name="search" size={19} /></button>
            <button onClick={()=>navigate("account")} className="header-account-btn" style={{background:"none",border:"none",cursor:"pointer",fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#1D1C18",fontWeight:500,display:"flex",alignItems:"center",whiteSpace:"nowrap"}}>
              {user ? user.name.split(" ")[0] : "Account"}
            </button>
            <button onClick={()=>navigate("account",{tab:"wishlist"})} style={{background:"none",border:"none",cursor:"pointer",color:"#1D1C18",position:"relative",display:"flex",alignItems:"center"}}>
              <LineIcon name="heart" size={19} />
              {wishCount>0 && <span style={{position:"absolute",top:-8,right:-9,background:"#1A3C34",color:"#F6F3ED",fontSize:9,fontWeight:600,width:16,height:16,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",animation:"popIn 0.25s ease"}}>{wishCount}</span>}
            </button>
            <button onClick={()=>navigate("cart")} style={{background:"none",border:"none",cursor:"pointer",color:"#1D1C18",position:"relative",display:"flex",alignItems:"center"}}>
              <LineIcon name="bag" size={19} />
              {cartCount>0 && <span style={{position:"absolute",top:-8,right:-9,background:"#1A3C34",color:"#F6F3ED",fontSize:9,fontWeight:600,width:16,height:16,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",animation:"popIn 0.25s ease"}}>{cartCount}</span>}
            </button>
            <button onClick={()=>setDrawerOpen(o=>!o)} style={{display:"none",background:"none",border:"none",cursor:"pointer",fontSize:20,color:"#111",alignItems:"center"}} className="mobile-menu-btn">
              {drawerOpen?"✕":"☰"}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div style={{borderTop:"1px solid #E7E0D2",padding:"12px 24px",position:"relative",background:"#fff",animation:"slideDown 0.2s ease"}}>
            <form onSubmit={submitSearch} style={{maxWidth:600,margin:"0 auto",position:"relative"}}>
              <input autoFocus type="search" value={searchValue} onChange={e=>setSearchValue(e.target.value)} placeholder="Search kurtas, fabrics, occasions…"
                style={{width:"100%",border:"none",borderBottom:"1px solid #111",padding:"8px 0",fontSize:16,outline:"none",background:"transparent",letterSpacing:"0.02em"}} />
            </form>
            {suggestions.length>0 && (
              <ul style={{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:600,background:"#fff",border:"1px solid #E7E0D2",zIndex:50,animation:"fadeIn 0.15s ease",listStyle:"none"}}>
                {suggestions.map(s => (
                  <li key={s.id}>
                    <button onClick={()=>{navigate("product",{id:s.id});setSearchValue("");setSearchOpen(false);}} style={{width:"100%",textAlign:"left",padding:"10px 16px",background:"none",border:"none",cursor:"pointer",fontSize:13,letterSpacing:"0.03em",transition:"background 0.15s"}}>
                      {s.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </header>

      <style>{`
        @media(max-width:768px){.mobile-menu-btn{display:flex!important} .desktop-nav{display:none!important}}
        @media(max-width:480px){
          .header-inner{padding:0 14px!important;gap:10px!important;height:60px!important;}
          .header-logo-img{height:42px!important;width:42px!important;}
          .header-actions{gap:10px!important;}
        }
        @media(max-width:360px){
          .header-actions{gap:7px!important;}
          .header-account-btn{font-size:10px!important;}
        }
      `}</style>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <>
          <div style={{position:"fixed",inset:0,zIndex:60,background:"rgba(0,0,0,0.4)"}} onClick={()=>setDrawerOpen(false)} />
          <div style={{position:"fixed",top:0,right:0,bottom:0,zIndex:70,width:280,background:"#fff",animation:"drawerIn 0.25s ease",display:"flex",flexDirection:"column"}}>
            <div style={{padding:"20px 24px",borderBottom:"1px solid #E7E0D2",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span className="font-serif" style={{fontSize:20,fontWeight:400}}>Menu</span>
              <button onClick={()=>setDrawerOpen(false)} style={{background:"none",border:"none",cursor:"pointer",fontSize:18,color:"#6B675C"}}>✕</button>
            </div>
            <nav style={{padding:"16px 0",flex:1}}>
              {[["Kids","category",{id:"kids"}],["New Arrivals","search",{query:"new"}],["Sale","search",{query:"sale"}],["About Us","about"],["FAQs","faq"]].map(([label,name,params])=>(
                <button key={label} onClick={()=>{navigate(name,params);setDrawerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"14px 24px",background:"none",border:"none",cursor:"pointer",fontSize:12,letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:500,borderBottom:"1px solid #F2EEE6",color:"#111",transition:"background 0.2s"}}>
                  {label}
                </button>
              ))}
            </nav>
            <div style={{padding:24,borderTop:"1px solid #E7E0D2"}}>
              <button className="btn-primary" style={{width:"100%",justifyContent:"center"}} onClick={()=>{navigate("account");setDrawerOpen(false);}}>
                {user ? `Hi, ${user.name.split(" ")[0]}` : "Sign In / Register"}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

/* =========================================================  HERO — Bazaro split layout  ========================================================= */
function HeroSection() {
  const { navigate } = useApp();
  const [current, setCurrent] = useState(0);

  useEffect(()=>{
    const t=setInterval(()=>setCurrent(p=>(p+1)%SLIDES.length),5500);
    return()=>clearInterval(t);
  },[]);

  const slide = SLIDES[current];

  return (
    <section className="hero-split" style={{position:"relative",width:"100%",minHeight:600,display:"grid",gridTemplateColumns:"1fr 1fr",overflow:"hidden",background:"#F6F3ED"}}>
      {/* Left: text */}
      <div className="hero-text" style={{display:"flex",flexDirection:"column",justifyContent:"center",padding:"80px 64px",zIndex:2}}>
        <p style={{fontSize:11,letterSpacing:"0.3em",textTransform:"uppercase",color:"#A9885A",marginBottom:20,animation:"fadeUp 0.5s ease",display:"flex",alignItems:"center",gap:14}}>
          <span style={{width:40,height:1,background:"#A9885A",display:"inline-block",flexShrink:0}} />
          {slide.tag}
        </p>
        <h1 className="font-serif hero-title" style={{fontSize:"clamp(48px,5.2vw,84px)",fontWeight:500,lineHeight:1.04,color:"#1D1C18",marginBottom:24,whiteSpace:"pre-line",animation:"fadeUp 0.5s ease 0.1s both"}}>
          {slide.title}
        </h1>
        <p style={{fontSize:14,color:"#6B675C",lineHeight:1.9,maxWidth:360,marginBottom:36,fontWeight:300,animation:"fadeUp 0.5s ease 0.2s both"}}>{slide.desc}</p>
        <div style={{animation:"fadeUp 0.5s ease 0.3s both",display:"inline-block"}}>
          <button className="btn-primary" onClick={()=>navigate("category",{id:slide.ctaCategory})}>{slide.ctaText} →</button>
        </div>

        {/* Slide indicators */}
        <div style={{display:"flex",alignItems:"center",gap:20,marginTop:52}}>
          <span className="font-serif" style={{fontSize:15,fontStyle:"italic",color:"#A9885A",letterSpacing:"0.08em"}}>0{current+1} / 0{SLIDES.length}</span>
          <div style={{display:"flex",gap:8}}>
            {SLIDES.map((_,i)=>(
              <button key={i} onClick={()=>setCurrent(i)} style={{width:i===current?36:14,height:2,border:"none",background:i===current?"#1D1C18":"#D5CDBB",cursor:"pointer",transition:"all 0.4s ease",padding:0}} />
            ))}
          </div>
        </div>
      </div>

      {/* Right: image */}
      <div style={{position:"relative",overflow:"hidden",minHeight:500}}>
        {SLIDES.map((s,i)=>(
          <img key={i} src={s.imgSrc} alt={s.title} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top",transition:"opacity 0.8s ease",opacity:i===current?1:0}} />
        ))}
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(246,243,237,0.35),transparent)"}} />
      </div>

      <style>{`
        @media(max-width:768px){.hero-split{grid-template-columns:1fr!important;min-height:auto!important;} .hero-split > div:last-child{min-height:320px!important;} .hero-text{padding:40px 24px!important;}}
        @media(max-width:480px){.hero-title{font-size:36px!important;} .hero-split > div:last-child{min-height:260px!important;} .hero-text{padding:32px 20px!important;}}
      `}</style>
    </section>
  );
}

/* =========================================================  CATEGORY GRID — editorial Bazaro style  ========================================================= */
function CategoryGrid() {
  const { navigate } = useApp();
  return (
    <section className="cat-section" style={{maxWidth:1320,margin:"0 auto",padding:"80px 24px"}}>
      <div style={{textAlign:"center",marginBottom:48}}>
        <p style={{fontSize:11,letterSpacing:"0.3em",textTransform:"uppercase",color:"#A9885A",marginBottom:8}}>Collections</p>
        <h2 className="font-serif" style={{fontSize:40,fontWeight:400,color:"#111"}}>Shop by Style</h2>
      </div>
      <div className="cat-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"auto auto",gap:4}}>
        {/* Big left tile — Kids' Kurtas */}
        <div className="category-card cat-tile-tall" style={{gridRow:"1/3"}} onClick={()=>navigate("category",{id:"kids"})}>
          <div className="cat-tile-inner-lg" style={{position:"relative",height:"100%",minHeight:500}}>
            <img className="cat-tile-img-lg" src="/product/pro9-1.jpeg" alt="Kids' Kurtas" style={{width:"100%",height:"100%",objectFit:"cover",minHeight:500,display:"block"}} />
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(0,0,0,0.65) 0%,transparent 50%)"}} />
            <div style={{position:"absolute",bottom:28,left:28}}>
              <p style={{fontSize:11,letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(255,255,255,0.7)",marginBottom:6}}>Collection</p>
              <h3 className="font-serif" style={{fontSize:32,fontWeight:400,color:"#fff",marginBottom:6}}>Kids' Kurtas</h3>
              <span style={{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C6A15B",fontWeight:500}}>View All →</span>
            </div>
          </div>
        </div>
        {/* Top right — New Arrivals */}
        <div className="category-card cat-tile-wide" style={{gridColumn:"2/4"}} onClick={()=>navigate("search",{query:"new"})}>
          <div className="cat-tile-inner-sm" style={{position:"relative",height:"100%",minHeight:240}}>
            <img className="cat-tile-img-sm" src="/product/pro11-1.jpeg" alt="New Arrivals" style={{width:"100%",height:"100%",objectFit:"cover",minHeight:240,display:"block"}} />
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(0,0,0,0.6) 0%,transparent 60%)"}} />
            <div style={{position:"absolute",bottom:24,left:24}}>
              <h3 className="font-serif" style={{fontSize:26,fontWeight:400,color:"#fff",marginBottom:4}}>New Arrivals</h3>
              <span style={{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C6A15B",fontWeight:500}}>View All →</span>
            </div>
          </div>
        </div>
        {/* Bottom mid — Festive */}
        <div className="category-card" onClick={()=>navigate("search",{query:"embroidered"})}>
          <div className="cat-tile-inner-sm" style={{position:"relative",height:"100%",minHeight:240}}>
            <img className="cat-tile-img-sm" src="/product/pro2-1.jpeg" alt="Festive" style={{width:"100%",height:"100%",objectFit:"cover",minHeight:240,display:"block"}} />
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(0,0,0,0.6) 0%,transparent 60%)"}} />
            <div style={{position:"absolute",bottom:24,left:24}}>
              <h3 className="font-serif" style={{fontSize:26,fontWeight:400,color:"#fff",marginBottom:4}}>Festive</h3>
              <span style={{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C6A15B",fontWeight:500}}>Explore →</span>
            </div>
          </div>
        </div>
        {/* Bottom right — Sale */}
        <div className="category-card" onClick={()=>navigate("search",{query:"sale"})}>
          <div className="cat-tile-inner-sm" style={{position:"relative",height:"100%",minHeight:240,background:"#1A3C34",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:12,padding:24}}>
            <p style={{fontSize:11,letterSpacing:"0.3em",textTransform:"uppercase",color:"#A9885A"}}>Limited Time</p>
            <h3 className="font-serif" style={{fontSize:34,fontWeight:400,color:"#F6F3ED",textAlign:"center",lineHeight:1.25}}>The Seasonal Sale<br/><em style={{color:"#C6A15B"}}>Up to 30% Off</em></h3>
            <button className="btn-primary" style={{marginTop:10,background:"transparent",borderColor:"#C6A15B",color:"#C6A15B"}}>Shop Sale →</button>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .cat-section{padding:48px 20px!important;}
          .cat-grid{grid-template-columns:1fr!important;grid-template-rows:auto!important;}
          .cat-tile-tall{grid-row:auto!important;}
          .cat-tile-wide{grid-column:auto!important;}
          .cat-tile-inner-lg,.cat-tile-img-lg{min-height:320px!important;}
          .cat-tile-inner-sm,.cat-tile-img-sm{min-height:200px!important;}
        }
      `}</style>
    </section>
  );
}

/* =========================================================  NEW ARRIVALS  ========================================================= */
function NewArrivalsSection() {
  const { navigate } = useApp();
  const newArrivals = PRODUCTS.filter(p=>p.isNew).slice(0,8);
  return (
    <section className="new-arrivals-section" style={{padding:"0 0 80px"}}>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"0 24px"}}>
        <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:40,flexWrap:"wrap",gap:16}}>
          <div>
            <p style={{fontSize:11,letterSpacing:"0.3em",textTransform:"uppercase",color:"#A9885A",marginBottom:6}}>Just In</p>
            <h2 className="font-serif" style={{fontSize:38,fontWeight:400,color:"#1D1C18"}}>New Arrivals</h2>
          </div>
          <button className="btn-outline" onClick={()=>navigate("search",{query:"new"})}>View All →</button>
        </div>
        <div className="new-arrivals-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24}}>
          {newArrivals.map(p=><ProductCard key={p.id} product={p} />)}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){.new-arrivals-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:640px){
          .new-arrivals-section{padding:0 0 48px;}
          .new-arrivals-grid{
            display:flex!important;
            overflow-x:auto!important;
            scroll-snap-type:x mandatory!important;
            gap:14px!important;
            margin:0 -24px!important;
            padding:4px 24px 10px!important;
            -webkit-overflow-scrolling:touch;
            scrollbar-width:none;
          }
          .new-arrivals-grid::-webkit-scrollbar{display:none;}
          .new-arrivals-grid > .product-card{flex:0 0 82%!important;scroll-snap-align:start!important;}
        }
      `}</style>
    </section>
  );
}

/* =========================================================  SHOP THIS LOOK — bundle selector  ========================================================= */
function ShopThisLookSection() {
  const { showToast } = useApp();
  const [selectedIds, setSelectedIds] = useState(["item-01", "item-02"]);

  const toggleSelection = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(itemIds => itemIds !== id) : [...prev, id]
    );
  };

  const computedTotal = LOOK_DATA.items
    .filter(item => selectedIds.includes(item.id))
    .reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="stl-container" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Main Grid Split */}
        <div className="stl-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "start" }}>

          {/* Left Column: Big Model Feature Image */}
          <div style={{ width: "100%", background: "#F2EEE6", position: "relative" }}>
            <img
              src={LOOK_DATA.featureImage}
              alt="Model Feature Look"
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            />
          </div>

          {/* Right Column: Collection Header & Bundle Rows */}
          <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>

            {/* Header Content */}
            <div style={{ marginBottom: 32 }}>
              <span style={{ fontSize: 11, color: "#A9885A", fontWeight: "500", letterSpacing: "0.3em", textTransform: "uppercase", display: "block", marginBottom: 10 }}>
                {LOOK_DATA.bundleTag}
              </span>
              <h2 className="font-serif" style={{ fontSize: 40, fontWeight: "500", margin: 0, color: "#1D1C18" }}>
                {LOOK_DATA.title}
              </h2>
            </div>

            {/* List Rows */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {LOOK_DATA.items.map((item) => {
                const isSelected = selectedIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 24,
                      padding: "24px 0",
                      borderBottom: "1px solid #f0f0f0"
                    }}
                  >
                    {/* Item Preview Frame */}
                    <div style={{ width: 110, height: 130, background: "#F2EEE6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        onError={onImgError}
                        style={{ width: "90%", height: "90%", objectFit: "contain" }}
                      />
                    </div>

                    {/* Product Details & Selection Interaction */}
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 10, color: "#A9885A", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: "0.18em" }}>
                        {item.category}
                      </p>
                      <h4 style={{ fontSize: 14, fontWeight: "500", color: "#1D1C18", margin: "0 0 6px 0" }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: 14, fontWeight: "600", color: "#1A3C34", margin: "0 0 16px 0" }}>
                        {formatPKR(item.price)}
                      </p>

                      {/* Dropdown Style Toggle Selector */}
                      <button
                        onClick={() => toggleSelection(item.id)}
                        style={{
                          background: "#fff",
                          border: isSelected ? "1px solid #1D1C18" : "1px solid #D9D2C2",
                          borderRadius: 24,
                          padding: "8px 20px",
                          fontSize: 13,
                          color: "#111",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          fontWeight: isSelected ? "500" : "400",
                          transition: "border 0.2s ease"
                        }}
                      >
                        <span>{isSelected ? "Selected" : "Select An Option"}</span>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: isSelected ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                          <path d="M1 1L5 5L9 1" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sticky Action Button at Container Floor */}
            <div style={{ marginTop: 40, paddingTop: 12 }}>
              <button
                style={{
                  width: "100%",
                  background: selectedIds.length > 0 ? "#1D1C18" : "#C8C2B4",
                  color: "#F6F3ED",
                  border: "none",
                  padding: "18px",
                  fontSize: 11,
                  fontWeight: "500",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  cursor: selectedIds.length > 0 ? "pointer" : "not-allowed",
                  transition: "background 0.2s"
                }}
                disabled={selectedIds.length === 0}
                onClick={() => showToast(`${selectedIds.length} item${selectedIds.length === 1 ? "" : "s"} added to cart`)}
              >
                Add Selected to Cart — {formatPKR(computedTotal)}
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Grid Breakpoints */}
      <style>{`
        @media(max-width: 992px) {
          .stl-container { padding: 56px 0 !important; }
          .stl-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================  PROMO BANNERS  ========================================================= */
function PromoBannersSection() {
  const { navigate } = useApp();
  return (
    <section className="promo-section" style={{ padding: "40px 0" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>

        {/* 3-Column Grid Layout */}
        <div className="promo-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {BANNERS_DATA.map((banner) => (
            <div
              key={banner.id}
              className="promo-card"
              style={{
                background: "#F2EEE6",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: 240,
                padding: "0 0 0 32px",
                overflow: "hidden",
                position: "relative"
              }}
            >
              {/* Left Side: Text Info */}
              <div className="promo-card-text" style={{ display: "flex", flexDirection: "column", zIndex: 2, maxWidth: "55%" }}>
                <span style={{ fontSize: 10, fontWeight: "500", color: "#A9885A", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 12 }}>
                  {banner.discount}
                </span>
                <h3 className="font-serif" style={{ fontSize: 28, fontWeight: "500", margin: "0 0 6px 0", color: "#1D1C18", lineHeight: "1.15" }}>
                  {banner.title}
                </h3>
                <p style={{ fontSize: 13, color: "#6B675C", fontWeight: 300, margin: "0 0 22px 0" }}>
                  {banner.subtitle}
                </p>
                <button
                  onClick={() => navigate(banner.link.name, banner.link.params)}
                  style={{
                    alignSelf: "flex-start",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid #1D1C18",
                    color: "#1D1C18",
                    padding: "0 0 4px",
                    fontSize: 11,
                    fontWeight: "500",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => { e.target.style.color = "#A9885A"; e.target.style.borderBottomColor = "#A9885A"; }}
                  onMouseLeave={(e) => { e.target.style.color = "#1D1C18"; e.target.style.borderBottomColor = "#1D1C18"; }}
                >
                  Shop Now
                </button>
              </div>

              {/* Right Side: Visual Model Image */}
              <div className="promo-card-img-wrap" style={{ width: "45%", height: "100%", position: "relative" }}>
                <img
                  src={banner.image}
                  alt={banner.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    mixBlendMode: "multiply"
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media(max-width: 992px) {
          .promo-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media(max-width: 640px) {
          .promo-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .promo-card {
            flex-direction: column !important;
            align-items: stretch !important;
            height: auto !important;
            padding: 28px 24px 0 !important;
          }
          .promo-card-text {
            max-width: 100% !important;
          }
          .promo-card-img-wrap {
            width: 100% !important;
            height: 200px !important;
            margin-top: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================  PREMIUM SHOWCASE CAROUSEL — 3D drag carousel  ========================================================= */
function PremiumShowcaseCarousel() {
  const { navigate } = useApp();
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isDraggingState, setIsDraggingState] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);

  // Cards scale down to fit narrow viewports instead of overflowing them —
  // clamped between a legible minimum and the original desktop size.
  const cardWidth = containerWidth > 0 ? Math.min(460, Math.max(240, containerWidth * 0.78)) : 460;
  const cardHeight = Math.round(cardWidth * (540 / 460));
  const isCompact = cardWidth < 340;
  const AUTO_SCROLL_DELAY = 3500;

  // Measure the track's parent width after mount (and on resize) instead of
  // reading containerRef.current during render — a ref isn't guaranteed
  // attached on the first render, which could show the carousel unadjusted
  // for a frame before snapping into position.
  useEffect(() => {
    const measure = () => {
      if (containerRef.current?.parentElement) {
        setContainerWidth(containerRef.current.parentElement.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (isHovered || isDraggingState) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === CAROUSEL_ITEMS.length - 1 ? 0 : prevIndex + 1
      );
    }, AUTO_SCROLL_DELAY);

    return () => clearInterval(interval);
  }, [isHovered, isDraggingState]);

  const getBaseTranslateX = useCallback(() => {
    return (containerWidth / 2) - (cardWidth / 2) - (activeIndex * cardWidth);
  }, [containerWidth, activeIndex, cardWidth]);

  const handleNav = (index) => {
    if (index >= 0 && index < CAROUSEL_ITEMS.length) {
      setActiveIndex(index);
    }
  };

  const getClientX = (e) => {
    if (e.type.includes('touch')) {
      const touch = e.touches[0] || e.changedTouches[0];
      return touch ? touch.clientX : 0;
    }
    return e.clientX;
  };

  const handleDragStart = (e) => {
    isDragging.current = true;
    setIsDraggingState(true);
    startX.current = getClientX(e);
    setDragOffset(0);
  };

  const handleDragMove = (e) => {
    if (!isDragging.current) return;
    const currentX = getClientX(e);
    setDragOffset(currentX - startX.current);
  };

  const finishDrag = (diff) => {
    isDragging.current = false;
    setIsDraggingState(false);
    setDragOffset(0);

    if (diff < -80 && activeIndex < CAROUSEL_ITEMS.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (diff > 80 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleDragEnd = (e) => {
    if (!isDragging.current) return;
    const endX = e.type.includes('touch') ? getClientX(e) : e.clientX;
    finishDrag(endX - startX.current);
  };

  const handleMouseLeaveTrack = () => {
    setIsHovered(false);
    if (isDragging.current) {
      finishDrag(dragOffset);
    }
  };

  const translateX = getBaseTranslateX() + dragOffset;

  return (
    <section
      className="showcase-section"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 30%, #1a1a18 0%, #0d0d0c 60%, #050505 100%)",
        padding: "110px 0",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 700,
          height: 400,
          background: "radial-gradient(circle, rgba(198,161,91,0.08) 0%, rgba(255,255,255,0) 70%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ textAlign: "center", marginBottom: 64, padding: "0 24px", position: "relative" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#A9885A", marginBottom: 10 }}>The Showcase</p>
        <h2 className="font-serif" style={{ fontSize: "clamp(32px,3.5vw,44px)", fontWeight: 400, color: "#F6F3ED" }}>Curated Collections</h2>
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          perspective: "1600px",
          perspectiveOrigin: "50% 35%",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeaveTrack}
      >
        <div
          ref={containerRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          style={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            transform: `translateX(${translateX}px)`,
            transition: isDraggingState ? "none" : "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
            cursor: isDraggingState ? "grabbing" : "grab",
            userSelect: "none",
            touchAction: "pan-y",
            transformStyle: "preserve-3d",
          }}
        >
          {CAROUSEL_ITEMS.map((item, idx) => {
            const isActive = idx === activeIndex;
            const distance = idx - activeIndex;
            const absDist = Math.abs(distance);
            const isBefore = distance < 0;

            const rotateY = isActive ? 0 : (isBefore ? 1 : -1) * Math.min(50 + absDist * 6, 68);
            const translateZ = isActive ? 40 : -160 - (absDist - 1) * 70;
            const translateXOffset = isActive ? 0 : (isBefore ? 1 : -1) * (90 + (absDist - 1) * 40);
            const scale = isActive ? 1 : Math.max(0.78, 1 - absDist * 0.08);

            const cardTransform = `translateX(${translateXOffset}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;

            return (
              <div
                key={item.id}
                onClick={() => handleNav(idx)}
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  position: "relative",
                  flexShrink: 0,
                  transition: isDraggingState
                    ? "none"
                    : "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.7s",
                  transform: cardTransform,
                  transformStyle: "preserve-3d",
                  zIndex: isActive ? 10 : 5 - absDist,
                  boxShadow: isActive
                    ? "0 40px 80px rgba(0,0,0,0.7), 0 0 60px rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.08)"
                    : "0 20px 45px rgba(0,0,0,0.55)",
                  overflow: "hidden",
                  borderRadius: "18px",
                  backfaceVisibility: "hidden",
                  cursor: isActive ? "default" : "pointer",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    pointerEvents: "none",
                    filter: isActive ? "brightness(1) saturate(1.05)" : "brightness(0.75) saturate(0.85)",
                    transition: "filter 0.7s ease",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: isBefore
                      ? "linear-gradient(to left, rgba(13,13,12,0.05), rgba(13,13,12,0.85))"
                      : "linear-gradient(to right, rgba(13,13,12,0.05), rgba(13,13,12,0.85))",
                    opacity: isActive ? 0 : Math.min(0.35 + absDist * 0.18, 0.85),
                    transition: "opacity 0.7s ease",
                    pointerEvents: "none",
                    zIndex: 2,
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 35%)",
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.7s ease",
                    pointerEvents: "none",
                    zIndex: 2,
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: isCompact ? "0 20px 26px" : "0 40px 50px 40px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 3,
                    textAlign: "center",
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <h3
                    className="font-serif"
                    style={{
                      color: "#fff",
                      fontSize: isActive ? (isCompact ? 22 : 34) : (isCompact ? 15 : 24),
                      fontWeight: "500",
                      letterSpacing: "0.02em",
                      margin: "0 0 16px 0",
                      textShadow: "0 2px 14px rgba(0,0,0,0.6)",
                      transition: "font-size 0.7s ease",
                    }}
                  >
                    {item.title}
                  </h3>

                  <button
                    style={{
                      background: isActive ? "#fff" : "transparent",
                      color: isActive ? "#000" : "#fff",
                      border: "1px solid #fff",
                      padding: isCompact ? "9px 20px" : "12px 32px",
                      fontSize: 11,
                      fontWeight: "600",
                      borderRadius: "30px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(20px)",
                      transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("search", { query: item.query });
                    }}
                    onMouseEnter={(e) => { e.target.style.background = "#C6A15B"; e.target.style.borderColor = "#C6A15B"; }}
                    onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.borderColor = "#fff"; }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          marginTop: 50,
        }}
      >
        {CAROUSEL_ITEMS.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => handleNav(idx)}
            aria-label={`Go to ${item.title}`}
            style={{
              width: idx === activeIndex ? 28 : 8,
              height: 8,
              borderRadius: 4,
              border: "none",
              background: idx === activeIndex ? "#C6A15B" : "rgba(255,255,255,0.3)",
              cursor: "pointer",
              transition: "all 0.4s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
      <style>{`@media(max-width:768px){.showcase-section{padding:64px 0!important;}}`}</style>
    </section>
  );
}

/* =========================================================  STORE BANNER  ========================================================= */
function StoreBanner() {
  const { navigate } = useApp();
  return (
    <section className="store-banner" style={{position:"relative",width:"100%",overflow:"hidden",height:480}}>
      <img src="/shop.png" alt="MD Fashion storefront" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}} />
      <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.35)"}} />
      <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"0 24px"}}>
        <p style={{fontSize:11,letterSpacing:"0.25em",textTransform:"uppercase",color:"rgba(255,255,255,0.65)",marginBottom:16}}>Tariq Road, Kurta Galli</p>
        <h2 className="font-serif" style={{fontSize:"clamp(40px,5vw,72px)",fontWeight:300,color:"#fff",letterSpacing:"0.05em",marginBottom:28}}>Visit Our Store</h2>
        <button className="btn-outline" style={{color:"#fff",borderColor:"#fff",letterSpacing:"0.2em"}} onClick={()=>navigate("about")}>Get Directions</button>
      </div>
      <style>{`@media(max-width:640px){.store-banner{height:340px!important;}}`}</style>
    </section>
  );
}

/* =========================================================  SHERWANI SECTION — editorial split  ========================================================= */
function SherwaniSection() {
  const { navigate } = useApp();
  return (
    <section className="sherwani-section" style={{maxWidth:1320,margin:"0 auto",padding:"80px 24px"}}>
      <div className="sherwani-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center"}}>
        <div>
          <p style={{fontSize:11,letterSpacing:"0.3em",textTransform:"uppercase",color:"#A9885A",marginBottom:12}}>Ceremonial</p>
          <h2 className="font-serif" style={{fontSize:"clamp(48px,4vw,72px)",fontWeight:300,color:"#111",letterSpacing:"0.03em",marginBottom:20}}>Sherwani</h2>
          <p style={{fontSize:14,color:"#6B675C",lineHeight:1.9,marginBottom:32,fontWeight:300,maxWidth:380}}>Crafted for ceremonial grandeur, a silhouette that celebrates tradition at its finest. For the little groom, the page boy, the man of the moment.</p>
          <button className="btn-outline" onClick={()=>navigate("search",{query:"sherwani"})}>Shop Now</button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}}>
          <div style={{aspectRatio:"4/5",overflow:"hidden",background:"#F2EEE6"}}>
            <img src="/product/pro13-1.jpeg" alt="Sherwani" style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.7s ease"}} onMouseEnter={e=>e.target.style.transform="scale(1.05)"} onMouseLeave={e=>e.target.style.transform="scale(1)"} />
          </div>
          <div style={{aspectRatio:"4/5",overflow:"hidden",background:"#F2EEE6"}}>
            <img src="/product/pro9-1.jpeg" alt="Festive Kurta" style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.7s ease"}} onMouseEnter={e=>e.target.style.transform="scale(1.05)"} onMouseLeave={e=>e.target.style.transform="scale(1)"} />
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.sherwani-section{padding:56px 20px!important;} .sherwani-grid{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
    </section>
  );
}

/* =========================================================  STATS STRIP  ========================================================= */
function StatsStrip() {
  const stats=[{v:"10K+",l:"Happy Customers"},{v:"200+",l:"Fabric Designs"},{v:"3–5",l:"Day Delivery"},{v:"30",l:"Day Returns"}];
  return (
    <section style={{borderTop:"1px solid #E7E0D2",borderBottom:"1px solid #E7E0D2",padding:"40px 24px"}}>
      <div className="stats-grid" style={{maxWidth:1320,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24,textAlign:"center"}}>
        {stats.map(s=>(
          <div key={s.l}>
            <p className="font-serif" style={{fontSize:42,fontWeight:500,color:"#1A3C34",lineHeight:1}}>{s.v}</p>
            <p style={{fontSize:11,letterSpacing:"0.2em",textTransform:"uppercase",color:"#96917E",marginTop:8}}>{s.l}</p>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:640px){.stats-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  );
}

/* =========================================================  TESTIMONIALS  ========================================================= */
function TestimonialsSection() {
  const reviews = TESTIMONIALS;
  return (
    <section className="testimonials-section" style={{padding:"80px 0"}}>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"0 24px"}}>
        <div style={{textAlign:"center",marginBottom:48}}>
          <p style={{fontSize:11,letterSpacing:"0.3em",textTransform:"uppercase",color:"#A9885A",marginBottom:8}}>Reviews</p>
          <h2 className="font-serif" style={{fontSize:36,fontWeight:400,color:"#111"}}>What Our Customers Say</h2>
        </div>
        <div className="testimonials-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24}}>
          {reviews.map(r=>(
            <div key={r.name} className="testimonial-card" style={{border:"1px solid #E7E0D2",background:"#fff",padding:28,transition:"all 0.3s ease",minWidth:0}} onMouseEnter={e=>e.currentTarget.style.boxShadow="0 12px 36px rgba(107,90,58,0.12)"} onMouseLeave={e=>e.currentTarget.style.boxShadow="none"}>
              <span className="font-serif" style={{fontSize:40,lineHeight:0.6,color:"#C6A15B",display:"block",marginBottom:12}}>&ldquo;</span>
              <Stars rating={r.rating} />
              <p style={{fontSize:13,color:"#5F5B50",lineHeight:1.8,margin:"12px 0 16px",fontStyle:"italic"}}>{r.text}</p>
              <div style={{display:"flex",alignItems:"center",gap:10,paddingTop:12,borderTop:"1px solid #F2EEE6"}}>
                <div style={{width:36,height:36,background:"#1A3C34",color:"#fff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:600,flexShrink:0}}>{r.avatar}</div>
                <div style={{minWidth:0,overflow:"hidden"}}>
                  <p style={{fontSize:13,fontWeight:600,color:"#111",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.name}</p>
                  <p style={{fontSize:11,color:"#96917E",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){.testimonials-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:640px){
          .testimonials-section{padding:48px 0!important;}
          .testimonials-grid{grid-template-columns:1fr!important;gap:16px!important;}
          .testimonial-card{padding:20px!important;}
        }
      `}</style>
    </section>
  );
}

/* =========================================================  NEWSLETTER  ========================================================= */
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="newsletter-section" style={{background:"#171613",padding:"90px 24px"}}>
      <div style={{maxWidth:480,margin:"0 auto",textAlign:"center"}}>
        <p style={{fontSize:11,letterSpacing:"0.3em",textTransform:"uppercase",color:"#A9885A",marginBottom:12}}>Newsletter</p>
        <h2 className="font-serif newsletter-title" style={{fontSize:40,fontWeight:400,color:"#fff",marginBottom:12}}>Get 10% Off<br/>Your First Order</h2>
        <p style={{fontSize:13,color:"#8F8B7E",lineHeight:1.8,marginBottom:32}}>New arrival alerts, styling tips, and exclusive offers — no spam, we promise.</p>
        {sent ? (
          <div style={{border:"1px solid #3A382F",padding:"20px 24px",color:"#C6A15B",fontSize:13,letterSpacing:"0.04em",animation:"fadeIn 0.3s ease"}}>
            You're in — check your inbox for your discount code.
          </div>
        ) : (
          <form onSubmit={e=>{e.preventDefault();if(!email.trim())return;setSent(true);}} style={{display:"flex",gap:0}}>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com"
              style={{flex:1,background:"transparent",border:"1px solid #333",borderRight:"none",padding:"12px 16px",color:"#fff",fontSize:13,outline:"none"}} />
            <button type="submit" className="btn-teal" style={{flexShrink:0,padding:"12px 24px",letterSpacing:"0.1em"}}>Subscribe</button>
          </form>
        )}
        <p style={{fontSize:11,color:"#7A7568",marginTop:16,letterSpacing:"0.04em"}}>Use code <span style={{color:"#C6A15B",fontWeight:600,letterSpacing:"0.1em"}}>EID10</span> at checkout for 10% off.</p>
      </div>
      <style>{`@media(max-width:640px){.newsletter-section{padding:56px 20px!important;} .newsletter-title{font-size:30px!important;}}`}</style>
    </section>
  );
}

/* =========================================================  TRUST STRIP  ========================================================= */
function TrustStrip() {
  return (
    <section style={{borderTop:"1px solid #E7E0D2",padding:"28px 24px",background:"#FBF9F4"}}>
      <div style={{maxWidth:1320,margin:"0 auto",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:40}}>
        {[["lock","Secure Payments"],["truck","Free Shipping over Rs. 2,000"],["returns","30-Day Returns"],["box","Cash on Delivery"],["phone","Customer Support"]].map(([icon,label])=>(
          <div key={label} style={{display:"flex",alignItems:"center",gap:10}}>
            <LineIcon name={icon} size={17} color="#A9885A" />
            <span style={{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"#6B675C",fontWeight:500}}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================  HOW IT WORKS  ========================================================= */
function HowItWorksSection() {
  const steps=[{icon:"search",title:"Browse & Pick",desc:"Explore curated collections by category, fabric, or occasion."},{icon:"card",title:"Easy Checkout",desc:"Pay with JazzCash, Easypaisa, card, or Cash on Delivery."},{icon:"truck",title:"Fast Delivery",desc:"Delivered anywhere in Pakistan within 3–5 business days."},{icon:"returns",title:"30-Day Returns",desc:"Not happy? Return within 30 days, no questions asked."}];
  return (
    <section className="how-it-works-section" style={{background:"#F6F3ED",padding:"80px 0"}}>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"0 24px"}}>
        <div style={{textAlign:"center",marginBottom:48}}>
          <p style={{fontSize:11,letterSpacing:"0.3em",textTransform:"uppercase",color:"#A9885A",marginBottom:8}}>The Process</p>
          <h2 className="font-serif" style={{fontSize:36,fontWeight:400,color:"#111"}}>How MD Fashion Works</h2>
        </div>
        <div className="how-it-works-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:40,textAlign:"center"}}>
          {steps.map((s,i)=>(
            <div key={s.title}>
              <div style={{width:56,height:56,border:"1px solid #D9D2C2",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",transition:"all 0.3s"}} onMouseEnter={e=>e.currentTarget.style.borderColor="#A9885A"} onMouseLeave={e=>e.currentTarget.style.borderColor="#D9D2C2"}><LineIcon name={s.icon} size={22} color="#1A3C34" /></div>
              <p style={{fontSize:10,letterSpacing:"0.2em",color:"#A9885A",marginBottom:6,textTransform:"uppercase"}}>Step {i+1}</p>
              <p style={{fontSize:14,fontWeight:600,color:"#111",marginBottom:8}}>{s.title}</p>
              <p style={{fontSize:13,color:"#6B675C",lineHeight:1.7}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){.how-it-works-grid{grid-template-columns:repeat(2,1fr)!important;gap:28px 20px!important;}}
        @media(max-width:640px){.how-it-works-section{padding:48px 0!important;}}
        @media(max-width:480px){.how-it-works-grid{grid-template-columns:1fr!important;gap:32px!important;}}
      `}</style>
    </section>
  );
}

/* =========================================================  FOOTER — Bazaro style  ========================================================= */
function Footer() {
  const { navigate } = useApp();
  return (
    <footer style={{background:"#171613",color:"#8F8B7E",paddingTop:70}}>
      <div className="footer-grid" style={{maxWidth:1320,margin:"0 auto",padding:"0 24px 48px",display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:48}}>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
            <img src="/logo.png" alt="" onError={onImgError} style={{height:40,width:40,objectFit:"contain",flexShrink:0}} />
            <span className="font-serif" style={{fontSize:20,fontWeight:500,color:"#F6F3ED"}}>MD Fashion</span>
          </div>
          <p style={{fontSize:13,lineHeight:1.9,color:"#8F8B7E",fontWeight:300,maxWidth:260}}>Ethnic wear for everyday and every occasion. Designed and shipped across Pakistan.</p>
          <div style={{display:"flex",gap:12,marginTop:24}}>
            {["FB","IG","TW","YT"].map(s=>(
              <div key={s} style={{width:34,height:34,border:"1px solid #33312A",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.2s",fontSize:10,color:"#8F8B7E",letterSpacing:"0.05em"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#A9885A";e.currentTarget.style.color="#C6A15B";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#33312A";e.currentTarget.style.color="#8F8B7E";}}>{s}</div>
            ))}
          </div>
        </div>
        {[["Shop",[["Kids' Kurtas","category",{id:"kids"}],["New Arrivals","search",{query:"new"}],["Sale","search",{query:"sale"}]]],["Help",[["About Us","about"],["FAQs","faq"],["My Orders","account"]]],["Payment",[["JazzCash"],["Easypaisa"],["Visa/MC"],["COD"]]]].map(([title,items])=>(
          <div key={title}>
            <h3 style={{fontSize:10,letterSpacing:"0.28em",textTransform:"uppercase",color:"#A9885A",fontWeight:600,marginBottom:20}}>{title}</h3>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
              {items.map(([label,name,params])=>(
                <li key={label}>
                  {name ? (
                    <button onClick={()=>navigate(name,params)} style={{background:"none",border:"none",cursor:"pointer",fontSize:13,color:"#5F5B50",letterSpacing:"0.03em",transition:"color 0.2s",textAlign:"left"}}>{label}</button>
                  ) : (
                    <span style={{fontSize:12,color:"#5F5B50",letterSpacing:"0.08em",textTransform:"uppercase"}}>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{borderTop:"1px solid #26241E",padding:"22px 24px",textAlign:"center"}}>
        <p style={{fontSize:11,color:"#6B675C",letterSpacing:"0.12em",textTransform:"uppercase"}}>© 2026 MD Fashion · All rights reserved</p>
      </div>
      <style>{`
        @media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr!important;gap:32px!important;}}
        @media(max-width:480px){.footer-grid{grid-template-columns:1fr!important;gap:36px!important;padding:0 20px 40px!important;}}
      `}</style>
    </footer>
  );
}

function Toast() {
  const { toast } = useApp();
  if (!toast) return null;
  return (
    <div role="status" style={{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",background:"#1A3C34",color:"#F6F3ED",fontSize:12,letterSpacing:"0.08em",padding:"12px 24px",zIndex:200,animation:"toastIn 0.3s ease",whiteSpace:"nowrap",boxShadow:"0 8px 30px rgba(20,33,29,0.35)"}}>
      {toast}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <CategoryGrid />
      <NewArrivalsSection />
      <PromoBannersSection />
      <ShopThisLookSection />
      <StoreBanner />
      <PremiumShowcaseCarousel />
      <SherwaniSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <NewsletterSection />
      <TrustStrip />
    </>
  );
}

/* =========================================================  LISTING PAGE  ========================================================= */
function ActiveFilterChips({ filters, onRemoveColor, onRemoveSize, onClearPrice }) {
  const chips=[...filters.colors.map(c=>({label:`Color: ${c}`,onRemove:()=>onRemoveColor(c)})),...filters.sizes.map(s=>({label:`Size: ${s}`,onRemove:()=>onRemoveSize(s)})),...(filters.maxPrice<3000?[{label:`Max: ${formatPKR(filters.maxPrice)}`,onRemove:onClearPrice}]:[])];
  if (!chips.length) return null;
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:20}}>
      {chips.map(chip=>(
        <span key={chip.label} style={{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid #D9D2C2",fontSize:11,letterSpacing:"0.08em",padding:"4px 10px",animation:"fadeIn 0.2s ease"}}>
          {chip.label}
          <button onClick={chip.onRemove} style={{background:"none",border:"none",cursor:"pointer",fontSize:13,color:"#96917E",lineHeight:1}}>×</button>
        </span>
      ))}
    </div>
  );
}

function ListingPage({ mode }) {
  const { page, navigate } = useApp();
  const [filters, setFilters] = useState({ colors:[], sizes:[], maxPrice:3000 });
  const [sort, setSort] = useState("popular");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const categoryId = mode==="category" ? page.id : null;
  const query = mode==="search" ? (page.query||"") : "";

  const baseList = useMemo(()=>{
    let list=PRODUCTS;
    if(categoryId) list=list.filter(p=>p.category===categoryId);
    if(query){ const q=query.toLowerCase(); if(q==="sale") list=list.filter(p=>p.salePrice); else if(q==="new") list=list.filter(p=>p.isNew); else list=list.filter(p=>p.name.toLowerCase().includes(q)||p.fabric?.toLowerCase().includes(q)||p.colors?.some(c=>c.toLowerCase().includes(q))); }
    return list;
  },[categoryId,query]);

  const allColors = useMemo(()=>Array.from(new Set(baseList.flatMap(p=>p.colors))).sort(),[baseList]);
  const allSizes = useMemo(()=>Array.from(new Set(baseList.flatMap(p=>p.sizes))).sort((a,b)=>Number(a)-Number(b)),[baseList]);

  const filtered = useMemo(()=>{
    let list=baseList.filter(p=>{ const ep=getMinSizePrice(p); if(ep>filters.maxPrice) return false; if(filters.colors.length&&!p.colors.some(c=>filters.colors.includes(c))) return false; if(filters.sizes.length&&!p.sizes.some(s=>filters.sizes.includes(s))) return false; return true; });
    switch(sort){
      case "price-asc": return [...list].sort((a,b)=>getMinSizePrice(a)-getMinSizePrice(b));
      case "price-desc": return [...list].sort((a,b)=>getMinSizePrice(b)-getMinSizePrice(a));
      case "newest": return [...list].sort((a,b)=>(b.isNew?1:0)-(a.isNew?1:0));
      default: return [...list].sort((a,b)=>b.reviews-a.reviews);
    }
  },[baseList,filters,sort]);

  const toggleFilter=(key,value)=>setFilters(prev=>{ const s=new Set(prev[key]); s.has(value)?s.delete(value):s.add(value); return{...prev,[key]:Array.from(s)}; });
  const clearFilters=()=>setFilters({colors:[],sizes:[],maxPrice:3000});
  const title=mode==="category"?CATEGORIES.find(c=>c.id===categoryId)?.label||"Products":`Search: "${query}"`;

  return (
    <div style={{maxWidth:1320,margin:"0 auto",padding:"40px 24px"}}>
      <Breadcrumbs items={mode==="category"?[{label:"Home",page:"home"},{label:title}]:[{label:"Home",page:"home"},{label:"Search"}]} />
      <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:8,flexWrap:"wrap",gap:8}}>
        <h1 className="font-serif" style={{fontSize:36,fontWeight:400,color:"#111"}}>{title}</h1>
        {mode==="search" && <button onClick={()=>navigate("home")} style={{background:"none",border:"none",cursor:"pointer",fontSize:12,color:"#1A3C34",letterSpacing:"0.08em",textDecoration:"underline"}}>Clear search</button>}
      </div>
      <p style={{fontSize:12,color:"#96917E",letterSpacing:"0.08em",marginBottom:24,textTransform:"uppercase"}}>{filtered.length} product{filtered.length===1?"":"s"}</p>

      <button className="listing-filter-toggle" onClick={()=>setFiltersOpen(o=>!o)} style={{display:"none",border:"1px solid #D9D2C2",background:"#fff",padding:"10px 18px",fontSize:11,letterSpacing:"0.16em",textTransform:"uppercase",cursor:"pointer",marginBottom:16}}>
        {filtersOpen?"Hide Filters":"Show Filters"}
      </button>
      <style>{`.listing-filter-toggle{display:block!important} @media(min-width:768px){.listing-filter-toggle{display:none!important}}`}</style>

      <ActiveFilterChips filters={filters} onRemoveColor={c=>toggleFilter("colors",c)} onRemoveSize={s=>toggleFilter("sizes",s)} onClearPrice={()=>setFilters(f=>({...f,maxPrice:3000}))} />

      <div style={{display:"flex",gap:40}}>
        {/* Sidebar */}
        <aside style={{width:200,flexShrink:0,display:filtersOpen?"block":"block"}}>
          <div style={{position:"sticky",top:80}}>
            <div style={{marginBottom:32}}>
              <h3 style={{fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:600,marginBottom:16,paddingBottom:8,borderBottom:"1px solid #E7E0D2"}}>Price (max)</h3>
              <input type="range" min={1000} max={3000} step={100} value={filters.maxPrice} onChange={e=>setFilters(f=>({...f,maxPrice:Number(e.target.value)}))} style={{width:"100%"}} />
              <p style={{fontSize:12,color:"#6B675C",marginTop:6}}>Up to {formatPKR(filters.maxPrice)}</p>
            </div>
            {allColors.length>0 && (
              <div style={{marginBottom:32}}>
                <h3 style={{fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:600,marginBottom:16,paddingBottom:8,borderBottom:"1px solid #E7E0D2"}}>Color</h3>
                <div style={{display:"flex",flexDirection:"column",gap:10}}>
                  {allColors.map(c=>(
                    <label key={c} style={{display:"flex",alignItems:"center",gap:8,fontSize:13,cursor:"pointer",color:"#5F5B50"}}>
                      <input type="checkbox" checked={filters.colors.includes(c)} onChange={()=>toggleFilter("colors",c)} />
                      <span style={{width:14,height:14,borderRadius:"50%",border:"1px solid #D9D2C2",flexShrink:0,background:COLOR_SWATCHES[c]||"#ccc"}} />
                      {c}
                    </label>
                  ))}
                </div>
              </div>
            )}
            {allSizes.length>0 && (
              <div style={{marginBottom:24}}>
                <h3 style={{fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:600,marginBottom:16,paddingBottom:8,borderBottom:"1px solid #E7E0D2"}}>Size</h3>
                <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                  {allSizes.map(s=>(
                    <button key={s} onClick={()=>toggleFilter("sizes",s)} style={{width:40,height:34,border:filters.sizes.includes(s)?"1px solid #111":"1px solid #D9D2C2",background:filters.sizes.includes(s)?"#111":"#fff",color:filters.sizes.includes(s)?"#fff":"#111",fontSize:11,fontWeight:500,cursor:"pointer",transition:"all 0.2s"}}>{s}</button>
                  ))}
                </div>
              </div>
            )}
            {(filters.colors.length>0||filters.sizes.length>0||filters.maxPrice<3000) && (
              <button onClick={clearFilters} style={{background:"none",border:"none",cursor:"pointer",fontSize:11,color:"#1A3C34",letterSpacing:"0.08em",textDecoration:"underline"}}>Clear all filters</button>
            )}
          </div>
        </aside>

        <div style={{flex:1}}>
          <div style={{display:"flex",justifyContent:"flex-end",marginBottom:20}}>
            <select value={sort} onChange={e=>setSort(e.target.value)} style={{border:"1px solid #D9D2C2",padding:"8px 12px",fontSize:12,letterSpacing:"0.06em",outline:"none",cursor:"pointer",background:"#fff"}}>
              <option value="popular">Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
          {filtered.length===0 ? (
            <div style={{textAlign:"center",padding:"80px 0"}}>
              <p className="font-serif" style={{fontSize:24,color:"#96917E",marginBottom:16}}>No products found</p>
              <button className="btn-primary" onClick={clearFilters}>Clear Filters</button>
            </div>
          ) : (
            <div className="listing-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}}>
              {filtered.map(p=><ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){aside{display:${filtersOpen?"block":"none"}!important;width:100%!important;} .listing-grid{grid-template-columns:repeat(2,1fr)!important;gap:14px!important;}}
      `}</style>
    </div>
  );
}

/* =========================================================  PRODUCT PAGE  ========================================================= */
function ProductPage() {
  const { page, navigate, addToCart, wishlist, toggleWishlist, user, myReviews } = useApp();
  const product = PRODUCTS.find(p=>p.id===page.id);
  // ProductPage is remounted via key={page.id} at the router (see PageRouter)
  // whenever the user navigates to a different product, so these just need
  // sane initial values — no reset-on-navigation effect required.
  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(product?.colors[0] ?? null);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("description");
  const [error, setError] = useState("");
  const [productReviews, setProductReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  useEffect(() => {
    if (!product) return;
    let cancelled = false;
    setReviewsLoading(true);
    api.getProductReviews(product.id)
      .then(res => { if (!cancelled) setProductReviews(res.reviews || []); })
      .catch(() => { if (!cancelled) setProductReviews([]); })
      .finally(() => { if (!cancelled) setReviewsLoading(false); });
    return () => { cancelled = true; };
  }, [product?.id]);

  if (!product) return (
    <div style={{maxWidth:1320,margin:"0 auto",padding:"80px 24px",textAlign:"center"}}>
      <p className="font-serif" style={{fontSize:24,color:"#96917E",marginBottom:16}}>Product not found.</p>
      <button className="btn-outline" onClick={()=>navigate("home")}>Back to Home</button>
    </div>
  );

  const related = PRODUCTS.filter(p=>p.category===product.category&&p.id!==product.id).slice(0,4);
  const isWishlisted = wishlist.includes(product.id);
  const hasReviewedProduct = myReviews.some(r => r.productId === product.id);
  const categoryLabel = CATEGORIES.find(c=>c.id===product.category)?.label;
  const colorGallery = product.colorImages?.[color];
  const galleryImages = (colorGallery && colorGallery.length) ? colorGallery : (product.images || []);
  const mainImage = galleryImages[activeImg] || galleryImages[0];
  const currentPrice = size ? getSizePrice(product, size) : getMinSizePrice(product);

  return (
    <div style={{maxWidth:1320,margin:"0 auto",padding:"40px 24px"}}>
      <Breadcrumbs items={[{label:"Home",page:"home"},{label:categoryLabel,page:"category",params:{id:product.category}},{label:product.name}]} />
      <style>{`@media(max-width:768px){.pdp-grid{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
      <div className="pdp-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60}}>
        {/* Gallery */}
        <div>
          <div style={{aspectRatio:"3/4",overflow:"hidden",background:"#F2EEE6",marginBottom:8}}>
            <img src={mainImage} alt={product.name} onError={onImgError} style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.5s ease",cursor:"zoom-in"}} onMouseEnter={e=>e.target.style.transform="scale(1.05)"} onMouseLeave={e=>e.target.style.transform="scale(1)"} />
          </div>
          {galleryImages.length>1 && (
            <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
              {galleryImages.map((img,i)=>(
                <button key={i} onClick={()=>setActiveImg(i)} style={{width:64,height:80,overflow:"hidden",border:activeImg===i?"2px solid #111":"2px solid transparent",opacity:activeImg===i?1:0.6,transition:"all 0.2s",cursor:"pointer",background:"none",padding:0,flexShrink:0}}>
                  <img src={img} alt="" onError={onImgError} style={{width:"100%",height:"100%",objectFit:"cover"}} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Buy area */}
        <div style={{position:"sticky",top:80,alignSelf:"start"}}>
          <p style={{fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",color:"#96917E",marginBottom:8}}>{product.fabric}</p>
          <h1 className="font-serif" style={{fontSize:"clamp(28px,3vw,40px)",fontWeight:400,color:"#111",lineHeight:1.2,marginBottom:12}}>{product.name}</h1>
          <div style={{marginBottom:12}}><Stars rating={product.rating} count={product.reviews} /></div>
          <div style={{marginBottom:20}}>
            <span style={{fontSize:"20px",fontWeight:600,color:"#1A3C34"}}>{formatPKR(currentPrice)}</span>
            {!size && <span style={{fontSize:"12px",color:"#96917E",marginLeft:8}}>(select size for exact price)</span>}
          </div>
          <p style={{fontSize:13,color:"#6B675C",lineHeight:1.8,marginBottom:24}}>{product.description}</p>

          {/* Color */}
          <div style={{marginBottom:20}}>
            <p style={{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:600,marginBottom:10}}>Color: <span style={{color:"#1A3C34",fontWeight:400}}>{color}</span></p>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {product.colors.map(c=>(
                <button key={c} onClick={()=>{setColor(c);setActiveImg(0);}} style={{display:"flex",alignItems:"center",gap:6,border:color===c?"1px solid #111":"1px solid #E7E0D2",padding:"6px 12px",background:"#fff",cursor:"pointer",fontSize:12,transition:"all 0.2s"}}>
                  <span style={{width:14,height:14,borderRadius:"50%",background:COLOR_SWATCHES[c]||"#ccc",flexShrink:0}} />
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Size — shows price per size */}
          <div style={{marginBottom:20}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",rowGap:4,columnGap:12,marginBottom:10}}>
              <p style={{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:600,margin:0,minWidth:0}}>Size {size && <span style={{color:"#1A3C34",fontWeight:400}}>— {formatPKR(getSizePrice(product, size))}</span>}</p>
              <button type="button" className="nav-link" onClick={()=>setShowSizeGuide(true)} style={{background:"none",border:"none",cursor:"pointer",fontSize:11,color:"#1A3C34",letterSpacing:"0.04em",textTransform:"uppercase",fontWeight:500,flexShrink:0}}>Size Guide</button>
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {product.sizes.map(s=>(
                <button key={s} onClick={()=>{setSize(s);setError("");}} title={`${formatPKR(getSizePrice(product, s))}`} style={{minWidth:48,height:40,padding:"0 8px",border:size===s?"1px solid #111":"1px solid #D9D2C2",background:size===s?"#111":"#fff",color:size===s?"#fff":"#111",fontSize:12,fontWeight:500,cursor:"pointer",transition:"all 0.2s",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",lineHeight:1.1,flexShrink:0}}>
                  <span>{s}</span>
                  <span style={{fontSize:9,opacity:0.85,whiteSpace:"nowrap"}}>{formatPKR(getSizePrice(product, s)).replace("PKR","")}</span>
                </button>
              ))}
            </div>
            {error && <p style={{fontSize:11,color:"#B3372B",marginTop:4,animation:"fadeIn 0.2s ease"}}>{error}</p>}
          </div>

          {/* Qty */}
          <div style={{marginBottom:24}}>
            <p style={{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:600,marginBottom:10}}>Quantity</p>
            <div style={{display:"inline-flex",alignItems:"center",border:"1px solid #D9D2C2"}}>
              <button onClick={()=>setQty(q=>Math.max(1,q-1))} style={{width:40,height:40,border:"none",background:"#fff",cursor:"pointer",fontSize:18,color:"#111"}}>−</button>
              <span style={{width:40,textAlign:"center",fontSize:13,fontWeight:500}}>{qty}</span>
              <button onClick={()=>setQty(q=>q+1)} style={{width:40,height:40,border:"none",background:"#fff",cursor:"pointer",fontSize:18,color:"#111"}}>+</button>
            </div>
          </div>

          {/* CTA */}
          <div style={{display:"flex",gap:8,marginBottom:24}}>
            <button className="btn-primary" style={{flex:1,justifyContent:"center",padding:"14px 24px"}} onClick={()=>{if(!size){setError("Please select a size.");return;}setError("");addToCart(product,size,color,qty);}}>Add to Cart</button>
            <button onClick={()=>toggleWishlist(product.id)} style={{width:48,height:48,border:"1px solid #D9D2C2",background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,transition:"all 0.2s",flexShrink:0}}>
              <LineIcon name="heart" size={17} color={isWishlisted?"#9E3B32":"#96917E"} style={{fill:isWishlisted?"#9E3B32":"none"}} />
            </button>
          </div>

          {/* Trust */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",border:"1px solid #E7E0D2",marginBottom:24}}>
            {[["truck","Free Shipping","over Rs. 2,000"],["returns","30-Day","Returns"],["box","Cash on","Delivery"]].map(([icon,l1,l2],i)=>(
              <div key={l1} style={{padding:"14px 12px",textAlign:"center",borderRight:i<2?"1px solid #E7E0D2":"none"}}>
                <p style={{marginBottom:6,display:"flex",justifyContent:"center"}}><LineIcon name={icon} size={18} color="#A9885A" /></p>
                <p style={{fontSize:11,fontWeight:600,color:"#111",letterSpacing:"0.05em"}}>{l1}</p>
                <p style={{fontSize:10,color:"#96917E"}}>{l2}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div>
            <div style={{display:"flex",borderBottom:"1px solid #E7E0D2",gap:0}}>
              {[["description","Description"],["care","Fabric & Care"],["reviews",`Reviews (${product.reviews})`]].map(([id,label])=>(
                <button key={id} onClick={()=>setTab(id)} style={{padding:"10px 16px",fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:600,border:"none",background:"none",cursor:"pointer",color:tab===id?"#111":"#999",borderBottom:tab===id?"2px solid #111":"2px solid transparent",marginBottom:-1,transition:"all 0.2s"}}>{label}</button>
              ))}
            </div>
            <div style={{padding:"20px 0",fontSize:13,color:"#6B675C",lineHeight:1.8,animation:"fadeIn 0.2s ease"}}>
              {tab==="description" && <p>{product.description} Fabric: {product.fabric}.</p>}
              {tab==="care" && <p>{product.care}</p>}
              {tab==="reviews" && (
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}><Stars rating={product.rating} /><span style={{color:"#96917E",fontSize:12}}>based on {product.reviews} reviews</span></div>

                  <div style={{marginBottom:20}}>
                    {!user ? (
                      <button onClick={()=>navigate("account")} style={{background:"none",border:"none",cursor:"pointer",fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase",color:"#1A3C34",textDecoration:"underline",padding:0}}>Sign in to write a review</button>
                    ) : hasReviewedProduct ? (
                      <p style={{fontSize:11,color:"#1A3C34",fontWeight:600}}>✓ You've reviewed this product</p>
                    ) : showReviewForm ? (
                      <ReviewForm productId={product.id} onDone={()=>setShowReviewForm(false)} />
                    ) : (
                      <button onClick={()=>setShowReviewForm(true)} style={{background:"none",border:"none",cursor:"pointer",fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase",color:"#1A3C34",textDecoration:"underline",padding:0}}>Write a Review</button>
                    )}
                  </div>

                  {reviewsLoading ? (
                    <p style={{color:"#96917E"}}>Loading reviews…</p>
                  ) : productReviews.length===0 ? (
                    <p style={{color:"#96917E"}}>No reviews yet — be the first to share your experience.</p>
                  ) : (
                    productReviews.map((r,i)=>(
                      <div key={i} style={{borderTop:"1px solid #E7E0D2",paddingTop:16,marginTop:16}}>
                        <p style={{fontSize:13,fontWeight:600,color:"#111",marginBottom:4}}>{r.customerName}</p>
                        <Stars rating={r.rating} />
                        <p style={{marginTop:6}}>{r.comment}</p>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {related.length>0 && (
        <section style={{marginTop:80,borderTop:"1px solid #E7E0D2",paddingTop:60}}>
          <h2 className="font-serif" style={{fontSize:32,fontWeight:400,marginBottom:32,color:"#111"}}>You might also like</h2>
          <div className="related-products-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24}}>
            {related.map(p=><ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}

      {showSizeGuide && (
        <div style={{position:"fixed",inset:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:16,animation:"fadeIn 0.2s ease"}}>
          <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)"}} onClick={()=>setShowSizeGuide(false)} />
          <div style={{position:"relative",background:"#fff",maxWidth:520,width:"100%",maxHeight:"90vh",overflowY:"auto",animation:"modalIn 0.25s ease"}}>
            <button onClick={()=>setShowSizeGuide(false)} style={{position:"absolute",top:12,right:12,width:32,height:32,border:"1px solid #E7E0D2",background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"#6B675C",zIndex:1}}>✕</button>
            <img src="/sizechart.png" alt="MD Fashion kids' size chart — sizes 16 to 36 by age" onError={onImgError} style={{width:"100%",height:"auto",display:"block"}} />
          </div>
        </div>
      )}

      <style>{`
        @media(max-width:768px){.related-products-grid{grid-template-columns:repeat(2,1fr)!important;gap:16px!important;}}
      `}</style>
    </div>
  );
}

/* =========================================================  CART PAGE  ========================================================= */
function CartPage() {
  const { cart, updateQty, removeFromCart, navigate } = useApp();
  const [coupon, setCoupon] = useState("");
  const [couponMsg, setCouponMsg] = useState(null);
  const [discount, setDiscount] = useState(0);
  const items = cart.map(item=>{ const p=PRODUCTS.find(p=>p.id===item.id); return p?{...item,product:p}:null; }).filter(Boolean);
  const subtotal = items.reduce((s,i)=>s + getSizePrice(i.product, i.size) * i.qty, 0);
  const shipping = subtotal===0||subtotal>=2000 ? 0 : 150;
  const discAmt = discount ? Math.round(subtotal*discount) : 0;
  const total = subtotal - discAmt + shipping;

  const applyCoupon = e => {
    e.preventDefault();
    const c=coupon.trim().toUpperCase();
    if(c==="EID10"){setDiscount(0.1);setCouponMsg({t:"s",msg:"10% discount applied!"});}
    else if(!c) setCouponMsg({t:"e",msg:"Enter a coupon code."});
    else {setDiscount(0);setCouponMsg({t:"e",msg:"Invalid coupon code."});}
  };

  if (items.length===0) return (
    <div style={{maxWidth:500,margin:"0 auto",padding:"100px 24px",textAlign:"center"}}>
      <p style={{marginBottom:20,display:"flex",justifyContent:"center"}}><LineIcon name="bag" size={44} color="#C8BFA9" strokeWidth={1.1} /></p>
      <h1 className="font-serif" style={{fontSize:32,fontWeight:400,marginBottom:8}}>Your cart is empty</h1>
      <p style={{fontSize:13,color:"#96917E",marginBottom:24}}>Browse our collection and find something you love.</p>
      <button className="btn-primary" onClick={()=>navigate("home")}>Continue Shopping</button>
    </div>
  );

  return (
    <div style={{maxWidth:1200,margin:"0 auto",padding:"40px 24px"}}>
      <Breadcrumbs items={[{label:"Home",page:"home"},{label:"Cart"}]} />
      <h1 className="font-serif" style={{fontSize:40,fontWeight:400,marginBottom:32,color:"#111"}}>Shopping Cart</h1>
      {subtotal>0&&subtotal<2000 && <div style={{border:"1px solid #C6A15B",background:"#FFFBF0",padding:"10px 16px",fontSize:12,color:"#111",marginBottom:20,letterSpacing:"0.06em"}}>Add {formatPKR(2000-subtotal)} more for free shipping!</div>}

      <div className="cart-grid" style={{display:"grid",gridTemplateColumns:"1fr 340px",gap:40}}>
        <div>
          <div className="cart-header-row" style={{display:"grid",gridTemplateColumns:"auto 1fr auto auto",gap:16,padding:"0 0 12px",borderBottom:"1px solid #E7E0D2",fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",color:"#96917E",fontWeight:600}}>
            <span style={{gridColumn:"span 2"}}>Product</span><span style={{textAlign:"center"}}>Quantity</span><span style={{textAlign:"right"}}>Total</span>
          </div>
          {items.map(item=>(
            <div key={`${item.id}-${item.size}-${item.color}`} className="cart-item-row" style={{display:"grid",gridTemplateColumns:"80px 1fr auto auto",gap:16,alignItems:"center",padding:"16px 0",borderBottom:"1px solid #F2EEE6"}}>
              <img className="cart-item-img" src={item.product.images[0]} alt={item.product.name} onError={onImgError} style={{width:80,height:96,objectFit:"cover",background:"#F2EEE6"}} />
              <div className="cart-item-details">
                <p style={{fontSize:13,fontWeight:500,color:"#111",marginBottom:4}}>{item.product.name}</p>
                <p style={{fontSize:11,color:"#96917E",letterSpacing:"0.06em"}}>Size: {item.size} · Color: {item.color}</p>
                <button onClick={()=>removeFromCart(item.id,item.size,item.color)} style={{background:"none",border:"none",cursor:"pointer",fontSize:11,color:"#B3372B",marginTop:6,padding:0,letterSpacing:"0.06em",textDecoration:"underline"}}>Remove</button>
              </div>
              <div className="cart-item-qty" style={{display:"inline-flex",alignItems:"center",border:"1px solid #D9D2C2"}}>
                <button onClick={()=>updateQty(item.id,item.size,item.color,item.qty-1)} style={{width:32,height:32,border:"none",background:"#fff",cursor:"pointer",fontSize:16}}>−</button>
                <span style={{width:32,textAlign:"center",fontSize:12,fontWeight:500}}>{item.qty}</span>
                <button onClick={()=>updateQty(item.id,item.size,item.color,item.qty+1)} style={{width:32,height:32,border:"none",background:"#fff",cursor:"pointer",fontSize:16}}>+</button>
              </div>
              <div className="cart-item-total" style={{textAlign:"right"}}><span style={{fontSize:"14px",fontWeight:600,color:"#111"}}>{formatPKR(getSizePrice(item.product, item.size) * item.qty)}</span></div>
            </div>
          ))}
          <button onClick={()=>navigate("home")} style={{background:"none",border:"none",cursor:"pointer",fontSize:12,color:"#1A3C34",letterSpacing:"0.08em",marginTop:16,textDecoration:"underline"}}>← Continue Shopping</button>
        </div>

        <div style={{border:"1px solid #E7E0D2",background:"#fff",padding:28,alignSelf:"start",position:"sticky",top:100}}>
          <h2 style={{fontSize:13,fontWeight:600,letterSpacing:"0.18em",textTransform:"uppercase",marginBottom:20,paddingBottom:14,borderBottom:"1px solid #E7E0D2"}}>Order Summary</h2>
          <form onSubmit={applyCoupon} style={{marginBottom:20}}>
            <div style={{display:"flex",gap:0}}>
              <input type="text" value={coupon} onChange={e=>setCoupon(e.target.value)} placeholder="Coupon code (try EID10)" style={{flex:1,border:"1px solid #D9D2C2",borderRight:"none",padding:"8px 12px",fontSize:12,outline:"none"}} />
              <button type="submit" style={{border:"1px solid #111",background:"#111",color:"#fff",padding:"8px 16px",fontSize:11,letterSpacing:"0.1em",cursor:"pointer"}}>Apply</button>
            </div>
            {couponMsg && <p style={{fontSize:11,color:couponMsg.t==="s"?"#1A3C34":"#B3372B",marginTop:4}}>{couponMsg.msg}</p>}
          </form>
          <dl style={{display:"flex",flexDirection:"column",gap:10,fontSize:13}}>
            <div style={{display:"flex",justifyContent:"space-between",color:"#6B675C"}}><dt>Subtotal</dt><dd>{formatPKR(subtotal)}</dd></div>
            {discAmt>0 && <div style={{display:"flex",justifyContent:"space-between",color:"#1A3C34"}}><dt>Discount</dt><dd>−{formatPKR(discAmt)}</dd></div>}
            <div style={{display:"flex",justifyContent:"space-between",color:"#6B675C"}}><dt>Shipping</dt><dd>{shipping===0?<span style={{color:"#1A3C34"}}>Free</span>:formatPKR(shipping)}</dd></div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:15,fontWeight:700,borderTop:"1px solid #E7E0D2",paddingTop:10,marginTop:4}}><dt>Total</dt><dd>{formatPKR(total)}</dd></div>
          </dl>
          <button className="btn-primary" style={{width:"100%",justifyContent:"center",marginTop:20}} onClick={()=>navigate("checkout")}>Proceed to Checkout →</button>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){.cart-grid{grid-template-columns:1fr!important;}}
        @media(max-width:640px){
          .cart-header-row{display:none!important;}
          .cart-item-row{
            grid-template-columns:72px 1fr!important;
            grid-template-rows:auto auto auto!important;
            row-gap:8px!important;
            column-gap:14px!important;
          }
          .cart-item-img{grid-column:1!important;grid-row:1/4!important;width:72px!important;height:88px!important;}
          .cart-item-details{grid-column:2!important;grid-row:1!important;}
          .cart-item-qty{grid-column:2!important;grid-row:2!important;justify-self:start!important;}
          .cart-item-total{grid-column:2!important;grid-row:3!important;justify-self:start!important;text-align:left!important;}
        }
      `}</style>
    </div>
  );
}

/* =========================================================  CHECKOUT  ========================================================= */
function CheckoutPage() {
  const { cart, navigate, placeOrder, user, addresses, addAddress, showToast } = useApp();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name:user?.name||"", email:user?.email||"", phone:user?.phone||"", address:"", city:"", postalCode:"", country:"Pakistan", payment:"cod" });
  const [selectedAddressId, setSelectedAddressId] = useState("new");
  const [saveAddress, setSaveAddress] = useState(true);
  const [errors, setErrors] = useState({});
  const [confirmedOrder, setConfirmedOrder] = useState(null);
  const [placing, setPlacing] = useState(false);
  const items = cart.map(item=>{ const p=PRODUCTS.find(p=>p.id===item.id); return p?{...item,product:p}:null; }).filter(Boolean);
  const subtotal = items.reduce((s,i)=>s + getSizePrice(i.product, i.size) * i.qty, 0);
  const shipping = subtotal===0||subtotal>=2000?0:150;
  const total = subtotal+shipping;

  const validate = () => {
    const e={};
    if(!form.name.trim()) e.name="Required";
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email="Valid email required";
    if(!/^03\d{9}$/.test(form.phone.replace(/[\s-]/g,""))) e.phone="Format: 03001234567";
    if(!form.address.trim()) e.address="Required";
    if(!form.city.trim()) e.city="Required";
    if(!/^\d{5}$/.test(form.postalCode)) e.postalCode="5-digit code";
    setErrors(e); return Object.keys(e).length===0;
  };

  const hf=(k,v)=>setForm(f=>({...f,[k]:v}));
  const inputStyle={width:"100%",border:"none",borderBottom:"1px solid #D9D2C2",padding:"10px 0",fontSize:14,outline:"none",background:"transparent",letterSpacing:"0.02em",transition:"border-color 0.2s"};

  const selectSavedAddress = (id) => {
    setSelectedAddressId(id);
    if (id==="new") return;
    const addr = addresses.find(a=>a.id===id);
    if (addr) setForm(f=>({...f, address:addr.line, city:addr.city, postalCode:addr.postalCode}));
  };

  const placeOrderHandler = async () => {
    setPlacing(true);
    try {
      if (selectedAddressId==="new" && saveAddress) {
        await addAddress({ label:"Home", line:form.address, city:form.city, postalCode:form.postalCode });
      }
      const o = await placeOrder({ ...form, total, subtotal, shipping });
      setConfirmedOrder(o);
      setStep(3);
    } catch (err) {
      showToast(err.message);
    } finally {
      setPlacing(false);
    }
  };

  if (!user) return (
    <div style={{maxWidth:500,margin:"0 auto",padding:"80px 24px",textAlign:"center"}}>
      <p className="font-serif" style={{fontSize:24,color:"#96917E",marginBottom:16}}>Sign in to checkout</p>
      <p style={{fontSize:13,color:"#6B675C",marginBottom:28}}>Create an account or sign in so your order is saved to your order history.</p>
      <button className="btn-primary" onClick={()=>navigate("account")}>Sign In / Create Account</button>
    </div>
  );

  if (items.length===0&&!confirmedOrder) return <div style={{maxWidth:500,margin:"0 auto",padding:"80px 24px",textAlign:"center"}}><p className="font-serif" style={{fontSize:24,color:"#96917E",marginBottom:16}}>Your cart is empty</p><button className="btn-outline" onClick={()=>navigate("home")}>Continue shopping</button></div>;

  if (step===3&&confirmedOrder) return (
    <div style={{maxWidth:540,margin:"0 auto",padding:"100px 24px",textAlign:"center",animation:"fadeIn 0.4s ease"}}>
      <div style={{marginBottom:20,display:"flex",justifyContent:"center"}}><LineIcon name="check" size={44} color="#1A3C34" strokeWidth={1.2} /></div>
      <h1 className="font-serif" style={{fontSize:36,fontWeight:400,marginBottom:12}}>Thank you, {confirmedOrder.name}!</h1>
      <p style={{fontSize:13,color:"#6B675C",marginBottom:6}}>Order <strong style={{color:"#1A3C34"}}>#{confirmedOrder.id}</strong> placed successfully.</p>
      <p style={{fontSize:13,color:"#96917E",marginBottom:32}}>Confirmation sent to {confirmedOrder.email}. Estimated delivery: 3–5 business days.</p>
      <div style={{display:"flex",justifyContent:"center",gap:16}}>
        <button className="btn-outline" onClick={()=>navigate("account",{tab:"orders"})}>View Orders</button>
        <button className="btn-primary" onClick={()=>navigate("home")}>Continue Shopping</button>
      </div>
    </div>
  );

  return (
    <div style={{maxWidth:1200,margin:"0 auto",padding:"40px 24px"}}>
      <Breadcrumbs items={[{label:"Home",page:"home"},{label:"Cart",page:"cart"},{label:"Checkout"}]} />
      <h1 className="font-serif" style={{fontSize:40,fontWeight:400,marginBottom:32}}>Checkout</h1>

      <div style={{display:"flex",gap:8,marginBottom:40,alignItems:"center",flexWrap:"wrap"}}>
        {["Shipping","Payment & Review"].map((s,i)=>(
          <React.Fragment key={s}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:30,height:30,borderRadius:"50%",border:"1px solid",borderColor:step>=i+1?"#1A3C34":"#D9D2C2",background:step>=i+1?"#1A3C34":"transparent",color:step>=i+1?"#F6F3ED":"#96917E",fontSize:11,fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center"}}>{i+1}</div>
              <span style={{fontSize:11,letterSpacing:"0.16em",textTransform:"uppercase",color:step>=i+1?"#1D1C18":"#96917E",fontWeight:step>=i+1?600:400}}>{s}</span>
            </div>
            {i===0 && <span style={{color:"#D9D2C2",fontSize:18,margin:"0 8px"}}>—</span>}
          </React.Fragment>
        ))}
      </div>

      <div className="checkout-grid" style={{display:"grid",gridTemplateColumns:"1fr 340px",gap:48}}>
        <div>
          {step===1 && (
            <div style={{animation:"fadeIn 0.25s ease"}}>
              <h2 style={{fontSize:12,letterSpacing:"0.2em",textTransform:"uppercase",fontWeight:600,marginBottom:24}}>Shipping Information</h2>
              {addresses.length>0 && (
                <div style={{marginBottom:24}}>
                  <label style={labelStyle}>Use a saved address</label>
                  <select value={selectedAddressId} onChange={e=>selectSavedAddress(e.target.value)} style={{width:"100%",border:"1px solid #D9D2C2",borderRadius:6,padding:"10px 12px",fontSize:13,background:"#fff"}}>
                    <option value="new">Enter a new address</option>
                    {addresses.map(a=> <option key={a.id} value={a.id}>{a.label} — {a.line}, {a.city}</option>)}
                  </select>
                </div>
              )}
              <div className="checkout-form-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
                {[["name","Full Name","text"],["email","Email","email"],["phone","Phone","tel"],["address","Street Address","text"]].map(([k,label,type])=>(
                  <div key={k} style={{gridColumn:k==="address"?"span 2":"auto"}}>
                    <label style={{display:"block",fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:600,color:"#96917E",marginBottom:6}}>{label}</label>
                    <input type={type} value={form[k]} onChange={e=>hf(k,e.target.value)} style={inputStyle} onFocus={e=>e.target.style.borderColor="#A9885A"} onBlur={e=>e.target.style.borderColor="#D9D2C2"} />
                    {errors[k] && <p style={{fontSize:11,color:"#B3372B",marginTop:3}}>{errors[k]}</p>}
                  </div>
                ))}
                <div>
                  <label style={{display:"block",fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:600,color:"#96917E",marginBottom:6}}>City</label>
                  <input type="text" value={form.city} onChange={e=>hf("city",e.target.value)} style={inputStyle} onFocus={e=>e.target.style.borderColor="#A9885A"} onBlur={e=>e.target.style.borderColor="#D9D2C2"} />
                  {errors.city && <p style={{fontSize:11,color:"#B3372B",marginTop:3}}>{errors.city}</p>}
                </div>
                <div>
                  <label style={{display:"block",fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:600,color:"#96917E",marginBottom:6}}>Postal Code</label>
                  <input type="text" value={form.postalCode} onChange={e=>hf("postalCode",e.target.value)} style={inputStyle} onFocus={e=>e.target.style.borderColor="#A9885A"} onBlur={e=>e.target.style.borderColor="#D9D2C2"} />
                  {errors.postalCode && <p style={{fontSize:11,color:"#B3372B",marginTop:3}}>{errors.postalCode}</p>}
                </div>
              </div>
              {selectedAddressId==="new" && (
                <label style={{display:"flex",alignItems:"center",gap:8,fontSize:12,color:"#6B675C",marginTop:20,cursor:"pointer"}}>
                  <input type="checkbox" checked={saveAddress} onChange={e=>setSaveAddress(e.target.checked)} />
                  Save this address for future orders
                </label>
              )}
              <button className="btn-primary" style={{marginTop:32}} onClick={()=>{if(validate())setStep(2);}}>Continue to Payment →</button>
            </div>
          )}
          {step===2 && (
            <div style={{animation:"fadeIn 0.25s ease"}}>
              <h2 style={{fontSize:12,letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:600,marginBottom:24}}>Payment Method</h2>
              <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:32}}>
                {[{id:"jazzcash",l:"JazzCash",h:"Pay via JazzCash mobile wallet"},{id:"easypaisa",l:"Easypaisa",h:"Pay via Easypaisa mobile wallet"},{id:"card",l:"Credit / Debit Card",h:"Visa, Mastercard"},{id:"cod",l:"Cash on Delivery",h:"Pay when your order arrives"}].map(opt=>(
                  <label key={opt.id} style={{display:"flex",alignItems:"flex-start",gap:12,border:"1px solid",borderColor:form.payment===opt.id?"#1A3C34":"#E7E0D2",padding:"16px 20px",cursor:"pointer",transition:"border-color 0.2s",background:"#fff"}}>
                    <input type="radio" name="payment" value={opt.id} checked={form.payment===opt.id} onChange={()=>hf("payment",opt.id)} style={{marginTop:2}} />
                    <span>
                      <span style={{display:"block",fontSize:13,fontWeight:500,color:"#111"}}>{opt.l}</span>
                      <span style={{display:"block",fontSize:11,color:"#96917E",marginTop:2}}>{opt.h}</span>
                    </span>
                  </label>
                ))}
              </div>
              <div style={{display:"flex",alignItems:"center",gap:16}}>
                <button style={{background:"none",border:"none",cursor:"pointer",fontSize:12,color:"#1A3C34",letterSpacing:"0.08em",textDecoration:"underline"}} onClick={()=>setStep(1)}>← Back</button>
                <button className="btn-primary" disabled={placing} style={{opacity:placing?0.6:1}} onClick={e=>{e.preventDefault();placeOrderHandler();}}>{placing?"Placing Order…":"Place Order →"}</button>
              </div>
            </div>
          )}
        </div>

        <div style={{border:"1px solid #E7E0D2",background:"#fff",padding:28,alignSelf:"start",position:"sticky",top:100}}>
          <h2 style={{fontSize:12,letterSpacing:"0.18em",textTransform:"uppercase",fontWeight:600,marginBottom:16,paddingBottom:14,borderBottom:"1px solid #E7E0D2"}}>Order Summary</h2>
          <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:16,maxHeight:200,overflowY:"auto"}}>
            {items.map(item=>(
              <div key={`${item.id}-${item.size}-${item.color}`} style={{display:"flex",justifyContent:"space-between",fontSize:12,gap:8}}>
                <span style={{color:"#6B675C",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.product.name} ×{item.qty}</span>
                <span style={{fontWeight:500,flexShrink:0}}>{formatPKR(getSizePrice(item.product, item.size)*item.qty)}</span>
              </div>
            ))}
          </div>
          <dl style={{display:"flex",flexDirection:"column",gap:8,fontSize:13,borderTop:"1px solid #E7E0D2",paddingTop:12}}>
            <div style={{display:"flex",justifyContent:"space-between",color:"#6B675C"}}><dt>Subtotal</dt><dd>{formatPKR(subtotal)}</dd></div>
            <div style={{display:"flex",justifyContent:"space-between",color:"#6B675C"}}><dt>Shipping</dt><dd>{shipping===0?<span style={{color:"#1A3C34"}}>Free</span>:formatPKR(shipping)}</dd></div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:15,fontWeight:700,borderTop:"1px solid #E7E0D2",paddingTop:10,marginTop:4}}><dt>Total</dt><dd>{formatPKR(total)}</dd></div>
          </dl>
        </div>
      </div>
      <style>{`@media(max-width:768px){.checkout-grid{grid-template-columns:1fr!important;} .checkout-form-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}

/* =========================================================  ACCOUNT PAGE  ========================================================= */
function ProfileTab({ user, updateProfile, showToast }) {
  const [name, setName] = useState(user.name || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [saving, setSaving] = useState(false);
  const inputStyle={width:"100%",border:"none",borderBottom:"1px solid #D9D2C2",padding:"10px 0",fontSize:14,outline:"none",background:"transparent"};

  const submit = async (e) => {
    e.preventDefault();
    if (!name.trim()) { showToast("Name is required"); return; }
    setSaving(true);
    try {
      await updateProfile(name.trim(), phone.trim());
      showToast("Profile updated");
    } catch (err) {
      showToast(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form style={{display:"flex",flexDirection:"column",gap:20,maxWidth:400}} onSubmit={submit}>
      <h2 style={{fontSize:12,letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:600,marginBottom:8}}>Profile</h2>
      <div>
        <label style={labelStyle}>Name</label>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Email</label>
        <input type="email" value={user.email} disabled style={{...inputStyle,color:"#96917E",cursor:"not-allowed"}} />
      </div>
      <div>
        <label style={labelStyle}>Phone</label>
        <input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} style={inputStyle} placeholder="03001234567" />
      </div>
      <div><button className="btn-primary" type="submit" disabled={saving}>{saving?"Saving…":"Save Changes"}</button></div>
    </form>
  );
}

function AddressesTab({ addresses, addAddress, deleteAddress, showToast }) {
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ label:"Home", line:"", city:"", postalCode:"" });
  const [saving, setSaving] = useState(false);
  const inputStyle={width:"100%",border:"none",borderBottom:"1px solid #D9D2C2",padding:"10px 0",fontSize:14,outline:"none",background:"transparent"};

  const submit = async (e) => {
    e.preventDefault();
    if (!form.line.trim() || !form.city.trim()) { showToast("Address and city are required"); return; }
    setSaving(true);
    try {
      await addAddress(form);
      setForm({ label:"Home", line:"", city:"", postalCode:"" });
      setAdding(false);
      showToast("Address saved");
    } catch (err) {
      showToast(err.message);
    } finally {
      setSaving(false);
    }
  };

  const remove = async (id) => {
    try {
      await deleteAddress(id);
      showToast("Address removed");
    } catch (err) {
      showToast(err.message);
    }
  };

  return (
    <div>
      <h2 style={{fontSize:12,letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:600,marginBottom:20}}>Saved Addresses</h2>
      <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:20}}>
        {addresses.length===0 && <p style={{fontSize:13,color:"#96917E"}}>No saved addresses yet.</p>}
        {addresses.map(addr=>(
          <div key={addr.id} style={{border:"1px solid #E7E0D2",padding:16,display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12}}>
            <div>
              <p style={{fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.08em",color:"#1A3C34",marginBottom:4}}>{addr.label}</p>
              <p style={{fontSize:13,color:"#6B675C"}}>{addr.line}, {addr.city} {addr.postalCode}</p>
            </div>
            <button onClick={()=>remove(addr.id)} style={{background:"none",border:"none",cursor:"pointer",fontSize:11,color:"#B3372B",textDecoration:"underline",flexShrink:0}}>Remove</button>
          </div>
        ))}
      </div>

      {adding ? (
        <form onSubmit={submit} style={{display:"flex",flexDirection:"column",gap:16,maxWidth:400,border:"1px solid #E7E0D2",padding:20}}>
          <div>
            <label style={labelStyle}>Label</label>
            <input type="text" value={form.label} onChange={e=>setForm(f=>({...f,label:e.target.value}))} style={inputStyle} placeholder="Home / Office" />
          </div>
          <div>
            <label style={labelStyle}>Street Address</label>
            <input type="text" value={form.line} onChange={e=>setForm(f=>({...f,line:e.target.value}))} style={inputStyle} />
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            <div>
              <label style={labelStyle}>City</label>
              <input type="text" value={form.city} onChange={e=>setForm(f=>({...f,city:e.target.value}))} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Postal Code</label>
              <input type="text" value={form.postalCode} onChange={e=>setForm(f=>({...f,postalCode:e.target.value}))} style={inputStyle} />
            </div>
          </div>
          <div style={{display:"flex",gap:12}}>
            <button className="btn-primary" type="submit" disabled={saving}>{saving?"Saving…":"Save Address"}</button>
            <button type="button" className="btn-outline" onClick={()=>setAdding(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <button className="btn-outline" onClick={()=>setAdding(true)}>+ Add New Address</button>
      )}
    </div>
  );
}

function ReviewForm({ orderId, productId, onDone }) {
  const { submitReview, showToast } = useApp();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = async () => {
    if (!comment.trim()) { showToast("Please write a short comment"); return; }
    setSubmitting(true);
    try {
      await submitReview(orderId, productId, rating, comment.trim());
      showToast("Review submitted — pending approval");
      onDone();
    } catch (err) {
      showToast(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{border:"1px solid #E7E0D2",borderRadius:8,padding:14,marginTop:10,display:"flex",flexDirection:"column",gap:10,background:"#FBF9F4"}}>
      <div style={{display:"flex",gap:4}}>
        {[1,2,3,4,5].map(n=>(
          <button key={n} type="button" onClick={()=>setRating(n)} style={{background:"none",border:"none",cursor:"pointer",fontSize:20,color:n<=rating?"#C6A15B":"#D9D2C2",lineHeight:1,padding:0}}>★</button>
        ))}
      </div>
      <textarea value={comment} onChange={e=>setComment(e.target.value)} placeholder="Share your experience with this product…" rows={3}
        style={{width:"100%",border:"1px solid #D9D2C2",borderRadius:6,padding:"8px 10px",fontSize:13,fontFamily:"inherit",resize:"vertical"}} />
      <div style={{display:"flex",gap:10}}>
        <button className="btn-primary" type="button" disabled={submitting} onClick={submit} style={{padding:"8px 20px",fontSize:10}}>{submitting?"Submitting…":"Submit Review"}</button>
        <button type="button" onClick={onDone} style={{background:"none",border:"none",cursor:"pointer",fontSize:12,color:"#96917E",textDecoration:"underline"}}>Cancel</button>
      </div>
    </div>
  );
}

function OrderDetailModal({ order, onClose }) {
  const { myReviews } = useApp();
  const [reviewingId, setReviewingId] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!order) return null;
  const items = (order.items || []).map(item => ({ ...item, product: PRODUCTS.find(p => p.id === item.id) }));
  const isDelivered = String(order.status).toLowerCase() === "delivered";
  const isReviewed = (productId) => myReviews.some(r => r.orderId === order.id && r.productId === productId);

  return (
    <div style={{position:"fixed",inset:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:16,animation:"fadeIn 0.2s ease"}}>
      <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)"}} onClick={onClose} />
      <div className="order-modal-panel" style={{position:"relative",background:"#fff",width:"100%",maxWidth:680,maxHeight:"88vh",overflowY:"auto",animation:"modalIn 0.25s ease",padding:32}}>
        <button onClick={onClose} style={{position:"absolute",top:16,right:16,width:32,height:32,border:"1px solid #E7E0D2",background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"#6B675C"}}>✕</button>

        <p style={{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"#96917E",marginBottom:4}}>Order</p>
        <h2 className="font-serif" style={{fontSize:26,fontWeight:400,marginBottom:4}}>#{order.id.replace("KTA-","")}</h2>
        <p style={{fontSize:12,color:"#96917E",marginBottom:24}}>{order.date} · <span style={{fontWeight:600,color:"#1A3C34"}}>{order.status}</span></p>

        <div style={{display:"flex",flexDirection:"column",gap:16,borderTop:"1px solid #E7E0D2",paddingTop:20}}>
          {items.map((item, idx) => (
            <div key={idx} style={{display:"flex",gap:14}}>
              <div style={{width:64,height:80,flexShrink:0,background:"#F2EEE6",overflow:"hidden"}}>
                {item.product && <img src={item.product.images?.[0]} alt={item.product.name} onError={onImgError} style={{width:"100%",height:"100%",objectFit:"cover"}} />}
              </div>
              <div style={{flex:1,minWidth:0}}>
                <p style={{fontSize:14,fontWeight:500,color:"#111"}}>{item.product?.name || item.id}</p>
                <p style={{fontSize:12,color:"#96917E",marginTop:2}}>Size {item.size} · {item.color} · Qty {item.qty}</p>
                <p style={{fontSize:13,fontWeight:600,color:"#1A3C34",marginTop:4}}>{item.product ? formatPKR(getSizePrice(item.product, item.size) * item.qty) : ""}</p>

                {isDelivered && item.product && (
                  isReviewed(item.id) ? (
                    <p style={{fontSize:11,color:"#1A3C34",marginTop:8,fontWeight:600}}>✓ Review submitted</p>
                  ) : reviewingId === idx ? (
                    <ReviewForm orderId={order.id} productId={item.id} onDone={()=>setReviewingId(null)} />
                  ) : (
                    <button onClick={()=>setReviewingId(idx)} style={{marginTop:8,background:"none",border:"none",cursor:"pointer",fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase",color:"#1A3C34",textDecoration:"underline",padding:0}}>Write a Review</button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="order-modal-info" style={{borderTop:"1px solid #E7E0D2",marginTop:20,paddingTop:20,display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
          <div>
            <p style={{fontSize:10,letterSpacing:"0.14em",textTransform:"uppercase",color:"#96917E",marginBottom:6}}>Shipping To</p>
            <p style={{fontSize:13,color:"#111"}}>{order.name}</p>
            <p style={{fontSize:12,color:"#6B675C",marginTop:2}}>{order.address}, {order.city} {order.postalCode}</p>
            <p style={{fontSize:12,color:"#6B675C",marginTop:2}}>{order.phone}</p>
          </div>
          <div>
            <p style={{fontSize:10,letterSpacing:"0.14em",textTransform:"uppercase",color:"#96917E",marginBottom:6}}>Payment</p>
            <p style={{fontSize:13,color:"#111",textTransform:"uppercase"}}>{order.payment}</p>
            <dl style={{marginTop:10,fontSize:12,display:"flex",flexDirection:"column",gap:4}}>
              <div style={{display:"flex",justifyContent:"space-between",color:"#6B675C"}}><dt>Subtotal</dt><dd>{formatPKR(order.subtotal||0)}</dd></div>
              <div style={{display:"flex",justifyContent:"space-between",color:"#6B675C"}}><dt>Shipping</dt><dd>{order.shipping ? formatPKR(order.shipping) : "Free"}</dd></div>
              <div style={{display:"flex",justifyContent:"space-between",fontWeight:700,color:"#111"}}><dt>Total</dt><dd>{formatPKR(order.total)}</dd></div>
            </dl>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:560px){.order-modal-panel{padding:22px!important;} .order-modal-info{grid-template-columns:1fr!important;gap:20px!important;}}`}</style>
    </div>
  );
}

function MyReviewsTab({ myReviews, deleteReview, showToast }) {
  const [removingId, setRemovingId] = useState(null);

  const remove = async (id) => {
    setRemovingId(id);
    try {
      await deleteReview(id);
      showToast("Review removed");
    } catch (err) {
      showToast(err.message);
    } finally {
      setRemovingId(null);
    }
  };

  const sorted = [...myReviews].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <h2 style={{fontSize:12,letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:600,marginBottom:20}}>My Reviews</h2>
      {sorted.length===0 ? (
        <p style={{fontSize:13,color:"#96917E"}}>You haven't written any reviews yet — once an order is delivered, you can review its items from My Account &gt; Orders.</p>
      ) : (
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          {sorted.map(r => {
            const product = PRODUCTS.find(p => p.id === r.productId);
            return (
              <div key={r.id} style={{border:"1px solid #E7E0D2",padding:16,display:"flex",gap:14}}>
                <div style={{width:52,height:64,flexShrink:0,background:"#F2EEE6",overflow:"hidden"}}>
                  {product && <img src={product.images?.[0]} alt={product.name} onError={onImgError} style={{width:"100%",height:"100%",objectFit:"cover"}} />}
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12}}>
                    <p style={{fontSize:13,fontWeight:500,color:"#111"}}>{product?.name || r.productId}</p>
                    <span style={{fontSize:10,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",padding:"3px 10px",borderRadius:20,whiteSpace:"nowrap",background:r.approved?"#EAF2EF":"#FFF6E0",color:r.approved?"#1A3C34":"#8C6D3F"}}>
                      {r.approved ? "Approved" : "Pending approval"}
                    </span>
                  </div>
                  <div style={{marginTop:4}}><Stars rating={r.rating} /></div>
                  <p style={{fontSize:13,color:"#6B675C",marginTop:6,lineHeight:1.6}}>{r.comment}</p>
                  <button onClick={()=>remove(r.id)} disabled={removingId===r.id} style={{marginTop:10,background:"none",border:"none",cursor:"pointer",fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase",color:"#B3372B",textDecoration:"underline",padding:0}}>
                    {removingId===r.id ? "Removing…" : "Remove"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function AccountPage() {
  const {
    user, authLoading, login, signup, logout, updateProfile,
    orders, wishlist, addresses, addAddress, deleteAddress,
    myReviews, deleteReview,
    navigate, page, showToast,
  } = useApp();
  const [tab, setTab] = useState(page.tab||"profile");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [authMode, setAuthMode] = useState("login"); // login | signup | forgot | reset
  const [form, setForm] = useState({ name:"", email:"", password:"" });
  const [resetForm, setResetForm] = useState({ email:"", code:"", newPassword:"" });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [formNotice, setFormNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [authImgIndex, setAuthImgIndex] = useState(0);
  // Border lives entirely in the .auth-input CSS class (not inline) so the
  // :focus rule can actually override it — an inline border-bottom color
  // always beats a stylesheet rule, focus pseudo-class or not.
  // No border here at all (not even "none") — the .auth-input class owns it
  // entirely, top to bottom, so its :focus rule can actually take effect.
  // An inline border shorthand of any value beats a stylesheet rule for the
  // same longhand, focus pseudo-class or not.
  const authFieldStyle={width:"100%",padding:"10px 0",fontSize:14,outline:"none",background:"transparent",letterSpacing:"0.02em"};

  useEffect(() => {
    if (user) return;
    const t = setInterval(() => setAuthImgIndex(i => (i + 1) % AUTH_BG_IMAGES.length), 5000);
    return () => clearInterval(t);
  }, [user]);

  if (authLoading) {
    return <div style={{padding:"140px 24px",textAlign:"center",color:"#96917E",fontSize:13}}>Loading your account…</div>;
  }

  if (!user) {
    const validateAuth = () => {
      const e={};
      if (authMode==="signup" && !form.name.trim()) e.name="Required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email="Valid email required";
      if (form.password.length<6) e.password="Min 6 characters";
      setErrors(e); return Object.keys(e).length===0;
    };

    const submitAuth = async (e) => {
      e.preventDefault();
      setFormError(""); setFormNotice("");
      if (!validateAuth()) return;
      setSubmitting(true);
      try {
        if (authMode==="login") { await login(form.email, form.password); showToast("Signed in"); }
        else { await signup(form.name, form.email, form.password); showToast("Account created"); }
      } catch (err) {
        setFormError(err.message);
      } finally {
        setSubmitting(false);
      }
    };

    const submitForgot = async (e) => {
      e.preventDefault();
      setFormError(""); setFormNotice("");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resetForm.email)) { setFormError("Enter a valid email address."); return; }
      setSubmitting(true);
      try {
        await api.forgotPassword(resetForm.email);
        setFormNotice("If an account exists for this email, a reset code has been sent.");
        setAuthMode("reset");
      } catch (err) {
        setFormError(err.message);
      } finally {
        setSubmitting(false);
      }
    };

    const submitReset = async (e) => {
      e.preventDefault();
      setFormError(""); setFormNotice("");
      if (!resetForm.code.trim()) { setFormError("Enter the code from your email."); return; }
      if (resetForm.newPassword.length<6) { setFormError("New password must be at least 6 characters."); return; }
      setSubmitting(true);
      try {
        await api.resetPassword(resetForm.email, resetForm.code, resetForm.newPassword);
        setFormNotice("Password updated. You can now sign in.");
        setAuthMode("login");
        setForm(f=>({...f, email:resetForm.email, password:""}));
      } catch (err) {
        setFormError(err.message);
      } finally {
        setSubmitting(false);
      }
    };

    const titles = { login:"Sign In", signup:"Create Account", forgot:"Reset Password", reset:"Enter Reset Code" };
    const eyebrows = { login:"Welcome Back", signup:"Join Us", forgot:"Account Recovery", reset:"Almost There" };
    const heroCopy = {
      login:  { title:"Welcome\nback.",        sub:"Sign in to track orders, save favorites, and breeze through checkout." },
      signup: { title:"Join MD\nFashion.",      sub:"Create an account to save your favorites and check out faster next time." },
      forgot: { title:"Forgot your\npassword?", sub:"No worries — we'll email you a reset code in a moment." },
      reset:  { title:"Almost\nthere.",         sub:"Enter the code we emailed you and choose a new password." },
    };
    return (
      <div className="auth-shell" style={{display:"grid",gridTemplateColumns:"1.1fr 1fr",minHeight:"calc(100vh - 178px)"}}>
        {/* Left — rotating brand/photo panel */}
        <div className="auth-visual" style={{position:"relative",overflow:"hidden",background:"#1D1C18"}}>
          {AUTH_BG_IMAGES.map((src,i)=>(
            <img key={src} src={src} alt="" onError={onImgError} className={i===authImgIndex?"auth-bg-active":""} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:i===authImgIndex?1:0,transition:"opacity 1.6s ease"}} />
          ))}
          <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,rgba(20,19,15,0.25) 0%,rgba(20,19,15,0.55) 60%,rgba(20,19,15,0.88) 100%)"}} />

          {/* The site header above already shows the logo on every screen size,
              including mobile, so this in-panel mark is hidden on small screens
              (media query below) rather than fighting the shorter banner for space. */}
          <button onClick={()=>navigate("home")} className="auth-visual-logo" style={{position:"absolute",top:32,left:32,display:"flex",alignItems:"center",gap:10,background:"none",border:"none",cursor:"pointer"}}>
            <img src="/logo.png" alt="" onError={onImgError} style={{height:34,width:34,objectFit:"contain"}} />
            <span className="font-serif" style={{fontSize:17,color:"#F6F3ED",letterSpacing:"0.02em"}}>MD Fashion</span>
          </button>

          <div key={authMode} className="auth-copy" style={{position:"absolute",bottom:0,left:0,right:0,padding:"0 48px 56px"}}>
            <svg width="60" height="10" viewBox="0 0 60 10" className="auth-draw" style={{marginBottom:16,display:"block"}}>
              <line x1="1" y1="5" x2="59" y2="5" stroke="#C6A15B" strokeWidth="1" />
            </svg>
            <p style={{fontSize:11,letterSpacing:"0.32em",textTransform:"uppercase",color:"#C6A15B",marginBottom:14}}>{eyebrows[authMode]}</p>
            <h2 className="font-serif" style={{fontSize:"clamp(34px,3.4vw,50px)",fontWeight:400,color:"#F6F3ED",lineHeight:1.14,marginBottom:16,whiteSpace:"pre-line"}}>{heroCopy[authMode].title}</h2>
            <p className="auth-visual-sub" style={{fontSize:14,color:"rgba(246,243,237,0.78)",lineHeight:1.75,maxWidth:320}}>{heroCopy[authMode].sub}</p>
          </div>

          <div style={{position:"absolute",top:32,right:32,display:"flex",gap:6}}>
            {AUTH_BG_IMAGES.map((_,i)=>(
              <span key={i} style={{width:i===authImgIndex?18:6,height:2,background:i===authImgIndex?"#C6A15B":"rgba(246,243,237,0.35)",transition:"all 0.4s ease",display:"block"}} />
            ))}
          </div>
        </div>

        {/* Right — form panel */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"60px 32px"}}>
          <div style={{width:"100%",maxWidth:380}}>
            <p style={{fontSize:11,letterSpacing:"0.3em",textTransform:"uppercase",color:"#A9885A",marginBottom:12}}>MD Fashion Account</p>
            <h1 key={"h-"+authMode} className="font-serif auth-copy" style={{fontSize:38,fontWeight:400,marginBottom:32}}>{titles[authMode]}</h1>

            {formError && <p className="auth-banner" style={{fontSize:12,color:"#B3372B",background:"#FBEAE8",padding:"10px 14px",marginBottom:20,borderRadius:4}}>{formError}</p>}
            {formNotice && <p className="auth-banner" style={{fontSize:12,color:"#1A3C34",background:"#EAF2EF",padding:"10px 14px",marginBottom:20,borderRadius:4}}>{formNotice}</p>}

            {(authMode==="login"||authMode==="signup") && (
              <div key={authMode} className="auth-copy">
                <form onSubmit={submitAuth} style={{display:"flex",flexDirection:"column",gap:24}} noValidate>
                  {authMode==="signup" && (
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <input className="auth-input" type="text" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} style={authFieldStyle} />
                      {errors.name && <p style={errStyle}>{errors.name}</p>}
                    </div>
                  )}
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input className="auth-input" type="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} style={authFieldStyle} />
                    {errors.email && <p style={errStyle}>{errors.email}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Password</label>
                    <input className="auth-input" type="password" value={form.password} onChange={e=>setForm(f=>({...f,password:e.target.value}))} style={authFieldStyle} />
                    {errors.password && <p style={errStyle}>{errors.password}</p>}
                  </div>
                  {authMode==="login" && (
                    <button type="button" className="auth-link" onClick={()=>{setAuthMode("forgot");setFormError("");setFormNotice("");setResetForm(f=>({...f,email:form.email}));}} style={{alignSelf:"flex-end",color:"#96917E"}}>Forgot password?</button>
                  )}
                  <button className="btn-primary auth-submit" type="submit" disabled={submitting} style={{justifyContent:"center",padding:"14px"}}>
                    {submitting ? <span className="auth-dots" style={{display:"inline-flex",gap:4}}><span/><span/><span/></span> : titles[authMode]}
                  </button>
                </form>
                <p style={{fontSize:12,color:"#96917E",marginTop:20,textAlign:"center",letterSpacing:"0.04em"}}>
                  {authMode==="login"?"New here? ":"Already have an account? "}
                  <button className="auth-link" onClick={()=>{setAuthMode(authMode==="login"?"signup":"login");setErrors({});setFormError("");setFormNotice("");}} style={{color:"#1A3C34"}}>{authMode==="login"?"Create account":"Sign in"}</button>
                </p>
              </div>
            )}

            {authMode==="forgot" && (
              <div key={authMode} className="auth-copy">
                <form onSubmit={submitForgot} style={{display:"flex",flexDirection:"column",gap:24}} noValidate>
                  <p style={{fontSize:13,color:"#6B675C"}}>Enter your account email and we'll send you a reset code.</p>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input className="auth-input" type="email" value={resetForm.email} onChange={e=>setResetForm(f=>({...f,email:e.target.value}))} style={authFieldStyle} />
                  </div>
                  <button className="btn-primary auth-submit" type="submit" disabled={submitting} style={{justifyContent:"center",padding:"14px"}}>
                    {submitting ? <span className="auth-dots" style={{display:"inline-flex",gap:4}}><span/><span/><span/></span> : "Send Reset Code"}
                  </button>
                  <button type="button" className="auth-link" onClick={()=>{setAuthMode("login");setFormError("");setFormNotice("");}} style={{color:"#96917E",alignSelf:"center"}}>← Back to sign in</button>
                </form>
              </div>
            )}

            {authMode==="reset" && (
              <div key={authMode} className="auth-copy">
                <form onSubmit={submitReset} style={{display:"flex",flexDirection:"column",gap:24}} noValidate>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input className="auth-input" type="email" value={resetForm.email} onChange={e=>setResetForm(f=>({...f,email:e.target.value}))} style={authFieldStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Reset Code</label>
                    <input className="auth-input" type="text" value={resetForm.code} onChange={e=>setResetForm(f=>({...f,code:e.target.value}))} style={authFieldStyle} placeholder="6-digit code" />
                  </div>
                  <div>
                    <label style={labelStyle}>New Password</label>
                    <input className="auth-input" type="password" value={resetForm.newPassword} onChange={e=>setResetForm(f=>({...f,newPassword:e.target.value}))} style={authFieldStyle} />
                  </div>
                  <button className="btn-primary auth-submit" type="submit" disabled={submitting} style={{justifyContent:"center",padding:"14px"}}>
                    {submitting ? <span className="auth-dots" style={{display:"inline-flex",gap:4}}><span/><span/><span/></span> : "Reset Password"}
                  </button>
                  <button type="button" className="auth-link" onClick={()=>{setAuthMode("forgot");setFormError("");setFormNotice("");}} style={{color:"#96917E",alignSelf:"center"}}>Resend code</button>
                </form>
              </div>
            )}
          </div>
        </div>

        <style>{`
          @keyframes authFadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
          @keyframes authKenBurns { from{transform:scale(1.1)} to{transform:scale(1)} }
          @keyframes authDraw { from{stroke-dashoffset:60} to{stroke-dashoffset:0} }
          @keyframes authDot { 0%,80%,100%{opacity:0.25;transform:scale(0.85)} 40%{opacity:1;transform:scale(1)} }

          .auth-copy { animation: authFadeUp 0.55s cubic-bezier(0.22,1,0.36,1) both; }
          .auth-bg-active { animation: authKenBurns 6s ease-out both; }
          .auth-draw line { stroke-dasharray: 60; animation: authDraw 0.9s ease 0.15s both; }
          .auth-banner { animation: slideDown 0.35s ease both; }

          .auth-input { border: none; border-bottom: 1px solid #D9D2C2; transition: border-color 0.3s ease, box-shadow 0.3s ease; }
          .auth-input:focus { border-bottom-color: #A9885A; box-shadow: 0 1px 0 0 #A9885A; }

          .auth-link { position:relative; background:none; border:none; cursor:pointer; font-size:12px; padding:0; }
          .auth-link::after { content:''; position:absolute; left:0; bottom:-2px; width:100%; height:1px; background:currentColor; transform:scaleX(0); transform-origin:right; transition:transform 0.3s ease; }
          .auth-link:hover::after { transform:scaleX(1); transform-origin:left; }

          .auth-submit:disabled { cursor:default; }
          .auth-dots span { width:5px; height:5px; border-radius:50%; background:currentColor; display:inline-block; animation: authDot 1.1s ease-in-out infinite; }
          .auth-dots span:nth-child(2) { animation-delay: 0.15s; }
          .auth-dots span:nth-child(3) { animation-delay: 0.3s; }

          @media (max-width: 860px) {
            .auth-shell { grid-template-columns: 1fr !important; min-height: auto !important; }
            .auth-visual { height: 280px !important; }
            .auth-visual .auth-copy { padding: 0 28px 24px !important; }
            .auth-visual-logo { display: none !important; }
            .auth-visual-sub { display: none !important; }
          }
        `}</style>
      </div>
    );
  }

  const wishlistProducts = PRODUCTS.filter(p=>wishlist.includes(p.id));
  const tabs=[{id:"profile",l:"Profile"},{id:"addresses",l:"Addresses"},{id:"orders",l:"Orders"},{id:"wishlist",l:"Wishlist"},{id:"reviews",l:"Reviews"}];

  return (
    <div style={{maxWidth:1000,margin:"0 auto",padding:"40px 24px"}}>
      <h1 className="font-serif" style={{fontSize:40,fontWeight:400,marginBottom:32}}>My Account</h1>
      <div className="account-grid" style={{display:"grid",gridTemplateColumns:"180px 1fr",gap:48}}>
        <nav style={{display:"flex",flexDirection:"column",gap:2}}>
          {tabs.map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} style={{textAlign:"left",background:"none",border:"none",cursor:"pointer",fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",fontWeight:600,padding:"10px 14px",color:tab===t.id?"#1D1C18":"#96917E",borderLeft:tab===t.id?"2px solid #A9885A":"2px solid transparent",transition:"all 0.2s"}}>{t.l}</button>
          ))}
          <button onClick={logout} style={{textAlign:"left",background:"none",border:"none",cursor:"pointer",fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:600,padding:"10px 12px",color:"#B3372B",borderLeft:"2px solid transparent",marginTop:8}}>Sign Out</button>
        </nav>
        <div style={{animation:"fadeIn 0.25s ease"}}>
          {tab==="profile" && <ProfileTab user={user} updateProfile={updateProfile} showToast={showToast} />}

          {tab==="addresses" && <AddressesTab addresses={addresses} addAddress={addAddress} deleteAddress={deleteAddress} showToast={showToast} />}

          {/* ===================================================
              ORDERS — redesigned as "receipt stub" cards
              instead of a plain <table>: status pill, dashed
              divider, and stacked layout that works on mobile
              without horizontal scrolling.
             =================================================== */}
          {tab==="orders" && (
            <div>
              <h2 style={{fontSize:12,letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:600,marginBottom:20}}>Order History</h2>
              {orders.length===0 ? (
                <div style={{border:"1px dashed #D9D2C2",padding:"48px 24px",textAlign:"center"}}>
                  <p style={{marginBottom:14,display:"flex",justifyContent:"center"}}><LineIcon name="package" size={30} color="#C8BFA9" strokeWidth={1.2} /></p>
                  <p style={{fontSize:13,color:"#96917E",marginBottom:16}}>No orders yet — your future favorites are waiting.</p>
                  <button className="btn-outline" onClick={()=>navigate("home")}>Start Shopping</button>
                </div>
              ) : (
                <div style={{display:"flex",flexDirection:"column",gap:14}}>
                  {orders.map(o=>{
                    const itemCount = o.items?.reduce((s,i)=>s+i.qty,0) || 0;
                    const statusStyles = {
                      Pending:   { color:"#8C6D3F", bg:"#FFF6E0" },
                      Shipped:   { color:"#1A3C34", bg:"#EAF2EF" },
                      Delivered: { color:"#1A3C34", bg:"#EAF2EF" },
                      Cancelled: { color:"#B3372B", bg:"#FBEAE8" },
                    };
                    const st = statusStyles[o.status] || statusStyles.Pending;
                    return (
                      <div key={o.id} className="order-card order-card-grid" style={{border:"1px solid #E7E0D2",background:"#fff",padding:"20px 24px",display:"grid",gridTemplateColumns:"auto 1fr auto",alignItems:"center",gap:24,transition:"box-shadow 0.25s ease",cursor:"pointer"}}
                        onClick={()=>setSelectedOrder(o)}
                        onMouseEnter={e=>e.currentTarget.style.boxShadow="0 10px 30px rgba(107,90,58,0.10)"}
                        onMouseLeave={e=>e.currentTarget.style.boxShadow="none"}>

                        {/* left: order id + date, ticket-stub styled */}
                        <div style={{borderRight:"1px dashed #E7E0D2",paddingRight:24,minWidth:130}}>
                          <p style={{fontSize:10,letterSpacing:"0.14em",textTransform:"uppercase",color:"#96917E",marginBottom:4,display:"flex",alignItems:"center",gap:6}}>
                            <LineIcon name="ticket" size={12} color="#A9885A" /> Order
                          </p>
                          <p className="font-serif" style={{fontSize:20,fontWeight:600,color:"#1A3C34"}}>#{o.id.replace("KTA-","")}</p>
                          <p style={{fontSize:11,color:"#96917E",marginTop:2}}>{o.date}</p>
                        </div>

                        {/* middle: item count + total, as inline stats */}
                        <div style={{display:"flex",gap:32,flexWrap:"wrap"}}>
                          <div>
                            <p style={{fontSize:10,letterSpacing:"0.14em",textTransform:"uppercase",color:"#96917E",marginBottom:4}}>Items</p>
                            <p style={{fontSize:14,fontWeight:600,color:"#111"}}>{itemCount} piece{itemCount===1?"":"s"}</p>
                          </div>
                          <div>
                            <p style={{fontSize:10,letterSpacing:"0.14em",textTransform:"uppercase",color:"#96917E",marginBottom:4}}>Total</p>
                            <p style={{fontSize:14,fontWeight:600,color:"#111"}}>{formatPKR(o.total)}</p>
                          </div>
                        </div>

                        {/* right: status pill */}
                        <span style={{fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:600,background:st.bg,color:st.color,padding:"6px 14px",borderRadius:20,whiteSpace:"nowrap"}}>
                          {o.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
              <style>{`@media(max-width:640px){.order-card-grid{grid-template-columns:1fr!important;} .order-card-grid > div:first-child{border-right:none!important;border-bottom:1px dashed #E7E0D2!important;padding-right:0!important;padding-bottom:14px!important;} .order-card::before,.order-card::after{display:none!important;}}`}</style>
            </div>
          )}

          {tab==="wishlist" && (
            <div>
              <h2 style={{fontSize:12,letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:600,marginBottom:20}}>Wishlist</h2>
              {wishlistProducts.length===0 ? <p style={{fontSize:13,color:"#96917E"}}>No items saved yet.</p> : (
                <div className="wishlist-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>{wishlistProducts.map(p=><ProductCard key={p.id} product={p} />)}</div>
              )}
            </div>
          )}

          {tab==="reviews" && <MyReviewsTab myReviews={myReviews} deleteReview={deleteReview} showToast={showToast} />}
        </div>
      </div>
      <style>{`@media(max-width:768px){.account-grid{grid-template-columns:1fr!important;gap:24px!important;} .account-grid nav{flex-direction:row!important;flex-wrap:wrap;border-bottom:1px solid #E7E0D2;padding-bottom:8px;} .wishlist-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      {selectedOrder && <OrderDetailModal order={selectedOrder} onClose={()=>setSelectedOrder(null)} />}
    </div>
  );
}

function AboutPage() {
  return (
    <div className="about-page" style={{maxWidth:800,margin:"0 auto",padding:"80px 24px"}}>
      <Breadcrumbs items={[{label:"Home",page:"home"},{label:"About Us"}]} />
      <p style={{fontSize:11,letterSpacing:"0.3em",textTransform:"uppercase",color:"#A9885A",marginBottom:14}}>Our Story</p>
      <h1 className="font-serif about-title" style={{fontSize:56,fontWeight:400,marginBottom:32,lineHeight:1.1}}>About<br/>MD Fashion</h1>
      <style>{`@media(max-width:640px){.about-page{padding:56px 20px!important;} .about-title{font-size:38px!important;} .about-grid{grid-template-columns:1fr!important;}}`}</style>
      <div className="about-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32,borderTop:"1px solid #E7E0D2",paddingTop:32}}>
        <p style={{fontSize:14,color:"#6B675C",lineHeight:1.9,fontWeight:300}}>MD Fashion brings together modern silhouettes and traditional craftsmanship, with a focus on fabrics suited to Pakistan's climate and occasions.</p>
        <p style={{fontSize:14,color:"#6B675C",lineHeight:1.9,fontWeight:300}}>Every order ships nationwide with Cash on Delivery, JazzCash, Easypaisa, and card options at checkout, and comes with a 30-day return policy.</p>
      </div>

      {/* Visit Us — physical store */}
      <div className="about-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"center",marginTop:64,borderTop:"1px solid #E7E0D2",paddingTop:64}}>
        <div style={{width:"100%",aspectRatio:"4/3",overflow:"hidden",background:"#F2EEE6"}}>
          <img src="/shop.png" alt="MD Fashion storefront" onError={onImgError} style={{width:"100%",height:"100%",objectFit:"cover"}} />
        </div>
        <div>
          <p style={{fontSize:11,letterSpacing:"0.3em",textTransform:"uppercase",color:"#A9885A",marginBottom:14}}>Visit Us</p>
          <h2 className="font-serif" style={{fontSize:32,fontWeight:500,marginBottom:20,color:"#1D1C18"}}>Our Store</h2>
          <p style={{fontSize:14,color:"#6B675C",lineHeight:1.9,fontWeight:300,marginBottom:10,display:"flex",alignItems:"center",gap:10}}>
            <LineIcon name="pin" size={15} color="#A9885A" style={{flexShrink:0}} /> Tariq Road, Kurta Galli
          </p>
          <p style={{fontSize:14,color:"#6B675C",lineHeight:1.9,fontWeight:300}}>Owned and run by Maaz.</p>
        </div>
      </div>
    </div>
  );
}

function FaqPage() {
  const faqs = FAQS;
  return (
    <div className="faq-page" style={{maxWidth:720,margin:"0 auto",padding:"80px 24px"}}>
      <Breadcrumbs items={[{label:"Home",page:"home"},{label:"FAQs"}]} />
      <p style={{fontSize:11,letterSpacing:"0.3em",textTransform:"uppercase",color:"#A9885A",marginBottom:14}}>Help Centre</p>
      <h1 className="font-serif faq-title" style={{fontSize:48,fontWeight:400,marginBottom:40}}>Frequently Asked<br/>Questions</h1>
      <style>{`@media(max-width:640px){.faq-page{padding:56px 20px!important;} .faq-title{font-size:34px!important;}}`}</style>
      <div style={{display:"flex",flexDirection:"column",gap:0}}>
        {faqs.map((f,i)=>(
          <details key={i} style={{borderTop:"1px solid #E7E0D2",padding:"20px 0"}}>
            <summary style={{cursor:"pointer",fontSize:14,fontWeight:500,color:"#111",letterSpacing:"0.02em",display:"flex",justifyContent:"space-between",alignItems:"center",userSelect:"none"}}>
              {f.q}<span style={{fontSize:18,color:"#96917E",flexShrink:0,marginLeft:16}}>+</span>
            </summary>
            <p style={{fontSize:13,color:"#6B675C",lineHeight:1.8,marginTop:14,fontWeight:300}}>{f.a}</p>
          </details>
        ))}
        <div style={{borderTop:"1px solid #E7E0D2"}} />
      </div>
    </div>
  );
}

/* =========================================================  ROUTER  ========================================================= */
function PageRouter() {
  const { page } = useApp();
  switch(page.name) {
    case "home": return <HomePage />;
    case "category": return <ListingPage mode="category" />;
    case "search": return <ListingPage mode="search" />;
    case "product": return <ProductPage key={page.id} />;
    case "cart": return <CartPage />;
    case "checkout": return <CheckoutPage />;
    case "account": return <AccountPage />;
    case "about": return <AboutPage />;
    case "faq": return <FaqPage />;
    default: return <HomePage />;
  }
}

export default function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",fontFamily:"'Inter',sans-serif",background:"#FBF9F4",color:"#1D1C18"}}>
        <Header />
        <main style={{flex:1}}>
          <PageRouter />
        </main>
        <Footer />
        <Toast />
        <QuickViewModal />
      </div>
    </AppProvider>
  );
}