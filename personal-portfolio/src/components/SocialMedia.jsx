import React from 'react'
import{FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'
import "../styles/components/social-media.sass";


const socialMedia = [ 
    {name: 'LinkedIn', link:'https://www.linkedin.com/in/otavio-silva-ba1aa2156/', icon: <FaLinkedinIn />},
    {name: 'GitHub', link:'https://github.com/otaviovaleriano', icon: <FaGithub />},
    {name: 'Instagram', link:'https://www.instagram.com/otaviovss/', icon: <FaInstagram />}
 ]

const SocialMedia = () => {
  return <section id='social-media'>
    {socialMedia.map((network) => (
        <a href={network.link} target="_blank" className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
        ))}

  </section>
  
}

export default SocialMedia
