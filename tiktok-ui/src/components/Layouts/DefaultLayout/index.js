import Header from '~/components/Layouts/components/Header';
import Sidebar from './Sidebar';
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <div className={cx("content")}>
                    <img src="https://titanium.exdomain.net/image/cache/catalog/slider/Gifting_month_HP_D-2-1920x720.jpg" height={"450px"} width={"100%"}/>
                        {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
