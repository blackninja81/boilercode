import React from 'react'
import Link from 'next/link'
import HomeStyle from '../../Styles/Home.module.scss'
import { components_files } from '../../constants/Constants'

const page = () => {
  return (
    <div>
        <div className={HomeStyle.components_container}>
        {components_files.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                target='_blank'
                className={HomeStyle.home_link}
              >
                {link.title}
              </Link>
            ))}
        </div>
    </div>
  )
}

export default page