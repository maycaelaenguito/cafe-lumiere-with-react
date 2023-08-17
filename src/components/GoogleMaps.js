import React from 'react';
import '../css/gmap.css'

const GoogleMaps = () => {
    const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.563306898949!2d121.01280407513127!3d14.623935176504872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b63ca733ba8d%3A0x3f31bf4d97b6bb5c!2sGregorio%20Araneta%20Ave%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1692254998830!5m2!1sen!2sph";
  return (
    <div>
       <div>
       <iframe 
            title='Google Map Location'
            src={embedUrl} 
            allowFullScreen="" 
            loading="lazy" 
            aria-hidden="false"
            tabIndex="0"
            referrerPolicy="no-referrer-when-downgrade">
       </iframe>
    </div>
    </div>
  )
}

export default GoogleMaps
