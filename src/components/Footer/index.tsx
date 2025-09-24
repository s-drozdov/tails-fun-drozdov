import { DateTime } from 'luxon';
import s from './styles.module.less';

const Footer: React.FC = () => {
    return (
        <div className={s.footer}>Georgia, Tbilisi. { DateTime.now().year }</div>
    );
};

export default Footer;