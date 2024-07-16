import {FigmaSvg} from "@/svgs/skills.svg/FigmaSvg";
import {NextSvg} from "@/svgs/skills.svg/NextSvg";
import {ReactSvg} from "@/svgs/skills.svg/ReactSvg";
import {TypeScriptSvg} from "@/svgs/skills.svg/TypeScriptSvg";
import styles from './Skills.module.css'
import {NodeSvg} from "@/svgs/NodeSvg";
import {MongoDBSvg} from "@/svgs/MongoDBSvg";
import {NestSvg} from "@/svgs/NestSvg";
import {AngularSvg} from "@/svgs/AngularSvg";

export const Skills = () => {
    return (


        <div className={styles.containerSvgs}>

            <TypeScriptSvg/>
            <ReactSvg/>
            <NextSvg/>
            <FigmaSvg/>
            <MongoDBSvg/>
            <NodeSvg/>
            <NestSvg/>
            <AngularSvg/>
        </div>

    );
};
