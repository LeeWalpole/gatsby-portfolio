import React from 'react'
import PropTypes from 'prop-types'
import picLogo from '../images/lw-white.png'
const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>

        <div className="logo">
            <span className="icon">
            <span className="image main"><img src={picLogo} alt="" /></span>
            </span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Web Design, Optimisation & SEO</h1>
                <p>I'm a copywriter / coder who loves flirting with Google and building beautiful, blazingly fast websites.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('skills')}}>Skills</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('experience')}}>Experience</a></li>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li> */}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
