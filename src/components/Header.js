import React from 'react'
import PropTypes from 'prop-types'
import picLogo from '../images/lw-white.png'
const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>

        <div className="logo">
            <span className="icon">
            <span className="image main"><img src={picLogo} alt="Lee Walpole | LW Logo" /></span>
            </span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Web Designer / SEO</h1>
                <p>Copywriter / coder who loves flirting with Google and building beautiful, blazingly fast websites.</p>
            </div>
        </div>
        <nav>
            <ul className="navLinks">
                <li className="noborder"><a href="javascript:;" onClick={() => {props.onOpenArticle('skills')}}>Skills</a></li>
                <li className="noborder"><a href="javascript:;" onClick={() => {props.onOpenArticle('experience')}}>Experience</a></li>
                <li className="noborder"><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
