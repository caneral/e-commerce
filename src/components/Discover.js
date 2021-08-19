import React from 'react'

const Discover = () => {
    const products = [
        {
            productPrice: '39,90',
            productImage: 'https://productimages.hepsiburada.net/s/47/320-320/10916041916466.jpg',
            productOldPrice: '50,00',
            discount: 'Sepette %33 İndirimli Fiyat',
            description: 'Vip Gross Katlanır Mutfak Seti 4 Parça Huni Süzgeç Seti'
        },
        {
            productPrice: '29,99',
            productImage: 'https://productimages.hepsiburada.net/s/83/320-320/110000025337110.jpg',
            productOldPrice: '30,00',
            discount:'',
            description: 'Narpump Şarjlı Otomatik Damacana Su Pompası'
        },
        {
            productPrice: '104,80',
            productImage: 'https://productimages.hepsiburada.net/s/6/320-320/9742125105202.jpg',
            productOldPrice: '210,00',
            discount:'',
            description: 'Nehir Sahra 5 Parça Kepçe Kevgir Takımı'
        },
        {
            productPrice: '29,99',
            productImage: 'https://productimages.hepsiburada.net/s/40/320-320/10652038234162.jpg',
            productOldPrice: '30,00',
            discount:'Sepette %25 İndirimli Fiyat',
            description: 'Narpump Şarjlı Otomatik Damacana Su Pompası'
        },{
            productPrice: '42,49',
            productImage: 'https://productimages.hepsiburada.net/s/87/320-320/110000029940301.jpg',
            productOldPrice: '45,00',
            discount:'',
            description: 'Seffa Içli Köfte Aparatı'
        },{
            productPrice: '116,10',
            productImage: 'https://productimages.hepsiburada.net/s/39/320-320/10607200305202.jpg',
            productOldPrice: '120,00',
            discount:'',
            description: 'Hassel Salça Makinası Ev Tipi'
        },{
            productPrice: '198,90',
            productImage: 'https://productimages.hepsiburada.net/s/75/320-320/110000017368438.jpg',
            productOldPrice: '221,00',
            discount:'',
            description: 'Emsan Rack Tost Grill'
        },{
            productPrice: '89,10',
            productImage: 'https://productimages.hepsiburada.net/s/31/320-320/10323698516018.jpg',
            productOldPrice: '90,00',
            discount:'',
            description: 'Nicer Dicer Plus Pratik Doğrayıcı'
        },{
            productPrice: '89,00',
            productImage: 'https://productimages.hepsiburada.net/s/35/320-320/10459553988658.jpg',
            productOldPrice: '140,00',
            discount:'',
            description: 'Narpump Çift Motorlu Şarjlı Otomatik Damacana Su...'
        },{
            productPrice: '85,50',
            productImage: 'https://productimages.hepsiburada.net/s/20/320-320/9881075122226.jpg',
            productOldPrice: '95,00',
            discount:'',
            description: "Neva N2559 Sweet 5'Li Mutfak Gereçleri Seti -Mor"
        },{
            productPrice: '337,50',
            productImage: 'https://productimages.hepsiburada.net/s/8/320-320/8962807922738.jpg',
            productOldPrice: '376,00',
            discount:'',
            description: 'Victorinox 5.1111.6 Soyacak Seti'
        },{
            productPrice: '140,40',
            productImage: 'https://productimages.hepsiburada.net/s/18/320-320/9816520720434.jpg',
            productOldPrice: '156,00',
            discount:'',
            description: 'Leıfheıt Cherymat Vişne Çekirdeği Çıkarıcı'
        }

    ]
    return (
        <div className="max-w-6xl  mx-auto mt-12">
            <p className="font-semibold text-3xl mb-6">Keşfet</p>
            <p className="text-green-600 text-lg mb-6">Yemek Hazırlama</p>
            <div className="grid grid-cols-6 gap-y-12 gap-x-3">
                {
                    products.map((item,index)=>{
                        return(
<div className="grid grid-cols-1">
                    <div className="w-42 h-42 border rounded-md mb-1" key="index">
                        <img src={item.productImage}/>
                    </div>
                    {item.discount !== '' ? <p className="text-xs font-medium text-green-600">{item.discount}</p> : <p className="mt-2">{item.discount}</p>}
                    <p className="text-md font-medium text-green-600 mb-1">{item.productPrice} TL</p>
                    <del className="text-sm text-gray-400">{item.productOldPrice} TL</del>
                    <p className="text-xs">{item.description}</p>

                </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Discover
