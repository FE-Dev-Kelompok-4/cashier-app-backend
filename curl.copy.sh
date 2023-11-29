curl localhost:3000/api/orders \
-X POST \
-H "Content-Type: application/json" \
-d '
{
    "recipientName": "Joko",
    "totalPrice": 10,
    "menus": [
        {
        "menuId": "007f097e-41d6-4bbe-b51a-db5a30749391",
        "quantity": 2
        },
        {
        "menuId": "00a3b8b5-1b3b-4bdf-a5dc-5b3e8920ced9",
        "quantity": 1
        }
    ]
}
'
