import styles from "./Typo.module.css";
import React, {MouseEventHandler, ReactElement, ReactNode} from "react";
import Link from "next/link";

interface Props {
    children: string | JSX.Element | undefined | JSX.Element[] | number;
    style?: string;
    small?: boolean;
    key?: any;
}

interface KnappProps {
    children: string | JSX.Element | undefined;
    style?: string;
    onClick: MouseEventHandler<HTMLDivElement>;
}

interface LenkeProps {
    children: string | JSX.Element | undefined;
    style?: string;
    href: string
}

export const Title = (props: Props) => {
    if (props.small) {
        return (
            <h2 className={`${styles.title} ${props.style}`}>{props.children}</h2>
        );
    }
    return <h1 className={`${styles.title} ${props.style}`}>{props.children}</h1>;
};

export const HeadingWithLine = (props: Props) => {
    return (
        <div>
            <div className={styles.titleContainer}>
                <Hovedtittel>{props.children}</Hovedtittel>
            </div>
            <div className={styles.underline}></div>
        </div>
    );
};
export const Ingress = (props: Props) => {
    return (
        <p className={`${styles.ingress} ${props.style}`} key={props.key}>
            {props.children}
        </p>
    );
};

export const Mellomtittel = (props: Props) => {
    return (
        <h2 className={`${styles.mellomtittel} ${props.style}`} key={props.key}>
            {props.children}
        </h2>
    );
};

export const MenuItem = (props: Props) => {
    return (
        <p className={`${styles.menuItem} ${props.style}`} key={props.key}>
            {props.children}
        </p>
    );
};

export const IngressSmall = (props: Props) => {
    return (
        <p className={`${styles.ingressSmall} ${props.style}`} key={props.key}>
            {props.children}
        </p>
    );
};

export const Hovedtittel = (props: Props) => {
    return (
        <h2 className={`${styles.hovedtittel} ${props.style}`}>{props.children}</h2>
    );
};

export const Undertittel = (props: Props) => {
    return (
        <h3 className={`${styles.undertittel} ${props.style}`}>{props.children}</h3>
    );
};

export const Lenke = (props: LenkeProps) => {
    return (
        <a className={`${styles.lenke} ${props.style}`} rel="noreferrer" target="_blank"
           href={props.href}>{props.children}</a>
    );
};

export const UndertittelKnapp = (props: KnappProps) => {
    return (
        <div
            className={`${styles.undertittelknapp} ${props.style}`}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
};

export const LenkeKnapp = (props: KnappProps) => {
    return (
        <div
            className={`${styles.lenke} ${props.style}`}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
};