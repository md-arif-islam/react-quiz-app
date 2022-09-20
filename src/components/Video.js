import classes from "../styles/Video.module.css";

export default function Video({ title, id, noq, key }) {
  return (
    <div className={classes.video}>
      <img
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
        key={key}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions </p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
  );
}
