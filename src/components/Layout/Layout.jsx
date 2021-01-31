import s from './Layout.module.css';

const Layout = ({id, title, urlBg = null, colorBg = null, colorTitle = null, children}) => {
    console.log(`#### id: urlBg: ${urlBg}`);
    console.log(`#### id: colorBg: ${colorBg}`);
    return (
        <section 

        className={s.root} id={id} 
        style={{backgroundImage: `url(${urlBg})`, 
        backgroundColor: `${colorBg}`}}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3 style={{backgroundColor: `${colorTitle}`}}>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;