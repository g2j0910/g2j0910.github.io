// TETO/EGGN 질문 데이터 (이상수의 연애 먹이사슬 이론 기반)
const tetoEggnQuestions = [
    {
        question: "새로운 사람을 만날 때 나는?",
        options: [
            "적극적으로 먼저 말을 건다",
            "상대방이 먼저 다가오기를 기다린다",
            "자연스럽게 대화를 시작한다",
            "관찰하면서 적절한 타이밍을 기다린다"
        ],
        scores: { 0: "테토", 1: "에겐", 2: "테토", 3: "에겐" }
    },
    {
        question: "연애에서 나는?",
        options: [
            "직접적으로 대시하고 주도한다",
            "상대의 대시를 받아들이는 편이다",
            "상호작용하면서 자연스럽게 발전한다",
            "감정의 흐름에 따라 움직인다"
        ],
        scores: { 0: "테토", 1: "에겐", 2: "테토", 3: "에겐" }
    },
    {
        question: "갈등 상황에서 나는?",
        options: [
            "직면해서 해결하려 한다",
            "회피하거나 시간을 두고 생각한다",
            "논리적으로 분석해서 해결한다",
            "감정적으로 상처받기 쉽다"
        ],
        scores: { 0: "테토", 1: "에겐", 2: "테토", 3: "에겐" }
    },
    {
        question: "일상에서 나는?",
        options: [
            "활동적이고 에너지가 넘친다",
            "조용하고 차분한 편이다",
            "목표 지향적이고 체계적이다",
            "감성적이고 예술적이다"
        ],
        scores: { 0: "테토", 1: "에겐", 2: "테토", 3: "에겐" }
    },
    {
        question: "패션에 대해 나는?",
        options: [
            "간결하고 실용적인 스타일을 선호한다",
            "트렌디하고 세련된 스타일을 좋아한다",
            "클래식하고 깔끔한 스타일을 선호한다",
            "여성스럽고 부드러운 스타일을 좋아한다"
        ],
        scores: { 0: "테토", 1: "에겐", 2: "테토", 3: "에겐" }
    },
    {
        question: "감정 표현에 대해 나는?",
        options: [
            "행동으로 표현하는 편이다",
            "말이나 분위기로 전달한다",
            "직설적이고 명확하게 표현한다",
            "섬세하고 우회적으로 표현한다"
        ],
        scores: { 0: "테토", 1: "에겐", 2: "테토", 3: "에겐" }
    },
    {
        question: "취미 활동은?",
        options: [
            "운동이나 활동적인 것을 좋아한다",
            "독서나 영화 감상 같은 정적인 것을 선호한다",
            "실용적이고 생산적인 활동을 좋아한다",
            "예술이나 창작 활동에 관심이 많다"
        ],
        scores: { 0: "테토", 1: "에겐", 2: "테토", 3: "에겐" }
    },
    {
        question: "사람들과의 관계에서 나는?",
        options: [
            "리더십을 발휘하는 편이다",
            "따르는 편이 편하다",
            "독립적이고 자유로운 관계를 선호한다",
            "깊이 있는 정서적 교감을 중요시한다"
        ],
        scores: { 0: "테토", 1: "에겐", 2: "테토", 3: "에겐" }
    },
    {
        question: "의사결정을 할 때 나는?",
        options: [
            "빠르고 직관적으로 결정한다",
            "신중하게 생각하고 결정한다",
            "논리적으로 분석해서 결정한다",
            "감정과 직감을 고려한다"
        ],
        scores: { 0: "테토", 1: "에겐", 2: "테토", 3: "에겐" }
    },
    {
        question: "스트레스 해소 방법은?",
        options: [
            "활동적으로 몸을 움직인다",
            "조용히 혼자만의 시간을 가진다",
            "문제를 해결하거나 계획을 세운다",
            "예술이나 감성적 활동을 한다"
        ],
        scores: { 0: "테토", 1: "에겐", 2: "테토", 3: "에겐" }
    },
    {
        question: "이상형에 대해 나는?",
        options: [
            "강하고 남성적인 매력을 선호한다",
            "부드럽고 감성적인 매력을 선호한다",
            "실용적이고 안정적인 사람을 선호한다",
            "창의적이고 예술적인 사람을 선호한다"
        ],
        scores: { 0: "테토", 1: "에겐", 2: "테토", 3: "에겐" }
    },
    {
        question: "나의 에너지는?",
        options: [
            "외향적이고 활발하다",
            "내향적이고 차분하다",
            "목표 지향적이고 체계적이다",
            "감성적이고 창의적이다"
        ],
        scores: { 0: "테토", 1: "에겐", 2: "테토", 3: "에겐" }
    },
    {
        question: "연애에서 나의 스타일은?",
        options: [
            "직접적이고 적극적으로 대시한다",
            "상대의 대시를 받아들이는 편이다",
            "자연스럽게 발전하는 것을 선호한다",
            "감정의 흐름에 따라 움직인다"
        ],
        scores: { 0: "테토", 1: "에겐", 2: "테토", 3: "에겐" }
    },
    {
        question: "스트레스 상황에서 나는?",
        options: [
            "문제를 직접 해결하려 한다",
            "시간을 두고 생각한다",
            "논리적으로 분석한다",
            "감정적으로 상처받는다"
        ],
        scores: { 0: "테토", 1: "에겐", 2: "테토", 3: "에겐" }
    }
];

// 다국어 TETO/EGGN 유형별 특성 데이터
const tetoEggnData = {
    ko: {
        "테토형": {
            type: "테스토스테론형",
            description: "공격성과 사냥 본능이 강하며, 자기주장이 강하고 리더십이 있는 유형",
            characteristics: "감정보다 논리를 우선시하고, 도전과 모험을 좋아하며, 현실 지향적",
            relationship_style: "감정보다는 행동으로 표현하고, 직접적으로 대시하며, 주도권을 잡는 스타일",
            ideal_partner: "에겐형 - 부드러운 여성성과 섬세한 감수성을 지닌 상대",
            strength: "강한 추진력과 실행력, 리더십",
            weakness: "감정 표현의 어려움, 섬세한 감정 교류 부족"
        },
        "에겐형": {
            type: "에스트로겐형", 
            description: "감수성과 섬세함이 드러나며, 예민하고 내면지향적인 유형",
            characteristics: "추상적 개념에 흥미가 많고, 정적인 취미를 선호하며, 트렌드에 민감",
            relationship_style: "수동적이고, 감정 표현을 말이나 분위기로 전하며, 섬세한 교류를 중시",
            ideal_partner: "테토형 - 자신에게 부족한 추진력과 에너지를 지닌 상대",
            strength: "섬세한 감정 이해와 공감 능력, 예술적 감각",
            weakness: "추진력 부족, 결정의 어려움"
        },
        "테토남": {
            type: "테스토스테론 남성",
            description: "공격성과 사냥 본능이 강하며, 자기주장이 강하고 리더십이 있는 남성형",
            characteristics: "감정보다 논리를 우선시하고, 도전과 모험을 좋아하며, 현실 지향적",
            relationship_style: "감정보다는 행동으로 표현하고, 직접적으로 대시하며, 주도권을 잡는 스타일",
            ideal_partner: "에겐녀 - 부드러운 여성성과 섬세한 감수성을 지닌 상대",
            strength: "강한 추진력과 실행력, 리더십",
            weakness: "감정 표현의 어려움, 섬세한 감정 교류 부족"
        },
        "에겐남": {
            type: "에스트로겐 남성", 
            description: "감수성과 섬세함이 드러나며, 예민하고 내면지향적인 남성형",
            characteristics: "추상적 개념에 흥미가 많고, 정적인 취미를 선호하며, 트렌드에 민감",
            relationship_style: "수동적이고, 감정 표현을 말이나 분위기로 전하며, 섬세한 교류를 중시",
            ideal_partner: "테토녀 - 자신에게 부족한 추진력과 에너지를 지닌 상대",
            strength: "섬세한 감정 이해와 공감 능력, 예술적 감각",
            weakness: "추진력 부족, 결정의 어려움"
        },
        "테토녀": {
            type: "테스토스테론 여성",
            description: "활발하고 적극적이며, 독립심이 강하고 도전적인 태도를 지닌 여성형",
            characteristics: "활동적이고 건강한 에너지를 지니며, 감성보다 현실에 가까운 사고방식",
            relationship_style: "호감 있는 이성에게 먼저 대시하고, 감정 표현이 직설적이며 능동적",
            ideal_partner: "테토남 - 자신보다 더 강한 양기와 남성적인 매력을 지닌 상대",
            strength: "강한 에너지와 독립성, 실행력",
            weakness: "섬세한 감정 교류 부족, 갈등 상황 회피"
        },
        "에겐녀": {
            type: "에스트로겐 여성",
            description: "부드럽고 감성적인 정서 중심으로, 섬세하고 정적인 분위기의 여성형",
            characteristics: "타인의 감정에 민감하고 공감 능력이 높으며, 복잡한 내면 구조를 지님",
            relationship_style: "수동적이고, 감성적 유대와 안정감을 중요시하며, 반응의 리듬",
            ideal_partner: "에겐남 - 자신의 감수성과 정서를 잘 이해해주는 상대",
            strength: "높은 공감 능력과 감성적 교류, 예술적 감각",
            weakness: "자기주장 부족, 상처받기 쉬움"
        }
    },
    en: {
        "테토형": {
            type: "Testosterone Type",
            description: "Type with strong aggression and hunting instincts, strong self-assertion and leadership",
            characteristics: "Prioritizes logic over emotions, enjoys challenges and adventures, reality-oriented",
            relationship_style: "Expresses through actions rather than emotions, approaches directly, takes initiative",
            ideal_partner: "Egen Type - Partner with gentle femininity and delicate sensitivity",
            strength: "Strong drive and execution power, leadership",
            weakness: "Difficulty in emotional expression, lack of delicate emotional exchange"
        },
        "에겐형": {
            type: "Estrogen Type",
            description: "Type with sensitivity and delicacy, sensitive and introspective",
            characteristics: "Interested in abstract concepts, prefers static hobbies, sensitive to trends",
            relationship_style: "Passive, expresses emotions through words or atmosphere, values delicate communication",
            ideal_partner: "Teto Type - Partner with drive and energy that they lack",
            strength: "Delicate emotional understanding and empathy, artistic sense",
            weakness: "Lack of drive, difficulty in decision making"
        },
        "테토남": {
            type: "Testosterone Male",
            description: "Male type with strong aggression and hunting instincts, strong self-assertion and leadership",
            characteristics: "Prioritizes logic over emotions, enjoys challenges and adventures, reality-oriented",
            relationship_style: "Expresses through actions rather than emotions, approaches directly, takes initiative",
            ideal_partner: "Egen Woman - Partner with gentle femininity and delicate sensitivity",
            strength: "Strong drive and execution power, leadership",
            weakness: "Difficulty in emotional expression, lack of delicate emotional exchange"
        },
        "에겐남": {
            type: "Estrogen Male",
            description: "Male type with sensitivity and delicacy, sensitive and introspective",
            characteristics: "Interested in abstract concepts, prefers static hobbies, sensitive to trends",
            relationship_style: "Passive, expresses emotions through words or atmosphere, values delicate communication",
            ideal_partner: "Teto Woman - Partner with drive and energy that they lack",
            strength: "Delicate emotional understanding and empathy, artistic sense",
            weakness: "Lack of drive, difficulty in decision making"
        },
        "테토녀": {
            type: "Testosterone Female",
            description: "Female type with lively and active nature, strong independence and challenging attitude",
            characteristics: "Has active and healthy energy, thinking closer to reality than emotion",
            relationship_style: "Approaches interested partners first, direct in emotional expression, proactive",
            ideal_partner: "Teto Man - Partner with stronger yang energy and masculine charm than themselves",
            strength: "Strong energy and independence, execution power",
            weakness: "Lack of delicate emotional exchange, avoiding conflict situations"
        },
        "에겐녀": {
            type: "Estrogen Female",
            description: "Female type centered on gentle and emotional sentiment, delicate and static atmosphere",
            characteristics: "Sensitive to others' emotions with high empathy, has complex inner structure",
            relationship_style: "Passive, values emotional bonds and stability, rhythm of response",
            ideal_partner: "Egen Man - Partner who understands their sensitivity and sentiment well",
            strength: "High empathy and emotional exchange, artistic sense",
            weakness: "Lack of self-assertion, easily hurt"
        }
    },
    zh: {
        "테토형": {
            type: "睾酮型",
            description: "具有强烈攻击性和狩猎本能的类型，自我主张强且有领导力",
            characteristics: "优先考虑逻辑而非情感，喜欢挑战和冒险，现实导向",
            relationship_style: "通过行动而非情感表达，直接接近，掌握主导权",
            ideal_partner: "雌酮型 - 具有温柔女性特质和细腻敏感性的伴侣",
            strength: "强大的驱动力和执行力，领导力",
            weakness: "情感表达困难，缺乏细腻的情感交流"
        },
        "에겐형": {
            type: "雌酮型",
            description: "表现出敏感性和细腻的类型，敏感且内向",
            characteristics: "对抽象概念感兴趣，偏好静态爱好，对潮流敏感",
            relationship_style: "被动，通过语言或氛围表达情感，重视细腻交流",
            ideal_partner: "睾酮型 - 具有他们所缺乏的驱动力和能量的伴侣",
            strength: "细腻的情感理解和共情能力，艺术感",
            weakness: "缺乏驱动力，决策困难"
        },
        "테토남": {
            type: "睾酮男性",
            description: "具有强烈攻击性和狩猎本能的男性类型，自我主张强且有领导力",
            characteristics: "优先考虑逻辑而非情感，喜欢挑战和冒险，现实导向",
            relationship_style: "通过行动而非情感表达，直接接近，掌握主导权",
            ideal_partner: "雌酮女 - 具有温柔女性特质和细腻敏感性的伴侣",
            strength: "强大的驱动力和执行力，领导力",
            weakness: "情感表达困难，缺乏细腻的情感交流"
        },
        "에겐남": {
            type: "雌酮男性",
            description: "表现出敏感性和细腻的男性类型，敏感且内向",
            characteristics: "对抽象概念感兴趣，偏好静态爱好，对潮流敏感",
            relationship_style: "被动，通过语言或氛围表达情感，重视细腻交流",
            ideal_partner: "睾酮女 - 具有他们所缺乏的驱动力和能量的伴侣",
            strength: "细腻的情感理解和共情能力，艺术感",
            weakness: "缺乏驱动力，决策困难"
        },
        "테토녀": {
            type: "睾酮女性",
            description: "活泼积极且具有强烈独立性和挑战态度的女性类型",
            characteristics: "具有活跃健康的能量，思维更接近现实而非情感",
            relationship_style: "主动接近感兴趣的伴侣，情感表达直接，积极主动",
            ideal_partner: "睾酮男 - 比他们具有更强阳性能量和男性魅力的伴侣",
            strength: "强大的能量和独立性，执行力",
            weakness: "缺乏细腻的情感交流，回避冲突情况"
        },
        "에겐녀": {
            type: "雌酮女性",
            description: "以温柔情感为中心的细腻静态氛围的女性类型",
            characteristics: "对他人的情感敏感且具有高共情能力，具有复杂的内在结构",
            relationship_style: "被动，重视情感纽带和稳定性，反应的节奏",
            ideal_partner: "雌酮男 - 很好地理解他们敏感性和情感的伴侣",
            strength: "高共情能力和情感交流，艺术感",
            weakness: "缺乏自我主张，容易受伤"
        }
    },
    ja: {
        "테토형": {
            type: "テストステロン型",
            description: "攻撃性と狩猟本能が強く、自己主張が強くリーダーシップがある型",
            characteristics: "感情より論理を優先し、挑戦と冒険を好み、現実指向",
            relationship_style: "感情より行動で表現し、直接的にアプローチし、主導権を握るスタイル",
            ideal_partner: "エゲン型 - 優しい女性性と繊細な感受性を持つ相手",
            strength: "強い推進力と実行力、リーダーシップ",
            weakness: "感情表現の困難さ、繊細な感情交流の不足"
        },
        "에겐형": {
            type: "エストロゲン型",
            description: "感受性と繊細さが現れ、敏感で内向的な型",
            characteristics: "抽象的概念に興味が多く、静的な趣味を好み、トレンドに敏感",
            relationship_style: "受動的で、感情表現を言葉や雰囲気で伝え、繊細な交流を重視",
            ideal_partner: "テト型 - 自分に不足している推進力とエネルギーを持つ相手",
            strength: "繊細な感情理解と共感能力、芸術的センス",
            weakness: "推進力不足、決断の困難さ"
        },
        "테토남": {
            type: "テストステロン男性",
            description: "攻撃性と狩猟本能が強く、自己主張が強くリーダーシップがある男性型",
            characteristics: "感情より論理を優先し、挑戦と冒険を好み、現実指向",
            relationship_style: "感情より行動で表現し、直接的にアプローチし、主導権を握るスタイル",
            ideal_partner: "エゲン女 - 優しい女性性と繊細な感受性を持つ相手",
            strength: "強い推進力と実行力、リーダーシップ",
            weakness: "感情表現の困難さ、繊細な感情交流の不足"
        },
        "에겐남": {
            type: "エストロゲン男性",
            description: "感受性と繊細さが現れ、敏感で内向的な男性型",
            characteristics: "抽象的概念に興味が多く、静的な趣味を好み、トレンドに敏感",
            relationship_style: "受動的で、感情表現を言葉や雰囲気で伝え、繊細な交流を重視",
            ideal_partner: "テト女 - 自分に不足している推進力とエネルギーを持つ相手",
            strength: "繊細な感情理解と共感能力、芸術的センス",
            weakness: "推進力不足、決断の困難さ"
        },
        "테토녀": {
            type: "テストステロン女性",
            description: "活発で積極的、独立心が強く挑戦的な態度を持つ女性型",
            characteristics: "活動的で健康なエネルギーを持ち、感性より現実に近い思考方式",
            relationship_style: "好意のある異性に先にアプローチし、感情表現が率直で能動的",
            ideal_partner: "テト男 - 自分より強い陽気と男性的魅力を持つ相手",
            strength: "強いエネルギーと独立性、実行力",
            weakness: "繊細な感情交流の不足、対立状況回避"
        },
        "에겐녀": {
            type: "エストロゲン女性",
            description: "優しく感性的な情緒中心で、繊細で静的な雰囲気の女性型",
            characteristics: "他人の感情に敏感で共感能力が高く、複雑な内面構造を持つ",
            relationship_style: "受動的で、感性的絆と安定感を重視し、反応のリズム",
            ideal_partner: "エゲン男 - 自分の感受性と情緒をよく理解してくれる相手",
            strength: "高い共感能力と感性的交流、芸術的センス",
            weakness: "自己主張不足、傷つきやすい"
        }
    }
};

// 연애 먹이사슬 순환 구조
const relationshipChain = {
    "에겐녀": "에겐남",
    "에겐남": "테토녀", 
    "테토녀": "테토남",
    "테토남": "에겐녀"
};

// MBTI 질문 데이터 (12문항, 4개 보기)
const mbtiQuestions = [
    {
        question: "처음 만난 사람과 식사한다면?",
        options: [
            "자연스럽게 먼저 말을 건다",
            "듣고 관찰하면서 반응한다", 
            "상대방이 먼저 말을 걸어주기를 기다린다",
            "함께 있는 다른 사람들을 통해 대화를 시작한다"
        ],
        dimension: "E-I",
        scores: { 0: "E", 1: "I", 2: "I", 3: "E" }
    },
    {
        question: "새로운 장소에 갔을 때?",
        options: [
            "사람들과 어울려 즐긴다",
            "조용히 둘러보며 감상한다",
            "가이드나 설명서를 찾아본다",
            "즉흥적으로 탐험한다"
        ],
        dimension: "E-I",
        scores: { 0: "E", 1: "I", 2: "I", 3: "E" }
    },
    {
        question: "문제를 해결할 때?",
        options: [
            "직감과 창의성을 활용한다",
            "경험과 사실을 바탕으로 한다",
            "다른 사람의 조언을 구한다",
            "체계적으로 분석하고 계획한다"
        ],
        dimension: "N-S",
        scores: { 0: "N", 1: "S", 2: "S", 3: "N" }
    },
    {
        question: "미래에 대해 생각할 때?",
        options: [
            "무한한 가능성을 상상한다",
            "현실적인 계획을 세운다",
            "과거의 경험을 바탕으로 예측한다",
            "다양한 시나리오를 고려한다"
        ],
        dimension: "N-S",
        scores: { 0: "N", 1: "S", 2: "S", 3: "N" }
    },
    {
        question: "의사결정을 할 때?",
        options: [
            "논리적 분석을 우선한다",
            "사람들의 감정을 고려한다",
            "객관적 데이터를 수집한다",
            "직감과 감정을 균형있게 고려한다"
        ],
        dimension: "T-F",
        scores: { 0: "T", 1: "F", 2: "T", 3: "F" }
    },
    {
        question: "갈등 상황에서?",
        options: [
            "공정함과 원칙을 지킨다",
            "조화와 이해를 추구한다",
            "문제의 근본 원인을 찾아 해결한다",
            "모든 사람이 만족할 수 있는 방법을 찾는다"
        ],
        dimension: "T-F",
        scores: { 0: "T", 1: "F", 2: "T", 3: "F" }
    },
    {
        question: "일정을 관리할 때?",
        options: [
            "계획을 세우고 체계적으로 한다",
            "상황에 따라 유연하게 대응한다",
            "우선순위를 정하고 중요한 것부터 처리한다",
            "즉흥적이지만 효율적으로 처리한다"
        ],
        dimension: "J-P",
        scores: { 0: "J", 1: "P", 2: "J", 3: "P" }
    },
    {
        question: "새로운 경험을 할 때?",
        options: [
            "미리 준비하고 계획한다",
            "즉흥적으로 즐긴다",
            "필요한 정보를 수집한 후 시작한다",
            "기회가 있을 때 바로 도전한다"
        ],
        dimension: "J-P",
        scores: { 0: "J", 1: "P", 2: "J", 3: "P" }
    },
    {
        question: "에너지를 얻는 방법은?",
        options: [
            "사람들과 함께하는 시간",
            "혼자만의 시간",
            "새로운 활동과 도전",
            "익숙하고 편안한 환경"
        ],
        dimension: "E-I",
        scores: { 0: "E", 1: "I", 2: "E", 3: "I" }
    },
    {
        question: "정보를 받아들일 때?",
        options: [
            "큰 그림과 의미를 찾는다",
            "구체적이고 실용적인 내용을 선호한다",
            "새로운 관점과 아이디어를 추구한다",
            "검증된 사실과 데이터를 중시한다"
        ],
        dimension: "N-S",
        scores: { 0: "N", 1: "S", 2: "N", 3: "S" }
    },
    {
        question: "다른 사람을 평가할 때?",
        options: [
            "객관적이고 논리적이다",
            "공감적이고 따뜻하다",
            "성과와 결과를 중시한다",
            "성장 가능성과 동기를 고려한다"
        ],
        dimension: "T-F",
        scores: { 0: "T", 1: "F", 2: "T", 3: "F" }
    },
    {
        question: "변화에 대한 태도는?",
        options: [
            "결정을 내리고 실행한다",
            "정보를 더 수집하고 기다린다",
            "신중하게 분석한 후 행동한다",
            "적응하면서 점진적으로 변화한다"
        ],
        dimension: "J-P",
        scores: { 0: "J", 1: "P", 2: "J", 3: "P" }
    }
];

// 세계관 캐릭터 데이터
const characterData = {
    "INTJ": {
        name: "별의 도서관 예언자 루네아",
        description: "세상의 흐름을 읽는 고대 예언자. 전략적 사고와 깊은 통찰력으로 미래를 예측하며, 지식의 보관자로서 세상의 비밀을 지키는 신비로운 존재",
        abilities: "예지, 정신 연결, 전략적 계획",
        jobs: "작가, 상담가, 전략가, 연구원",
        icon: "🔮"
    },
    "INTP": {
        name: "시간의 수호자 크로노스",
        description: "논리와 창의성이 조화를 이루는 시간의 수호자. 복잡한 문제를 체계적으로 분석하며, 새로운 이론과 발견을 통해 세상을 이해하는 지적 탐험가",
        abilities: "시간 조작, 논리적 분석, 창의적 문제 해결",
        jobs: "과학자, 철학자, 프로그래머, 발명가",
        icon: "⏰"
    },
    "ENTJ": {
        name: "천상의 지휘관 아스트라",
        description: "강력한 리더십과 실행력으로 목표를 달성하는 천상의 지휘관. 대담한 비전과 전략적 사고로 팀을 이끌며, 혁신적인 변화를 만들어내는 카리스마 넘치는 지도자",
        abilities: "군단 지휘, 전략적 계획, 카리스마",
        jobs: "CEO, 정치인, 군인, 프로젝트 매니저",
        icon: "⚡"
    },
    "ENTP": {
        name: "혁신의 마법사 이노바",
        description: "끊임없는 호기심과 창의력으로 새로운 가능성을 발견하는 혁신의 마법사. 기존의 틀을 깨고 혁신적인 아이디어로 세상을 변화시키는 아이디어 뱅크",
        abilities: "혁신 마법, 아이디어 생성, 적응력",
        jobs: "기업가, 마케터, 변호사, 발명가",
        icon: "💡"
    },
    "INFJ": {
        name: "꿈의 예술가 루미나",
        description: "따뜻한 마음과 깊은 통찰력으로 세상을 더 나은 곳으로 만드는 꿈의 예술가. 타인의 감정을 이해하고 영감을 주며, 아름다운 꿈을 현실로 만드는 이상주의자",
        abilities: "꿈 조작, 감정 공감, 영감 부여",
        jobs: "작가, 상담가, 예술가, 교사",
        icon: "✨"
    },
    "INFP": {
        name: "자연의 시인 플로라",
        description: "순수한 마음과 창의적 영감으로 아름다움을 창조하는 자연의 시인. 깊은 감성과 상상력으로 세상의 아름다움을 발견하며, 진정성 있는 표현을 통해 마음을 울리는 예술가",
        abilities: "자연 조작, 감정 표현, 창작",
        jobs: "작가, 예술가, 음악가, 상담가",
        icon: "🌸"
    },
    "ENFJ": {
        name: "희망의 선도자 호프",
        description: "타인을 이끌고 영감을 주는 카리스마로 모두의 잠재력을 끌어올리는 희망의 선도자. 따뜻한 리더십과 공감 능력으로 팀을 하나로 모으며, 긍정적인 변화를 만들어내는 멘토",
        abilities: "영감 부여, 팀 리더십, 공감 능력",
        jobs: "교사, 상담가, HR 매니저, 정치인",
        icon: "🌟"
    },
    "ENFP": {
        name: "자유의 모험가 마라",
        description: "열정과 창의력으로 새로운 경험을 추구하는 자유의 모험가. 활발한 상상력과 적응력으로 다양한 가능성을 탐험하며, 타인에게 영감을 주는 자유로운 영혼",
        abilities: "바람 조작, 적응력, 영감 전달",
        jobs: "기자, 예술가, 마케터, 상담가",
        icon: "🌪️"
    },
    "ISTJ": {
        name: "신뢰의 기사 가디언",
        description: "책임감과 신뢰성으로 안정적인 기반을 제공하는 신뢰의 기사. 체계적이고 실용적인 접근으로 일을 완성하며, 전통과 규칙을 존중하는 든든한 보호자",
        abilities: "방어 마법, 체계적 관리, 신뢰성",
        jobs: "회계사, 군인, 경찰, 관리자",
        icon: "🛡️"
    },
    "ISFJ": {
        name: "따뜻한 수호자 쉘터",
        description: "타인을 돌보고 보호하는 따뜻한 마음으로 모두의 편안함을 책임지는 따뜻한 수호자. 실용적이고 헌신적인 성격으로 안정감을 제공하며, 세심한 배려로 타인을 보호하는 보호자",
        abilities: "치유 마법, 보호 능력, 세심한 배려",
        jobs: "간호사, 교사, 상담가, 사서",
        icon: "🏠"
    },
    "ESTJ": {
        name: "질서의 관리자 오더",
        description: "체계적이고 실용적인 관리 능력으로 모든 것을 질서 있게 정리하는 질서의 관리자. 효율적이고 조직적인 접근으로 목표를 달성하며, 명확한 규칙과 구조를 만드는 관리자",
        abilities: "질서 조작, 조직 관리, 효율성",
        jobs: "경영자, 군인, 경찰, 행정가",
        icon: "⚖️"
    },
    "ESFJ": {
        name: "사교의 달인 소셜",
        description: "따뜻한 마음과 사교성으로 모두가 즐거운 분위기를 만드는 사교의 달인. 타인을 돕고 조화를 추구하며, 실용적이고 협력적인 성격으로 팀의 분위기를 이끄는 인기쟁이",
        abilities: "사교 마법, 분위기 조성, 협력 능력",
        jobs: "이벤트 플래너, HR 매니저, 판매원, 교사",
        icon: "🎭"
    },
    "ISTP": {
        name: "만능 재주꾼 스킬",
        description: "실용적이고 유연한 능력으로 어떤 상황에서도 적응하는 만능 재주꾼. 문제 해결 능력과 실용적 사고로 위기 상황을 극복하며, 다양한 기술을 습득하는 문제 해결사",
        abilities: "기술 습득, 문제 해결, 적응력",
        jobs: "기술자, 운동선수, 경찰, 의사",
        icon: "🔧"
    },
    "ISFP": {
        name: "자연의 아이 하모니",
        description: "자연스럽고 유연한 성격으로 아름다움과 조화를 추구하는 자연의 아이. 실용적이고 예술적인 감각으로 세상의 아름다움을 발견하며, 평화와 조화를 중시하는 예술가",
        abilities: "자연 조화, 예술적 감각, 평화 유지",
        jobs: "예술가, 디자이너, 간호사, 요리사",
        icon: "🌿"
    },
    "ESTP": {
        name: "행동의 용사 액션",
        description: "즉흥적이고 실용적인 행동력으로 순간의 기회를 놓치지 않는 행동의 용사. 현실적이고 적응력 있는 성격으로 위기 상황을 극복하며, 실용적인 해결책을 찾는 모험가",
        abilities: "즉시 행동, 위기 대응, 실용적 해결",
        jobs: "기업가, 운동선수, 경찰, 소방관",
        icon: "⚔️"
    },
    "ESFP": {
        name: "즐거움의 전달자 조이",
        description: "자발적이고 열정적인 성격으로 모든 곳에 즐거움을 전파하는 즐거움의 전달자. 실용적이고 사교적인 성격으로 타인을 즐겁게 하며, 긍정적인 에너지로 분위기를 밝게 만드는 엔터테이너",
        abilities: "즐거움 전파, 분위기 조성, 긍정 에너지",
        jobs: "엔터테이너, 판매원, 이벤트 플래너, 교사",
        icon: "🎪"
    }
};

// 캐릭터 궁합 데이터
const characterCompatibility = {
    "INTJ": { "ENFP": 95, "ENTP": 90, "INFJ": 85, "INFP": 80 },
    "INTP": { "ENFJ": 95, "ENTJ": 90, "INFJ": 85, "ENFP": 80 },
    "ENTJ": { "INFP": 95, "INTP": 90, "ENFP": 85, "INFJ": 80 },
    "ENTP": { "INFJ": 95, "INTJ": 90, "INFP": 85, "ENFJ": 80 },
    "INFJ": { "ENTP": 95, "ENFJ": 90, "INTJ": 85, "INTP": 80 },
    "INFP": { "ENTJ": 95, "ENFP": 90, "INTJ": 85, "ENTP": 80 },
    "ENFJ": { "INTP": 95, "INFJ": 90, "ENTP": 85, "INFP": 80 },
    "ENFP": { "INTJ": 95, "INFP": 90, "ENTJ": 85, "INTP": 80 },
    "ISTJ": { "ESFP": 95, "ESTP": 90, "ISFP": 85, "ESFJ": 80 },
    "ISFJ": { "ESTP": 95, "ESFP": 90, "ISTP": 85, "ESTJ": 80 },
    "ESTJ": { "ISFP": 95, "ISFJ": 90, "ISTP": 85, "ESFP": 80 },
    "ESFJ": { "ISTP": 95, "ISTJ": 90, "ISFP": 85, "ESTP": 80 },
    "ISTP": { "ESFJ": 95, "ESTJ": 90, "ISFJ": 85, "ESFP": 80 },
    "ISFP": { "ESTJ": 95, "ISTJ": 90, "ESFJ": 85, "ESTP": 80 },
    "ESTP": { "ISFJ": 95, "ISTP": 90, "ISTJ": 85, "ISFP": 80 },
    "ESFP": { "ISTJ": 95, "ESTP": 90, "ESTJ": 85, "ISTP": 80 }
};

// 호환성 매트릭스
const compatibilityMatrix = {
    "INTJ": { "ENFP": 95, "ENTP": 90, "INFJ": 85, "INFP": 80 },
    "INTP": { "ENFJ": 95, "ENTJ": 90, "INFJ": 85, "ENFP": 80 },
    "ENTJ": { "INFP": 95, "INTP": 90, "ENFP": 85, "INFJ": 80 },
    "ENTP": { "INFJ": 95, "INTJ": 90, "INFP": 85, "ENFJ": 80 },
    "INFJ": { "ENTP": 95, "ENFJ": 90, "INTJ": 85, "INTP": 80 },
    "INFP": { "ENTJ": 95, "ENFP": 90, "INTJ": 85, "ENTP": 80 },
    "ENFJ": { "INTP": 95, "INFJ": 90, "ENTP": 85, "INFP": 80 },
    "ENFP": { "INTJ": 95, "INFP": 90, "ENTJ": 85, "INTP": 80 },
    "ISTJ": { "ESFP": 95, "ESTP": 90, "ISFP": 85, "ESFJ": 80 },
    "ISFJ": { "ESTP": 95, "ESFP": 90, "ISTP": 85, "ESTJ": 80 },
    "ESTJ": { "ISFP": 95, "ISFJ": 90, "ISTP": 85, "ESFP": 80 },
    "ESFJ": { "ISTP": 95, "ISTJ": 90, "ISFP": 85, "ESTP": 80 },
    "ISTP": { "ESFJ": 95, "ESTJ": 90, "ISFJ": 85, "ESFP": 80 },
    "ISFP": { "ESTJ": 95, "ISTJ": 90, "ESFJ": 85, "ESTP": 80 },
    "ESTP": { "ISFJ": 95, "ISTP": 90, "ISTJ": 85, "ISFP": 80 },
    "ESFP": { "ISTJ": 95, "ESTP": 90, "ESTJ": 85, "ISTP": 80 }
};

// 다국어 지원 데이터
const translations = {
    ko: {
        // 헤더
        title: "Character Quest: 당신의 내면 캐릭터는 누구인가?",
        subtitle: "MBTI + TETO/EGGN 하이브리드 테스트",
        
        // 시작 화면
        welcome_title: "당신의 내면을 탐험해보세요",
        welcome_description: "MBTI와 TETO/EGGN을 결합한 독특한 성격 테스트로 당신만의 특별한 캐릭터를 발견하세요!",
        solo_test: "내면 캐릭터 발견",
        solo_test_desc: "24개의 질문으로 당신의 내면 캐릭터를 찾아보세요",
        inner_character_discovery: "내면 캐릭터 발견 테스트",
        character_compatibility_test: "캐릭터 궁합 테스트",
        duo_test: "캐릭터 궁합 테스트",
        duo_test_desc: "커플이나 친구와 함께 궁합을 테스트해보세요",
        
        // 이름 입력
        name_input_title: "플레이어 이름을 입력하세요",
        name_input_desc: "테스트를 시작하기 전에 두 플레이어의 이름을 입력해주세요",
        player1_label: "플레이어 1",
        player2_label: "플레이어 2",
        player1_placeholder: "이름을 입력하세요",
        player2_placeholder: "이름을 입력하세요",
        start_test: "테스트 시작",
        
        // 테스트 화면
        question_counter: "질문",
        current_player: "현재 차례",
        player_turn: "의 차례입니다",
        
        // 결과 화면
        result: "결과",
        result_title: "테스트 결과",
        your_inner_character: "당신의 내면 캐릭터",
        restart_test: "다시 테스트하기",
        share_result: "결과 공유하기",
        compatibility: "궁합",
        recommended_partner: "추천 파트너 캐릭터",
        character_compatibility_analysis: "캐릭터 궁합 분석",
        strengths: "강점",
        challenges: "도전 과제",
        advice: "조언",
        relationship_type: "관계 유형",
        improvement_points: "개선점",
        love_style: "연애 스타일",
        ideal_type: "이상형",
        back_button: "뒤로가기",
        
        // 유형별 테스트 결과 라벨
        characteristics: "특징",
        ideal_partner: "이상적인 파트너",
        recommended_jobs: "추천 직업",
        weaknesses: "약점",
        abilities: "능력",
        
        // TETO/EGGN 결과 섹션
        teto_eggn_analysis: "연애 성향 분석 (TETO/EGGN)",
        teto_eggn_type: "연애 유형",
        teto_eggn_strength: "강점",
        teto_eggn_weakness: "개선점",
        teto_eggn_relationship: "연애 스타일",
        teto_eggn_ideal: "이상형",
        
        // 다른 테스트
        other_tests_title: "다른 테스트도 해보세요!",
        romantic_test: "로맨틱 궁합 테스트",
        romantic_test_desc: "더 깊은 사랑의 궁합을 알아보세요",
        career_test: "직업 적성 테스트",
        career_test_desc: "당신에게 맞는 직업을 찾아보세요",
        personality_test: "성격 심화 분석",
        personality_test_desc: "더 자세한 성격 분석을 받아보세요",
        
        // MBTI 호환성 분석
        perfect_harmony: "완벽한 조화",
        high_compatibility: "높은 호환성",
        moderate_compatibility: "보통의 호환성",
        challenging_combination: "도전적 조합",
        growth_opportunity: "성장의 기회",
        very_high_compatibility_desc: "는 매우 높은 호환성을 보입니다. 서로를 완벽하게 이해하고 보완하는 관계입니다.",
        high_compatibility_desc: "는 높은 호환성을 보입니다. 서로의 차이점을 존중하며 성장할 수 있는 관계입니다.",
        moderate_compatibility_desc: "는 보통의 호환성을 보입니다. 서로의 관점을 이해하려는 노력이 필요합니다.",
        slight_difference_desc: "는 약간의 차이를 보입니다. 서로의 성격 차이를 이해하고 존중하는 것이 중요합니다.",
        different_tendencies_desc: "는 서로 다른 성향을 가지고 있습니다. 하지만 이러한 차이가 오히려 서로를 성장시킬 수 있는 기회가 될 수 있습니다.",
        perfect_harmony_strengths: "서로의 부족한 부분을 보완하고, 깊이 있는 이해와 존중을 바탕으로 한 관계",
        perfect_harmony_challenges: "때로는 너무 비슷한 관점으로 인해 새로운 시각이 부족할 수 있음",
        perfect_harmony_advice: "서로의 차이점을 인정하고, 새로운 경험을 함께 나누며 성장해보세요.",
        perfect_harmony_relationship: "로맨틱한 관계, 친구, 동료 등 모든 관계에서 탁월한 조합",
        high_compatibility_strengths: "서로를 보완하는 성향과 공통된 가치관으로 인한 안정적인 관계",
        high_compatibility_challenges: "가끔 서로의 접근 방식 차이로 인한 소소한 갈등이 있을 수 있음",
        high_compatibility_advice: "서로의 관점을 이해하려는 노력과 적극적인 소통이 중요합니다.",
        high_compatibility_relationship: "장기적인 관계에 적합하며, 서로를 성장시킬 수 있는 파트너십",
        moderate_compatibility_strengths: "서로 다른 관점으로 인한 새로운 시각과 학습 기회",
        moderate_compatibility_challenges: "서로의 성향 차이로 인한 이해 부족과 갈등 가능성",
        moderate_compatibility_advice: "서로의 차이를 이해하고 존중하는 마음가짐이 중요합니다.",
        moderate_compatibility_relationship: "적극적인 소통과 이해를 통해 발전할 수 있는 관계",
        challenging_combination_strengths: "완전히 다른 관점으로 인한 새로운 학습과 성장 기회",
        challenging_combination_challenges: "서로의 기본 성향 차이로 인한 지속적인 이해 노력 필요",
        challenging_combination_advice: "서로의 차이를 인정하고, 공통점을 찾아 함께 성장해보세요.",
        challenging_combination_relationship: "서로를 이해하려는 의지와 노력이 필요한 관계",
        growth_opportunity_strengths: "완전히 다른 관점으로 인한 균형잡힌 시각과 새로운 경험",
        growth_opportunity_challenges: "기본적인 성향 차이로 인한 지속적인 갈등과 이해 부족",
        growth_opportunity_advice: "서로의 차이를 기회로 삼아 함께 배우고 성장하는 마음가짐이 중요합니다.",
        growth_opportunity_relationship: "서로를 이해하려는 강한 의지와 인내심이 필요한 관계",
        
        // 모달
        modal_title: "알림",
        modal_confirm: "확인",
        
        // 푸터
        footer_copyright: "© 2025 MBTI + TETO 하이브리드 테스트. 모든 권리 보유.",
        
        // 메타 태그
        meta_description: "MBTI 성격 유형을 기반으로 한 세계관 캐릭터 테스트. 당신의 내면에 숨겨진 캐릭터를 발견해보세요! 무료 테스트, 정확한 분석, 재미있는 결과!",
        meta_keywords: "MBTI, 성격테스트, 캐릭터테스트, 궁합테스트, 무료테스트, 성격분석, 커플테스트, 친구테스트"
    },
    en: {
        // Header
        title: "Character Quest: Who is Your Inner Character?",
        subtitle: "MBTI + TETO/EGGN Hybrid Test",
        
        // Start screen
        welcome_title: "Explore Your Inner Self",
        welcome_description: "Discover your unique character through our special personality test combining MBTI and TETO/EGGN!",
        solo_test: "Discover Inner Character",
        solo_test_desc: "Find your inner character through 24 questions",
        inner_character_discovery: "Inner Character Discovery Test",
        character_compatibility_test: "Character Compatibility Test",
        duo_test: "Character Compatibility Test",
        duo_test_desc: "Test compatibility with your partner or friend",
        
        // Name input
        name_input_title: "Enter Player Names",
        name_input_desc: "Please enter both players' names before starting the test",
        player1_label: "Player 1",
        player2_label: "Player 2",
        player1_placeholder: "Enter name",
        player2_placeholder: "Enter name",
        start_test: "Start Test",
        
        // Test screen
        question_counter: "Question",
        current_player: "Current Turn",
        player_turn: "'s turn",
        
        // Result screen
        result: "Results",
        result_title: "Test Results",
        your_inner_character: "Your Inner Character",
        restart_test: "Take Test Again",
        share_result: "Share Results",
        compatibility: "Compatibility",
        recommended_partner: "Recommended Partner Character",
        character_compatibility_analysis: "Character Compatibility Analysis",
        strengths: "Strengths",
        challenges: "Challenges",
        advice: "Advice",
        relationship_type: "Relationship Type",
        improvement_points: "Improvement Points",
        love_style: "Love Style",
        ideal_type: "Ideal Type",
        back_button: "Back",
        
        // Test result labels
        characteristics: "Characteristics",
        ideal_partner: "Ideal Partner",
        recommended_jobs: "Recommended Jobs",
        weaknesses: "Weaknesses",
        abilities: "Abilities",
        
        // TETO/EGGN result section
        teto_eggn_analysis: "Relationship Tendency Analysis (TETO/EGGN)",
        teto_eggn_type: "Relationship Type",
        teto_eggn_strength: "Strengths",
        teto_eggn_weakness: "Areas for Improvement",
        teto_eggn_relationship: "Relationship Style",
        teto_eggn_ideal: "Ideal Type",
        
        // Other tests
        other_tests_title: "Try Other Tests Too!",
        romantic_test: "Romantic Compatibility Test",
        romantic_test_desc: "Discover deeper love compatibility",
        career_test: "Career Aptitude Test",
        career_test_desc: "Find a job that suits you",
        personality_test: "In-depth Personality Analysis",
        personality_test_desc: "Get a more detailed personality analysis",
        
        // MBTI Compatibility Analysis
        perfect_harmony: "Perfect Harmony",
        high_compatibility: "High Compatibility",
        moderate_compatibility: "Moderate Compatibility",
        challenging_combination: "Challenging Combination",
        growth_opportunity: "Growth Opportunity",
        very_high_compatibility_desc: " shows very high compatibility. They understand and complement each other perfectly.",
        high_compatibility_desc: " shows high compatibility. They can grow together while respecting each other's differences.",
        moderate_compatibility_desc: " shows moderate compatibility. Effort is needed to understand each other's perspectives.",
        slight_difference_desc: " shows slight differences. It's important to understand and respect each other's personality differences.",
        different_tendencies_desc: " have different tendencies. However, these differences can become opportunities for mutual growth.",
        perfect_harmony_strengths: "Complementing each other's weaknesses and building relationships based on deep understanding and respect",
        perfect_harmony_challenges: "Sometimes lack new perspectives due to too similar viewpoints",
        perfect_harmony_advice: "Acknowledge your differences and grow together by sharing new experiences.",
        perfect_harmony_relationship: "Excellent combination in all relationships: romantic, friendship, and work",
        high_compatibility_strengths: "Stable relationship due to complementary tendencies and shared values",
        high_compatibility_challenges: "Occasional minor conflicts due to differences in approach",
        high_compatibility_advice: "Effort to understand each other's perspectives and active communication are important.",
        high_compatibility_relationship: "Suitable for long-term relationships and partnerships that help each other grow",
        moderate_compatibility_strengths: "New perspectives and learning opportunities from different viewpoints",
        moderate_compatibility_challenges: "Potential conflicts and lack of understanding due to personality differences",
        moderate_compatibility_advice: "It's important to understand and respect each other's differences.",
        moderate_compatibility_relationship: "Relationships that can develop through active communication and understanding",
        challenging_combination_strengths: "New learning and growth opportunities from completely different perspectives",
        challenging_combination_challenges: "Continuous effort needed to understand basic personality differences",
        challenging_combination_advice: "Acknowledge your differences and find common ground to grow together.",
        challenging_combination_relationship: "Relationships requiring strong will and effort to understand each other",
        growth_opportunity_strengths: "Balanced perspective and new experiences from completely different viewpoints",
        growth_opportunity_challenges: "Continuous conflicts and lack of understanding due to basic personality differences",
        growth_opportunity_advice: "It's important to view differences as opportunities to learn and grow together.",
        growth_opportunity_relationship: "Relationships requiring strong will and patience to understand each other",
        
        // Modal
        modal_title: "Notification",
        modal_confirm: "Confirm",
        
        // Footer
        footer_copyright: "© 2025 MBTI + TETO Hybrid Test. All rights reserved.",
        
        // Meta tags
        meta_description: "MBTI personality type-based worldview character test. Discover the character hidden within you! Free test, accurate analysis, fun results!",
        meta_keywords: "MBTI, personality test, character test, compatibility test, free test, personality analysis, couple test, friend test"
    },
    zh: {
        // 头部
        title: "角色探索：你的内心角色是谁？",
        subtitle: "MBTI + TETO/EGGN 混合测试",
        
        // 开始界面
        welcome_title: "探索你的内心世界",
        welcome_description: "通过结合MBTI和TETO/EGGN的特殊性格测试，发现你独特的角色！",
        solo_test: "发现内心角色",
        solo_test_desc: "通过24个问题找到你的内心角色",
        inner_character_discovery: "内心角色发现测试",
        character_compatibility_test: "角色匹配测试",
        duo_test: "角色匹配测试",
        duo_test_desc: "与伴侣或朋友一起测试匹配度",
        
        // 姓名输入
        name_input_title: "输入玩家姓名",
        name_input_desc: "开始测试前请输入两位玩家的姓名",
        player1_label: "玩家1",
        player2_label: "玩家2",
        player1_placeholder: "输入姓名",
        player2_placeholder: "输入姓名",
        start_test: "开始测试",
        
        // 测试界面
        question_counter: "问题",
        current_player: "当前回合",
        player_turn: "的回合",
        
        // 结果界面
        result: "结果",
        result_title: "测试结果",
        your_inner_character: "你的内心角色",
        restart_test: "重新测试",
        share_result: "分享结果",
        compatibility: "匹配度",
        recommended_partner: "推荐伴侣角色",
        character_compatibility_analysis: "角色匹配分析",
        strengths: "优势",
        challenges: "挑战",
        advice: "建议",
        relationship_type: "关系类型",
        improvement_points: "改进点",
        love_style: "恋爱风格",
        ideal_type: "理想类型",
        back_button: "返回",
        
        // 测试结果标签
        characteristics: "特征",
        ideal_partner: "理想伴侣",
        recommended_jobs: "推荐职业",
        weaknesses: "弱点",
        abilities: "能力",
        
        // TETO/EGGN 结果部分
        teto_eggn_analysis: "恋爱倾向分析 (TETO/EGGN)",
        teto_eggn_type: "恋爱类型",
        teto_eggn_strength: "优势",
        teto_eggn_weakness: "改进点",
        teto_eggn_relationship: "恋爱风格",
        teto_eggn_ideal: "理想类型",
        
        // 其他测试
        other_tests_title: "也试试其他测试！",
        romantic_test: "浪漫匹配测试",
        romantic_test_desc: "发现更深层的爱情匹配度",
        career_test: "职业适应性测试",
        career_test_desc: "找到适合你的工作",
        personality_test: "深度性格分析",
        personality_test_desc: "获得更详细的性格分析",
        
        // MBTI 兼容性分析
        perfect_harmony: "完美和谐",
        high_compatibility: "高兼容性",
        moderate_compatibility: "中等兼容性",
        challenging_combination: "挑战性组合",
        growth_opportunity: "成长机会",
        very_high_compatibility_desc: "显示出极高的兼容性。他们完美地理解和互补彼此。",
        high_compatibility_desc: "显示出高兼容性。他们可以在尊重彼此差异的同时共同成长。",
        moderate_compatibility_desc: "显示出中等兼容性。需要努力理解彼此的观点。",
        slight_difference_desc: "显示出轻微差异。理解和尊重彼此的性格差异很重要。",
        different_tendencies_desc: "具有不同的倾向。然而，这些差异可以成为相互成长的机会。",
        perfect_harmony_strengths: "互补彼此的不足，建立基于深刻理解和尊重的关系",
        perfect_harmony_challenges: "有时因观点过于相似而缺乏新视角",
        perfect_harmony_advice: "承认你们的差异，通过分享新经验共同成长。",
        perfect_harmony_relationship: "在浪漫关系、友谊和工作等所有关系中都是绝佳组合",
        high_compatibility_strengths: "由于互补倾向和共同价值观而形成的稳定关系",
        high_compatibility_challenges: "偶尔因方法差异而产生小冲突",
        high_compatibility_advice: "努力理解彼此观点和积极沟通很重要。",
        high_compatibility_relationship: "适合长期关系和有助于彼此成长的伙伴关系",
        moderate_compatibility_strengths: "来自不同观点的新视角和学习机会",
        moderate_compatibility_challenges: "因性格差异而可能产生冲突和理解不足",
        moderate_compatibility_advice: "理解和尊重彼此的差异很重要。",
        moderate_compatibility_relationship: "通过积极沟通和理解可以发展的关系",
        challenging_combination_strengths: "来自完全不同观点的新学习和成长机会",
        challenging_combination_challenges: "需要持续努力理解基本性格差异",
        challenging_combination_advice: "承认你们的差异，找到共同点一起成长。",
        challenging_combination_relationship: "需要强烈意愿和努力来理解彼此的关系",
        growth_opportunity_strengths: "来自完全不同观点的平衡视角和新体验",
        growth_opportunity_challenges: "因基本性格差异而产生的持续冲突和理解不足",
        growth_opportunity_advice: "将差异视为一起学习和成长的机会很重要。",
        growth_opportunity_relationship: "需要强烈意愿和耐心来理解彼此的关系",
        
        // 模态框
        modal_title: "通知",
        modal_confirm: "确认",
        
        // 页脚
        footer_copyright: "© 2025 MBTI + TETO 混合测试。保留所有权利。",
        
        // 元标签
        meta_description: "基于MBTI性格类型的世界观角色测试。发现你内心隐藏的角色！免费测试，准确分析，有趣结果！",
        meta_keywords: "MBTI, 性格测试, 角色测试, 匹配测试, 免费测试, 性格分析, 情侣测试, 朋友测试"
    },
    ja: {
        // ヘッダー
        title: "キャラクター・クエスト：あなたの内なるキャラクターは誰？",
        subtitle: "MBTI + TETO/EGGN ハイブリッドテスト",
        
        // 開始画面
        welcome_title: "あなたの内面を探検しよう",
        welcome_description: "MBTIとTETO/EGGNを組み合わせた特別な性格テストで、あなただけのユニークなキャラクターを発見しましょう！",
        solo_test: "内なるキャラクター発見",
        solo_test_desc: "24個の質問であなたの内なるキャラクターを見つけよう",
        inner_character_discovery: "内面キャラクター発見テスト",
        character_compatibility_test: "キャラクター相性テスト",
        duo_test: "キャラクター相性テスト",
        duo_test_desc: "カップルや友達と一緒に相性をテストしよう",
        
        // 名前入力
        name_input_title: "プレイヤー名を入力してください",
        name_input_desc: "テスト開始前に両プレイヤーの名前を入力してください",
        player1_label: "プレイヤー1",
        player2_label: "プレイヤー2",
        player1_placeholder: "名前を入力",
        player2_placeholder: "名前を入力",
        start_test: "テスト開始",
        
        // テスト画面
        question_counter: "質問",
        current_player: "現在のターン",
        player_turn: "の番です",
        
        // 結果画面
        result: "結果",
        result_title: "テスト結果",
        your_inner_character: "あなたの内なるキャラクター",
        restart_test: "再テスト",
        share_result: "結果を共有",
        compatibility: "相性",
        recommended_partner: "おすすめパートナーキャラクター",
        character_compatibility_analysis: "キャラクター相性分析",
        strengths: "強み",
        challenges: "課題",
        advice: "アドバイス",
        relationship_type: "関係タイプ",
        improvement_points: "改善点",
        love_style: "恋愛スタイル",
        ideal_type: "理想タイプ",
        back_button: "戻る",
        
        // テスト結果ラベル
        characteristics: "特徴",
        ideal_partner: "理想的なパートナー",
        recommended_jobs: "おすすめ職業",
        weaknesses: "弱点",
        abilities: "能力",
        
        // TETO/EGGN 結果セクション
        teto_eggn_analysis: "恋愛傾向分析 (TETO/EGGN)",
        teto_eggn_type: "恋愛タイプ",
        teto_eggn_strength: "強み",
        teto_eggn_weakness: "改善点",
        teto_eggn_relationship: "恋愛スタイル",
        teto_eggn_ideal: "理想タイプ",
        
        // 他のテスト
        other_tests_title: "他のテストも試してみよう！",
        romantic_test: "ロマンティック相性テスト",
        romantic_test_desc: "より深い愛の相性を知ろう",
        career_test: "職業適性テスト",
        career_test_desc: "あなたに合う仕事を見つけよう",
        personality_test: "性格詳細分析",
        personality_test_desc: "より詳細な性格分析を受けよう",
        
        // MBTI 相性分析
        perfect_harmony: "完璧な調和",
        high_compatibility: "高い相性",
        moderate_compatibility: "普通の相性",
        challenging_combination: "挑戦的な組み合わせ",
        growth_opportunity: "成長の機会",
        very_high_compatibility_desc: "は非常に高い相性を示しています。お互いを完璧に理解し、補完し合う関係です。",
        high_compatibility_desc: "は高い相性を示しています。お互いの違いを尊重しながら成長できる関係です。",
        moderate_compatibility_desc: "は普通の相性を示しています。お互いの視点を理解しようとする努力が必要です。",
        slight_difference_desc: "は若干の違いを示しています。お互いの性格の違いを理解し、尊重することが重要です。",
        different_tendencies_desc: "は異なる傾向を持っています。しかし、これらの違いがお互いを成長させる機会になることがあります。",
        perfect_harmony_strengths: "お互いの不足している部分を補完し、深い理解と尊重に基づいた関係",
        perfect_harmony_challenges: "時にはあまりにも似た視点により新しい視角が不足することがある",
        perfect_harmony_advice: "お互いの違いを認め、新しい経験を共有しながら成長しましょう。",
        perfect_harmony_relationship: "ロマンティックな関係、友達、同僚などすべての関係で卓越した組み合わせ",
        high_compatibility_strengths: "お互いを補完する傾向と共通の価値観による安定した関係",
        high_compatibility_challenges: "時々お互いのアプローチ方法の違いによる小さな葛藤があるかもしれない",
        high_compatibility_advice: "お互いの視点を理解しようとする努力と積極的なコミュニケーションが重要です。",
        high_compatibility_relationship: "長期的な関係に適しており、お互いを成長させることができるパートナーシップ",
        moderate_compatibility_strengths: "異なる視点による新しい視角と学習機会",
        moderate_compatibility_challenges: "お互いの傾向の違いによる理解不足と葛藤の可能性",
        moderate_compatibility_advice: "お互いの違いを理解し、尊重する心構えが重要です。",
        moderate_compatibility_relationship: "積極的なコミュニケーションと理解を通じて発展できる関係",
        challenging_combination_strengths: "完全に異なる視点による新しい学習と成長機会",
        challenging_combination_challenges: "お互いの基本的な傾向の違いによる継続的な理解努力が必要",
        challenging_combination_advice: "お互いの違いを認め、共通点を見つけて一緒に成長しましょう。",
        challenging_combination_relationship: "お互いを理解しようとする意志と努力が必要な関係",
        growth_opportunity_strengths: "完全に異なる視点によるバランスの取れた視角と新しい経験",
        growth_opportunity_challenges: "基本的な傾向の違いによる継続的な葛藤と理解不足",
        growth_opportunity_advice: "お互いの違いを機会として、一緒に学び成長する心構えが重要です。",
        growth_opportunity_relationship: "お互いを理解しようとする強い意志と忍耐が必要な関係",
        
        // モーダル
        modal_title: "通知",
        modal_confirm: "確認",
        
        // フッター
        footer_copyright: "© 2025 MBTI + TETO ハイブリッドテスト。全著作権所有。",
        
        // メタタグ
        meta_description: "MBTI性格タイプに基づく世界観キャラクターテスト。あなたの内に隠されたキャラクターを発見しよう！無料テスト、正確な分析、楽しい結果！",
        meta_keywords: "MBTI, 性格テスト, キャラクターテスト, 相性テスト, 無料テスト, 性格分析, カップルテスト, 友達テスト"
    }
};

// 다국어 질문 및 답변 데이터
const questionTranslations = {
    ko: {
        // MBTI 질문들
        mbti_questions: [
            "처음 만난 사람과 식사한다면?",
            "새로운 장소에 갔을 때?",
            "문제를 해결할 때?",
            "미래에 대해 생각할 때?",
            "의사결정을 할 때?",
            "갈등 상황에서?",
            "일정을 관리할 때?",
            "새로운 경험을 할 때?",
            "에너지를 얻는 방법은?",
            "스트레스 해소 방법은?",
            "새로운 정보를 받을 때?",
            "완벽주의에 대해?"
        ],
        // MBTI 답변 옵션들
        mbti_options: [
            [
                "자연스럽게 먼저 말을 건다",
                "듣고 관찰하면서 반응한다", 
                "상대방이 먼저 말을 걸어주기를 기다린다",
                "함께 있는 다른 사람들을 통해 대화를 시작한다"
            ],
            [
                "사람들과 어울려 즐긴다",
                "조용히 둘러보며 감상한다",
                "가이드나 설명서를 찾아본다",
                "즉흥적으로 탐험한다"
            ],
            [
                "직감과 창의성을 활용한다",
                "경험과 사실을 바탕으로 한다",
                "다른 사람의 조언을 구한다",
                "체계적으로 분석하고 계획한다"
            ],
            [
                "무한한 가능성을 상상한다",
                "현실적인 계획을 세운다",
                "과거의 경험을 바탕으로 예측한다",
                "다양한 시나리오를 고려한다"
            ],
            [
                "논리적 분석을 우선한다",
                "사람들의 감정을 고려한다",
                "객관적 데이터를 수집한다",
                "직감과 감정을 균형있게 고려한다"
            ],
            [
                "공정함과 원칙을 지킨다",
                "조화와 이해를 추구한다",
                "문제의 근본 원인을 찾아 해결한다",
                "모든 사람이 만족할 수 있는 방법을 찾는다"
            ],
            [
                "계획을 세우고 체계적으로 한다",
                "상황에 따라 유연하게 대응한다",
                "우선순위를 정하고 중요한 것부터 처리한다",
                "즉흥적이지만 효율적으로 처리한다"
            ],
            [
                "미리 준비하고 계획한다",
                "즉흥적으로 즐긴다",
                "필요한 정보를 수집한 후 시작한다",
                "기회가 있을 때 바로 도전한다"
            ],
            [
                "사람들과 함께하는 시간",
                "혼자만의 시간",
                "새로운 활동과 도전",
                "익숙하고 편안한 환경"
            ],
            [
                "친구들과 대화하기",
                "혼자만의 시간 가지기",
                "운동이나 활동하기",
                "즐거운 취미 활동하기"
            ],
            [
                "전체적인 맥락을 파악한다",
                "구체적인 세부사항에 집중한다",
                "실용적인 활용법을 생각한다",
                "창의적인 아이디어를 떠올린다"
            ],
            [
                "높은 기준을 유지한다",
                "적당한 수준을 선호한다",
                "상황에 따라 조절한다",
                "결과보다 과정을 중시한다"
            ]
        ],
        // TETO/EGGN 질문들
        teto_questions: [
            "연애에서 가장 중요한 것은?",
            "이상적인 데이트는?",
            "갈등이 생겼을 때 나는?",
            "사랑을 표현하는 방법은?",
            "연애의 목표는?",
            "사람들과의 관계에서 나는?",
            "의사결정을 할 때 나는?",
            "스트레스 해소 방법은?",
            "이상형에 대해 나는?",
            "나의 에너지는?",
            "연애에서 나의 스타일은?",
            "스트레스 상황에서 나는?"
        ],
        // TETO/EGGN 답변 옵션들
        teto_options: [
            [
                "서로의 감정을 이해하는 것",
                "함께하는 시간의 질",
                "서로를 신뢰하는 것",
                "공통의 관심사를 가지는 것"
            ],
            [
                "조용한 카페에서 대화하기",
                "새로운 곳을 함께 탐험하기",
                "영화나 공연을 보기",
                "즉흥적인 모험을 떠나기"
            ],
            [
                "대화로 해결하려고 노력한다",
                "시간을 두고 생각한다",
                "즉시 해결책을 찾는다",
                "상대방의 입장을 먼저 생각한다"
            ],
            [
                "말로 직접 표현한다",
                "행동으로 보여준다",
                "선물이나 편지로 표현한다",
                "함께하는 시간을 만든다"
            ],
            [
                "서로를 이해하고 성장하기",
                "즐거운 시간을 함께 보내기",
                "안정적인 관계를 만들기",
                "새로운 경험을 함께 하기"
            ],
            [
                "리더십을 발휘하는 편이다",
                "따르는 편이 편하다",
                "독립적이고 자유로운 관계를 선호한다",
                "깊이 있는 정서적 교감을 중요시한다"
            ],
            [
                "빠르고 직관적으로 결정한다",
                "신중하게 생각하고 결정한다",
                "논리적으로 분석해서 결정한다",
                "감정과 직감을 고려한다"
            ],
            [
                "활동적으로 몸을 움직인다",
                "조용히 혼자만의 시간을 가진다",
                "문제를 해결하거나 계획을 세운다",
                "예술이나 감성적 활동을 한다"
            ],
            [
                "강하고 남성적인 매력을 선호한다",
                "부드럽고 감성적인 매력을 선호한다",
                "실용적이고 안정적인 사람을 선호한다",
                "창의적이고 예술적인 사람을 선호한다"
            ],
            [
                "외향적이고 활발하다",
                "내향적이고 차분하다",
                "목표 지향적이고 체계적이다",
                "감성적이고 창의적이다"
            ],
            [
                "직접적이고 적극적으로 대시한다",
                "상대의 대시를 받아들이는 편이다",
                "자연스럽게 발전하는 것을 선호한다",
                "감정의 흐름에 따라 움직인다"
            ],
            [
                "문제를 직접 해결하려 한다",
                "시간을 두고 생각한다",
                "논리적으로 분석한다",
                "감정적으로 상처받는다"
            ]
        ]
    },
    en: {
        mbti_questions: [
            "When having a meal with someone you just met?",
            "When going to a new place?",
            "When solving problems?",
            "When thinking about the future?",
            "When making decisions?",
            "In conflict situations?",
            "When managing schedules?",
            "When having new experiences?",
            "How do you gain energy?",
            "How do you relieve stress?",
            "When receiving new information?",
            "Regarding perfectionism?"
        ],
        mbti_options: [
            [
                "Naturally start the conversation first",
                "Listen and observe while responding",
                "Wait for them to start talking first",
                "Start conversation through other people present"
            ],
            [
                "Enjoy mingling with people",
                "Quietly look around and appreciate",
                "Look for guides or instructions",
                "Explore spontaneously"
            ],
            [
                "Use intuition and creativity",
                "Base decisions on experience and facts",
                "Seek advice from others",
                "Analyze systematically and plan"
            ],
            [
                "Imagine infinite possibilities",
                "Make realistic plans",
                "Predict based on past experience",
                "Consider various scenarios"
            ],
            [
                "Prioritize logical analysis",
                "Consider people's feelings",
                "Collect objective data",
                "Balance intuition and emotion"
            ],
            [
                "Maintain fairness and principles",
                "Pursue harmony and understanding",
                "Find and solve the root cause",
                "Find a solution that satisfies everyone"
            ],
            [
                "Make plans and work systematically",
                "Respond flexibly to situations",
                "Set priorities and handle important things first",
                "Handle things spontaneously but efficiently"
            ],
            [
                "Prepare and plan in advance",
                "Enjoy spontaneously",
                "Collect necessary information first",
                "Take on challenges when opportunities arise"
            ],
            [
                "Time with people",
                "Time alone",
                "New activities and challenges",
                "Familiar and comfortable environment"
            ],
            [
                "Talk with friends",
                "Have time alone",
                "Exercise or be active",
                "Enjoy hobbies"
            ],
            [
                "Grasp the overall context",
                "Focus on specific details",
                "Think about practical applications",
                "Come up with creative ideas"
            ],
            [
                "Maintain high standards",
                "Prefer moderate levels",
                "Adjust according to situation",
                "Value process over results"
            ]
        ],
        teto_questions: [
            "What's most important in love?",
            "What's your ideal date?",
            "When conflicts arise, I?",
            "How do you express love?",
            "What's your goal in love?",
            "In relationships with people, I am?",
            "When making decisions, I?",
            "How do I relieve stress?",
            "About my ideal type, I?",
            "My energy is?",
            "What's my style in love?",
            "In stressful situations, I?"
        ],
        teto_options: [
            [
                "Understanding each other's feelings",
                "Quality of time spent together",
                "Trusting each other",
                "Having common interests"
            ],
            [
                "Conversation at a quiet cafe",
                "Exploring new places together",
                "Watching movies or performances",
                "Going on spontaneous adventures"
            ],
            [
                "Try to resolve through conversation",
                "Take time to think",
                "Find immediate solutions",
                "Consider the other person's position first"
            ],
            [
                "Express directly with words",
                "Show through actions",
                "Express through gifts or letters",
                "Create time to spend together"
            ],
            [
                "Understanding and growing together",
                "Spending enjoyable time together",
                "Building a stable relationship",
                "Having new experiences together"
            ],
            [
                "Tend to exercise leadership",
                "Feel more comfortable following",
                "Prefer independent and free relationships",
                "Value deep emotional connection"
            ],
            [
                "Make decisions quickly and intuitively",
                "Think carefully and decide",
                "Analyze logically and decide",
                "Consider emotions and intuition"
            ],
            [
                "Move actively",
                "Have quiet time alone",
                "Solve problems or make plans",
                "Do artistic or emotional activities"
            ],
            [
                "Prefer strong and masculine charm",
                "Prefer gentle and emotional charm",
                "Prefer practical and stable people",
                "Prefer creative and artistic people"
            ],
            [
                "Outgoing and active",
                "Introverted and calm",
                "Goal-oriented and systematic",
                "Emotional and creative"
            ],
            [
                "Approach directly and actively",
                "Prefer to receive approaches",
                "Prefer natural development",
                "Move according to emotional flow"
            ],
            [
                "Try to solve problems directly",
                "Take time to think",
                "Analyze logically",
                "Get emotionally hurt"
            ]
        ]
    },
    zh: {
        mbti_questions: [
            "与刚认识的人一起吃饭时？",
            "去新地方时？",
            "解决问题时？",
            "思考未来时？",
            "做决定时？",
            "在冲突情况下？",
            "管理日程时？",
            "体验新事物时？",
            "如何获得能量？",
            "如何缓解压力？",
            "接收新信息时？",
            "关于完美主义？"
        ],
        mbti_options: [
            [
                "自然地先开始对话",
                "倾听并观察，然后回应",
                "等待对方先开口",
                "通过在场的其他人开始对话"
            ],
            [
                "与人们交往并享受",
                "安静地四处看看并欣赏",
                "寻找指南或说明",
                "自发地探索"
            ],
            [
                "运用直觉和创造力",
                "基于经验和事实做决定",
                "寻求他人建议",
                "系统分析并制定计划"
            ],
            [
                "想象无限可能性",
                "制定现实计划",
                "基于过去经验预测",
                "考虑各种情况"
            ],
            [
                "优先逻辑分析",
                "考虑人们感受",
                "收集客观数据",
                "平衡直觉和情感"
            ],
            [
                "保持公平和原则",
                "追求和谐和理解",
                "找到并解决根本原因",
                "找到让所有人满意的解决方案"
            ],
            [
                "制定计划并系统工作",
                "根据情况灵活应对",
                "设定优先级并先处理重要事项",
                "自发但高效地处理事情"
            ],
            [
                "提前准备和计划",
                "自发地享受",
                "先收集必要信息",
                "有机会时立即挑战"
            ],
            [
                "与人们共处的时间",
                "独处时间",
                "新活动和挑战",
                "熟悉舒适的环境"
            ],
            [
                "与朋友交谈",
                "独处时间",
                "运动或活动",
                "享受爱好"
            ],
            [
                "把握整体背景",
                "专注于具体细节",
                "思考实际应用",
                "想出创意想法"
            ],
            [
                "保持高标准",
                "偏好适度水平",
                "根据情况调整",
                "重视过程胜过结果"
            ]
        ],
        teto_questions: [
            "恋爱中最重要的是什么？",
            "理想的约会是什么？",
            "发生冲突时，我？",
            "如何表达爱？",
            "恋爱的目标是什么？",
            "在人际关系中，我是？",
            "做决定时，我是？",
            "我的压力缓解方法是？",
            "关于我的理想型，我是？",
            "我的能量是？",
            "恋爱中我的风格是？",
            "压力情况下，我是？"
        ],
        teto_options: [
            [
                "理解彼此的感受",
                "共处时间的质量",
                "相互信任",
                "拥有共同兴趣"
            ],
            [
                "在安静的咖啡馆交谈",
                "一起探索新地方",
                "看电影或表演",
                "进行即兴冒险"
            ],
            [
                "尝试通过对话解决",
                "花时间思考",
                "寻找即时解决方案",
                "首先考虑对方的立场"
            ],
            [
                "用语言直接表达",
                "通过行动展示",
                "通过礼物或信件表达",
                "创造共处时间"
            ],
            [
                "相互理解并共同成长",
                "共度愉快时光",
                "建立稳定关系",
                "一起体验新事物"
            ],
            [
                "倾向于发挥领导力",
                "跟随更舒服",
                "偏好独立自由的关系",
                "重视深度情感交流"
            ],
            [
                "快速直觉地做决定",
                "仔细思考后决定",
                "逻辑分析后决定",
                "考虑情感和直觉"
            ],
            [
                "积极活动身体",
                "安静独处时间",
                "解决问题或制定计划",
                "艺术或情感活动"
            ],
            [
                "偏好强壮男性魅力",
                "偏好温柔情感魅力",
                "偏好实用稳定的人",
                "偏好创意艺术的人"
            ],
            [
                "外向活跃",
                "内向冷静",
                "目标导向系统化",
                "情感创意"
            ],
            [
                "直接积极地追求",
                "倾向于接受追求",
                "偏好自然发展",
                "根据情感流动行动"
            ],
            [
                "尝试直接解决问题",
                "花时间思考",
                "逻辑分析",
                "情感上容易受伤"
            ]
        ]
    },
    ja: {
        mbti_questions: [
            "初めて会った人と食事する時？",
            "新しい場所に行った時？",
            "問題を解決する時？",
            "将来について考える時？",
            "意思決定をする時？",
            "対立状況で？",
            "スケジュール管理の時？",
            "新しい経験をする時？",
            "エネルギーを得る方法は？",
            "ストレス解消法は？",
            "新しい情報を受け取る時？",
            "完璧主義について？"
        ],
        mbti_options: [
            [
                "自然に先に話しかける",
                "聞いて観察しながら反応する",
                "相手が先に話しかけてくれるのを待つ",
                "一緒にいる他の人を通じて会話を始める"
            ],
            [
                "人々と交わって楽しむ",
                "静かに見回して鑑賞する",
                "ガイドや説明書を探す",
                "即興的に探検する"
            ],
            [
                "直感と創造性を活用する",
                "経験と事実に基づいて判断する",
                "他の人のアドバイスを求める",
                "体系的に分析して計画する"
            ],
            [
                "無限の可能性を想像する",
                "現実的な計画を立てる",
                "過去の経験に基づいて予測する",
                "様々なシナリオを考慮する"
            ],
            [
                "論理的分析を優先する",
                "人々の感情を考慮する",
                "客観的データを収集する",
                "直感と感情をバランスよく考慮する"
            ],
            [
                "公平性と原則を守る",
                "調和と理解を追求する",
                "問題の根本原因を見つけて解決する",
                "すべての人が満足できる方法を見つける"
            ],
            [
                "計画を立てて体系的に進める",
                "状況に応じて柔軟に対応する",
                "優先順位を決めて重要なことから処理する",
                "即興的だが効率的に処理する"
            ],
            [
                "事前に準備して計画する",
                "即興的に楽しむ",
                "必要な情報を収集してから始める",
                "機会があればすぐに挑戦する"
            ],
            [
                "人々と一緒にいる時間",
                "一人の時間",
                "新しい活動と挑戦",
                "慣れ親しんだ快適な環境"
            ],
            [
                "友達と話す",
                "一人の時間を持つ",
                "運動や活動をする",
                "楽しい趣味活動をする"
            ],
            [
                "全体的な文脈を把握する",
                "具体的な詳細に集中する",
                "実用的な活用方法を考える",
                "創造的なアイデアを思いつく"
            ],
            [
                "高い基準を維持する",
                "適度なレベルを好む",
                "状況に応じて調整する",
                "結果より過程を重視する"
            ]
        ],
        teto_questions: [
            "恋愛で最も重要なことは？",
            "理想的なデートは？",
            "対立が生じた時、私は？",
            "愛を表現する方法は？",
            "恋愛の目標は？",
            "人々との関係で私は？",
            "意思決定をする時、私は？",
            "ストレス解消法は？",
            "理想型について、私は？",
            "私のエネルギーは？",
            "恋愛での私のスタイルは？",
            "ストレス状況で私は？"
        ],
        teto_options: [
            [
                "お互いの感情を理解すること",
                "一緒に過ごす時間の質",
                "お互いを信頼すること",
                "共通の関心事を持つこと"
            ],
            [
                "静かなカフェで会話する",
                "新しい場所を一緒に探検する",
                "映画や公演を見る",
                "即興的な冒険に出る"
            ],
            [
                "会話で解決しようと努力する",
                "時間をかけて考える",
                "即座に解決策を見つける",
                "相手の立場をまず考える"
            ],
            [
                "言葉で直接表現する",
                "行動で示す",
                "プレゼントや手紙で表現する",
                "一緒に過ごす時間を作る"
            ],
            [
                "お互いを理解して成長する",
                "楽しい時間を一緒に過ごす",
                "安定した関係を築く",
                "新しい経験を一緒にする"
            ],
            [
                "リーダーシップを発揮する傾向",
                "従う方が楽",
                "独立した自由な関係を好む",
                "深い情緒的交流を重視"
            ],
            [
                "素早く直感的に決定",
                "慎重に考えて決定",
                "論理的に分析して決定",
                "感情と直感を考慮"
            ],
            [
                "積極的に体を動かす",
                "静かに一人の時間",
                "問題解決や計画立案",
                "芸術的または情緒的活動"
            ],
            [
                "強く男性的な魅力を好む",
                "優しく情緒的な魅力を好む",
                "実用的で安定した人を好む",
                "創造的で芸術的な人を好む"
            ],
            [
                "外向的で活発",
                "内向的で落ち着き",
                "目標指向的で体系的",
                "情緒的で創造的"
            ],
            [
                "直接的で積極的にアプローチする",
                "アプローチを受ける方が良い",
                "自然な発展を好む",
                "感情の流れに従って動く"
            ],
            [
                "問題を直接解決しようとする",
                "時間をかけて考える",
                "論理的に分析する",
                "感情的にもろい"
            ]
        ]
    }
};

// 다국어 질문 로드 함수
function getTranslatedQuestion(questionType, questionIndex) {
    // 현재 언어 확인 및 강제 업데이트
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        currentLanguage = savedLanguage;
    }
    
    // 언어가 유효한지 확인
    if (!questionTranslations[currentLanguage]) {
        console.warn('Invalid language:', currentLanguage, 'falling back to ko');
        currentLanguage = 'ko';
    }
    
    if (questionType === 'mbti') {
        const translated = questionTranslations[currentLanguage]?.mbti_questions[questionIndex];
        return translated || mbtiQuestions[questionIndex]?.question || '';
    } else if (questionType === 'teto') {
        const translated = questionTranslations[currentLanguage]?.teto_questions[questionIndex];
        return translated || tetoEggnQuestions[questionIndex]?.question || '';
    }
    return '';
}

// 다국어 답변 옵션 로드 함수
function getTranslatedOptions(questionType, questionIndex) {
    // 현재 언어 확인 및 강제 업데이트
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        currentLanguage = savedLanguage;
    }
    
    // 언어가 유효한지 확인
    if (!questionTranslations[currentLanguage]) {
        console.warn('Invalid language:', currentLanguage, 'falling back to ko');
        currentLanguage = 'ko';
    }
    
    if (questionType === 'mbti') {
        const translated = questionTranslations[currentLanguage]?.mbti_options[questionIndex];
        return translated || mbtiQuestions[questionIndex]?.options || [];
    } else if (questionType === 'teto') {
        const translated = questionTranslations[currentLanguage]?.teto_options[questionIndex];
        return translated || tetoEggnQuestions[questionIndex]?.options || [];
    }
    return [];
}

// MBTI 유형별 고급 캐릭터 이미지 생성 함수
function generateCharacterImage(mbti) {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');
    
    // 캐릭터 정보 가져오기
    const character = getTranslatedCharacter(mbti);
    
    // MBTI 유형별 프리미엄 캐릭터 테마
    const premiumThemes = {
        // 분석가 유형 - 지적이고 신비로운 캐릭터
        'INTJ': {
            bg: ['#0a0a1a', '#1a1a2e', '#16213e'],
            primary: '#4a90e2',
            secondary: '#e94560',
            accent: '#00d4ff',
            highlight: '#ffd700',
            style: 'prophet',
            elements: ['📚', '🔮', '⚡', '🌟'],
            aura: 'cosmic'
        },
        'INTP': {
            bg: ['#1a1a2e', '#16213e', '#0f3460'],
            primary: '#3498db',
            secondary: '#ecf0f1',
            accent: '#00d4ff',
            highlight: '#f39c12',
            style: 'timekeeper',
            elements: ['⏰', '🔬', '💡', '🌌'],
            aura: 'time'
        },
        'ENTJ': {
            bg: ['#2c1810', '#4a1c10', '#8b4513'],
            primary: '#ffd700',
            secondary: '#8b4513',
            accent: '#ff6b35',
            highlight: '#ff4500',
            style: 'commander',
            elements: ['⚡', '🗡️', '👑', '🏛️'],
            aura: 'royal'
        },
        'ENTP': {
            bg: ['#1e3a8a', '#3b82f6', '#60a5fa'],
            primary: '#fbbf24',
            secondary: '#60a5fa',
            accent: '#00d4ff',
            highlight: '#ff6b35',
            style: 'innovator',
            elements: ['💡', '🔧', '🌟', '🚀'],
            aura: 'innovation'
        },
        
        // 외교관 유형 - 따뜻하고 영감을 주는 캐릭터
        'INFJ': {
            bg: ['#4c1d95', '#7c3aed', '#a855f7'],
            primary: '#fbbf24',
            secondary: '#a855f7',
            accent: '#00d4ff',
            highlight: '#ff69b4',
            style: 'dreamer',
            elements: ['🌙', '✨', '🕊️', '🌈'],
            aura: 'dream'
        },
        'INFP': {
            bg: ['#be185d', '#ec4899', '#f472b6'],
            primary: '#fbbf24',
            secondary: '#f472b6',
            accent: '#00d4ff',
            highlight: '#ff1493',
            style: 'poet',
            elements: ['🌸', '🦋', '🌈', '🎭'],
            aura: 'poetry'
        },
        'ENFJ': {
            bg: ['#dc2626', '#ef4444', '#f87171'],
            primary: '#fbbf24',
            secondary: '#f87171',
            accent: '#00d4ff',
            highlight: '#ff4500',
            style: 'mentor',
            elements: ['🌟', '💝', '🤝', '💫'],
            aura: 'inspiration'
        },
        'ENFP': {
            bg: ['#ea580c', '#f97316', '#fb923c'],
            primary: '#fbbf24',
            secondary: '#fb923c',
            accent: '#00d4ff',
            highlight: '#ff6b35',
            style: 'adventurer',
            elements: ['🌪️', '🔥', '🎭', '⚡'],
            aura: 'adventure'
        },
        
        // 센티널 유형 - 안정적이고 보호적인 캐릭터
        'ISTJ': {
            bg: ['#374151', '#4b5563', '#6b7280'],
            primary: '#fbbf24',
            secondary: '#6b7280',
            accent: '#00d4ff',
            highlight: '#10b981',
            style: 'guardian',
            elements: ['🛡️', '⚖️', '🏰', '🔒'],
            aura: 'protection'
        },
        'ISFJ': {
            bg: ['#065f46', '#047857', '#059669'],
            primary: '#fbbf24',
            secondary: '#059669',
            accent: '#00d4ff',
            highlight: '#22c55e',
            style: 'protector',
            elements: ['🏠', '💚', '🕯️', '🛡️'],
            aura: 'care'
        },
        'ESTJ': {
            bg: ['#1f2937', '#374151', '#4b5563'],
            primary: '#fbbf24',
            secondary: '#4b5563',
            accent: '#00d4ff',
            highlight: '#6366f1',
            style: 'organizer',
            elements: ['⚖️', '📋', '🏛️', '📊'],
            aura: 'order'
        },
        'ESFJ': {
            bg: ['#7c2d12', '#92400e', '#b45309'],
            primary: '#fbbf24',
            secondary: '#b45309',
            accent: '#00d4ff',
            highlight: '#f97316',
            style: 'socialite',
            elements: ['🤝', '🎉', '💝', '🌟'],
            aura: 'social'
        },
        
        // 탐험가 유형 - 실용적이고 적응력 있는 캐릭터
        'ISTP': {
            bg: ['#78350f', '#92400e', '#b45309'],
            primary: '#fbbf24',
            secondary: '#b45309',
            accent: '#00d4ff',
            highlight: '#f59e0b',
            style: 'craftsman',
            elements: ['🔧', '⚔️', '🎯', '⚙️'],
            aura: 'craft'
        },
        'ISFP': {
            bg: ['#166534', '#16a34a', '#22c55e'],
            primary: '#fbbf24',
            secondary: '#22c55e',
            accent: '#00d4ff',
            highlight: '#10b981',
            style: 'artist',
            elements: ['🌿', '🎨', '🦋', '🌸'],
            aura: 'art'
        },
        'ESTP': {
            bg: ['#991b1b', '#dc2626', '#ef4444'],
            primary: '#fbbf24',
            secondary: '#ef4444',
            accent: '#00d4ff',
            highlight: '#ff4500',
            style: 'warrior',
            elements: ['⚔️', '🔥', '🏃', '⚡'],
            aura: 'action'
        },
        'ESFP': {
            bg: ['#be185d', '#ec4899', '#f472b6'],
            primary: '#fbbf24',
            secondary: '#f472b6',
            accent: '#00d4ff',
            highlight: '#ff1493',
            style: 'entertainer',
            elements: ['🎉', '🎭', '💃', '🎪'],
            aura: 'entertainment'
        }
    };
    
    const theme = premiumThemes[mbti] || premiumThemes['INTJ'];
    
    // 고급 배경 그라데이션 (3단계)
    const bgGradient = ctx.createLinearGradient(0, 0, 300, 400);
    bgGradient.addColorStop(0, theme.bg[0]);
    bgGradient.addColorStop(0.5, theme.bg[1]);
    bgGradient.addColorStop(1, theme.bg[2]);
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 300, 400);
    
    // 고급 별/파티클 효과
    drawPremiumStars(ctx, theme, 80);
    
    // 고급 캐릭터 몸체 그리기
    drawPremiumCharacterBody(ctx, theme, mbti);
    
    // 고급 캐릭터 얼굴 그리기
    drawPremiumCharacterFace(ctx, theme, mbti);
    
    // 고급 캐릭터 의상 그리기
    drawPremiumCharacterClothing(ctx, theme, mbti);
    
    // 고급 캐릭터 액세서리 그리기
    drawPremiumCharacterAccessories(ctx, theme, mbti);
    
    // 고급 에너지 효과 추가
    drawPremiumEnergyEffects(ctx, theme);
    
    // 고급 텍스트 효과
    drawPremiumText(ctx, theme, mbti, character);
    
    return canvas.toDataURL();
}

// 고급 별/파티클 효과 그리기
function drawPremiumStars(ctx, theme, count) {
    for (let i = 0; i < count; i++) {
        const x = Math.random() * 300;
        const y = Math.random() * 400;
        const size = Math.random() * 3 + 1;
        const opacity = Math.random() * 0.8 + 0.2;
        
        // 다양한 색상의 별들
        const colors = [theme.accent, theme.highlight, theme.primary, theme.secondary];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        ctx.globalAlpha = opacity;
        ctx.fillStyle = color;
        
        // 별 모양 그리기
        if (Math.random() > 0.7) {
            // 특별한 별 (5각형)
            drawStar(ctx, x, y, size);
        } else {
            // 일반적인 별 (원형)
            ctx.beginPath();
            ctx.arc(x, y, size, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
    ctx.globalAlpha = 1;
}

// 별 모양 그리기
function drawStar(ctx, x, y, size) {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        
        if (i === 0) {
            ctx.moveTo(px, py);
        } else {
            ctx.lineTo(px, py);
        }
    }
    ctx.closePath();
    ctx.fill();
}

// 고급 캐릭터 몸체 그리기
function drawPremiumCharacterBody(ctx, theme, mbti) {
    // 몸체 그라데이션 (3단계)
    const bodyGradient = ctx.createLinearGradient(100, 120, 200, 280);
    bodyGradient.addColorStop(0, theme.primary);
    bodyGradient.addColorStop(0.5, theme.secondary);
    bodyGradient.addColorStop(1, theme.accent);
    
    // 몸체 그림자
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.ellipse(155, 260, 35, 50, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // 몸체 그라데이션
    ctx.fillStyle = bodyGradient;
    ctx.beginPath();
    ctx.ellipse(150, 240, 35, 50, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // 몸체 윤곽선 (고급)
    ctx.strokeStyle = theme.highlight;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 몸체 하이라이트
    ctx.strokeStyle = theme.accent;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(150, 240, 30, 45, 0, 0, 2 * Math.PI);
    ctx.stroke();
    
    // 어깨 그리기
    const shoulderGradient = ctx.createLinearGradient(120, 160, 180, 180);
    shoulderGradient.addColorStop(0, theme.primary);
    shoulderGradient.addColorStop(1, theme.secondary);
    
    ctx.fillStyle = shoulderGradient;
    ctx.beginPath();
    ctx.ellipse(130, 180, 20, 12, 0, 0, 2 * Math.PI);
    ctx.ellipse(170, 180, 20, 12, 0, 0, 2 * Math.PI);
    ctx.fill();
}

// 고급 캐릭터 얼굴 그리기
function drawPremiumCharacterFace(ctx, theme, mbti) {
    // 얼굴 그림자
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.beginPath();
    ctx.arc(155, 185, 25, 0, 2 * Math.PI);
    ctx.fill();
    
    // 얼굴 그라데이션
    const faceGradient = ctx.createRadialGradient(150, 160, 0, 150, 160, 25);
    faceGradient.addColorStop(0, '#ffdbac');
    faceGradient.addColorStop(0.7, '#f4c2a1');
    faceGradient.addColorStop(1, '#e6b89c');
    
    ctx.fillStyle = faceGradient;
    ctx.beginPath();
    ctx.arc(150, 160, 25, 0, 2 * Math.PI);
    ctx.fill();
    
    // 얼굴 윤곽선
    ctx.strokeStyle = theme.highlight;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 눈 그라데이션
    const eyeGradient = ctx.createRadialGradient(140, 155, 0, 140, 155, 6);
    eyeGradient.addColorStop(0, theme.primary);
    eyeGradient.addColorStop(1, theme.secondary);
    
    ctx.fillStyle = eyeGradient;
    ctx.beginPath();
    ctx.arc(140, 155, 6, 0, 2 * Math.PI);
    ctx.arc(160, 155, 6, 0, 2 * Math.PI);
    ctx.fill();
    
    // 눈동자
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(140, 155, 3, 0, 2 * Math.PI);
    ctx.arc(160, 155, 3, 0, 2 * Math.PI);
    ctx.fill();
    
    // 눈 하이라이트
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(139, 154, 1.5, 0, 2 * Math.PI);
    ctx.arc(159, 154, 1.5, 0, 2 * Math.PI);
    ctx.fill();
    
    // 눈썹
    ctx.strokeStyle = '#4a4a4a';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(140, 152, 5, 0, Math.PI);
    ctx.arc(160, 152, 5, 0, Math.PI);
    ctx.stroke();
    
    // 입 그라데이션
    const mouthGradient = ctx.createLinearGradient(145, 170, 155, 170);
    mouthGradient.addColorStop(0, theme.secondary);
    mouthGradient.addColorStop(1, theme.accent);
    
    ctx.strokeStyle = mouthGradient;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(150, 170, 8, 0, Math.PI);
    ctx.stroke();
    
    // 코
    ctx.strokeStyle = theme.highlight;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(150, 160);
    ctx.lineTo(150, 165);
    ctx.stroke();
    
    // 볼 홍조
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = theme.highlight;
    ctx.beginPath();
    ctx.arc(130, 165, 6, 0, 2 * Math.PI);
    ctx.arc(170, 165, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.globalAlpha = 1;
}

// 고급 캐릭터 의상 그리기
function drawPremiumCharacterClothing(ctx, theme, mbti) {
    // 의상 그림자
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.beginPath();
    ctx.ellipse(185, 305, 45, 75, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // 로브/의상 그라데이션 (3단계)
    const clothingGradient = ctx.createLinearGradient(100, 200, 200, 320);
    clothingGradient.addColorStop(0, theme.secondary);
    clothingGradient.addColorStop(0.5, theme.accent);
    clothingGradient.addColorStop(1, theme.bg[0]);
    
    ctx.fillStyle = clothingGradient;
    ctx.beginPath();
    ctx.ellipse(180, 290, 45, 75, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // 의상 윤곽선
    ctx.strokeStyle = theme.highlight;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 의상 장식 (고급)
    ctx.strokeStyle = theme.accent;
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(180, 240 + i * 15, 40, 0, Math.PI);
        ctx.stroke();
    }
    
    // 의상 하이라이트
    ctx.strokeStyle = theme.highlight;
    ctx.lineWidth = 1;
    for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.arc(180, 250 + i * 20, 35, 0, Math.PI);
        ctx.stroke();
    }
    
    // 소매 그리기
    const sleeveGradient = ctx.createLinearGradient(120, 180, 180, 220);
    sleeveGradient.addColorStop(0, theme.primary);
    sleeveGradient.addColorStop(1, theme.secondary);
    
    ctx.fillStyle = sleeveGradient;
    ctx.beginPath();
    ctx.ellipse(130, 200, 15, 25, 0, 0, 2 * Math.PI);
    ctx.ellipse(270, 200, 15, 25, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // 소매 윤곽선
    ctx.strokeStyle = theme.highlight;
    ctx.lineWidth = 1.5;
    ctx.stroke();
}

// 고급 캐릭터 액세서리 그리기
function drawPremiumCharacterAccessories(ctx, theme, mbti) {
    // 머리 장식 (MBTI별 특성에 따라)
    if (mbti.includes('J')) {
        // 왕관/관 모양 (고급)
        const crownGradient = ctx.createLinearGradient(130, 130, 170, 130);
        crownGradient.addColorStop(0, theme.primary);
        crownGradient.addColorStop(0.5, theme.highlight);
        crownGradient.addColorStop(1, theme.primary);
        
        ctx.fillStyle = crownGradient;
        ctx.beginPath();
        ctx.arc(150, 130, 15, 0, Math.PI);
        ctx.fill();
        
        // 왕관 장식
        for (let i = 0; i < 3; i++) {
            ctx.fillStyle = theme.highlight;
            ctx.beginPath();
            ctx.arc(140 + i * 10, 125, 2, 0, 2 * Math.PI);
            ctx.fill();
        }
        
        // 보석 (고급)
        const gemGradient = ctx.createRadialGradient(150, 120, 0, 150, 120, 6);
        gemGradient.addColorStop(0, theme.accent);
        gemGradient.addColorStop(0.7, theme.highlight);
        gemGradient.addColorStop(1, theme.primary);
        
        ctx.fillStyle = gemGradient;
        ctx.beginPath();
        ctx.arc(150, 120, 6, 0, 2 * Math.PI);
        ctx.fill();
        
        // 보석 하이라이트
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(149, 119, 1.5, 0, 2 * Math.PI);
        ctx.fill();
        
    } else if (mbti.includes('P')) {
        // 자연스러운 머리 장식 (고급)
        const naturalGradient = ctx.createRadialGradient(150, 130, 0, 150, 130, 12);
        naturalGradient.addColorStop(0, theme.secondary);
        naturalGradient.addColorStop(1, theme.accent);
        
        ctx.fillStyle = naturalGradient;
        ctx.beginPath();
        ctx.arc(150, 130, 12, 0, 2 * Math.PI);
        ctx.fill();
        
        // 자연 장식 요소들
        for (let i = 0; i < 2; i++) {
            ctx.fillStyle = theme.highlight;
            ctx.beginPath();
            ctx.arc(145 + i * 10, 125, 1.5, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
    
    // 손에 무기/도구 (고급)
    if (mbti.includes('T')) {
        // 검/도구 (고급)
        const weaponGradient = ctx.createLinearGradient(120, 190, 135, 175);
        weaponGradient.addColorStop(0, theme.primary);
        weaponGradient.addColorStop(1, theme.highlight);
        
        ctx.strokeStyle = weaponGradient;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(120, 190);
        ctx.lineTo(110, 175);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(180, 190);
        ctx.lineTo(190, 175);
        ctx.stroke();
        
        // 무기 하이라이트
        ctx.strokeStyle = theme.accent;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(120, 190);
        ctx.lineTo(110, 175);
        ctx.moveTo(180, 190);
        ctx.lineTo(190, 175);
        ctx.stroke();
        
    } else if (mbti.includes('F')) {
        // 마법/에너지 (고급)
        const magicGradient = ctx.createRadialGradient(120, 185, 0, 120, 185, 8);
        magicGradient.addColorStop(0, theme.accent);
        magicGradient.addColorStop(0.7, theme.highlight);
        magicGradient.addColorStop(1, theme.primary);
        
        ctx.fillStyle = magicGradient;
        ctx.beginPath();
        ctx.arc(120, 185, 8, 0, 2 * Math.PI);
        ctx.arc(180, 185, 8, 0, 2 * Math.PI);
        ctx.fill();
        
        // 마법 하이라이트
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(119, 184, 2, 0, 2 * Math.PI);
        ctx.arc(179, 184, 2, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    // 머리카락 (고급)
    const hairGradient = ctx.createLinearGradient(130, 140, 170, 140);
    hairGradient.addColorStop(0, '#8b4513');
    hairGradient.addColorStop(0.5, '#a0522d');
    hairGradient.addColorStop(1, '#8b4513');
    
    ctx.fillStyle = hairGradient;
    ctx.beginPath();
    ctx.arc(150, 140, 20, 0, Math.PI);
    ctx.fill();
    
    // 머리카락 하이라이트
    ctx.strokeStyle = theme.highlight;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(150, 140, 15, 0, Math.PI);
    ctx.stroke();
}

// 고급 에너지 효과 그리기
function drawPremiumEnergyEffects(ctx, theme) {
    // 캐릭터 주변 에너지 오라 (고급)
    const auraGradient = ctx.createRadialGradient(150, 200, 0, 150, 200, 120);
    auraGradient.addColorStop(0, theme.accent + '60');
    auraGradient.addColorStop(0.5, theme.highlight + '30');
    auraGradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = auraGradient;
    ctx.beginPath();
    ctx.arc(150, 200, 120, 0, 2 * Math.PI);
    ctx.fill();
    
    // 고급 에너지 파티클
    for (let i = 0; i < 25; i++) {
        const angle = (i / 25) * 2 * Math.PI;
        const radius = 80 + Math.random() * 40;
        const x = 150 + Math.cos(angle) * radius;
        const y = 200 + Math.sin(angle) * radius;
        const size = Math.random() * 3 + 1.5;
        const opacity = Math.random() * 0.8 + 0.2;
        
        // 다양한 색상의 파티클
        const colors = [theme.accent, theme.highlight, theme.primary, theme.secondary];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        ctx.globalAlpha = opacity;
        ctx.fillStyle = color;
        
        // 파티클 모양 (원형 또는 별형)
        if (Math.random() > 0.8) {
            drawStar(ctx, x, y, size);
        } else {
            ctx.beginPath();
            ctx.arc(x, y, size, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
    ctx.globalAlpha = 1;
    
    // 에너지 맥동 효과
    const pulseGradient = ctx.createRadialGradient(150, 200, 0, 150, 200, 100);
    pulseGradient.addColorStop(0, theme.accent + '20');
    pulseGradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = pulseGradient;
    ctx.beginPath();
    ctx.arc(150, 200, 100, 0, 2 * Math.PI);
    ctx.fill();
}

// 고급 텍스트 효과 그리기
function drawPremiumText(ctx, theme, mbti, character) {
    // MBTI 유형 텍스트 (고급)
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    
    // 텍스트 그림자
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillText(mbti, 152, 382);
    
    // 메인 텍스트
    ctx.fillStyle = '#ffffff';
    ctx.fillText(mbti, 150, 380);
    
    // 텍스트 하이라이트
    ctx.strokeStyle = theme.highlight;
    ctx.lineWidth = 1;
    ctx.strokeText(mbti, 150, 380);
    
    // 캐릭터 이름 (고급)
    ctx.font = 'bold 16px Arial';
    
    // 이름 그림자
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillText(character.name.split(' ')[0], 152, 352);
    
    // 메인 이름
    ctx.fillStyle = theme.primary;
    ctx.fillText(character.name.split(' ')[0], 150, 350);
    
    // 이름 하이라이트
    ctx.strokeStyle = theme.highlight;
    ctx.lineWidth = 1;
    ctx.strokeText(character.name.split(' ')[0], 150, 350);
    
    // 캐릭터 스타일 표시
    ctx.font = 'italic 12px Arial';
    ctx.fillStyle = theme.accent;
    ctx.fillText(theme.style.toUpperCase(), 150, 370);
}

// 캐릭터 아이콘을 화면에 표시하는 함수
function displayCharacterImage(mbti, containerId) {
    const character = getTranslatedCharacter(mbti);
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `<div style="font-size: 80px; text-align: center; margin: 20px 0;">${character.icon}</div>`;
    }
}

// 다국어 캐릭터 정보 가져오기 함수
function getTranslatedCharacter(mbti) {
    const baseCharacter = characterData[mbti] || {
        name: "신비한 여행자",
        description: "미지의 영역을 탐험하는 신비로운 존재",
        abilities: "적응력, 탐험",
        jobs: "탐험가, 모험가",
        icon: "🌟"
    };
    
    // 현재 언어 확인
    const lang = currentLanguage || 'ko';
    
    // 내장 다국어 번역 데이터
    const characterTranslationsData = {
        ko: {
            "INTJ": { name: "천상의 도서관 예언자 루네아", description: "세계의 흐름을 읽는 고대 예언자. 전략적 사고와 깊은 통찰력으로 미래를 예측하며, 지식의 수호자로서 세계의 비밀을 지키는 신비로운 존재", abilities: "예지, 정신 연결, 전략적 계획", jobs: "작가, 상담사, 전략가, 연구원", icon: "📚" },
            "INTP": { name: "시간의 수호자 크로노스", description: "논리와 창의성이 조화를 이루는 시간의 수호자. 복잡한 문제를 체계적으로 분석하며, 새로운 이론과 발견을 통해 세계를 이해하는 지적 탐험가", abilities: "시간 조작, 논리적 분석, 창의적 문제 해결", jobs: "과학자, 철학자, 프로그래머, 발명가", icon: "⏰" },
            "ENTJ": { name: "천상의 지휘관 아스트라", description: "강력한 리더십과 실행력으로 목표를 달성하는 천상의 지휘관. 대담한 비전과 전략적 사고로 팀을 이끌며, 혁신적인 변화를 만들어내는 카리스마 넘치는 지도자", abilities: "군단 지휘, 전략적 계획, 카리스마", jobs: "CEO, 정치인, 군인, 프로젝트 매니저", icon: "⚡" },
            "ENTP": { name: "혁신의 마법사 이노바", description: "끊임없는 호기심과 창의력으로 새로운 가능성을 발견하는 혁신의 마법사. 기존의 틀을 깨고 혁신적인 아이디어로 세계를 변화시키는 아이디어 은행", abilities: "혁신 마법, 아이디어 생성, 적응력", jobs: "기업가, 마케터, 변호사, 발명가", icon: "💡" },
            "INFJ": { name: "꿈의 예술가 루미나", description: "따뜻한 마음과 깊은 통찰력으로 세계를 더 좋은 곳으로 만드는 꿈의 예술가. 타인의 감정을 이해하고 영감을 주며, 아름다운 꿈을 현실로 만드는 이상주의자", abilities: "꿈 조작, 감정 공감, 영감 부여", jobs: "작가, 상담사, 예술가, 교사", icon: "🌙" },
            "INFP": { name: "자연의 시인 플로라", description: "순수한 마음과 창의적 영감으로 아름다움을 창조하는 자연의 시인. 깊은 감정과 상상력으로 세계의 아름다움을 발견하며, 진실한 표현으로 마음을 울리는 예술가", abilities: "자연 조작, 감정 표현, 창작", jobs: "작가, 예술가, 음악가, 상담사", icon: "🌸" },
            "ENFJ": { name: "희망의 선구자 호프", description: "카리스마 있는 리더십과 영감으로 모든 사람의 잠재력을 끌어내는 희망의 선구자. 따뜻한 리더십과 공감 능력으로 팀을 하나로 모으며, 긍정적인 변화를 창조하는 멘토", abilities: "영감 부여, 팀 리더십, 공감 능력", jobs: "교사, 상담사, HR 매니저, 정치인", icon: "🌟" },
            "ENFP": { name: "자유의 모험가 마라", description: "열정과 창의력으로 새로운 경험을 추구하는 자유의 모험가. 활발한 상상력과 적응력으로 다양한 가능성을 탐구하며, 타인에게 영감을 주는 자유로운 영혼", abilities: "바람 조작, 적응력, 영감 전달", jobs: "기자, 예술가, 마케터, 상담사", icon: "🌪️" },
            "ISTJ": { name: "신뢰의 기사 가디언", description: "책임감과 신뢰성으로 안정적인 기반을 제공하는 신뢰의 기사. 체계적이고 실용적인 접근으로 임무를 완수하며, 전통과 규칙을 존중하는 믿음직한 보호자", abilities: "방어 마법, 체계적 관리, 신뢰성", jobs: "회계사, 군인, 경찰, 관리자", icon: "🛡️" },
            "ISFJ": { name: "따뜻한 수호자 쉘터", description: "보살핌과 보호의 마음으로 모든 사람의 편안함을 책임지는 따뜻한 수호자. 실용적이고 헌신적인 성격으로 안정감을 제공하며, 세심한 배려로 타인을 보호하는 보호자", abilities: "치유 마법, 보호 능력, 세심한 배려", jobs: "간호사, 교사, 상담사, 사서", icon: "🏠" },
            "ESTJ": { name: "질서의 관리자 오더", description: "체계적이고 실용적인 관리 능력으로 모든 것을 질서정연하게 정리하는 질서의 관리자. 효율적이고 조직적인 접근으로 목표를 달성하며, 명확한 규칙과 구조를 만드는 관리자", abilities: "질서 조작, 조직 관리, 효율성", jobs: "경영자, 군인, 경찰, 행정관", icon: "⚖️" },
            "ESFJ": { name: "사교의 달인 소셜", description: "따뜻한 마음과 사교성으로 모든 사람이 즐거운 분위기를 만드는 사교의 달인. 타인을 돕고 조화를 추구하며, 실용적이고 협력적인 성격으로 팀 분위기를 이끄는 인기인", abilities: "사교 마법, 분위기 조성, 협력 능력", jobs: "이벤트 플래너, HR 매니저, 영업원, 교사", icon: "🤝" },
            "ISTP": { name: "만능 장인 스킬", description: "실용적이고 유연한 능력으로 어떤 상황에도 적응하는 만능 장인. 문제 해결 능력과 실용적 사고로 위기 상황을 극복하며, 다양한 기술을 습득하는 문제 해결사", abilities: "기술 습득, 문제 해결, 적응력", jobs: "기술자, 운동선수, 경찰, 의사", icon: "🔧" },
            "ISFP": { name: "자연의 아이 하모니", description: "자연스럽고 유연한 성격으로 아름다움과 조화를 추구하는 자연의 아이. 실용적이고 예술적인 감각으로 세계의 아름다움을 발견하며, 평화와 조화를 중시하는 예술가", abilities: "자연 조화, 예술적 감각, 평화 유지", jobs: "예술가, 디자이너, 간호사, 요리사", icon: "🌿" },
            "ESTP": { name: "행동의 전사 액션", description: "즉흥적이고 실용적인 행동력으로 순간의 기회를 놓치지 않는 행동의 전사. 현실적이고 적응력 있는 성격으로 위기 상황을 극복하며, 실용적인 해결책을 찾는 모험가", abilities: "즉시 행동, 위기 대응, 실용적 해결", jobs: "기업가, 운동선수, 경찰, 소방관", icon: "⚔️" },
            "ESFP": { name: "즐거움의 전달자 조이", description: "자발적이고 열정적인 성격으로 모든 곳에 즐거움을 전파하는 즐거움의 전달자. 실용적이고 사교적인 성격으로 타인을 즐겁게 하며, 긍정적인 에너지로 분위기를 밝게 하는 엔터테이너", abilities: "즐거움 전파, 분위기 조성, 긍정적 에너지", jobs: "연예인, 영업원, 이벤트 플래너, 교사", icon: "🎉" }
        },
        en: {
            "INTJ": { name: "Lunea, the Stellar Library Prophet", description: "An ancient prophet who reads the flow of the world. Predicts the future with strategic thinking and deep insight, a mysterious being who guards the secrets of the world as the keeper of knowledge", abilities: "Foresight, Mental Connection, Strategic Planning", jobs: "Writer, Counselor, Strategist, Researcher", icon: "📚" },
            "INTP": { name: "Chronos, the Time Guardian", description: "A time guardian where logic and creativity harmonize. Systematically analyzes complex problems and understands the world through new theories and discoveries as an intellectual explorer", abilities: "Time Manipulation, Logical Analysis, Creative Problem Solving", jobs: "Scientist, Philosopher, Programmer, Inventor", icon: "⏰" },
            "ENTJ": { name: "Astra, the Celestial Commander", description: "A celestial commander who achieves goals with powerful leadership and execution. Leads teams with bold vision and strategic thinking, creating innovative changes as a charismatic leader", abilities: "Legion Command, Strategic Planning, Charisma", jobs: "CEO, Politician, Soldier, Project Manager", icon: "⚡" },
            "ENTP": { name: "Inova, the Innovation Mage", description: "An innovation mage who discovers new possibilities with endless curiosity and creativity. Breaks existing frameworks and transforms the world with innovative ideas as an idea bank", abilities: "Innovation Magic, Idea Generation, Adaptability", jobs: "Entrepreneur, Marketer, Lawyer, Inventor", icon: "💡" },
            "INFJ": { name: "Lumina, the Dream Artist", description: "A dream artist who makes the world a better place with a warm heart and deep insight. Understands others' emotions and inspires, making beautiful dreams reality as an idealist", abilities: "Dream Manipulation, Emotional Empathy, Inspiration Granting", jobs: "Writer, Counselor, Artist, Teacher", icon: "🌙" },
            "INFP": { name: "Flora, the Nature Poet", description: "A nature poet who creates beauty with pure heart and creative inspiration. Discovers the world's beauty with deep emotion and imagination, touching hearts through authentic expression as an artist", abilities: "Nature Manipulation, Emotional Expression, Creation", jobs: "Writer, Artist, Musician, Counselor", icon: "🌸" },
            "ENFJ": { name: "Hope, the Hope Pioneer", description: "A hope pioneer who brings out everyone's potential with charismatic leadership and inspiration. Unites teams with warm leadership and empathy, creating positive change as a mentor", abilities: "Inspiration Granting, Team Leadership, Empathy", jobs: "Teacher, Counselor, HR Manager, Politician", icon: "🌟" },
            "ENFP": { name: "Mara, the Freedom Adventurer", description: "A freedom adventurer who pursues new experiences with passion and creativity. Explores various possibilities with active imagination and adaptability, inspiring others as a free spirit", abilities: "Wind Manipulation, Adaptability, Inspiration Transmission", jobs: "Journalist, Artist, Marketer, Counselor", icon: "🌪️" },
            "ISTJ": { name: "Guardian, the Trust Knight", description: "A trust knight who provides stable foundation with responsibility and reliability. Completes tasks with systematic and practical approach, respecting tradition and rules as a dependable protector", abilities: "Defense Magic, Systematic Management, Reliability", jobs: "Accountant, Soldier, Police Officer, Manager", icon: "🛡️" },
            "ISFJ": { name: "Shelter, the Warm Protector", description: "A warm protector who takes responsibility for everyone's comfort with a caring and protective heart. Provides stability with practical and devoted personality, protecting others with careful care", abilities: "Healing Magic, Protection Ability, Careful Care", jobs: "Nurse, Teacher, Counselor, Librarian", icon: "🏠" },
            "ESTJ": { name: "Order, the Order Manager", description: "An order manager who organizes everything systematically with systematic and practical management skills. Achieves goals with efficient and organized approach, creating clear rules and structure", abilities: "Order Manipulation, Organization Management, Efficiency", jobs: "Executive, Soldier, Police Officer, Administrator", icon: "⚖️" },
            "ESFJ": { name: "Social, the Social Master", description: "A social master who creates enjoyable atmosphere for everyone with warm heart and sociability. Helps others and pursues harmony, leading team atmosphere with practical and cooperative personality", abilities: "Social Magic, Atmosphere Creation, Cooperation Ability", jobs: "Event Planner, HR Manager, Salesperson, Teacher", icon: "🤝" },
            "ISTP": { name: "Skill, the Versatile Craftsman", description: "A versatile craftsman who adapts to any situation with practical and flexible abilities. Overcomes crisis situations with problem-solving skills and practical thinking, acquiring various skills", abilities: "Skill Acquisition, Problem Solving, Adaptability", jobs: "Technician, Athlete, Police Officer, Doctor", icon: "🔧" },
            "ISFP": { name: "Harmony, the Nature Child", description: "A nature child who pursues beauty and harmony with natural and flexible personality. Discovers the world's beauty with practical and artistic sense, valuing peace and harmony", abilities: "Natural Harmony, Artistic Sense, Peace Maintenance", jobs: "Artist, Designer, Nurse, Chef", icon: "🌿" },
            "ESTP": { name: "Action, the Action Warrior", description: "An action warrior who doesn't miss instant opportunities with impulsive and practical action power. Overcomes crisis situations with realistic and adaptable personality, finding practical solutions", abilities: "Instant Action, Crisis Response, Practical Solution", jobs: "Entrepreneur, Athlete, Police Officer, Firefighter", icon: "⚔️" },
            "ESFP": { name: "Joy, the Joy Transmitter", description: "A joy transmitter who spreads joy everywhere with spontaneous and passionate personality. Makes others happy with practical and sociable personality, brightening atmosphere with positive energy", abilities: "Joy Transmission, Atmosphere Creation, Positive Energy", jobs: "Entertainer, Salesperson, Event Planner, Teacher", icon: "🎉" }
        },
        zh: {
            "INTJ": { name: "星之图书馆预言者 露娜", description: "解读世界潮流的古代预言者。以战略性思维和深刻洞察力预测未来，作为知识的守护者守护世界秘密的神秘存在", abilities: "预知、精神连接、战略规划", jobs: "作家、咨询师、战略家、研究员", icon: "📚" },
            "INTP": { name: "时间守护者 克罗诺斯", description: "逻辑与创造力和谐的时间守护者。系统性地分析复杂问题，通过新理论和发现理解世界的知识探索者", abilities: "时间操控、逻辑分析、创造性问题解决", jobs: "科学家、哲学家、程序员、发明家", icon: "⏰" },
            "ENTJ": { name: "天界指挥官 阿斯特拉", description: "以强大领导力和执行力实现目标的天界指挥官。以大胆愿景和战略思维领导团队，创造创新变革的魅力领袖", abilities: "军团指挥、战略规划、魅力", jobs: "CEO、政治家、军人、项目经理", icon: "⚡" },
            "ENTP": { name: "创新法师 伊诺瓦", description: "以无尽好奇心和创造力发现新可能性的创新法师。打破现有框架，以创新理念改变世界的创意银行", abilities: "创新魔法、创意生成、适应力", jobs: "企业家、营销人员、律师、发明家", icon: "💡" },
            "INFJ": { name: "梦想艺术家 露米娜", description: "以温暖心灵和深刻洞察力让世界更美好的梦想艺术家。理解他人情感并给予启发，将美丽梦想变为现实的理想主义者", abilities: "梦想操控、情感共鸣、灵感赋予", jobs: "作家、咨询师、艺术家、教师", icon: "🌙" },
            "INFP": { name: "自然诗人 芙罗拉", description: "以纯真心灵和创意灵感创造美丽的自然诗人。以深刻情感和想象力发现世界之美，通过真实表达触动心灵的艺术家", abilities: "自然操控、情感表达、创作", jobs: "作家、艺术家、音乐家、咨询师", icon: "🌸" },
            "ENFJ": { name: "希望先驱者 霍普", description: "以魅力领导和启发激发每个人潜能的希望先驱者。以温暖领导和同理心团结团队，创造积极变化的导师", abilities: "灵感赋予、团队领导、同理心", jobs: "教师、咨询师、人力资源经理、政治家", icon: "🌟" },
            "ENFP": { name: "自由冒险家 玛拉", description: "以热情和创造力追求新体验的自由冒险家。以活跃想象力和适应力探索各种可能性，启发他人的自由灵魂", abilities: "风之操控、适应力、灵感传递", jobs: "记者、艺术家、营销人员、咨询师", icon: "🌪️" },
            "ISTJ": { name: "信任骑士 守护者", description: "以责任感和可靠性提供稳定基础的信任骑士。以系统和实用的方法完成任务，尊重传统和规则的可靠保护者", abilities: "防御魔法、系统管理、可靠性", jobs: "会计师、军人、警察、经理", icon: "🛡️" },
            "ISFJ": { name: "温暖守护者 庇护所", description: "以关怀和保护之心为所有人舒适负责的温暖守护者。以实用和奉献的个性提供稳定感，以细心关怀保护他人", abilities: "治愈魔法、保护能力、细心关怀", jobs: "护士、教师、咨询师、图书管理员", icon: "🏠" },
            "ESTJ": { name: "秩序管理者 秩序", description: "以系统和实用的管理技能有序整理一切的秩序管理者。以高效和有组织的方法实现目标，创造清晰规则和结构", abilities: "秩序操控、组织管理、效率", jobs: "执行官、军人、警察、行政人员", icon: "⚖️" },
            "ESFJ": { name: "社交大师 社交", description: "以温暖心灵和社交能力为所有人创造愉快氛围的社交大师。帮助他人并追求和谐，以实用和合作的个性领导团队氛围", abilities: "社交魔法、氛围营造、合作能力", jobs: "活动策划师、人力资源经理、销售员、教师", icon: "🤝" },
            "ISTP": { name: "万能工匠 技能", description: "以实用和灵活能力适应任何情况的万能工匠。以问题解决能力和实用思维克服危机情况，掌握各种技能", abilities: "技能习得、问题解决、适应力", jobs: "技术员、运动员、警察、医生", icon: "🔧" },
            "ISFP": { name: "自然之子 和谐", description: "以自然和灵活的个性追求美丽和和谐的自然之子。以实用和艺术感发现世界之美，重视和平与和谐", abilities: "自然和谐、艺术感、和平维护", jobs: "设计师、艺术家、护士、厨师", icon: "🌿" },
            "ESTP": { name: "行动战士 行动", description: "以冲动和实用的行动力不错过瞬间机会的行动战士。以现实和适应性的个性克服危机情况，找到实用解决方案", abilities: "即时行动、危机应对、实用解决", jobs: "企业家、运动员、警察、消防员", icon: "⚔️" },
            "ESFP": { name: "快乐传播者 快乐", description: "以自发和热情的个性到处传播快乐的快乐传播者。以实用和社交的个性让他人快乐，以积极能量照亮氛围", abilities: "快乐传播、氛围营造、积极能量", jobs: "艺人、销售员、活动策划师、教师", icon: "🎉" }
        },
        ja: {
            "INTJ": { name: "星の図書館預言者 ルネア", description: "世界の流れを読む古代預言者。戦略的思考と深い洞察力で未来を予測し、知識の守護者として世界の秘密を守る神秘的な存在", abilities: "予知、精神接続、戦略的計画", jobs: "作家、カウンセラー、戦略家、研究者", icon: "📚" },
            "INTP": { name: "時の守護者 クロノス", description: "論理と創造性が調和する時の守護者。複雑な問題を体系的に分析し、新しい理論と発見を通じて世界を理解する知的探検家", abilities: "時間操作、論理的分析、創造的問題解決", jobs: "科学者、哲学者、プログラマー、発明家", icon: "⏰" },
            "ENTJ": { name: "天界指揮官 アストラ", description: "強力なリーダーシップと実行力で目標を達成する天界指揮官。大胆なビジョンと戦略的思考でチームを導き、革新的な変化を創造するカリスマ的指導者", abilities: "軍団指揮、戦略的計画、カリスマ", jobs: "CEO、政治家、軍人、プロジェクトマネージャー", icon: "⚡" },
            "ENTP": { name: "革新の魔法使い イノバ", description: "尽きることのない好奇心と創造力で新しい可能性を発見する革新の魔法使い。既存の枠組みを破り、革新的なアイデアで世界を変革するアイデアバンク", abilities: "革新魔法、アイデア生成、適応力", jobs: "起業家、マーケター、弁護士、発明家", icon: "💡" },
            "INFJ": { name: "夢の芸術家 ルミナ", description: "温かい心と深い洞察力で世界をより良い場所にする夢の芸術家。他人の感情を理解し、インスピレーションを与え、美しい夢を現実にする理想主義者", abilities: "夢操作、感情共感、インスピレーション付与", jobs: "作家、カウンセラー、芸術家、教師", icon: "🌙" },
            "INFP": { name: "自然の詩人 フローラ", description: "純粋な心と創造的インスピレーションで美しさを創造する自然の詩人。深い感情と想像力で世界の美しさを発見し、真実の表現で心を動かす芸術家", abilities: "自然操作、感情表現、創作", jobs: "作家、芸術家、音楽家、カウンセラー", icon: "🌸" },
            "ENFJ": { name: "希望の先駆者 ホープ", description: "他人を導き、インスピレーションを与えるカリスマで皆の潜在能力を引き出す希望の先駆者。温かいリーダーシップと共感能力でチームを一つにまとめ、ポジティブな変化を創造するメンター", abilities: "インスピレーション付与、チームリーダーシップ、共感能力", jobs: "教師、カウンセラー、HRマネージャー、政治家", icon: "🌟" },
            "ENFP": { name: "自由の冒険家 マラ", description: "情熱と創造力で新しい経験を追求する自由の冒険家。活発な想像力と適応力で様々な可能性を探求し、他人にインスピレーションを与える自由な魂", abilities: "風操作、適応力、インスピレーション伝達", jobs: "ジャーナリスト、芸術家、マーケター、カウンセラー", icon: "🌪️" },
            "ISTJ": { name: "信頼の騎士 ガーディアン", description: "責任感と信頼性で安定した基盤を提供する信頼の騎士。体系的で実用的なアプローチで仕事を完成し、伝統とルールを尊重する頼もしい保護者", abilities: "防御魔法、体系的管理、信頼性", jobs: "会計士、軍人、警察官、管理者", icon: "🛡️" },
            "ISFJ": { name: "温かい守護者 シェルター", description: "他人を世話し、保護する温かい心で皆の快適さを責任を持つ温かい守護者。実用的で献身的な性格で安定感を提供し、細やかな配慮で他人を保護する保護者", abilities: "癒し魔法、保護能力、細やかな配慮", jobs: "看護師、教師、カウンセラー、司書", icon: "🏠" },
            "ESTJ": { name: "秩序の管理者 オーダー", description: "体系的で実用的な管理能力で全てを秩序正しく整理する秩序の管理者。効率的で組織的なアプローチで目標を達成し、明確なルールと構造を作る管理者", abilities: "秩序操作、組織管理、効率性", jobs: "経営者、軍人、警察官、行政官", icon: "⚖️" },
            "ESFJ": { name: "社交の達人 ソーシャル", description: "温かい心と社交性で皆が楽しい雰囲気を作る社交の達人。他人を助け、調和を追求し、実用的で協力的な性格でチームの雰囲気を導く人気者", abilities: "社交魔法、雰囲気作り、協力能力", jobs: "イベントプランナー、HRマネージャー、営業員、教師", icon: "🤝" },
            "ISTP": { name: "万能職人 スキル", description: "実用的で柔軟な能力でどんな状況にも適応する万能職人。問題解決能力と実用的思考で危機状況を克服し、様々な技術を習得する問題解決者", abilities: "技術習得、問題解決、適応力", jobs: "技術者、運動選手、警察官、医師", icon: "🔧" },
            "ISFP": { name: "自然の子 ハーモニー", description: "自然で柔軟な性格で美しさと調和を追求する自然の子。実用的で芸術的な感覚で世界の美しさを発見し、平和と調和を重視する芸術家", abilities: "自然調和、芸術的感覚、平和維持", jobs: "芸術家、デザイナー、看護師、シェフ", icon: "🌿" },
            "ESTP": { name: "行動の戦士 アクション", description: "即興的で実用的な行動力で瞬間の機会を逃さない行動の戦士。現実的で適応力のある性格で危機状況を克服し、実用的な解決策を見つける冒険家", abilities: "即座の行動、危機対応、実用的解決", jobs: "起業家、運動選手、警察官、消防士", icon: "⚔️" },
            "ESFP": { name: "楽しさの伝達者 ジョイ", description: "自発的で情熱的な性格で全ての場所に楽しさを伝播する楽しさの伝達者。実用的で社交的な性格で他人を楽しくさせ、ポジティブなエネルギーで雰囲気を明るくするエンターテイナー", abilities: "楽しさ伝播、雰囲気作り、ポジティブエネルギー", jobs: "エンターテイナー、営業員、イベントプランナー、教師", icon: "🎉" }
        }
    };
    
    const translated = characterTranslationsData[lang]?.[mbti];
    if (translated) {
        return {
            ...baseCharacter,
            name: translated.name,
            description: translated.description,
            abilities: translated.abilities,
            jobs: translated.jobs,
            icon: translated.icon
        };
    }
    
    return baseCharacter;
}

// 다국어 TETO/EGGN 정보 가져오기 함수
function getTranslatedTetoEggn(tetoEggnType) {
    // 현재 언어 확인 및 강제 업데이트
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        currentLanguage = savedLanguage;
    }
    
    console.log('getTranslatedTetoEggn 호출:', { tetoEggnType, currentLanguage });
    
    // 번역된 타입명을 한국어 키로 변환
    let koreanKey = tetoEggnType;
    if (tetoEggnType === '睾酮型' || tetoEggnType === 'Teto Type' || tetoEggnType === 'テト型') {
        koreanKey = '테토형';
    } else if (tetoEggnType === '雌酮型' || tetoEggnType === 'Egen Type' || tetoEggnType === 'エゲン型') {
        koreanKey = '에겐형';
    }
    
    console.log('한국어 키로 변환:', koreanKey);
    
    const baseData = tetoEggnData.ko[koreanKey] || {
        type: "특별한 유형",
        description: "당신만의 독특한 성향을 가진 특별한 유형",
        characteristics: "자신만의 특별한 특성",
        relationship_style: "자신만의 관계 스타일",
        ideal_partner: "자신에게 맞는 이상적인 파트너",
        strength: "자신만의 강점",
        weakness: "개선할 수 있는 부분"
    };
    
    const translated = tetoEggnData[currentLanguage]?.[koreanKey];
    console.log('번역된 데이터:', translated);
    
    if (translated) {
        // ideal_partner 필드에서 "테토형"과 "에겐형"을 현재 언어로 번역
        let result = { ...translated };
        
        // ideal_partner 필드의 다국어 처리
        if (result.ideal_partner) {
            // 테토형/에겐형 번역 매핑
            const typeTranslations = {
                'ko': { '테토형': '테토형', '에겐형': '에겐형' },
                'en': { '테토형': 'Teto Type', '에겐형': 'Egen Type' },
                'zh': { '테토형': '睾酮型', '에겐형': '雌酮型' },
                'ja': { '테토형': 'テト型', '에겐형': 'エゲン型' }
            };
            
            const currentTypeTranslations = typeTranslations[currentLanguage] || typeTranslations['ko'];
            
            // ideal_partner 텍스트에서 테토형/에겐형을 현재 언어로 교체
            result.ideal_partner = result.ideal_partner
                .replace(/테토형/g, currentTypeTranslations['테토형'])
                .replace(/에겐형/g, currentTypeTranslations['에겐형']);
        }
        
        console.log('최종 결과:', result);
        return result;
    }
    
    // 번역된 데이터가 없으면 한국어 데이터를 사용
    console.log('번역 없음, 한국어 데이터 사용:', baseData);
    return baseData;
    
    console.log('번역 없음, 기본 데이터 반환:', baseData);
    return baseData;
}

// 유형별 테스트 질문 번역 함수
function getTranslatedTestQuestion(testType, questionIndex) {
    const lang = currentLanguage || 'ko';
    const translations = testQuestionTranslations[lang]?.[testType];
    if (translations && translations[questionIndex]) {
        return translations[questionIndex].question;
    }
    return null;
}

// 유형별 테스트 답변 번역 함수
function getTranslatedTestOptions(testType, questionIndex) {
    const lang = currentLanguage || 'ko';
    const translations = testQuestionTranslations[lang]?.[testType];
    if (translations && translations[questionIndex]) {
        return translations[questionIndex].options;
    }
    return null;
}

// 테스트 결과 다국어 번역 함수
function getTranslatedTestResult(testType, resultType) {
    // 현재 언어 확인 및 강제 업데이트
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        currentLanguage = savedLanguage;
    }

    const lang = currentLanguage || 'ko';
    
    // 디버깅 로그 추가
    console.log('getTranslatedTestResult 호출:', { testType, resultType, lang });
    console.log('testResults[testType]:', testResults[testType]);
    console.log('testResults[testType][lang]:', testResults[testType]?.[lang]);
    
    const translatedData = testResults[testType]?.[lang]?.[resultType];

    if (translatedData) {
        console.log('번역된 데이터 찾음:', translatedData);
        return translatedData;
    }

    console.log('번역된 데이터 없음, 기본값 반환');
    // 번역이 없으면 한국어 기본값 반환
    return testResults[testType]?.ko?.[resultType] || {
        title: "결과 없음",
        description: "결과를 찾을 수 없습니다.",
        characteristics: "",
        advice: ""
    };
}

// 캐릭터 다국어 번역 데이터 (내장)
const characterTranslations = {
    ko: {
        "INTJ": {
            name: "별의 도서관 예언자 루네아",
            description: "세상의 흐름을 읽는 고대 예언자. 전략적 사고와 깊은 통찰력으로 미래를 예측하며, 지식의 보관자로서 세상의 비밀을 지키는 신비로운 존재",
            abilities: "예지, 정신 연결, 전략적 계획",
            jobs: "작가, 상담가, 전략가, 연구원",
            icon: "🔮"
        },
        "INTP": {
            name: "시간의 수호자 크로노스",
            description: "논리와 창의성이 조화를 이루는 시간의 수호자. 복잡한 문제를 체계적으로 분석하며, 새로운 이론과 발견을 통해 세상을 이해하는 지적 탐험가",
            abilities: "시간 조작, 논리적 분석, 창의적 문제 해결",
            jobs: "과학자, 철학자, 프로그래머, 발명가",
            icon: "⏰"
        },
        "ENTJ": {
            name: "천상의 지휘관 아스트라",
            description: "강력한 리더십과 실행력으로 목표를 달성하는 천상의 지휘관. 대담한 비전과 전략적 사고로 팀을 이끌며, 혁신적인 변화를 만들어내는 카리스마 넘치는 지도자",
            abilities: "군단 지휘, 전략적 계획, 카리스마",
            jobs: "CEO, 정치인, 군인, 프로젝트 매니저",
            icon: "⚡"
        },
        "ENTP": {
            name: "혁신의 마법사 이노바",
            description: "끊임없는 호기심과 창의력으로 새로운 가능성을 발견하는 혁신의 마법사. 기존의 틀을 깨고 혁신적인 아이디어로 세상을 변화시키는 아이디어 뱅크",
            abilities: "혁신 마법, 아이디어 생성, 적응력",
            jobs: "기업가, 마케터, 변호사, 발명가",
            icon: "💡"
        },
        "INFJ": {
            name: "꿈의 예술가 루미나",
            description: "따뜻한 마음과 깊은 통찰력으로 세상을 더 나은 곳으로 만드는 꿈의 예술가. 타인의 감정을 이해하고 영감을 주며, 아름다운 꿈을 현실로 만드는 이상주의자",
            abilities: "꿈 조작, 감정 공감, 영감 부여",
            jobs: "작가, 상담가, 예술가, 교사",
            icon: "✨"
        },
        "INFP": {
            name: "자연의 시인 플로라",
            description: "순수한 마음과 창의적 영감으로 아름다움을 창조하는 자연의 시인. 깊은 감성과 상상력으로 세상의 아름다움을 발견하며, 진정성 있는 표현을 통해 마음을 울리는 예술가",
            abilities: "자연 조작, 감정 표현, 창작",
            jobs: "작가, 예술가, 음악가, 상담가",
            icon: "🌸"
        },
        "ENFJ": {
            name: "희망의 선도자 호프",
            description: "타인을 이끌고 영감을 주는 카리스마로 모두의 잠재력을 끌어올리는 희망의 선도자. 따뜻한 리더십과 공감 능력으로 팀을 하나로 모으며, 긍정적인 변화를 만들어내는 멘토",
            abilities: "영감 부여, 팀 리더십, 공감 능력",
            jobs: "교사, 상담가, HR 매니저, 정치인",
            icon: "🌟"
        },
        "ENFP": {
            name: "자유의 모험가 마라",
            description: "열정과 창의력으로 새로운 경험을 추구하는 자유의 모험가. 활발한 상상력과 적응력으로 다양한 가능성을 탐험하며, 타인에게 영감을 주는 자유로운 영혼",
            abilities: "바람 조작, 적응력, 영감 전달",
            jobs: "기자, 예술가, 마케터, 상담가",
            icon: "🌪️"
        },
        "ISTJ": {
            name: "신뢰의 기사 가디언",
            description: "책임감과 신뢰성으로 안정적인 기반을 제공하는 신뢰의 기사. 체계적이고 실용적인 접근으로 일을 완성하며, 전통과 규칙을 존중하는 든든한 보호자",
            abilities: "방어 마법, 체계적 관리, 신뢰성",
            jobs: "회계사, 군인, 경찰, 관리자",
            icon: "🛡️"
        },
        "ISFJ": {
            name: "따뜻한 수호자 쉘터",
            description: "타인을 돌보고 보호하는 따뜻한 마음으로 모두의 편안함을 책임지는 따뜻한 수호자. 실용적이고 헌신적인 성격으로 안정감을 제공하며, 세심한 배려로 타인을 보호하는 보호자",
            abilities: "치유 마법, 보호 능력, 세심한 배려",
            jobs: "간호사, 교사, 상담가, 사서",
            icon: "🏠"
        },
        "ESTJ": {
            name: "질서의 관리자 오더",
            description: "체계적이고 실용적인 관리 능력으로 모든 것을 질서 있게 정리하는 질서의 관리자. 효율적이고 조직적인 접근으로 목표를 달성하며, 명확한 규칙과 구조를 만드는 관리자",
            abilities: "질서 조작, 조직 관리, 효율성",
            jobs: "경영자, 군인, 경찰, 행정가",
            icon: "⚖️"
        },
        "ESFJ": {
            name: "사교의 달인 소셜",
            description: "따뜻한 마음과 사교성으로 모두가 즐거운 분위기를 만드는 사교의 달인. 타인을 돕고 조화를 추구하며, 실용적이고 협력적인 성격으로 팀의 분위기를 이끄는 인기쟁이",
            abilities: "사교 마법, 분위기 조성, 협력 능력",
            jobs: "이벤트 플래너, HR 매니저, 판매원, 교사",
            icon: "🎭"
        },
        "ISTP": {
            name: "만능 재주꾼 스킬",
            description: "실용적이고 유연한 능력으로 어떤 상황에서도 적응하는 만능 재주꾼. 문제 해결 능력과 실용적 사고로 위기 상황을 극복하며, 다양한 기술을 습득하는 문제 해결사",
            abilities: "기술 습득, 문제 해결, 적응력",
            jobs: "기술자, 운동선수, 경찰, 의사",
            icon: "🔧"
        },
        "ISFP": {
            name: "자연의 아이 하모니",
            description: "자연스럽고 유연한 성격으로 아름다움과 조화를 추구하는 자연의 아이. 실용적이고 예술적인 감각으로 세상의 아름다움을 발견하며, 평화와 조화를 중시하는 예술가",
            abilities: "자연 조화, 예술적 감각, 평화 유지",
            jobs: "예술가, 디자이너, 간호사, 요리사",
            icon: "🌿"
        },
        "ESTP": {
            name: "행동의 용사 액션",
            description: "즉흥적이고 실용적인 행동력으로 순간의 기회를 놓치지 않는 행동의 용사. 현실적이고 적응력 있는 성격으로 위기 상황을 극복하며, 실용적인 해결책을 찾는 모험가",
            abilities: "즉시 행동, 위기 대응, 실용적 해결",
            jobs: "기업가, 운동선수, 경찰, 소방관",
            icon: "⚔️"
        },
        "ESFP": {
            name: "즐거움의 전달자 조이",
            description: "자발적이고 열정적인 성격으로 모든 곳에 즐거움을 전파하는 즐거움의 전달자. 실용적이고 사교적인 성격으로 타인을 즐겁게 하며, 긍정적인 에너지로 분위기를 밝게 만드는 엔터테이너",
            abilities: "즐거움 전파, 분위기 조성, 긍정 에너지",
            jobs: "엔터테이너, 판매원, 이벤트 플래너, 교사",
            icon: "🎪"
        }
    },
    en: {
        "INTJ": {
            name: "Lunea, the Stellar Library Prophet",
            description: "An ancient prophet who reads the flow of the world. Predicts the future with strategic thinking and deep insight, a mysterious being who guards the secrets of the world as the keeper of knowledge",
            abilities: "Foresight, Mental Connection, Strategic Planning",
            jobs: "Writer, Counselor, Strategist, Researcher",
            icon: "🔮"
        },
        "INTP": {
            name: "Chronos, the Time Guardian",
            description: "A time guardian where logic and creativity harmonize. Systematically analyzes complex problems and understands the world through new theories and discoveries as an intellectual explorer",
            abilities: "Time Manipulation, Logical Analysis, Creative Problem Solving",
            jobs: "Scientist, Philosopher, Programmer, Inventor",
            icon: "⏰"
        },
        "ENTJ": {
            name: "Astra, the Celestial Commander",
            description: "A celestial commander who achieves goals with powerful leadership and execution. Leads teams with bold vision and strategic thinking, creating innovative changes as a charismatic leader",
            abilities: "Legion Command, Strategic Planning, Charisma",
            jobs: "CEO, Politician, Soldier, Project Manager",
            icon: "⚡"
        },
        "ENTP": {
            name: "Inova, the Innovation Mage",
            description: "An innovation mage who discovers new possibilities with endless curiosity and creativity. Breaks existing frameworks and transforms the world with innovative ideas as an idea bank",
            abilities: "Innovation Magic, Idea Generation, Adaptability",
            jobs: "Entrepreneur, Marketer, Lawyer, Inventor",
            icon: "💡"
        },
        "INFJ": {
            name: "Lumina, the Dream Artist",
            description: "A dream artist who makes the world a better place with a warm heart and deep insight. Understands others' emotions and inspires, making beautiful dreams reality as an idealist",
            abilities: "Dream Manipulation, Emotional Empathy, Inspiration Granting",
            jobs: "Writer, Counselor, Artist, Teacher",
            icon: "✨"
        },
        "INFP": {
            name: "Flora, the Nature Poet",
            description: "A nature poet who creates beauty with pure heart and creative inspiration. Discovers the world's beauty with deep emotion and imagination, touching hearts through authentic expression as an artist",
            abilities: "Nature Manipulation, Emotional Expression, Creation",
            jobs: "Writer, Artist, Musician, Counselor",
            icon: "🌸"
        },
        "ENFJ": {
            name: "Hope, the Hope Pioneer",
            description: "A hope pioneer who brings out everyone's potential with charismatic leadership and inspiration. Unites teams with warm leadership and empathy, creating positive change as a mentor",
            abilities: "Inspiration Granting, Team Leadership, Empathy",
            jobs: "Teacher, Counselor, HR Manager, Politician",
            icon: "🌟"
        },
        "ENFP": {
            name: "Mara, the Freedom Adventurer",
            description: "A freedom adventurer who pursues new experiences with passion and creativity. Explores various possibilities with active imagination and adaptability, inspiring others as a free spirit",
            abilities: "Wind Manipulation, Adaptability, Inspiration Transmission",
            jobs: "Journalist, Artist, Marketer, Counselor",
            icon: "🌪️"
        },
        "ISTJ": {
            name: "Guardian, the Trust Knight",
            description: "A trust knight who provides stable foundation with responsibility and reliability. Completes tasks with systematic and practical approach, respecting tradition and rules as a dependable protector",
            abilities: "Defense Magic, Systematic Management, Reliability",
            jobs: "Accountant, Soldier, Police Officer, Manager",
            icon: "🛡️"
        },
        "ISFJ": {
            name: "Shelter, the Warm Protector",
            description: "A warm protector who takes responsibility for everyone's comfort with a caring and protective heart. Provides stability with practical and devoted personality, protecting others with careful care",
            abilities: "Healing Magic, Protection Ability, Careful Care",
            jobs: "Nurse, Teacher, Counselor, Librarian",
            icon: "🏠"
        },
        "ESTJ": {
            name: "Order, the Order Manager",
            description: "An order manager who organizes everything systematically with systematic and practical management skills. Achieves goals with efficient and organized approach, creating clear rules and structure",
            abilities: "Order Manipulation, Organization Management, Efficiency",
            jobs: "Executive, Soldier, Police Officer, Administrator",
            icon: "⚖️"
        },
        "ESFJ": {
            name: "Social, the Social Master",
            description: "A social master who creates enjoyable atmosphere for everyone with warm heart and sociability. Helps others and pursues harmony, leading team atmosphere with practical and cooperative personality",
            abilities: "Social Magic, Atmosphere Creation, Cooperation Ability",
            jobs: "Event Planner, HR Manager, Salesperson, Teacher",
            icon: "🎭"
        },
        "ISTP": {
            name: "Skill, the Versatile Craftsman",
            description: "A versatile craftsman who adapts to any situation with practical and flexible abilities. Overcomes crisis situations with problem-solving skills and practical thinking, acquiring various skills",
            abilities: "Skill Acquisition, Problem Solving, Adaptability",
            jobs: "Technician, Athlete, Police Officer, Doctor",
            icon: "🔧"
        },
        "ISFP": {
            name: "Harmony, the Nature Child",
            description: "A nature child who pursues beauty and harmony with natural and flexible personality. Discovers the world's beauty with practical and artistic sense, valuing peace and harmony",
            abilities: "Natural Harmony, Artistic Sense, Peace Maintenance",
            jobs: "Artist, Designer, Nurse, Chef",
            icon: "🌿"
        },
        "ESTP": {
            name: "Action, the Action Warrior",
            description: "An action warrior who doesn't miss instant opportunities with impulsive and practical action power. Overcomes crisis situations with realistic and adaptable personality, finding practical solutions",
            abilities: "Instant Action, Crisis Response, Practical Solution",
            jobs: "Entrepreneur, Athlete, Police Officer, Firefighter",
            icon: "⚔️"
        },
        "ESFP": {
            name: "Joy, the Joy Transmitter",
            description: "A joy transmitter who spreads joy everywhere with spontaneous and passionate personality. Makes others happy with practical and sociable personality, brightening atmosphere with positive energy",
            abilities: "Joy Transmission, Atmosphere Creation, Positive Energy",
            jobs: "Entertainer, Salesperson, Event Planner, Teacher",
            icon: "🎪"
        }
    },
    zh: {
        "INTJ": {
            name: "星之图书馆预言者 露娜",
            description: "解读世界潮流的古代预言者。以战略性思维和深刻洞察力预测未来，作为知识的守护者守护世界秘密的神秘存在",
            abilities: "预知、精神连接、战略规划",
            jobs: "作家、咨询师、战略家、研究员",
            icon: "🔮"
        },
        "INTP": {
            name: "时间守护者 克罗诺斯",
            description: "逻辑与创造力和谐的时间守护者。系统性地分析复杂问题，通过新理论和发现理解世界的知识探索者",
            abilities: "时间操控、逻辑分析、创造性问题解决",
            jobs: "科学家、哲学家、程序员、发明家",
            icon: "⏰"
        },
        "ENTJ": {
            name: "天界指挥官 阿斯特拉",
            description: "以强大领导力和执行力实现目标的天界指挥官。以大胆愿景和战略思维领导团队，创造创新变革的魅力领袖",
            abilities: "军团指挥、战略规划、魅力",
            jobs: "CEO、政治家、军人、项目经理",
            icon: "⚡"
        },
        "ENTP": {
            name: "创新法师 伊诺瓦",
            description: "以无尽好奇心和创造力发现新可能性的创新法师。打破现有框架，以创新理念改变世界的创意银行",
            abilities: "创新魔法、创意生成、适应力",
            jobs: "企业家、营销人员、律师、发明家",
            icon: "💡"
        },
        "INFJ": {
            name: "梦想艺术家 露米娜",
            description: "以温暖心灵和深刻洞察力让世界更美好的梦想艺术家。理解他人情感并给予启发，将美丽梦想变为现实的理想主义者",
            abilities: "梦想操控、情感共鸣、灵感赋予",
            jobs: "作家、咨询师、艺术家、教师",
            icon: "✨"
        },
        "INFP": {
            name: "自然诗人 芙罗拉",
            description: "以纯真心灵和创意灵感创造美丽的自然诗人。以深刻情感和想象力发现世界之美，通过真实表达触动心灵的艺术家",
            abilities: "自然操控、情感表达、创作",
            jobs: "作家、艺术家、音乐家、咨询师",
            icon: "🌸"
        },
        "ENFJ": {
            name: "希望先驱者 霍普",
            description: "以魅力领导和启发激发每个人潜能的希望先驱者。以温暖领导和同理心团结团队，创造积极变化的导师",
            abilities: "灵感赋予、团队领导、同理心",
            jobs: "教师、咨询师、人力资源经理、政治家",
            icon: "🌟"
        },
        "ENFP": {
            name: "自由冒险家 玛拉",
            description: "以热情和创造力追求新体验的自由冒险家。以活跃想象力和适应力探索各种可能性，启发他人的自由灵魂",
            abilities: "风之操控、适应力、灵感传递",
            jobs: "记者、艺术家、营销人员、咨询师",
            icon: "🌪️"
        },
        "ISTJ": {
            name: "信任骑士 守护者",
            description: "以责任感和可靠性提供稳定基础的信任骑士。以系统和实用的方法完成任务，尊重传统和规则的可靠保护者",
            abilities: "防御魔法、系统管理、可靠性",
            jobs: "会计师、军人、警察、经理",
            icon: "🛡️"
        },
        "ISFJ": {
            name: "温暖守护者 庇护所",
            description: "以关怀和保护之心为所有人舒适负责的温暖守护者。以实用和奉献的个性提供稳定感，以细心关怀保护他人",
            abilities: "治愈魔法、保护能力、细心关怀",
            jobs: "护士、教师、咨询师、图书管理员",
            icon: "🏠"
        },
        "ESTJ": {
            name: "秩序管理者 秩序",
            description: "以系统和实用的管理技能有序整理一切的秩序管理者。以高效和有组织的方法实现目标，创造清晰规则和结构",
            abilities: "秩序操控、组织管理、效率",
            jobs: "执行官、军人、警察、行政人员",
            icon: "⚖️"
        },
        "ESFJ": {
            name: "社交大师 社交",
            description: "以温暖心灵和社交能力为所有人创造愉快氛围的社交大师。帮助他人并追求和谐，以实用和合作的个性领导团队氛围",
            abilities: "社交魔法、氛围营造、合作能力",
            jobs: "活动策划师、人力资源经理、销售员、教师",
            icon: "🎭"
        },
        "ISTP": {
            name: "万能工匠 技能",
            description: "以实用和灵活能力适应任何情况的万能工匠。以问题解决能力和实用思维克服危机情况，掌握各种技能",
            abilities: "技能习得、问题解决、适应力",
            jobs: "技术员、运动员、警察、医生",
            icon: "🔧"
        },
        "ISFP": {
            name: "自然之子 和谐",
            description: "以自然和灵活的个性追求美丽和和谐的自然之子。以实用和艺术感发现世界之美，重视和平与和谐",
            abilities: "自然和谐、艺术感、和平维护",
            jobs: "设计师、艺术家、护士、厨师",
            icon: "🌿"
        },
        "ESTP": {
            name: "行动战士 行动",
            description: "以冲动和实用的行动力不错过瞬间机会的行动战士。以现实和适应性的个性克服危机情况，找到实用解决方案",
            abilities: "即时行动、危机应对、实用解决",
            jobs: "企业家、运动员、警察、消防员",
            icon: "⚔️"
        },
        "ESFP": {
            name: "快乐传播者 快乐",
            description: "以自发和热情的个性到处传播快乐的快乐传播者。以实用和社交的个性让他人快乐，以积极能量照亮氛围",
            abilities: "快乐传播、氛围营造、积极能量",
            jobs: "艺人、销售员、活动策划师、教师",
            icon: "🎪"
        }
    },
    ja: {
        "INTJ": {
            name: "星の図書館預言者 ルネア",
            description: "世界の流れを読む古代預言者。戦略的思考と深い洞察力で未来を予測し、知識の守護者として世界の秘密を守る神秘的な存在",
            abilities: "予知、精神接続、戦略的計画",
            jobs: "作家、カウンセラー、戦略家、研究者",
            icon: "🔮"
        },
        "INTP": {
            name: "時の守護者 クロノス",
            description: "論理と創造性が調和する時の守護者。複雑な問題を体系的に分析し、新しい理論と発見を通じて世界を理解する知的探検家",
            abilities: "時間操作、論理的分析、創造的問題解決",
            jobs: "科学者、哲学者、プログラマー、発明家",
            icon: "⏰"
        },
        "ENTJ": {
            name: "天界指揮官 アストラ",
            description: "強力なリーダーシップと実行力で目標を達成する天界指揮官。大胆なビジョンと戦略的思考でチームを導き、革新的な変化を創造するカリスマ的指導者",
            abilities: "軍団指揮、戦略的計画、カリスマ",
            jobs: "CEO、政治家、軍人、プロジェクトマネージャー",
            icon: "⚡"
        },
        "ENTP": {
            name: "革新の魔法使い イノバ",
            description: "尽きることのない好奇心と創造力で新しい可能性を発見する革新の魔法使い。既存の枠組みを破り、革新的なアイデアで世界を変革するアイデアバンク",
            abilities: "革新魔法、アイデア生成、適応力",
            jobs: "起業家、マーケター、弁護士、発明家",
            icon: "💡"
        },
        "INFJ": {
            name: "夢の芸術家 ルミナ",
            description: "温かい心と深い洞察力で世界をより良い場所にする夢の芸術家。他人の感情を理解し、インスピレーションを与え、美しい夢を現実にする理想主義者",
            abilities: "夢操作、感情共感、インスピレーション付与",
            jobs: "作家、カウンセラー、芸術家、教師",
            icon: "✨"
        },
        "INFP": {
            name: "自然の詩人 フローラ",
            description: "純粋な心と創造的インスピレーションで美しさを創造する自然の詩人。深い感情と想像力で世界の美しさを発見し、真実の表現で心を動かす芸術家",
            abilities: "自然操作、感情表現、創作",
            jobs: "作家、芸術家、音楽家、カウンセラー",
            icon: "🌸"
        },
        "ENFJ": {
            name: "希望の先駆者 ホープ",
            description: "他人を導き、インスピレーションを与えるカリスマで皆の潜在能力を引き出す希望の先駆者。温かいリーダーシップと共感能力でチームを一つにまとめ、ポジティブな変化を創造するメンター",
            abilities: "インスピレーション付与、チームリーダーシップ、共感能力",
            jobs: "教師、カウンセラー、HRマネージャー、政治家",
            icon: "🌟"
        },
        "ENFP": {
            name: "自由の冒険家 マラ",
            description: "情熱と創造力で新しい経験を追求する自由の冒険家。活発な想像力と適応力で様々な可能性を探求し、他人にインスピレーションを与える自由な魂",
            abilities: "風操作、適応力、インスピレーション伝達",
            jobs: "ジャーナリスト、芸術家、マーケター、カウンセラー",
            icon: "🌪️"
        },
        "ISTJ": {
            name: "信頼の騎士 ガーディアン",
            description: "責任感と信頼性で安定した基盤を提供する信頼の騎士。体系的で実用的なアプローチで仕事を完成し、伝統とルールを尊重する頼もしい保護者",
            abilities: "防御魔法、体系的管理、信頼性",
            jobs: "会計士、軍人、警察官、管理者",
            icon: "🛡️"
        },
        "ISFJ": {
            name: "温かい守護者 シェルター",
            description: "他人を世話し、保護する温かい心で皆の快適さを責任を持つ温かい守護者。実用的で献身的な性格で安定感を提供し、細やかな配慮で他人を保護する保護者",
            abilities: "癒し魔法、保護能力、細やかな配慮",
            jobs: "看護師、教師、カウンセラー、司書",
            icon: "🏠"
        },
        "ESTJ": {
            name: "秩序の管理者 オーダー",
            description: "体系的で実用的な管理能力で全てを秩序正しく整理する秩序の管理者。効率的で組織的なアプローチで目標を達成し、明確なルールと構造を作る管理者",
            abilities: "秩序操作、組織管理、効率性",
            jobs: "経営者、軍人、警察官、行政官",
            icon: "⚖️"
        },
        "ESFJ": {
            name: "社交の達人 ソーシャル",
            description: "温かい心と社交性で皆が楽しい雰囲気を作る社交の達人。他人を助け、調和を追求し、実用的で協力的な性格でチームの雰囲気を導く人気者",
            abilities: "社交魔法、雰囲気作り、協力能力",
            jobs: "イベントプランナー、HRマネージャー、営業員、教師",
            icon: "🎭"
        },
        "ISTP": {
            name: "万能職人 スキル",
            description: "実用的で柔軟な能力でどんな状況にも適応する万能職人。問題解決能力と実用的思考で危機状況を克服し、様々な技術を習得する問題解決者",
            abilities: "技術習得、問題解決、適応力",
            jobs: "技術者、運動選手、警察官、医師",
            icon: "🔧"
        },
        "ISFP": {
            name: "自然の子 ハーモニー",
            description: "自然で柔軟な性格で美しさと調和を追求する自然の子。実用的で芸術的な感覚で世界の美しさを発見し、平和と調和を重視する芸術家",
            abilities: "自然調和、芸術的感覚、平和維持",
            jobs: "芸術家、デザイナー、看護師、シェフ",
            icon: "🌿"
        },
        "ESTP": {
            name: "行動の戦士 アクション",
            description: "即興的で実用的な行動力で瞬間の機会を逃さない行動の戦士。現実的で適応力のある性格で危機状況を克服し、実用的な解決策を見つける冒険家",
            abilities: "即座の行動、危機対応、実用的解決",
            jobs: "起業家、運動選手、警察官、消防士",
            icon: "⚔️"
        },
        "ESFP": {
            name: "楽しさの伝達者 ジョイ",
            description: "自発的で情熱的な性格で全ての場所に楽しさを伝播する楽しさの伝達者。実用的で社交的な性格で他人を楽しくさせ、ポジティブなエネルギーで雰囲気を明るくするエンターテイナー",
            abilities: "楽しさ伝播、雰囲気作り、ポジティブエネルギー",
            jobs: "エンターテイナー、営業員、イベントプランナー、教師",
            icon: "🎪"
        }
    }
};

// 전역 변수
let currentQuestion = 0;
let soloAnswers = [];
let duoAnswers = { player1: [], player2: [] };
let currentPlayer = 1;
let testType = '';
let playerNames = { player1: '', player2: '' };
let currentTestType = '';
let testAnswers = [];
let currentLanguage = 'ko'; // 기본 언어는 한국어

// 언어 변경 함수
function changeLanguage(lang) {
    console.log('changeLanguage 호출됨:', lang);
    
    // 언어 유효성 검사
    if (!['ko', 'en', 'zh', 'ja'].includes(lang)) {
        console.warn('Invalid language:', lang, 'falling back to ko');
        lang = 'ko';
    }
    
    // 언어 설정 강제 업데이트
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    console.log('언어 변경됨:', currentLanguage);
    
    // 언어 버튼 먼저 업데이트
    updateLanguageButtons();
    
    // 모든 텍스트 업데이트
    updateAllTexts();
    
    // 테스트 중인 경우 질문과 답변을 즉시 업데이트 (더 안전한 조건)
    if (testType && currentQuestion >= 0 && currentQuestion < 24 && 
        (document.getElementById('solo-test-screen').classList.contains('active') || 
         document.getElementById('duo-test-screen').classList.contains('active'))) {
        // 강제로 질문 다시 로드
        setTimeout(() => {
            if (testType && currentQuestion >= 0 && currentQuestion < 24) {
                loadQuestion();
            }
        }, 100);
    }
}

// 모든 텍스트 업데이트
function updateAllTexts() {
    console.log('updateAllTexts 호출됨, 현재 언어:', currentLanguage);
    const t = translations[currentLanguage];
    
    // 페이지 제목 업데이트
    document.title = t.title;
    
    // 메타 태그 업데이트
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', t.meta_description);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.setAttribute('content', t.meta_keywords);
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', t.title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', t.meta_description);
    }
    
    // 헤더 업데이트
    document.querySelector('.logo h1').textContent = 'Character Quest';
    document.querySelector('.subtitle').textContent = t.subtitle;
    
    // 시작 화면 업데이트
    document.querySelector('.welcome-card h2').textContent = t.title;
    document.querySelector('.welcome-card p').textContent = t.welcome_description;
    
    // 테스트 옵션 업데이트
    const optionCards = document.querySelectorAll('.option-card');
    optionCards[0].querySelector('h3').textContent = t.solo_test;
    optionCards[0].querySelector('p').textContent = t.solo_test_desc;
    optionCards[1].querySelector('h3').textContent = t.duo_test;
    optionCards[1].querySelector('p').textContent = t.duo_test_desc;
    
            // 테스트 화면 제목 업데이트
        const soloTestTitle = document.querySelector('#solo-test-screen h2');
        if (soloTestTitle) {
            soloTestTitle.textContent = t.inner_character_discovery;
        }
        
        const duoTestTitle = document.querySelector('#duo-test-screen h2');
        if (duoTestTitle) {
            duoTestTitle.textContent = t.character_compatibility_test;
        }
        
        // 다른 테스트 화면 제목 업데이트
        const romanticTestTitle = document.querySelector('#romantic-test-screen h2');
        if (romanticTestTitle) {
            romanticTestTitle.textContent = t.romantic_test + ' 💕';
        }
        
        const careerTestTitle = document.querySelector('#career-test-screen h2');
        if (careerTestTitle) {
            careerTestTitle.textContent = t.career_test + ' 💼';
        }
        
        const personalityTestTitle = document.querySelector('#personality-test-screen h2');
        if (personalityTestTitle) {
            personalityTestTitle.textContent = t.personality_test + ' ⭐';
        }
        
        // 결과 화면 제목 업데이트
        const mainResultTitle = document.querySelector('#result-screen h2');
        if (mainResultTitle) {
            mainResultTitle.textContent = t.your_inner_character;
        }
        
        const romanticResultTitle = document.querySelector('#romantic-result-screen h2');
        if (romanticResultTitle) {
            romanticResultTitle.textContent = t.romantic_test + ' ' + t.result + ' 💕';
        }
        
        const careerResultTitle = document.querySelector('#career-result-screen h2');
        if (careerResultTitle) {
            careerResultTitle.textContent = t.career_test + ' ' + t.result + ' 💼';
        }
        
        const personalityResultTitle = document.querySelector('#personality-result-screen h2');
        if (personalityResultTitle) {
            personalityResultTitle.textContent = t.personality_test + ' ' + t.result + ' ⭐';
        }
    
    // 이름 입력 화면 업데이트
    document.querySelector('#name-input-screen h2').textContent = t.name_input_title;
    document.querySelector('#name-input-screen p').textContent = t.name_input_desc;
    document.querySelector('label[for="player1-name"]').textContent = t.player1_label;
    document.querySelector('label[for="player2-name"]').textContent = t.player2_label;
    document.getElementById('player1-name').placeholder = t.player1_placeholder;
    document.getElementById('player2-name').placeholder = t.player2_placeholder;
    document.querySelector('#name-input-screen .btn').textContent = t.start_test;
    
    // 테스트 화면 업데이트
    document.querySelectorAll('.question-counter').forEach(counter => {
        const text = counter.textContent;
        if (text.includes('질문') || text.includes('Question') || text.includes('问题') || text.includes('質問')) {
            counter.textContent = text.replace(/^\d+ \/ \d+ /, '') + t.question_counter;
        }
    });
    
            // 결과 화면 버튼 업데이트
        document.querySelectorAll('.action-buttons .btn.primary').forEach(btn => {
            if (btn.textContent.includes('다시') || btn.textContent.includes('Again') || btn.textContent.includes('重新') || btn.textContent.includes('再')) {
                btn.textContent = t.restart_test;
            }
        });
        
        // 유형별 테스트 결과 라벨 업데이트
        const resultLabels = document.querySelectorAll('.result-label');
        resultLabels.forEach(label => {
            const text = label.textContent;
            if (text.includes('특징') || text.includes('Characteristics') || text.includes('特征') || text.includes('特徴')) {
                label.textContent = t.characteristics;
            } else if (text.includes('이상적인 파트너') || text.includes('Ideal Partner') || text.includes('理想伴侣') || text.includes('理想的なパートナー')) {
                label.textContent = t.ideal_partner;
            } else if (text.includes('추천 직업') || text.includes('Recommended Jobs') || text.includes('推荐职业') || text.includes('おすすめ職業')) {
                label.textContent = t.recommended_jobs;
            } else if (text.includes('약점') || text.includes('Weaknesses') || text.includes('弱点') || text.includes('弱点')) {
                label.textContent = t.weaknesses;
            } else if (text.includes('능력') || text.includes('Abilities') || text.includes('能力') || text.includes('能力')) {
                label.textContent = t.abilities;
            }
        });
        
        // 결과 화면이 활성화되어 있을 때 결과 업데이트
        const romanticResultScreen = document.getElementById('romantic-result-screen');
        if (romanticResultScreen && romanticResultScreen.classList.contains('active')) {
            updateRomanticResultDisplay();
        }
        
        const careerResultScreen = document.getElementById('career-result-screen');
        if (careerResultScreen && careerResultScreen.classList.contains('active')) {
            updateCareerResultDisplay();
        }
        
        const personalityResultScreen = document.getElementById('personality-result-screen');
        if (personalityResultScreen && personalityResultScreen.classList.contains('active')) {
            updatePersonalityResultDisplay();
        }
        
        // 유형별 테스트 화면이 활성화되어 있을 때 질문 업데이트
        const romanticTestScreen = document.getElementById('romantic-test-screen');
        if (romanticTestScreen && romanticTestScreen.classList.contains('active')) {
            loadRomanticQuestion();
        }
        
        const careerTestScreen = document.getElementById('career-test-screen');
        if (careerTestScreen && careerTestScreen.classList.contains('active')) {
            loadCareerQuestion();
        }
        
        const personalityTestScreen = document.getElementById('personality-test-screen');
        if (personalityTestScreen && personalityTestScreen.classList.contains('active')) {
            loadPersonalityQuestion();
        }
        
        document.querySelectorAll('.action-buttons .btn.secondary').forEach(btn => {
            if (btn.textContent.includes('공유') || btn.textContent.includes('Share') || btn.textContent.includes('分享') || btn.textContent.includes('共有')) {
                btn.textContent = t.share_result;
            }
        });
        
        // 돌아가기 버튼 업데이트
        document.querySelectorAll('.btn.secondary').forEach(btn => {
            if (btn.textContent.includes('돌아가기') || btn.textContent.includes('Back') || btn.textContent.includes('返回') || btn.textContent.includes('戻る')) {
                btn.textContent = t.back_button;
            }
        });
    
    // 결과 화면 텍스트 업데이트
    const compatibilityElement = document.querySelector('.compatibility p');
    if (compatibilityElement) {
        compatibilityElement.textContent = t.compatibility;
    }
    
    const recommendedPartnerElement = document.querySelector('.recommended-partner h4');
    if (recommendedPartnerElement) {
        recommendedPartnerElement.textContent = t.recommended_partner;
    }
    
    const relationshipTitleElement = document.getElementById('relationship-title');
    if (relationshipTitleElement) {
        relationshipTitleElement.textContent = t.character_compatibility_analysis;
    }
    
    // TETO/EGGN 결과 섹션 업데이트
    const tetoEggnTitle = document.querySelector('.teto-eggn-result h4');
    if (tetoEggnTitle) {
        tetoEggnTitle.textContent = '💕 ' + t.teto_eggn_analysis;
    }
    
    const tetoEggnSections = document.querySelectorAll('.teto-eggn-info h5');
    tetoEggnSections.forEach(section => {
        const text = section.textContent;
        if (text.includes('연애 유형') || text.includes('Relationship Type') || text.includes('恋爱类型') || text.includes('恋愛タイプ')) {
            section.textContent = t.teto_eggn_type;
        } else if (text.includes('강점') || text.includes('Strengths') || text.includes('优势') || text.includes('強み')) {
            section.textContent = '💪 ' + t.teto_eggn_strength;
        } else if (text.includes('개선점') || text.includes('Areas for Improvement') || text.includes('改进点') || text.includes('改善点')) {
            section.textContent = '⚠️ ' + t.teto_eggn_weakness;
        } else if (text.includes('연애 스타일') || text.includes('Relationship Style') || text.includes('恋爱风格') || text.includes('恋愛スタイル')) {
            section.textContent = '💑 ' + t.teto_eggn_relationship;
        } else if (text.includes('이상형') || text.includes('Ideal Type') || text.includes('理想类型') || text.includes('理想タイプ')) {
            section.textContent = '💘 ' + t.teto_eggn_ideal;
        }
    });
    
            // 궁합 분석 섹션 업데이트
        const analysisSections = document.querySelectorAll('.analysis-section h5');
        analysisSections.forEach(section => {
            const text = section.textContent;
            if (text.includes('강점')) {
                section.textContent = '💪 ' + t.strengths;
            } else if (text.includes('도전 과제')) {
                section.textContent = '⚠️ ' + t.challenges;
            } else if (text.includes('조언')) {
                section.textContent = '💡 ' + t.advice;
            } else if (text.includes('관계 유형')) {
                section.textContent = '🤝 ' + t.relationship_type;
            }
        });
        
        // 다른 테스트 결과 섹션 업데이트
        const resultSections = document.querySelectorAll('.result-section h4');
        resultSections.forEach(section => {
            const text = section.textContent;
            if (text.includes('연애 특성')) {
                section.textContent = '💕 ' + t.love_style;
            } else if (text.includes('이상형')) {
                section.textContent = '💘 ' + t.ideal_type;
            } else if (text.includes('직업 특성')) {
                section.textContent = '💼 ' + t.career_test;
            } else if (text.includes('추천 직업')) {
                section.textContent = '🎯 ' + t.recommended_partner;
            } else if (text.includes('성격 특성')) {
                section.textContent = '⭐ ' + t.personality_test;
            } else if (text.includes('강점')) {
                section.textContent = '💪 ' + t.strengths;
            } else if (text.includes('개선점')) {
                section.textContent = '⚠️ ' + t.improvement_points;
            }
        });
        
        // 경력 테스트 결과 화면의 "조언" 섹션 제목 업데이트
        const adviceSections = document.querySelectorAll('.result-section h4, .result-box h4');
        adviceSections.forEach(section => {
            const text = section.textContent;
            if (text.includes('조언') || text.includes('Advice') || text.includes('建议') || text.includes('アドバイス')) {
                section.textContent = '💡 ' + t.advice;
            }
        });
        
        // MBTI 호환성 분석 결과 화면 업데이트 (duo-result-screen이 활성화된 경우)
        const duoResultScreen = document.getElementById('duo-result-screen');
        if (duoResultScreen && duoResultScreen.classList.contains('active')) {
            // 호환성 분석 섹션의 제목들 업데이트
            const compatibilityAnalysisSections = document.querySelectorAll('.compatibility-analysis h5');
            compatibilityAnalysisSections.forEach(section => {
                const text = section.textContent;
                if (text.includes('강점') || text.includes('Strengths') || text.includes('优势') || text.includes('強み')) {
                    section.textContent = '💪 ' + t.strengths;
                } else if (text.includes('도전 과제') || text.includes('Challenges') || text.includes('挑战') || text.includes('課題')) {
                    section.textContent = '⚠️ ' + t.challenges;
                } else if (text.includes('조언') || text.includes('Advice') || text.includes('建议') || text.includes('アドバイス')) {
                    section.textContent = '💡 ' + t.advice;
                } else if (text.includes('관계 유형') || text.includes('Relationship Type') || text.includes('关系类型') || text.includes('関係タイプ')) {
                    section.textContent = '🤝 ' + t.relationship_type;
                }
            });
        }
    
    // 다른 테스트 섹션 업데이트
    document.querySelector('.related-tests h4').textContent = t.other_tests_title;
    
    const suggestionCards = document.querySelectorAll('.suggestion-card');
    suggestionCards[0].querySelector('h5').textContent = t.romantic_test;
    suggestionCards[0].querySelector('p').textContent = t.romantic_test_desc;
    suggestionCards[1].querySelector('h5').textContent = t.career_test;
    suggestionCards[1].querySelector('p').textContent = t.career_test_desc;
    suggestionCards[2].querySelector('h5').textContent = t.personality_test;
    suggestionCards[2].querySelector('p').textContent = t.personality_test_desc;
    
    // 모달 업데이트
    document.getElementById('modal-title').textContent = t.modal_title;
    document.querySelector('.modal-footer .btn').textContent = t.modal_confirm;
    
    // 푸터 업데이트
    document.querySelector('.footer p').textContent = t.footer_copyright;
    
    // 현재 테스트 중인 경우 질문도 업데이트 (더 안전한 조건)
    if (testType && currentQuestion >= 0 && currentQuestion < 24 && 
        (document.getElementById('solo-test-screen').classList.contains('active') || 
         document.getElementById('duo-test-screen').classList.contains('active'))) {
        // 약간의 지연을 두고 질문 업데이트
        setTimeout(() => {
            if (testType && currentQuestion >= 0 && currentQuestion < 24) {
                loadQuestion();
            }
        }, 50);
    }
    
    // 결과 화면이 활성화된 경우 결과를 다시 업데이트
    const mainResultScreen = document.getElementById('result-screen');
    if (mainResultScreen && mainResultScreen.classList.contains('active')) {
        // 개인 결과가 표시된 경우
        const soloResult = document.getElementById('solo-result');
        if (soloResult && soloResult.style.display !== 'none') {
            // MBTI 결과 업데이트 (캐릭터 정보)
            const mbtiType = document.getElementById('solo-mbti');
            if (mbtiType && mbtiType.textContent && mbtiType.textContent.trim() !== '') {
                const character = getTranslatedCharacter(mbtiType.textContent);
                const characterName = document.getElementById('solo-character-name');
                const characterDesc = document.getElementById('solo-description');
                const characterAbilities = document.getElementById('solo-abilities');
                const characterJobs = document.getElementById('solo-jobs');
                
                if (characterName) characterName.textContent = character.name;
                if (characterDesc) characterDesc.textContent = character.description;
                if (characterAbilities) characterAbilities.textContent = character.abilities;
                if (characterJobs) characterJobs.textContent = character.jobs;
                
                // 캐릭터 이미지 업데이트
                displayCharacterImage(mbtiType.textContent, 'solo-character-image');
            }
            
            // TETO/EGGN 결과 업데이트
            const tetoType = document.getElementById('solo-teto-type');
            if (tetoType && tetoType.textContent && tetoType.textContent.trim() !== '') {
                const tetoEggnInfo = getTranslatedTetoEggn(tetoType.textContent);
                const tetoStrength = document.getElementById('solo-teto-strength');
                const tetoWeakness = document.getElementById('solo-teto-weakness');
                const tetoRelationship = document.getElementById('solo-teto-relationship');
                const tetoIdeal = document.getElementById('solo-teto-ideal');
                
                if (tetoStrength) tetoStrength.textContent = tetoEggnInfo.strength;
                if (tetoWeakness) tetoWeakness.textContent = tetoEggnInfo.weakness;
                if (tetoRelationship) tetoRelationship.textContent = tetoEggnInfo.relationship_style;
                if (tetoIdeal) tetoIdeal.textContent = tetoEggnInfo.ideal_partner;
            }
            
            // TETO/EGGN 결과 섹션 제목 업데이트
            const tetoEggnTitle = document.querySelector('.teto-eggn-result h4');
            if (tetoEggnTitle) {
                tetoEggnTitle.textContent = '💕 ' + t.teto_eggn_analysis;
            }
            
            const tetoEggnSections = document.querySelectorAll('.teto-eggn-info h5');
            tetoEggnSections.forEach(section => {
                const text = section.textContent;
                if (text.includes('연애 유형') || text.includes('Relationship Type') || text.includes('恋爱类型') || text.includes('恋愛タイプ')) {
                    section.textContent = t.teto_eggn_type;
                } else if (text.includes('강점') || text.includes('Strengths') || text.includes('优势') || text.includes('強み')) {
                    section.textContent = '💪 ' + t.teto_eggn_strength;
                } else if (text.includes('개선점') || text.includes('Areas for Improvement') || text.includes('改进点') || text.includes('改善点')) {
                    section.textContent = '⚠️ ' + t.teto_eggn_weakness;
                } else if (text.includes('연애 스타일') || text.includes('Relationship Style') || text.includes('恋爱风格') || text.includes('恋愛スタイル')) {
                    section.textContent = '💑 ' + t.teto_eggn_relationship;
                } else if (text.includes('이상형') || text.includes('Ideal Type') || text.includes('理想类型') || text.includes('理想タイプ')) {
                    section.textContent = '💘 ' + t.teto_eggn_ideal;
                }
            });
        }
        
        // 커플 결과가 표시된 경우
        const duoResult = document.getElementById('duo-result');
        if (duoResult && duoResult.style.display !== 'none') {
            // 호환성 분석 내용 업데이트
            const player1Mbti = document.getElementById('player1-mbti');
            const player2Mbti = document.getElementById('player2-mbti');
            const compatibilityScore = document.getElementById('compatibility-score');
            
            if (player1Mbti && player2Mbti && compatibilityScore) {
                const mbti1 = player1Mbti.textContent;
                const mbti2 = player2Mbti.textContent;
                const compatibility = parseInt(compatibilityScore.textContent);
                
                if (mbti1 && mbti2 && !isNaN(compatibility)) {
                    const analysis = getRelationshipAnalysis(mbti1, mbti2, compatibility);
                    
                    const relationshipTitle = document.getElementById('relationship-title');
                    const relationshipDesc = document.getElementById('relationship-description');
                    const relationshipStrengths = document.getElementById('relationship-strengths');
                    const relationshipChallenges = document.getElementById('relationship-challenges');
                    const relationshipAdvice = document.getElementById('relationship-advice');
                    const relationshipType = document.getElementById('relationship-type');
                    
                    if (relationshipTitle) relationshipTitle.textContent = analysis.title;
                    if (relationshipDesc) relationshipDesc.textContent = analysis.description;
                    if (relationshipStrengths) relationshipStrengths.textContent = analysis.strengths;
                    if (relationshipChallenges) relationshipChallenges.textContent = analysis.challenges;
                    if (relationshipAdvice) relationshipAdvice.textContent = analysis.advice;
                    if (relationshipType) relationshipType.textContent = analysis.relationship;
                    
                    // 캐릭터 아이콘 업데이트
                    const character1 = getTranslatedCharacter(mbti1);
                    const character2 = getTranslatedCharacter(mbti2);
                    const recommendedPartner = findRecommendedPartner(mbti1);
                    const partnerCharacter = getTranslatedCharacter(recommendedPartner);
                    
                    const player1ImageContainer = document.getElementById('player1-character-image');
                    const player2ImageContainer = document.getElementById('player2-character-image');
                    const partnerImageContainer = document.getElementById('partner-character-image');
                    
                    if (player1ImageContainer) {
                        player1ImageContainer.innerHTML = `<div style="font-size: 80px; text-align: center; margin: 20px 0;">${character1.icon}</div>`;
                    }
                    if (player2ImageContainer) {
                        player2ImageContainer.innerHTML = `<div style="font-size: 80px; text-align: center; margin: 20px 0;">${character2.icon}</div>`;
                    }
                    if (partnerImageContainer) {
                        partnerImageContainer.innerHTML = `<div style="font-size: 80px; text-align: center; margin: 20px 0;">${partnerCharacter.icon}</div>`;
                    }
                }
            }
            
            // 호환성 분석 섹션의 제목들 업데이트
            const compatibilityAnalysisSections = document.querySelectorAll('.analysis-section h5');
            compatibilityAnalysisSections.forEach(section => {
                const text = section.textContent;
                if (text.includes('강점') || text.includes('Strengths') || text.includes('优势') || text.includes('強み')) {
                    section.textContent = '💪 ' + t.strengths;
                } else if (text.includes('도전 과제') || text.includes('Challenges') || text.includes('挑战') || text.includes('課題')) {
                    section.textContent = '⚠️ ' + t.challenges;
                } else if (text.includes('조언') || text.includes('Advice') || text.includes('建议') || text.includes('アドバイ스')) {
                    section.textContent = '💡 ' + t.advice;
                } else if (text.includes('관계 유형') || text.includes('Relationship Type') || text.includes('关系类型') || text.includes('関係タイプ')) {
                    section.textContent = '🤝 ' + t.relationship_type;
                }
            });
        }
    }
    
    // 테스트 화면이 활성화되어 있는 경우 질문과 답변 업데이트
    const soloTestScreen = document.getElementById('solo-test-screen');
    const duoTestScreen = document.getElementById('duo-test-screen');
    
    if (soloTestScreen && soloTestScreen.classList.contains('active')) {
        // 테스트 화면 제목 업데이트
        const soloTestTitle = document.querySelector('#solo-test-screen h2');
        if (soloTestTitle) {
            soloTestTitle.textContent = t.inner_character_discovery;
        }
        // 테스트가 진행 중인 경우에만 질문 다시 로드
        if (testType && currentQuestion >= 0 && currentQuestion < 24) {
            setTimeout(() => {
                if (testType && currentQuestion >= 0 && currentQuestion < 24) {
                    loadQuestion();
                }
            }, 50);
        }
    }
    
    if (duoTestScreen && duoTestScreen.classList.contains('active')) {
        // 테스트 화면 제목 업데이트
        const duoTestTitle = document.querySelector('#duo-test-screen h2');
        if (duoTestTitle) {
            duoTestTitle.textContent = t.character_compatibility_test;
        }
        // 플레이어 표시 업데이트 (다국어 지원)
        updatePlayerDisplay();
        // 테스트가 진행 중인 경우에만 질문 다시 로드
        if (testType && currentQuestion >= 0 && currentQuestion < 24) {
            setTimeout(() => {
                if (testType && currentQuestion >= 0 && currentQuestion < 24) {
                    loadQuestion();
                }
            }, 50);
        }
    }
    
    // 결과 화면이 표시되어 있는 경우 캐릭터 정보도 업데이트
    const resultScreen = document.getElementById('result-screen');
    if (resultScreen && resultScreen.classList.contains('active')) {
        const soloResult = document.getElementById('solo-result');
        if (soloResult && soloResult.style.display !== 'none') {
            // MBTI 결과가 있는 경우 캐릭터 정보 업데이트
            const mbtiElement = document.getElementById('solo-mbti');
            if (mbtiElement && mbtiElement.textContent) {
                const mbti = mbtiElement.textContent;
                const character = getTranslatedCharacter(mbti);
                
                document.getElementById('solo-character-name').textContent = character.name;
                document.getElementById('solo-description').textContent = character.description;
                document.getElementById('solo-abilities').textContent = character.abilities;
                document.getElementById('solo-jobs').textContent = character.jobs;
                
                // 캐릭터 아이콘 업데이트
                const characterImageContainer = document.getElementById('solo-character-image');
                if (characterImageContainer) {
                    characterImageContainer.innerHTML = `<div style="font-size: 80px; text-align: center; margin: 20px 0;">${character.icon}</div>`;
                }
            }
            
            // TETO/EGGN 결과가 있는 경우 업데이트
            const tetoTypeElement = document.getElementById('solo-teto-type');
            if (tetoTypeElement && tetoTypeElement.textContent) {
                const tetoType = tetoTypeElement.textContent;
                const tetoEggnInfo = getTranslatedTetoEggn(tetoType);
                
                document.getElementById('solo-teto-strength').textContent = tetoEggnInfo.strength;
                document.getElementById('solo-teto-weakness').textContent = tetoEggnInfo.weakness;
                document.getElementById('solo-teto-relationship').textContent = tetoEggnInfo.relationship_style;
                document.getElementById('solo-teto-ideal').textContent = tetoEggnInfo.ideal_partner;
            }
        }
        
        // 커플 결과가 표시된 경우 추가 업데이트
        const duoResult = document.getElementById('duo-result');
        if (duoResult && duoResult.style.display !== 'none') {
            // 플레이어 이름 업데이트 (이미 설정되어 있지만 언어 변경 시 재확인)
            const player1NameElement = document.getElementById('result-player1-name');
            const player2NameElement = document.getElementById('result-player2-name');
            if (player1NameElement && playerNames.player1) {
                player1NameElement.textContent = playerNames.player1;
            }
            if (player2NameElement && playerNames.player2) {
                player2NameElement.textContent = playerNames.player2;
            }
            
            // MBTI 결과가 있는 경우 캐릭터 정보 업데이트
            const player1MbtiElement = document.getElementById('player1-mbti');
            const player2MbtiElement = document.getElementById('player2-mbti');
            
            if (player1MbtiElement && player1MbtiElement.textContent) {
                const mbti1 = player1MbtiElement.textContent;
                const character1 = getTranslatedCharacter(mbti1);
                const player1CharacterName = document.getElementById('player1-character-name');
                if (player1CharacterName) {
                    player1CharacterName.textContent = character1.name;
                }
                
                // 플레이어1 캐릭터 아이콘 업데이트
                const player1ImageContainer = document.getElementById('player1-character-image');
                if (player1ImageContainer) {
                    player1ImageContainer.innerHTML = `<div style="font-size: 80px; text-align: center; margin: 20px 0;">${character1.icon}</div>`;
                }
            }
            
            if (player2MbtiElement && player2MbtiElement.textContent) {
                const mbti2 = player2MbtiElement.textContent;
                const character2 = getTranslatedCharacter(mbti2);
                const player2CharacterName = document.getElementById('player2-character-name');
                if (player2CharacterName) {
                    player2CharacterName.textContent = character2.name;
                }
                
                // 플레이어2 캐릭터 아이콘 업데이트
                const player2ImageContainer = document.getElementById('player2-character-image');
                if (player2ImageContainer) {
                    player2ImageContainer.innerHTML = `<div style="font-size: 80px; text-align: center; margin: 20px 0;">${character2.icon}</div>`;
                }
            }
            
            // 추천 파트너 정보 업데이트
            const partnerCharacterName = document.getElementById('partner-character-name');
            if (partnerCharacterName && player1MbtiElement && player1MbtiElement.textContent) {
                const mbti1 = player1MbtiElement.textContent;
                const recommendedPartner = findRecommendedPartner(mbti1);
                const partnerCharacter = getTranslatedCharacter(recommendedPartner);
                partnerCharacterName.textContent = partnerCharacter.name;
                
                // 추천 파트너 아이콘 업데이트
                const partnerImageContainer = document.getElementById('partner-character-image');
                if (partnerImageContainer) {
                    partnerImageContainer.innerHTML = `<div style="font-size: 80px; text-align: center; margin: 20px 0;">${partnerCharacter.icon}</div>`;
                }
            }
        }
    }
}

// 언어 선택 버튼 업데이트
function updateLanguageButtons() {
    const buttons = document.querySelectorAll('.language-btn');
    
    // 현재 언어가 설정되지 않은 경우 기본값 사용
    if (!currentLanguage) {
        currentLanguage = localStorage.getItem('preferredLanguage') || 'ko';
    }
    
    buttons.forEach(btn => {
        btn.classList.remove('active');
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// 화면 전환 함수
function showScreen(screenId) {
    console.log('화면 전환 시도:', screenId);
    
    // 모든 화면 숨기기
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // 지정된 화면 보이기
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        console.log('화면 전환 완료:', screenId);
    } else {
        console.error('화면을 찾을 수 없습니다:', screenId);
    }
}

// 개인 테스트 시작
function startSoloTest() {
    testType = 'solo';
    currentQuestion = 0;
    soloAnswers = [];
    showScreen('solo-test-screen');
    loadQuestion();
    trackTestStart('solo');
}

// 커플 테스트 시작 (이름 입력 화면으로)
function startDuoTest() {
    showScreen('name-input-screen');
}

// 이름 입력 후 테스트 시작
function startDuoTestWithNames() {
    const player1Name = document.getElementById('player1-name').value.trim();
    const player2Name = document.getElementById('player2-name').value.trim();
    
    if (!player1Name || !player2Name) {
        alert('두 플레이어의 이름을 모두 입력해주세요!');
        return;
    }
    
    if (player1Name === player2Name) {
        alert('서로 다른 이름을 입력해주세요!');
        return;
    }
    
    // 이름 저장
    playerNames.player1 = player1Name;
    playerNames.player2 = player2Name;
    
    // 화면에 이름 표시
    document.getElementById('player1-display-name').textContent = player1Name;
    document.getElementById('player2-display-name').textContent = player2Name;
    
    // 테스트 초기화
    testType = 'duo';
    currentQuestion = 0;
    duoAnswers = { player1: [], player2: [] };
    currentPlayer = 1;
    
    showScreen('duo-test-screen');
    loadQuestion();
    trackTestStart('duo');
}

// 질문 로드
function loadQuestion() {
    // 테스트가 진행 중이지 않으면 함수 종료
    if (!testType || currentQuestion < 0 || currentQuestion >= 24) {
        console.log('loadQuestion: 테스트가 진행 중이지 않음', { testType, currentQuestion });
        return;
    }
    
    // 화면이 활성화되어 있는지 확인
    const soloTestScreen = document.getElementById('solo-test-screen');
    const duoTestScreen = document.getElementById('duo-test-screen');
    
    if (!soloTestScreen?.classList.contains('active') && !duoTestScreen?.classList.contains('active')) {
        console.log('loadQuestion: 테스트 화면이 활성화되지 않음');
        return;
    }
    
    // MBTI와 TETO/EGGN 질문을 번갈아가며 사용
    const isMBTIQuestion = currentQuestion % 2 === 0;
    const questionSet = isMBTIQuestion ? mbtiQuestions : tetoEggnQuestions;
    const questionIndex = Math.floor(currentQuestion / 2);
    
    // question이 존재하는지 확인
    if (!questionSet || !questionSet[questionIndex]) {
        console.error('질문을 찾을 수 없습니다:', { questionIndex, questionSet, currentQuestion });
        return;
    }
    
    const question = questionSet[questionIndex];
    
    // 현재 언어 확인 및 강제 업데이트
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        currentLanguage = savedLanguage;
    }
    
    if (testType === 'solo') {
        // 다국어 질문 적용
        const questionType = isMBTIQuestion ? 'mbti' : 'teto';
        const translatedQuestion = getTranslatedQuestion(questionType, questionIndex);
        
        document.getElementById('solo-question').textContent = translatedQuestion || question.question;
        document.getElementById('solo-counter').textContent = `${currentQuestion + 1} / 24`;
        
        const buttons = document.querySelectorAll('#solo-test-screen .option-btn');
        const translatedOptions = getTranslatedOptions(questionType, questionIndex);
        
        buttons[0].textContent = translatedOptions[0] || question.options[0];
        buttons[1].textContent = translatedOptions[1] || question.options[1];
        buttons[2].textContent = translatedOptions[2] || question.options[2];
        buttons[3].textContent = translatedOptions[3] || question.options[3];
        
        // 진행률 업데이트
        const progress = ((currentQuestion + 1) / 24) * 100;
        document.getElementById('solo-progress').style.width = progress + '%';
    } else {
        // 다국어 질문 적용
        const questionType = isMBTIQuestion ? 'mbti' : 'teto';
        const translatedQuestion = getTranslatedQuestion(questionType, questionIndex);
        document.getElementById('duo-question').textContent = translatedQuestion || question.question;
        document.getElementById('duo-counter').textContent = `${currentQuestion + 1} / 24`;
        
        const buttons = document.querySelectorAll('#duo-test-screen .option-btn');
        const translatedOptions = getTranslatedOptions(questionType, questionIndex);
        buttons[0].textContent = translatedOptions[0] || question.options[0];
        buttons[1].textContent = translatedOptions[1] || question.options[1];
        buttons[2].textContent = translatedOptions[2] || question.options[2];
        buttons[3].textContent = translatedOptions[3] || question.options[3];
        
        // 진행률 업데이트
        const progress = ((currentQuestion + 1) / 24) * 100;
        document.getElementById('duo-progress').style.width = progress + '%';
        
        // 현재 플레이어 표시
        updatePlayerDisplay();
    }
}

// 플레이어 표시 업데이트
function updatePlayerDisplay() {
    const player1Info = document.getElementById('player1-info');
    const player2Info = document.getElementById('player2-info');
    const currentPlayerText = document.getElementById('current-player-text');
    
    // 모든 플레이어에서 active 클래스 제거
    player1Info.classList.remove('active');
    player2Info.classList.remove('active');
    
    // 현재 플레이어에 active 클래스 추가
    if (currentPlayer === 1) {
        player1Info.classList.add('active');
        currentPlayerText.textContent = `${playerNames.player1}${translations[currentLanguage].player_turn}`;
    } else {
        player2Info.classList.add('active');
        currentPlayerText.textContent = `${playerNames.player2}${translations[currentLanguage].player_turn}`;
    }
}

// 개인 테스트 답변 선택
function selectSoloOption(optionIndex) {
    console.log('selectSoloOption 호출됨, 현재 질문:', currentQuestion, '선택된 옵션:', optionIndex);
    
    // MBTI와 TETO/EGGN 질문을 번갈아가며 사용
    const isMBTIQuestion = currentQuestion % 2 === 0;
    const questionSet = isMBTIQuestion ? mbtiQuestions : tetoEggnQuestions;
    const questionIndex = Math.floor(currentQuestion / 2);
    const question = questionSet[questionIndex];
    const answer = question.scores[optionIndex];
    
    console.log('질문 타입:', isMBTIQuestion ? 'MBTI' : 'TETO/EGGN');
    console.log('질문 인덱스:', questionIndex);
    console.log('선택된 옵션:', optionIndex);
    console.log('답변 추가:', answer);
    soloAnswers.push(answer);
    
    currentQuestion++;
    console.log('다음 질문 번호:', currentQuestion);
    
    // 24번 질문 완료 후 결과 페이지로 이동
    if (currentQuestion >= 24) {
        console.log('테스트 완료! 결과 페이지로 이동합니다.');
        console.log('총 답변 개수:', soloAnswers.length);
        showSoloResult();
    } else {
        console.log('다음 질문 로드');
        loadQuestion();
    }
}

// 커플 테스트 답변 선택
function selectDuoOption(optionIndex) {
    // MBTI와 TETO/EGGN 질문을 번갈아가며 사용
    const isMBTIQuestion = currentQuestion % 2 === 0;
    const questionSet = isMBTIQuestion ? mbtiQuestions : tetoEggnQuestions;
    const questionIndex = Math.floor(currentQuestion / 2);
    const question = questionSet[questionIndex];
    const answer = question.scores[optionIndex];
    
    if (currentPlayer === 1) {
        duoAnswers.player1.push(answer);
        currentPlayer = 2;
        updatePlayerDisplay();
    } else {
        duoAnswers.player2.push(answer);
        currentPlayer = 1;
        currentQuestion++;
        
        if (currentQuestion < 24) {
            loadQuestion();
        } else {
            showDuoResult();
        }
    }
}

// MBTI 유형 계산
function calculateMBTI(answers) {
    const scores = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };
    
    answers.forEach(answer => {
        scores[answer]++;
    });
    
    const mbti = [
        scores.E > scores.I ? 'E' : 'I',
        scores.S > scores.N ? 'S' : 'N',
        scores.T > scores.F ? 'T' : 'F',
        scores.J > scores.P ? 'J' : 'P'
    ].join('');
    
    return mbti;
}

// TETO/EGGN 유형 계산
function calculateTetoEggn(answers) {
    console.log('calculateTetoEggn 호출됨, 답변:', answers);
    
    const scores = {
        테토: 0,
        에겐: 0
    };
    
    answers.forEach(answer => {
        if (answer === "테토" || answer === "에겐") {
            scores[answer]++;
        } else {
            console.warn('알 수 없는 답변:', answer);
        }
    });
    
    console.log('TETO/EGGN 점수:', scores);
    
    // 성별에 따라 최종 유형 결정 (실제로는 사용자가 성별을 입력하거나 추정해야 함)
    // 여기서는 임시로 테토/에겐 비율로 판단
    const isTeto = scores.테토 > scores.에겐;
    
    // 실제 구현에서는 성별 정보가 필요하지만, 임시로 테토/에겐 비율로 판단
    if (isTeto) {
        console.log('최종 결과: 테토');
        return "테토"; // 테토남 또는 테토녀
    } else {
        console.log('최종 결과: 에겐');
        return "에겐"; // 에겐남 또는 에겐녀
    }
}

// 성별과 테토/에겐 유형을 결합하여 최종 유형 결정
function getFinalTetoEggnType(tetoEggnType, gender = 'unknown') {
    // 현재 언어 확인
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const lang = savedLanguage || currentLanguage || 'ko';
    
    // 테토/에겐 비율로 판단하여 다국어 지원
    if (tetoEggnType === "테토") {
        // 각 언어별 "테토형" 번역
        const tetoTypeTranslations = {
            'ko': '테토형',
            'en': 'Teto Type',
            'zh': '睾酮型',
            'ja': 'テト型'
        };
        return tetoTypeTranslations[lang] || '테토형';
    } else {
        // 각 언어별 "에겐형" 번역
        const egenTypeTranslations = {
            'ko': '에겐형',
            'en': 'Egen Type',
            'zh': '雌酮型',
            'ja': 'エゲン型'
        };
        return egenTypeTranslations[lang] || '에겐형';
    }
}

// 개인 결과 표시
function showSoloResult() {
    try {
        console.log('showSoloResult 함수 시작');
        console.log('답변 개수:', soloAnswers.length);
        
        if (soloAnswers.length !== 24) {
            console.error('답변 개수가 24개가 아닙니다:', soloAnswers.length);
            return;
        }
        
        // MBTI와 TETO/EGGN 답변 분리
        const mbtiAnswers = [];
        const tetoEggnAnswers = [];
        
        for (let i = 0; i < soloAnswers.length; i++) {
            if (i % 2 === 0) {
                // 짝수 인덱스는 MBTI 질문
                mbtiAnswers.push(soloAnswers[i]);
            } else {
                // 홀수 인덱스는 TETO/EGGN 질문
                tetoEggnAnswers.push(soloAnswers[i]);
            }
        }
        
        console.log('MBTI 답변:', mbtiAnswers);
        console.log('TETO/EGGN 답변:', tetoEggnAnswers);
        
        const mbti = calculateMBTI(mbtiAnswers);
        const character = getTranslatedCharacter(mbti);
        
        // TETO/EGGN 유형 계산
        const tetoEggnType = calculateTetoEggn(tetoEggnAnswers);
        const finalTetoEggnType = getFinalTetoEggnType(tetoEggnType);
        
        console.log('계산된 MBTI:', mbti);
        console.log('계산된 TETO/EGGN:', finalTetoEggnType);
        console.log('TETO/EGGN 답변 개수:', tetoEggnAnswers.length);
        console.log('TETO/EGGN 답변 내용:', tetoEggnAnswers);
        
        // 다국어 TETO/EGGN 데이터 가져오기
        const tetoEggnInfo = getTranslatedTetoEggn(finalTetoEggnType);
        console.log('TETO/EGGN 정보:', tetoEggnInfo);
        
        // 결과 데이터 설정
        const elements = {
            'solo-mbti': mbti,
            'solo-character-name': character.name,
            'solo-description': character.description,
            'solo-abilities': character.abilities,
            'solo-jobs': character.jobs,
            'solo-teto-type': finalTetoEggnType,
            'solo-teto-strength': tetoEggnInfo.strength,
            'solo-teto-weakness': tetoEggnInfo.weakness,
            'solo-teto-relationship': tetoEggnInfo.relationship_style,
            'solo-teto-ideal': tetoEggnInfo.ideal_partner
        };
        
        // 각 요소에 데이터 설정
        for (const [id, value] of Object.entries(elements)) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = value;
                console.log(`요소 ${id} 설정 완료:`, value);
            } else {
                console.error('요소를 찾을 수 없습니다:', id);
            }
        }
        
        // 캐릭터 아이콘 표시
        const characterImageContainer = document.getElementById('solo-character-image');
        if (characterImageContainer) {
            characterImageContainer.innerHTML = `<div style="font-size: 80px; text-align: center; margin: 20px 0;">${character.icon}</div>`;
        }
        
        console.log('결과 데이터 설정 완료');
        
        // 결과 섹션 표시 설정
        const soloResult = document.getElementById('solo-result');
        const duoResult = document.getElementById('duo-result');
        
        if (soloResult) soloResult.style.display = 'block';
        if (duoResult) duoResult.style.display = 'none';
        
        console.log('결과 섹션 표시 설정 완료');
        
        // 화면 전환
        console.log('화면 전환 시작');
        showScreen('result-screen');
        
        // 다국어 텍스트 업데이트 (화면 전환 후)
        setTimeout(() => {
            updateAllTexts();
            console.log('다국어 텍스트 업데이트 완료');
        }, 100);
        
        // 결과 완료 이벤트 추적
        trackEvent('test_complete', {
            test_type: 'solo',
            character_name: character.name,
            mbti_type: mbti,
            teto_eggn_type: finalTetoEggnType
        });
        
        console.log('showSoloResult 함수 완료');
        
    } catch (error) {
        console.error('showSoloResult 함수에서 오류 발생:', error);
        alert('결과를 표시하는 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
}

// 각 테스트 질문 로드 함수들
function loadRomanticQuestion() {
    const question = romanticQuestions[currentQuestion];
    
    // 다국어 지원: 질문과 답변 번역
    const translatedQuestion = getTranslatedTestQuestion('romantic', currentQuestion);
    const translatedOptions = getTranslatedTestOptions('romantic', currentQuestion);
    
    document.getElementById('romantic-question').textContent = translatedQuestion || question.question;
    document.getElementById('romantic-counter').textContent = `${currentQuestion + 1} / ${romanticQuestions.length}`;
    
    const buttons = document.querySelectorAll('#romantic-test-screen .option-btn');
    buttons[0].textContent = translatedOptions ? translatedOptions[0] : question.options[0];
    buttons[1].textContent = translatedOptions ? translatedOptions[1] : question.options[1];
    buttons[2].textContent = translatedOptions ? translatedOptions[2] : question.options[2];
    buttons[3].textContent = translatedOptions ? translatedOptions[3] : question.options[3];
    
    // 진행률 업데이트
    const progress = ((currentQuestion + 1) / romanticQuestions.length) * 100;
    document.getElementById('romantic-progress').style.width = progress + '%';
}

function loadCareerQuestion() {
    const question = careerQuestions[currentQuestion];
    
    // 다국어 지원: 질문과 답변 번역
    const translatedQuestion = getTranslatedTestQuestion('career', currentQuestion);
    const translatedOptions = getTranslatedTestOptions('career', currentQuestion);
    
    document.getElementById('career-question').textContent = translatedQuestion || question.question;
    document.getElementById('career-counter').textContent = `${currentQuestion + 1} / ${careerQuestions.length}`;
    
    const buttons = document.querySelectorAll('#career-test-screen .option-btn');
    buttons[0].textContent = translatedOptions ? translatedOptions[0] : question.options[0];
    buttons[1].textContent = translatedOptions ? translatedOptions[1] : question.options[1];
    buttons[2].textContent = translatedOptions ? translatedOptions[2] : question.options[2];
    buttons[3].textContent = translatedOptions ? translatedOptions[3] : question.options[3];
    
    // 진행률 업데이트
    const progress = ((currentQuestion + 1) / careerQuestions.length) * 100;
    document.getElementById('career-progress').style.width = progress + '%';
}

function loadPersonalityQuestion() {
    const question = personalityQuestions[currentQuestion];
    
    // 다국어 지원: 질문과 답변 번역
    const translatedQuestion = getTranslatedTestQuestion('personality', currentQuestion);
    const translatedOptions = getTranslatedTestOptions('personality', currentQuestion);
    
    document.getElementById('personality-question').textContent = translatedQuestion || question.question;
    document.getElementById('personality-counter').textContent = `${currentQuestion + 1} / ${personalityQuestions.length}`;
    
    const buttons = document.querySelectorAll('#personality-test-screen .option-btn');
    buttons[0].textContent = translatedOptions ? translatedOptions[0] : question.options[0];
    buttons[1].textContent = translatedOptions ? translatedOptions[1] : question.options[1];
    buttons[2].textContent = translatedOptions ? translatedOptions[2] : question.options[2];
    buttons[3].textContent = translatedOptions ? translatedOptions[3] : question.options[3];
    
    // 진행률 업데이트
    const progress = ((currentQuestion + 1) / personalityQuestions.length) * 100;
    document.getElementById('personality-progress').style.width = progress + '%';
}

// 각 테스트 답변 선택 함수들
function selectRomanticOption(optionIndex) {
    const question = romanticQuestions[currentQuestion];
    const answer = question.scores[optionIndex];
    testAnswers.push(answer);
    
    currentQuestion++;
    
    if (currentQuestion < romanticQuestions.length) {
        loadRomanticQuestion();
    } else {
        showRomanticResult();
    }
}

function selectCareerOption(optionIndex) {
    const question = careerQuestions[currentQuestion];
    const answer = question.scores[optionIndex];
    testAnswers.push(answer);
    
    currentQuestion++;
    
    if (currentQuestion < careerQuestions.length) {
        loadCareerQuestion();
    } else {
        showCareerResult();
    }
}

function selectPersonalityOption(optionIndex) {
    const question = personalityQuestions[currentQuestion];
    const answer = question.scores[optionIndex];
    testAnswers.push(answer);
    
    currentQuestion++;
    
    if (currentQuestion < personalityQuestions.length) {
        loadPersonalityQuestion();
    } else {
        showPersonalityResult();
    }
}

// 각 테스트 결과 표시 함수들
function showRomanticResult() {
    console.log('showRomanticResult 호출됨');
    console.log('testAnswers:', testAnswers);
    
    const result = calculateTestResult(testAnswers);
    console.log('계산된 결과:', result);
    
    const resultData = getTranslatedTestResult('romantic', result);
    console.log('가져온 결과 데이터:', resultData);
    
    // 결과 데이터를 전역 변수로 저장하여 언어 변경 시 업데이트 가능하도록 함
    window.currentRomanticResult = { result, resultData };
    
    updateRomanticResultDisplay();
    showScreen('romantic-result-screen');
    
    trackEvent('romantic_test_complete', {
        result_type: result
    });
}

function updateRomanticResultDisplay() {
    if (!window.currentRomanticResult) return;
    
    const { result } = window.currentRomanticResult;
    const resultData = getTranslatedTestResult('romantic', result);
    
    document.getElementById('romantic-result-title').textContent = resultData.title;
    document.getElementById('romantic-result-description').textContent = resultData.description;
    document.getElementById('romantic-result-characteristics').textContent = resultData.characteristics;
    document.getElementById('romantic-result-ideal').textContent = resultData.ideal_partner;
    document.getElementById('romantic-result-advice').textContent = resultData.advice;
}

function showCareerResult() {
    const result = calculateTestResult(testAnswers);
    const resultData = getTranslatedTestResult('career', result);
    
    // 결과 데이터를 전역 변수로 저장하여 언어 변경 시 업데이트 가능하도록 함
    window.currentCareerResult = { result, resultData };
    
    updateCareerResultDisplay();
    showScreen('career-result-screen');
    
    trackEvent('career_test_complete', {
        result_type: result
    });
}

function updateCareerResultDisplay() {
    if (!window.currentCareerResult) return;
    
    const { result } = window.currentCareerResult;
    const resultData = getTranslatedTestResult('career', result);
    
    document.getElementById('career-result-title').textContent = resultData.title;
    document.getElementById('career-result-description').textContent = resultData.description;
    document.getElementById('career-result-characteristics').textContent = resultData.characteristics;
    document.getElementById('career-result-jobs').textContent = resultData.recommended_jobs;
    document.getElementById('career-result-advice').textContent = resultData.advice;
}

function showPersonalityResult() {
    const result = calculateTestResult(testAnswers);
    const resultData = getTranslatedTestResult('personality', result);
    
    // 결과 데이터를 전역 변수로 저장하여 언어 변경 시 업데이트 가능하도록 함
    window.currentPersonalityResult = { result, resultData };
    
    updatePersonalityResultDisplay();
    showScreen('personality-result-screen');
    
    trackEvent('personality_test_complete', {
        result_type: result
    });
}

function updatePersonalityResultDisplay() {
    if (!window.currentPersonalityResult) return;
    
    const { result } = window.currentPersonalityResult;
    const resultData = getTranslatedTestResult('personality', result);
    
    document.getElementById('personality-result-title').textContent = resultData.title;
    document.getElementById('personality-result-description').textContent = resultData.description;
    document.getElementById('personality-result-characteristics').textContent = resultData.characteristics;
    document.getElementById('personality-result-strengths').textContent = resultData.strengths;
    document.getElementById('personality-result-weaknesses').textContent = resultData.weaknesses;
    document.getElementById('personality-result-advice').textContent = resultData.advice;
}

// 테스트 결과 계산 함수
function calculateTestResult(answers) {
    console.log('calculateTestResult 호출됨, answers:', answers);
    
    const scores = {};
    
    answers.forEach(answer => {
        scores[answer] = (scores[answer] || 0) + 1;
    });
    
    console.log('계산된 점수:', scores);
    
    // 가장 많이 선택된 답변을 결과로 반환
    let maxScore = 0;
    let result = '';
    
    for (const [type, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            result = type;
        }
    }
    
    console.log('최종 결과:', result, '(점수:', maxScore, ')');
    return result;
}

// 커플 결과 표시
function showDuoResult() {
    const mbti1 = calculateMBTI(duoAnswers.player1);
    const mbti2 = calculateMBTI(duoAnswers.player2);
    
    // 개인 캐릭터 정보 가져오기 (다국어 지원)
    const character1 = getTranslatedCharacter(mbti1);
    const character2 = getTranslatedCharacter(mbti2);
    
    // 추천 파트너 캐릭터 찾기 (다국어 지원)
    const recommendedPartner = findRecommendedPartner(mbti1);
    const partnerCharacter = getTranslatedCharacter(recommendedPartner);
    
    document.getElementById('result-player1-name').textContent = playerNames.player1;
    document.getElementById('result-player2-name').textContent = playerNames.player2;
    document.getElementById('player1-mbti').textContent = mbti1;
    document.getElementById('player2-mbti').textContent = mbti2;
    document.getElementById('player1-character-name').textContent = character1.name;
    document.getElementById('player2-character-name').textContent = character2.name;
    
    // 캐릭터 아이콘 표시
    const player1ImageContainer = document.getElementById('player1-character-image');
    const player2ImageContainer = document.getElementById('player2-character-image');
    const partnerImageContainer = document.getElementById('partner-character-image');
    
    if (player1ImageContainer) {
        player1ImageContainer.innerHTML = `<div style="font-size: 80px; text-align: center; margin: 20px 0;">${character1.icon}</div>`;
    }
    if (player2ImageContainer) {
        player2ImageContainer.innerHTML = `<div style="font-size: 80px; text-align: center; margin: 20px 0;">${character2.icon}</div>`;
    }
    if (partnerImageContainer) {
        partnerImageContainer.innerHTML = `<div style="font-size: 80px; text-align: center; margin: 20px 0;">${partnerCharacter.icon}</div>`;
    }
    
    // 호환성 계산
    const compatibility = calculateCompatibility(mbti1, mbti2);
    document.getElementById('compatibility-score').textContent = compatibility + '%';
    
    // 관계 분석
    const analysis = getRelationshipAnalysis(mbti1, mbti2, compatibility);
    document.getElementById('relationship-title').textContent = analysis.title;
    document.getElementById('relationship-description').textContent = analysis.description;
    document.getElementById('relationship-strengths').textContent = analysis.strengths;
    document.getElementById('relationship-challenges').textContent = analysis.challenges;
    document.getElementById('relationship-advice').textContent = analysis.advice;
    document.getElementById('relationship-type').textContent = analysis.relationship;
    
    // 추천 파트너
    document.getElementById('partner-character-name').textContent = partnerCharacter.name;
    
    document.getElementById('solo-result').style.display = 'none';
    document.getElementById('duo-result').style.display = 'block';
    
    showScreen('result-screen');
    
    // 다국어 텍스트 업데이트 (화면 전환 후)
    setTimeout(() => {
        updateAllTexts();
    }, 100);
    
    // 결과 완료 이벤트 추적
    trackEvent('test_complete', {
        test_type: 'duo',
        player1_character: character1.name,
        player2_character: character2.name,
        compatibility_score: compatibility
    });
}

// 추천 파트너 찾기
function findRecommendedPartner(mbti) {
    if (characterCompatibility[mbti]) {
        // 가장 높은 호환성을 가진 파트너 반환
        const partners = Object.entries(characterCompatibility[mbti]);
        partners.sort((a, b) => b[1] - a[1]);
        return partners[0][0];
    }
    return "ENFP"; // 기본값
}

// 호환성 계산
function calculateCompatibility(mbti1, mbti2) {
    if (characterCompatibility[mbti1] && characterCompatibility[mbti1][mbti2]) {
        return characterCompatibility[mbti1][mbti2];
    } else if (characterCompatibility[mbti2] && characterCompatibility[mbti2][mbti1]) {
        return characterCompatibility[mbti2][mbti1];
    }
    
    // 기본 호환성 계산 (간단한 알고리즘)
    let score = 50;
    
    // 같은 선호도에 가산점
    if (mbti1[0] === mbti2[0]) score += 10; // E/I
    if (mbti1[1] === mbti2[1]) score += 10; // S/N
    if (mbti1[2] === mbti2[2]) score += 10; // T/F
    if (mbti1[3] === mbti2[3]) score += 10; // J/P
    
    // 보완적 관계에 가산점
    if (mbti1[0] !== mbti2[0]) score += 5; // E-I 보완
    if (mbti1[1] !== mbti2[1]) score += 5; // S-N 보완
    if (mbti1[2] !== mbti2[2]) score += 5; // T-F 보완
    if (mbti1[3] !== mbti2[3]) score += 5; // J-P 보완
    
    return Math.min(100, Math.max(0, score));
}

// 상세한 궁합 분석 데이터
const detailedCompatibilityAnalysis = {
    // 분석가 + 외교관 조합
    "INTJ-ENFP": {
        title: "꿈과 현실의 완벽한 조화",
        description: "전략적 사고와 창의적 열정이 만나 완벽한 균형을 이루는 이상적인 조합입니다.",
        strengths: "서로의 부족한 부분을 완벽하게 보완, 깊이 있는 대화와 새로운 아이디어 공유",
        challenges: "때로는 너무 많은 계획과 즉흥성 사이에서 갈등이 있을 수 있음",
        advice: "INTJ는 ENFP의 창의성을 존중하고, ENFP는 INTJ의 계획성을 이해해주세요.",
        relationship: "로맨틱한 관계, 비즈니스 파트너십, 깊은 우정 모두에서 탁월한 조합"
    },
    "INTP-ENFJ": {
        title: "지혜와 영감의 만남",
        description: "깊이 있는 분석과 따뜻한 영감이 결합되어 서로를 성장시키는 지적 파트너십입니다.",
        strengths: "논리적 사고와 감정적 지지의 조화, 서로의 지식을 공유하며 발전",
        challenges: "INTP의 독립성과 ENFJ의 사회적 요구 사이의 균형",
        advice: "INTP는 ENFJ의 감정적 필요를 이해하고, ENFJ는 INTP의 독립적 시간을 존중해주세요.",
        relationship: "학술적 협력, 멘토링 관계, 깊이 있는 대화를 나누는 친구"
    },
    "INFJ-ENTP": {
        title: "직감과 혁신의 융합",
        description: "신비로운 통찰력과 창의적 혁신이 만나 새로운 가능성을 창조하는 특별한 조합입니다.",
        strengths: "깊이 있는 이해와 창의적 문제 해결, 서로의 관점을 넓혀줌",
        challenges: "INFJ의 감정적 깊이와 ENTP의 논리적 접근 사이의 차이",
        advice: "INFJ는 ENTP의 실험적 성향을 이해하고, ENTP는 INFJ의 감정적 깊이를 존중해주세요.",
        relationship: "창작 활동, 연구 협력, 영감을 주고받는 관계"
    },
    "INFP-ENTJ": {
        title: "이상과 실행의 완성",
        description: "순수한 이상과 강력한 실행력이 결합되어 꿈을 현실로 만드는 완벽한 팀입니다.",
        strengths: "창의적 비전과 체계적 실행의 조화, 서로의 잠재력을 극대화",
        challenges: "INFP의 유연성과 ENTJ의 구조화된 접근 사이의 갈등",
        advice: "INFP는 ENTJ의 목표 지향성을 이해하고, ENTJ는 INFP의 창의적 과정을 존중해주세요.",
        relationship: "창업 파트너, 예술 프로젝트, 사회적 변화를 추구하는 동료"
    },
    
    // 센티널 + 탐험가 조합
    "ISTJ-ESFP": {
        title: "안정과 즐거움의 균형",
        description: "신뢰할 수 있는 안정감과 즐거운 에너지가 만나 완벽한 일상의 조화를 이룹니다.",
        strengths: "실용적 문제 해결과 긍정적 분위기 조성, 서로의 삶을 풍요롭게 만듦",
        challenges: "ISTJ의 계획성과 ESFP의 즉흥성 사이의 균형",
        advice: "ISTJ는 ESFP의 즐거운 성향을 받아들이고, ESFP는 ISTJ의 안정감을 가치있게 여겨주세요.",
        relationship: "가족 관계, 오랜 친구, 일상의 동반자"
    },
    "ISFJ-ESTP": {
        title: "보호와 모험의 조화",
        description: "따뜻한 보호 본능과 모험적 정신이 결합되어 서로를 안전하게 이끌어주는 파트너십입니다.",
        strengths: "실용적 돌봄과 적응력 있는 문제 해결, 서로의 안전과 성장을 보장",
        challenges: "ISFJ의 전통적 가치와 ESTP의 새로운 경험 추구 사이의 차이",
        advice: "ISFJ는 ESTP의 모험을 지원하고, ESTP는 ISFJ의 전통적 가치를 존중해주세요.",
        relationship: "가족 관계, 여행 동반자, 실용적 협력 관계"
    },
    "ESTJ-ISFP": {
        title: "조직과 예술의 융합",
        description: "체계적 관리 능력과 예술적 감성이 결합되어 아름다운 결과를 만들어내는 특별한 팀입니다.",
        strengths: "효율적인 실행과 창의적 표현의 조화, 실용적이면서도 아름다운 결과물",
        challenges: "ESTJ의 구조화된 접근과 ISFP의 자유로운 표현 사이의 균형",
        advice: "ESTJ는 ISFP의 창의적 과정을 이해하고, ISFP는 ESTJ의 조직적 접근을 가치있게 여겨주세요.",
        relationship: "비즈니스 파트너, 창작 프로젝트, 효율적이면서 창의적인 협력"
    },
    "ESFJ-ISTP": {
        title: "사교와 기술의 만남",
        description: "따뜻한 사교성과 실용적 기술이 만나 어떤 상황에서도 함께 성장할 수 있는 완벽한 조합입니다.",
        strengths: "사람들을 연결하고 실용적 해결책을 제공, 사회적 기술과 개인적 능력의 조화",
        challenges: "ESFJ의 사회적 요구와 ISTP의 독립적 성향 사이의 균형",
        advice: "ESFJ는 ISTP의 독립성을 존중하고, ISTP는 ESFJ의 사회적 연결을 가치있게 여겨주세요.",
        relationship: "커뮤니티 리더, 기술 지원자, 사회적 기술과 개인적 능력을 결합한 협력"
    }
};

// 관계 분석
function getRelationshipAnalysis(mbti1, mbti2, compatibility) {
    const key1 = `${mbti1}-${mbti2}`;
    const key2 = `${mbti2}-${mbti1}`;
    
    // 상세 분석 데이터가 있는 경우
    if (detailedCompatibilityAnalysis[key1] || detailedCompatibilityAnalysis[key2]) {
        const analysis = detailedCompatibilityAnalysis[key1] || detailedCompatibilityAnalysis[key2];
        return {
            title: analysis.title,
            description: analysis.description,
            strengths: analysis.strengths,
            challenges: analysis.challenges,
            advice: analysis.advice,
            relationship: analysis.relationship
        };
    }
    
    // 현재 언어 확인
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        currentLanguage = savedLanguage;
    }
    
    const t = translations[currentLanguage] || translations.ko;
    
    // 기본 분석 (상세 데이터가 없는 경우)
    let title, description, strengths, challenges, advice, relationship;
    
    if (compatibility >= 90) {
        title = t.perfect_harmony;
        description = `${mbti1}${t.very_high_compatibility_desc}`;
        strengths = t.perfect_harmony_strengths;
        challenges = t.perfect_harmony_challenges;
        advice = t.perfect_harmony_advice;
        relationship = t.perfect_harmony_relationship;
    } else if (compatibility >= 80) {
        title = t.high_compatibility;
        description = `${mbti1}${t.high_compatibility_desc}`;
        strengths = t.high_compatibility_strengths;
        challenges = t.high_compatibility_challenges;
        advice = t.high_compatibility_advice;
        relationship = t.high_compatibility_relationship;
    } else if (compatibility >= 70) {
        title = t.moderate_compatibility;
        description = `${mbti1}${t.moderate_compatibility_desc}`;
        strengths = t.moderate_compatibility_strengths;
        challenges = t.moderate_compatibility_challenges;
        advice = t.moderate_compatibility_advice;
        relationship = t.moderate_compatibility_relationship;
    } else if (compatibility >= 60) {
        title = t.challenging_combination;
        description = `${mbti1}${t.slight_difference_desc}`;
        strengths = t.challenging_combination_strengths;
        challenges = t.challenging_combination_challenges;
        advice = t.challenging_combination_advice;
        relationship = t.challenging_combination_relationship;
    } else {
        title = t.growth_opportunity;
        description = `${mbti1}와 ${mbti2}${t.different_tendencies_desc}`;
        strengths = t.growth_opportunity_strengths;
        challenges = t.growth_opportunity_challenges;
        advice = t.growth_opportunity_advice;
        relationship = t.growth_opportunity_relationship;
    }
    
    return {
        title: title,
        description: description,
        strengths: strengths,
        challenges: challenges,
        advice: advice,
        relationship: relationship
    };
}

// 테스트 다시 시작
function restartTest() {
    // 현재 테스트 타입에 따라 다른 화면으로 이동
    if (currentTestType === 'romantic' || currentTestType === 'career' || currentTestType === 'personality') {
        showScreen('start-screen');
    } else {
        showScreen('start-screen');
    }
}

// 결과 공유
function shareResult() {
    const currentScreen = document.querySelector('.screen.active');
    let shareText = '';
    
    if (currentScreen.id === 'solo-result-screen') {
        const characterName = document.getElementById('solo-character-name').textContent;
        const mbtiType = document.getElementById('solo-mbti').textContent;
        shareText = `🎭 Character Quest에서 나의 내면 캐릭터는 "${characterName}" (${mbtiType})입니다! 당신의 내면 캐릭터도 발견해보세요! 🌟`;
    } else if (currentScreen.id === 'duo-result-screen') {
        const player1Name = document.getElementById('result-player1-name').textContent;
        const player2Name = document.getElementById('result-player2-name').textContent;
        const compatibility = document.getElementById('compatibility-score').textContent;
        shareText = `${player1Name}와 ${player2Name}의 캐릭터 궁합은 ${compatibility}입니다! Character Quest에서 당신의 궁합도 확인해보세요! 💕`;
    }
    
    if (navigator.share) {
        navigator.share({
            title: 'Character Quest: 내면 캐릭터 테스트',
            text: shareText,
            url: window.location.href
        });
    } else {
        // 클립보드에 복사
        navigator.clipboard.writeText(shareText + '\n' + window.location.href).then(() => {
            alert('결과가 클립보드에 복사되었습니다!');
        });
    }
    
    // 공유 이벤트 추적 (수익화 분석용)
    trackEvent('share_result', {
        test_type: currentScreen.id === 'solo-result-screen' ? 'solo' : 'duo',
        character_name: currentScreen.id === 'solo-result-screen' ? 
            document.getElementById('solo-character-name').textContent : 'duo_test'
    });
}

// 이벤트 추적 함수 (수익화 분석용)
function trackEvent(eventName, parameters = {}) {
    // Google Analytics 또는 기타 분석 도구 연동
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // 로컬 스토리지에 이벤트 저장 (선택사항)
    const events = JSON.parse(localStorage.getItem('soul_codex_events') || '[]');
    events.push({
        event: eventName,
        parameters: parameters,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('soul_codex_events', JSON.stringify(events.slice(-100))); // 최근 100개만 유지
}

// 테스트 시작 이벤트 추적
function trackTestStart(testType) {
    trackEvent('test_start', {
        test_type: testType
    });
}

// 모달 창 기능
function showModal(title, message, icon = 'fas fa-info-circle') {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = message;
    document.getElementById('modal-icon').className = icon;
    const modal = document.getElementById('modal');
    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}

// 유형별 테스트 질문 데이터 (다국어 지원)
const testQuestionTranslations = {
    ko: {
        romantic: [
            {
                question: "연애에서 가장 중요한 것은?",
                options: ["깊은 정서적 교감", "즐거운 시간 보내기", "서로의 성장", "안정적인 관계"]
            },
            {
                question: "이상적인 데이트는?",
                options: ["조용한 카페에서 대화", "활동적인 야외 데이트", "문화생활 함께하기", "맛집 탐방"]
            },
            {
                question: "갈등이 생겼을 때 나는?",
                options: ["즉시 대화로 해결", "시간을 두고 생각", "행동으로 보여주기", "상대방이 먼저 다가오기를 기다림"]
            },
            {
                question: "사랑을 표현하는 방법은?",
                options: ["말로 직접 표현", "행동으로 보여주기", "선물이나 서프라이즈", "일상의 작은 배려"]
            },
            {
                question: "연애의 목표는?",
                options: ["영원한 사랑", "즐거운 추억 만들기", "함께 성장하기", "안정적인 결혼"]
            }
        ],
        career: [
            {
                question: "일할 때 가장 중요하게 생각하는 것은?",
                options: ["창의성과 자유", "안정성과 보수", "성장과 도전", "사람들과의 관계"]
            },
            {
                question: "스트레스 해소 방법은?",
                options: ["혼자만의 시간", "운동이나 활동", "새로운 취미", "친구들과 만남"]
            },
            {
                question: "팀워크에서 나의 역할은?",
                options: ["아이디어 제시", "조율과 중재", "실행과 추진", "분위기 메이커"]
            },
            {
                question: "새로운 기술을 배울 때 나는?",
                options: ["직접 체험해보기", "이론부터 차근차근", "다른 사람에게 배우기", "실용적인 부분부터"]
            },
            {
                question: "성공의 기준은?",
                options: ["자신만의 스타일", "안정적인 수입", "높은 성과", "좋은 인간관계"]
            }
        ],
        personality: [
            {
                question: "스트레스 상황에서 나는?",
                options: ["논리적으로 분석", "감정적으로 반응", "즉시 행동", "시간을 두고 생각"]
            },
            {
                question: "새로운 환경에 적응할 때?",
                options: ["천천히 관찰", "적극적으로 탐험", "다른 사람을 따라", "계획을 세우고"]
            },
            {
                question: "의사결정을 할 때?",
                options: ["직감에 의존", "데이터 분석", "다른 사람 의견", "경험 바탕"]
            },
            {
                question: "완벽주의 성향은?",
                options: ["매우 높음", "보통", "낮음", "상황에 따라"]
            },
            {
                question: "미래에 대한 생각은?",
                options: ["구체적인 계획", "유연한 대응", "현재에 집중", "낙관적 전망"]
            }
        ]
    },
    en: {
        romantic: [
            {
                question: "What's most important in love?",
                options: ["Deep emotional connection", "Having fun together", "Mutual growth", "Stable relationship"]
            },
            {
                question: "What's your ideal date?",
                options: ["Quiet conversation at a cafe", "Active outdoor date", "Cultural activities together", "Food exploration"]
            },
            {
                question: "When conflicts arise, I?",
                options: ["Resolve through immediate conversation", "Take time to think", "Show through actions", "Wait for the other to approach first"]
            },
            {
                question: "How do you express love?",
                options: ["Express directly with words", "Show through actions", "Gifts or surprises", "Small daily considerations"]
            },
            {
                question: "What's your goal in love?",
                options: ["Eternal love", "Creating happy memories", "Growing together", "Stable marriage"]
            }
        ],
        career: [
            {
                question: "What do you consider most important at work?",
                options: ["Creativity and freedom", "Stability and security", "Growth and challenge", "Relationships with people"]
            },
            {
                question: "How do you relieve stress?",
                options: ["Time alone", "Exercise or activities", "New hobbies", "Meeting friends"]
            },
            {
                question: "What's my role in teamwork?",
                options: ["Presenting ideas", "Coordination and mediation", "Execution and promotion", "Mood maker"]
            },
            {
                question: "When learning new skills, I?",
                options: ["Try hands-on experience", "Start with theory step by step", "Learn from others", "Start with practical parts"]
            },
            {
                question: "What's the standard for success?",
                options: ["My own style", "Stable income", "High performance", "Good relationships"]
            }
        ],
        personality: [
            {
                question: "In stressful situations, I?",
                options: ["Analyze logically", "React emotionally", "Act immediately", "Take time to think"]
            },
            {
                question: "When adapting to new environments?",
                options: ["Observe slowly", "Explore actively", "Follow others", "Make plans"]
            },
            {
                question: "When making decisions?",
                options: ["Rely on intuition", "Analyze data", "Other people's opinions", "Based on experience"]
            },
            {
                question: "Perfectionist tendency is?",
                options: ["Very high", "Normal", "Low", "Depends on situation"]
            },
            {
                question: "Thoughts about the future?",
                options: ["Concrete plans", "Flexible response", "Focus on present", "Optimistic outlook"]
            }
        ]
    },
    zh: {
        romantic: [
            {
                question: "恋爱中最重要的是什么？",
                options: ["深厚的情感交流", "一起享受快乐时光", "共同成长", "稳定的关系"]
            },
            {
                question: "理想的约会是什么？",
                options: ["在安静的咖啡馆聊天", "活跃的户外约会", "一起参加文化活动", "美食探索"]
            },
            {
                question: "发生冲突时，我？",
                options: ["立即通过对话解决", "花时间思考", "通过行动展示", "等待对方先接近"]
            },
            {
                question: "如何表达爱？",
                options: ["用语言直接表达", "通过行动展示", "礼物或惊喜", "日常的小关怀"]
            },
            {
                question: "恋爱的目标是？",
                options: ["永恒的爱", "创造美好回忆", "共同成长", "稳定的婚姻"]
            }
        ],
        career: [
            {
                question: "工作时最看重什么？",
                options: ["创造力和自由", "稳定性和保障", "成长和挑战", "人际关系"]
            },
            {
                question: "如何缓解压力？",
                options: ["独处时间", "运动或活动", "新爱好", "与朋友见面"]
            },
            {
                question: "在团队合作中我的角色是？",
                options: ["提出想法", "协调和调解", "执行和推进", "氛围制造者"]
            },
            {
                question: "学习新技能时，我？",
                options: ["直接体验", "从理论开始循序渐进", "向他人学习", "从实用部分开始"]
            },
            {
                question: "成功的标准是？",
                options: ["自己的风格", "稳定收入", "高绩效", "良好关系"]
            }
        ],
        personality: [
            {
                question: "压力情况下，我？",
                options: ["逻辑分析", "情感反应", "立即行动", "花时间思考"]
            },
            {
                question: "适应新环境时？",
                options: ["慢慢观察", "积极探索", "跟随他人", "制定计划"]
            },
            {
                question: "做决定时？",
                options: ["依赖直觉", "数据分析", "他人意见", "基于经验"]
            },
            {
                question: "完美主义倾向是？",
                options: ["很高", "一般", "低", "视情况而定"]
            },
            {
                question: "对未来的想法？",
                options: ["具体计划", "灵活应对", "专注当下", "乐观展望"]
            }
        ]
    },
    ja: {
        romantic: [
            {
                question: "恋愛で最も重要なことは？",
                options: ["深い情緒的交流", "楽しい時間を過ごす", "お互いの成長", "安定した関係"]
            },
            {
                question: "理想的なデートは？",
                options: ["静かなカフェで会話", "アクティブなアウトドアデート", "文化活動を一緒に", "グルメ探検"]
            },
            {
                question: "対立が生じた時、私は？",
                options: ["即座に会話で解決", "時間をかけて考える", "行動で示す", "相手が先に近づくのを待つ"]
            },
            {
                question: "愛を表現する方法は？",
                options: ["言葉で直接表現", "行動で示す", "プレゼントやサプライズ", "日常の小さな配慮"]
            },
            {
                question: "恋愛の目標は？",
                options: ["永遠の愛", "楽しい思い出作り", "一緒に成長", "安定した結婚"]
            }
        ],
        career: [
            {
                question: "仕事で最も重要に考えることは？",
                options: ["創造性と自由", "安定性と保障", "成長と挑戦", "人々との関係"]
            },
            {
                question: "ストレス解消法は？",
                options: ["一人の時間", "運動や活動", "新しい趣味", "友達との出会い"]
            },
            {
                question: "チームワークでの私の役割は？",
                options: ["アイデア提示", "調整と仲介", "実行と推進", "ムードメーカー"]
            },
            {
                question: "新しいスキルを学ぶ時、私は？",
                options: ["直接体験してみる", "理論から段階的に", "他の人から学ぶ", "実用的な部分から"]
            },
            {
                question: "成功の基準は？",
                options: ["自分だけのスタイル", "安定した収入", "高い成果", "良い人間関係"]
            }
        ],
        personality: [
            {
                question: "ストレス状況で私は？",
                options: ["論理的に分析", "感情的に対応", "即座に行動", "時間をかけて考える"]
            },
            {
                question: "新しい環境に適応する時？",
                options: ["ゆっくり観察", "積極的に探検", "他の人に従う", "計画を立てる"]
            },
            {
                question: "意思決定をする時？",
                options: ["直感に依存", "データ分析", "他の人の意見", "経験に基づく"]
            },
            {
                question: "完璧主義傾向は？",
                options: ["非常に高い", "普通", "低い", "状況による"]
            },
            {
                question: "将来についての考えは？",
                options: ["具体的な計画", "柔軟な対応", "現在に集中", "楽観的な見通し"]
            }
        ]
    }
};

// 로맨틱 궁합 테스트 질문 데이터
const romanticQuestions = [
    {
        question: "연애에서 가장 중요한 것은?",
        options: ["깊은 정서적 교감", "즐거운 시간 보내기", "서로의 성장", "안정적인 관계"],
        scores: { 0: "감성형", 1: "즐거움형", 2: "성장형", 3: "안정형" }
    },
    {
        question: "이상적인 데이트는?",
        options: ["조용한 카페에서 대화", "활동적인 야외 데이트", "문화생활 함께하기", "맛집 탐방"],
        scores: { 0: "감성형", 1: "즐거움형", 2: "성장형", 3: "즐거움형" }
    },
    {
        question: "갈등이 생겼을 때 나는?",
        options: ["즉시 대화로 해결", "시간을 두고 생각", "행동으로 보여주기", "상대방이 먼저 다가오기를 기다림"],
        scores: { 0: "성장형", 1: "감성형", 2: "즐거움형", 3: "안정형" }
    },
    {
        question: "사랑을 표현하는 방법은?",
        options: ["말로 직접 표현", "행동으로 보여주기", "선물이나 서프라이즈", "일상의 작은 배려"],
        scores: { 0: "감성형", 1: "즐거움형", 2: "즐거움형", 3: "안정형" }
    },
    {
        question: "연애의 목표는?",
        options: ["영원한 사랑", "즐거운 추억 만들기", "함께 성장하기", "안정적인 결혼"],
        scores: { 0: "감성형", 1: "즐거움형", 2: "성장형", 3: "안정형" }
    }
];

// 직업 적성 테스트 질문 데이터
const careerQuestions = [
    {
        question: "일할 때 가장 중요하게 생각하는 것은?",
        options: ["창의성과 자유", "안정성과 보수", "성장과 도전", "사람들과의 관계"],
        scores: { 0: "창의형", 1: "안정형", 2: "도전형", 3: "사교형" }
    },
    {
        question: "스트레스 해소 방법은?",
        options: ["혼자만의 시간", "운동이나 활동", "새로운 취미", "친구들과 만남"],
        scores: { 0: "안정형", 1: "도전형", 2: "창의형", 3: "사교형" }
    },
    {
        question: "팀워크에서 나의 역할은?",
        options: ["아이디어 제시", "조율과 중재", "실행과 추진", "분위기 메이커"],
        scores: { 0: "창의형", 1: "사교형", 2: "도전형", 3: "사교형" }
    },
    {
        question: "새로운 기술을 배울 때 나는?",
        options: ["직접 체험해보기", "이론부터 차근차근", "다른 사람에게 배우기", "실용적인 부분부터"],
        scores: { 0: "도전형", 1: "안정형", 2: "사교형", 3: "창의형" }
    },
    {
        question: "성공의 기준은?",
        options: ["자신만의 스타일", "안정적인 수입", "높은 성과", "좋은 인간관계"],
        scores: { 0: "창의형", 1: "안정형", 2: "도전형", 3: "사교형" }
    }
];

// 성격 심화 분석 테스트 질문 데이터
const personalityQuestions = [
    {
        question: "스트레스 상황에서 나는?",
        options: ["논리적으로 분석", "감정적으로 반응", "즉시 행동", "시간을 두고 생각"],
        scores: { 0: "분석형", 1: "감성형", 2: "행동형", 3: "사고형" }
    },
    {
        question: "새로운 환경에 적응할 때?",
        options: ["천천히 관찰", "적극적으로 탐험", "다른 사람을 따라", "계획을 세우고"],
        scores: { 0: "사고형", 1: "행동형", 2: "감성형", 3: "분석형" }
    },
    {
        question: "의사결정을 할 때?",
        options: ["직감에 의존", "데이터 분석", "다른 사람 의견", "경험 바탕"],
        scores: { 0: "감성형", 1: "분석형", 2: "사고형", 3: "행동형" }
    },
    {
        question: "완벽주의 성향은?",
        options: ["매우 높음", "보통", "낮음", "상황에 따라"],
        scores: { 0: "분석형", 1: "사고형", 2: "행동형", 3: "감성형" }
    },
    {
        question: "미래에 대한 생각은?",
        options: ["구체적인 계획", "유연한 대응", "현재에 집중", "낙관적 전망"],
        scores: { 0: "분석형", 1: "사고형", 2: "행동형", 3: "감성형" }
    }
];

// 테스트 결과 데이터
const testResults = {
    // 로맨틱 궁합 테스트 결과
    romantic: {
        ko: {
            "감성형": {
                title: "감성적 로맨티스트",
                description: "깊은 정서적 교감을 중요시하는 감성적인 연애 스타일",
                characteristics: "사랑을 영화처럼 생각하며, 깊이 있는 대화와 정서적 교감을 추구합니다.",
                ideal_partner: "마음을 이해해주고 공감해주는 상대",
                advice: "때로는 너무 이상적이지 말고 현실적인 사랑도 받아들이세요."
            },
            "즐거움형": {
                title: "즐거운 에너지",
                description: "즐거운 시간과 추억을 중요시하는 활발한 연애 스타일",
                characteristics: "항상 긍정적이고 에너지 넘치는 연애를 추구하며, 새로운 경험을 좋아합니다.",
                ideal_partner: "함께 즐거운 시간을 보낼 수 있는 상대",
                advice: "가끔은 깊이 있는 대화도 나누어보세요."
            },
            "성장형": {
                title: "성장 지향적 파트너",
                description: "함께 성장하고 발전하는 것을 중요시하는 연애 스타일",
                characteristics: "서로를 격려하고 도와주며, 개인적 발전을 추구합니다.",
                ideal_partner: "함께 목표를 향해 나아갈 수 있는 상대",
                advice: "때로는 단순한 즐거움도 추구해보세요."
            },
            "안정형": {
                title: "안정적 신뢰",
                description: "안정적이고 신뢰할 수 있는 관계를 중요시하는 연애 스타일",
                characteristics: "성실하고 책임감 있는 연애를 추구하며, 장기적인 관계를 선호합니다.",
                ideal_partner: "신뢰할 수 있고 안정적인 상대",
                advice: "가끔은 예상치 못한 로맨틱한 순간도 만들어보세요."
            }
        },
        en: {
            "감성형": {
                title: "Emotional Romantic",
                description: "A sensitive dating style that values deep emotional connection",
                characteristics: "Thinks of love like a movie and pursues deep conversations and emotional bonding.",
                ideal_partner: "Someone who understands and empathizes with your feelings",
                advice: "Sometimes don't be too idealistic and accept realistic love too."
            },
            "즐거움형": {
                title: "Joyful Energy",
                description: "An active dating style that values fun times and memories",
                characteristics: "Always pursues positive and energetic relationships and enjoys new experiences.",
                ideal_partner: "Someone you can have fun times with",
                advice: "Sometimes have deep conversations too."
            },
            "성장형": {
                title: "Growth-Oriented Partner",
                description: "A dating style that values growing and developing together",
                characteristics: "Encourages and helps each other while pursuing personal development.",
                ideal_partner: "Someone you can move toward goals together with",
                advice: "Sometimes pursue simple pleasures too."
            },
            "안정형": {
                title: "Stable Trust",
                description: "A dating style that values stable and trustworthy relationships",
                characteristics: "Pursues sincere and responsible relationships and prefers long-term relationships.",
                ideal_partner: "Someone trustworthy and stable",
                advice: "Sometimes create unexpected romantic moments too."
            }
        },
        zh: {
            "감성형": {
                title: "感性浪漫主义者",
                description: "重视深度情感交流的感性恋爱风格",
                characteristics: "像电影一样思考爱情，追求深度对话和情感交流。",
                ideal_partner: "理解并同情你内心的人",
                advice: "有时不要太理想化，也要接受现实的爱。"
            },
            "즐거움형": {
                title: "快乐能量",
                description: "重视快乐时光和回忆的活跃恋爱风格",
                characteristics: "始终追求积极和充满活力的恋爱，喜欢新体验。",
                ideal_partner: "能一起享受快乐时光的人",
                advice: "有时也要进行深度对话。"
            },
            "성장형": {
                title: "成长导向型伴侣",
                description: "重视共同成长和发展的恋爱风格",
                characteristics: "相互鼓励和帮助，追求个人发展。",
                ideal_partner: "能一起朝着目标前进的人",
                advice: "有时也要追求简单的快乐。"
            },
            "안정형": {
                title: "稳定信任",
                description: "重视稳定和可信赖关系的恋爱风格",
                characteristics: "追求真诚和有责任感的恋爱，偏好长期关系。",
                ideal_partner: "可信赖和稳定的人",
                advice: "有时也要创造意想不到的浪漫时刻。"
            }
        },
        ja: {
            "감성형": {
                title: "感性的ロマンチスト",
                description: "深い情緒的交流を重視する感性的な恋愛スタイル",
                characteristics: "愛を映画のように考え、深い会話と情緒的交流を追求します。",
                ideal_partner: "心を理解し共感してくれる相手",
                advice: "時にはあまり理想的すぎず、現実的な愛も受け入れてください。"
            },
            "즐거움형": {
                title: "楽しいエネルギー",
                description: "楽しい時間と記憶を重視する活発な恋愛スタイル",
                characteristics: "常にポジティブでエネルギッシュな恋愛を追求し、新しい経験を好みます。",
                ideal_partner: "一緒に楽しい時間を過ごせる相手",
                advice: "時には深い会話もしてみてください。"
            },
            "성장형": {
                title: "成長志向型パートナー",
                description: "一緒に成長し発展することを重視する恋愛スタイル",
                characteristics: "お互いを励まし助け合い、個人の発展を追求します。",
                ideal_partner: "一緒に目標に向かって進める相手",
                advice: "時にはシンプルな楽しみも追求してみてください。"
            },
            "안정형": {
                title: "安定した信頼",
                description: "安定した信頼できる関係を重視する恋愛スタイル",
                characteristics: "誠実で責任感のある恋愛を追求し、長期的な関係を好みます。",
                ideal_partner: "信頼でき安定した相手",
                advice: "時には予想外のロマンチックな瞬間も作ってみてください。"
            }
        }
    },
    // 직업 적성 테스트 결과
    career: {
        ko: {
            "창의형": {
                title: "창의적 혁신가",
                description: "새로운 아이디어와 창의성을 발휘할 수 있는 직업이 적합",
                characteristics: "자유로운 환경에서 독창적인 생각을 펼칠 수 있는 분야를 선호합니다.",
                recommended_jobs: "디자이너, 작가, 예술가, 마케터, 연구원",
                advice: "창의성을 발휘할 수 있는 환경을 찾아보세요."
            },
            "안정형": {
                title: "안정적 전문가",
                description: "체계적이고 안정적인 환경에서 전문성을 발휘할 수 있는 직업이 적합",
                characteristics: "규칙적이고 예측 가능한 업무 환경을 선호합니다.",
                recommended_jobs: "회계사, 공무원, 의사, 변호사, 엔지니어",
                advice: "전문성을 쌓아 안정적인 경력을 만들어보세요."
            },
            "도전형": {
                title: "도전적 리더",
                description: "새로운 도전과 성과를 추구할 수 있는 직업이 적합",
                characteristics: "역동적이고 성과 지향적인 환경에서 리더십을 발휘합니다.",
                recommended_jobs: "경영자, 영업직, 스타트업 창업자, 컨설턴트",
                advice: "도전적인 목표를 세우고 적극적으로 추진해보세요."
            },
            "사교형": {
                title: "사교적 협력가",
                description: "사람들과의 소통과 협력을 중요시하는 직업이 적합",
                characteristics: "팀워크와 인간관계를 중시하며, 다른 사람을 돕는 것을 좋아합니다.",
                recommended_jobs: "교사, 상담사, HR, 영업직, 서비스업",
                advice: "사람들과의 소통 능력을 더욱 발전시켜보세요."
            }
        },
        en: {
            "창의형": {
                title: "Creative Innovator",
                description: "Suitable for jobs where you can utilize new ideas and creativity",
                characteristics: "Prefers fields where you can express original thoughts in a free environment.",
                recommended_jobs: "Designer, Writer, Artist, Marketer, Researcher",
                advice: "Find an environment where you can utilize your creativity."
            },
            "안정형": {
                title: "Stable Professional",
                description: "Suitable for jobs where you can utilize expertise in systematic and stable environments",
                characteristics: "Prefers regular and predictable work environments.",
                recommended_jobs: "Accountant, Civil Servant, Doctor, Lawyer, Engineer",
                advice: "Build expertise to create a stable career."
            },
            "도전형": {
                title: "Challenging Leader",
                description: "Suitable for jobs where you can pursue new challenges and achievements",
                characteristics: "Demonstrates leadership in dynamic and performance-oriented environments.",
                recommended_jobs: "Manager, Sales, Startup Founder, Consultant",
                advice: "Set challenging goals and pursue them actively."
            },
            "사교형": {
                title: "Sociable Collaborator",
                description: "Suitable for jobs that value communication and cooperation with people",
                characteristics: "Values teamwork and human relationships, enjoys helping others.",
                recommended_jobs: "Teacher, Counselor, HR, Sales, Service Industry",
                advice: "Further develop your communication skills with people."
            }
        },
        zh: {
            "창의형": {
                title: "创意创新者",
                description: "适合能够发挥新想法和创造力的职业",
                characteristics: "偏好能在自由环境中表达原创想法的领域。",
                recommended_jobs: "设计师、作家、艺术家、营销人员、研究员",
                advice: "寻找能发挥创造力的环境。"
            },
            "안정형": {
                title: "稳定专业人士",
                description: "适合在系统性和稳定环境中发挥专业知识的职业",
                characteristics: "偏好规律和可预测的工作环境。",
                recommended_jobs: "会计师、公务员、医生、律师、工程师",
                advice: "积累专业知识，建立稳定职业。"
            },
            "도전형": {
                title: "挑战型领导者",
                description: "适合能够追求新挑战和成就的职业",
                characteristics: "在动态和绩效导向的环境中展现领导力。",
                recommended_jobs: "经理、销售、创业家、顾问",
                advice: "设定挑战性目标并积极追求。"
            },
            "사교형": {
                title: "社交合作者",
                description: "适合重视与人沟通和合作的职业",
                characteristics: "重视团队合作和人际关系，喜欢帮助他人。",
                recommended_jobs: "教师、咨询师、人力资源、销售、服务业",
                advice: "进一步发展与人的沟通能力。"
            }
        },
        ja: {
            "창의형": {
                title: "創造的革新者",
                description: "新しいアイデアと創造性を発揮できる職業に適している",
                characteristics: "自由な環境で独創的な考えを展開できる分野を好みます。",
                recommended_jobs: "デザイナー、作家、アーティスト、マーケター、研究者",
                advice: "創造性を発揮できる環境を見つけてください。"
            },
            "안정형": {
                title: "安定した専門家",
                description: "体系的で安定した環境で専門性を発揮できる職業に適している",
                characteristics: "規則的で予測可能な業務環境を好みます。",
                recommended_jobs: "会計士、公務員、医師、弁護士、エンジニア",
                advice: "専門性を積んで安定したキャリアを作ってください。"
            },
            "도전형": {
                title: "挑戦的リーダー",
                description: "新しい挑戦と成果を追求できる職業に適している",
                characteristics: "動的で成果志向的な環境でリーダーシップを発揮します。",
                recommended_jobs: "経営者、営業職、スタートアップ創業者、コンサルタント",
                advice: "挑戦的な目標を立てて積極的に推進してください。"
            },
            "사교형": {
                title: "社交的協力者",
                description: "人とのコミュニケーションと協力を重視する職業に適している",
                characteristics: "チームワークと人間関係を重視し、他の人を助けることを好みます。",
                recommended_jobs: "教師、カウンセラー、HR、営業職、サービス業",
                advice: "人とのコミュニケーション能力をさらに発展させてください。"
            }
        }
    },
    // 성격 심화 분석 결과
    personality: {
        ko: {
            "분석형": {
                title: "논리적 분석가",
                description: "체계적이고 논리적인 사고를 하는 분석적 성향",
                characteristics: "객관적이고 정확한 정보를 바탕으로 판단하며, 완벽주의적 성향이 있습니다.",
                strengths: "정확한 분석, 체계적 사고, 신뢰성",
                weaknesses: "과도한 완벽주의, 유연성 부족",
                advice: "때로는 직감도 믿어보고, 완벽하지 않아도 괜찮습니다."
            },
            "감성형": {
                title: "공감적 감성가",
                description: "타인의 감정에 민감하고 공감 능력이 뛰어난 감성적 성향",
                characteristics: "직감적이고 창의적이며, 사람들의 감정을 잘 이해합니다.",
                strengths: "높은 공감 능력, 창의성, 직감",
                weaknesses: "감정적 판단, 객관성 부족",
                advice: "가끔은 논리적 사고도 활용해보세요."
            },
            "행동형": {
                title: "실행적 행동가",
                description: "즉시 행동으로 옮기는 실용적이고 적극적인 성향",
                characteristics: "결정을 빠르게 내리고 실행에 옮기며, 적응력이 뛰어납니다.",
                strengths: "빠른 실행력, 적응력, 실용성",
                weaknesses: "성급한 판단, 계획성 부족",
                advice: "때로는 신중하게 생각해보고 계획을 세워보세요."
            },
            "사고형": {
                title: "신중한 사고가",
                description: "깊이 생각하고 신중하게 판단하는 사고적 성향",
                characteristics: "시간을 두고 깊이 생각하며, 안정적이고 신뢰할 수 있는 판단을 합니다.",
                strengths: "신중한 판단, 안정성, 신뢰성",
                weaknesses: "결정의 지연, 변화에 둔감",
                advice: "가끔은 빠른 결정도 필요할 수 있습니다."
            }
        },
        en: {
            "분석형": {
                title: "Logical Analyst",
                description: "Analytical tendency with systematic and logical thinking",
                characteristics: "Makes judgments based on objective and accurate information, has perfectionist tendencies.",
                strengths: "Accurate analysis, systematic thinking, reliability",
                weaknesses: "Excessive perfectionism, lack of flexibility",
                advice: "Sometimes trust your intuition, and it's okay not to be perfect."
            },
            "감성형": {
                title: "Empathetic Sensitive",
                description: "Sensitive tendency with high empathy and sensitivity to others' emotions",
                characteristics: "Intuitive and creative, understands people's emotions well.",
                strengths: "High empathy, creativity, intuition",
                weaknesses: "Emotional judgment, lack of objectivity",
                advice: "Sometimes utilize logical thinking too."
            },
            "행동형": {
                title: "Action-Oriented Doer",
                description: "Practical and proactive tendency to take immediate action",
                characteristics: "Makes decisions quickly and takes action, has excellent adaptability.",
                strengths: "Fast execution, adaptability, practicality",
                weaknesses: "Hasty judgment, lack of planning",
                advice: "Sometimes think carefully and make plans."
            },
            "사고형": {
                title: "Cautious Thinker",
                description: "Thoughtful tendency to think deeply and judge carefully",
                characteristics: "Takes time to think deeply and makes stable and reliable judgments.",
                strengths: "Cautious judgment, stability, reliability",
                weaknesses: "Delayed decisions, insensitivity to change",
                advice: "Sometimes quick decisions may be necessary."
            }
        },
        zh: {
            "분석형": {
                title: "逻辑分析师",
                description: "具有系统性和逻辑性思维的分析倾向",
                characteristics: "基于客观和准确信息做出判断，具有完美主义倾向。",
                strengths: "准确分析、系统性思维、可靠性",
                weaknesses: "过度完美主义、缺乏灵活性",
                advice: "有时也要相信直觉，不完美也没关系。"
            },
            "감성형": {
                title: "共情敏感者",
                description: "对他人的情感敏感且具有出色共情能力的感性倾向",
                characteristics: "直觉敏锐且富有创造力，很好地理解人们的情感。",
                strengths: "高共情能力、创造力、直觉",
                weaknesses: "情感判断、缺乏客观性",
                advice: "有时也要运用逻辑思维。"
            },
            "행동형": {
                title: "行动导向执行者",
                description: "立即付诸行动的实用性和积极性倾向",
                characteristics: "快速做出决定并付诸行动，具有出色的适应能力。",
                strengths: "快速执行力、适应能力、实用性",
                weaknesses: "草率判断、缺乏计划性",
                advice: "有时要仔细思考并制定计划。"
            },
            "사고형": {
                title: "谨慎思考者",
                description: "深入思考并谨慎判断的思考倾向",
                characteristics: "花时间深入思考，做出稳定可靠判断。",
                strengths: "谨慎判断、稳定性、可靠性",
                weaknesses: "决策延迟、对变化不敏感",
                advice: "有时快速决策可能是必要的。"
            }
        },
        ja: {
            "분석형": {
                title: "論理的分析者",
                description: "体系的で論理的な思考をする分析的傾向",
                characteristics: "客観的で正確な情報に基づいて判断し、完璧主義的傾向があります。",
                strengths: "正確な分析、体系的思考、信頼性",
                weaknesses: "過度な完璧主義、柔軟性の不足",
                advice: "時には直感も信じて、完璧でなくても大丈夫です。"
            },
            "감성형": {
                title: "共感的感性者",
                description: "他人の感情に敏感で共感能力に優れた感性的傾向",
                characteristics: "直感的で創造的であり、人々の感情をよく理解します。",
                strengths: "高い共感能力、創造性、直感",
                weaknesses: "感情的判断、客観性の不足",
                advice: "時には論理的思考も活用してみてください。"
            },
            "행동형": {
                title: "実行的行動者",
                description: "即座に行動に移す実用的で積極的な傾向",
                characteristics: "決定を素早く下し実行に移し、適応力に優れています。",
                strengths: "素早い実行力、適応力、実用性",
                weaknesses: "性急な判断、計画性の不足",
                advice: "時には慎重に考えて計画を立ててください。"
            },
            "사고형": {
                title: "慎重な思考者",
                description: "深く考え慎重に判断する思考的傾向",
                characteristics: "時間をかけて深く考え、安定した信頼できる判断をします。",
                strengths: "慎重な判断、安定性、信頼性",
                weaknesses: "決定の遅延、変化への鈍感",
                advice: "時には素早い決定が必要かもしれません。"
            }
        }
    }
};

// 다른 테스트 기능들
function startRomanticTest() {
    // 로맨틱 궁합 테스트 시작
    currentTestType = 'romantic';
    currentQuestion = 0;
    testAnswers = [];
    showScreen('romantic-test-screen');
    loadRomanticQuestion();
    trackEvent('romantic_test_start', {
        test_type: 'romantic_compatibility'
    });
}

function startCareerTest() {
    // 직업 적성 테스트 시작
    currentTestType = 'career';
    currentQuestion = 0;
    testAnswers = [];
    showScreen('career-test-screen');
    loadCareerQuestion();
    trackEvent('career_test_start', {
        test_type: 'career_aptitude'
    });
}

function startPersonalityTest() {
    // 성격 심화 분석 테스트 시작
    currentTestType = 'personality';
    currentQuestion = 0;
    testAnswers = [];
    showScreen('personality-test-screen');
    loadPersonalityQuestion();
    trackEvent('personality_test_start', {
        test_type: 'personality_in_depth'
    });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 저장된 언어 설정 불러오기
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage] && questionTranslations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // 언어 설정 적용
    updateAllTexts();
    updateLanguageButtons();
    
    // 시작 화면 표시
    showScreen('start-screen');
    
    // 모달 창 초기 상태 확인 및 숨기기
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
    }
    
    // 언어 선택 버튼 이벤트 리스너
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // 테스트 시작 버튼 이벤트 리스너
    document.querySelectorAll('.option-card').forEach((card, index) => {
        card.addEventListener('click', function() {
            if (index === 0) {
                startSoloTest();
            } else if (index === 1) {
                startDuoTest();
            }
        });
    });
    
    // 다른 테스트 버튼 이벤트 리스너
    document.querySelectorAll('.suggestion-card').forEach((card, index) => {
        card.addEventListener('click', function() {
            if (index === 0) {
                startRomanticTest();
            } else if (index === 1) {
                startCareerTest();
            } else if (index === 2) {
                startPersonalityTest();
            }
        });
    });
    
    // 이름 입력 후 시작 버튼 이벤트 리스너
    const startDuoButton = document.querySelector('#name-input-screen .btn.primary');
    if (startDuoButton) {
        startDuoButton.addEventListener('click', startDuoTestWithNames);
    }
    
    // 이름 입력 필드에서 Enter 키 이벤트 처리
    document.getElementById('player1-name').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('player2-name').focus();
        }
    });
    
    document.getElementById('player2-name').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            startDuoTestWithNames();
        }
    });
    
    // 모달 창 닫기 이벤트
    const closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    
    // 모달 창 외부 클릭 시 닫기
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // 결과 화면 버튼 이벤트 리스너 (동적으로 추가)
    document.addEventListener('click', function(e) {
        // 옵션 버튼 클릭 처리
        if (e.target.classList.contains('option-btn')) {
            const optionIndex = parseInt(e.target.getAttribute('data-option'));
            if (!isNaN(optionIndex)) {
                if (document.getElementById('solo-test-screen').classList.contains('active')) {
                    selectSoloOption(optionIndex);
                } else if (document.getElementById('duo-test-screen').classList.contains('active')) {
                    selectDuoOption(optionIndex);
                } else if (document.getElementById('romantic-test-screen').classList.contains('active')) {
                    selectRomanticOption(optionIndex);
                } else if (document.getElementById('career-test-screen').classList.contains('active')) {
                    selectCareerOption(optionIndex);
                } else if (document.getElementById('personality-test-screen').classList.contains('active')) {
                    selectPersonalityOption(optionIndex);
                }
            }
        }
        
        // 결과 화면 버튼 클릭 처리
        if (e.target.classList.contains('btn')) {
            if (e.target.textContent.includes('다시하기') || e.target.textContent.includes('Restart')) {
                restartTest();
            } else if (e.target.textContent.includes('공유하기') || e.target.textContent.includes('Share')) {
                shareResult();
            } else if (e.target.textContent.includes('돌아가기') || e.target.textContent.includes('Back')) {
                showScreen('start-screen');
            }
        }
    });
    
    // 페이지 로드 시 언어 설정 초기화
    const initialLanguage = localStorage.getItem('preferredLanguage');
    if (initialLanguage && ['ko', 'en', 'zh', 'ja'].includes(initialLanguage)) {
        currentLanguage = initialLanguage;
    } else {
        currentLanguage = 'ko'; // 기본 언어는 한국어
        localStorage.setItem('preferredLanguage', 'ko');
    }
    
    // 언어 버튼 업데이트 및 텍스트 초기화
    updateLanguageButtons();
    updateAllTexts();
});