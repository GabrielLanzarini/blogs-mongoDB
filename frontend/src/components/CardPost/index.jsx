import style from "./Style.module.css"

export default function CardPost() {
    return (
        <div className={style.pubCard}>
            <div className={style.titles}>
                <h1>Pub name</h1>
                <h2>Blog name</h2>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id veniam esse impedit quisquam tenetur, sequi sed atque voluptates ipsa ad porro in, qui harum optio ab aspernatur
                cupiditate facere.
            </p>
            <div className={style.userReadContainer}>
                <p>
                    by <span>@username</span>
                </p>
                <button>Read more</button>
            </div>
        </div>
    )
}
