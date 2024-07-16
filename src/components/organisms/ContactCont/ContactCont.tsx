import {ContactSvg} from "@/components/atoms/ContactSvg/ContactSvg";
import {LinkedinSvg} from "@/svgs/infoSvg/LinkedinSvg";
import {MailSvg} from "@/svgs/infoSvg/MailSvg";
import styles from './ContactCont.module.css'

const info = [
    {
        svg: <ContactSvg/>,
        text: "+57 3124631337",
    },
    {
        svg: <MailSvg/>,
        text: "santi.sanchez.restrepo@gmail.com",
    },
    {
        svg: <LinkedinSvg/>,
        text: "Santiago Sanchez Restrepo",
    },
];

export const ContactCont = () => {
    return (
        <div className={styles.container}>
            <div className={styles.secondContainer}>
                {info.map(({svg, text}) => (
                    <div key={text} className={styles.thirdContainer}>
                        {svg}
                        <p className={styles.text}>{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
