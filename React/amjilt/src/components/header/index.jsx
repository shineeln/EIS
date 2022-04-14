import Nav from './Navigation';

const headerItems = ['Мэдээ' , 'Багш.мн' , 'Одоо суръя' , 'Зуузуугийн найзууд', 'Нэвтрэх'];

const Header = (props) => {
    return <header className="w-full">
        <div className="container absolute z-10 left-1/2 transform -translate-x-1/2 flex items-center justify-between">
            <div className="logo w-40">
                <img className="w-full" src="https://amjilt.com/landing-assets/upload/logo-barrel8-1.png" alt=""/>
            </div>
            <ul className="flex text-white text-sm uppercase font-bold">
                <Nav items={headerItems}/>                
            </ul>
        </div>
    </header>
}