import CardPost from "../components/CardPost"
import style from "../style/Home.module.css"

export default function Home() {
    return (
        <div className={style.primaryContainerExt}>
            <div className={style.logoContainer}>
                <h1 style={{ color: "#6246ea" }}>
                    Devs<span style={{ color: "#2f2f2f", fontSize: 19, fontWeight: "700" }}>.blog</span>
                </h1>
            </div>
            <div className={style.primaryContainerInt}>
                <div className={style.peopleContainer}>
                    <div className={style.peopleContainerInt}>
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                        <div className={style.personIcon} />
                    </div>
                </div>
                <div className={style.pubContainer}>
                    <div className={style.pubContainerInt}>
                        <h1 style={{ fontSize: "3rem" }}>Most Recent Posts </h1>
                        <div className={style.gridCards}>
                            <CardPost />
                            <CardPost />
                            <CardPost />
                            <CardPost />
                            <CardPost />
                            <CardPost />
                            <CardPost />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
