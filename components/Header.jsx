import Link from 'next/link';

const Header =()=> {
    return(
        <header>
            <div className="container">This is header</div>
            <div className="container">
                <Link className="px-2" href='/'>Home</Link> 
                <Link className="px-2" href='/about'>About</Link> 
                <Link className="px-2" href='/contactus'>Contact</Link> 
                <Link className="px-2" href='/test'>Test</Link> 
            </div>
        </header>
    );
}

export default  Header;