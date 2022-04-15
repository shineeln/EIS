import Image from "../common/Image";

const HeroSocial = ({items}) => {
    return <div className="mt-8 flex gap-6">
        {
            items.map((item, index) => { 
                return <a key={`social ${index}`} className={item.classNm} href={`#${item.href}`}>
                    <Image imgUrl={item.imgUrl}/>
                </a>})
        }
        
    </div>
}

export default HeroSocial;