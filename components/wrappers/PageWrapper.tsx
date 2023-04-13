import {FC, PropsWithChildren} from "react";
import styles from '@/styles/Home.module.css'

export const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
    return <main className={styles.main}>{children}</main>;
};