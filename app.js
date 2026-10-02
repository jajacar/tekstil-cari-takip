/**
 * TekstilCari - Müşteri Sipariş, Mal Satışı & Dövizli Cari Takip Sistemi
 * Çoklu Para Birimi (TL, USD, EUR), Ürün Miktarı, Birim Fiyat ve Canlı Bakiye Motoru
 */

// Storage Keys
const STORAGE_KEY_TEXTILE = 'TEKSTIL_CARI_V3_DATA';
const THEME_KEY = 'TEKSTIL_CARI_THEME';
const AUTH_TOKEN_KEY = 'TEKSTIL_AUTH_TOKEN';
const AUTH_USER_KEY = 'TEKSTIL_AUTH_USER';

// Initial Textile Sample Data (Authentic Industry Portfolios)
const INITIAL_TEXTILE_CUSTOMERS = [
  {
    "id": "cust_1790928090799",
    "name": "DENEME MÜŞTERİ",
    "currency": "EUR",
    "contactPerson": "",
    "phone": "",
    "address": "",
    "notes": "",
    "transactions": [
      {
        "id": "tx_1790928114884",
        "type": "SHIPMENT",
        "productName": "DENEME SATIŞ",
        "date": "2026-10-02",
        "quantity": 1000,
        "unit": "Adet",
        "unitPrice": 50,
        "currency": "EUR",
        "amount": 50000,
        "invoiceNo": "",
        "description": ""
      },
      {
        "id": "tx_1790928162018",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-09-01",
        "amount": 10000,
        "currency": "EUR",
        "method": "Müşteri Çeki",
        "ref": "#Z123456 (AKBANK) - Vade: 30.09.2026",
        "description": "deneme",
        "isCheck": true,
        "checkNo": "Z123456",
        "checkBank": "AKBANK",
        "dueDate": "2026-09-30",
        "entryRate": 54.152,
        "autoFx": true,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex_ahmet_g_ler",
    "name": "AHMET GÜLER",
    "currency": "USD",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (AHMET GÜLER)",
    "transactions": [
      {
        "id": "tx_cust_ex_ahmet_g_ler_3",
        "type": "SHIPMENT",
        "productName": "2025 Yılından Devreden Bakiye",
        "date": "2025-10-30",
        "quantity": 1,
        "unit": "Devir",
        "unitPrice": 6000,
        "currency": "USD",
        "amount": 6000,
        "invoiceNo": "DEVIR-2025",
        "description": "ESKİ BAKİYEDEN KALAN 250.000 / 41.9 $"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_4",
        "type": "PAYMENT",
        "productName": "",
        "date": "2025-10-30",
        "amount": 6000,
        "currency": "USD",
        "method": "Müşteri Çeki",
        "ref": "20.06.2026 TARİHLİ CEK  250.000 (KUR : 46,4593 TL) (6.000 $'dı)",
        "description": "20.06.2026 TARİHLİ CEK  250.000 (KUR : 46,4593 TL) (6.000 $'dı)",
        "isCheck": true,
        "checkNo": "20.06.2026",
        "dueDate": "2026-06-20",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_5",
        "type": "SHIPMENT",
        "productName": "YENİ 3 LÜ ERK BOXER",
        "date": "2025-10-30",
        "quantity": 16,
        "unit": "Adet",
        "unitPrice": 3.67,
        "currency": "USD",
        "amount": 58.72,
        "invoiceNo": "",
        "description": "YENİ 3 LÜ ERK BOXER"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_6",
        "type": "SHIPMENT",
        "productName": "YENİ 5 Lİ  ERK BOXER",
        "date": "2025-10-30",
        "quantity": 6,
        "unit": "Adet",
        "unitPrice": 6.5,
        "currency": "USD",
        "amount": 39,
        "invoiceNo": "",
        "description": "YENİ 5 Lİ  ERK BOXER"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_7",
        "type": "SHIPMENT",
        "productName": "3 lu yenı",
        "date": "2025-11-10",
        "quantity": 288,
        "unit": "Adet",
        "unitPrice": 3.67,
        "currency": "USD",
        "amount": 1056.96,
        "invoiceNo": "",
        "description": "3 lu yenı"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_8",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-02-16",
        "amount": 12643.68,
        "currency": "USD",
        "method": "Müşteri Çeki",
        "ref": "CEK  15.08.2026 tarıhlı cek     550.000/43.5",
        "description": "CEK  15.08.2026 tarıhlı cek     550.000/43.5",
        "isCheck": true,
        "checkNo": "CEK",
        "dueDate": "2026-08-15",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_9",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-01",
        "amount": 5900,
        "currency": "USD",
        "method": "Müşteri Senedi",
        "ref": "SENET  30.07.2026  5000*1.018",
        "description": "SENET  30.07.2026  5000*1.018",
        "isCheck": false,
        "checkNo": "SENET",
        "dueDate": "2026-07-30",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": true
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_10",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-01",
        "amount": 4597.7,
        "currency": "USD",
        "method": "Müşteri Senedi",
        "ref": "SENET   30.4.2026  200.000 / 43.5",
        "description": "SENET   30.4.2026  200.000 / 43.5",
        "isCheck": false,
        "checkNo": "SENET",
        "dueDate": "2026-04-30",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": true
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_11",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-01",
        "amount": 4597.7,
        "currency": "USD",
        "method": "Müşteri Senedi",
        "ref": "SENET   30.6.2026  200.000 / 43.5",
        "description": "SENET   30.6.2026  200.000 / 43.5",
        "isCheck": false,
        "checkNo": "SENET",
        "dueDate": "2026-06-30",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": true
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_12",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-01",
        "amount": 4712.64,
        "currency": "USD",
        "method": "Müşteri Senedi",
        "ref": "SENET   30.7.2026  205.000 / 43.5",
        "description": "SENET   30.7.2026  205.000 / 43.5",
        "isCheck": false,
        "checkNo": "SENET",
        "dueDate": "2026-07-30",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": true
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_13",
        "type": "SHIPMENT",
        "productName": "3 LU yenı",
        "date": "2026-02-18",
        "quantity": 9432,
        "unit": "Adet",
        "unitPrice": 3.67,
        "currency": "USD",
        "amount": 34615.44,
        "invoiceNo": "",
        "description": "3 LU yenı"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_14",
        "type": "SHIPMENT",
        "productName": "5 LI  YENI",
        "date": "2026-06-01",
        "quantity": 1316,
        "unit": "Adet",
        "unitPrice": 6.5,
        "currency": "USD",
        "amount": 8554,
        "invoiceNo": "",
        "description": "5 LI  YENI"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_15",
        "type": "SHIPMENT",
        "productName": "200.000  Mehmet Aydın Dönen Senet (PROTESTO MASRAFI)",
        "date": "2026-05-05",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 51.111111111111114,
        "currency": "USD",
        "amount": 51.11,
        "invoiceNo": "",
        "description": "200.000  Mehmet Aydın Dönen Senet (PROTESTO MASRAFI)"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_16",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-04-27",
        "quantity": 576,
        "unit": "Adet",
        "unitPrice": 3.67,
        "currency": "USD",
        "amount": 2113.92,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_17",
        "type": "SHIPMENT",
        "productName": "Tanga Bikini",
        "date": "2026-05-19",
        "quantity": 136,
        "unit": "Adet",
        "unitPrice": 5.8,
        "currency": "USD",
        "amount": 788.8,
        "invoiceNo": "",
        "description": "Tanga Bikini"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_18",
        "type": "SHIPMENT",
        "productName": "3 Tane Senet İade (605.000 TL)",
        "date": "2026-05-19",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 13908.04,
        "currency": "USD",
        "amount": 13908.04,
        "invoiceNo": "",
        "description": "3 Tane Senet İade (605.000 TL)"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_19",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-08",
        "amount": 8063.3,
        "currency": "USD",
        "method": "Müşteri Senedi",
        "ref": "Senet 20.07.2026 Hüseyin HIDIR  (PARİTE : 1,1519) -",
        "description": "Senet 20.07.2026 Hüseyin HIDIR  (PARİTE : 1,1519) -",
        "isCheck": false,
        "checkNo": "Senet",
        "dueDate": "2026-07-20",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": true
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_20",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-08",
        "amount": 1727.85,
        "currency": "USD",
        "method": "Müşteri Senedi",
        "ref": "Senet 20.07.2026 İsmet REHANZİ (PARİTE : 1,1519) -",
        "description": "Senet 20.07.2026 İsmet REHANZİ (PARİTE : 1,1519) -",
        "isCheck": false,
        "checkNo": "Senet",
        "dueDate": "2026-07-20",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": true
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_21",
        "type": "SHIPMENT",
        "productName": "Tanga Bikini",
        "date": "2026-06-08",
        "quantity": 165,
        "unit": "Adet",
        "unitPrice": 5.8,
        "currency": "USD",
        "amount": 957,
        "invoiceNo": "",
        "description": "Tanga Bikini"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_22",
        "type": "SHIPMENT",
        "productName": "20.06.2026 TARİHLİ CEK  250.000 (KUR : 46,4593 TL) KUR FARKI",
        "date": "2026-06-22",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 618.9460452482062,
        "currency": "USD",
        "amount": 618.95,
        "invoiceNo": "",
        "description": "20.06.2026 TARİHLİ CEK  250.000 (KUR : 46,4593 TL) KUR FARKI"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_23",
        "type": "SHIPMENT",
        "productName": "Micro",
        "date": "2026-06-23",
        "quantity": 60,
        "unit": "Adet",
        "unitPrice": 1.5,
        "currency": "USD",
        "amount": 90,
        "invoiceNo": "",
        "description": "Micro"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_24",
        "type": "SHIPMENT",
        "productName": "Tanga Bikini",
        "date": "2026-06-23",
        "quantity": 23,
        "unit": "Adet",
        "unitPrice": 5.8,
        "currency": "USD",
        "amount": 133.4,
        "invoiceNo": "",
        "description": "Tanga Bikini"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_25",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-07-27",
        "quantity": 144,
        "unit": "Adet",
        "unitPrice": 3.67,
        "currency": "USD",
        "amount": 528.48,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_26",
        "type": "SHIPMENT",
        "productName": "Tanga Bikini",
        "date": "2026-07-27",
        "quantity": 160,
        "unit": "Adet",
        "unitPrice": 5.8,
        "currency": "USD",
        "amount": 928,
        "invoiceNo": "",
        "description": "Tanga Bikini"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_27",
        "type": "SHIPMENT",
        "productName": "20/07/2026 Tarihli Hüseyin HIDIR Seneti (PROTESTO MASRAFI)",
        "date": "2026-06-01",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 48.838700635752474,
        "currency": "USD",
        "amount": 48.84,
        "invoiceNo": "",
        "description": "20/07/2026 Tarihli Hüseyin HIDIR Seneti (PROTESTO MASRAFI)"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_28",
        "type": "SHIPMENT",
        "productName": "20/07/2026 Tarihli İsmet REHANZI Seneti (PROTESTO MASRAFI)",
        "date": "2026-06-01",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 48.838700635752474,
        "currency": "USD",
        "amount": 48.84,
        "invoiceNo": "",
        "description": "20/07/2026 Tarihli İsmet REHANZI Seneti (PROTESTO MASRAFI)"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_29",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-08-03",
        "amount": 5,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Hüseyin HIDIR Senet ÖDEMESİ (PARİTE FARKI)",
        "description": "Hüseyin HIDIR Senet ÖDEMESİ (PARİTE FARKI)",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_30",
        "type": "SHIPMENT",
        "productName": "İsmet REHANZI Senet Ödemesi - Ahmet Güler Eyüp Tercana Gönderdi (KUR FARKI)",
        "date": "2026-08-10",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 5.005756018427064,
        "currency": "USD",
        "amount": 5.01,
        "invoiceNo": "",
        "description": "İsmet REHANZI Senet Ödemesi - Ahmet Güler Eyüp Tercana Gönderdi (KUR FARKI)"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_31",
        "type": "SHIPMENT",
        "productName": "202 Vs Gömme Penye Tanga",
        "date": "2026-08-13",
        "quantity": 100,
        "unit": "Adet",
        "unitPrice": 4.5,
        "currency": "USD",
        "amount": 450,
        "invoiceNo": "",
        "description": "202 Vs Gömme Penye Tanga"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_32",
        "type": "SHIPMENT",
        "productName": "203 V.S Penye Gömme Bikini",
        "date": "2026-08-13",
        "quantity": 100,
        "unit": "Adet",
        "unitPrice": 4.5,
        "currency": "USD",
        "amount": 450,
        "invoiceNo": "",
        "description": "203 V.S Penye Gömme Bikini"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_33",
        "type": "SHIPMENT",
        "productName": "30/07/2026 5.000 € DÖNEN SENET PROTESTO",
        "date": "2026-07-30",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 48.597641112759206,
        "currency": "USD",
        "amount": 48.6,
        "invoiceNo": "",
        "description": "30/07/2026 5.000 € DÖNEN SENET PROTESTO"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_34",
        "type": "SHIPMENT",
        "productName": "30/07/2026 5.000 € DÖNEN SENET",
        "date": "2026-07-30",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 5900,
        "currency": "USD",
        "amount": 5900,
        "invoiceNo": "",
        "description": "30/07/2026 5.000 € DÖNEN SENET"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_35",
        "type": "SHIPMENT",
        "productName": "5'li Boxer",
        "date": "2026-09-11",
        "quantity": 22,
        "unit": "Adet",
        "unitPrice": 6.5,
        "currency": "USD",
        "amount": 143,
        "invoiceNo": "",
        "description": "5'li Boxer"
      },
      {
        "id": "tx_cust_ex_ahmet_g_ler_36",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-09-11",
        "quantity": 143,
        "unit": "Adet",
        "unitPrice": 3.67,
        "currency": "USD",
        "amount": 524.81,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      }
    ]
  },
  {
    "id": "cust_ex_mehmet_eraslan",
    "name": "MEHMET ERASLAN",
    "currency": "USD",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (MEHMET ERASLAN)",
    "transactions": [
      {
        "id": "tx_cust_ex_mehmet_eraslan_3",
        "type": "SHIPMENT",
        "productName": "YENİ 5 Lİ  ERK BOXER",
        "date": "2025-10-30",
        "quantity": 752,
        "unit": "Adet",
        "unitPrice": 6.2,
        "currency": "USD",
        "amount": 4662.4,
        "invoiceNo": "",
        "description": "YENİ 5 Lİ  ERK BOXER"
      },
      {
        "id": "tx_cust_ex_mehmet_eraslan_4",
        "type": "SHIPMENT",
        "productName": "DESENLI",
        "date": "2025-11-10",
        "quantity": 2000,
        "unit": "Adet",
        "unitPrice": 0.85,
        "currency": "USD",
        "amount": 1700,
        "invoiceNo": "",
        "description": "DESENLI"
      },
      {
        "id": "tx_cust_ex_mehmet_eraslan_5",
        "type": "SHIPMENT",
        "productName": "5'li Boxer",
        "date": "2026-06-05",
        "quantity": 141,
        "unit": "Adet",
        "unitPrice": 6.2,
        "currency": "USD",
        "amount": 874.2,
        "invoiceNo": "",
        "description": "5'li Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_eraslan_6",
        "type": "SHIPMENT",
        "productName": "3'Lü Paket Boxer",
        "date": "2026-06-15",
        "quantity": 4896,
        "unit": "Adet",
        "unitPrice": 3.4065934065934065,
        "currency": "USD",
        "amount": 16678.68,
        "invoiceNo": "",
        "description": "3'Lü Paket Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_eraslan_7",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-01",
        "amount": 15405.84,
        "currency": "USD",
        "method": "Müşteri Çeki",
        "ref": "30/10/2026 * 0068741 Seri No Kuveyt Çeki (GÜNÜNDE KUR)",
        "description": "30/10/2026 * 0068741 Seri No Kuveyt Çeki (GÜNÜNDE KUR)",
        "isCheck": true,
        "checkNo": "30/10/2026",
        "dueDate": "2026-10-30",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "isCash": false,
        "fxAmount": 0,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_eraslan_8",
        "type": "SHIPMENT",
        "productName": "5'Li Paket Boxer",
        "date": "2026-07-07",
        "quantity": 188,
        "unit": "Adet",
        "unitPrice": 6.2,
        "currency": "USD",
        "amount": 1165.6,
        "invoiceNo": "",
        "description": "5'Li Paket Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_eraslan_9",
        "type": "SHIPMENT",
        "productName": "5'li boer",
        "date": "2026-07-14",
        "quantity": 94,
        "unit": "Adet",
        "unitPrice": 6.2,
        "currency": "USD",
        "amount": 582.8,
        "invoiceNo": "",
        "description": "5'li boer"
      },
      {
        "id": "tx_cust_ex_mehmet_eraslan_10",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-20",
        "amount": 1515.51,
        "currency": "USD",
        "method": "Kredi Kartı / POS",
        "ref": "Ödeme Pos (71.500 TL FATURA - 65.000 TL Ödeme)",
        "description": "Ödeme Pos (71.500 TL FATURA - 65.000 TL Ödeme)",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_eraslan_11",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-20",
        "amount": 423.92,
        "currency": "USD",
        "method": "Kredi Kartı / POS",
        "ref": "Ödeme Pos",
        "description": "Ödeme Pos",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_eraslan_12",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-23",
        "amount": 982.08,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "3'lü Paket Boxer (SATAMADI RAMAZANA VERDİ İADE OLACAKTI)",
        "description": "3'lü Paket Boxer (SATAMADI RAMAZANA VERDİ İADE OLACAKTI)",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_eraslan_13",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-23",
        "amount": 177.85,
        "currency": "USD",
        "method": "Kredi Kartı / POS",
        "ref": "Ödeme Pos",
        "description": "Ödeme Pos",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_eraslan_14",
        "type": "SHIPMENT",
        "productName": "71.500 TL POSDAN ÖDEME YAPILDI - FATURASI KESİLDİ",
        "date": "2026-07-31",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 137.7740378603056,
        "currency": "USD",
        "amount": 137.77,
        "invoiceNo": "",
        "description": "71.500 TL POSDAN ÖDEME YAPILDI - FATURASI KESİLDİ"
      },
      {
        "id": "tx_cust_ex_mehmet_eraslan_15",
        "type": "SHIPMENT",
        "productName": "5'li Boxer",
        "date": "2026-09-11",
        "quantity": 64,
        "unit": "Adet",
        "unitPrice": 6.2,
        "currency": "USD",
        "amount": 396.8,
        "invoiceNo": "",
        "description": "5'li Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_eraslan_16",
        "type": "SHIPMENT",
        "productName": "Desenli Boxer",
        "date": "2026-09-21",
        "quantity": 500,
        "unit": "Adet",
        "unitPrice": 0.85,
        "currency": "USD",
        "amount": 425,
        "invoiceNo": "",
        "description": "Desenli Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_eraslan_17",
        "type": "SHIPMENT",
        "productName": "Desenli Boxer",
        "date": "2026-09-22",
        "quantity": 1000,
        "unit": "Adet",
        "unitPrice": 0.85,
        "currency": "USD",
        "amount": 850,
        "invoiceNo": "",
        "description": "Desenli Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_eraslan_18",
        "type": "SHIPMENT",
        "productName": "Desenli Boxer",
        "date": "2026-09-30",
        "quantity": 1000,
        "unit": "Adet",
        "unitPrice": 0.85,
        "currency": "USD",
        "amount": 850,
        "invoiceNo": "",
        "description": "Desenli Boxer"
      }
    ]
  },
  {
    "id": "cust_ex_kenpaul_kenan",
    "name": "KENPAUL YEŞİLDİREK KENAN",
    "currency": "USD",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (KENPAUL KENAN)",
    "transactions": [
      {
        "id": "tx_cust_ex_kenpaul_kenan_3",
        "type": "SHIPMENT",
        "productName": "Desenli Boxer",
        "date": "2026-01-20",
        "quantity": 100,
        "unit": "Adet",
        "unitPrice": 0.9,
        "currency": "USD",
        "amount": 90,
        "invoiceNo": "",
        "description": "Desenli Boxer"
      },
      {
        "id": "tx_cust_ex_kenpaul_kenan_4",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-01-20",
        "quantity": 100,
        "unit": "Adet",
        "unitPrice": 4,
        "currency": "USD",
        "amount": 400,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_kenpaul_kenan_5",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-24",
        "amount": 400,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_kenpaul_kenan_6",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-09-04",
        "amount": 90,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Eyüp Tercan Sil Dedi",
        "description": "Eyüp Tercan Sil Dedi",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex_ramazan__zy_g_t",
    "name": "RAMAZAN ÖZYİĞİT",
    "currency": "TL",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (RAMAZAN ÖZYİGİT)",
    "transactions": [
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_3",
        "type": "SHIPMENT",
        "productName": "2025 Yılından Devreden Bakiye",
        "date": "2026-01-01",
        "quantity": 1,
        "unit": "Devir",
        "unitPrice": 88820,
        "currency": "USD",
        "amount": 88820,
        "invoiceNo": "DEVIR-2025",
        "description": "2025 DEVİR"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_4",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-02-18",
        "amount": 40000,
        "currency": "USD",
        "method": "Kredi Kartı / POS",
        "ref": "Ödeme Pos",
        "description": "Ödeme Pos",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_5",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-03-16",
        "amount": 15000,
        "currency": "USD",
        "method": "Kredi Kartı / POS",
        "ref": "Ödeme Pos",
        "description": "Ödeme Pos",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_6",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-03-23",
        "amount": 60000,
        "currency": "USD",
        "method": "Kredi Kartı / POS",
        "ref": "Ödeme Pos",
        "description": "Ödeme Pos",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_7",
        "type": "SHIPMENT",
        "productName": "Desenli Boxer",
        "date": "2026-04-07",
        "quantity": 20000,
        "unit": "Adet",
        "unitPrice": 32,
        "currency": "USD",
        "amount": 640000,
        "invoiceNo": "",
        "description": "Desenli Boxer"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_8",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-07",
        "amount": 500000,
        "currency": "USD",
        "method": "Müşteri Senedi",
        "ref": "Hakan Turun Senet - 25/06/2026",
        "description": "Hakan Turun Senet - 25/06/2026",
        "isCheck": false,
        "checkNo": "Hakan",
        "dueDate": "2026-06-25",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": true
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_9",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-07",
        "amount": 100000,
        "currency": "USD",
        "method": "Müşteri Senedi",
        "ref": "Recep Çetiner Senet - 30/06/2026",
        "description": "Recep Çetiner Senet - 30/06/2026",
        "isCheck": false,
        "checkNo": "Recep",
        "dueDate": "2026-06-30",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": true
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_10",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-07",
        "amount": 75000,
        "currency": "USD",
        "method": "Müşteri Senedi",
        "ref": "Fatih Çetiner Senet - 15/06/2026",
        "description": "Fatih Çetiner Senet - 15/06/2026",
        "isCheck": false,
        "checkNo": "Fatih",
        "dueDate": "2026-06-15",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": true
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_11",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-07",
        "amount": 150000,
        "currency": "USD",
        "method": "Müşteri Senedi",
        "ref": "Neydim Menteş Senet - 30/06/2026",
        "description": "Neydim Menteş Senet - 30/06/2026",
        "isCheck": false,
        "checkNo": "Neydim",
        "dueDate": "2026-06-30",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": true
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_12",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-07",
        "amount": 100000,
        "currency": "USD",
        "method": "Müşteri Senedi",
        "ref": "Recep Çetiner Senet - 30/05/2026",
        "description": "Recep Çetiner Senet - 30/05/2026",
        "isCheck": false,
        "checkNo": "Recep",
        "dueDate": "2026-05-30",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": true
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_13",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-07",
        "amount": 150000,
        "currency": "USD",
        "method": "Müşteri Senedi",
        "ref": "Murat İşler Senet - 25/05/2026",
        "description": "Murat İşler Senet - 25/05/2026",
        "isCheck": false,
        "checkNo": "Murat",
        "dueDate": "2026-05-25",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": true
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_14",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-07",
        "amount": 50000,
        "currency": "USD",
        "method": "Müşteri Senedi",
        "ref": "Mehmet Çalışkan Senet - 30/06/2026",
        "description": "Mehmet Çalışkan Senet - 30/06/2026",
        "isCheck": false,
        "checkNo": "Mehmet",
        "dueDate": "2026-06-30",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": true
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_15",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-07",
        "amount": 5000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Eyüp Tercana Nakit Ödeme",
        "description": "Eyüp Tercana Nakit Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_16",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-07",
        "amount": 3000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Eyüp Tercana Nakit Ödeme",
        "description": "Eyüp Tercana Nakit Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_17",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-15",
        "amount": 1940172,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "SENETLERİ N KARŞILIĞI KUR 52",
        "description": "SENETLERİ N KARŞILIĞI KUR 52",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_18",
        "type": "SHIPMENT",
        "productName": "Desenli Boxer",
        "date": "2026-04-14",
        "quantity": 10000,
        "unit": "Adet",
        "unitPrice": 32,
        "currency": "USD",
        "amount": 320000,
        "invoiceNo": "",
        "description": "Desenli Boxer"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_19",
        "type": "SHIPMENT",
        "productName": "5'li Boxer",
        "date": "2026-04-16",
        "quantity": 188,
        "unit": "Adet",
        "unitPrice": 270,
        "currency": "USD",
        "amount": 50760,
        "invoiceNo": "",
        "description": "5'li Boxer"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_20",
        "type": "SHIPMENT",
        "productName": "3'lü Slip",
        "date": "2026-05-01",
        "quantity": 2448,
        "unit": "Adet",
        "unitPrice": 170,
        "currency": "USD",
        "amount": 416160,
        "invoiceNo": "",
        "description": "3'lü Slip"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_21",
        "type": "SHIPMENT",
        "productName": "3'lü Slip",
        "date": "2026-05-07",
        "quantity": 936,
        "unit": "Adet",
        "unitPrice": 170,
        "currency": "USD",
        "amount": 159120,
        "invoiceNo": "",
        "description": "3'lü Slip"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_22",
        "type": "SHIPMENT",
        "productName": "Recep Çetiner Senet - 30/05/2026  (DÖNEN SENET) - İADE",
        "date": "2026-05-30",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 100000,
        "currency": "USD",
        "amount": 100000,
        "invoiceNo": "",
        "description": "Recep Çetiner Senet - 30/05/2026  (DÖNEN SENET) - İADE"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_23",
        "type": "SHIPMENT",
        "productName": "Recep Çiftener Senet Ödemesi Protesto Masrafı (100.000 TL)",
        "date": "2026-06-03",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 3000,
        "currency": "USD",
        "amount": 3000,
        "invoiceNo": "",
        "description": "Recep Çiftener Senet Ödemesi Protesto Masrafı (100.000 TL)"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_24",
        "type": "SHIPMENT",
        "productName": "5'li Boxer",
        "date": "2026-06-04",
        "quantity": 423,
        "unit": "Adet",
        "unitPrice": 270,
        "currency": "USD",
        "amount": 114210,
        "invoiceNo": "",
        "description": "5'li Boxer"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_25",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-11",
        "amount": 50000,
        "currency": "USD",
        "method": "Kredi Kartı / POS",
        "ref": "Apdullah Kutmu POS Senet Ödemesi (DÖNEN SENET)",
        "description": "Apdullah Kutmu POS Senet Ödemesi (DÖNEN SENET)",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_26",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-11",
        "amount": 50000,
        "currency": "USD",
        "method": "Kredi Kartı / POS",
        "ref": "Apdullah Kutmu POS Senet Ödemesi (DÖNEN SENET)",
        "description": "Apdullah Kutmu POS Senet Ödemesi (DÖNEN SENET)",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_27",
        "type": "SHIPMENT",
        "productName": "Fatih Çetiner Senet - 15/06/2026 (DÖNEN SENET)",
        "date": "2026-06-15",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 75000,
        "currency": "USD",
        "amount": 75000,
        "invoiceNo": "",
        "description": "Fatih Çetiner Senet - 15/06/2026 (DÖNEN SENET)"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_28",
        "type": "SHIPMENT",
        "productName": "Fatih Çetiner Senet - 15/06/2026 (DÖNEN SENET PROTESTO)",
        "date": "2026-06-15",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 3000,
        "currency": "USD",
        "amount": 3000,
        "invoiceNo": "",
        "description": "Fatih Çetiner Senet - 15/06/2026 (DÖNEN SENET PROTESTO)"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_29",
        "type": "SHIPMENT",
        "productName": "Hakan Turun Senet - 25/06/2026 (DÖNEN SENET)",
        "date": "2026-06-25",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 500000,
        "currency": "USD",
        "amount": 500000,
        "invoiceNo": "",
        "description": "Hakan Turun Senet - 25/06/2026 (DÖNEN SENET)"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_30",
        "type": "SHIPMENT",
        "productName": "Hakan Turun Senet - 25/06/2026 (DÖNEN SENET) SENET FARKI",
        "date": "2026-06-25",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 15000,
        "currency": "USD",
        "amount": 15000,
        "invoiceNo": "",
        "description": "Hakan Turun Senet - 25/06/2026 (DÖNEN SENET) SENET FARKI"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_31",
        "type": "SHIPMENT",
        "productName": "Recep Çetiner Senet - 30/06/2026 (DÖNEN SENET)",
        "date": "2026-06-30",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 100000,
        "currency": "USD",
        "amount": 100000,
        "invoiceNo": "",
        "description": "Recep Çetiner Senet - 30/06/2026 (DÖNEN SENET)"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_32",
        "type": "SHIPMENT",
        "productName": "Recep Çetiner Senet - 30/06/2026 (DÖNEN SENET PROTESTO)",
        "date": "2026-06-30",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 3000,
        "currency": "USD",
        "amount": 3000,
        "invoiceNo": "",
        "description": "Recep Çetiner Senet - 30/06/2026 (DÖNEN SENET PROTESTO)"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_33",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-01",
        "amount": 105600,
        "currency": "USD",
        "method": "Müşteri Senedi",
        "ref": "Tahsilat (AHMET GÜLER 2.000 € SENET) (SENET RAMAZANDADIR)",
        "description": "Tahsilat (AHMET GÜLER 2.000 € SENET) (SENET RAMAZANDADIR)",
        "isCheck": false,
        "checkNo": "Tahsilat",
        "dueDate": "2026-07-01",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": true
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_34",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-10",
        "amount": 114000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Hakan Turun Senetin Ödemesi (Varol TORUN)",
        "description": "Hakan Turun Senetin Ödemesi (Varol TORUN)",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_35",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-13",
        "amount": 28400,
        "currency": "USD",
        "method": "Kredi Kartı / POS",
        "ref": "Ramazan Özyiğit Dönen Senete İstinaden (POS)",
        "description": "Ramazan Özyiğit Dönen Senete İstinaden (POS)",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_36",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-13",
        "amount": 50000,
        "currency": "USD",
        "method": "Kredi Kartı / POS",
        "ref": "Ramazan Özyiğit Dönen Senete İstinaden (POS)",
        "description": "Ramazan Özyiğit Dönen Senete İstinaden (POS)",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_37",
        "type": "SHIPMENT",
        "productName": "5'li Boxer",
        "date": "2026-07-16",
        "quantity": 94,
        "unit": "Adet",
        "unitPrice": 270,
        "currency": "USD",
        "amount": 25380,
        "invoiceNo": "",
        "description": "5'li Boxer"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_38",
        "type": "SHIPMENT",
        "productName": "MEHMET ERASLANDAN 3'LÜ PAKET 4 KOLİ MAL ALDI",
        "date": "2026-07-23",
        "quantity": 288,
        "unit": "Adet",
        "unitPrice": 160,
        "currency": "USD",
        "amount": 46080,
        "invoiceNo": "",
        "description": "MEHMET ERASLANDAN 3'LÜ PAKET 4 KOLİ MAL ALDI"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_39",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-21",
        "amount": 128000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Hakan Turun Senetin Ödemesi (Varol TORUN)",
        "description": "Hakan Turun Senetin Ödemesi (Varol TORUN)",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_40",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-29",
        "amount": 70000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Hakan Turun Senetin Ödemesi (Varol TORUN)",
        "description": "Hakan Turun Senetin Ödemesi (Varol TORUN)",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_41",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-08-08",
        "amount": 73000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Hakan Turun Senetin Ödemesi (Varol TORUN)",
        "description": "Hakan Turun Senetin Ödemesi (Varol TORUN)",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_42",
        "type": "SHIPMENT",
        "productName": "5'li Boxer",
        "date": "2026-08-11",
        "quantity": 235,
        "unit": "Adet",
        "unitPrice": 270,
        "currency": "USD",
        "amount": 63450,
        "invoiceNo": "",
        "description": "5'li Boxer"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_43",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-08-13",
        "amount": 75000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Hakan turun Senetin Ödemesi",
        "description": "Hakan turun Senetin Ödemesi",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_44",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-08-20",
        "amount": 30000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "varol torun senet ödemesi yazan eyup",
        "description": "varol torun senet ödemesi yazan eyup",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_45",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-08-20",
        "amount": 10000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "hakan torun senet ödemesi yazan eyüp",
        "description": "hakan torun senet ödemesi yazan eyüp",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_46",
        "type": "SHIPMENT",
        "productName": "MUTABAKAT",
        "date": "2026-08-25",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 61660,
        "currency": "USD",
        "amount": 61660,
        "invoiceNo": "",
        "description": "MUTABAKAT"
      },
      {
        "id": "tx_cust_ex_ramazan__zy_g_t_47",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-08-30",
        "amount": 92000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "30.08.2026 AHMET GÜLERDEN 80.000 TL SENET 12.000 TL'DE RAMAZAN ÖZYİĞİT ADINA ÖDEME ALINDI",
        "description": "30.08.2026 AHMET GÜLERDEN 80.000 TL SENET 12.000 TL'DE RAMAZAN ÖZYİĞİT ADINA ÖDEME ALINDI",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex____demg_l__zy___t",
    "name": "ÇİĞDEM GÜL ÖZYİĞİT",
    "currency": "TL",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (ÇİĞDEMGÜL ÖZYİĞİT)",
    "transactions": [
      {
        "id": "tx_cust_ex____demg_l__zy___t_3",
        "type": "SHIPMENT",
        "productName": "3'LÜ BOXER",
        "date": "2026-01-19",
        "quantity": 1512,
        "unit": "Adet",
        "unitPrice": 150,
        "currency": "TL",
        "amount": 226800,
        "invoiceNo": "",
        "description": "3'LÜ BOXER"
      },
      {
        "id": "tx_cust_ex____demg_l__zy___t_4",
        "type": "SHIPMENT",
        "productName": "10'LU DESENLİ BOXER",
        "date": "2026-01-19",
        "quantity": 5300,
        "unit": "Adet",
        "unitPrice": 32,
        "currency": "TL",
        "amount": 169600,
        "invoiceNo": "",
        "description": "10'LU DESENLİ BOXER"
      },
      {
        "id": "tx_cust_ex____demg_l__zy___t_5",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-01-19",
        "amount": 385000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "ÖDEME",
        "description": "ÖDEME",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex____demg_l__zy___t_6",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-03-26",
        "amount": 4000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "ÖDEME",
        "description": "ÖDEME",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex____demg_l__zy___t_7",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-03-26",
        "amount": 4000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "ÖDEME",
        "description": "ÖDEME",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex____demg_l__zy___t_8",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-03-31",
        "quantity": 432,
        "unit": "Adet",
        "unitPrice": 150,
        "currency": "TL",
        "amount": 64800,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex____demg_l__zy___t_9",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-03-31",
        "amount": 49200,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "ÖDEME",
        "description": "ÖDEME",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex____demg_l__zy___t_10",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-08",
        "amount": 10000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "ÖDEME",
        "description": "ÖDEME",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex____demg_l__zy___t_11",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-09",
        "amount": 9000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "HESAP SIFIRLANDI",
        "description": "HESAP SIFIRLANDI",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex_ede_tekst_l_levent_sem_z",
    "name": "LEVENT SEMİZ (Ede Tekstil)",
    "currency": "EUR",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (EDE TEKSTİL LEVENT SEMİZ)",
    "transactions": [
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_3",
        "type": "SHIPMENT",
        "productName": "2025 Yılından Devreden Bakiye",
        "date": "2026-01-01",
        "quantity": 1,
        "unit": "Devir",
        "unitPrice": 56161.55,
        "currency": "EUR",
        "amount": 56161.55,
        "invoiceNo": "DEVIR-2025",
        "description": "2025 DEVİR"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_4",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-01-16",
        "amount": 80000,
        "currency": "EUR",
        "method": "Müşteri Çeki",
        "ref": "Çek Alındı",
        "description": "Çek Alındı",
        "isCheck": true,
        "checkNo": "Çek",
        "dueDate": "2026-01-16",
        "autoFx": true,
        "entryRate": 52,
        "fxApplied": false,
        "fxAmount": 0,
        "isCash": false,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_5",
        "type": "SHIPMENT",
        "productName": "Micro Boxer Battal",
        "date": "2026-01-19",
        "quantity": 2100,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 2940,
        "invoiceNo": "",
        "description": "Micro Boxer Battal"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_6",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-01-19",
        "quantity": 3600,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "EUR",
        "amount": 4860,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_7",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-04-14",
        "quantity": 1600,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "EUR",
        "amount": 2160,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_8",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-04-23",
        "quantity": 2200,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "EUR",
        "amount": 2970,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_9",
        "type": "SHIPMENT",
        "productName": "Micro Boxer Battal",
        "date": "2026-04-23",
        "quantity": 200,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 280,
        "invoiceNo": "",
        "description": "Micro Boxer Battal"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_10",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-04-23",
        "quantity": 500,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "EUR",
        "amount": 675,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_11",
        "type": "SHIPMENT",
        "productName": "Micro Slip",
        "date": "2026-04-27",
        "quantity": 1200,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "EUR",
        "amount": 1620,
        "invoiceNo": "",
        "description": "Micro Slip"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_12",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-06-03",
        "quantity": 800,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "EUR",
        "amount": 1080,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_13",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-06-03",
        "quantity": 4300,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "EUR",
        "amount": 5805,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_14",
        "type": "SHIPMENT",
        "productName": "Micro Boxer Battal",
        "date": "2026-06-03",
        "quantity": 800,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 1120,
        "invoiceNo": "",
        "description": "Micro Boxer Battal"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_15",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-06-19",
        "quantity": 1600,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "EUR",
        "amount": 2160,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_16",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-06-29",
        "quantity": 900,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "EUR",
        "amount": 1215,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_17",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (M/L)",
        "date": "2026-08-21",
        "quantity": 600,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "EUR",
        "amount": 810,
        "invoiceNo": "",
        "description": "Micro Boxer (M/L)"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_18",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (S/M)",
        "date": "2026-08-21",
        "quantity": 200,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "EUR",
        "amount": 270,
        "invoiceNo": "",
        "description": "Micro Boxer (S/M)"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_19",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (XL/XXL)",
        "date": "2026-08-21",
        "quantity": 100,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 140,
        "invoiceNo": "",
        "description": "Micro Boxer (XL/XXL)"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_20",
        "type": "SHIPMENT",
        "productName": "Micro Slip",
        "date": "2026-08-21",
        "quantity": 300,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "EUR",
        "amount": 405,
        "invoiceNo": "",
        "description": "Micro Slip"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_21",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (M/L - L/XL)",
        "date": "2026-08-21",
        "quantity": 900,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "EUR",
        "amount": 1215,
        "invoiceNo": "",
        "description": "Micro Boxer (M/L - L/XL)"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_22",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (XL/XXL)",
        "date": "2026-08-21",
        "quantity": 100,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 140,
        "invoiceNo": "",
        "description": "Micro Boxer (XL/XXL)"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_23",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (M/L - L/XL)",
        "date": "2026-09-01",
        "quantity": 1200,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "EUR",
        "amount": 1620,
        "invoiceNo": "",
        "description": "Micro Boxer (M/L - L/XL)"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_24",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (XL/XXL)",
        "date": "2026-09-01",
        "quantity": 600,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 840,
        "invoiceNo": "",
        "description": "Micro Boxer (XL/XXL)"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_25",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (M/L - L/XL)",
        "date": "2026-09-01",
        "quantity": 1300,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "EUR",
        "amount": 1755,
        "invoiceNo": "",
        "description": "Micro Boxer (M/L - L/XL)"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_26",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (XL/XXL)",
        "date": "2026-09-01",
        "quantity": 500,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 700,
        "invoiceNo": "",
        "description": "Micro Boxer (XL/XXL)"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_27",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (M/L - L/XL)",
        "date": "2026-09-17",
        "quantity": 1580,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "EUR",
        "amount": 2133,
        "invoiceNo": "",
        "description": "Micro Boxer (M/L - L/XL)"
      },
      {
        "id": "tx_cust_ex_ede_tekst_l_levent_sem_z_28",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (XL/XXL)",
        "date": "2026-09-17",
        "quantity": 420,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 588,
        "invoiceNo": "",
        "description": "Micro Boxer (XL/XXL)"
      }
    ]
  },
  {
    "id": "cust_ex_cuma_pazarci",
    "name": "CUMA PAZARCI",
    "currency": "EUR",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (CUMA PAZARCI)",
    "transactions": [
      {
        "id": "tx_cust_ex_cuma_pazarci_3",
        "type": "SHIPMENT",
        "productName": "2025 Yılından Devreden Bakiye",
        "date": "2026-01-01",
        "quantity": 1,
        "unit": "Devir",
        "unitPrice": 2092,
        "currency": "EUR",
        "amount": 2092,
        "invoiceNo": "DEVIR-2025",
        "description": "2025 DEVİR"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_4",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-01-16",
        "amount": 597.07,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "KUR : 50,2450 TL",
        "description": "KUR : 50,2450 TL",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_5",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-01-20",
        "quantity": 500,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 700,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_6",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-01-20",
        "amount": 595.83,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "KUR : 50,3500 TL",
        "description": "KUR : 50,3500 TL",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_7",
        "type": "SHIPMENT",
        "productName": "Micro Boxer Battal",
        "date": "2026-02-06",
        "quantity": 250,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 350,
        "invoiceNo": "",
        "description": "Micro Boxer Battal"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_8",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-02-06",
        "quantity": 300,
        "unit": "Adet",
        "unitPrice": 1.3,
        "currency": "EUR",
        "amount": 390,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_9",
        "type": "SHIPMENT",
        "productName": "Micro Slip",
        "date": "2026-02-06",
        "quantity": 180,
        "unit": "Adet",
        "unitPrice": 1.3,
        "currency": "EUR",
        "amount": 234,
        "invoiceNo": "",
        "description": "Micro Slip"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_10",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-03-10",
        "quantity": 200,
        "unit": "Adet",
        "unitPrice": 1.3,
        "currency": "EUR",
        "amount": 260,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_11",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-03-10",
        "amount": 584.68,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "KUR : 51,3097 TL",
        "description": "KUR : 51,3097 TL",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_12",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-04-10",
        "quantity": 300,
        "unit": "Adet",
        "unitPrice": 1.3,
        "currency": "EUR",
        "amount": 390,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_13",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-04-10",
        "quantity": 180,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 252,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_14",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-10",
        "amount": 750,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "",
        "description": "",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_15",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-05-07",
        "quantity": 550,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 770,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_16",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-05-08",
        "amount": 563.57,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_17",
        "type": "SHIPMENT",
        "productName": "micro boxer",
        "date": "2026-06-04",
        "quantity": 420,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 588,
        "invoiceNo": "",
        "description": "micro boxer"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_18",
        "type": "SHIPMENT",
        "productName": "micro",
        "date": "2026-06-04",
        "quantity": 180,
        "unit": "Adet",
        "unitPrice": 1.3,
        "currency": "EUR",
        "amount": 234,
        "invoiceNo": "",
        "description": "micro"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_19",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-08",
        "amount": 660,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "ödeme",
        "description": "ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_20",
        "type": "SHIPMENT",
        "productName": "Micro Boxer Battal",
        "date": "2026-07-06",
        "quantity": 140,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 196,
        "invoiceNo": "",
        "description": "Micro Boxer Battal"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_21",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-07-06",
        "quantity": 360,
        "unit": "Adet",
        "unitPrice": 1.3,
        "currency": "EUR",
        "amount": 468,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_22",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-06",
        "amount": 467.57,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Kur: 53,4677",
        "description": "Kur: 53,4677",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_23",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-06",
        "amount": 150,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_24",
        "type": "SHIPMENT",
        "productName": "Bayan",
        "date": "2026-07-17",
        "quantity": 234,
        "unit": "Adet",
        "unitPrice": 2.2286812707197714,
        "currency": "EUR",
        "amount": 521.51,
        "invoiceNo": "",
        "description": "Bayan"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_25",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-07-17",
        "quantity": 100,
        "unit": "Adet",
        "unitPrice": 1.3,
        "currency": "EUR",
        "amount": 130,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_26",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-17",
        "amount": 638.49,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_27",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-07-31",
        "quantity": 330,
        "unit": "Adet",
        "unitPrice": 1.3,
        "currency": "EUR",
        "amount": 429,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_28",
        "type": "SHIPMENT",
        "productName": "Micro Battal",
        "date": "2026-07-31",
        "quantity": 50,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 70,
        "invoiceNo": "",
        "description": "Micro Battal"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_29",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-31",
        "amount": 916.05,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Kur : 54.5822 TL",
        "description": "Kur : 54.5822 TL",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_30",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (XL/XXL)",
        "date": "2026-08-21",
        "quantity": 50,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 70,
        "invoiceNo": "",
        "description": "Micro Boxer (XL/XXL)"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_31",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (M/L - L/XL)",
        "date": "2026-08-21",
        "quantity": 360,
        "unit": "Adet",
        "unitPrice": 1.3,
        "currency": "EUR",
        "amount": 468,
        "invoiceNo": "",
        "description": "Micro Boxer (M/L - L/XL)"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_32",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-08-21",
        "amount": 538,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_33",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (M/L - L/XL)",
        "date": "2026-09-11",
        "quantity": 400,
        "unit": "Adet",
        "unitPrice": 1.3,
        "currency": "EUR",
        "amount": 520,
        "invoiceNo": "",
        "description": "Micro Boxer (M/L - L/XL)"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_34",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (XL/XXL)",
        "date": "2026-09-11",
        "quantity": 300,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 420,
        "invoiceNo": "",
        "description": "Micro Boxer (XL/XXL)"
      },
      {
        "id": "tx_cust_ex_cuma_pazarci_35",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-09-11",
        "amount": 940,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex_pazarci_dursun_u_ur",
    "name": "PAZARCI DURSUN & UĞUR",
    "currency": "USD",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (PAZARCI DURSUN-UĞUR)",
    "transactions": [
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_3",
        "type": "SHIPMENT",
        "productName": "2025 Yılından Devreden Bakiye",
        "date": "2026-01-01",
        "quantity": 1,
        "unit": "Devir",
        "unitPrice": 10895.07,
        "currency": "USD",
        "amount": 10895.07,
        "invoiceNo": "DEVIR-2025",
        "description": "2025 DEVİR"
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_5",
        "type": "SHIPMENT",
        "productName": "Poplin 12 Paket",
        "date": "2026-03-13",
        "quantity": 120,
        "unit": "Adet",
        "unitPrice": 1,
        "currency": "USD",
        "amount": 120,
        "invoiceNo": "",
        "description": "Poplin 12 Paket"
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_6",
        "type": "SHIPMENT",
        "productName": "3'lü Kutu Boxer",
        "date": "2026-03-13",
        "quantity": 78,
        "unit": "Adet",
        "unitPrice": 3.8,
        "currency": "USD",
        "amount": 296.4,
        "invoiceNo": "",
        "description": "3'lü Kutu Boxer"
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_7",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-03-13",
        "amount": 226.76,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "KUR : 44,10 TL",
        "description": "KUR : 44,10 TL",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_8",
        "type": "SHIPMENT",
        "productName": "Bayan",
        "date": "2026-07-03",
        "quantity": 90,
        "unit": "Adet",
        "unitPrice": 2.5686141042600465,
        "currency": "USD",
        "amount": 231.18,
        "invoiceNo": "",
        "description": "Bayan"
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_9",
        "type": "SHIPMENT",
        "productName": "Bayan",
        "date": "2026-07-03",
        "quantity": 71,
        "unit": "Adet",
        "unitPrice": 4.281023507100078,
        "currency": "USD",
        "amount": 303.95,
        "invoiceNo": "",
        "description": "Bayan"
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_10",
        "type": "SHIPMENT",
        "productName": "Poplin",
        "date": "2026-07-03",
        "quantity": 180,
        "unit": "Adet",
        "unitPrice": 1,
        "currency": "USD",
        "amount": 180,
        "invoiceNo": "",
        "description": "Poplin"
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_11",
        "type": "SHIPMENT",
        "productName": "Slip",
        "date": "2026-07-03",
        "quantity": 48,
        "unit": "Adet",
        "unitPrice": 4.281023507100078,
        "currency": "USD",
        "amount": 205.49,
        "invoiceNo": "",
        "description": "Slip"
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_12",
        "type": "SHIPMENT",
        "productName": "",
        "date": "2026-07-03",
        "quantity": 52,
        "unit": "Adet",
        "unitPrice": 6.207484085295113,
        "currency": "USD",
        "amount": 322.79,
        "invoiceNo": "",
        "description": ""
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_13",
        "type": "SHIPMENT",
        "productName": "",
        "date": "2026-07-03",
        "quantity": 72,
        "unit": "Adet",
        "unitPrice": 3.5960597459640655,
        "currency": "USD",
        "amount": 258.92,
        "invoiceNo": "",
        "description": ""
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_14",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-03",
        "amount": 1290.32,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_15",
        "type": "SHIPMENT",
        "productName": "Bayan",
        "date": "2026-07-24",
        "quantity": 130,
        "unit": "Adet",
        "unitPrice": 4.219409282700422,
        "currency": "USD",
        "amount": 548.52,
        "invoiceNo": "",
        "description": "Bayan"
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_16",
        "type": "SHIPMENT",
        "productName": "Erkek 3'Lü",
        "date": "2026-07-24",
        "quantity": 163,
        "unit": "Adet",
        "unitPrice": 3.5910435149978874,
        "currency": "USD",
        "amount": 585.34,
        "invoiceNo": "",
        "description": "Erkek 3'Lü"
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_17",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-24",
        "amount": 211.24,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_18",
        "type": "SHIPMENT",
        "productName": "Tekli Boxer",
        "date": "2026-07-27",
        "quantity": 550,
        "unit": "Adet",
        "unitPrice": 1,
        "currency": "USD",
        "amount": 550,
        "invoiceNo": "",
        "description": "Tekli Boxer"
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_19",
        "type": "SHIPMENT",
        "productName": "10'Lu Boxer",
        "date": "2026-08-11",
        "quantity": 140,
        "unit": "Adet",
        "unitPrice": 1,
        "currency": "USD",
        "amount": 140,
        "invoiceNo": "",
        "description": "10'Lu Boxer"
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_20",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-08-11",
        "quantity": 100,
        "unit": "Adet",
        "unitPrice": 3.59,
        "currency": "USD",
        "amount": 359,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_21",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-08-11",
        "amount": 41.88,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_22",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-08-11",
        "amount": 209.42,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_23",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-08-11",
        "amount": 253.82,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_24",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-08-11",
        "amount": 300,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_pazarci_dursun_u_ur_25",
        "type": "SHIPMENT",
        "productName": "Euro Borcu Dolar Olarak Çevirildi",
        "date": "2026-08-11",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 1878.0608,
        "currency": "USD",
        "amount": 1878.06,
        "invoiceNo": "",
        "description": "Euro Borcu Dolar Olarak Çevirildi"
      }
    ]
  },
  {
    "id": "cust_ex_g_nd_z",
    "name": "GÜNDÜZ",
    "currency": "EUR",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (GÜNDÜZ)",
    "transactions": [
      {
        "id": "tx_cust_ex_g_nd_z_3",
        "type": "SHIPMENT",
        "productName": "2025 Yılından Devreden Bakiye",
        "date": "2026-01-01",
        "quantity": 1,
        "unit": "Devir",
        "unitPrice": 2862.14,
        "currency": "EUR",
        "amount": 2862.14,
        "invoiceNo": "DEVIR-2025",
        "description": "2025 DEVİR"
      },
      {
        "id": "tx_cust_ex_g_nd_z_4",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-01-06",
        "amount": 200,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "KUR : 50 TL",
        "description": "KUR : 50 TL",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_g_nd_z_5",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-02-16",
        "amount": 288.46,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "KUR : 52 TL",
        "description": "KUR : 52 TL",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_g_nd_z_6",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-14",
        "amount": 116,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_g_nd_z_7",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-05",
        "amount": 373.75,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Kur : 53.5118 TL",
        "description": "Kur : 53.5118 TL",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_g_nd_z_8",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-19",
        "amount": 188.31,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Kur: 53,1051 TL",
        "description": "Kur: 53,1051 TL",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_g_nd_z_9",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-10",
        "amount": 186.51,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Kur : 53,6159 TL",
        "description": "Kur : 53,6159 TL",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_g_nd_z_10",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-24",
        "amount": 185.9,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Kur : 53,7918",
        "description": "Kur : 53,7918",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex__orapci_haci_bayram",
    "name": "ÇORAPCI HACI BAYRAM",
    "currency": "TL",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (ÇORAPCI HACI BAYRAM)",
    "transactions": [
      {
        "id": "tx_cust_ex__orapci_haci_bayram_3",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-01-01",
        "amount": 257000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "2024 DEVİR",
        "description": "2024 DEVİR",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex_ceyhun___balikes_r__zzet",
    "name": "CEYHUN YEŞİLDİREK (Balıkesir İzzet)",
    "currency": "EUR",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (CEYHUN - BALIKESİR İZZET)",
    "transactions": [
      {
        "id": "tx_cust_ex_ceyhun___balikes_r__zzet_3",
        "type": "SHIPMENT",
        "productName": "2025 Yılından Devreden Bakiye",
        "date": "2026-01-01",
        "quantity": 1,
        "unit": "Devir",
        "unitPrice": 1332.64,
        "currency": "EUR",
        "amount": 1332.64,
        "invoiceNo": "DEVIR-2025",
        "description": "2025 DEVİR"
      },
      {
        "id": "tx_cust_ex_ceyhun___balikes_r__zzet_4",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-06-18",
        "quantity": 800,
        "unit": "Adet",
        "unitPrice": 1.3,
        "currency": "EUR",
        "amount": 1040,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_ceyhun___balikes_r__zzet_5",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-19",
        "amount": 765,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ceyhun___balikes_r__zzet_6",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-17",
        "amount": 739.18,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ceyhun___balikes_r__zzet_7",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-09-04",
        "amount": 86.04,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "(100 DOLAR)",
        "description": "(100 DOLAR)",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ceyhun___balikes_r__zzet_8",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-09-11",
        "amount": 88.85,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ceyhun___balikes_r__zzet_9",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-09-18",
        "amount": 100,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ceyhun___balikes_r__zzet_10",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-09-25",
        "amount": 100,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "ÖDEME",
        "description": "ÖDEME",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex_ramazan_ye__ld_rek",
    "name": "YEŞİLDİREK RAMAZAN",
    "currency": "USD",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (RAMAZAN YEŞİLDİREK)",
    "transactions": [
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_3",
        "type": "SHIPMENT",
        "productName": "2025 Yılından Devreden Bakiye",
        "date": "2026-01-01",
        "quantity": 1,
        "unit": "Devir",
        "unitPrice": 30913,
        "currency": "USD",
        "amount": 30913,
        "invoiceNo": "DEVIR-2025",
        "description": "2025 DEVİR"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_4",
        "type": "SHIPMENT",
        "productName": "TEKLİ BOXER",
        "date": "2026-01-20",
        "quantity": 17790,
        "unit": "Adet",
        "unitPrice": 1.6,
        "currency": "USD",
        "amount": 28464,
        "invoiceNo": "",
        "description": "TEKLİ BOXER"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_5",
        "type": "SHIPMENT",
        "productName": "TEKLİ BATTAL BOXER",
        "date": "2026-01-20",
        "quantity": 1200,
        "unit": "Adet",
        "unitPrice": 1.25,
        "currency": "USD",
        "amount": 1500,
        "invoiceNo": "",
        "description": "TEKLİ BATTAL BOXER"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_6",
        "type": "SHIPMENT",
        "productName": "TEKLİ BOXER",
        "date": "2026-01-28",
        "quantity": 960,
        "unit": "Adet",
        "unitPrice": 1.1,
        "currency": "USD",
        "amount": 1056,
        "invoiceNo": "",
        "description": "TEKLİ BOXER"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_7",
        "type": "SHIPMENT",
        "productName": "BATTAL BOXER",
        "date": "2026-01-28",
        "quantity": 360,
        "unit": "Adet",
        "unitPrice": 1.25,
        "currency": "USD",
        "amount": 450,
        "invoiceNo": "",
        "description": "BATTAL BOXER"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_8",
        "type": "SHIPMENT",
        "productName": "Tekli Boxer",
        "date": "2026-03-11",
        "quantity": 960,
        "unit": "Adet",
        "unitPrice": 1.1,
        "currency": "USD",
        "amount": 1056,
        "invoiceNo": "",
        "description": "Tekli Boxer"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_9",
        "type": "SHIPMENT",
        "productName": "Tekli Battal Boxer",
        "date": "2026-03-11",
        "quantity": 360,
        "unit": "Adet",
        "unitPrice": 1.25,
        "currency": "USD",
        "amount": 450,
        "invoiceNo": "",
        "description": "Tekli Battal Boxer"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_10",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-03-17",
        "amount": 15000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_11",
        "type": "SHIPMENT",
        "productName": "Tekli Boxer",
        "date": "2026-04-02",
        "quantity": 960,
        "unit": "Adet",
        "unitPrice": 1.1,
        "currency": "USD",
        "amount": 1056,
        "invoiceNo": "",
        "description": "Tekli Boxer"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_12",
        "type": "SHIPMENT",
        "productName": "Tekli Battal Boxer",
        "date": "2026-04-02",
        "quantity": 360,
        "unit": "Adet",
        "unitPrice": 1.25,
        "currency": "USD",
        "amount": 450,
        "invoiceNo": "",
        "description": "Tekli Battal Boxer"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_13",
        "type": "SHIPMENT",
        "productName": "TEKLİ BATTAL BOXER",
        "date": "2026-05-07",
        "quantity": 1500,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "USD",
        "amount": 2100,
        "invoiceNo": "",
        "description": "TEKLİ BATTAL BOXER"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_14",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-21",
        "amount": 7000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_15",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-05-08",
        "amount": 1000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme DOLAr",
        "description": "Ödeme DOLAr",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_16",
        "type": "SHIPMENT",
        "productName": "TEKLİ BATTAL BOXER",
        "date": "2026-05-16",
        "quantity": 540,
        "unit": "Adet",
        "unitPrice": 1.25,
        "currency": "USD",
        "amount": 675,
        "invoiceNo": "",
        "description": "TEKLİ BATTAL BOXER"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_17",
        "type": "SHIPMENT",
        "productName": "TEKLİ BOXER",
        "date": "2026-05-16",
        "quantity": 1140,
        "unit": "Adet",
        "unitPrice": 1.1,
        "currency": "USD",
        "amount": 1584,
        "invoiceNo": "",
        "description": "TEKLİ BOXER"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_18",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-08",
        "amount": 6000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "ödeme",
        "description": "ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_19",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-06-16",
        "quantity": 576,
        "unit": "Adet",
        "unitPrice": 3.25,
        "currency": "USD",
        "amount": 1872,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_20",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-19",
        "amount": 1000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_21",
        "type": "SHIPMENT",
        "productName": "Tekli Boxer",
        "date": "2026-06-24",
        "quantity": 1440,
        "unit": "Adet",
        "unitPrice": 1.1,
        "currency": "USD",
        "amount": 1584,
        "invoiceNo": "",
        "description": "Tekli Boxer"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_22",
        "type": "SHIPMENT",
        "productName": "Tekli Battal Boxer",
        "date": "2026-06-24",
        "quantity": 540,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "USD",
        "amount": 729,
        "invoiceNo": "",
        "description": "Tekli Battal Boxer"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_23",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-10",
        "amount": 1000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_24",
        "type": "SHIPMENT",
        "productName": "Tekli Boxer",
        "date": "2026-07-13",
        "quantity": 6400,
        "unit": "Adet",
        "unitPrice": 1.1,
        "currency": "USD",
        "amount": 7040,
        "invoiceNo": "",
        "description": "Tekli Boxer"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_25",
        "type": "SHIPMENT",
        "productName": "TEKLİ BATTAL BOXER",
        "date": "2026-07-13",
        "quantity": 2700,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "USD",
        "amount": 3645,
        "invoiceNo": "",
        "description": "TEKLİ BATTAL BOXER"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_26",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-24",
        "amount": 1000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_27",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-27",
        "amount": 10000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_28",
        "type": "SHIPMENT",
        "productName": "Ck Tekli Ahtapot (M-L-XL-XXL-)",
        "date": "2026-08-19",
        "quantity": 480,
        "unit": "Adet",
        "unitPrice": 1.15,
        "currency": "USD",
        "amount": 552,
        "invoiceNo": "",
        "description": "Ck Tekli Ahtapot (M-L-XL-XXL-)"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_29",
        "type": "SHIPMENT",
        "productName": "Ck Tekli Battal Ahtapot (3XL-4XL-5XL)",
        "date": "2026-08-19",
        "quantity": 180,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "USD",
        "amount": 243,
        "invoiceNo": "",
        "description": "Ck Tekli Battal Ahtapot (3XL-4XL-5XL)"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_30",
        "type": "SHIPMENT",
        "productName": "Ck Tekli Ahtapot (M-L-XL-XXL-)",
        "date": "2026-08-28",
        "quantity": 480,
        "unit": "Adet",
        "unitPrice": 1.15,
        "currency": "USD",
        "amount": 552,
        "invoiceNo": "",
        "description": "Ck Tekli Ahtapot (M-L-XL-XXL-)"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_31",
        "type": "SHIPMENT",
        "productName": "Ck Tekli Battal Ahtapot (3XL-4XL-5XL)",
        "date": "2026-08-28",
        "quantity": 180,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "USD",
        "amount": 243,
        "invoiceNo": "",
        "description": "Ck Tekli Battal Ahtapot (3XL-4XL-5XL)"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_32",
        "type": "SHIPMENT",
        "productName": "Ck Tekli Ahtapot (M-L-XL-XXL-)",
        "date": "2026-08-28",
        "quantity": 480,
        "unit": "Adet",
        "unitPrice": 1.15,
        "currency": "USD",
        "amount": 552,
        "invoiceNo": "",
        "description": "Ck Tekli Ahtapot (M-L-XL-XXL-)"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_33",
        "type": "SHIPMENT",
        "productName": "Ck Tekli Battal Ahtapot (3XL-4XL-5XL)",
        "date": "2026-08-28",
        "quantity": 180,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "USD",
        "amount": 243,
        "invoiceNo": "",
        "description": "Ck Tekli Battal Ahtapot (3XL-4XL-5XL)"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_34",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-09-11",
        "amount": 5000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_35",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-09-18",
        "amount": 1000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_36",
        "type": "SHIPMENT",
        "productName": "Boxer",
        "date": "2026-09-18",
        "quantity": 3600,
        "unit": "Adet",
        "unitPrice": 1.35,
        "currency": "USD",
        "amount": 4860,
        "invoiceNo": "",
        "description": "Boxer"
      },
      {
        "id": "tx_cust_ex_ramazan_ye__ld_rek_37",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-09-25",
        "amount": 1000,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex_ali__elik",
    "name": "ALİ ÇELİK",
    "currency": "EUR",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (Ali Çelik)",
    "transactions": [
      {
        "id": "tx_cust_ex_ali__elik_3",
        "type": "SHIPMENT",
        "productName": "Micro Slip",
        "date": "2026-05-04",
        "quantity": 2540,
        "unit": "Adet",
        "unitPrice": 1.3,
        "currency": "EUR",
        "amount": 3302,
        "invoiceNo": "",
        "description": "Micro Slip"
      },
      {
        "id": "tx_cust_ex_ali__elik_4",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-06",
        "amount": 1000,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex__erafett_n_burgazler",
    "name": "ŞERAFETTİN BURGAZLER",
    "currency": "TL",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (ŞERAFETTİN BURGAZLER)",
    "transactions": [
      {
        "id": "tx_cust_ex__erafett_n_burgazler_3",
        "type": "SHIPMENT",
        "productName": "Calvin Klein",
        "date": "2026-08-27",
        "quantity": 312,
        "unit": "Adet",
        "unitPrice": 160,
        "currency": "TL",
        "amount": 49920,
        "invoiceNo": "",
        "description": "Calvin Klein"
      },
      {
        "id": "tx_cust_ex__erafett_n_burgazler_4",
        "type": "SHIPMENT",
        "productName": "Tommy",
        "date": "2026-08-27",
        "quantity": 216,
        "unit": "Adet",
        "unitPrice": 160,
        "currency": "TL",
        "amount": 34560,
        "invoiceNo": "",
        "description": "Tommy"
      },
      {
        "id": "tx_cust_ex__erafett_n_burgazler_5",
        "type": "SHIPMENT",
        "productName": "Otobüs Kargo",
        "date": "2026-08-27",
        "quantity": 1,
        "unit": "Adet",
        "unitPrice": 4900,
        "currency": "TL",
        "amount": 4900,
        "invoiceNo": "",
        "description": "Otobüs Kargo"
      },
      {
        "id": "tx_cust_ex__erafett_n_burgazler_6",
        "type": "SHIPMENT",
        "productName": "Calvin Klein",
        "date": "2025-09-17",
        "quantity": 954,
        "unit": "Adet",
        "unitPrice": 160,
        "currency": "TL",
        "amount": 152640,
        "invoiceNo": "",
        "description": "Calvin Klein"
      }
    ]
  },
  {
    "id": "cust_ex_ye_ildirek_kaz_m",
    "name": "YEŞİLDİREK KAZIM",
    "currency": "EUR",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (Yeşildirek Kazım)",
    "transactions": [
      {
        "id": "tx_cust_ex_ye_ildirek_kaz_m_3",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-08-27",
        "quantity": 990,
        "unit": "Adet",
        "unitPrice": 1.3,
        "currency": "EUR",
        "amount": 1287,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_ye_ildirek_kaz_m_5",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-09-04",
        "amount": 516.26,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Dolar Alındı Parite",
        "description": "Dolar Alındı Parite",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ye_ildirek_kaz_m_6",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-09-11",
        "amount": 431.07,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Dolar Alındı Parite",
        "description": "Dolar Alındı Parite",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ye_ildirek_kaz_m_7",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (XL/XXL)",
        "date": "2026-09-16",
        "quantity": 400,
        "unit": "Adet",
        "unitPrice": 1.3,
        "currency": "EUR",
        "amount": 520,
        "invoiceNo": "",
        "description": "Micro Boxer (XL/XXL)"
      },
      {
        "id": "tx_cust_ex_ye_ildirek_kaz_m_8",
        "type": "SHIPMENT",
        "productName": "Micro Boxer (M/L - L/XL)",
        "date": "2026-09-16",
        "quantity": 850,
        "unit": "Adet",
        "unitPrice": 1.3,
        "currency": "EUR",
        "amount": 1105,
        "invoiceNo": "",
        "description": "Micro Boxer (M/L - L/XL)"
      },
      {
        "id": "tx_cust_ex_ye_ildirek_kaz_m_9",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-09-18",
        "amount": 600,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_ye_ildirek_kaz_m_10",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-09-25",
        "amount": 600,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex__orapci_h_sey_n",
    "name": "ÇORAPCI HÜSEYİN",
    "currency": "EUR",
    "phone": "0533 300 10 08",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (ÇORAPCI HÜSEYİN)",
    "transactions": [
      {
        "id": "tx_cust_ex__orapci_h_sey_n_3",
        "type": "SHIPMENT",
        "productName": "Micro",
        "date": "2026-04-12",
        "quantity": 400,
        "unit": "Adet",
        "unitPrice": 1.3,
        "currency": "EUR",
        "amount": 520,
        "invoiceNo": "",
        "description": "Micro"
      },
      {
        "id": "tx_cust_ex__orapci_h_sey_n_4",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-20",
        "amount": 520,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex_mehmet_karaku__ed_rne_pazar",
    "name": "MEHMET KARAKUŞ (Edirne Pazar)",
    "currency": "USD",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (MEHMET KARAKUŞ EDİRNE PAZAR)",
    "transactions": [
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_3",
        "type": "SHIPMENT",
        "productName": "2025 Yılından Devreden Bakiye",
        "date": "2026-01-01",
        "quantity": 1,
        "unit": "Devir",
        "unitPrice": 4124.64,
        "currency": "USD",
        "amount": 4124.64,
        "invoiceNo": "DEVIR-2025",
        "description": "2025 DEVİR"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_4",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-01-06",
        "amount": 139.64,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "KUR : 42,9663 TL",
        "description": "KUR : 42,9663 TL",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_5",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-02-27",
        "quantity": 31,
        "unit": "Adet",
        "unitPrice": 3.6529680365296806,
        "currency": "USD",
        "amount": 113.24,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_6",
        "type": "SHIPMENT",
        "productName": "5 li boxer",
        "date": "2026-03-26",
        "quantity": 23,
        "unit": "Adet",
        "unitPrice": 6.311622853484692,
        "currency": "USD",
        "amount": 145.17,
        "invoiceNo": "",
        "description": "5 li boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_7",
        "type": "SHIPMENT",
        "productName": "3'lü yeni",
        "date": "2026-03-26",
        "quantity": 20,
        "unit": "Adet",
        "unitPrice": 4.0574718343830165,
        "currency": "USD",
        "amount": 81.15,
        "invoiceNo": "",
        "description": "3'lü yeni"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_8",
        "type": "SHIPMENT",
        "productName": "3'lü eski",
        "date": "2026-03-26",
        "quantity": 19,
        "unit": "Adet",
        "unitPrice": 3.606641630562681,
        "currency": "USD",
        "amount": 68.53,
        "invoiceNo": "",
        "description": "3'lü eski"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_9",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-03-27",
        "amount": 450.77,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "KUR 44.3684 TL",
        "description": "KUR 44.3684 TL",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_10",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-15",
        "amount": 268.17,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Kur : 44,7485",
        "description": "Kur : 44,7485",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_11",
        "type": "SHIPMENT",
        "productName": "5'li Boxer",
        "date": "2026-04-15",
        "quantity": 18,
        "unit": "Adet",
        "unitPrice": 6.257192978535594,
        "currency": "USD",
        "amount": 112.63,
        "invoiceNo": "",
        "description": "5'li Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_12",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-04-15",
        "quantity": 32,
        "unit": "Adet",
        "unitPrice": 4.022481200487167,
        "currency": "USD",
        "amount": 128.72,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_13",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer Eski",
        "date": "2026-04-15",
        "quantity": 10,
        "unit": "Adet",
        "unitPrice": 3.575538844877482,
        "currency": "USD",
        "amount": 35.76,
        "invoiceNo": "",
        "description": "3'lü Boxer Eski"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_14",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-04-15",
        "quantity": 73,
        "unit": "Adet",
        "unitPrice": 2.0112406002435836,
        "currency": "USD",
        "amount": 146.82,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_15",
        "type": "SHIPMENT",
        "productName": "5'li Boxer",
        "date": "2026-05-05",
        "quantity": 24,
        "unit": "Adet",
        "unitPrice": 6.303176137280965,
        "currency": "USD",
        "amount": 151.28,
        "invoiceNo": "",
        "description": "5'li Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_16",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-05-05",
        "quantity": 16,
        "unit": "Adet",
        "unitPrice": 4.091535387357819,
        "currency": "USD",
        "amount": 65.46,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_17",
        "type": "SHIPMENT",
        "productName": "3'lü boxer",
        "date": "2026-05-05",
        "quantity": 17,
        "unit": "Adet",
        "unitPrice": 3.538625199877033,
        "currency": "USD",
        "amount": 60.16,
        "invoiceNo": "",
        "description": "3'lü boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_18",
        "type": "SHIPMENT",
        "productName": "3'lü Slip",
        "date": "2026-05-05",
        "quantity": 12,
        "unit": "Adet",
        "unitPrice": 4.423281499846291,
        "currency": "USD",
        "amount": 53.08,
        "invoiceNo": "",
        "description": "3'lü Slip"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_19",
        "type": "SHIPMENT",
        "productName": "5'li Boxer",
        "date": "2026-05-07",
        "quantity": 22,
        "unit": "Adet",
        "unitPrice": 6.300027189591028,
        "currency": "USD",
        "amount": 138.6,
        "invoiceNo": "",
        "description": "5'li Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_20",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-05-07",
        "quantity": 17,
        "unit": "Adet",
        "unitPrice": 4.089491333594176,
        "currency": "USD",
        "amount": 69.52,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_21",
        "type": "SHIPMENT",
        "productName": "3'lü boxer",
        "date": "2026-05-07",
        "quantity": 4,
        "unit": "Adet",
        "unitPrice": 3.5368573695949634,
        "currency": "USD",
        "amount": 14.15,
        "invoiceNo": "",
        "description": "3'lü boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_22",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-05-07",
        "quantity": 100,
        "unit": "Adet",
        "unitPrice": 1.64724,
        "currency": "USD",
        "amount": 164.72,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_23",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-05-04",
        "amount": 442.62,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Kur: 45,1853 TL",
        "description": "Kur: 45,1853 TL",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_24",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-05-08",
        "amount": 220.89,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Kur : 45,2714",
        "description": "Kur : 45,2714",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_25",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-05-15",
        "quantity": 36,
        "unit": "Adet",
        "unitPrice": 4.129464285714286,
        "currency": "USD",
        "amount": 17.05,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_26",
        "type": "SHIPMENT",
        "productName": "3'lü slip",
        "date": "2026-05-15",
        "quantity": 16,
        "unit": "Adet",
        "unitPrice": 4.464285714285714,
        "currency": "USD",
        "amount": 19.93,
        "invoiceNo": "",
        "description": "3'lü slip"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_27",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-05-15",
        "quantity": 20,
        "unit": "Adet",
        "unitPrice": 1.6,
        "currency": "USD",
        "amount": 32,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_28",
        "type": "SHIPMENT",
        "productName": "5'li Boxer",
        "date": "2026-05-15",
        "quantity": 22,
        "unit": "Adet",
        "unitPrice": 6.4,
        "currency": "USD",
        "amount": 140.8,
        "invoiceNo": "",
        "description": "5'li Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_29",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-05-15",
        "amount": 197.93,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "45.4695",
        "description": "45.4695",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_30",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-05-24",
        "amount": 218.75,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Kur 45.7134",
        "description": "Kur 45.7134",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_31",
        "type": "SHIPMENT",
        "productName": "5'li Boxer",
        "date": "2026-05-29",
        "quantity": 14,
        "unit": "Adet",
        "unitPrice": 6.4,
        "currency": "USD",
        "amount": 89.6,
        "invoiceNo": "",
        "description": "5'li Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_32",
        "type": "SHIPMENT",
        "productName": "3'lü boxer",
        "date": "2026-05-29",
        "quantity": 33,
        "unit": "Adet",
        "unitPrice": 4,
        "currency": "USD",
        "amount": 132,
        "invoiceNo": "",
        "description": "3'lü boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_33",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-05-29",
        "quantity": 10,
        "unit": "Adet",
        "unitPrice": 3.5000678138138928,
        "currency": "USD",
        "amount": 35,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_34",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-05-29",
        "quantity": 100,
        "unit": "Adet",
        "unitPrice": 1.63,
        "currency": "USD",
        "amount": 163,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_35",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-12",
        "amount": 433.19,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_36",
        "type": "SHIPMENT",
        "productName": "5'li Boxer",
        "date": "2026-06-23",
        "quantity": 47,
        "unit": "Adet",
        "unitPrice": 6.4,
        "currency": "USD",
        "amount": 300.8,
        "invoiceNo": "",
        "description": "5'li Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_37",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-06-23",
        "quantity": 38,
        "unit": "Adet",
        "unitPrice": 3.987713531281996,
        "currency": "USD",
        "amount": 151.53,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_38",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-06-23",
        "quantity": 10,
        "unit": "Adet",
        "unitPrice": 1.5959999999999999,
        "currency": "USD",
        "amount": 15.96,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_39",
        "type": "SHIPMENT",
        "productName": "5'li Boxer",
        "date": "2026-08-06",
        "quantity": 23,
        "unit": "Adet",
        "unitPrice": 6.4,
        "currency": "USD",
        "amount": 147.2,
        "invoiceNo": "",
        "description": "5'li Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_40",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-08-06",
        "quantity": 26,
        "unit": "Adet",
        "unitPrice": 4,
        "currency": "USD",
        "amount": 104,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_41",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-08-06",
        "quantity": 120,
        "unit": "Adet",
        "unitPrice": 1.6,
        "currency": "USD",
        "amount": 192,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_42",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-08-12",
        "amount": 251.29,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "öDEME",
        "description": "öDEME",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_43",
        "type": "SHIPMENT",
        "productName": "5'li Boxer",
        "date": "2026-09-10",
        "quantity": 35,
        "unit": "Adet",
        "unitPrice": 6.4,
        "currency": "USD",
        "amount": 224,
        "invoiceNo": "",
        "description": "5'li Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_44",
        "type": "SHIPMENT",
        "productName": "3'lü Ödeme",
        "date": "2026-09-10",
        "quantity": 37,
        "unit": "Adet",
        "unitPrice": 4,
        "currency": "USD",
        "amount": 148,
        "invoiceNo": "",
        "description": "3'lü Ödeme"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_45",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-09-14",
        "amount": 401.91,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_46",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-09-17",
        "quantity": 100,
        "unit": "Adet",
        "unitPrice": 1.73,
        "currency": "USD",
        "amount": 173,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_47",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-09-17",
        "quantity": 38,
        "unit": "Adet",
        "unitPrice": 4,
        "currency": "USD",
        "amount": 152,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_48",
        "type": "SHIPMENT",
        "productName": "5'li Erkek Boxer",
        "date": "2026-09-17",
        "quantity": 48,
        "unit": "Adet",
        "unitPrice": 6.4,
        "currency": "USD",
        "amount": 307.2,
        "invoiceNo": "",
        "description": "5'li Erkek Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_49",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-09-27",
        "amount": 408.26,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_50",
        "type": "SHIPMENT",
        "productName": "Ucuz Boxer",
        "date": "2026-09-30",
        "quantity": 100,
        "unit": "Adet",
        "unitPrice": 3,
        "currency": "USD",
        "amount": 300,
        "invoiceNo": "",
        "description": "Ucuz Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_51",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-09-30",
        "quantity": 50,
        "unit": "Adet",
        "unitPrice": 4,
        "currency": "USD",
        "amount": 200,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_52",
        "type": "SHIPMENT",
        "productName": "5'li Boxer",
        "date": "2026-09-30",
        "quantity": 9,
        "unit": "Adet",
        "unitPrice": 6.4,
        "currency": "USD",
        "amount": 57.6,
        "invoiceNo": "",
        "description": "5'li Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_karaku__ed_rne_pazar_53",
        "type": "SHIPMENT",
        "productName": "Slip Penye",
        "date": "2026-10-01",
        "quantity": 78,
        "unit": "Adet",
        "unitPrice": 4,
        "currency": "USD",
        "amount": 312,
        "invoiceNo": "",
        "description": "Slip Penye"
      }
    ]
  },
  {
    "id": "cust_ex__engelk_y_akin",
    "name": "ÇENGELKÖY AKIN (Sancaktepe)",
    "currency": "TL",
    "phone": "0537 356 7896",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (ÇENGELKÖY AKIN)",
    "transactions": [
      {
        "id": "tx_cust_ex__engelk_y_akin_3",
        "type": "SHIPMENT",
        "productName": "Micro Boxer",
        "date": "2026-02-16",
        "quantity": 2462,
        "unit": "Adet",
        "unitPrice": 66,
        "currency": "TL",
        "amount": 162492,
        "invoiceNo": "",
        "description": "Micro Boxer"
      },
      {
        "id": "tx_cust_ex__engelk_y_akin_4",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-03-26",
        "amount": 55000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex__engelk_y_akin_5",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-10",
        "amount": 30000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex__engelk_y_akin_6",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-24",
        "amount": 19000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex__engelk_y_akin_7",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-05-08",
        "amount": 20000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex__engelk_y_akin_8",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-05-26",
        "amount": 20000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex__engelk_y_akin_9",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-06-16",
        "amount": 18500,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex_mehmet_boz",
    "name": "MEHMET BOZ",
    "currency": "TL",
    "phone": "0544 521 46 58",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (MEHMET BOZ)",
    "transactions": [
      {
        "id": "tx_cust_ex_mehmet_boz_3",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-03-24",
        "quantity": 144,
        "unit": "Adet",
        "unitPrice": 165,
        "currency": "TL",
        "amount": 23760,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_boz_4",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-03-24",
        "amount": 12000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "ÖDEME",
        "description": "ÖDEME",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_boz_5",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-15",
        "amount": 12000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "ödeme",
        "description": "ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_boz_6",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-04-15",
        "amount": 15000,
        "currency": "TL",
        "method": "Kredi Kartı / POS",
        "ref": "ödeme POS",
        "description": "ödeme POS",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mehmet_boz_7",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-04-15",
        "quantity": 144,
        "unit": "Adet",
        "unitPrice": 180,
        "currency": "TL",
        "amount": 25920,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_mehmet_boz_8",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-05-08",
        "amount": 10500,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex_merter_hakan",
    "name": "Merter HAKAN",
    "currency": "TL",
    "phone": "0506 973 07 37",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (Merter HAKAN)",
    "transactions": [
      {
        "id": "tx_cust_ex_merter_hakan_3",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-07-02",
        "quantity": 172,
        "unit": "Adet",
        "unitPrice": 150,
        "currency": "TL",
        "amount": 25800,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_merter_hakan_4",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-02",
        "amount": 25800,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_merter_hakan_5",
        "type": "SHIPMENT",
        "productName": "3'lü Boxer",
        "date": "2026-07-10",
        "quantity": 288,
        "unit": "Adet",
        "unitPrice": 150,
        "currency": "TL",
        "amount": 43200,
        "invoiceNo": "",
        "description": "3'lü Boxer"
      },
      {
        "id": "tx_cust_ex_merter_hakan_6",
        "type": "PAYMENT",
        "productName": "",
        "date": "2026-07-28",
        "amount": 43200,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex_hakan_da_delen",
    "name": "Hakan DAĞDELEN",
    "currency": "EUR",
    "phone": "0536 286 60 20",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (Hakan DAĞDELEN)",
    "transactions": [
      {
        "id": "tx_cust_ex_hakan_da_delen_3",
        "type": "SHIPMENT",
        "productName": "Micro",
        "date": "2024-06-10",
        "quantity": 1300,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 1820,
        "invoiceNo": "",
        "description": "Micro"
      },
      {
        "id": "tx_cust_ex_hakan_da_delen_4",
        "type": "PAYMENT",
        "productName": "",
        "date": "2024-06-12",
        "amount": 577,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Ödeme KUR: 34,70",
        "description": "Ödeme KUR: 34,70",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_hakan_da_delen_5",
        "type": "PAYMENT",
        "productName": "",
        "date": "2024-08-02",
        "amount": 280,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "ödme kor 35.70",
        "description": "ödme kor 35.70",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_hakan_da_delen_6",
        "type": "PAYMENT",
        "productName": "",
        "date": "2024-09-09",
        "amount": 266,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "ödeme",
        "description": "ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_hakan_da_delen_7",
        "type": "PAYMENT",
        "productName": "",
        "date": "2024-10-24",
        "amount": 270,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex_lalel__musa",
    "name": "LALELİ MUSA",
    "currency": "EUR",
    "phone": "0533 230 30 72",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (LALELİ MUSA)",
    "transactions": [
      {
        "id": "tx_cust_ex_lalel__musa_5",
        "type": "SHIPMENT",
        "productName": "Micro Boxer Battal",
        "date": "2026-09-28",
        "quantity": 220,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 308,
        "invoiceNo": "",
        "description": "Micro Boxer Battal"
      }
    ]
  },
  {
    "id": "cust_ex_beyazit_g_khan",
    "name": "BEYAZIT GÖKHAN",
    "currency": "EUR",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (BEYAZIT GÖKHAN)",
    "transactions": [
      {
        "id": "tx_cust_ex_beyazit_g_khan_3",
        "type": "SHIPMENT",
        "productName": "micro",
        "date": "2024-04-29",
        "quantity": 1680,
        "unit": "Adet",
        "unitPrice": 1.4,
        "currency": "EUR",
        "amount": 2352,
        "invoiceNo": "",
        "description": "micro"
      },
      {
        "id": "tx_cust_ex_beyazit_g_khan_4",
        "type": "PAYMENT",
        "productName": "",
        "date": "2024-06-14",
        "amount": 291,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "ödeme",
        "description": "ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_beyazit_g_khan_5",
        "type": "PAYMENT",
        "productName": "",
        "date": "2024-07-31",
        "amount": 281,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "ödeme",
        "description": "ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_beyazit_g_khan_6",
        "type": "PAYMENT",
        "productName": "",
        "date": "2024-10-05",
        "amount": 265.11,
        "currency": "EUR",
        "method": "Elden Nakit",
        "ref": "ödeme",
        "description": "ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex_adem_kaya",
    "name": "ADEM KAYA",
    "currency": "EUR",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (ADEM KAYA)",
    "transactions": []
  },
  {
    "id": "cust_ex__akir_tekst_l_samsun",
    "name": "ÇAKIR TEKSTİL SAMSUN",
    "currency": "USD",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (ÇAKIR TEKSTİL SAMSUN)",
    "transactions": [
      {
        "id": "tx_cust_ex__akir_tekst_l_samsun_4",
        "type": "SHIPMENT",
        "productName": "5.000 € PARİTE : 1,1365",
        "date": "2023-05-05",
        "quantity": 1,
        "unit": "Parti",
        "unitPrice": 5682.5,
        "currency": "USD",
        "amount": 5682.5,
        "invoiceNo": "",
        "description": "5.000 € PARİTE : 1,1365"
      },
      {
        "id": "tx_cust_ex__akir_tekst_l_samsun_5",
        "type": "PAYMENT",
        "productName": "",
        "date": "2023-05-05",
        "amount": 2330,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "mal dikimi kur 19400    45204 tl atlet dikildi 11301 adet 4 tl",
        "description": "mal dikimi kur 19400    45204 tl atlet dikildi 11301 adet 4 tl",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex__akir_tekst_l_samsun_6",
        "type": "PAYMENT",
        "productName": "",
        "date": "2023-05-10",
        "amount": 992,
        "currency": "USD",
        "method": "Elden Nakit",
        "ref": "boxer kur 19400    19250 boxer dikldi 3850 adet 5 tl",
        "description": "boxer kur 19400    19250 boxer dikldi 3850 adet 5 tl",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex_baran_atolyec_",
    "name": "BARAN ATÖLYECİ",
    "currency": "TL",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (BARAN ATOLYECİ)",
    "transactions": [
      {
        "id": "tx_cust_ex_baran_atolyec__3",
        "type": "SHIPMENT",
        "productName": "",
        "date": "2025-07-27",
        "quantity": 158900,
        "unit": "Adet",
        "unitPrice": 2.5,
        "currency": "TL",
        "amount": 397250,
        "invoiceNo": "",
        "description": ""
      },
      {
        "id": "tx_cust_ex_baran_atolyec__4",
        "type": "PAYMENT",
        "productName": "",
        "date": "2025-07-27",
        "amount": 50000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "EYÜP TERCAN ÖDEME",
        "description": "EYÜP TERCAN ÖDEME",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_baran_atolyec__5",
        "type": "PAYMENT",
        "productName": "",
        "date": "2025-06-14",
        "amount": 50000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "",
        "description": "",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_baran_atolyec__6",
        "type": "PAYMENT",
        "productName": "",
        "date": "2025-06-20",
        "amount": 50000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "",
        "description": "",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_baran_atolyec__7",
        "type": "PAYMENT",
        "productName": "",
        "date": "2025-06-19",
        "amount": 50000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "",
        "description": "",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_baran_atolyec__8",
        "type": "SHIPMENT",
        "productName": "Baskı",
        "date": "2025-09-05",
        "quantity": 24600,
        "unit": "Adet",
        "unitPrice": 1.25,
        "currency": "TL",
        "amount": 30750,
        "invoiceNo": "",
        "description": "Baskı"
      },
      {
        "id": "tx_cust_ex_baran_atolyec__9",
        "type": "PAYMENT",
        "productName": "",
        "date": "2025-09-05",
        "amount": 100000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_baran_atolyec__10",
        "type": "PAYMENT",
        "productName": "",
        "date": "2025-09-27",
        "amount": 100000,
        "currency": "TL",
        "method": "Banka Havalesi / EFT",
        "ref": "Barana Havale",
        "description": "Barana Havale",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_baran_atolyec__11",
        "type": "SHIPMENT",
        "productName": "",
        "date": "2025-10-18",
        "quantity": 9750,
        "unit": "Adet",
        "unitPrice": 2.5,
        "currency": "TL",
        "amount": 24375,
        "invoiceNo": "",
        "description": ""
      },
      {
        "id": "tx_cust_ex_baran_atolyec__12",
        "type": "SHIPMENT",
        "productName": "",
        "date": "2025-10-25",
        "quantity": 11850,
        "unit": "Adet",
        "unitPrice": 2.5,
        "currency": "TL",
        "amount": 29625,
        "invoiceNo": "",
        "description": ""
      },
      {
        "id": "tx_cust_ex_baran_atolyec__13",
        "type": "SHIPMENT",
        "productName": "",
        "date": "2025-10-30",
        "quantity": 8000,
        "unit": "Adet",
        "unitPrice": 2.5,
        "currency": "TL",
        "amount": 20000,
        "invoiceNo": "",
        "description": ""
      },
      {
        "id": "tx_cust_ex_baran_atolyec__14",
        "type": "SHIPMENT",
        "productName": "",
        "date": "2025-11-13",
        "quantity": 6270,
        "unit": "Adet",
        "unitPrice": 2.5,
        "currency": "TL",
        "amount": 15675,
        "invoiceNo": "",
        "description": ""
      },
      {
        "id": "tx_cust_ex_baran_atolyec__15",
        "type": "SHIPMENT",
        "productName": "",
        "date": "2025-11-13",
        "quantity": 6250,
        "unit": "Adet",
        "unitPrice": 2.5,
        "currency": "TL",
        "amount": 15625,
        "invoiceNo": "",
        "description": ""
      },
      {
        "id": "tx_cust_ex_baran_atolyec__16",
        "type": "PAYMENT",
        "productName": "",
        "date": "2025-12-05",
        "amount": 80000,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "Ödeme",
        "description": "Ödeme",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  },
  {
    "id": "cust_ex_mahmut_ernur_tekst_l",
    "name": "BARAN ATÖLYECİ",
    "currency": "TL",
    "phone": "",
    "contactPerson": "",
    "address": "İstanbul / Türkiye",
    "notes": "Excel 2026 Aktarımı (MAHMUT ERNUR TEKSTİL)",
    "transactions": [
      {
        "id": "tx_cust_ex_mahmut_ernur_tekst_l_3",
        "type": "PAYMENT",
        "productName": "",
        "date": "2023-11-03",
        "amount": 3521.25,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "100.000 TL Borç Verildi Kur : 28,3990 TL",
        "description": "100.000 TL Borç Verildi Kur : 28,3990 TL",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      },
      {
        "id": "tx_cust_ex_mahmut_ernur_tekst_l_4",
        "type": "PAYMENT",
        "productName": "",
        "date": "2023-11-20",
        "amount": 3101.28,
        "currency": "TL",
        "method": "Elden Nakit",
        "ref": "89.183 TL Borç Verildi Kur : 28,7568 TL",
        "description": "89.183 TL Borç Verildi Kur : 28,7568 TL",
        "isCheck": false,
        "isCash": true,
        "isSenet": false
      }
    ]
  }
];

// Application State
let appState = {
  authToken: localStorage.getItem(AUTH_TOKEN_KEY) || sessionStorage.getItem(AUTH_TOKEN_KEY) || null,
  currentUser: localStorage.getItem(AUTH_USER_KEY) || sessionStorage.getItem(AUTH_USER_KEY) || null,
  isAuthenticated: false,
  customers: [],
  activeCustomerId: 'ALL',       // 'ALL' or specific customerId (for tabs filter)
  activeDetailCustomerId: null,  // null (dashboard) or customerId (detailed ledger view)
  selectedYear: 'ALL',           // 'ALL' or '2026', '2025', etc. (Yıl bazlı mali filtre)
  ledgerFilterYear: 'ALL',       // 'ALL' or '2026', etc. (Müşteri ekstresi yıl filtresi)
  checkPortfolioFilter: 'ALL',   // 'ALL', 'PENDING', 'MATURED', 'APPLIED'
  filterSearch: '',
  filterStatus: 'ALL',           // 'ALL', 'UNPAID', 'PAID'
  filterCurrency: 'ALL',         // 'ALL', 'TL', 'USD', 'EUR'
  txnFilterType: 'ALL',          // 'ALL', 'SHIPMENT', 'PAYMENT', 'CHECK', 'KUR_FARKI'
  lastModified: 0,
  isServerOnline: false,
  lanUrl: 'http://192.168.1.105:8085',
  settings: {
    brandTitle: 'TekstilCari',
    brandSubtitle: 'Müşteri Sipariş, Mal Satışı & Dövizli Cari Takip',
    currencySymbol: '₺',
    theme: 'theme-amber',
    customLabels: {
      kpiContract: 'Toplam Mal Satışı (Sevk)',
      kpiPaid: 'Toplam Alınan Ödeme',
      kpiRemaining: 'Kalan Açık Bakiye (Alacak)',
      kpiCount: 'Aktif Müşteri / Firma',
      projectTabsTitle: 'Müşteriler / Firmalar:',
      sectionTitle: 'Tekstil Müşteri Cari Kartları',
      colContractor: 'Müşteri / Firma Adı',
      colRole: 'Yetkili / Temsilci',
      colProject: 'Para Birimi',
      colPhone: 'Telefon',
      colContract: 'Toplam Mal Satışı',
      colPaid: 'Alınan Ödeme',
      colRemaining: 'Kalan Bakiye',
      colStatus: 'Hesap Durumu'
    }
  }
};

// =========================================================
// UTILITIES & CURRENCY FORMATTERS
// =========================================================

function getCurrencySymbol(curr) {
  if (curr === 'USD') return '$';
  if (curr === 'EUR') return '€';
  return '₺';
}

function formatCurrency(val, currency = 'TL') {
  const sym = getCurrencySymbol(currency);
  const num = Number(val || 0);
  return `${sym} ${num.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatDate(dateStr) {
  if (!dateStr) return '-';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}.${parts[1]}.${parts[0]}`;
  }
  return dateStr;
}

function getTodayDateStr() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Calculate customer's financial balance & totals (Desteklenen Yıl Filtresi ve Otomatik Kur Farkı ile)
function calculateCustomerTotals(customer, filterYear = appState.selectedYear) {
  let totalShipment = 0;
  let totalPaid = 0;

  if (customer && Array.isArray(customer.transactions)) {
    let txns = customer.transactions;
    if (filterYear && filterYear !== 'ALL') {
      txns = txns.filter(t => t.date && t.date.substring(0, 4) === String(filterYear));
    }
    txns.forEach(t => {
      const amt = Number(t.amount || 0);
      if (t.type === 'SHIPMENT') {
        totalShipment += amt;
      } else if (t.type === 'PAYMENT') {
        totalPaid += amt;
      } else if (t.type === 'KUR_FARKI') {
        // Kur farkı alacak ise tahsilata eklenir, borç ise satışa eklenir
        if (t.direction === 'ALACAK' || t.isCredit !== false) {
          totalPaid += amt;
        } else {
          totalShipment += amt;
        }
      }
    });
  }

  const remaining = totalShipment - totalPaid;
  const percentPaid = totalShipment > 0 
    ? Math.min(100, Math.round((totalPaid / totalShipment) * 100)) 
    : (totalPaid > 0 ? 100 : 0);

  return {
    totalShipment,
    totalPaid,
    remaining,
    percentPaid,
    isPaidOff: remaining <= 0,
    currency: customer.currency || 'TL'
  };
}

// =========================================================
// DATA PERSISTENCE & SYNC (SQLite + LocalStorage)
// =========================================================

function loadData() {
  const legacyKeys = [
    STORAGE_KEY_TEXTILE,
    'TEKSTIL_CARI_V3_DATA',
    'TEKSTIL_CARI_DATA',
    'TEKSTIL_CARI_V2_DATA',
    'MUTEAHHIT_CARI_V2_DATA',
    'MUTEAHHIT_CARI_DATA'
  ];

  let localFound = false;
  for (const k of legacyKeys) {
    const saved = localStorage.getItem(k);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed.customers) && parsed.customers.length > 0) {
          appState.customers = parsed.customers;
          if (parsed.settings) {
            appState.settings = Object.assign({}, appState.settings, parsed.settings);
          }
          localFound = true;
          // Güncel anahtara taşı
          if (k !== STORAGE_KEY_TEXTILE) {
            localStorage.setItem(STORAGE_KEY_TEXTILE, saved);
          }
          break;
        }
      } catch (e) {
        console.error('Yedek verisi okunamadı:', e);
      }
    }
  }

  // Yalnızca sistemde kesinlikle hiçbir veri yoksa ve kullanıcı daha önce hiç giriş yapmadıysa
  const setupDone = localStorage.getItem('TEKSTIL_SETUP_DONE');
  if (!localFound && !setupDone) {
    appState.customers = JSON.parse(JSON.stringify(INITIAL_TEXTILE_CUSTOMERS));
    localStorage.setItem('TEKSTIL_SETUP_DONE', 'true');
    saveData(false); // Sunucuyu hemen zorla ezme
  } else {
    localStorage.setItem('TEKSTIL_SETUP_DONE', 'true');
  }

  applySettings();
  renderDashboard();
  initServerSync();
}

function saveData(syncToServer = true) {
  const now = Date.now();
  appState.lastModified = now;
  localStorage.setItem(STORAGE_KEY_TEXTILE, JSON.stringify({
    customers: appState.customers,
    settings: appState.settings,
    lastModified: now
  }));

  if (syncToServer && appState.isServerOnline) {
    pushDataToServer();
  }
}

async function pushDataToServer() {
  if (!appState.authToken) return;
  try {
    const res = await fetch('/api/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${appState.authToken}`
      },
      body: JSON.stringify({
        customers: appState.customers,
        settings: appState.settings
      })
    });
    if (res.status === 401) {
      showLoginScreen();
      return;
    }
    if (res.ok) {
      const result = await res.json();
      appState.lastModified = result.lastModified;
    }
  } catch (e) {
    console.error('Sunucuya kaydetme hatası:', e);
  }
}

async function initServerSync() {
  const badge = document.getElementById('networkStatusBadge');
  const badgeText = document.getElementById('networkStatusText');

  try {
    // Ağ ve IP bilgisini al
    const netRes = await fetch('/api/network');
    if (netRes.ok) {
      const netInfo = await netRes.json();
      appState.lanUrl = netInfo.lanUrl;
      const shareInput = document.getElementById('shareLanUrl');
      if (shareInput) shareInput.value = netInfo.lanUrl;
      const shareModalText = document.getElementById('shareModalUrlText');
      if (shareModalText) shareModalText.textContent = netInfo.lanUrl;
    }

    // Ortak SQLite veritabanından güncel veriyi çek (Yetkili)
    const dataRes = await fetch('/api/data', {
      headers: {
        'Authorization': `Bearer ${appState.authToken || ''}`
      }
    });

    if (dataRes.status === 401) {
      showLoginScreen();
      return;
    }

    if (dataRes.ok) {
      const serverData = await dataRes.json();
      if (serverData && Array.isArray(serverData.customers) && serverData.customers.length > 0) {
        // Sunucu verisi birincil kaynaktır - müşterileri ve işlemleri güncelle
        appState.customers = serverData.customers;
        if (serverData.settings && Object.keys(serverData.settings).length > 0) {
          appState.settings = Object.assign({}, appState.settings, serverData.settings);
        }
        appState.lastModified = serverData.lastModified || Date.now();
        applySettings();
        localStorage.setItem(STORAGE_KEY_TEXTILE, JSON.stringify({
          customers: appState.customers,
          settings: appState.settings,
          lastModified: appState.lastModified
        }));
      } else if (appState.customers && appState.customers.length > 0) {
        // Sunucu boş ama yerelde veri varsa sunucuya gönder
        await pushDataToServer();
      }

      appState.isServerOnline = true;
      if (badge) {
        badge.className = 'network-badge online';
        badgeText.textContent = 'Canlı Senkronize';
      }
      renderDashboard();
    }
  } catch (err) {
    console.log('Sunucu bulunamadı, yerel modda devam ediliyor:', err);
    appState.isServerOnline = false;
    if (badge) {
      badge.className = 'network-badge offline';
      badgeText.textContent = 'Yerel Mod';
    }
  }

  startLivePolling();
}

function startLivePolling() {
  setInterval(async () => {
    if (!appState.isServerOnline || !appState.authToken) return;
    try {
      const res = await fetch('/api/status');
      if (res.ok) {
        const status = await res.json();
        if (status.lastModified && status.lastModified > appState.lastModified) {
          const dataRes = await fetch('/api/data', {
            headers: {
              'Authorization': `Bearer ${appState.authToken}`
            }
          });
          if (dataRes.status === 401) {
            showLoginScreen();
            return;
          }
          if (dataRes.ok) {
            const freshData = await dataRes.json();
            appState.customers = freshData.customers || [];
            if (freshData.settings && Object.keys(freshData.settings).length > 0) {
              appState.settings = Object.assign({}, appState.settings, freshData.settings);
              applySettings();
            }
            appState.lastModified = freshData.lastModified;

            localStorage.setItem(STORAGE_KEY_TEXTILE, JSON.stringify({
              customers: appState.customers,
              settings: appState.settings
            }));

            if (appState.activeDetailCustomerId) {
              renderLedgerDetail();
            } else {
              renderDashboard();
            }
            showToast("Ofisteki arkadaşınızdan yeni güncelleme alındı!", "info");
          }
        }
      }
    } catch (e) {
      // Ağ dalgalanması
    }
  }, 2200);
}

// =========================================================
// AYARLAR & TEMA YÖNETİMİ
// =========================================================

function applySettings() {
  const s = appState.settings || {};

  // Başlıklar
  const bTitle = s.brandTitle || 'TekstilCari';
  const bSubtitle = s.brandSubtitle || 'Müşteri Sipariş, Mal Satışı & Dövizli Cari Takip';

  const titleEl = document.getElementById('displayBrandTitle');
  if (titleEl) {
    if (bTitle.includes('Cari') && !bTitle.includes('<span>')) {
      titleEl.innerHTML = bTitle.replace('Cari', '<span>Cari</span>');
    } else {
      titleEl.textContent = bTitle;
    }
  }
  const pageTitle = document.getElementById('htmlPageTitle');
  if (pageTitle) pageTitle.textContent = `${bTitle} - ${bSubtitle}`;

  const subEl = document.getElementById('displayBrandSubtitle');
  if (subEl) subEl.textContent = bSubtitle;

  const printTitle = document.getElementById('printCompanyTitle');
  if (printTitle) printTitle.textContent = bTitle.toUpperCase() + ' TEKSTİL';

  const printSub = document.getElementById('printCompanySubtitle');
  if (printSub) printSub.textContent = bSubtitle.toUpperCase();

  // Tema
  applyTheme(s.theme || 'theme-amber');

  // Özelleştirilebilir Başlıklar & Sütunlar
  const labels = s.customLabels || {};
  if (labels.kpiContract) updateLabelText('lblKpiContract', labels.kpiContract);
  if (labels.kpiPaid) updateLabelText('lblKpiPaid', labels.kpiPaid);
  if (labels.kpiRemaining) updateLabelText('lblKpiRemaining', labels.kpiRemaining);
  if (labels.kpiCount) updateLabelText('lblKpiCount', labels.kpiCount);
  if (labels.projectTabsTitle) updateLabelText('lblProjectTabsTitle', labels.projectTabsTitle);
  if (labels.sectionTitle) updateLabelText('lblSectionTitle', labels.sectionTitle);

  if (labels.colContractor) updateLabelText('colHeader_contractor', labels.colContractor);
  if (labels.colRole) updateLabelText('colHeader_role', labels.colRole);
  if (labels.colProject) updateLabelText('colHeader_project', labels.colProject);
  if (labels.colPhone) updateLabelText('colHeader_phone', labels.colPhone);
  if (labels.colContract) updateLabelText('colHeader_contract', labels.colContract);
  if (labels.colPaid) updateLabelText('colHeader_paid', labels.colPaid);
  if (labels.colRemaining) updateLabelText('colHeader_remaining', labels.colRemaining);
  if (labels.colStatus) updateLabelText('colHeader_status', labels.colStatus);

  // Form alanlarını doldur
  const inpBTitle = document.getElementById('cfgBrandTitle');
  if (inpBTitle) inpBTitle.value = bTitle;
  const inpBSub = document.getElementById('cfgBrandSubtitle');
  if (inpBSub) inpBSub.value = bSubtitle;

  for (const [k, v] of Object.entries(labels)) {
    const inp = document.getElementById('lblInp_' + k);
    if (inp) inp.value = v;
  }
}

function updateLabelText(elId, text) {
  const el = document.getElementById(elId);
  if (el) {
    if (elId === 'lblProjectTabsTitle') {
      el.innerHTML = `<i class="fa-solid fa-users-line text-gold"></i> ${escapeHtml(text)}`;
      return;
    }
    if (elId === 'lblSectionTitle') {
      el.innerHTML = `<i class="fa-solid fa-address-book text-gold"></i> ${escapeHtml(text)}`;
      return;
    }
    el.textContent = text;
  }
}

function applyTheme(themeName) {
  document.body.classList.remove('theme-amber', 'theme-navy', 'theme-emerald', 'theme-light');
  document.body.classList.add(themeName);

  if (appState.settings) {
    appState.settings.theme = themeName;
  }

  document.querySelectorAll('.theme-card').forEach(card => {
    const isThis = card.dataset.theme === themeName;
    card.classList.toggle('active', isThis);
    const check = card.querySelector('.theme-check');
    if (check) check.classList.toggle('hide', !isThis);
  });
}

function openSettingsModalTab(tabTarget = 'brand') {
  openModal('modalSettings');
  let targetPaneId = 'setPaneBrand';
  if (tabTarget === 'themes') targetPaneId = 'setPaneThemes';
  if (tabTarget === 'labels') targetPaneId = 'setPaneLabels';
  if (tabTarget === 'cloud') targetPaneId = 'setPaneCloud';

  document.querySelectorAll('.settings-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === targetPaneId);
  });
  document.querySelectorAll('.settings-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === targetPaneId);
  });
}

// Quick Rename Modal Engine (Herhangi bir başlığı veya ismi tek tıkla değiştirir)
function openQuickRename(targetKey, defaultVal) {
  let current = defaultVal || '';
  let modalTitle = 'İsmi Değiştir';

  if (targetKey === 'displayBrandTitle') {
    current = (appState.settings && appState.settings.brandTitle) || 'TekstilCari';
    modalTitle = 'Program / Firma Başlığı';
  } else if (targetKey === 'displayBrandSubtitle') {
    current = (appState.settings && appState.settings.brandSubtitle) || 'Müşteri Sipariş, Mal Satışı & Dövizli Cari Takip';
    modalTitle = 'Program Alt Başlığı';
  } else if (targetKey.startsWith('customer_')) {
    const cId = targetKey.replace('customer_', '');
    const c = appState.customers.find(x => x.id === cId);
    if (c) {
      current = c.name;
      modalTitle = `"${c.name}" Müşteri Adı`;
    }
  } else {
    const el = document.getElementById(targetKey);
    if (el) current = el.textContent.trim();
    modalTitle = `"${current || defaultVal}" Başlığı`;
  }

  const keyInput = document.getElementById('quickRenameKey');
  const labelPrompt = document.getElementById('quickRenameLabelPrompt');
  const valInput = document.getElementById('quickRenameInput');
  const titleEl = document.getElementById('modalQuickRenameTitle');

  if (keyInput) keyInput.value = targetKey;
  if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-pen-to-square text-gold"></i> ${modalTitle}`;
  if (labelPrompt) labelPrompt.textContent = `Yeni Başlık / İsim:`;
  if (valInput) valInput.value = current;

  openModal('modalQuickRename');
  setTimeout(() => {
    if (valInput) {
      valInput.focus();
      valInput.select();
    }
  }, 100);
}

// Toast Notifications
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let icon = 'fa-check-circle text-green';
  if (type === 'danger') icon = 'fa-circle-exclamation text-red';
  if (type === 'info') icon = 'fa-circle-info text-gold';

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 3000);
}

// =========================================================
// VIEW NAVIGATION & DASHBOARD RENDER
// =========================================================

function showDashboardView() {
  document.getElementById('dashboardView').classList.add('active');
  document.getElementById('ledgerDetailView').classList.remove('active');
  appState.activeDetailCustomerId = null;
  renderDashboard();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showLedgerDetailView(customerId) {
  appState.activeDetailCustomerId = customerId;
  appState.txnFilterType = 'ALL';
  document.getElementById('dashboardView').classList.remove('active');
  document.getElementById('ledgerDetailView').classList.add('active');
  renderLedgerDetail();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =========================================================
// YIL BAZLI İŞLEM FİLTRESİ MOTORU (YEAR-BASED FILTER ENGINE)
// =========================================================

function getAvailableYears() {
  const yearsSet = new Set();
  const currentYear = new Date().getFullYear().toString();
  yearsSet.add(currentYear);

  if (Array.isArray(appState.customers)) {
    appState.customers.forEach(c => {
      if (Array.isArray(c.transactions)) {
        c.transactions.forEach(t => {
          if (t.date && t.date.length >= 4) {
            const yr = t.date.substring(0, 4);
            if (/^\d{4}$/.test(yr)) yearsSet.add(yr);
          }
        });
      }
    });
  }

  return Array.from(yearsSet).sort().reverse();
}

function renderYearFilterPills() {
  const container = document.getElementById('yearPillsList');
  if (!container) return;

  const years = getAvailableYears();
  const activeYear = appState.selectedYear || 'ALL';

  let html = `
    <button type="button" class="year-pill ${activeYear === 'ALL' ? 'active' : ''}" onclick="setDashboardYearFilter('ALL')">
      <i class="fa-solid fa-infinity"></i> Tüm Yıllar
    </button>
  `;

  years.forEach(yr => {
    const isAct = activeYear === yr;
    html += `
      <button type="button" class="year-pill ${isAct ? 'active' : ''}" onclick="setDashboardYearFilter('${yr}')">
        <i class="fa-solid fa-calendar-check"></i> ${yr} Yılı
      </button>
    `;
  });

  container.innerHTML = html;

  const labelEl = document.getElementById('lblActiveYearText');
  if (labelEl) {
    labelEl.textContent = activeYear === 'ALL' ? 'Tüm Yıllar (Genel Toplam)' : `${activeYear} Mali Yılı İşlemleri`;
  }

  // Müşteri cari detay sayfasındaki yıl filtresi açılır kutusunu senkronize et
  const ledgerSelect = document.getElementById('ledgerYearFilter');
  if (ledgerSelect) {
    let selHtml = `<option value="ALL" ${appState.ledgerFilterYear === 'ALL' ? 'selected' : ''}>Tüm Yıllar (Genel)</option>`;
    years.forEach(yr => {
      selHtml += `<option value="${yr}" ${appState.ledgerFilterYear === yr ? 'selected' : ''}>${yr} Mali Yılı</option>`;
    });
    ledgerSelect.innerHTML = selHtml;
  }
}

function setDashboardYearFilter(year) {
  appState.selectedYear = year;
  appState.ledgerFilterYear = year;
  renderDashboard();
  if (appState.activeDetailCustomerId) {
    renderLedgerDetail();
  }
}

// Render Mobile Customer Cards (Mobilde Tablo Yerine Touch-Friendly Kartlar)
function renderMobileCustomerCards(customerList) {
  const container = document.getElementById('mobileCustomerCardsContainer');
  if (!container) return;

  if (!customerList || customerList.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding: 1.5rem 1rem;">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 1.8rem; color: var(--text-dim);"></i>
        <h4 style="margin: 0.5rem 0 0.25rem;">Kayıtlı Müşteri Bulunamadı</h4>
        <p style="font-size: 0.8rem; color: var(--text-muted);">Arama veya filtre kriterlerinize uygun firma yok.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = customerList.map(c => {
    const totals = calculateCustomerTotals(c);
    const curr = c.currency || 'TL';
    const sym = getCurrencySymbol(curr);
    const txnCount = (c.transactions || []).length;
    const isPaid = totals.remaining <= 0;

    return `
      <div class="mobile-customer-card">
        <div class="mob-cust-head">
          <div>
            <div class="mob-cust-name">${escapeHtml(c.name)}</div>
            ${c.contactPerson ? `<div class="mob-cust-contact"><i class="fa-solid fa-user-tie text-gold"></i> ${escapeHtml(c.contactPerson)}</div>` : ''}
            ${c.phone ? `<a href="tel:${escapeHtml(c.phone)}" class="mob-cust-phone"><i class="fa-solid fa-phone"></i> ${escapeHtml(c.phone)}</a>` : ''}
          </div>
          <div>
            <span class="badge-curr badge-curr-${curr.toLowerCase()}">${curr} (${sym})</span>
          </div>
        </div>

        <div class="mob-fin-bar">
          <div class="mob-fin-col">
            <span class="mob-fin-lbl">Toplam Sevk</span>
            <span class="mob-fin-val text-gold">${formatCurrency(totals.totalShipment, curr)}</span>
          </div>
          <div class="mob-fin-col">
            <span class="mob-fin-lbl">Tahsilat</span>
            <span class="mob-fin-val text-green">${formatCurrency(totals.totalPaid, curr)}</span>
          </div>
          <div class="mob-fin-col">
            <span class="mob-fin-lbl">Kalan Alacak</span>
            <span class="mob-fin-val ${isPaid ? 'text-green' : 'text-red'}">${formatCurrency(totals.remaining, curr)}</span>
          </div>
        </div>

        <div class="mob-actions-row">
          <button type="button" class="btn btn-outline" onclick="showLedgerDetailView('${c.id}')" title="Ekstre ve Ürünler">
            <i class="fa-solid fa-book-open"></i> Ekstre (${txnCount})
          </button>
          <button type="button" class="btn btn-primary" onclick="openProductSaleModal('${c.id}')" title="Mal Sevk Et">
            <i class="fa-solid fa-truck-fast"></i> Sevk Et
          </button>
          <button type="button" class="btn btn-success" onclick="openPaymentModal('${c.id}')" title="Tahsilat Al">
            <i class="fa-solid fa-hand-holding-dollar"></i> Tahsilat
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Render Dashboard View
function renderDashboard() {
  renderYearFilterPills();
  renderCustomerTabs();
  renderActiveCustomerBanner();

  // Filter customers by selected tab
  let filteredCustomers = appState.customers;
  if (appState.activeCustomerId !== 'ALL') {
    filteredCustomers = appState.customers.filter(c => c.id === appState.activeCustomerId);
  }

  // Calculate KPIs
  if (appState.activeCustomerId !== 'ALL' && filteredCustomers.length === 1) {
    // Single Customer Mode: Show exact currency
    const c = filteredCustomers[0];
    const t = calculateCustomerTotals(c);

    document.getElementById('totalContractVal').textContent = formatCurrency(t.totalShipment, c.currency);
    document.getElementById('totalPaidVal').textContent = formatCurrency(t.totalPaid, c.currency);
    document.getElementById('totalRemainingVal').textContent = formatCurrency(t.remaining, c.currency);
    document.getElementById('contractorCountVal').textContent = (c.transactions || []).length + " İşlem";

    document.getElementById('totalContractBreakdown').innerHTML = `<span class="kpi-sub"><i class="fa-solid fa-truck-ramp-box"></i> Bu müşteriye yapılan toplam sevkiyat</span>`;
    document.getElementById('totalPaidBreakdown').innerHTML = `<span class="kpi-sub"><i class="fa-solid fa-circle-check"></i> Bu müşteriden yapılan toplam tahsilat</span>`;
    document.getElementById('totalRemainingBreakdown').innerHTML = `<span class="kpi-sub"><i class="fa-solid fa-scale-unbalanced"></i> Tahsil edilecek net alacak</span>`;
  } else {
    // All Customers Mode: Calculate currency breakdowns
    let sumTL = { shipment: 0, paid: 0, remaining: 0 };
    let sumUSD = { shipment: 0, paid: 0, remaining: 0 };
    let sumEUR = { shipment: 0, paid: 0, remaining: 0 };

    appState.customers.forEach(c => {
      const t = calculateCustomerTotals(c);
      const curr = (c.currency || 'TL').toUpperCase();
      if (curr === 'USD') {
        sumUSD.shipment += t.totalShipment;
        sumUSD.paid += t.totalPaid;
        sumUSD.remaining += t.remaining;
      } else if (curr === 'EUR') {
        sumEUR.shipment += t.totalShipment;
        sumEUR.paid += t.totalPaid;
        sumEUR.remaining += t.remaining;
      } else {
        sumTL.shipment += t.totalShipment;
        sumTL.paid += t.totalPaid;
        sumTL.remaining += t.remaining;
      }
    });

    // Primary display in TL or dominant currency, with detailed breakdown below
    document.getElementById('totalContractVal').textContent = formatCurrency(sumTL.shipment, 'TL');
    document.getElementById('totalContractBreakdown').innerHTML = `
      <span class="kpi-curr-item" title="Dolar Satışı">$ ${sumUSD.shipment.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
      <span class="kpi-curr-item" title="Euro Satışı">€ ${sumEUR.shipment.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
    `;

    document.getElementById('totalPaidVal').textContent = formatCurrency(sumTL.paid, 'TL');
    document.getElementById('totalPaidBreakdown').innerHTML = `
      <span class="kpi-curr-item" title="Dolar Tahsilat">$ ${sumUSD.paid.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
      <span class="kpi-curr-item" title="Euro Tahsilat">€ ${sumEUR.paid.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
    `;

    document.getElementById('totalRemainingVal').textContent = formatCurrency(sumTL.remaining, 'TL');
    document.getElementById('totalRemainingBreakdown').innerHTML = `
      <span class="kpi-curr-item text-red" title="Kalan Dolar Alacağı">$ ${sumUSD.remaining.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
      <span class="kpi-curr-item text-red" title="Kalan Euro Alacağı">€ ${sumEUR.remaining.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
    `;

    document.getElementById('contractorCountVal').textContent = appState.customers.length;
  }

  // Apply search & status & currency filter
  let displayList = filteredCustomers.filter(c => {
    const q = appState.filterSearch.toLowerCase().trim();
    const matchSearch = !q || 
      c.name.toLowerCase().includes(q) || 
      (c.contactPerson && c.contactPerson.toLowerCase().includes(q)) || 
      (c.phone && c.phone.includes(q)) ||
      (c.transactions && c.transactions.some(t => t.productName && t.productName.toLowerCase().includes(q)));

    const totals = calculateCustomerTotals(c);
    let matchStatus = true;
    if (appState.filterStatus === 'UNPAID') matchStatus = totals.remaining > 0;
    if (appState.filterStatus === 'PAID') matchStatus = totals.remaining <= 0;

    let matchCurrency = true;
    if (appState.filterCurrency !== 'ALL') {
      matchCurrency = (c.currency || 'TL').toUpperCase() === appState.filterCurrency;
    }

    return matchSearch && matchStatus && matchCurrency;
  });

  renderCustomerCards(displayList);
  renderMobileCustomerCards(displayList);
  renderCustomerTable(displayList);
}

// Render Customer Tabs Bar
function renderCustomerTabs() {
  const container = document.getElementById('projectTabsList');
  if (!container) return;
  let tabsHtml = '';

  // "Tüm Müşteriler (Genel)" Tab
  const isAllActive = appState.activeCustomerId === 'ALL';
  tabsHtml += `
    <div class="project-tab-item ${isAllActive ? 'active' : ''}">
      <button class="project-tab-btn" onclick="selectCustomerTab('ALL')" title="Tüm müşteriler ve genel portföy">
        <i class="fa-solid fa-users"></i> <span>Tüm Müşteriler</span> 
        <span class="tab-badge">${appState.customers.length}</span>
      </button>
    </div>
  `;

  // Each individual Customer tab with direct micro-rename pencil icon
  appState.customers.forEach(c => {
    const isActive = appState.activeCustomerId === c.id;
    const currBadge = getCurrencySymbol(c.currency);
    const txnCount = (c.transactions || []).length;

    tabsHtml += `
      <div class="project-tab-item ${isActive ? 'active' : ''}">
        <button class="project-tab-btn" onclick="selectCustomerTab('${c.id}')" title="Bu müşteriye geç: ${escapeHtml(c.name)}">
          <i class="fa-solid fa-building"></i> <span>${escapeHtml(c.name)}</span>
          <span class="badge-curr badge-curr-${(c.currency || 'TL').toLowerCase()}">${currBadge}</span>
          <span class="tab-badge">${txnCount}</span>
        </button>
        <button class="tab-micro-edit" onclick="event.stopPropagation(); openQuickRename('customer_${c.id}', '${escapeHtml(c.name)}')" title="Bu Müşterinin / Sekmenin Adını Değiştir">
          <i class="fa-solid fa-pen"></i>
        </button>
      </div>
    `;
  });

  container.innerHTML = tabsHtml;
}

// Switch Customer Tab
function selectCustomerTab(customerId) {
  appState.activeCustomerId = customerId;
  renderDashboard();
}

// Render Active Customer Banner
function renderActiveCustomerBanner() {
  const bannerTitle = document.getElementById('bannerProjectTitle');
  const bannerBadge = document.getElementById('bannerProjectCountBadge');
  const bannerDesc = document.getElementById('bannerProjectDesc');
  const actionsContainer = document.getElementById('activeProjectActions');

  if (appState.activeCustomerId === 'ALL') {
    bannerTitle.textContent = 'Tüm Tekstil Müşterileri (Genel Görünüm)';
    bannerBadge.textContent = `${appState.customers.length} Müşteri`;
    bannerDesc.textContent = 'Kayıtlı tüm tekstil müşterilerinizin sevkiyat, tahsilat ve dövizli bakiye genel toplam görünümü.';
    actionsContainer.innerHTML = `
      <button class="btn btn-sm btn-primary" onclick="openCustomerModal()">
        <i class="fa-solid fa-user-plus"></i> Yeni Müşteri / Firma Ekle
      </button>
    `;
  } else {
    const c = appState.customers.find(x => x.id === appState.activeCustomerId);
    if (!c) {
      appState.activeCustomerId = 'ALL';
      renderDashboard();
      return;
    }

    const totals = calculateCustomerTotals(c);
    const sym = getCurrencySymbol(c.currency);
    bannerTitle.textContent = c.name;
    bannerBadge.innerHTML = `<span class="badge-curr badge-curr-${(c.currency || 'TL').toLowerCase()}">${c.currency} (${sym})</span>`;
    bannerDesc.textContent = `${c.contactPerson ? 'Yetkili: ' + c.contactPerson + ' | ' : ''}${c.phone ? 'Tel: ' + c.phone + ' | ' : ''}${c.notes || 'Özel not girilmemiş.'}`;

    actionsContainer.innerHTML = `
      <button class="btn btn-sm btn-outline" onclick="showLedgerDetailView('${c.id}')" title="Müşteri Cari Ekstresi ve Gönderilen Ürünler">
        <i class="fa-solid fa-book-open"></i> Cari Ekstre & Ürünler
      </button>
      <button class="btn btn-sm btn-primary" onclick="openProductSaleModal('${c.id}')" title="Bu müşteriye mal / ürün sevkiyatı ekle">
        <i class="fa-solid fa-truck-fast"></i> + Mal / Ürün Sevk Et
      </button>
      <button class="btn btn-sm btn-success" onclick="openPaymentModal('${c.id}')" title="Bu müşteriden ödeme / tahsilat al">
        <i class="fa-solid fa-hand-holding-dollar"></i> + Tahsilat Al
      </button>
      <button class="btn btn-sm btn-secondary" onclick="openCustomerModal('${c.id}')" title="Müşteri bilgilerini düzenle">
        <i class="fa-solid fa-pen text-gold"></i> Müşteriyi Düzenle
      </button>
      <button class="btn btn-sm btn-outline text-red" onclick="deleteCustomer('${c.id}')" title="Bu müşteriyi sil">
        <i class="fa-solid fa-trash-can"></i> Sil
      </button>
    `;
  }
}

// Render Customer Cards (Grid View)
function renderCustomerCards(customerList) {
  const container = document.getElementById('contractorCardsContainer');
  if (!container) return;

  if (customerList.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <i class="fa-solid fa-shirt"></i>
        <h3>Aradığınız kriterde kayıtlı tekstil müşterisi bulunamadı</h3>
        <p>Arama veya para birimi filtrenizi sıfırlayabilir veya yukarıdaki <strong>"Yeni Müşteri Ekle"</strong> butonundan yeni müşteri oluşturabilirsiniz.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = customerList.map(c => {
    const t = calculateCustomerTotals(c);
    const curr = c.currency || 'TL';
    const statusBadge = t.remaining <= 0 
      ? `<span class="badge-status paid"><i class="fa-solid fa-check"></i> Bakiye Kapandı (0)</span>` 
      : `<span class="badge-status unpaid"><i class="fa-solid fa-clock"></i> Açık Borç: ${formatCurrency(t.remaining, curr)}</span>`;

    return `
      <div class="contractor-card">
        <div>
          <div class="c-card-top">
            <div style="display: flex; align-items: center;">
              <div class="c-card-avatar">
                <i class="fa-solid fa-building"></i>
              </div>
              <div class="c-card-info">
                <div class="c-card-name" style="display: flex; align-items: center; gap: 0.35rem;">
                  <span>${escapeHtml(c.name)}</span>
                  <button class="btn-micro-edit" onclick="event.stopPropagation(); openQuickRename('customer_${c.id}', '${escapeHtml(c.name)}')" title="Müşteri Adını Değiştir">
                    <i class="fa-solid fa-pen"></i>
                  </button>
                </div>
                <div class="c-card-meta">
                  <span class="badge-curr badge-curr-${curr.toLowerCase()}">${curr} (${getCurrencySymbol(curr)})</span>
                  ${c.contactPerson ? `<span><i class="fa-solid fa-user-tie text-gold"></i> ${escapeHtml(c.contactPerson)}</span>` : ''}
                </div>
              </div>
            </div>
            <div>${statusBadge}</div>
          </div>

          <div class="c-financials">
            <div class="c-fin-row">
              <span class="text-muted">Toplam Mal Satışı:</span>
              <span class="text-gold font-bold">${formatCurrency(t.totalShipment, curr)}</span>
            </div>
            <div class="c-fin-row">
              <span class="text-muted">Alınan Ödeme:</span>
              <span class="text-green font-bold">${formatCurrency(t.totalPaid, curr)}</span>
            </div>
            <div class="c-fin-row">
              <span>Kalan Açık Bakiye:</span>
              <span class="${t.remaining > 0 ? 'text-red' : 'text-green'} font-bold">${formatCurrency(t.remaining, curr)}</span>
            </div>
          </div>

          <div class="progress-mini-bar" title="Tahsil Edilme: %${t.percentPaid}">
            <div class="progress-mini-fill" style="width: ${t.percentPaid}%;"></div>
          </div>
        </div>

        <div class="c-card-actions">
          <button class="btn btn-sm btn-outline" onclick="showLedgerDetailView('${c.id}')" title="Kişisel Cari Sayfası & Siparişler">
            <i class="fa-solid fa-book-open"></i> Cari Ekstre
          </button>
          <button class="btn btn-sm btn-primary" onclick="openProductSaleModal('${c.id}')" title="Mal / Ürün Sevk Et">
            <i class="fa-solid fa-truck-fast"></i> Mal Sevk Et
          </button>
          <button class="btn btn-sm btn-success" onclick="openPaymentModal('${c.id}')" title="Tahsilat Al">
            <i class="fa-solid fa-hand-holding-dollar"></i> Tahsilat
          </button>
          <button class="btn btn-sm btn-secondary" onclick="openCustomerModal('${c.id}')" title="Müşteri Bilgilerini Düzenle">
            <i class="fa-solid fa-pen text-gold"></i> Düzenle
          </button>
          <button class="btn btn-sm btn-outline text-red" onclick="deleteCustomer('${c.id}')" title="Müşteriyi Sil">
            <i class="fa-solid fa-trash-can"></i> Sil
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Render Customer Table (Table View)
function renderCustomerTable(customerList) {
  const tbody = document.getElementById('contractorTableBody');
  if (!tbody) return;

  if (customerList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" class="text-center" style="padding: 2rem;">Kayıt bulunamadı.</td></tr>`;
    return;
  }

  tbody.innerHTML = customerList.map(c => {
    const t = calculateCustomerTotals(c);
    const curr = c.currency || 'TL';
    const statusBadge = t.remaining <= 0 
      ? `<span class="badge-status paid">Ödendi (0)</span>` 
      : `<span class="badge-status unpaid">Borçlu</span>`;

    return `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <strong>${escapeHtml(c.name)}</strong>
            <button class="btn-micro-edit" onclick="event.stopPropagation(); openQuickRename('customer_${c.id}', '${escapeHtml(c.name)}')" title="Müşteri Adını Değiştir">
              <i class="fa-solid fa-pen"></i>
            </button>
          </div>
        </td>
        <td><span class="badge-curr badge-curr-${curr.toLowerCase()}">${curr} (${getCurrencySymbol(curr)})</span></td>
        <td>${escapeHtml(c.contactPerson || '-')}</td>
        <td>${escapeHtml(c.phone || '-')}</td>
        <td class="text-gold font-bold">${formatCurrency(t.totalShipment, curr)}</td>
        <td class="text-green font-bold">${formatCurrency(t.totalPaid, curr)}</td>
        <td class="${t.remaining > 0 ? 'text-red font-bold' : 'text-green font-bold'}">${formatCurrency(t.remaining, curr)}</td>
        <td>${statusBadge}</td>
        <td class="text-right">
          <button class="btn btn-sm btn-outline" onclick="showLedgerDetailView('${c.id}')" title="Cari Sayfası">
            <i class="fa-solid fa-book-open"></i> Ekstre
          </button>
          <button class="btn btn-sm btn-primary" onclick="openProductSaleModal('${c.id}')" title="Mal Sevk Et">
            <i class="fa-solid fa-plus"></i> Mal Sevk
          </button>
          <button class="btn btn-sm btn-success" onclick="openPaymentModal('${c.id}')" title="Tahsilat Al">
            <i class="fa-solid fa-hand-holding-dollar"></i> Tahsilat
          </button>
          <button class="btn btn-sm btn-secondary" onclick="openCustomerModal('${c.id}')" title="Düzenle">
            <i class="fa-solid fa-pen text-gold"></i> Düzenle
          </button>
          <button class="btn btn-sm btn-outline text-red" onclick="deleteCustomer('${c.id}')" title="Sil">
            <i class="fa-solid fa-trash-can"></i> Sil
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// =========================================================
// MÜŞTERİ CARİ & SİPARİŞ DETAY SAYFASI (LEDGER DETAIL VIEW)
// =========================================================

function renderLedgerDetail() {
  const customer = appState.customers.find(c => c.id === appState.activeDetailCustomerId);
  if (!customer) {
    showDashboardView();
    return;
  }

  const totals = calculateCustomerTotals(customer);
  const curr = customer.currency || 'TL';
  const sym = getCurrencySymbol(curr);

  // Müşteri Profil Bilgileri
  document.getElementById('detailContractorName').textContent = customer.name;
  document.getElementById('detailContractorRole').textContent = customer.contactPerson || 'Yetkili Belirtilmemiş';
  document.getElementById('detailContractorPhone').textContent = customer.phone || 'Telefon Yok';
  document.getElementById('detailContractorAddress').textContent = customer.address || 'Adres Girilmemiş';
  document.getElementById('detailContractorCurrency').textContent = `${curr} (${sym})`;

  const currBadgeEl = document.getElementById('detailContractorCurrencyBadge');
  if (currBadgeEl) {
    currBadgeEl.className = `badge-curr badge-curr-${curr.toLowerCase()}`;
    currBadgeEl.textContent = `${curr} (${sym})`;
  }

  const notesEl = document.getElementById('detailContractorNotes');
  if (notesEl) {
    notesEl.textContent = customer.notes || 'Bu müşteri için özel sevkiyat veya vade notu girilmemiş.';
  }

  const statusBadge = document.getElementById('detailContractorStatus');
  if (totals.remaining <= 0) {
    statusBadge.className = 'badge-status paid';
    statusBadge.innerHTML = '<i class="fa-solid fa-check"></i> Hesap Kapandı (Borç Yok)';
  } else {
    statusBadge.className = 'badge-status unpaid';
    statusBadge.innerHTML = '<i class="fa-solid fa-clock"></i> Açık Bakiye Borçlu';
  }

  // 3 Büyük Finans Kutusu
  document.getElementById('detailTotalContract').textContent = formatCurrency(totals.totalShipment, curr);
  document.getElementById('detailTotalPaid').textContent = formatCurrency(totals.totalPaid, curr);
  document.getElementById('detailRemaining').textContent = formatCurrency(totals.remaining, curr);

  // Buton Dinleyicisi: Profildeki hızlı isim değiştirme butonu
  const btnQuickName = document.getElementById('btnQuickEditCustomerName');
  if (btnQuickName) {
    btnQuickName.onclick = () => openQuickRename('customer_' + customer.id, customer.name);
  }

  renderTransactionsList(customer);
}

// Render Transactions List in Customer Ledger
function renderTransactionsList(customer) {
  const tbody = document.getElementById('transactionsTableBody');
  if (!tbody) return;

  const txns = customer.transactions || [];
  let filteredTxns = txns;

  // Filter by transaction type
  if (appState.txnFilterType !== 'ALL') {
    if (appState.txnFilterType === 'CHECK') {
      filteredTxns = txns.filter(t => isCheckOrSenet(t));
    } else if (appState.txnFilterType === 'KUR_FARKI') {
      filteredTxns = txns.filter(t => t.type === 'KUR_FARKI');
    } else {
      filteredTxns = txns.filter(t => t.type === appState.txnFilterType);
    }
  }

  // Filter by year if selected
  if (appState.ledgerFilterYear && appState.ledgerFilterYear !== 'ALL') {
    filteredTxns = filteredTxns.filter(t => t.date && t.date.substring(0, 4) === appState.ledgerFilterYear);
  }

  // Sort chronological for running balance calculation
  const sortedTxns = [...txns].sort((a, b) => new Date(a.date) - new Date(b.date));

  // Compute running balance for each transaction
  let running = 0;
  const balanceMap = {};
  sortedTxns.forEach(t => {
    const amt = Number(t.amount || 0);
    if (t.type === 'SHIPMENT') {
      running += amt;
    } else if (t.type === 'KUR_FARKI') {
      if (t.direction === 'ALACAK' || t.isCredit !== false) {
        running -= amt;
      } else {
        running += amt;
      }
    } else {
      running -= amt;
    }
    balanceMap[t.id] = running;
  });

  // Display in descending date order (newest on top)
  const displayTxns = [...filteredTxns].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Render Mobile Cards View
  renderMobileTransactionsList(customer, displayTxns, balanceMap);

  if (displayTxns.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" class="text-center" style="padding: 2.5rem;">Bu alanda seçilen filtrede kayıtlı hareket bulunmuyor.</td></tr>`;
    return;
  }

  tbody.innerHTML = displayTxns.map(t => {
    const amt = Number(t.amount || 0);
    const itemCurr = t.currency || customer.currency || 'TL';
    const isShipment = t.type === 'SHIPMENT';
    const isFx = t.type === 'KUR_FARKI';
    const isDoc = isCheckOrSenet(t);
    const isSenetDoc = isDoc && (t.method === 'Müşteri Senedi' || (t.checkNo || '').toUpperCase().includes('SENET'));

    let typeBadge = `<span class="badge-type-payment"><i class="fa-solid fa-hand-holding-dollar"></i> Tahsilat</span>`;
    if (isShipment) {
      typeBadge = `<span class="badge-type-shipment"><i class="fa-solid fa-truck-fast"></i> Mal Satışı</span>`;
    } else if (isFx) {
      typeBadge = `<span class="badge-type-kur-farki"><i class="fa-solid fa-scale-balanced"></i> Kur Farkı</span>`;
    } else if (isSenetDoc) {
      typeBadge = `<span class="badge-type-payment"><i class="fa-solid fa-file-invoice text-gold"></i> Müşteri Senedi</span>`;
    } else if (isDoc) {
      typeBadge = `<span class="badge-type-payment"><i class="fa-solid fa-money-check-dollar text-gold"></i> Müşteri Çeki</span>`;
    }

    let titleText = '';
    if (isShipment) {
      titleText = `<strong>${escapeHtml(t.productName || 'Ürün Satışı')}</strong> ${t.description ? `<div style="font-size: 0.775rem; color: var(--text-muted); margin-top: 0.2rem;">${escapeHtml(t.description)}</div>` : ''}`;
    } else if (isFx) {
      titleText = `<strong>${escapeHtml(t.description || 'Vade Kur Farkı')}</strong> <div style="font-size: 0.75rem; color: var(--primary); margin-top: 0.2rem;">Giriş: ${t.entryRate ? t.entryRate.toFixed(4) + ' ₺' : '-'} ➔ Vade: ${t.exitRate ? Number(t.exitRate).toFixed(4) + ' ₺' : '-'}</div>`;
    } else {
      titleText = `<strong>${escapeHtml(t.description || 'Ödeme')}</strong> ${t.method ? `<div style="font-size: 0.775rem; color: var(--text-muted); margin-top: 0.2rem;"><i class="fa-solid fa-credit-card"></i> ${escapeHtml(t.method)} ${t.ref ? `(${escapeHtml(t.ref)})` : ''}</div>` : ''}`;
    }

    const qtyText = isShipment && t.quantity 
      ? `<strong>${Number(t.quantity).toLocaleString('tr-TR')}</strong> ${escapeHtml(t.unit || 'Adet')}` 
      : `<span class="text-dim">-</span>`;

    const priceText = isShipment && t.unitPrice 
      ? formatCurrency(t.unitPrice, itemCurr) 
      : `<span class="text-dim">-</span>`;

    let shipmentVal = '<span class="text-dim">-</span>';
    let paymentVal = '<span class="text-dim">-</span>';

    if (isShipment) {
      shipmentVal = `<strong class="text-gold">${formatCurrency(amt, itemCurr)}</strong>`;
    } else if (isFx) {
      if (t.direction === 'ALACAK' || t.isCredit !== false) {
        paymentVal = `<strong class="text-green">${formatCurrency(amt, itemCurr)}</strong>`;
      } else {
        shipmentVal = `<strong class="text-gold">${formatCurrency(amt, itemCurr)}</strong>`;
      }
    } else {
      paymentVal = `<strong class="text-green">${formatCurrency(amt, itemCurr)}</strong>`;
    }

    const cumBalance = balanceMap[t.id] !== undefined ? balanceMap[t.id] : 0;

    return `
      <tr>
        <td>${formatDate(t.date)}</td>
        <td>${typeBadge}</td>
        <td>${titleText}</td>
        <td>${qtyText}</td>
        <td>${priceText}</td>
        <td class="text-right">${shipmentVal}</td>
        <td class="text-right">${paymentVal}</td>
        <td class="text-right ${cumBalance > 0 ? 'text-red font-bold' : 'text-green font-bold'}">${formatCurrency(cumBalance, itemCurr)}</td>
        <td>${escapeHtml(t.invoiceNo || t.checkNo || t.ref || '-')}</td>
        <td class="text-right">
          <button class="btn btn-sm btn-secondary" onclick="editTransaction('${customer.id}', '${t.id}')" title="Bu işlemi düzenle">
            <i class="fa-solid fa-pen text-gold"></i> Düzenle
          </button>
          <button class="btn btn-sm btn-outline text-red" onclick="deleteTransaction('${customer.id}', '${t.id}')" title="Bu işlemi sil">
            <i class="fa-solid fa-trash-can"></i> Sil
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// Render Mobile Ledger Transactions List (Dokunmatik İşlem Kartları)
function renderMobileTransactionsList(customer, displayTxns, balanceMap) {
  const container = document.getElementById('mobileLedgerTxnList');
  if (!container) return;

  if (!displayTxns || displayTxns.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding: 1.5rem 1rem;">
        <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">Bu dönemde kayıtlı hareket bulunamadı.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = displayTxns.map(t => {
    const amt = Number(t.amount || 0);
    const itemCurr = t.currency || customer.currency || 'TL';
    const isShipment = t.type === 'SHIPMENT';
    const isDoc = isCheckOrSenet(t);
    const isSenetDoc = isDoc && (t.method === 'Müşteri Senedi' || (t.checkNo || '').toUpperCase().includes('SENET'));
    const isFx = t.type === 'KUR_FARKI';

    let badge = `<span class="badge-type-payment"><i class="fa-solid fa-hand-holding-dollar"></i> Tahsilat</span>`;
    if (isShipment) {
      badge = `<span class="badge-type-shipment"><i class="fa-solid fa-truck-fast"></i> Mal Satışı</span>`;
    } else if (isFx) {
      badge = `<span class="badge-type-kur-farki"><i class="fa-solid fa-scale-balanced"></i> Kur Farkı</span>`;
    } else if (isSenetDoc) {
      badge = `<span class="badge-type-payment"><i class="fa-solid fa-file-invoice text-gold"></i> Senet</span>`;
    } else if (isDoc) {
      badge = `<span class="badge-type-payment"><i class="fa-solid fa-money-check-dollar text-gold"></i> Çek</span>`;
    }

    let title = isShipment ? (t.productName || 'Mal Sevkiyatı') : (t.description || 'Tahsilat');
    let sub = '';
    if (isShipment && t.quantity) {
      sub = `${Number(t.quantity).toLocaleString('tr-TR')} ${t.unit || 'Adet'} × ${formatCurrency(t.unitPrice, itemCurr)}`;
    } else if (isDoc) {
      sub = `Vade: ${formatDate(t.dueDate)} | Evrak: ${t.checkBank || (isSenetDoc ? 'Senet' : 'Çek')} (#${t.checkNo || '-'})`;
    } else if (isFx) {
      sub = `Giriş: ${t.entryRate ? t.entryRate.toFixed(2) + ' ₺' : '-'} ➔ Vade: ${t.exitRate ? Number(t.exitRate).toFixed(2) + ' ₺' : '-'}`;
    } else if (t.method) {
      sub = `${t.method} ${t.ref ? `(${t.ref})` : ''}`;
    }

    const cumBal = balanceMap[t.id] !== undefined ? balanceMap[t.id] : 0;

    return `
      <div class="mobile-txn-card">
        <div class="mob-txn-header">
          <span class="mob-txn-date"><i class="fa-regular fa-calendar"></i> ${formatDate(t.date)}</span>
          ${badge}
        </div>
        <div class="mob-txn-desc">${escapeHtml(title)}</div>
        ${sub ? `<div class="mob-txn-sub">${escapeHtml(sub)}</div>` : ''}
        <div class="mob-txn-amount-row">
          <div>
            <span class="mob-txn-sub">Kalan Bakiye: </span>
            <strong class="${cumBal > 0 ? 'text-red' : 'text-green'}">${formatCurrency(cumBal, itemCurr)}</strong>
          </div>
          <div>
            <span class="mob-txn-amt ${isShipment ? 'text-gold' : 'text-green'}">
              ${isShipment ? '+' : '-'}${formatCurrency(amt, itemCurr)}
            </span>
          </div>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 0.35rem;">
          <button class="btn btn-sm btn-secondary" onclick="editTransaction('${customer.id}', '${t.id}')">
            <i class="fa-solid fa-pen text-gold"></i> Düzenle
          </button>
          <button class="btn btn-sm btn-outline text-red" onclick="deleteTransaction('${customer.id}', '${t.id}')">
            <i class="fa-solid fa-trash-can"></i> Sil
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// =========================================================
// CUSTOMER CRUD (MÜŞTERİ EKLEME / DÜZENLEME / SİLME)
// =========================================================

function openCustomerModal(editId = null) {
  const form = document.getElementById('formCustomer');
  if (form) form.reset();

  const titleEl = document.getElementById('modalCustomerTitle');
  const idInput = document.getElementById('editCustomerId');

  if (editId) {
    const c = appState.customers.find(x => x.id === editId);
    if (!c) return;
    idInput.value = c.id;
    document.getElementById('custName').value = c.name;
    document.getElementById('custCurrency').value = c.currency || 'TL';
    document.getElementById('custContactPerson').value = c.contactPerson || '';
    document.getElementById('custPhone').value = c.phone || '';
    document.getElementById('custAddress').value = c.address || '';
    document.getElementById('custNotes').value = c.notes || '';
    if (titleEl) titleEl.innerHTML = '<i class="fa-solid fa-pen-to-square text-gold"></i> Müşteri Bilgilerini Düzenle / Güncelle';
  } else {
    idInput.value = '';
    document.getElementById('custCurrency').value = 'TL';
    if (titleEl) titleEl.innerHTML = '<i class="fa-solid fa-user-plus text-gold"></i> Yeni Müşteri / Firma Tanımla';
  }

  openModal('modalCustomer');
}

function deleteCustomer(customerId) {
  const c = appState.customers.find(x => x.id === customerId);
  if (!c) return;

  const msg = `"${c.name}" adlı müşteriyi ve tüm kayıtlı ürün sevkiyatları ile tahsilatlarını silmek istediğinize emin misiniz?`;
  if (!confirm(msg)) return;

  appState.customers = appState.customers.filter(x => x.id !== customerId);
  if (appState.activeCustomerId === customerId) {
    appState.activeCustomerId = 'ALL';
  }
  saveData();
  showToast(`"${c.name}" başarıyla silindi.`, 'info');
  showDashboardView();
}

// =========================================================
// MAL / ÜRÜN SATIŞI (SHIPMENT) MODAL & CRUD
// =========================================================

function openProductSaleModal(customerId = null, editTxnId = null) {
  const form = document.getElementById('formProductSale');
  if (form) form.reset();

  const cId = customerId || appState.activeDetailCustomerId || (appState.activeCustomerId !== 'ALL' ? appState.activeCustomerId : null) || (appState.customers[0] ? appState.customers[0].id : null);
  const customer = appState.customers.find(x => x.id === cId);
  if (!customer) {
    alert("Lütfen önce bir müşteri seçin veya ekleyin!");
    return;
  }

  document.getElementById('saleCustomerId').value = customer.id;
  document.getElementById('editSaleTxnId').value = editTxnId || '';
  document.getElementById('saleCustomerNameDisplay').textContent = `${customer.name} (${customer.currency || 'TL'})`;
  document.getElementById('saleDate').value = getTodayDateStr();
  document.getElementById('saleCurrency').value = customer.currency || 'TL';
  document.getElementById('saleUnit').value = 'Adet';

  const modalTitle = document.getElementById('modalProductSaleTitle');

  if (editTxnId) {
    const txn = (customer.transactions || []).find(t => t.id === editTxnId);
    if (txn) {
      document.getElementById('saleProductName').value = txn.productName || '';
      document.getElementById('saleDate').value = txn.date || getTodayDateStr();
      document.getElementById('saleQuantity').value = txn.quantity || '';
      document.getElementById('saleUnit').value = txn.unit || 'Adet';
      document.getElementById('saleUnitPrice').value = txn.unitPrice || '';
      document.getElementById('saleCurrency').value = txn.currency || customer.currency || 'TL';
      document.getElementById('saleInvoiceNo').value = txn.invoiceNo || '';
      document.getElementById('saleDescription').value = txn.description || '';
      if (modalTitle) modalTitle.innerHTML = '<i class="fa-solid fa-pen-to-square text-gold"></i> Mal / Ürün Sevkiyatını Düzenle';
    }
  } else {
    if (modalTitle) modalTitle.innerHTML = '<i class="fa-solid fa-truck-fast text-gold"></i> Mal / Ürün Satışı & Sevkiyatı';
  }

  updateLiveSaleCalculation();
  openModal('modalProductSale');
}

function updateLiveSaleCalculation() {
  const qty = parseFloat(document.getElementById('saleQuantity').value) || 0;
  const price = parseFloat(document.getElementById('saleUnitPrice').value) || 0;
  const curr = document.getElementById('saleCurrency').value || 'TL';
  const total = qty * price;
  const unit = document.getElementById('saleUnit').value || 'Adet';

  const calcEl = document.getElementById('saleCalcResult');
  if (calcEl) {
    calcEl.textContent = `${qty.toLocaleString('tr-TR')} ${unit} × ${formatCurrency(price, curr)} = ${formatCurrency(total, curr)}`;
  }
}

// =========================================================
// TAHSİLAT / ÖDEME AL (PAYMENT) MODAL & CRUD
// =========================================================

function openPaymentModal(customerId = null, editTxnId = null) {
  const form = document.getElementById('formPayment');
  if (form) form.reset();

  const cId = customerId || appState.activeDetailCustomerId || (appState.activeCustomerId !== 'ALL' ? appState.activeCustomerId : null) || (appState.customers[0] ? appState.customers[0].id : null);
  const customer = appState.customers.find(x => x.id === cId);
  if (!customer) {
    alert("Lütfen önce bir müşteri seçin veya ekleyin!");
    return;
  }

  const totals = calculateCustomerTotals(customer);
  const curr = customer.currency || 'TL';

  document.getElementById('payCustomerId').value = customer.id;
  document.getElementById('editPayTxnId').value = editTxnId || '';
  document.getElementById('payCustomerName').textContent = `${customer.name} (${curr})`;
  document.getElementById('payCurrentBalance').textContent = formatCurrency(totals.remaining, curr);
  document.getElementById('payDate').value = getTodayDateStr();
  document.getElementById('payCurrency').value = curr;

  const modalTitle = document.getElementById('modalPaymentTitle');
  const checkDetailsBox = document.getElementById('checkDetailsBox');
  if (checkDetailsBox) checkDetailsBox.style.display = 'none';

  if (editTxnId) {
    const txn = (customer.transactions || []).find(t => t.id === editTxnId);
    if (txn) {
      document.getElementById('payAmount').value = txn.amount || '';
      document.getElementById('payCurrency').value = txn.currency || curr;
      document.getElementById('payDate').value = txn.date || getTodayDateStr();
      document.getElementById('payMethod').value = txn.method || 'Banka Havalesi / EFT';
      document.getElementById('payRef').value = txn.ref || '';
      document.getElementById('payDescription').value = txn.description || '';

      if (txn.method === 'Müşteri Çeki' || txn.method === 'Müşteri Senedi' || isCheckOrSenet(txn)) {
        if (checkDetailsBox) checkDetailsBox.style.display = 'block';
        document.getElementById('payCheckNo').value = txn.checkNo || '';
        document.getElementById('payCheckBank').value = txn.checkBank || '';
        document.getElementById('payCheckDueDate').value = txn.dueDate || '';
        document.getElementById('payCheckEntryRate').value = txn.entryRate || '';
        document.getElementById('payCheckAutoFx').checked = txn.autoFx !== false;
      }
      if (modalTitle) modalTitle.innerHTML = '<i class="fa-solid fa-pen-to-square text-green"></i> Tahsilat / Ödeme Kaydını Düzenle';
    }
  } else {
    // Yeni tahsilat: Çek alanlarını temizle ve güncel TCMB kurunu hazırla
    document.getElementById('payCheckNo').value = '';
    document.getElementById('payCheckBank').value = '';
    document.getElementById('payCheckDueDate').value = '';
    const entryRateEl = document.getElementById('payCheckEntryRate');
    if (entryRateEl) {
      if (curr === 'USD') entryRateEl.value = (latestTcmbRates?.USD?.forexSelling || 49.0348).toFixed(4);
      else if (curr === 'EUR') entryRateEl.value = (latestTcmbRates?.EUR?.forexSelling || 55.3963).toFixed(4);
      else entryRateEl.value = '';
    }
    document.getElementById('payCheckAutoFx').checked = true;
    if (modalTitle) modalTitle.innerHTML = '<i class="fa-solid fa-hand-holding-dollar text-green"></i> Müşteriden Tahsilat / Ödeme Al';
  }

  openModal('modalPayment');
}

// Generic Edit for any transaction (shipment or payment)
function editTransaction(customerId, txnId) {
  const customer = appState.customers.find(c => c.id === customerId);
  if (!customer) return;

  const txn = (customer.transactions || []).find(t => t.id === txnId);
  if (!txn) return;

  if (txn.type === 'SHIPMENT') {
    openProductSaleModal(customerId, txnId);
  } else {
    openPaymentModal(customerId, txnId);
  }
}

// Generic Delete for any transaction
function deleteTransaction(customerId, txnId) {
  const customer = appState.customers.find(c => c.id === customerId);
  if (!customer) return;

  if (confirm("Bu işlem kaydını (sevkiyat veya tahsilat) silmek istediğinize emin misiniz? Bakiye anında yeniden hesaplanacaktır.")) {
    customer.transactions = (customer.transactions || []).filter(t => t.id !== txnId);
    saveData();
    showToast("İşlem kaydı silindi.", 'info');
    if (appState.activeDetailCustomerId) {
      renderLedgerDetail();
    } else {
      renderDashboard();
    }
  }
}

// Modal Open & Close Helpers
function openModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.add('active');
  if (modalId === 'modalBackup') {
    loadBackupList();
  }
}

function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.remove('active');
}

// =========================================================
// EXCEL EXPORT (CSV UTF-8)
// =========================================================

function exportToExcelCSV() {
  if (appState.customers.length === 0) {
    showToast("Dışa aktarılacak müşteri kaydı bulunmuyor.", "danger");
    return;
  }

  let csv = '\uFEFF'; // UTF-8 BOM
  csv += 'Müşteri / Firma Adı;Para Birimi;Yetkili Kişi;Telefon;Adres;Toplam Mal Satışı;Toplam Alınan Ödeme;Kalan Bakiye;Durum;Notlar\r\n';

  appState.customers.forEach(c => {
    const t = calculateCustomerTotals(c);
    const curr = c.currency || 'TL';
    const status = t.remaining <= 0 ? 'Ödendi' : 'Borçlu';

    const row = [
      `"${c.name.replace(/"/g, '""')}"`,
      `"${curr}"`,
      `"${(c.contactPerson || '').replace(/"/g, '""')}"`,
      `"${(c.phone || '').replace(/"/g, '""')}"`,
      `"${(c.address || '').replace(/"/g, '""')}"`,
      t.totalShipment,
      t.totalPaid,
      t.remaining,
      `"${status}"`,
      `"${(c.notes || '').replace(/"/g, '""')}"`
    ];

    csv += row.join(';') + '\r\n';
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `TekstilCari_Musteri_Listesi_${getTodayDateStr()}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast("Excel (CSV) dosyası bilgisayarınıza indirildi!", "success");
}

// =========================================================
// MÜŞTERİ CARİ EKSTRE YAZDIR & 100% ÇALIŞAN PDF İNDİRME MOTORU
// =========================================================

function openStatementPreviewModal() {
  const customerId = appState.activeDetailCustomerId || (appState.activeCustomerId !== 'ALL' ? appState.activeCustomerId : null) || (appState.customers[0] ? appState.customers[0].id : null);
  const customer = appState.customers.find(c => c.id === customerId);
  if (!customer) {
    alert("Lütfen önce bir müşteri seçin!");
    return;
  }

  const totals = calculateCustomerTotals(customer, appState.selectedYear);
  const curr = customer.currency || 'TL';
  const brandTitle = appState.settings.brandTitle || 'TEKSTİL SANAYİ & İHRACAT';
  const brandSubtitle = appState.settings.brandSubtitle || 'MÜŞTERİ CARİ HESAP & SEVKİYAT EKSTRESİ';

  // Fill Header
  document.getElementById('printPaperCompanyTitle').textContent = brandTitle.toUpperCase();
  document.getElementById('printPaperCompanySubtitle').textContent = brandSubtitle.toUpperCase();
  document.getElementById('printPaperReportDate').textContent = `${new Date().toLocaleDateString('tr-TR')} ${new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}`;
  document.getElementById('printPaperYearPeriod').textContent = appState.selectedYear === 'ALL' ? 'Tüm Yıllar (Genel Toplam)' : `${appState.selectedYear} Mali Yılı`;
  document.getElementById('previewCustomerNameSubtitle').textContent = `${customer.name} (${curr})`;

  // Fill Customer Info
  document.getElementById('printPaperCustomerInfo').innerHTML = `
    <div class="cust-title"><i class="fa-solid fa-building"></i> ${escapeHtml(customer.name)}</div>
    <div><strong>Yetkili / Temsilci:</strong> ${escapeHtml(customer.contactPerson || '-')}</div>
    <div><strong>Telefon:</strong> ${escapeHtml(customer.phone || '-')}</div>
    <div><strong>Firma Adresi:</strong> ${escapeHtml(customer.address || '-')}</div>
    <div><strong>Çalışma Para Birimi:</strong> ${curr} (${getCurrencySymbol(curr)})</div>
    <div><strong>Vade & Koşullar:</strong> ${escapeHtml(customer.notes || 'Standart cari vade')}</div>
    <div><strong>Hesap Durumu:</strong> <strong class="${totals.remaining <= 0 ? 'text-green' : 'text-red'}">${totals.remaining <= 0 ? 'HESAP KAPALI (BORÇ YOK)' : 'AÇIK HESAP (ÖDEME BEKLİYOR)'}</strong></div>
  `;

  // Filter & sort transactions
  let txns = customer.transactions || [];
  if (appState.selectedYear !== 'ALL') {
    txns = txns.filter(t => t.date && t.date.substring(0, 4) === appState.selectedYear);
  }
  if (appState.txnFilterType !== 'ALL') {
    if (appState.txnFilterType === 'CHECK') {
      txns = txns.filter(t => isCheckOrSenet(t));
    } else if (appState.txnFilterType === 'KUR_FARKI') {
      txns = txns.filter(t => t.type === 'KUR_FARKI');
    } else {
      txns = txns.filter(t => t.type === appState.txnFilterType);
    }
  }

  const sortedTxns = [...txns].sort((a, b) => new Date(a.date) - new Date(b.date));

  let runningBalance = 0;
  let rowsHtml = '';

  if (sortedTxns.length === 0) {
    rowsHtml = `<tr><td colspan="7" style="text-align: center; padding: 25px; color: #64748b;">Bu dönemde kayıtlı hareket bulunmuyor.</td></tr>`;
  } else {
    sortedTxns.forEach(t => {
      const amt = Number(t.amount || 0);
      const isShipment = t.type === 'SHIPMENT';
      const isFx = t.type === 'KUR_FARKI';
      let sVal = '-';
      let pVal = '-';

      if (isShipment) {
        sVal = formatCurrency(amt, curr);
        runningBalance += amt;
      } else if (isFx) {
        if (t.direction === 'ALACAK' || t.isCredit !== false) {
          pVal = formatCurrency(amt, curr);
          runningBalance -= amt;
        } else {
          sVal = formatCurrency(amt, curr);
          runningBalance += amt;
        }
      } else {
        pVal = formatCurrency(amt, curr);
        runningBalance -= amt;
      }

      let typeName = isShipment ? 'Mal Satışı' : (isFx ? 'Kur Farkı' : (isCheckOrSenet(t) ? ((t.method === 'Müşteri Senedi' || (t.checkNo || '').toUpperCase().includes('SENET')) ? 'Müşteri Senedi' : 'Müşteri Çeki') : 'Tahsilat'));
      let itemDesc = isShipment 
        ? `${escapeHtml(t.productName || 'Ürün Satışı')}` 
        : `${escapeHtml(t.description || 'Ödeme')} ${t.ref ? `(${escapeHtml(t.ref)})` : ''}`;

      const qtyInfo = isShipment && t.quantity ? `${Number(t.quantity).toLocaleString('tr-TR')} ${escapeHtml(t.unit || 'Adet')}` : '-';
      const priceInfo = isShipment && t.unitPrice ? formatCurrency(t.unitPrice, curr) : '-';

      rowsHtml += `
        <tr>
          <td>${formatDate(t.date)}</td>
          <td><strong>${typeName}</strong></td>
          <td>${itemDesc}</td>
          <td>${qtyInfo}</td>
          <td>${priceInfo}</td>
          <td style="text-align: right; font-weight: 600;">${sVal}</td>
          <td style="text-align: right; font-weight: 600; color: #16a34a;">${pVal}</td>
        </tr>
      `;
    });
  }

  document.getElementById('printPaperTableBody').innerHTML = rowsHtml;

  // Summary box
  document.getElementById('printPaperSummaryBox').innerHTML = `
    <div class="print-sum-box">
      <div class="print-sum-row">
        <span>Toplam Sevk Edilen Mal Bedeli:</span>
        <strong>${formatCurrency(totals.totalShipment, curr)}</strong>
      </div>
      <div class="print-sum-row">
        <span>Toplam Yapılan Tahsilat:</span>
        <strong style="color: #16a34a;">${formatCurrency(totals.totalPaid, curr)}</strong>
      </div>
      <div class="print-sum-row total-balance">
        <span>Kalan Net Bakiye (Alacak):</span>
        <span>${formatCurrency(totals.remaining, curr)}</span>
      </div>
    </div>
  `;

  document.getElementById('printPaperSigCustName').textContent = customer.name;

  openModal('modalPrintPreview');
}

function downloadStatementPDF() {
  const element = document.getElementById('printSheetPaper');
  if (!element) {
    showToast("Ekstre şablonu bulunamadı!", "danger");
    return;
  }

  const custNameEl = document.getElementById('previewCustomerNameSubtitle');
  const rawName = custNameEl ? custNameEl.textContent.split('(')[0].trim() : 'Musteri';
  const cleanName = rawName.replace(/[^a-zA-Z0-9_\u00C0-\u017F]/g, '_');
  const dateStr = getTodayDateStr();

  const opt = {
    margin: [8, 8, 8, 8],
    filename: `Cari_Ekstre_${cleanName}_${dateStr}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  showToast("📄 PDF hazırlanıyor ve indiriliyor...", "info");

  if (typeof html2pdf !== 'undefined') {
    html2pdf().set(opt).from(element).save().then(() => {
      showToast("✅ Ekstre PDF dosyası başarıyla indirildi!", "success");
    }).catch(err => {
      console.error("html2pdf hatası:", err);
      showToast("PDF indirilemedi. Yazdır butonundan PDF seçeneğini kullanabilirsiniz.", "danger");
    });
  } else {
    window.print();
  }
}

function printStatementDirectly() {
  window.print();
}

// =========================================================
// VADELİ ÇEK VE OTOMATİK KUR FARKI MOTORU (CHECK & FX ENGINE)
// =========================================================

// =========================================================
// VADELİ ÇEK VE SENET KONTROL MOTORU (NAKİT / HAVALE KESİNLİKLE HARİÇTİR)
// =========================================================

function isCheckOrSenet(t) {
  if (!t || t.type !== 'PAYMENT') return false;

  // 1. Nakit, Havale, EFT, POS kesinlikle Çek/Senet DEĞİLDİR
  if (t.isCash === true) return false;
  const method = (t.method || '').trim();
  if (
    method === 'Elden Nakit' || 
    method === 'Banka Havalesi / EFT' || 
    method === 'Banka Havalesi (Swift)' || 
    method === 'Kredi Kartı / POS' || 
    method === 'Kredi Kartı / Mail Order' || 
    method === 'Banka Havalesi / Nakit'
  ) {
    return false;
  }

  // 2. Açıklamada nakit/havale/pos kelimeleri varsa kesinlikle hariç tut
  const desc = ((t.description || '') + ' ' + (t.ref || '')).toUpperCase();
  if (
    desc.includes('NAKİT') || 
    desc.includes('NAKIT') || 
    desc.includes('POS') || 
    desc.includes('HAVALE') || 
    desc.includes('EFT') || 
    desc.includes('KASA') ||
    desc.includes('SENET ÖDEMES') ||
    desc.includes('SENETİN ÖDEMESİ') ||
    desc.includes('SENET ODEMESI') ||
    desc.includes('ÖDEME ALINDI') ||
    desc.includes('ODEME ALINDI')
  ) {
    return false;
  }

  // 3. SADECE açıkça Çek veya Senet olan ve geçerli bir vade tarihi bulunan işlemler
  const isExplicit = (
    t.isCheck === true || 
    t.isSenet === true || 
    method === 'Müşteri Çeki' || 
    method === 'Müşteri Senedi' || 
    desc.includes('ÇEK') || 
    desc.includes('CEK') || 
    desc.includes('SENET')
  );

  return isExplicit && !!(t.dueDate && t.dueDate.length >= 8);
}

function processMaturedChecks(notifyUser = false) {
  const today = getTodayDateStr();
  let processedCount = 0;
  let totalFxAdded = 0;

  if (!Array.isArray(appState.customers)) return;

  appState.customers.forEach(customer => {
    if (!Array.isArray(customer.transactions)) return;

    customer.transactions.forEach(t => {
      // SADECE VE SADECE ÇEK VEYA SENET İŞLEMLERİNE UYGULANIR
      if (!isCheckOrSenet(t)) return;

      // Condition: Due date has arrived/passed, autoFx not explicitly disabled, and FX not yet applied
      if (t.dueDate && t.dueDate <= today && t.autoFx !== false && !t.fxApplied) {
        const checkCurr = (t.currency || customer.currency || 'TL').toUpperCase();
        if (checkCurr === 'TL') return; // TL çeklerde kur farkı oluşmaz

        let currentRate = 0;

        // Güncel TCMB kuru belirleme
        if (checkCurr === 'USD') {
          currentRate = latestTcmbRates?.USD?.forexSelling || latestTcmbRates?.USD?.banknoteSelling || 49.0348;
        } else if (checkCurr === 'EUR') {
          currentRate = latestTcmbRates?.EUR?.forexSelling || latestTcmbRates?.EUR?.banknoteSelling || 55.3963;
        } else {
          currentRate = latestTcmbRates?.USD?.forexSelling || 49.0348;
        }

        let entryRate = Number(t.entryRate || 0);
        if (entryRate <= 0) {
          entryRate = checkCurr === 'EUR' ? 52.0000 : 46.5000;
          t.entryRate = entryRate;
        }

        if (entryRate > 0 && currentRate > 0) {
          const rateDiff = currentRate - entryRate;

          // Kur farkı mevcut ise
          if (Math.abs(rateDiff) >= 0.0001) {
            const checkAmount = Number(t.amount || 0);
            const fxDifferenceTL = Number((rateDiff * checkAmount).toFixed(2));
            const fxAmount = Math.abs(fxDifferenceTL);

            const isSenet = (t.method === 'Müşteri Senedi' || (t.checkNo || '').toUpperCase().includes('SENET'));
            const docType = isSenet ? 'Senet' : 'Çek';

            const fxTxn = {
              id: 'tx_fx_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
              type: 'KUR_FARKI',
              direction: fxDifferenceTL >= 0 ? 'ALACAK' : 'BORC',
              isCredit: fxDifferenceTL >= 0,
              date: today,
              amount: fxAmount,
              currency: 'TL',
              checkId: t.id,
              checkNo: t.checkNo || t.ref || docType,
              entryRate: entryRate,
              exitRate: currentRate,
              rateDiff: rateDiff,
              description: `Vade Sonu TCMB Kur Farkı (#${t.checkNo || docType} Vadesi: ${formatDate(t.dueDate)}). Alındığı Gün: ${entryRate.toFixed(4)} ₺ ➔ Vade Kuru: ${currentRate.toFixed(4)} ₺ (Fark: ${rateDiff >= 0 ? '+' : ''}${rateDiff.toFixed(4)} ₺)`
            };

            customer.transactions.push(fxTxn);
            t.fxApplied = true;
            t.fxTxId = fxTxn.id;
            t.fxAmount = fxDifferenceTL;
            t.maturedRate = currentRate;
            t.fxAppliedDate = today;

            processedCount++;
            totalFxAdded += fxAmount;
          } else {
            t.fxApplied = true;
            t.fxAmount = 0;
            t.maturedRate = currentRate;
            t.fxAppliedDate = today;
          }
        }
      }
    });
  });

  if (processedCount > 0) {
    saveData();
    renderDashboard();
    if (appState.activeDetailCustomerId) renderLedgerDetail();
    if (notifyUser) {
      showToast(`${processedCount} adet vadeli çek/senedin güncel TCMB kur farkı hesaplanarak müşteri carilerine eklendi!`, 'success');
    }
  } else if (notifyUser) {
    showToast("Vadesi gelmiş ve kur farkı hesaplanmamış çek/senet bulunmuyor.", "info");
  }
}

// =========================================================
// AKILLI ÇEK VE SENET KUR FARKI MODAL FONKSİYONLARI
// =========================================================

function openApplyFxModal(custId, txnId) {
  const customer = (appState.customers || []).find(c => c.id === custId);
  if (!customer) {
    showToast("Müşteri bulunamadı!", "danger");
    return;
  }
  const txn = (customer.transactions || []).find(t => t.id === txnId);
  if (!txn) {
    showToast("Evrak kaydı bulunamadı!", "danger");
    return;
  }

  // KESİN KONTROL: SADECE ÇEK VEYA SENET
  if (!isCheckOrSenet(txn)) {
    showToast("Bu işlem bir vadeli çek veya senet değildir. Yalnızca vadeli çek ve senetlere kur farkı hesaplanabilir!", "warning");
    return;
  }

  const curr = (txn.currency || customer.currency || 'TL').toUpperCase();
  const today = getTodayDateStr();
  const isMatured = txn.dueDate ? txn.dueDate <= today : false;
  const isSenet = (txn.method === 'Müşteri Senedi' || (txn.checkNo || '').toUpperCase().includes('SENET'));
  const docType = isSenet ? 'Senet' : 'Çek';

  // Güncel TCMB kuru
  let defaultCurrentRate = 0;
  if (curr === 'USD') {
    defaultCurrentRate = latestTcmbRates?.USD?.forexSelling || latestTcmbRates?.USD?.banknoteSelling || 49.0348;
  } else if (curr === 'EUR') {
    defaultCurrentRate = latestTcmbRates?.EUR?.forexSelling || latestTcmbRates?.EUR?.banknoteSelling || 55.3963;
  } else {
    defaultCurrentRate = 1.0;
  }

  // Giriş kuru
  let entryRate = Number(txn.entryRate || 0);
  if (entryRate <= 0) {
    if (curr === 'USD') entryRate = 46.5000;
    else if (curr === 'EUR') entryRate = 52.0000;
    else entryRate = 1.0;
  }

  const currentRate = txn.maturedRate ? Number(txn.maturedRate) : defaultCurrentRate;

  // Modal alanlarını doldur
  const elCustId = document.getElementById('fxCustId');
  const elTxnId = document.getElementById('fxTxnId');
  const elCustName = document.getElementById('fxCustName');
  const elCheckInfo = document.getElementById('fxCheckInfo');
  const elDueDate = document.getElementById('fxDueDateDisplay');
  const elAmount = document.getElementById('fxCheckAmountDisplay');
  const elEntryRate = document.getElementById('fxEntryRate');
  const elCurrentRate = document.getElementById('fxCurrentRate');
  const elDesc = document.getElementById('fxCustomDesc');

  if (elCustId) elCustId.value = custId;
  if (elTxnId) elTxnId.value = txnId;
  if (elCustName) elCustName.textContent = customer.name;
  if (elCheckInfo) elCheckInfo.textContent = `[${docType}] ${txn.checkBank ? txn.checkBank + ' - ' : ''}No: ${txn.checkNo || txn.ref || 'Belirtilmedi'}`;
  if (elDueDate) elDueDate.textContent = formatDate(txn.dueDate);
  if (elAmount) elAmount.textContent = formatCurrency(txn.amount, curr);

  const statusBadge = document.getElementById('fxStatusBadge');
  if (statusBadge) {
    if (txn.fxApplied) {
      statusBadge.textContent = 'Kur Farkı Zaten İşlendi';
      statusBadge.style.background = 'rgba(16, 185, 129, 0.15)';
      statusBadge.style.color = '#10b981';
      statusBadge.style.borderColor = 'rgba(16, 185, 129, 0.3)';
    } else if (isMatured) {
      statusBadge.textContent = 'Vadesi Geldi';
      statusBadge.style.background = 'rgba(239, 68, 68, 0.15)';
      statusBadge.style.color = '#ef4444';
      statusBadge.style.borderColor = 'rgba(239, 68, 68, 0.3)';
    } else {
      statusBadge.textContent = 'Vadesi Henüz Gelmedi';
      statusBadge.style.background = 'rgba(234, 179, 8, 0.15)';
      statusBadge.style.color = '#facc15';
      statusBadge.style.borderColor = 'rgba(234, 179, 8, 0.3)';
    }
  }

  const priorStatus = document.getElementById('fxPriorStatusDisplay');
  if (priorStatus) {
    if (txn.fxApplied) {
      priorStatus.innerHTML = `<span style="color:#10b981; font-weight:700;"><i class="fa-solid fa-check"></i> İşlendi (${(Number(txn.fxAmount || 0)).toLocaleString('tr-TR', {minimumFractionDigits:2})} ₺)</span>`;
    } else {
      priorStatus.innerHTML = `<span style="color:#94a3b8;">Henüz İşlenmedi</span>`;
    }
  }

  if (elEntryRate) elEntryRate.value = entryRate.toFixed(4);
  if (elCurrentRate) elCurrentRate.value = currentRate.toFixed(4);

  if (elDesc) {
    elDesc.value = `Vade Kur Farkı (#${txn.checkNo || docType} Vade: ${formatDate(txn.dueDate)} - ${docType})`;
  }

  recalculateFxModal();
  openModal('modalApplyFx');
}

function recalculateFxModal() {
  const custId = document.getElementById('fxCustId')?.value;
  const txnId = document.getElementById('fxTxnId')?.value;
  const customer = (appState.customers || []).find(c => c.id === custId);
  if (!customer) return;
  const txn = (customer.transactions || []).find(t => t.id === txnId);
  if (!txn) return;

  const curr = (txn.currency || customer.currency || 'TL').toUpperCase();
  const entryRate = parseFloat(document.getElementById('fxEntryRate')?.value) || 0;
  const currentRate = parseFloat(document.getElementById('fxCurrentRate')?.value) || 0;
  const checkAmount = parseFloat(txn.amount) || 0;

  const displayEl = document.getElementById('fxResultDisplay');
  const dirTextEl = document.getElementById('fxDirectionText');
  const boxEl = document.getElementById('fxCalculationResultBox');

  if (curr === 'TL') {
    if (displayEl) displayEl.textContent = '0,00 ₺';
    if (dirTextEl) dirTextEl.textContent = 'TL cinsinden çek ve senetlerde kur farkı hesaplanmaz.';
    return;
  }

  if (entryRate <= 0 || currentRate <= 0) {
    if (displayEl) displayEl.textContent = '0,00 ₺';
    if (dirTextEl) dirTextEl.textContent = 'Lütfen geçerli giriş ve hedef kurları giriniz.';
    return;
  }

  const rateDiff = currentRate - entryRate;
  const fxDifferenceTL = Number((rateDiff * checkAmount).toFixed(2));
  const sign = fxDifferenceTL >= 0 ? '+' : '';
  const formattedVal = `${sign}${fxDifferenceTL.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`;

  if (displayEl) {
    displayEl.textContent = formattedVal;
    displayEl.style.color = fxDifferenceTL >= 0 ? '#10b981' : '#ef4444';
  }

  if (boxEl) {
    if (fxDifferenceTL >= 0) {
      boxEl.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(5, 150, 105, 0.05) 100%)';
      boxEl.style.borderColor = 'rgba(16, 185, 129, 0.3)';
    } else {
      boxEl.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(185, 28, 28, 0.05) 100%)';
      boxEl.style.borderColor = 'rgba(239, 68, 68, 0.3)';
    }
  }

  if (dirTextEl) {
    if (fxDifferenceTL > 0) {
      dirTextEl.innerHTML = `Döviz kuru <strong>${rateDiff.toFixed(4)} ₺</strong> yükseldi. Müşterinin tahsilatına <strong>+${formattedVal}</strong> kur farkı eklenerek borcu hafifletilecek.`;
    } else if (fxDifferenceTL < 0) {
      dirTextEl.innerHTML = `Döviz kuru <strong>${Math.abs(rateDiff).toFixed(4)} ₺</strong> geriledi. Müşteri carisine <strong>${formattedVal}</strong> kur azalış farkı kaydedilecek.`;
    } else {
      dirTextEl.innerHTML = `Giriş kuru ile vade kuru eşit. Kur farkı 0,00 ₺.`;
    }
  }
}

function commitFxToCustomer() {
  const custId = document.getElementById('fxCustId')?.value;
  const txnId = document.getElementById('fxTxnId')?.value;
  const customer = (appState.customers || []).find(c => c.id === custId);
  if (!customer) {
    showToast("Müşteri bulunamadı!", "danger");
    return;
  }
  const txn = (customer.transactions || []).find(t => t.id === txnId);
  if (!txn) {
    showToast("Evrak kaydı bulunamadı!", "danger");
    return;
  }

  // KESİN KONTROL: SADECE ÇEK VEYA SENET
  if (!isCheckOrSenet(txn)) {
    showToast("Sadece vadeli çek ve senet işlemlerine kur farkı işletilebilir! Nakit ödemelere kur farkı uygulanamaz.", "danger");
    return;
  }

  const curr = (txn.currency || customer.currency || 'TL').toUpperCase();
  if (curr === 'TL') {
    showToast("TL cinsinden işlemlerde kur farkı işletilemez!", "info");
    return;
  }

  const entryRate = parseFloat(document.getElementById('fxEntryRate')?.value) || 0;
  const currentRate = parseFloat(document.getElementById('fxCurrentRate')?.value) || 0;
  const checkAmount = parseFloat(txn.amount) || 0;

  if (entryRate <= 0 || currentRate <= 0) {
    showToast("Lütfen geçerli giriş ve vade kurlarını giriniz!", "danger");
    return;
  }

  const rateDiff = currentRate - entryRate;
  const fxDifferenceTL = Number((rateDiff * checkAmount).toFixed(2));
  const today = getTodayDateStr();
  const isSenet = (txn.method === 'Müşteri Senedi' || (txn.checkNo || '').toUpperCase().includes('SENET'));
  const docType = isSenet ? 'Senet' : 'Çek';
  const desc = document.getElementById('fxCustomDesc')?.value?.trim() || 
    `Vade Kur Farkı (#${txn.checkNo || docType} Vade: ${formatDate(txn.dueDate)}) - Giriş: ${entryRate.toFixed(4)} ₺ / Vade: ${currentRate.toFixed(4)} ₺`;

  // Mükerrer olmaması için eski kur farkı kaydını temizle
  if (txn.fxTxId) {
    customer.transactions = (customer.transactions || []).filter(t => t.id !== txn.fxTxId);
  }

  // Yeni kur farkı fişi oluştur
  const newFxTxId = 'tx_fx_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
  const fxTxn = {
    id: newFxTxId,
    type: 'KUR_FARKI',
    direction: fxDifferenceTL >= 0 ? 'ALACAK' : 'BORC',
    isCredit: fxDifferenceTL >= 0,
    date: today,
    amount: Math.abs(fxDifferenceTL),
    currency: 'TL',
    checkId: txn.id,
    checkNo: txn.checkNo || txn.ref || docType,
    entryRate: entryRate,
    exitRate: currentRate,
    rateDiff: rateDiff,
    description: `${desc} (Kur Farkı: ${fxDifferenceTL >= 0 ? '+' : ''}${fxDifferenceTL.toLocaleString('tr-TR', {minimumFractionDigits: 2})} ₺)`
  };

  customer.transactions.push(fxTxn);

  txn.entryRate = entryRate;
  txn.maturedRate = currentRate;
  txn.fxApplied = true;
  txn.fxTxId = newFxTxId;
  txn.fxAmount = fxDifferenceTL;
  txn.fxAppliedDate = today;

  saveData();
  renderDashboard();
  renderCheckPortfolio();
  if (appState.activeDetailCustomerId === custId) {
    renderLedgerDetail();
  }

  closeModal('modalApplyFx');
  showToast(`✅ ${customer.name} carisine ${Math.abs(fxDifferenceTL).toLocaleString('tr-TR', {minimumFractionDigits:2})} ₺ kur farkı başarıyla işlendi!`, "success");
}

function processAllMaturedChecks(notifyUser = true) {
  if (confirm("SADECE vadesi dolmuş ÇEK ve SENET'lerin kur farkı hesaplanacaktır (Nakit veya havale ödemeleri kesinlikle dahil edilmez). Onaylıyor musunuz?")) {
    processMaturedChecks(notifyUser);
    renderCheckPortfolio();
  }
}

function openCheckPortfolioModal() {
  renderCheckPortfolio();
  openModal('modalCheckPortfolio');
}

function filterCheckPortfolio(filterType) {
  appState.checkPortfolioFilter = filterType;
  document.querySelectorAll('.chk-tab').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === filterType);
  });
  renderCheckPortfolio();
}

function renderCheckPortfolio() {
  const tbody = document.getElementById('checkPortfolioTableBody');
  const mobList = document.getElementById('mobileCheckCardsList');
  if (!tbody) return;

  const today = getTodayDateStr();
  let allChecks = [];
  let totalPortfolioCount = 0;
  let totalPendingCount = 0;
  let totalMaturedCount = 0;
  let totalFxDiffSum = 0;

  (appState.customers || []).forEach(cust => {
    (cust.transactions || []).forEach(t => {
      // KESİN VE TAVİZSİZ FİLTRE: SADECE VADELİ ÇEK VE SENETLER LİSTELENİR
      if (!isCheckOrSenet(t)) return;

      totalPortfolioCount++;
      const isMatured = t.dueDate ? t.dueDate <= today : false;
      if (isMatured) totalMaturedCount++; else totalPendingCount++;
      if (t.fxAmount) totalFxDiffSum += Math.abs(Number(t.fxAmount));

      allChecks.push({
        customer: cust,
        txn: t,
        isMatured
      });
    });
  });

  const elTotalCount = document.getElementById('chkTotalCount');
  if (elTotalCount) elTotalCount.textContent = `${totalPortfolioCount} Adet`;
  const elPendingCount = document.getElementById('chkPendingCount');
  if (elPendingCount) elPendingCount.textContent = `${totalPendingCount} Adet`;
  const elMaturedCount = document.getElementById('chkMaturedCount');
  if (elMaturedCount) elMaturedCount.textContent = `${totalMaturedCount} Adet`;
  const elTotalFx = document.getElementById('chkTotalFxDiffVal');
  if (elTotalFx) elTotalFx.textContent = `${totalFxDiffSum.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`;

  const filter = appState.checkPortfolioFilter || 'ALL';
  let filtered = allChecks;
  if (filter === 'PENDING') {
    filtered = allChecks.filter(x => !x.isMatured);
  } else if (filter === 'MATURED') {
    filtered = allChecks.filter(x => x.isMatured);
  } else if (filter === 'APPLIED') {
    filtered = allChecks.filter(x => x.txn.fxApplied);
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" class="text-center" style="padding: 2rem;">Bu filtrede vadeli çek veya senet kaydı bulunamadı.</td></tr>`;
    if (mobList) mobList.innerHTML = `<div class="empty-state" style="padding: 1.5rem;"><p style="color:var(--text-muted); margin:0;">Kayıtlı vadeli çek veya senet bulunamadı.</p></div>`;
    return;
  }

  filtered.sort((a, b) => (a.txn.dueDate || '').localeCompare(b.txn.dueDate || ''));

  // Masaüstü Tablo Satırları
  tbody.innerHTML = filtered.map(item => {
    const cust = item.customer;
    const t = item.txn;
    const curr = t.currency || cust.currency || 'TL';
    const isMatured = item.isMatured;
    const fxApplied = t.fxApplied;
    const isSenet = (t.method === 'Müşteri Senedi' || (t.checkNo || '').toUpperCase().includes('SENET'));
    const docBadge = isSenet 
      ? '<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; padding: 2px 6px; font-size: 0.72rem; border-radius: 4px; margin-right: 4px; font-weight: 700;">SENET</span>'
      : '<span class="badge" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; padding: 2px 6px; font-size: 0.72rem; border-radius: 4px; margin-right: 4px; font-weight: 700;">ÇEK</span>';

    let liveRate = 0;
    if (curr === 'USD') liveRate = latestTcmbRates?.USD?.forexSelling || 49.0348;
    else if (curr === 'EUR') liveRate = latestTcmbRates?.EUR?.forexSelling || 55.3963;
    else liveRate = 1.0000;

    let entryRate = Number(t.entryRate || 0);
    if (entryRate <= 0 && curr !== 'TL') {
      entryRate = curr === 'EUR' ? 52.0000 : 46.5000;
    }
    const rateDiff = entryRate > 0 && liveRate > 0 ? (liveRate - entryRate) : 0;
    const estFxTL = entryRate > 0 ? Number((rateDiff * Number(t.amount || 0)).toFixed(2)) : 0;

    let statusBadge = `<span class="badge-chk-pending"><i class="fa-solid fa-clock"></i> Vadesi Bekleniyor</span>`;
    if (fxApplied) {
      statusBadge = `<span class="badge-chk-applied"><i class="fa-solid fa-check-double"></i> Kur Farkı Eklendi</span>`;
    } else if (isMatured) {
      statusBadge = `<span class="badge-chk-matured"><i class="fa-solid fa-triangle-exclamation"></i> Vadesi Geldi</span>`;
    }

    return `
      <tr>
        <td><strong>${escapeHtml(cust.name)}</strong></td>
        <td>
          <div style="display: flex; align-items: center;">
            ${docBadge}
            <strong>${escapeHtml(t.checkNo || t.ref || 'Evrak')}</strong>
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">${escapeHtml(t.checkBank || '-')}</div>
        </td>
        <td><strong>${formatDate(t.dueDate)}</strong></td>
        <td>${statusBadge}</td>
        <td><strong class="text-gold">${formatCurrency(t.amount, curr)}</strong></td>
        <td>${entryRate > 0 ? entryRate.toFixed(4) + ' ₺' : '<span class="text-muted">-</span>'}</td>
        <td>${liveRate > 0 && curr !== 'TL' ? liveRate.toFixed(4) + ' ₺' : '<span class="text-muted">-</span>'}</td>
        <td>
          ${estFxTL !== 0 ? `<strong class="${estFxTL >= 0 ? 'text-green' : 'text-red'}">${estFxTL >= 0 ? '+' : ''}${estFxTL.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺</strong>` : '<span class="text-muted">0,00 ₺</span>'}
        </td>
        <td class="text-right">
          <div style="display: flex; gap: 0.35rem; justify-content: flex-end;">
            ${!fxApplied && isMatured ? `
              <button class="btn btn-sm btn-success" onclick="openApplyFxModal('${cust.id}', '${t.id}')" title="Kur farkını hesaplayıp cariye ekle">
                <i class="fa-solid fa-calculator"></i> Farkı İşle
              </button>
            ` : (fxApplied ? `
              <button class="btn btn-sm btn-outline text-green" onclick="openApplyFxModal('${cust.id}', '${t.id}')" title="Kur farkını düzenle / yeniden hesapla">
                <i class="fa-solid fa-check"></i> Fark İşlendi
              </button>
            ` : `
              <button class="btn btn-sm btn-outline" onclick="openApplyFxModal('${cust.id}', '${t.id}')" title="Kur farkını hesapla">
                <i class="fa-solid fa-calculator"></i> Hesapla
              </button>
            `)}
            <button class="btn btn-sm btn-outline" onclick="closeModal('modalCheckPortfolio'); showLedgerDetailView('${cust.id}');" title="Müşteri cari ekstresini aç">
              <i class="fa-solid fa-book-open"></i> Cari
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  // Mobil Dokunmatik Çek Kartları
  if (mobList) {
    mobList.innerHTML = filtered.map(item => {
      const cust = item.customer;
      const t = item.txn;
      const curr = t.currency || cust.currency || 'TL';
      const isMatured = item.isMatured;
      const fxApplied = t.fxApplied;
      const isSenet = (t.method === 'Müşteri Senedi' || (t.checkNo || '').toUpperCase().includes('SENET'));
      const docBadge = isSenet 
        ? '<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; padding: 2px 6px; font-size: 0.72rem; border-radius: 4px; margin-right: 4px; font-weight: 700;">SENET</span>'
        : '<span class="badge" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; padding: 2px 6px; font-size: 0.72rem; border-radius: 4px; margin-right: 4px; font-weight: 700;">ÇEK</span>';

      let liveRate = 0;
      if (curr === 'USD') liveRate = latestTcmbRates?.USD?.forexSelling || 49.0348;
      else if (curr === 'EUR') liveRate = latestTcmbRates?.EUR?.forexSelling || 55.3963;
      else liveRate = 1.0000;

      let entryRate = Number(t.entryRate || 0);
      if (entryRate <= 0 && curr !== 'TL') {
        entryRate = curr === 'EUR' ? 52.0000 : 46.5000;
      }
      const rateDiff = entryRate > 0 && liveRate > 0 ? (liveRate - entryRate) : 0;
      const estFxTL = entryRate > 0 ? Number((rateDiff * Number(t.amount || 0)).toFixed(2)) : 0;

      return `
        <div class="mobile-check-card" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 0.9rem; margin-bottom: 0.75rem;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.4rem;">
            <div>
              <div style="display:flex; align-items:center; gap: 0.25rem;">
                ${docBadge}
                <strong style="color: #38bdf8; font-size: 0.95rem;">${escapeHtml(cust.name)}</strong>
              </div>
              <div style="font-size: 0.75rem; color: var(--text-muted); margin-top:2px;">${escapeHtml(t.checkBank || '-')} - #${escapeHtml(t.checkNo || t.ref || 'Evrak')}</div>
            </div>
            <div>
              ${fxApplied ? '<span class="badge" style="background:rgba(16,185,129,0.2); color:#10b981; font-size:0.72rem; padding:2px 6px; border-radius:4px;"><i class="fa-solid fa-check"></i> Fark İşlendi</span>' : (isMatured ? '<span class="badge" style="background:rgba(239,68,68,0.2); color:#ef4444; font-size:0.72rem; padding:2px 6px; border-radius:4px;"><i class="fa-solid fa-triangle-exclamation"></i> Vadesi Geldi</span>' : '<span class="badge" style="background:rgba(234,179,8,0.2); color:#facc15; font-size:0.72rem; padding:2px 6px; border-radius:4px;">Vadesi Bekleniyor</span>')}
            </div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; margin-bottom: 0.5rem; background: rgba(0,0,0,0.2); padding: 0.4rem 0.6rem; border-radius: 6px;">
            <span>Tutar: <strong class="text-gold">${formatCurrency(t.amount, curr)}</strong></span>
            <span>Vade: <strong>${formatDate(t.dueDate)}</strong></span>
          </div>
          ${curr !== 'TL' ? `
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
              <span>Giriş Kuru: ${entryRate > 0 ? entryRate.toFixed(4) + ' ₺' : '-'}</span>
              <span>TCMB: ${liveRate.toFixed(4)} ₺</span>
              <span>Fark: <strong class="${estFxTL >= 0 ? 'text-green' : 'text-red'}">${estFxTL >= 0 ? '+' : ''}${estFxTL.toLocaleString('tr-TR', {minimumFractionDigits:2})} ₺</strong></span>
            </div>
          ` : ''}
          <div style="display: flex; gap: 0.5rem;">
            <button type="button" class="btn btn-sm ${!fxApplied && isMatured ? 'btn-success' : 'btn-outline'}" style="flex: 1;" onclick="openApplyFxModal('${cust.id}', '${t.id}')">
              <i class="fa-solid fa-calculator"></i> ${fxApplied ? 'Farkı Düzenle' : 'Kur Farkı İşle'}
            </button>
            <button type="button" class="btn btn-sm btn-outline" onclick="closeModal('modalCheckPortfolio'); showLedgerDetailView('${cust.id}');">
              <i class="fa-solid fa-book-open"></i> Cari
            </button>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Mobil Menü Aç/Kapat
function toggleMobileDrawer() {
  const overlay = document.getElementById('mobileDrawerOverlay');
  if (overlay) overlay.classList.toggle('active');
}

function closeMobileDrawer() {
  const overlay = document.getElementById('mobileDrawerOverlay');
  if (overlay) overlay.classList.remove('active');
}

// Backup & Restore
function downloadJSONBackup() {
  const data = {
    customers: appState.customers,
    settings: appState.settings,
    exportDate: new Date().toISOString()
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
  const a = document.createElement('a');
  a.href = dataStr;
  a.download = `TekstilCari_Tam_Yedek_${getTodayDateStr()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast("Tekstil veritabanı yedeği bilgisayarınıza indirildi.", "success");
}

function restoreFromJSONFile(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const data = JSON.parse(event.target.result);
      if (data && Array.isArray(data.customers)) {
        appState.customers = data.customers;
        if (data.settings) appState.settings = Object.assign({}, appState.settings, data.settings);
      } else if (Array.isArray(data)) {
        appState.customers = data;
      } else {
        alert("Geçersiz yedek dosyası formatı!");
        return;
      }
      saveData();
      closeModal('modalBackup');
      renderDashboard();
      showToast("Tüm müşteri verileri başarıyla geri yüklendi!", "success");
    } catch (err) {
      alert("Dosya okunurken hata oluştu: " + err.message);
    }
  };
  reader.readAsText(file);
}

// Buluttan (Render) Verileri Çek & Eşitle
async function pullDataFromCloud() {
  const btn = document.getElementById('btnPullCloudData');
  const originalText = btn ? btn.innerHTML : '';
  const urlInput = document.getElementById('cloudSyncServerUrl');
  let targetUrl = urlInput ? urlInput.value.trim() : '';
  if (!targetUrl) targetUrl = localStorage.getItem('CLOUD_SERVER_URL') || 'https://ere-tekstil.onrender.com';
  if (urlInput) localStorage.setItem('CLOUD_SERVER_URL', targetUrl);

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Buluttan Çekiliyor...';
  }

  try {
    const res = await fetch('/api/sync/cloud-pull', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${appState.authToken || ''}`
      },
      body: JSON.stringify({
        cloudUrl: targetUrl,
        username: 'admin',
        password: 'tekstil2026'
      })
    });

    if (res.ok) {
      const result = await res.json();
      if (result.data && Array.isArray(result.data.customers)) {
        appState.customers = result.data.customers;
        if (result.data.settings) {
          appState.settings = Object.assign({}, appState.settings, result.data.settings);
        }
        appState.lastModified = result.lastModified || Date.now();
        saveData(false);
        applySettings();
        renderDashboard();
        closeModal('modalBackup');
        showToast(result.message || "Buluttan verileriniz başarıyla çekildi ve eşitlendi!", "success");
      }
    } else {
      const err = await res.json();
      alert("Bulut bağlantı hatası: " + (err.error || "Sunucuya erişilemedi."));
    }
  } catch (e) {
    alert("Buluttan çekme sırasında bir hata oluştu: " + e.message);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalText;
    }
  }
}

// Yerel Verileri Buluta (Render) Gönder & Eşitle
async function pushDataToCloud() {
  const btn = document.getElementById('btnPushCloudData');
  const originalText = btn ? btn.innerHTML : '';
  const urlInput = document.getElementById('cloudSyncServerUrl');
  let targetUrl = urlInput ? urlInput.value.trim() : '';
  if (!targetUrl) targetUrl = localStorage.getItem('CLOUD_SERVER_URL') || 'https://ere-tekstil.onrender.com';
  if (urlInput) localStorage.setItem('CLOUD_SERVER_URL', targetUrl);

  if (!confirm(`Bu bilgisayardaki güncel veriler canlı bulut sunucunuza (${targetUrl}) gönderilecek ve eşitlenecektir. Onaylıyor musunuz?`)) {
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Gönderiliyor...';
  }

  try {
    const res = await fetch('/api/sync/cloud-push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${appState.authToken || ''}`
      },
      body: JSON.stringify({
        cloudUrl: targetUrl,
        username: 'admin',
        password: 'tekstil2026'
      })
    });

    if (res.ok) {
      const result = await res.json();
      closeModal('modalBackup');
      showToast(result.message || "Verileriniz başarıyla canlı bulut sitesine aktarıldı!", "success");
    } else {
      const err = await res.json();
      alert("Bulut yükleme hatası: " + (err.error || "Buluta aktarılamadı."));
    }
  } catch (e) {
    alert("Buluta gönderme hatası: " + e.message);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalText;
    }
  }
}

// Otomatik Yedek Noktalarını Yükle
async function loadBackupList() {
  const container = document.getElementById('backupListContainer');
  if (!container) return;

  container.innerHTML = '<div style="padding: 0.5rem; text-align: center; color: var(--text-muted);"><i class="fa-solid fa-spinner fa-spin"></i> Yedekler taranıyor...</div>';

  try {
    const res = await fetch('/api/backups', {
      headers: { 'Authorization': `Bearer ${appState.authToken || ''}` }
    });
    if (res.ok) {
      const result = await res.json();
      const list = result.backups || [];
      if (list.length === 0) {
        container.innerHTML = '<div style="font-size: 0.8rem; color: var(--text-muted); text-align: center; padding: 0.5rem;">Henüz otomatik kayıt noktası bulunmuyor.</div>';
        return;
      }
      let html = '<div style="display: flex; flex-direction: column; gap: 0.4rem; max-height: 180px; overflow-y: auto;">';
      list.forEach(b => {
        const d = new Date(b.createdAt);
        const timeStr = d.toLocaleDateString('tr-TR') + ' ' + d.toLocaleTimeString('tr-TR');
        html += `
          <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.78rem;">
            <div>
              <strong>${escapeHtml(b.name || 'Otomatik Yedek')}</strong>
              <div style="color: var(--text-muted); font-size: 0.72rem;">${timeStr}</div>
            </div>
            <button class="btn btn-sm btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.72rem;" onclick="restoreBackupById(${b.id})">
              <i class="fa-solid fa-rotate-left"></i> Geri Dön
            </button>
          </div>
        `;
      });
      html += '</div>';
      container.innerHTML = html;
    } else {
      container.innerHTML = '<div style="font-size: 0.8rem; color: var(--text-muted); text-align: center;">Yedek listesi alınamadı.</div>';
    }
  } catch (e) {
    container.innerHTML = '<div style="font-size: 0.8rem; color: var(--text-muted); text-align: center;">Yedek listesi yüklenemedi.</div>';
  }
}

// Belirli bir otomatik yedek noktasına geri dön
async function restoreBackupById(backupId) {
  if (!confirm("Bu otomatik kayıt noktasına geri dönmek istediğinize emin misiniz? Mevcut verileriniz bu noktadaki haliyle güncellenecektir.")) {
    return;
  }
  try {
    const res = await fetch('/api/backups/restore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${appState.authToken || ''}`
      },
      body: JSON.stringify({ backupId })
    });
    if (res.ok) {
      const result = await res.json();
      if (result.data && Array.isArray(result.data.customers)) {
        appState.customers = result.data.customers;
        if (result.data.settings) {
          appState.settings = Object.assign({}, appState.settings, result.data.settings);
        }
        appState.lastModified = result.lastModified || Date.now();
        saveData(false);
        applySettings();
        renderDashboard();
        closeModal('modalBackup');
        showToast(result.message || "Yedek başarıyla geri yüklendi!", "success");
      }
    } else {
      alert("Geri yükleme başarısız oldu.");
    }
  } catch (e) {
    alert("Geri yükleme hatası: " + e.message);
  }
}

// =========================================================
// EVENT LISTENERS INITIALIZATION
// =========================================================

function initEventListeners() {
  // Navigation
  document.getElementById('btnBackToDashboard').addEventListener('click', showDashboardView);

  // Cards vs Table view toggles
  const btnCards = document.getElementById('viewToggleCards');
  const btnTable = document.getElementById('viewToggleTable');
  const gridContainer = document.getElementById('contractorCardsContainer');
  const tableWrapper = document.getElementById('contractorTableWrapper');

  btnCards.addEventListener('click', () => {
    btnCards.classList.add('active');
    btnTable.classList.remove('active');
    gridContainer.classList.remove('hide');
    tableWrapper.classList.add('hide');
  });

  btnTable.addEventListener('click', () => {
    btnTable.classList.add('active');
    btnCards.classList.remove('active');
    gridContainer.classList.add('hide');
    tableWrapper.classList.remove('hide');
  });

  // Search & Filters
  document.getElementById('searchInput').addEventListener('input', (e) => {
    appState.filterSearch = e.target.value;
    renderDashboard();
  });

  document.getElementById('statusFilter').addEventListener('change', (e) => {
    appState.filterStatus = e.target.value;
    renderDashboard();
  });

  document.getElementById('currencyFilter').addEventListener('change', (e) => {
    appState.filterCurrency = e.target.value;
    renderDashboard();
  });

  document.getElementById('btnResetFilters').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    document.getElementById('statusFilter').value = 'ALL';
    document.getElementById('currencyFilter').value = 'ALL';
    appState.filterSearch = '';
    appState.filterStatus = 'ALL';
    appState.filterCurrency = 'ALL';
    renderDashboard();
  });

  // Customer Modals Trigger
  document.getElementById('btnNewCustomer').addEventListener('click', () => openCustomerModal());
  document.getElementById('btnTabAddCustomer').addEventListener('click', () => openCustomerModal());

  // Ledger Detail View Action Triggers
  document.getElementById('btnOpenNewProductSale').addEventListener('click', () => openProductSaleModal());
  document.getElementById('btnOpenNewPaymentModal').addEventListener('click', () => openPaymentModal());
  document.getElementById('btnEditActiveContractor').addEventListener('click', () => {
    if (appState.activeDetailCustomerId) openCustomerModal(appState.activeDetailCustomerId);
  });
  document.getElementById('btnDeleteActiveContractor').addEventListener('click', () => {
    if (appState.activeDetailCustomerId) deleteCustomer(appState.activeDetailCustomerId);
  });
  document.getElementById('btnPrintStatement').addEventListener('click', openStatementPreviewModal);

  // Müşteri Ekstresi Yıl Filtresi Değişimi
  const ledgerYearSelect = document.getElementById('ledgerYearFilter');
  if (ledgerYearSelect) {
    ledgerYearSelect.addEventListener('change', (e) => {
      appState.ledgerFilterYear = e.target.value;
      const cust = appState.customers.find(c => c.id === appState.activeDetailCustomerId);
      if (cust) renderTransactionsList(cust);
    });
  }

  // Vadeli Çek Portföyü Butonu
  const btnCheckPort = document.getElementById('btnOpenCheckPortfolio');
  if (btnCheckPort) {
    btnCheckPort.addEventListener('click', openCheckPortfolioModal);
  }

  // Mobil Hamburger Menü Butonu
  const btnMobileToggle = document.getElementById('btnToggleMobileMenu');
  if (btnMobileToggle) {
    btnMobileToggle.addEventListener('click', toggleMobileDrawer);
  }

  // Tahsilat Modalında Ödeme Şekli Seçildiğinde Çek / Senet Alanlarını Aç/Kapat
  const payMethodSelect = document.getElementById('payMethod');
  if (payMethodSelect) {
    payMethodSelect.addEventListener('change', (e) => {
      const box = document.getElementById('checkDetailsBox');
      if (!box) return;
      const isDoc = (e.target.value === 'Müşteri Çeki' || e.target.value === 'Müşteri Senedi');
      if (isDoc) {
        box.style.display = 'block';
        const curr = document.getElementById('payCurrency')?.value || 'TL';
        const rateInput = document.getElementById('payCheckEntryRate');
        if (rateInput && (!rateInput.value || Number(rateInput.value) <= 0)) {
          if (curr === 'USD') rateInput.value = (latestTcmbRates?.USD?.forexSelling || 49.0348).toFixed(4);
          else if (curr === 'EUR') rateInput.value = (latestTcmbRates?.EUR?.forexSelling || 55.3963).toFixed(4);
        }
      } else {
        box.style.display = 'none';
      }
    });
  }

  // Para Birimi Değiştiğinde Canlı Kuru Otomatik Yenile
  const payCurrencySelect = document.getElementById('payCurrency');
  if (payCurrencySelect) {
    payCurrencySelect.addEventListener('change', (e) => {
      const methodVal = document.getElementById('payMethod')?.value;
      const isDoc = (methodVal === 'Müşteri Çeki' || methodVal === 'Müşteri Senedi');
      if (isDoc) {
        const curr = e.target.value;
        const rateInput = document.getElementById('payCheckEntryRate');
        if (rateInput) {
          if (curr === 'USD') rateInput.value = (latestTcmbRates?.USD?.forexSelling || 49.0348).toFixed(4);
          else if (curr === 'EUR') rateInput.value = (latestTcmbRates?.EUR?.forexSelling || 55.3963).toFixed(4);
          else rateInput.value = '';
        }
      }
    });
  }

  // Top Nav Actions
  document.getElementById('btnExportExcel').addEventListener('click', exportToExcelCSV);
  document.getElementById('btnBackupData').addEventListener('click', () => openModal('modalBackup'));
  document.getElementById('btnDownloadBackup').addEventListener('click', downloadJSONBackup);

  // Share Modal
  const btnShare = document.getElementById('btnShareNetwork');
  if (btnShare) {
    btnShare.addEventListener('click', () => openModal('modalShare'));
  }
  const btnCopyLan = document.getElementById('btnCopyLanUrl');
  if (btnCopyLan) {
    btnCopyLan.addEventListener('click', () => {
      const input = document.getElementById('shareLanUrl');
      if (input) {
        input.select();
        navigator.clipboard.writeText(input.value).then(() => {
          showToast("Ağ bağlantı adresi kopyalandı! Ofisteki arkadaşlarınıza iletebilirsiniz.", "success");
        }).catch(() => {
          document.execCommand('copy');
          showToast("Ağ adresi kopyalandı!", "success");
        });
      }
    });
  }

  // TCMB Widget & Modal Dinleyicileri
  const tcmbWidget = document.getElementById('tcmbRatesWidget');
  if (tcmbWidget) {
    tcmbWidget.addEventListener('click', (e) => {
      if (e.target.closest('#btnRefreshTcmbRates')) return;
      openModal('modalTcmbDetails');
    });
  }
  const btnRefreshRates = document.getElementById('btnRefreshTcmbRates');
  if (btnRefreshRates) {
    btnRefreshRates.addEventListener('click', (e) => {
      e.stopPropagation();
      fetchTCMBRates(true);
    });
  }
  const btnModalRefreshRates = document.getElementById('btnModalRefreshRates');
  if (btnModalRefreshRates) {
    btnModalRefreshRates.addEventListener('click', () => fetchTCMBRates(true));
  }

  // Hızlı Döviz Çevirici Dinleyicileri
  const convAmount = document.getElementById('convAmount');
  if (convAmount) convAmount.addEventListener('input', updateCurrencyConversion);
  const convCurrency = document.getElementById('convCurrency');
  if (convCurrency) convCurrency.addEventListener('change', updateCurrencyConversion);

  // 7/24 Bulut Modal Dinleyicileri
  const btnOpenCloud = document.getElementById('btnOpenCloudModal');
  if (btnOpenCloud) {
    btnOpenCloud.addEventListener('click', () => {
      openModal('modalCloudSync');
      const shareInput = document.getElementById('shareLanUrl');
      const cloudInput = document.getElementById('cloudModalLanUrl');
      if (shareInput && cloudInput) {
        cloudInput.value = shareInput.value;
      }
    });
  }
  const btnCopyCloudLan = document.getElementById('btnCopyCloudLanUrl');
  if (btnCopyCloudLan) {
    btnCopyCloudLan.addEventListener('click', () => {
      const input = document.getElementById('cloudModalLanUrl');
      if (input) {
        input.select();
        navigator.clipboard.writeText(input.value).then(() => {
          showToast("Ağ bağlantı adresi kopyalandı!", "success");
        }).catch(() => {
          document.execCommand('copy');
          showToast("Ağ adresi kopyalandı!", "success");
        });
      }
    });
  }
  const btnQuickBackup = document.getElementById('btnQuickBackupDownload');
  if (btnQuickBackup) {
    btnQuickBackup.addEventListener('click', downloadJSONBackup);
  }
  const btnOpenCloudGuide = document.getElementById('btnOpenCloudGuideModal');
  if (btnOpenCloudGuide) {
    btnOpenCloudGuide.addEventListener('click', () => {
      alert("☁️ 7/24 Ücretsiz Bulut Sunucu Kurulumu (Render.com):\n\n1. github.com'a girip ücretsiz bir hesap açın ve 'New Repository' diyerek projedeki dosyaları yükleyin.\n2. render.com'a girip GitHub hesabınızla giriş yapın ve 'New Web Service' deyin.\n3. Reponuzu seçip 'Create Web Service' butonuna basın.\n\nSadece 60 saniyede https://firmaniz.onrender.com canlı adresiniz hazır olur! Bilgisayarınızı kapatsanız bile sistem 7/24 çalışır.\n\nDetaylı adım adım kılavuz proje klasörünüzdeki BULUT_KURULUM_REHBERI.md dosyasındadır.");
    });
  }

  // Backup Import & Reset
  const fileImportInput = document.getElementById('fileImportBackup');
  document.getElementById('btnTriggerFileImport').addEventListener('click', () => fileImportInput.click());
  fileImportInput.addEventListener('change', restoreFromJSONFile);

  document.getElementById('btnLoadSampleData').addEventListener('click', () => {
    if (confirm("Örnek tekstil müşteri portföyü yüklensin mi?")) {
      appState.customers = JSON.parse(JSON.stringify(INITIAL_TEXTILE_CUSTOMERS));
      appState.activeCustomerId = 'ALL';
      saveData();
      closeModal('modalBackup');
      renderDashboard();
      showToast("Örnek tekstil müşteri verileri yüklendi!", "info");
    }
  });

  document.getElementById('btnClearAllData').addEventListener('click', () => {
    if (confirm("DİKKAT: Tüm müşteriler, siparişler ve ödemeler silinecektir! Emin misiniz?")) {
      appState.customers = [];
      appState.activeCustomerId = 'ALL';
      saveData();
      closeModal('modalBackup');
      showDashboardView();
      showToast("Tüm müşteri verileri temizlendi.", "danger");
    }
  });

  // Transaction Filter Tabs in Ledger
  document.querySelectorAll('.txn-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.txn-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      appState.txnFilterType = e.target.dataset.type;

      const customer = appState.customers.find(c => c.id === appState.activeDetailCustomerId);
      if (customer) renderTransactionsList(customer);
    });
  });

  // Modal Closers
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modalId = e.currentTarget.getAttribute('data-close');
      closeModal(modalId);
    });
  });

  document.querySelectorAll('.modal').forEach(m => {
    m.addEventListener('click', (e) => {
      if (e.target === m) closeModal(m.id);
    });
  });

  // Form Submit: Customer
  document.getElementById('formCustomer').addEventListener('submit', (e) => {
    e.preventDefault();
    const editId = document.getElementById('editCustomerId').value;
    const name = document.getElementById('custName').value.trim();
    const currency = document.getElementById('custCurrency').value;
    const contactPerson = document.getElementById('custContactPerson').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const notes = document.getElementById('custNotes').value.trim();

    if (editId) {
      const c = appState.customers.find(x => x.id === editId);
      if (c) {
        c.name = name;
        c.currency = currency;
        c.contactPerson = contactPerson;
        c.phone = phone;
        c.address = address;
        c.notes = notes;
        showToast(`"${name}" müşteri bilgileri güncellendi!`, 'success');
      }
    } else {
      const newCust = {
        id: 'cust_' + Date.now(),
        name,
        currency,
        contactPerson,
        phone,
        address,
        notes,
        transactions: []
      };
      appState.customers.unshift(newCust);
      appState.activeCustomerId = newCust.id;
      showToast(`Yeni müşteri "${name}" eklendi ve sekmesi açıldı!`, 'success');
    }

    saveData();
    closeModal('modalCustomer');
    if (appState.activeDetailCustomerId) {
      renderLedgerDetail();
    } else {
      renderDashboard();
    }
  });

  // Live Price Calculation Listeners in Product Sale Modal
  const inpQty = document.getElementById('saleQuantity');
  const inpPrice = document.getElementById('saleUnitPrice');
  const selUnit = document.getElementById('saleUnit');
  const selCurr = document.getElementById('saleCurrency');

  if (inpQty) inpQty.addEventListener('input', updateLiveSaleCalculation);
  if (inpPrice) inpPrice.addEventListener('input', updateLiveSaleCalculation);
  if (selUnit) selUnit.addEventListener('change', updateLiveSaleCalculation);
  if (selCurr) selCurr.addEventListener('change', updateLiveSaleCalculation);

  // Form Submit: Product Sale / Shipment
  document.getElementById('formProductSale').addEventListener('submit', (e) => {
    e.preventDefault();
    const customerId = document.getElementById('saleCustomerId').value;
    const editTxnId = document.getElementById('editSaleTxnId').value;
    const productName = document.getElementById('saleProductName').value.trim();
    const date = document.getElementById('saleDate').value;
    const quantity = parseFloat(document.getElementById('saleQuantity').value) || 0;
    const unit = document.getElementById('saleUnit').value;
    const unitPrice = parseFloat(document.getElementById('saleUnitPrice').value) || 0;
    const currency = document.getElementById('saleCurrency').value;
    const invoiceNo = document.getElementById('saleInvoiceNo').value.trim();
    const description = document.getElementById('saleDescription').value.trim();
    const amount = quantity * unitPrice;

    const customer = appState.customers.find(c => c.id === customerId);
    if (!customer) return;

    if (!customer.transactions) customer.transactions = [];

    if (editTxnId) {
      const txn = customer.transactions.find(t => t.id === editTxnId);
      if (txn) {
        txn.productName = productName;
        txn.date = date;
        txn.quantity = quantity;
        txn.unit = unit;
        txn.unitPrice = unitPrice;
        txn.currency = currency;
        txn.amount = amount;
        txn.invoiceNo = invoiceNo;
        txn.description = description;
        showToast(`"${productName}" sevkiyatı güncellendi!`, 'success');
      }
    } else {
      const newTxn = {
        id: 'tx_' + Date.now(),
        type: 'SHIPMENT',
        productName,
        date,
        quantity,
        unit,
        unitPrice,
        currency,
        amount,
        invoiceNo,
        description
      };
      customer.transactions.push(newTxn);
      showToast(`${quantity.toLocaleString('tr-TR')} ${unit} "${productName}" sevkiyatı kaydedildi!`, 'success');
    }

    saveData();
    closeModal('modalProductSale');
    if (appState.activeDetailCustomerId === customerId) {
      renderLedgerDetail();
    } else {
      renderDashboard();
    }
  });

  // Form Submit: Payment / Collection (Vadeli Çek ve Otomatik Kur Farkı Entegrasyonu ile)
  document.getElementById('formPayment').addEventListener('submit', (e) => {
    e.preventDefault();
    const customerId = document.getElementById('payCustomerId').value;
    const editTxnId = document.getElementById('editPayTxnId').value;
    const amount = parseFloat(document.getElementById('payAmount').value) || 0;
    const currency = document.getElementById('payCurrency').value;
    const date = document.getElementById('payDate').value;
    const method = document.getElementById('payMethod').value;
    let ref = document.getElementById('payRef').value.trim();
    const description = document.getElementById('payDescription').value.trim();

    // Çek ve Senet alanları (SADECE vadeli evraklar için geçerlidir)
    const isCheck = (method === 'Müşteri Çeki');
    const isSenet = (method === 'Müşteri Senedi');
    const isForwardDoc = (isCheck || isSenet);
    const checkNo = document.getElementById('payCheckNo')?.value.trim() || '';
    const checkBank = document.getElementById('payCheckBank')?.value.trim() || '';
    const dueDate = document.getElementById('payCheckDueDate')?.value || '';
    const entryRate = parseFloat(document.getElementById('payCheckEntryRate')?.value) || 0;
    const autoFx = document.getElementById('payCheckAutoFx')?.checked ?? true;

    if (isForwardDoc && checkNo && !ref) {
      const docLabel = isSenet ? 'Senet' : 'Çek';
      ref = `#${checkNo} (${checkBank || docLabel}) - Vade: ${formatDate(dueDate)}`;
    }

    const customer = appState.customers.find(c => c.id === customerId);
    if (!customer) return;

    if (!customer.transactions) customer.transactions = [];

    if (editTxnId) {
      const txn = customer.transactions.find(t => t.id === editTxnId);
      if (txn) {
        txn.amount = amount;
        txn.currency = currency;
        txn.date = date;
        txn.method = method;
        txn.ref = ref;
        txn.description = description;
        if (isForwardDoc) {
          txn.isCheck = isCheck;
          txn.isSenet = isSenet;
          txn.isCash = false;
          txn.checkNo = checkNo;
          txn.checkBank = checkBank;
          txn.dueDate = dueDate;
          txn.entryRate = entryRate;
          txn.autoFx = autoFx;
        } else {
          // Nakit, Havale, POS ödemeleri kesinlikle çek/senet DEĞİLDİR
          txn.isCheck = false;
          txn.isSenet = false;
          txn.isCash = true;
          delete txn.checkNo;
          delete txn.checkBank;
          delete txn.dueDate;
          delete txn.entryRate;
          delete txn.autoFx;
          delete txn.fxApplied;
          delete txn.fxAmount;
          delete txn.fxTxId;
          delete txn.maturedRate;
          delete txn.fxAppliedDate;
        }
        showToast("Tahsilat kaydı güncellendi!", 'success');
      }
    } else {
      const newTxn = {
        id: 'tx_' + Date.now(),
        type: 'PAYMENT',
        productName: '',
        date,
        amount,
        currency,
        method,
        ref,
        description,
        isCheck: isCheck,
        isSenet: isSenet,
        isCash: !isForwardDoc
      };

      if (isForwardDoc) {
        newTxn.checkNo = checkNo;
        newTxn.checkBank = checkBank;
        newTxn.dueDate = dueDate;
        newTxn.entryRate = entryRate;
        newTxn.autoFx = autoFx;
        newTxn.fxApplied = false;
        newTxn.fxAmount = 0;
      }

      customer.transactions.push(newTxn);
      showToast(`${formatCurrency(amount, currency)} tutarındaki tahsilat kaydedildi!`, 'success');
    }

    saveData();
    closeModal('modalPayment');

    if (appState.activeDetailCustomerId === customerId) {
      renderLedgerDetail();
    } else {
      renderDashboard();
    }
  });

  // Settings & Theme Event Listeners
  const btnSettings = document.getElementById('btnOpenSettings');
  if (btnSettings) {
    btnSettings.addEventListener('click', () => openSettingsModalTab('brand'));
  }

  document.querySelectorAll('.settings-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.settings-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.settings-pane').forEach(p => p.classList.remove('active'));

      e.currentTarget.classList.add('active');
      const targetId = e.currentTarget.dataset.target;
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  document.querySelectorAll('.theme-card').forEach(card => {
    card.addEventListener('click', () => {
      const selectedTheme = card.dataset.theme;
      applyTheme(selectedTheme);
      saveData();
      showToast("Renk teması uygulandı!", "success");
    });
  });

  // Form Submit: Brand Settings
  const formBrand = document.getElementById('formBrandSettings');
  if (formBrand) {
    formBrand.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!appState.settings) appState.settings = {};

      appState.settings.brandTitle = document.getElementById('cfgBrandTitle').value.trim();
      appState.settings.brandSubtitle = document.getElementById('cfgBrandSubtitle').value.trim();
      appState.settings.currencySymbol = document.getElementById('cfgCurrency').value;

      applySettings();
      saveData();
      closeModal('modalSettings');
      showToast("Firma ve başlık ayarları güncellendi!", "success");
      renderDashboard();
    });
  }

  // Form Submit: Custom Labels
  const formLabels = document.getElementById('formCustomLabels');
  if (formLabels) {
    formLabels.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!appState.settings) appState.settings = {};
      if (!appState.settings.customLabels) appState.settings.customLabels = {};

      const fields = [
        'kpiContract', 'kpiPaid', 'kpiRemaining', 'kpiCount',
        'colContractor', 'colRole', 'colContract', 'colPaid', 'colRemaining', 'colStatus'
      ];

      fields.forEach(f => {
        const inp = document.getElementById('lblInp_' + f);
        if (inp) appState.settings.customLabels[f] = inp.value.trim();
      });

      applySettings();
      saveData();
      closeModal('modalSettings');
      showToast("Sütun ve alan isimleri başarıyla güncellendi!", "success");
      renderDashboard();
    });
  }

  const btnResetLabels = document.getElementById('btnResetDefaultLabels');
  if (btnResetLabels) {
    btnResetLabels.addEventListener('click', () => {
      if (confirm("Tüm sütun ve alan başlıkları varsayılan tekstil isimlerine döndürülsün mü?")) {
        appState.settings.customLabels = {
          kpiContract: 'Toplam Mal Satışı (Sevk)',
          kpiPaid: 'Toplam Alınan Ödeme',
          kpiRemaining: 'Kalan Açık Bakiye (Alacak)',
          kpiCount: 'Aktif Müşteri / Firma',
          projectTabsTitle: 'Müşteriler / Firmalar:',
          sectionTitle: 'Tekstil Müşteri Cari Kartları',
          colContractor: 'Müşteri / Firma Adı',
          colRole: 'Yetkili / Temsilci',
          colProject: 'Para Birimi',
          colPhone: 'Telefon',
          colContract: 'Toplam Mal Satışı',
          colPaid: 'Alınan Ödeme',
          colRemaining: 'Kalan Bakiye',
          colStatus: 'Hesap Durumu'
        };
        applySettings();
        saveData();
        showToast("Başlıklar varsayılana sıfırlandı.", "info");
        renderDashboard();
      }
    });
  }

  // Form Submit: Hızlı İsim Değiştirme (Quick Rename)
  const formQuick = document.getElementById('formQuickRename');
  if (formQuick) {
    formQuick.addEventListener('submit', (e) => {
      e.preventDefault();
      const key = document.getElementById('quickRenameKey').value;
      const newVal = document.getElementById('quickRenameInput').value.trim();
      if (!newVal) return;

      if (!appState.settings) appState.settings = {};
      if (!appState.settings.customLabels) appState.settings.customLabels = {};

      if (key === 'displayBrandTitle') {
        appState.settings.brandTitle = newVal;
      } else if (key === 'displayBrandSubtitle') {
        appState.settings.brandSubtitle = newVal;
      } else if (key.startsWith('customer_')) {
        const cId = key.replace('customer_', '');
        const c = appState.customers.find(x => x.id === cId);
        if (c) {
          c.name = newVal;
        }
      } else if (key === 'lblKpiContract') appState.settings.customLabels.kpiContract = newVal;
      else if (key === 'lblKpiPaid') appState.settings.customLabels.kpiPaid = newVal;
      else if (key === 'lblKpiRemaining') appState.settings.customLabels.kpiRemaining = newVal;
      else if (key === 'lblKpiCount') appState.settings.customLabels.kpiCount = newVal;
      else if (key === 'lblProjectTabsTitle') appState.settings.customLabels.projectTabsTitle = newVal;
      else if (key === 'lblSectionTitle') appState.settings.customLabels.sectionTitle = newVal;
      else if (key === 'colHeader_contractor') appState.settings.customLabels.colContractor = newVal;
      else if (key === 'colHeader_role') appState.settings.customLabels.colRole = newVal;
      else if (key === 'colHeader_project') appState.settings.customLabels.colProject = newVal;
      else if (key === 'colHeader_phone') appState.settings.customLabels.colPhone = newVal;
      else if (key === 'colHeader_contract') appState.settings.customLabels.colContract = newVal;
      else if (key === 'colHeader_paid') appState.settings.customLabels.colPaid = newVal;
      else if (key === 'colHeader_remaining') appState.settings.customLabels.colRemaining = newVal;
      else if (key === 'colHeader_status') appState.settings.customLabels.colStatus = newVal;

      applySettings();
      saveData();
      closeModal('modalQuickRename');
      showToast(`"${newVal}" olarak güncellendi!`, "success");

      if (appState.activeDetailCustomerId) {
        renderLedgerDetail();
      } else {
        renderDashboard();
      }
    });
  }

  // Keyboard Escape closer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
    }
  });
}

// =========================================================
// TCMB CANLI MERKEZ BANKASI DÖVİZ KURLARI & ÇEVİRİCİ
// =========================================================

let latestTcmbRates = null;

async function fetchTCMBRates(force = false) {
  const refreshBtn = document.getElementById('btnRefreshTcmbRates');
  const modalRefreshBtn = document.getElementById('btnModalRefreshRates');
  if (refreshBtn) refreshBtn.classList.add('spinning');
  if (modalRefreshBtn) modalRefreshBtn.classList.add('spinning');

  try {
    const url = force ? '/api/rates?force=1' : '/api/rates';
    const resp = await fetch(url);
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    const data = await resp.json();

    if (data && data.rates) {
      latestTcmbRates = data.rates;
      window.latestTcmbRates = latestTcmbRates;

      // Header Widget Güncellemesi
      if (data.rates.USD) {
        const usdRate = data.rates.USD.forexSelling || data.rates.USD.banknoteSelling || 49.0348;
        const elUsd = document.getElementById('widgetUsdVal');
        if (elUsd) {
          elUsd.textContent = Number(usdRate).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 4 }) + ' ₺';
        }
      }
      if (data.rates.EUR) {
        const eurRate = data.rates.EUR.forexSelling || data.rates.EUR.banknoteSelling || 55.3963;
        const elEur = document.getElementById('widgetEurVal');
        if (elEur) {
          elEur.textContent = Number(eurRate).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 4 }) + ' ₺';
        }
      }

      // Detay Modalı Güncellemesi
      const metaEl = document.getElementById('tcmbModalMeta');
      if (metaEl) {
        metaEl.textContent = `Bülten No: ${data.bultenNo || '-'} • Tarih: ${data.date || '-'} • Son Güncelleme: ${data.updatedAt || '-'}`;
      }
      if (data.rates.USD) {
        const u = data.rates.USD;
        setRateEl('modalUsdForexSelling', u.forexSelling);
        setRateEl('modalUsdForexBuying', u.forexBuying);
        setRateEl('modalUsdBanknoteSelling', u.banknoteSelling);
        setRateEl('modalUsdBanknoteBuying', u.banknoteBuying);
      }
      if (data.rates.EUR) {
        const e = data.rates.EUR;
        setRateEl('modalEurForexSelling', e.forexSelling);
        setRateEl('modalEurForexBuying', e.forexBuying);
        setRateEl('modalEurBanknoteSelling', e.banknoteSelling);
        setRateEl('modalEurBanknoteBuying', e.banknoteBuying);
      }

      updateCurrencyConversion();
      if (force) showToast("TCMB güncel kurları başarıyla yenilendi!", "success");
    }
  } catch (err) {
    console.warn("TCMB kurları alınamadı:", err);
  } finally {
    if (refreshBtn) refreshBtn.classList.remove('spinning');
    if (modalRefreshBtn) modalRefreshBtn.classList.remove('spinning');
  }
}

function setRateEl(id, val) {
  const el = document.getElementById(id);
  if (el) {
    if (val != null) {
      el.textContent = Number(val).toLocaleString('tr-TR', { minimumFractionDigits: 4, maximumFractionDigits: 4 }) + ' ₺';
    } else {
      el.textContent = '-';
    }
  }
}

function updateCurrencyConversion() {
  const amountEl = document.getElementById('convAmount');
  const typeEl = document.getElementById('convCurrency');
  const resultEl = document.getElementById('convResultText');
  if (!amountEl || !typeEl || !resultEl) return;

  const amt = parseFloat(amountEl.value) || 0;
  const mode = typeEl.value;

  const usdRate = latestTcmbRates?.USD?.forexSelling || 49.0348;
  const eurRate = latestTcmbRates?.EUR?.forexSelling || 55.3963;

  let text = '';
  if (mode === 'USD_TO_TL') {
    const total = amt * usdRate;
    text = `${amt.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} USD × ${usdRate.toLocaleString('tr-TR', { minimumFractionDigits: 4 })} = ${total.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`;
  } else if (mode === 'EUR_TO_TL') {
    const total = amt * eurRate;
    text = `${amt.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} EUR × ${eurRate.toLocaleString('tr-TR', { minimumFractionDigits: 4 })} = ${total.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`;
  } else if (mode === 'TL_TO_USD') {
    const total = usdRate > 0 ? (amt / usdRate) : 0;
    text = `${amt.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺ ÷ ${usdRate.toLocaleString('tr-TR', { minimumFractionDigits: 4 })} = ${total.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} $`;
  } else if (mode === 'TL_TO_EUR') {
    const total = eurRate > 0 ? (amt / eurRate) : 0;
    text = `${amt.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺ ÷ ${eurRate.toLocaleString('tr-TR', { minimumFractionDigits: 4 })} = ${total.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
  }

  resultEl.textContent = text;
}

// =========================================================
// AUTHENTICATION & LOGIN MANAGEMENT
// =========================================================

async function checkAuthAndInit() {
  const userDisplay = document.getElementById('lblCurrentUsername');
  
  if (!appState.authToken) {
    showLoginScreen();
    return;
  }

  try {
    const res = await fetch('/api/auth/verify', {
      headers: {
        'Authorization': `Bearer ${appState.authToken}`
      }
    });

    if (res.ok) {
      const data = await res.json();
      if (data.authenticated) {
        appState.isAuthenticated = true;
        appState.currentUser = data.username || appState.currentUser || 'admin';
        if (userDisplay) userDisplay.textContent = appState.currentUser;
        hideLoginScreen();
        loadData();
        renderDashboard();
        fetchTCMBRates();
        return;
      }
    }
  } catch (e) {
    console.warn('Sunucu doğrulama yapılamadı, yerel oturum kullanılıyor:', e);
    // Çevrimdışı modda token varsa devam et
    if (appState.authToken) {
      appState.isAuthenticated = true;
      if (userDisplay) userDisplay.textContent = appState.currentUser || 'admin';
      hideLoginScreen();
      loadData();
      renderDashboard();
      return;
    }
  }

  // Geçersiz oturum
  showLoginScreen();
}

function showLoginScreen() {
  const overlay = document.getElementById('loginScreenOverlay');
  if (overlay) {
    overlay.classList.add('active');
    const pwInput = document.getElementById('loginPassword');
    if (pwInput) {
      pwInput.value = '';
      setTimeout(() => pwInput.focus(), 150);
    }
  }
}

function hideLoginScreen() {
  const overlay = document.getElementById('loginScreenOverlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
}

async function handleLoginSubmit(e) {
  if (e) e.preventDefault();
  const unameInput = document.getElementById('loginUsername');
  const passInput = document.getElementById('loginPassword');
  const rememberInput = document.getElementById('loginRememberMe');
  const errorAlert = document.getElementById('loginErrorMsg');
  const errorText = document.getElementById('loginErrorText');
  const btnSubmit = document.getElementById('btnLoginSubmit');

  const username = (unameInput ? unameInput.value : '').trim();
  const password = (passInput ? passInput.value : '').trim();

  if (!username || !password) {
    if (errorAlert) {
      errorAlert.style.display = 'flex';
      errorText.textContent = 'Lütfen kullanıcı adı ve şifrenizi giriniz.';
    }
    return;
  }

  if (btnSubmit) {
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Giriş Yapılıyor...';
  }

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    if (res.ok && data.success) {
      appState.authToken = data.token;
      appState.currentUser = data.username;
      appState.isAuthenticated = true;

      if (rememberInput && rememberInput.checked) {
        localStorage.setItem(AUTH_TOKEN_KEY, data.token);
        localStorage.setItem(AUTH_USER_KEY, data.username);
      } else {
        sessionStorage.setItem(AUTH_TOKEN_KEY, data.token);
        sessionStorage.setItem(AUTH_USER_KEY, data.username);
      }

      const userDisplay = document.getElementById('lblCurrentUsername');
      if (userDisplay) userDisplay.textContent = data.username;

      if (errorAlert) errorAlert.style.display = 'none';
      hideLoginScreen();
      showToast(`Hoş geldiniz Sayın ${data.username}! Sisteme giriş yapıldı.`, 'success');

      loadData();
      renderDashboard();
      fetchTCMBRates();
    } else {
      if (errorAlert) {
        errorAlert.style.display = 'flex';
        errorText.textContent = data.error || 'Kullanıcı adı veya şifre hatalı!';
      }
      if (passInput) {
        passInput.value = '';
        passInput.focus();
      }
    }
  } catch (err) {
    if (errorAlert) {
      errorAlert.style.display = 'flex';
      errorText.textContent = 'Sunucuya bağlanılamadı. Lütfen sunucunun açık olduğundan emin olun.';
    }
  } finally {
    if (btnSubmit) {
      btnSubmit.disabled = false;
      btnSubmit.innerHTML = '<i class="fa-solid fa-arrow-right-to-bracket"></i> Sisteme Güvenli Giriş Yap';
    }
  }
}

async function handleLogout() {
  if (confirm('Oturumu kapatıp çıkış yapmak istediğinize emin misiniz?')) {
    try {
      if (appState.authToken) {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${appState.authToken}`
          }
        });
      }
    } catch (e) {}

    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    sessionStorage.removeItem(AUTH_USER_KEY);
    appState.authToken = null;
    appState.currentUser = null;
    appState.isAuthenticated = false;

    showToast('Oturum güvenli bir şekilde kapatıldı.', 'info');
    showLoginScreen();
  }
}

async function handleChangePasswordSubmit(e) {
  if (e) e.preventDefault();
  const oldPw = document.getElementById('pwdOld').value.trim();
  const newPw = document.getElementById('pwdNew').value.trim();
  const confirmPw = document.getElementById('pwdNewConfirm').value.trim();
  const btn = document.getElementById('btnSubmitChangePw');

  if (newPw !== confirmPw) {
    showToast('Yeni şifreler birbiriyle uyuşmuyor!', 'warning');
    return;
  }

  if (newPw.length < 4) {
    showToast('Yeni şifreniz en az 4 karakter olmalıdır.', 'warning');
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Kaydediliyor...';
  }

  try {
    const res = await fetch('/api/auth/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${appState.authToken}`
      },
      body: JSON.stringify({ oldPassword: oldPw, newPassword: newPw })
    });

    const result = await res.json();
    if (res.ok && result.success) {
      showToast(result.message || 'Şifreniz başarıyla değiştirildi!', 'success');
      document.getElementById('formChangePassword').reset();
      closeModal('modalSettings');
    } else {
      showToast(result.error || 'Mevcut şifre hatalı!', 'error');
    }
  } catch (err) {
    showToast('Şifre güncellenirken sunucu hatası oluştu.', 'error');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-save"></i> Şifreyi Güncelle';
    }
  }
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    if (btn) btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
  } else {
    input.type = 'password';
    if (btn) btn.innerHTML = '<i class="fa-solid fa-eye"></i>';
  }
}

// Global Scope Bindings (Tüm onclick öğelerinin kesintisiz çalışması için)
window.selectCustomerTab = selectCustomerTab;
window.openQuickRename = openQuickRename;
window.showDashboardView = showDashboardView;
window.showLedgerDetailView = showLedgerDetailView;
window.openProductSaleModal = openProductSaleModal;
window.openPaymentModal = openPaymentModal;
window.openCustomerModal = openCustomerModal;
window.deleteCustomer = deleteCustomer;
window.editTransaction = editTransaction;
window.deleteTransaction = deleteTransaction;
window.openStatementPreviewModal = openStatementPreviewModal;
window.downloadStatementPDF = downloadStatementPDF;
window.printStatementDirectly = printStatementDirectly;
window.prepareAndPrintStatement = openStatementPreviewModal; // Geriye dönük uyumluluk
window.openCheckPortfolioModal = openCheckPortfolioModal;
window.filterCheckPortfolio = filterCheckPortfolio;
window.processMaturedChecks = processMaturedChecks;
window.processAllMaturedChecks = processAllMaturedChecks;
window.openApplyFxModal = openApplyFxModal;
window.recalculateFxModal = recalculateFxModal;
window.commitFxToCustomer = commitFxToCustomer;
window.setDashboardYearFilter = setDashboardYearFilter;
window.toggleMobileDrawer = toggleMobileDrawer;
window.closeMobileDrawer = closeMobileDrawer;
window.exportToExcelCSV = exportToExcelCSV;
window.openModal = openModal;
window.closeModal = closeModal;
window.applyTheme = applyTheme;
window.applySettings = applySettings;
window.saveData = saveData;
window.renderDashboard = renderDashboard;
window.renderLedgerDetail = renderLedgerDetail;
window.openSettingsModalTab = openSettingsModalTab;
window.fetchTCMBRates = fetchTCMBRates;
window.updateCurrencyConversion = updateCurrencyConversion;
window.handleLoginSubmit = handleLoginSubmit;
window.handleLogout = handleLogout;
window.handleChangePasswordSubmit = handleChangePasswordSubmit;
window.togglePasswordVisibility = togglePasswordVisibility;
window.showLoginScreen = showLoginScreen;
window.hideLoginScreen = hideLoginScreen;
window.pullDataFromCloud = pullDataFromCloud;
window.pushDataToCloud = pushDataToCloud;
window.loadBackupList = loadBackupList;
window.restoreBackupById = restoreBackupById;

// Initial Boot
document.addEventListener('DOMContentLoaded', async () => {
  initEventListeners();
  checkAuthAndInit();

  // Kayıtlı bulut URL'si varsa input alanına doldur
  const savedCloudUrl = localStorage.getItem('CLOUD_SERVER_URL');
  if (savedCloudUrl) {
    const inp = document.getElementById('cloudSyncServerUrl');
    if (inp) inp.value = savedCloudUrl;
  }
  
  // TCMB canlı kurlarını al
  await fetchTCMBRates(false);

  // 5 dakikada bir kurları otomatik güncelle (kur farkı arka planda sessizce işlenmez, kullanıcı onaylıdır)
  setInterval(async () => {
    await fetchTCMBRates(false);
  }, 300000);
});
