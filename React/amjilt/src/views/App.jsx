const App = () => {
    return <div className="overflow-x-hidden">
	<header className="w-full">
		<div className="container absolute z-10 left-1/2 transform -translate-x-1/2 flex items-center justify-between">
			<div className="logo w-40">
				<img className="w-full" src="https://amjilt.com/landing-assets/upload/logo-barrel8-1.png" alt=""/>
			</div>
			<ul className="flex text-white text-sm uppercase font-bold">
				<li className="rounded-3xl px-5 py-2.5 hover:bg-white hover:text-blue-400"><a href="#shop"
						className="active">Мэдээ</a></li>
				<li className="rounded-3xl px-5 py-2.5 hover:bg-white hover:text-blue-400"><a href="#about">Багш.мн</a></li>
				<li className="rounded-3xl px-5 py-2.5 hover:bg-white hover:text-blue-400"><a href="#thoughts">Одоо
						суръя</a></li>
				<li className="rounded-3xl px-5 py-2.5 hover:bg-white hover:text-blue-400"><a href="#about">Зуузуугийн
						найзууд</a></li>
				<li className="rounded-3xl px-5 py-2.5 hover:bg-white hover:text-blue-400 border border-white-600 ml-3"><a
						href="#contact">Нэвтрэх</a></li>
			</ul>
		</div>
	</header>

	<section className="hero w-100 relative h-screen">
		<div className="overlay absolute w-full h-full bg-blue-400 bg-opacity-30"></div>
		<img className="object-cover w-full h-full" src="https://amjilt.com/landing-assets/upload/background-slider-app.jpg"/>
		<div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
			<div className="flex items-center justify-center gap-16">
				<img className="w-1/3 transform transition duration-500 hover:-translate-y-4" src="https://amjilt.com/landing-assets/upload/iphone-slider-big.png" alt=""/>
				<div className="overlay"></div>
				<div className="hero__box text-white">
					<h1 className="text-2xl">
						<strong className="text-6xl block">АМЖИЛТ 2.0</strong>
						СУРГУУЛИЙН ЦОГЦ СИСТЕМ
					</h1>
					<p className="mt-16 text-lg font-light">Сургуулийн менежментийн <br/> ТӨГС удирдахуй</p>
					<div className="mt-8 flex gap-6">
						<a className="playstore" href="#">
							<img src="https://amjilt.com/landing-assets/upload/download/android.png" alt=""/>
						</a>
						<a className="appstore" href="#">
							<img src="https://amjilt.com/landing-assets/upload/download/apple.png" alt=""/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<main>
		<section className="container mx-auto swiper my-12">
			<ul className="swiper-wrapper">
				<li className="swiper-slide"><img className="filter grayscale"
						src="https://amjilt.com/landing-assets/upload/partners/1.png" alt=""/>
				</li>
				<li className="swiper-slide"><img className="filter grayscale"
						src="https://amjilt.com/landing-assets/upload/partners/2.png" alt=""/>
				</li>
				<li className="swiper-slide"><img className="filter grayscale"
						src="https://amjilt.com/landing-assets/upload/partners/3.jpg" alt=""/>
				</li>
				<li className="swiper-slide"><img className="filter grayscale"
						src="https://amjilt.com/landing-assets/upload/partners/4.png" alt=""/>
				</li>
				<li className="swiper-slide"><img className="filter grayscale"
						src="https://amjilt.com/landing-assets/upload/partners/5.png" alt=""/>
				</li>
				<li className="swiper-slide"><img className="filter grayscale"
						src="https://amjilt.com/landing-assets/upload/partners/6.jpg" alt=""/>
				</li>
				<li className="swiper-slide"><img className="filter grayscale"
						src="https://amjilt.com/landing-assets/upload/partners/7.jpg" alt=""/>
				</li>
				<li className="swiper-slide"><img className="filter grayscale"
						src="https://amjilt.com/landing-assets/upload/partners/8.jpg" alt=""/>
				</li>
				<li className="swiper-slide"><img className="filter grayscale"
						src="https://amjilt.com/landing-assets/upload/partners/9.jpg" alt=""/>
				</li>
				<li className="swiper-slide"><img className="filter grayscale"
						src="https://amjilt.com/landing-assets/upload/partners/10.jpg" alt=""/>
				</li>
				<li className="swiper-slide"><img className="filter grayscale"
						src="https://amjilt.com/landing-assets/upload/partners/11.png" alt=""/>
				</li>
			</ul>
		</section>
		<section className="container mx-auto intro">
			<figure className="flex items-center justify-between">
				<div id="left" className="flex-1">
					<img className="transform transition duration-500 hover:-translate-y-4" src="https://amjilt.com/landing-assets/upload/iphone-text-slider.png" alt=""/>
				</div>
				<div id="right" className="flex-1">
					<h1 className="text-4xl font-bold">"АМЖИЛТ ДОТКОМ" ХХК</h1>
					<hr/>
					<p className="text-gray-500 text-lg	">“Амжилт Дотком” ХХК нь “Том амжилт” ХХК –ийн охин компани болон
						2015 онд
						үүсгэн байгуулагдсан.
						Дижитал технологи,
						программ хангамжийн чиглэлээр үйл ажиллагаа явуулдаг бөгөөд 2017 оноос хамгийн сүүлийн үеийн
						програмчлалын хэл болох
						Rеact JS, React Native, Express JS, MongoDB дээр боловсролын салбарт зориулан “Амжилт 2.0”
						системийг
						хөгжүүлж байна.
						Монголын шилдэг программистуудаар багаа бүрдүүлэн ажиллаж, ирээдүйд дэлхийн бусад оронд ашиглах
						боломжийг
						бүрдүүлэхээр шинийг эрэлхийлэн өдөр бүр хөгжин дэвшсээр байна.</p>
				</div>
			</figure>

			<h2
				className="my-10 text-xl bg-blue-500 text-white rounded-full text-right py-3 px-5 transform -translate-x-1/2">
				ДИЖИТАЛ ШИЛЖИЛТ - 2020 / 2021
			</h2>
			<figure className="flex items-center justify-between gap-20">
				<div id="left" className="flex-1">
					<h1 className="text-4xl font-bold text-right">АМЖИЛТ 2.0 СИСТЕМИЙГ ХЭРЭГЛЭХ ШАЛТГААН</h1>
					<hr className="orange"/>
					<p className="text-gray-500 text-lg	text-right">Дэлхий нийтээрээ дижитал шилжилт хийж хувийн болон
						төрийн өмчийн
						байгууллагууд өөрсдийн үйл ажиллагаатай холбоотой бүхий л мэдээллийг дата хэлбэрт шилжүүлж
						эхэллээ. Ингэснээр байгууллага өөрийн бүх үйл ажиллагаанд дүн шинжилгээ хийхээс гадна хэзээ ч
						устахгүй өсөн нэмэгдэх мэдээллийн баазтай болдог. Амжилт 2.0 сургуулийн цогц систем нь урт
						хугацаанд хөгжих үндэсний дижитал төсөл юм.</p>
				</div>
				<div id="right" className="flex-1">
					<img className="transform transition duration-500 hover:-translate-y-4"  src="https://amjilt.com/landing-assets/upload/asiangirl.png" alt=""/>
				</div>
			</figure>
		</section>
		<section className="w-full promo">
			<img className="w-full" src="https://amjilt.com/landing-assets/upload/subback.png" alt=""/>
		</section>
		<section className="container mx-auto">
			<h2 className="my-10 text-xl bg-blue-500 text-white rounded-full text-left py-3 px-5 transform translate-x-1/3">
				КОМЬПЮТЕР - ТАБЛЕТ - ГАР УТАС - НӨҮТБҮҮК ЗЭРЭГ ТӨХӨӨРӨМЖҮҮДЭЭС ХОЛБОГДОХ БОЛОМЖТОЙ
			</h2>
			<figure className="flex items-center justify-between gap-20">
				<div id="left" className="flex-1">
					<h1 className="text-4xl font-bold text-right">АМЖИЛТ 2.0 СИСТЕМ</h1>
					<hr className="orange"/>
					<p className="text-gray-500 text-lg	text-right">“Амжилт 2.0” систем нь сургуулийн удирдлага,
						багш,сурагч,
						эцэг эх гэсэн үндсэн дөрвөн нэвтрэх эрхтэй. Тус нэвтрэх
						эрхүүд өөр өөрийн гэсэн модулиудыг агуулсан цогц систем юм. Уг систем нь боловсролын салбарт
						дижитал
						шилжилтийг
						хийж, багш ажилчдын ажлыг хөнгөвчлөх , сурагч, эцэг эх, багш, сургуулийн удирдлага гэх
						дөрөвлөсөн
						холбоог сайжруулах
						зорилготойгоор хэрэглэхэд хамгийн хялбар хэлбэрээр бүтээгдсэн дэвшилтэд бүтээл юм.</p>
				</div>
				<div id="right" className="flex-1">
					<img className="transform transition duration-500 hover:-translate-y-4"  src="https://amjilt.com/landing-assets/upload/computer.png" alt=""/>
				</div>
			</figure>
		</section>
		<section className="container mx-auto mt-28">
			<h2 className="text-4xl font-bold text-center">СИСТЕМИЙН ҮНДСЭН МОДИУЛУУД</h2>
			<hr className="center"/>
			<div className="card-box flex justify-between gap-16">
				<div className="card border rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
					<div className="card-img">
						<img src="https://amjilt.com/landing-assets/upload/new/1.jpg" alt=""/>
					</div>
					<div className="card-text p-4">
						<h1 className="text-base text-gray-600 font-bold mb-4">СУРГУУЛИЙН УДИРДЛАГА </h1>
						<p className="text-gray-400 text-sm leading-6">Сургуулийн нийт сурагчдын ирц, дүнгийн мэдээллийг
							хянах самбараас жил, улирал, өдрөөр ангилан
							харах боломжтой. Мөн зарлал, мэдэгдэл илгээх, сургалтын хөтөлбөр төлөвлөх.</p>
					</div>
				</div>
				<div className="card border rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
					<div className="card-img">
						<img src="https://amjilt.com/landing-assets/upload/new/2.jpg" alt=""/>
					</div>
					<div className="card-text p-4">
						<h1 className="text-base text-gray-600 font-bold mb-4">СУРАГЧ </h1>
						<p className="text-gray-400 text-sm leading-6">Өөрийн ирц дүнтэй танилцах, хичээлээ нөхөж үзэх,
							ахисан түвшний хичээл судлах, мэдээлэл
							солилцох боломжтой.</p>
					</div>
				</div>
				<div className="card border rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
					<div className="card-img">
						<img src="https://amjilt.com/landing-assets/upload/new/3.jpg" alt=""/>
					</div>
					<div className="card-text p-4">
						<h1 className="text-base text-gray-600 font-bold mb-4">БАГШ</h1>
						<p className="text-gray-400 text-sm leading-6">Онлайнаар шалгалт авах, хичээл оруулах, гэрийн
							даалгавар өгч авах, эцэг эхчүүдтэй харилцах,
							хичээлийн хуваарь төлөвлөх, ажилласан цагаа хянах зэрэг үйлдэлтэй.</p>
					</div>
				</div>
				<div className="card border rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
					<div className="card-img">
						<img src="https://amjilt.com/landing-assets/upload/new/4.jpg" alt=""/>
					</div>
					<div className="card-text p-4">
						<h1 className="text-base text-gray-600 font-bold mb-4">ЭЦЭГ ЭХ </h1>
						<p className="text-gray-400 text-sm leading-6">Хүүхдийнхээ ирц, дүн, төлбөрийн мэдээлэлтэй
							танилцах, онлайнаар
							төлөх,
							сургуулийн захиргаанд
							санал хүргүүлэх, мэдэгдэл хүлээн авах боломжтой.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section className="container mx-auto mt-16">
			<div className="grid grid-cols-3 gap-4">
				<div className="service-item flex p-8 bg-blue-500 rounded-xl justify-center">
					<i className="fas fa-asterisk text-gray-50 mr-4 text-lg"></i>
					<h1 className="text-gray-50">ДҮН БҮРТГЭЛ</h1>
					<ul style="display: none;">
						<li>Дүн оруулах</li>
						<li>Дүнгийн мэдээллийг өдөр, сар, улирал, жилээр ангилан графикаар харах</li>
						<li>Дүнгийн өсөлт, бууралтыг&nbsp;харьцуулах</li>
						<li>Дүнгийн мэдээллийг багш,сурагч, эцэг эх, сургуулийн удирдлага хянах боломжтой</li>
					</ul>
				</div>
				<div className="service-item flex p-8 bg-blue-500 rounded-xl justify-center hover:shadow-inner">
					<i className="fas fa-asterisk text-gray-50 mr-4 text-lg"></i>
					<h1 className="text-gray-50">ГЭРИЙН ДААЛГАВАР</h1>
				</div>
				<div className="service-item flex p-8 bg-blue-500 rounded-xl justify-center">
					<i className="fas fa-asterisk text-gray-50 mr-4 text-lg"></i>
					<h1 className="text-gray-50">НЭХЭМЖЛЭЛ</h1>
				</div>
				<div className="service-item flex p-8 bg-blue-500 rounded-xl justify-center">
					<i className="fas fa-asterisk text-gray-50 mr-4 text-lg"></i>
					<h1 className="text-gray-50">ИРЦ БҮРТГЭЛ</h1>
				</div>
				<div className="service-item flex p-8 bg-blue-500 rounded-xl justify-center">
					<i className="fas fa-asterisk text-gray-50 mr-4 text-lg"></i>
					<h1 className="text-gray-50">ХИЧЭЭЛИЙН ХУВААРь</h1>
				</div>
				<div className="service-item flex p-8 bg-blue-500 rounded-xl justify-center">
					<i className="fas fa-asterisk text-gray-50 mr-4 text-lg"></i>
					<h1 className="text-gray-50">АЖИЛ ТӨЛӨВЛӨЛТ</h1>
				</div>
				<div className="service-item flex p-8 bg-blue-500 rounded-xl justify-center">
					<i className="fas fa-asterisk text-gray-50 mr-4 text-lg"></i>
					<h1 className="text-gray-50">ОНЛАЙН ШАЛГАЛТ</h1>
				</div>
				<div className="service-item flex p-8 bg-blue-500 rounded-xl justify-center">
					<i className="fas fa-asterisk text-gray-50 mr-4 text-lg"></i>
					<h1 className="text-gray-50">ЗАРЛАЛ БОЛОН МЭДЭГДЭЛ</h1>
				</div>
				<div className="service-item flex p-8 bg-blue-500 rounded-xl justify-center">
					<i className="fas fa-asterisk text-gray-50 mr-4 text-lg"></i>
					<h1 className="text-gray-50">NFC КАРТ</h1>
				</div>
				<div className="service-item flex p-8 bg-blue-500 rounded-xl justify-center">
					<i className="fas fa-asterisk text-gray-50 mr-4 text-lg"></i>
					<h1 className="text-gray-50">КОНТЕНТ</h1>
				</div>
			</div>
		</section>

		<section className="mt-16 h-screen bg-blue-500">
			<h1 className="text-center p-16 text-gray-50 text-4xl font-bold">СИСТЕМИЙН ДАВУУ ТАЛУУД</h1>
			
			<div className="grid grid-cols-3 container mx-auto gap-y-32 gap-x-10">
				<figure className="relative text-center flex flex-wrap justify-center">
					<div className="w-16 h-16 bg-blue-400 rounded-full transform transition duration-500 hover:-translate-y-4">
						<img className="self-center" src="https://amjilt.com/landing-assets/upload/icons/6.png" alt=""/>
					</div>
					<p className="absolute top-10 py-5 border text-gray-50 border-blue-300 rounded-lg font-bold text-base">Сургууль нэгдсэн дата сантай болно</p>
				</figure>
				<figure className="relative text-center flex flex-wrap justify-center">
					<div className="w-16 h-16 bg-blue-400 rounded-full transform transition duration-500 hover:-translate-y-4">
						<img className="self-center" src="https://amjilt.com/landing-assets/upload/icons/5.png" alt=""/>
					</div>
					<p className="absolute top-10 py-5 border text-gray-50 border-blue-300 rounded-lg font-bold text-base">Сурагчдын статистик мэдээлэлд
						дүн шинжилгээ хийнэ</p>
				</figure>
				<figure className="relative text-center flex flex-wrap justify-center">
					<div className="w-16 h-16 bg-blue-400 rounded-full transform transition duration-500 hover:-translate-y-4">
						<img className="self-center" src="https://amjilt.com/landing-assets/upload/icons/4.png" alt=""/>
					</div>
					<p className="absolute top-10 py-5 border text-gray-50 border-blue-300 rounded-lg font-bold text-base">Сурагч, эцэг эх, багш, сургууль
						дөрөвлөсөн холбоог бий болгоно</p>
				</figure>
				<figure className="relative text-center flex flex-wrap justify-center">
					<div className="w-16 h-16 bg-blue-400 rounded-full transform transition duration-500 hover:-translate-y-4">
						<img className="self-center" src="https://amjilt.com/landing-assets/upload/icons/3.png" alt=""/>
					</div>
					<p className="absolute top-10 py-5 border text-gray-50 border-blue-300 rounded-lg font-bold text-base">Сурагчид хичээлээ нөхөн
						үзэх боломжтой</p>
				</figure>
				<figure className="relative text-center flex flex-wrap justify-center">
					<div className="w-16 h-16 bg-blue-400 rounded-full transform transition duration-500 hover:-translate-y-4">
						<img className="self-center" src="https://amjilt.com/landing-assets/upload/icons/2.png" alt=""/>
					</div>
					<p className="absolute top-10 py-5 border text-gray-50 border-blue-300 rounded-lg font-bold text-base">Сургуулийн удирдлага багш
						ажилчдын мэдээллийг бүрэн хянана</p>
				</figure>
				<figure className="relative text-center flex flex-wrap justify-center">
					<div className="w-16 h-16 bg-blue-400 rounded-full transform transition duration-500 hover:-translate-y-4">
						<img className="self-center" src="https://amjilt.com/landing-assets/upload/icons/1.png" alt=""/>
					</div>
					<p className="absolute top-10 py-5 border text-gray-50 border-blue-300 rounded-lg font-bold text-base">Эцэг, эхчүүд хүүхдийнхээ ирц, дүнгийн
						мэдээллийг байнга хянах боломжтой</p>
				</figure>
			</div>
			
		</section>

		<section className="w-2/3 mx-auto my-16">
			<div className=" flex justify-center gap-16">
				<div id="left" className="flex-1">
					<h1 className="text-4xl font-bold text-right">АЮУЛГҮЙ <br/>	
						БАЙДАЛ</h1>
				</div>
				<div id="right" className="flex-1">
					<p className="text-gray-500 text-xl	text-left">			
						Сургуулийн дата нь тухайн сургуулийн өмч бөгөөд
						тэрхүү өмчийг Монгол улсын байгууллагын нууцын
						тухай хуулийн заалтад үндэслэн Монголын хамгийн
						найдвартай гэгдэх үндэсий дата төвд байршуулдаг</p>		
				</div>
            </div>
		</section>

		<section className="w-full promo">
			<img className="w-full" src="https://amjilt.com/landing-assets/upload/banner22.png" alt=""/>
		</section>

		<section className="container mx-auto bg-gray-100 py-20">
			<h2 className="text-4xl font-bold text-center">АМЖИЛТ 2.0 СИСТЕМИЙГ АШИГЛАСНААР ГАРАХ ҮР ДҮН
			</h2>
			<hr className="center"/>
			<div className="card-box flex justify-between gap-16">
				<div style="background: url(https://amjilt.com/landing-assets/upload/new/banner4.jpg);" className="card border rounded-xl overflow-hidden transform transition duration-500 hover:-translate-y-2 bg-cover bg-opacity-50 relative">
					<p className="mr-4 mt-4 mb-40 text-3xl text-right">100%</p>
					<div className="card-text p-4">
						<h1 className="text-base font-bold mb-4 border-l-4 border-blue-600 pl-4">СУРГУУЛИЙН ТӨСВИЙГ
							УДИРДАН ХЯНАНА.</h1>
					</div>
				</div>		
				<div style="background: url(https://amjilt.com/landing-assets/upload/new/banner3.jpg);" className="card border rounded-xl overflow-hidden transform transition duration-500 hover:-translate-y-2 bg-cover bg-opacity-50 relative">
					<p className="mr-4 mt-4 mb-40 text-3xl text-right">100%</p>
					<div className="card-text p-4">
						<h1 className="text-base font-bold mb-4 border-l-4 border-blue-600 pl-4">СУРГУУЛИЙН ТӨСВИЙГ
							УДИРДАН ХЯНАНА.</h1>
					</div>
				</div>		
				<div style="background: url(https://amjilt.com/landing-assets/upload/new/banner2.jpg);" className="card border rounded-xl overflow-hidden transform transition duration-500 hover:-translate-y-2 bg-cover bg-opacity-50 relative">
					<p className="mr-4 mt-4 mb-40 text-3xl text-right">100%</p>
					<div className="card-text p-4">
						<h1 className="text-base font-bold mb-4 border-l-4 border-blue-600 pl-4">СУРГУУЛИЙН ТӨСВИЙГ
							УДИРДАН ХЯНАНА.</h1>
					</div>
				</div>		
				<div style="background: url(https://amjilt.com/landing-assets/upload/new/banner1.jpg);" className="card border rounded-xl overflow-hidden transform transition duration-500 hover:-translate-y-2 bg-cover bg-opacity-50 relative">
					<p className="mr-4 mt-4 mb-40 text-3xl text-right">100%</p>
					<div className="card-text p-4">
						<h1 className="text-base font-bold mb-4 border-l-4 border-blue-600 pl-4">СУРГУУЛИЙН ТӨСВИЙГ
							УДИРДАН ХЯНАНА.</h1>
					</div>
				</div>		
			</div>
		</section>
		
	</main>

	<footer className="footer mt-16">
		<div className="w-3/12 gap-10 mx-auto grid grid-cols-2 justify-items-center">
			<img src="https://amjilt.com/landing-assets/upload/download/qr-apple.png" alt="Logo"/>
			<img src="https://amjilt.com/landing-assets/upload/download/qr-android.png" alt="Logo"/>
			<img src="https://amjilt.com/landing-assets/upload/download/android.png" alt=""/>
			<img src="https://amjilt.com/landing-assets/upload/download/apple.png" alt=""/>
		</div>

		<div className="w-8/12 mt-16 mx-auto">			
			<div className="flex gap-6">
				<div className="flex">
					<div className="w-10 h-10 bg-blue-400 rounded-full transform transition duration-500 hover:-translate-y-2">
						<img className="self-center" src="https://amjilt.com/landing-assets/upload/icons/6.png" alt=""/>
					</div>
					<span className="pl-4 text-gray-500 font-bold">www.amjilt.com</span>
				</div>
				<div className="flex">
					<div className="w-10 h-10 bg-blue-400 rounded-full transform transition duration-500 hover:-translate-y-2">
						<img className="self-center" src="https://amjilt.com/landing-assets/upload/icons/6.png" alt=""/>
					</div>
					<span className="pl-4 text-gray-500 font-bold">system@amjilt.com</span>
				</div>
			</div>
			<div className="flex mt-10">
				<div className="w-10 h-10 bg-blue-400 rounded-full transform transition duration-500 hover:-translate-y-2">
					<img className="self-center" src="https://amjilt.com/landing-assets/upload/icons/6.png" alt=""/>
				</div>
				<span className="pl-4 text-gray-500 font-bold">
					(+976) 8953-6060    (+976) 8651-6060     (+976) 9016-6060</span>
			</div>
		</div>

		<p className="py-4 text-xl text-gray-400 text-center">AMJILTDOTCOM LLC - АМЖИЛТ 2.0 СИСТЕМ</p>

	</footer>
    </div>
}

export default App;