import React from 'react'
import Image from 'next/image'
import cardStyle from './card3.module.scss'

const Card3 = () => {
  return (
    <div>
        <section className={cardStyle.articles}>
  <article>
    <div className={cardStyle.article_wrapper}>
      <div className={cardStyle.pic}>
        <img src="https://picsum.photos/id/1011/800/450" alt=""/>
      </div>
      <div className={cardStyle.article_body}>
        <h2>This is some title</h2>
        <p>
          Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
        </p>
        <a href="#" className={cardStyle.read_more}>
          Read more <span className={cardStyle.sr_only}>about this is some title</span>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div className={cardStyle.article_wrapper}>
      <div className={cardStyle.pic}>
        <img src="https://picsum.photos/id/1005/800/450" alt="" />
      </div>
      <div className={cardStyle.article_body}>
        <h2>This is some title</h2>
        <p>
          Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
        </p>
        <a href="#" className={cardStyle.read_more}>
          Read more <span className={cardStyle.sr_only}>about this is some title</span>
          
        </a>
      </div>
    </div>
  </article>
  <article>

  <div className={cardStyle.article_wrapper}>
      <div className={cardStyle.pic}>
        <img src="https://picsum.photos/id/103/800/450" alt="" />
      </div>
      <div className={cardStyle.article_body}>
        <h2>This is some title</h2>
        <p>
          Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
        </p>
        <a href="#" className={cardStyle.read_more}>
          Read more <span className={cardStyle.sr_only}>about this is some title</span>
         
        </a>
      </div>
    </div>
  </article>
</section>
    </div>
  )
}

export default Card3