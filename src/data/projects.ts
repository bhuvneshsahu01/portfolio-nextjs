export type ProjectCategory =
    | 'gen-ai'
    | 'computer-vision'
    | 'nlp'
    | 'ml';

export interface Project {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    category: ProjectCategory;
    tags: string[];
    technologies: string[];
    featured: boolean;
    githubUrl: string;
    liveUrl?: string;
    image?: string;
    highlights: string[];
    impact: string;
}

export const projectCategories: Record<ProjectCategory, { label: string; icon: string }> = {
    'gen-ai': { label: 'Gen-AI & LLM', icon: '🤖' },
    'computer-vision': { label: 'Computer Vision', icon: '👁️' },
    'nlp': { label: 'NLP & Deep Learning', icon: '💬' },
    'ml': { label: 'Machine Learning', icon: '📊' },
};

// Focus on 5-6 MOST IMPACTFUL projects that tell your story
export const projects: Project[] = [
    {
        id: '1',
        slug: 'real-time-crack-detection',
        title: 'Real-Time Crack Detection & Segmentation',
        shortDescription:
            'Industrial-grade computer vision pipeline for structural crack detection using state-of-the-art models with full deployment.',
        longDescription:
            'Built an end-to-end production system for real-time crack detection in infrastructure monitoring. Created custom dataset with LabelMe annotations, fine-tuned YOLOv8, SAM, and Detectron2 models, and deployed with Docker containerization.',
        category: 'computer-vision',
        tags: ['Computer Vision', 'Production ML', 'Docker', 'Streamlit'],
        technologies: ['YOLOv8', 'SAM', 'Detectron2', 'PyTorch', 'Docker', 'Streamlit', 'FastAPI'],
        featured: true,
        githubUrl: 'https://github.com/bhuvneshsahu01/Real-Time-Crack-Detection-and-Segmentation',
        highlights: [
            'Created custom dataset using LabelMe with 1000+ annotated images',
            'Fine-tuned 3 state-of-the-art models (YOLOv8, SAM, Detectron2) achieving 95%+ mAP',
            'Built REST API and deployed with Docker for production use',
            'Comprehensive comparative evaluation on inference speed, mAP, and IoU metrics',
        ],
        impact: 'Developed at AlgoLabs internship - demonstrates strong ML engineering, deployment, and applied CV skills valued in production environments',
    },
    {
        id: '2',
        slug: 'tv-series-nlp-analyzer',
        title: 'End-to-End NLP Application with LLMs',
        shortDescription:
            'Comprehensive NLP system combining web scraping, zero-shot classification, network analysis, and LLM fine-tuning for TV series content analysis.',
        longDescription:
            'Multi-faceted NLP project featuring theme extraction via zero-shot classification, interactive character relationship graphs, DistilBERT fine-tuning for text classification, and LLaMA 3.1 fine-tuning with PEFT/QLoRA for conversational AI.',
        category: 'nlp',
        tags: ['LLM Fine-tuning', 'Zero-Shot', 'Network Analysis', 'NLP Pipeline'],
        technologies: [
            'LLaMA 3.1',
            'BART',
            'DistilBERT',
            'PEFT/QLoRA',
            'SpaCy',
            'NetworkX',
            'PyVis',
            'Gradio',
        ],
        featured: true,
        githubUrl: 'https://github.com/bhuvneshsahu01/TV-Series-analyzer',
        highlights: [
            'Web-scraped 3 datasets (subtitles, descriptions, transcripts) using Scrapy',
            'Zero-shot theme classification using BART-L-MNLI',
            'Built interactive character network with SpaCy NER + NetworkX + PyVis',
            'Fine-tuned LLaMA 3.1 (8B) with PEFT/QLoRA for character chatbot',
            'Fine-tuned DistilBERT for domain-specific classification',
        ],
        impact: 'Showcases modern NLP/LLM pipeline construction, fine-tuning expertise, and ability to combine multiple advanced techniques into a cohesive application',
    },
    {
        id: '3',
        slug: 'rag-multi-doc-chatbot',
        title: 'RAG-Based Multi-Document ChatBot with Voice',
        shortDescription:
            'Production-ready conversational AI system using RAG architecture with vector databases, voice interface, and deployed on Hugging Face Spaces.',
        longDescription:
            'Interactive Q&A application enabling natural conversations with multiple documents. Features open-source embeddings, ChromaDB vector storage, Whisper voice input, Gemini TTS output, and LangChain orchestration.',
        category: 'gen-ai',
        tags: ['RAG', 'Vector DB', 'Voice AI', 'LangChain'],
        technologies: [
            'LangChain',
            'ChromaDB',
            'Whisper',
            'Gemini TTS',
            'LLaMA',
            'ChatGroq',
            'Hugging Face',
        ],
        featured: true,
        githubUrl: 'https://github.com/bhuvneshsahu01/Multi-Doc-RAG-Chatbot',
        liveUrl: 'https://huggingface.co/spaces/bhuvneshsahu01/rag-chatbot',
        highlights: [
            'Built RAG pipeline with ChromaDB vector storage for efficient similarity search',
            'Integrated Whisper (audio input) + Gemini TTS (audio output) for voice interface',
            'Used LLaMA Scout LLM via ChatGroq with ConversationBufferMemory',
            'Deployed on Hugging Face Spaces for public access',
        ],
        impact: 'Demonstrates proficiency in modern Gen-AI stack (RAG, vector DBs, LLMs) and ability to build production-ready applications with multi-modal interfaces',
    },
    {
        id: '4',
        slug: 'music-genre-classification',
        title: 'Music Genre Classification with Hybrid Deep Learning',
        shortDescription:
            'Advanced audio classification using hybrid ANN+CNN architecture with Mel spectrograms, feature engineering, and Bayesian optimization.',
        longDescription:
            'Built comprehensive audio ML pipeline extracting MFCCs, chroma, spectral features, and tempo. Implemented hybrid Functional API combining ANN for audio features and CNN for Mel spectrograms, with Bayesian hyperparameter tuning.',
        category: 'ml',
        tags: ['Audio ML', 'Deep Learning', 'Feature Engineering', 'Bayesian Optimization'],
        technologies: [
            'PyTorch',
            'Librosa',
            'CNN',
            'ANN',
            'XGBoost',
            'Scikit-learn',
            'Bayesian Optimization',
        ],
        featured: true,
        githubUrl: 'https://github.com/bhuvneshsahu01/Music-Genre-Classification',
        highlights: [
            'Dataset: 10 genres, 100 samples per genre (30s audio clips)',
            'Extracted audio features (MFCCs, chroma, spectral contrast) + PCA reduction',
            'Compared 6 ML models: LR, SVC, Decision Trees, NB, KNN, RF, XGBoost',
            'Built hybrid Functional API: ANN for features + CNN for spectrograms',
            'Performed Bayesian hyperparameter optimization with comparative analysis table',
        ],
        impact: 'Shows deep learning architecture design skills, signal processing knowledge, and rigorous experimentation methodology',
    },
    {
        id: '5',
        slug: 'api-assistant-system',
        title: 'System-Agnostic AI API Assistant',
        shortDescription:
            'LLM-powered assistant enabling natural language interaction with any API-based system through intelligent workflow generation.',
        longDescription:
            'Built at Coriolis Technologies - converts OpenAPI documentation into structured knowledge base, uses LLM chaining to decompose user intents, select relevant APIs, and generate multi-step executable workflows with dependency-aware orchestration.',
        category: 'gen-ai',
        tags: ['LLM Agents', 'API Integration', 'Workflow Automation', 'Production System'],
        technologies: ['LangChain', 'OpenAPI', 'LLM Chaining', 'Workflow Orchestration'],
        featured: true,
        githubUrl: '#', // May be private/proprietary
        highlights: [
            'Converted OpenAPI docs into structured API knowledge base',
            'Designed LLM-chained pipeline to decompose user intents into API calls',
            'Built dependency-aware workflow orchestration for complex multi-step tasks',
            'Reduced support team workload by automating repetitive task execution',
            'System-agnostic design works with any OpenAPI-compliant system',
        ],
        impact: 'Built during Coriolis internship - demonstrates ability to build production LLM systems that solve real business problems and reduce operational overhead',
    },
    {
        id: '6',
        slug: 'privacy-preserving-ml',
        title: 'Comparative Study: Privacy-Preserving ML Techniques',
        shortDescription:
            'Research implementation comparing k-Anonymity, l-Diversity, and Differential Privacy with utility-risk tradeoff analysis.',
        longDescription:
            'Theoretical and practical study implementing three privacy models from scratch. Comprehensive evaluation of utility loss, risk measures, reconstruction risk, and privacy-utility tradeoffs on real datasets.',
        category: 'ml',
        tags: ['Privacy', 'Research', 'Statistical ML', 'Theory to Practice'],
        technologies: ['Python', 'NumPy', 'Pandas', 'Statistical Modeling'],
        featured: false,
        githubUrl: '#',
        highlights: [
            'Implemented k-Anonymity, l-Diversity, and Differential Privacy from scratch',
            'Comprehensive comparative analysis on utility loss and privacy guarantees',
            'Evaluated reconstruction risk and information leakage metrics',
            'Demonstrated practical tradeoffs between data utility and privacy protection',
        ],
        impact: 'Shows strong theoretical foundation in statistics and ability to translate academic concepts into practical implementations',
    },
];

// Helper functions
export function getFeaturedProjects(): Project[] {
    return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
    return projects.filter((p) => p.category === category);
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.map((p) => p.slug);
}
