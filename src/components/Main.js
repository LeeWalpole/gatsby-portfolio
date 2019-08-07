import React from 'react'
import PropTypes from 'prop-types'


import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'skills' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          <div>
<section className="hal">
<ul className="small_li_list">
<li>HTML / CSS</li>
<li>Javascript</li>
<li>Adobe Creative Suite</li>
<li>Wordpress / PHP</li>
<li>Copywriting</li>
</ul>
</section>
<hr></hr>
<section className="haf">
<h2 className="major">Learning</h2>
<ul>
<li>React / JSX</li>
<li>Gatsby</li>
</ul>
</section>
</div>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'experience' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Experience</h2>
          <div>

<section>
<div className="half">
<strong>The Sun / News UK</strong>
<small>2006-2019</small>
</div>
<p className="half">
<small>Reference:</small>
<small><a href="mailto:david.ross@thesun.co.uk">David Ross</a> (Head of Video)</small>
</p>

<ul className="cols2 small">
<li>Developed web tools for editorial teams</li>
<li>SEO strategy and marketing campaigns</li>
<li>Wrote features, articles and video scripts</li>
<li>Edit / produced videos and graphics</li>
<li>Audience growth / brand awareness</li>
<li>Managed breaking news on the video desk</li>
<li>CMS Migration (Wordpress)</li>
</ul>




</section>



<h2 className="major">Recent Projects</h2>
<ul className="cols2 small">
<li><a href="https://www.phuketcleanse.com" target="_blank">Phuket Cleanse</a><small className="col-light">Branding / Website</small></li>
<li><a href="https://www.ladsholidayguide.com" target="_blank">Lads Holiday Guide</a><small className="col-light">Editor / Facebook</small></li>
</ul>

<h2 className="major">Current Projects</h2>

<ol className="cols3 small">
<li><a href="https://www.nanaretreats.com/" target="_blank">NanaRetreats</a></li>
<li><a href="https://www.inspiredcapitalinvestments.com" target="_blank">Inspired Investments</a></li>
<li><a href="https://www.ladsholidayguide.com" target="_blank">Phuket Clenase</a></li>
</ol>

</div>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://www.twitter.com/Lee_Walpole/" className="icon fa-twitter" target="_blank"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/LeeWalpole/" className="icon fa-facebook" target="_blank"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/LeeWalpole/" className="icon fa-instagram" target="_blank"><span className="label">Instagram</span></a></li>
            <li><a href="https://www.linkedin.com/in/leewalpole/" className="icon fa-linkedin" target="_blank"><span className="label">LinkedIn</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main