import { Flex } from 'antd';
import React, { useState, type ReactNode } from 'react';
import s from './styles.module.less';

type Props = {
    children: ReactNode|ReactNode[];
    title: string;
    link: string;
}

const ContactButton: React.FC<Props> = ({
    children,
    title,
    link,
}) => {
    const [isExpanded, setExpanded] = useState<boolean>(false);

    return (
        <Flex
            justify="center"
            align="center"
            onMouseOver={() => {setExpanded(true)}}
            onMouseLeave={() => {setExpanded(false)}}
        >
            <a className={s.container} target="_blank" href={link}>
                { children }
                {isExpanded && (<span className={s.title}>{title}</span>)}
            </a>
        </Flex>
    );
};

export default ContactButton;