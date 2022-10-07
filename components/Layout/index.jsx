import Footer from "../Footer"

import s from "./_layout.module.scss"


const Layout = ({ children }) => {
    return (
        <>
            <div className={s.container}>
                {children}
                <Footer />
            </div>
            
        </>
    );
};

export default Layout;