const documentStyle = getComputedStyle(document.documentElement);

export const DashInfo = [
    {
        title: 'Todays sales',
        range: '2,455',
        chartRange: '5',
        options:{
            cutout: '75%'
        }, 
        data :{
            datasets: [
                {
                    data: [300, 80],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--green-100')
                    ],

                }
            ]
        }
    },
    {
        title: 'New Products',
        range: '221',
        chartRange: '9',
        options:{
            cutout: '75%'
        },
        data :{
            datasets: [ 
                {
                    data: [50, 90],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--red-500'),
                        documentStyle.getPropertyValue('--red-100')
                    ],

                }
            ]
        }
    },
    {
        title: 'Inventory',
        range: '1,455',
        chartRange: '7',
        options:{
            cutout: '75%'
        },
        data :{
            datasets: [
                {
                    data: [90, 90],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'),
                        documentStyle.getPropertyValue('--blue-100')
                    ],

                }
            ]
        }
    },
]