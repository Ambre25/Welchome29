// CONTENEUR CORPS DE PAGE

import React from 'react'

function BodyPage(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', marginBottom: '100px', marginTop: '50px' }}>
            {props.children}
        </div>
    )
}

export default BodyPage;