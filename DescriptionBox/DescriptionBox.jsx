import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='description'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box"> Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (8)</div>
            </div>
            <div className="descriptionbox-description">
                <p>In the ever-growing online marketplace competition, establishing a reliable brand is essential, especially in the spice industry where purity and flavor are paramount. AgrowIT Spices brings years of expertise in sourcing and producing organic spices, prioritizing quality above all else.</p>
                <p>
                    Our spices are cultivated on farms using solely natural ingredients. This ensures that every spice you receive is delivered 100% fresh, straight from the farms.
                </p>
                <p>We uphold unwavering standards in spice quality. Elevate your kitchen with AgrowIT Spices, delivering robust flavors at an affordable cost.</p>
                <p>Prioritize your well-being with our locally sourced and organically cultivated spices, ensuring the finest and healthiest ingredients on your table.</p>
            </div>
        </div>
    )
}

export default DescriptionBox;