const Layout : React.FC <{children: any}>= ({children}) => {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}

const Header : React.FC = ()  => {
    return (
      <header className="nav-container">
        <img
            src={'./../weekend-logo.svg'}
            alt={'weekend-logo'}
            className={'logo'}
        />     
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

const Footer : React.FC = () => {
    const links = [
        {
            id: 1,
            heading: 'THE BASICS',
            links: ['About Weekend watch', 'Contact Us', 'Support', 'API'],
        },
        {
            id: 2,
            heading: 'GET INVOLVED',
            links: ['Contribution Guidelines', 'Add New Movie', 'Add New TV Show', 'API'],
        },
        {
            id: 3,
            heading: 'COMMUNITY',
            links: ['Guidelines', 'Discussions', 'Leaderboard', 'Tweeter'],
        },
        {
            id: 4,
            heading: 'LEGAL',
            links: ['Terms of use', 'API Terms of use', 'Privacy Policy'],
        }
    ]
    return(
        <div className="footer">
            <div className="weekend-watch-location">
                <img
                    src={'./../weekend-tv-logo.svg'}
                    alt={'weekend-tv-logo'}
                />
                <div className="location-info">
                     24, Vaishnavi Centre, Raja Park, 51, Dhanana, Panipat, Haryana, Pincode-154419
                </div>
            </div>

            <div className="footer-links">
                {links.map((data) => <FooterLinkSection heading={data.heading} links={data.links}/> )}
            </div>
        </div>
    )
}

const FooterLinkSection : React.FC <{
heading: String,
links: Array<String>
}> = ({ heading, links }) => {
    return(
        <div className="footer-links-section">
            <header className="footer-link-section-heading">{heading}</header>
            {links.map((link, index) => (
                <a
                  key={index+1}
                  className="footer-link"
                  href="#"
                >
                    { link }
                </a>
            ))}
        </div>
    )
}

export default Layout