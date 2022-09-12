import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);
function Header() {
    return ( 
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <h2 style={{color: "#FFFFFF", fontWeight: 500}}>Tye Dang</h2>
            </div>
            <div className={cx("menu-layout")}>
                <ul className={cx("menu-ul")}>
                    <li className={cx("menu-li")}><a href="#">Home</a></li>
                    <li className={cx("menu-li")}><a href="#">About</a></li>
                    <li className={cx("menu-li")}><a href="#">Product</a></li>
                    <li className={cx("menu-li")}><a href="#">News</a></li>
                    <li className={cx("menu-li")}><a href="#">Contact</a></li>
                </ul>
            </div>
            
        </header>
     );
}

export default Header;