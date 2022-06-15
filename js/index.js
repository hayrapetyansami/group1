"use strict";

const app = {
    restaurantDetails: [
        {address: "Երևան, Թումանյան 14"},
        {telNumber:"015 12-23-45"},
        {mail: "info@template.am"},
        {fasebook: "https://facebook.com/"},
        {instagram: "https://instagram.com/"},
        {type: "Ռեստորան"},
        {isDelivery : true},
        {isOpen: true}
    ],
    restaurantStaff: [
        {security: "Էդգար Գեվորգյան"},
        {security: "Արսեն Ավագյան"},
        {waiter: "Մելքոն Դանիելյան"},
        {waiter: "Ալիսա Պողոսյան"},
        {waiter: "Նելլի Դավթյան"},
        {waiter: "Քրիստինե Արսենյան"},
        {barman: "Տիգրան Ռուբենյան"},
        {barman: "Անի Առուստամյան"},
        {cook: "Կարինե Տոնոյան"},
        {cook: "Արտակ Ադամյան"},
        {administrator: "Լիկա Ավագյանց"},
        {courier: "Սամսոն Խաչատրյան"},
        {hostess: "Ալիսա Սուրենյանց"},
        {customer: "Մանե Սարգսյան"},
    ],
    restaurantMenu: [
        {
            type: "Տաք ուտեստներ",
            item1: "Խոզի Խորոված",
            item2: "Հավի Խորովաս",
            item3: "Ճտի Տապակա ֆրիով",
            item4: "Ձկան Խորոված",
            item5: "Թփով Տոլմա",
            item6: "Կաղամբով Տոլմա",
            item7: "Քյուֆթա",
        },
        {
            type: "Աղցաններ",
            item1: "Մայրաքաղաքային",
            item2: "Հունական",
            item3: "Ամառյին",
            item4: "Ցեզար",
            item5: "Վինեգրեդ",
            item6: "Խեցգետնով",
            item7: "Բազուկով",
        },
        {
            type: "Ալկոհոլային Խմիչքներ",
            item1: "Օղի",
            item2: "Գինի",
            item3: "Կոնյակ",
            item4: "Վիսկի",
            item5: "Լիկյոր",
            item6: "Տեկիլա",
            item7: "Ռոմ",
        },
        {
            type: "Հյութեր և Զովացուցիչ Ըմպելիքներ",
            item1: "Տնական Կոմպոտ",
            item2: "Կոկա-Կոլա",
            item3: "Ֆանտա",
            item4: "Սփրայթ",
            item5: "Սեվըն Ափ",
            item6: "Թան",
            item7: "Լիմոնադ",
        },
        {
            type: "Խմորեղեններ",
            item1: "Միկադո",
            item2: "Սնիկերս",
            item3: "Տղամարդու Իդեալ",
            item4: "Տիրամիսու",
            item5: "Շոկոլադե",
            item6: "Մրգային",
            item7: "Բրաունի",
        }
    ],

    isOpened(end) {
        if (end >= 10) {
            app.restaurantDetails[7].isOpen = false;
        }
    },

    callCenter(address, telNumber, isDelivery, isOpen, type) {
        return `
            Բարև Ձեզ, Ձեզ սպասարկում է ${app.restaurantStaff[13].customer}ը
            Մեր հասցեն է ${address = app.restaurantDetails[0].address}
            ${telNumber = app.restaurantDetails[1].telNumber !== undefined ? "Մեր Հեռախոսահամարն է " + app.restaurantDetails[1].telNumber : "Կներեք, մենք չունենք հեռախոսահամար"}
            ${isDelivery = app.restaurantDetails[6].isDelivery === true ? "Այո, կարող ենք իրականացնել Ձեր առաքումը" : "Կներեք, բայց մեր առաքիչը զբաղված է, պետք է դուք մոտենաք"}
            ${isOpen = app.restaurantDetails[7].isOpen === true ? "Այո, ներկա պահին մենք բաց ենք" : "Ոչ, կներեք մենք փակ ենք"}
            Մենք ներկայացնում ենք ${type = app.restaurantDetails[5].type}
        `;
    }
};

app.isOpened(10);
const client = app.callCenter();

console.log(client);