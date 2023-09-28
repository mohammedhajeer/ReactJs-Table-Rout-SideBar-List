export const ProductService = {
    getProductsData() {
        return [
            {
                id: 1,
                Pname: 'Sport Shose',
                status: 'In review',
                dueData: 'Mon 9',
                brand: 'Nike',
                brandImg: 'https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png',
                ptype: 1,
                members: ['https://assets.website-files.com/619e8d2e8bd4838a9340a810/647c10640a3ea753d88b9748_profile-picture-hero-img-p-800.webp', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
                actions: '...'
            },
            {
                id: 2,
                Pname: 'Short',
                status: 'Approved',
                dueData: 'Thu 15',
                brand: 'Polo',
                brandImg: 'https://www.sunshineplaza.com/contentassets/7597cf95547746f8b5574b8d5393930f/images/prl_logo_300x300.jpg?width=300&height=400&upscale=false&mode=max&quality=80',
                ptype: 2,
                members: ['https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp','https://instasize.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmunkee%2Fimage%2Fupload%2Fw_1000%2Cc_fill%2Car_1%3A1%2Cg_auto%2Cr_max%2Fv1681855894%2Finstasize-website%2Flearn%2Fblonde-woman-selfie-instagram-influencer.webp&w=640&q=75'],
                actions: '...'
            },
            {
                id: 3,
                Pname: 'Hat',
                status: 'In review',
                dueData: 'Mon 21',
                brand: 'Adiddas',
                brandImg: 'https://thumbs.dreamstime.com/z/adidas-logo-editorial-illustrative-white-background-adidas-logo-editorial-illustrative-white-background-eps-download-vector-208329055.jpg?w=768',
                ptype: 3,
                members: ['https://designimages.appypie.com/profilepicture/profilepicture-8-smile-head.jpg','https://leadership.ng/wp-content/uploads/2023/03/davido.png'],
                actions: '...'
            },
            {
                id: 4,
                Pname: 'Glass',
                status: 'Cancelled',
                dueData: 'Sat 11',
                brand: 'Lacost',
                brandImg: 'https://1000logos.net/wp-content/uploads/2021/05/Lacoste-logo.png',
                ptype: 4,
                members: ['https://designimages.appypie.com/profilepicture/profilepicture-5-portrait-photography.jpg', 'https://designimages.appypie.com/profilepicture/profilepicture-11-face-head.jpg'],
                actions: '...'
            },


        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

