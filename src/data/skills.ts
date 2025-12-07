export interface SkillCategory {
    id: string;
    title: string;
    icon: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    level?: 'expert' | 'advanced' | 'intermediate';
}

export const skillCategories: SkillCategory[] = [
    {
        id: 'programming',
        title: 'Programming Languages',
        icon: '💻',
        skills: [
            { name: 'Python', level: 'expert' },
            { name: 'SQL', level: 'advanced' },
            { name: 'R', level: 'intermediate' },
            { name: 'JavaScript', level: 'intermediate' },
            { name: 'TypeScript', level: 'intermediate' },
        ],
    },
    {
        id: 'ml-dl',
        title: 'Machine Learning & Deep Learning',
        icon: '🧠',
        skills: [
            { name: 'PyTorch', level: 'expert' },
            { name: 'TensorFlow / Keras', level: 'advanced' },
            { name: 'Scikit-learn', level: 'expert' },
            { name: 'XGBoost / LightGBM', level: 'advanced' },
            { name: 'Hugging Face Transformers', level: 'advanced' },
            { name: 'OpenCV', level: 'advanced' },
        ],
    },
    {
        id: 'genai',
        title: 'Generative AI & LLMs',
        icon: '🤖',
        skills: [
            { name: 'LangChain', level: 'expert' },
            { name: 'RAG Systems', level: 'expert' },
            { name: 'Prompt Engineering', level: 'advanced' },
            { name: 'OpenAI / GPT APIs', level: 'advanced' },
            { name: 'Vector Databases (FAISS, Pinecone)', level: 'advanced' },
            { name: 'LLM Orchestration', level: 'advanced' },
        ],
    },
    {
        id: 'cv',
        title: 'Computer Vision',
        icon: '👁️',
        skills: [
            { name: 'YOLOv8', level: 'expert' },
            { name: 'Segment Anything (SAM)', level: 'advanced' },
            { name: 'Detectron2', level: 'advanced' },
            { name: 'Image Segmentation', level: 'advanced' },
            { name: 'Object Detection', level: 'expert' },
            { name: 'CNN Architectures', level: 'advanced' },
        ],
    },
    {
        id: 'nlp',
        title: 'Natural Language Processing',
        icon: '💬',
        skills: [
            { name: 'SpaCy', level: 'advanced' },
            { name: 'NLTK', level: 'advanced' },
            { name: 'Named Entity Recognition', level: 'advanced' },
            { name: 'Text Classification', level: 'advanced' },
            { name: 'Sentiment Analysis', level: 'advanced' },
            { name: 'Transformers / BERT', level: 'advanced' },
        ],
    },
    {
        id: 'mlops',
        title: 'MLOps & Deployment',
        icon: '🚀',
        skills: [
            { name: 'Docker', level: 'advanced' },
            { name: 'FastAPI', level: 'advanced' },
            { name: 'Streamlit', level: 'expert' },
            { name: 'MLflow', level: 'intermediate' },
            { name: 'Git / GitHub', level: 'advanced' },
            { name: 'CI/CD Pipelines', level: 'intermediate' },
        ],
    },
    {
        id: 'data',
        title: 'Data Engineering & Analytics',
        icon: '📊',
        skills: [
            { name: 'Pandas', level: 'expert' },
            { name: 'NumPy', level: 'expert' },
            { name: 'SQL / PostgreSQL', level: 'advanced' },
            { name: 'MongoDB', level: 'intermediate' },
            { name: 'Apache Spark', level: 'intermediate' },
            { name: 'Data Visualization (Matplotlib, Seaborn, Plotly)', level: 'advanced' },
        ],
    },
    {
        id: 'cloud',
        title: 'Cloud & Tools',
        icon: '☁️',
        skills: [
            { name: 'Azure', level: 'intermediate' },
            { name: 'AWS (basics)', level: 'intermediate' },
            { name: 'Jupyter / VS Code', level: 'expert' },
            { name: 'Linux', level: 'advanced' },
            { name: 'REST APIs', level: 'advanced' },
        ],
    },
];
