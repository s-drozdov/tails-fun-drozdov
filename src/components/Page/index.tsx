import s from '../Page/styles.module.less';
import { Flex, Card, Avatar, Image, Spin } from 'antd';
import { FacebookOutlined, GithubOutlined, MailOutlined, LoadingOutlined } from '@ant-design/icons';
import ContactButton from '../ContactButton';
import photo from '../../assets/gd.jpg';
import React, { useEffect, useState } from 'react';
import antdIcon from '../../assets/stack/antd.svg';
import dockerIcon from '../../assets/stack/docker.svg';
import laravelIcon from '../../assets/stack/laravel.svg';
import moongodbIcon from '../../assets/stack/mongodb.svg';
import mysqlIcon from '../../assets/stack/mysql.svg';
import phpIcon from '../../assets/stack/php.svg';
import postgresqlIcon from '../../assets/stack/postgresql.svg';
import rabbitmqIcon from '../../assets/stack/rabbitmq.svg';
import reactIcon from '../../assets/stack/react.svg';
import yiiIcon from '../../assets/stack/yii2.svg';
import androidIcon from '../../assets/stack/android.svg';
import appleIcon from '../../assets/stack/apple.svg';
import kafkaIcon from '../../assets/stack/kafka.svg';
import kubernetesIcon from '../../assets/stack/kubernetes.svg';
import linuxIcon from '../../assets/stack/linux.svg';
import reduxSagaIcon from '../../assets/stack/redux-saga.svg';
import symfonyIcon from '../../assets/stack/symfony.svg';
import typescriptIcon from '../../assets/stack/typescript.svg';
import Footer from '../Footer';

const { Meta } = Card;

const Page: React.FC = () => {
    const [isLoaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <Flex vertical={true} className={s.container} align="center">
            {isLoaded ? (
                <Flex vertical={true} className={s.container} justify="center" align="center">
                    <Card
                        className={s.card}
                        cover={<Image
                            src={photo}
                            preview={{
                                toolbarRender: () => null,
                            }}
                        />}
                        actions={[
                            <ContactButton
                                title="My facebook"
                                link="https://www.facebook.com/profile.php?id=61581115200785"
                            >
                                <FacebookOutlined key="facebook" />
                            </ContactButton>,
                            <ContactButton
                                title="Email me"
                                link="mailto:s.i.drozdov88@gmail.com"
                            >
                                <MailOutlined key="mail" />
                            </ContactButton>,
                            <ContactButton
                                title="My code examples"
                                link="https://github.com/s-drozdov"
                            >
                                <GithubOutlined key="code_examples" />
                            </ContactButton>,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                            title="Individual Entrepreneur Sergei Drozdov"
                            description="Professional developer. Web & mobile applications from stratch. High availability. Modern approach."
                        />
                    </Card>
                    <Flex className={s.skillContainer} justify="space-around">
                        <Image height={40} preview={false} src={phpIcon} />
                        <Image height={40} preview={false} src={laravelIcon} />
                        <Image height={40} preview={false} src={moongodbIcon} />
                        <Image height={40} preview={false} src={postgresqlIcon} />
                        <Image height={40} preview={false} src={rabbitmqIcon} />
                        <Image height={40} preview={false} src={yiiIcon} />
                        <Image height={40} preview={false} src={mysqlIcon} />
                        <Image height={40} preview={false} src={dockerIcon} />
                        <Image height={40} preview={false} src={reactIcon} />
                    </Flex>
                    <Flex className={s.skillContainer} justify="space-around">
                        <Image height={40} preview={false} src={antdIcon} />
                        <Image height={40} preview={false} src={androidIcon} />
                        <Image height={40} preview={false} src={appleIcon} />
                        <Image height={40} preview={false} src={kubernetesIcon} />
                        <Image height={40} preview={false} src={linuxIcon} />
                        <Image height={40} preview={false} src={kafkaIcon} />
                        <Image height={40} preview={false} src={typescriptIcon} />
                        <Image height={40} preview={false} src={reduxSagaIcon} />
                        <Image height={40} preview={false} src={symfonyIcon} />
                    </Flex>
                </Flex>
                ) : (<Spin indicator={<LoadingOutlined style={{ fontSize: 62 }} spin />} />)}
                <Footer />
        </Flex>
    );
};

export default Page;