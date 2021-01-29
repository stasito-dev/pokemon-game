import s from './Layout.module.css';

const Layout = ({id, title, descr, urlBg = false, colorBg = false}) => {
    return (
        <section 
        className={s.root} id={id} 
        style={{backgroundImage: `url(${urlBg})`, 
        backgroundColor: `${colorBg}`}}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;