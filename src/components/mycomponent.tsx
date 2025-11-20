
// type MyComponentType = {text: string};
//
//
// function MyComponent({text}: MyComponentType) {
//     return <div>{text}</div>
// }


// type MyComponentType = {text: string};
//
//
// const MyComponent = ({text}: MyComponentType) => {
//     return <div>{text}</div>
// }


import type {FC, ReactNode} from "react";
import styles from "./mycomponent.module.css"

type MyComponentType = {title: string, children?: ReactNode};


const MyComponent: FC <MyComponentType> = ({title, children}) => {
    return<div className={styles.fone}>
        <h2>{title}</h2>
        <p>{children}</p>
    </div>
}







export default MyComponent;