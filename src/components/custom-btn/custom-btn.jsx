import React from 'react';

import './custom-btn.scss';

const CustomBtn =({children, googleBtn, ...otherProps}) => (
        <div className={`${googleBtn ? 'google-sign-in' : ''} custom-btn` } {...otherProps}>
        {children}
    </div>
)

export default CustomBtn;