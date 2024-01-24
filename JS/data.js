const user = {
    name: 'Nome Utente',
    avatar: '_io'
};

const contacts = [
    {
        id: 1,
        name: 'Michele',
        avatar: '_1',
        messages: [
            {
                id: 1,
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                id: 2,
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                id: 3,
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
            }
        ]
    },
    {
        id: 2,
        name: 'Fabio',
        avatar: '_2',
        messages: [
            {
                id: 1,
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
            },
            {
                id: 2,
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                id: 3,
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ]
    },
    // ... (continua con gli altri contatti)
];


