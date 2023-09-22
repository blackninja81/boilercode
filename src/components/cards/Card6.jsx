import React from 'react'
import cardStyle from './card6.module.scss'

const Card6 = () => {
  return (
    <div className={cardStyle.card_container}>
        <div className = {cardStyle.section}>
	<div class={cardStyle.row}>
		<div class={cardStyle.card_style}>
			<div class={cardStyle.card}>
				<div class={`${cardStyle.cover} ${cardStyle.item_a}`}>
					<h1>Little<br/>Bonsai</h1>
					<span class={cardStyle.price}>$79</span>
					<div class={cardStyle.card_back}>
						<a href="#">Add to cart</a>
						<a href="#">View detail</a>
					</div>
				</div>
			</div>
		</div>
		<div class={cardStyle.card_style}>
			<div class={cardStyle.card}>
            <div class={`${cardStyle.cover} ${cardStyle.item_b}`}>
					<h1>Tropical<br/>Leaf</h1>
					<span class={cardStyle.price}>$79</span>
					<div class={cardStyle.card_back}>
						<a href="#">Add to cart</a>
					</div>
				</div>
			</div>
		</div>
		<div class={cardStyle.card_style}>
			<div class={cardStyle.card}>
            <div class={`${cardStyle.cover} ${cardStyle.item_c}`}>
					<h1>Marijuana<br/>Chill</h1>
					<span class={cardStyle.price}>$79</span>
					<div class={cardStyle.card_back}>
						<a href="#">Add to cart</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
  )
}

export default Card6