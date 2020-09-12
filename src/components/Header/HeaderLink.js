import React from 'react'
import { Link } from 'react-router-dom'

function HeaderLink({ path, span1, span2, click }) {
    return (
        <Link to={path} className="header_link">
            <div onClick={click} className="header_option">
                <span>{span1}</span>
                <span>{span2}</span>
            </div>
        </Link>
    )
}

export default HeaderLink
