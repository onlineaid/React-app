import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';


class Directory extends React.Component {
    constructor(){
        super();


        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id : 1,
                linkUrl: 'hats'
            },
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id : 2,
                linkUrl: ''
            },{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id : 3,
                linkUrl: ''
            },{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id : 4,
                size: 'large',
                linkUrl: ''
            },{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id : 5,
                size: 'large',
                linkUrl: ''
            },
           ]
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    // title, imageUrl, id, size, likeUrl
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        // title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}
 
export default Directory;