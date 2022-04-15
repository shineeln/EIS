import Main from "../components/about/Main"
import Header from "../components/header"
import Hero from "../components/hero"
import LandSlide from "../components/about/LandSlide"
import About from "../components/about"
import Image from "../components/common/Image"
import AboutItem from "../components/about/AboutItem"
import Subtitle from "../components/common/Subtitle"
import Promo from "../components/promo"
import Module from "../components/module"
import CardBox from "../components/module/CardBox"
import Modules from "../components/module/Modules"
import Advantage from "../components/advantage"
import AdvantageItem from "../components/advantage/AdvantageItem"
import AboutDesc from "../components/about/AboutDesc"
import Achieves from "../components/achieves"
import Footer from "../components/footer"
import Logos from "../components/footer/Logos"
import Contact from "../components/footer/Contact"

import {about1, about2, about3} from "../data/dummy"

const App = () => {
    return <div className="overflow-x-hidden">
		<Header/>
		<Hero/>
		<Main>
			<LandSlide/>
			<About>
				<figure className="flex items-center justify-between">
					<div id="left" className="flex-1">
						<Image classes="transform transition duration-500 hover:-translate-y-4" imgUrl="https://amjilt.com/landing-assets/upload/iphone-text-slider.png"/>
					</div>
					<AboutItem idName="right" title="'АМЖИЛТ ДОТКОМ' ХХК" desc={about1}/>
				</figure>
				<Subtitle direction="left" title="ДИЖИТАЛ ШИЛЖИЛТ - 2020 / 2021"/>
				<figure className="flex items-center justify-between gap-20">
				<AboutItem idName="left" hrClass="orange" title="АМЖИЛТ 2.0 СИСТЕМИЙГ ХЭРЭГЛЭХ ШАЛТГААН" desc={about2}/>
					<div id="right" className="flex-1">
						<Image classes="transform transition duration-500 hover:-translate-y-4" imgUrl="https://amjilt.com/landing-assets/upload/asiangirl.png"/>
					</div>
    			</figure>
			</About>
			<Promo imgUrl="https://amjilt.com/landing-assets/upload/subback.png"/>
			<section className="container mx-auto">
				<Subtitle direction="right" title="КОМЬПЮТЕР - ТАБЛЕТ - ГАР УТАС - НӨҮТБҮҮК ЗЭРЭГ ТӨХӨӨРӨМЖҮҮДЭЭС ХОЛБОГДОХ БОЛОМЖТОЙ"/>
				<figure className="flex items-center justify-between gap-20">
					<AboutItem idName="left" hrClass="orange" title="АМЖИЛТ 2.0 СИСТЕМ" desc={about3}/>
					<div id="right" className="flex-1">
						<Image classNm="transform transition duration-500 hover:-translate-y-4"  imgUrl="https://amjilt.com/landing-assets/upload/computer.png"/>
					</div>
				</figure>
			</section>
			<Module>
				<CardBox/>
				<Modules/>
			</Module>
			<Advantage>
				<AdvantageItem/>
			</Advantage>
			<AboutDesc/>
			<Promo imgUrl="https://amjilt.com/landing-assets/upload/banner22.png"/>
			<Achieves/>
		</Main>
		<Footer>
			<Logos/>
			<div className="w-8/12 mt-16 mx-auto">			
				<div className="flex gap-6">
					<Contact title="www.amjilt.com"/>
					<Contact title="system@amjilt.com"/>
				</div>
				<div className="flex mt-10">
					<Contact title="(+976) 8953-6060    (+976) 8651-6060     (+976) 9016-6060"/>
				</div>
			</div>
		</Footer>
	</div>
}

export default App;