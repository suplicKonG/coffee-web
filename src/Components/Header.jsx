function Header(){
    return(
    <div className="header">
        <header>
            <h1>Kavárna U Klidného Hrníčku</h1>
        </header>

        <nav className="navbar">
            <ul className="navlist">
                <li><a href="#top">O nás</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </nav>
    </div>
    );
        
}

export default Header;