
import { SiCoinmarketcap } from "react-icons/si";import { Value } from "sass";
import { MdOutlineEventAvailable } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { RiStockLine } from "react-icons/ri";

export class DetailModel{
constructor(coin,history){
    this.coin=coin;
    this.infoFields=[
        {
            icon:<SiCoinmarketcap />,
            label:"Market hacmi",
            value:this.coin?.marketCapUsd,
        },
        {
            icon:<MdOutlineEventAvailable />,
            label:"Tedarik",
            value:this.coin?.supply,
        },
        {
            icon:<MdOutlinePriceChange />,
            label:"Fiyat",
            value:this.coin?.priceUsd,
        },
        {
            icon:<FaPercent />,
            label:"24s Değişim(%)",
            value:this.coin?.changePercent24Hr,
        },
        {
            icon:<RiStockLine />,
            label:"24s Hacim(%)",
            value:this.coin?.volumeUsd24Hr,
        },
    ];
    this.chartData={
        labels:history?.map((item)=>
            new Date (item.date).toLocaleDateString
    ()),
        datasets: [
          {
            id: 1,
            label: 'fiyat',
            data: history?.map((item)=>item.priceUsd),
          },
        ],    
    };
}
}