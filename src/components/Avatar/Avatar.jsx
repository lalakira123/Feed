import style from './Avatar.module.css'

export function Avatar({ imageUrl, hasBorder }) {
	return(
		<img 
      className={ hasBorder ? style.avatar : style.avatarWithoutBorder }
      src={imageUrl}
      alt='Foto Perfil'
    />
	);
}