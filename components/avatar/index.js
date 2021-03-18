import avatarStyles from "styles/Avatar.module.css";
export default function Avatar({ alt, src, text }) {
  return (
    <div className={avatarStyles.container}>
      <img className={avatarStyles.avatar} alt={alt} src={src} title={alt} />
      {text && <strong>{text}</strong>}
    </div>
  );
}
