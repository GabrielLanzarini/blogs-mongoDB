import style from "./Style.module.css"
import { Link } from "react-router-dom"

export default function CardPost({ userId, postId, showBlogUsername, description, title, blogName }) {
    return (
        <div className={style.pubCard}>
            <div className={style.titles}>
                <h1>{title}</h1>
                {showBlogUsername && <h2>{blogName}</h2>}
            </div>
            <p>{description}</p>
            <div className={style.userReadContainer}>
                {showBlogUsername && (
                    <p style={{ color: "#2b2c34" }}>
                        by{" "}
                        <Link to={`/home/profile/${userId}`} className={style.linkUser}>
                            @username
                        </Link>
                    </p>
                )}
                <Link className={style.button} to={`/home/post/${postId}`}>
                    Read more
                </Link>
            </div>
        </div>
    )
}
