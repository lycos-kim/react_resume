import { Component } from 'react';
import styles from '../../styles/styles.module.scss';
import intro from './intro.module.scss';
import { getProfilePath } from '../../utils/paths';

class Left extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Left} style={{ lineHeight: 0 }}>
                <img className={intro.profile} src={getProfilePath(content.profile)} alt='alt_profile'></img>
            </div>
        );
    }
}

export default Left;