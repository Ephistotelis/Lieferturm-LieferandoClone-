//amount adden, jeweilige gerichte zu json machen umd price, info zu adden


let sellerList = [{
        "name": "Prontonio Pizza",
        "adress": "Musterstraße 69, 12345 Musterstadt",
        "dishCategorie": ["Besondere Gerichte", "Pizza", "Salate"],
        "CategorieDishes": [{
                "dish": ["Pizza Margherita*", "Feldsalat*", "Pizza Quattro Stagioni*"],
                "price": [14, 16, 17],
                "amount": [0, 0, 0],
                "currentPrice": [0, 0, 0],
                "description": ["*Mit extra viel Belag!", "*Mit extra viel Belag!", "*Mit extra viel Belag!"]
            },
            {
                "dish": ["Pizza Margherita", "Pizza Salami", "Pizza Quattro Stagioni", "Pizza Sucuk"],
                "price": [12, 14, 15, 4],
                "amount": [0, 0, 0, 0],
                "currentPrice": [0, 0, 0, 0],
                "description": ["des 1", "des 2", "des 3", "des 4"]
            },
            {
                "dish": ["Feldsalat", "Salat de Cucamber", "Hirtensalat"],
                "price": [14, 6, 8],
                "amount": [0, 0, 0],
                "currentPrice": [0, 0, 0],
                "description": ["des 1", "des 2", "des 3"]
            }
        ],
        "sellerInfo": {
            "deliveryTime": "10-35min",
            "deliveryCosts": 4.50,
            "minOrderValue": 15.50,
            "sellerDescription": "Dieses Restaurant bietet tolle Pizza an!"
        }
    },
    {
        "name": "Pasta Taxi",
        "adress": "Musterstraße 78, 54321 Musterstadt",
        "dishCategorie": ["Besondere Gerichte", "Pasta", "Salate"],
        "CategorieDishes": [{
                "dish": ["Pasta Fungi*", "Feldsalat*", "Pasta Sucuk*"],
                "price": [18, 10, 7],
                "amount": [0, 0, 0],
                "currentPrice": [0, 0, 0],
                "description": ["*Mit extra viel Belag!", "*Mit extra viel Belag!", "*Mit extra viel Belag!"]
            },
            {
                "dish": ["Pasta Fungi", "Pasta con Pasta", "Pasta Sucuk", "Pasta con Tuna"],
                "price": [16, 3, 5, 1],
                "amount": [0, 0, 0, 0],
                "currentPrice": [0, 0, 0, 0],
                "description": ["des 1", "des 2", "des 3", "des 4"]
            },
            {
                "dish": ["Feldsalat", "Salat de Cucamber", "Hirtensalat"],
                "price": [8, 15, 11],
                "amount": [0, 0, 0],
                "currentPrice": [0, 0, 0],
                "description": ["des 1", "des 2", "des 3"]
            }
        ],
        "sellerInfo": {
            "deliveryTime": "20-40min",
            "deliveryCosts": 2.50,
            "minOrderValue": 20.00,
            "sellerDescription": "Dieses Restaurant bietet tolle Pasta an!"
        }
    }
]