import { Component } from 'react';
import styles from '../../styles/styles.module.scss';
import introStyles from './intro.module.scss';

class Right extends Component {
    highlightText = (text) => {
        // 강조할 텍스트 목록
        const highlights = [
            '9년의 오너십과 책임감',
            '복잡한 레거시의 웹 표준 전환',
            "전략적 인프라 및 DB 현대화",
            "사용자 중심의 설계 철학"
        ];
        
        // 모든 강조 텍스트를 하나의 정규식으로 결합
        const pattern = new RegExp(`(${highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
        
        // 텍스트를 분할하여 배열로 변환
        const parts = text.split(pattern);
        
        // 각 부분을 React 요소로 변환
        return parts.map((part, index) => {
            // 강조할 텍스트인 경우
            if (highlights.includes(part)) {
                return (
                    <strong key={index} className={introStyles.highlight}>
                        {part}
                    </strong>
                );
            }
            // 일반 텍스트인 경우
            return part;
        });
    }

    render() {
        const content = this.props.content;
        const intro = content.intro.split("\n\n").map((line, index) => (
            <p key={index}>
                {this.highlightText(line)}
                <br />
            </p>
        ));

        return (
            <div className={styles.Right}>
                {intro}
            </div>
        );
    }
}

export default Right;