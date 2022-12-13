import { ThumbsUp, Trash } from "phosphor-react"

import { Avatar } from './../Avatar/Avatar'

import style from './Comment.module.css'

export function Comment(){
	return(
		<div className={style.comment}>
			<Avatar />
			
			<div className={style.commentInfo}>
				<div className={style.commentBox}>
					<div className={style.commentProfile}>
						<strong>Laerte Akira<span>(você)</span></strong>
						<button className={style.trash}>
							<Trash/>
						</button>
					</div>
					<time title='12 de Dezembro às 20:35h' dateTime="2022-12-12 20:35:10">Cerca de 2h</time>
					<p>Adorei o seu novo portifa Devon!</p>
				</div>
				<button>
					<ThumbsUp/> 
					Aplaudir <span>33</span>
				</button>
			</div>
		</div>
	);
}