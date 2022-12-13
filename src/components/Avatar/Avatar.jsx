import style from './Avatar.module.css'

export function Avatar({ hasBorder }) {
	return(
		<img 
      className={ hasBorder ? style.avatar : style.avatarWithoutBorder }
      src='https://github.com/lalakira123.png'
      alt='Foto Perfil'
    />
	);
}