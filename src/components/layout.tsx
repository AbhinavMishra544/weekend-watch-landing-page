const Layout:React.FC <{children: any}>= ({children}) => {
return (
    <>
        <Header/>
         {children}
        </>

)
}

const Header : React.FC  = ()  => {
    return (
      <header className="nav-container">
        <img src={'./../weekend-logo.svg'} alt={'weekend-logo'} className={'logo'}/>     
        <div className="layout-header">   
            <ul className="nav-bar">
                <li>
                    Movies 
                </li>
                <li>
                    TV Show   
                </li>
                <li>
                    People
                </li>
                <li>
                    More
                </li>
            </ul>
            <ul className="login-bar">
                <li>
                    Login 
                </li>
                <li>
                    Join us 
                </li>
            </ul>
        </div>
      </header>
    )
}

export default Layout