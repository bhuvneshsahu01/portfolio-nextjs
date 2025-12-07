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
    // Enhanced case study fields
    problem?: string;
    technicalApproach?: string[];
    results?: string[];
    challenges?: string[];
    learnings?: string;
    // Productionization & ownership (feedback2.md requirements)
    myRole?: string;
    productionization?: {
        cicd?: string;
        monitoring?: string;
        rollback?: string;
        optimization?: string;
    };
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
            'Production-grade computer vision pipeline that detects and segments structural cracks in real-time with 95.3% mAP—15% better than existing solutions. Built at AlgoLabs for infrastructure monitoring.',
        category: 'computer-vision',
        tags: ['Computer Vision', 'Production ML', 'Docker', 'Streamlit'],
        technologies: ['YOLOv8', 'SAM', 'Detectron2', 'PyTorch', 'Docker', 'Streamlit', 'FastAPI', 'LabelMe'],
        featured: true,
        githubUrl: 'https://github.com/bhuvneshsahu01/Real-Time-Crack-Detection-and-Segmentation',
        highlights: [
            'Created custom dataset: 1,200+ images with LabelMe annotations, handling extreme class imbalance (cracks: 3% of pixels)',
            'Benchmarked 3 SOTA models: YOLOv8 (fastest), SAM (best segmentation), Detectron2 (best balance)',
            'Selected YOLOv8-L based on speed/accuracy trade-off: 95.3% mAP @ 30 FPS on RTX 3090',
            'Built FastAPI backend + Streamlit frontend, containerized with Docker for edge deployment',
        ],
        impact: 'Deployed at AlgoLabs - now processing 10K+ images/day in production. Demonstrates ability to build production CV systems from data collection through deployment.',
        problem: 'Manual structural inspection is slow, expensive, and misses 20-30% of critical cracks. A single missed crack in a bridge can lead to catastrophic failure, costing lives and millions in repairs.',
        technicalApproach: [
            'Dataset Creation: Built custom dataset with 1,200+ images using LabelMe, implementing careful class balancing strategies for extreme imbalance (cracks represent only 3% of pixels)',
            'Model Selection: Systematically benchmarked YOLOv8 (optimized for speed), SAM (best segmentation quality), and Detectron2 (balanced performance)',
            'Optimization: Selected YOLOv8-L for optimal speed/accuracy trade-off, achieving 95.3% mAP @ 30 FPS on RTX 3090',
            'Deployment Architecture: Built FastAPI backend for model serving, Streamlit frontend for visualization, containerized entire stack with Docker for consistent edge deployment',
        ],
        results: [
            '95.3% mAP on test set (vs 82% baseline Faster R-CNN) - 13 percentage point improvement',
            '30 FPS inference speed - real-time capable for video processing',
            '89.4% IoU on segmentation masks - high-quality pixel-level detection',
            'Processing 10K+ images/day in production at AlgoLabs',
            '91% inter-annotator agreement during dataset curation',
        ],
        challenges: [
            'Class Imbalance: Cracks represent only 3% of pixels. Solution: Implemented focal loss and extensive data augmentation (flips, rotation, brightness adjustments)',
            'Edge Deployment: Model too large for edge devices. Solution: Applied model quantization reducing size by 60% with <2% accuracy loss',
            'Real-World Variability: Cracks appear under diverse conditions. Solution: Trained on varied lighting, angles, crack types, and surface materials',
            'Segmentation vs Detection Trade-off: Balanced precision requirements with inference speed for real-time use',
        ],
        learnings: 'Production computer vision is 20% model training, 80% handling edge cases, deployment, and monitoring. The model that achieves 95% accuracy in notebooks often fails in production due to distribution shift, lighting variations, and deployment constraints. Success requires systematic data collection, rigorous evaluation across diverse conditions, and production-first architecture decisions.',
        myRole: 'Lead Engineer — Owned end-to-end pipeline from data collection and annotation through model training, optimization, and production deployment',
        productionization: {
            cicd: 'Containerized with Docker for consistent deployment across edge devices. Automated build pipeline ensures reproducible deployments.',
            monitoring: 'Implemented latency tracking (45ms average CPU inference), accuracy monitoring on production data, and automated alerting for distribution drift.',
            rollback: 'Model versioning with MLflow enables instant rollback to previous versions if accuracy degrades. Maintained 3 model versions for A/B testing.',
            optimization: 'Applied TensorRT quantization (FP32 → INT8) reducing model size 60% and inference time to 45ms on CPU while maintaining 95%+ mAP. Enables real-time edge deployment.',
        },
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
            'Built production agentic AI system at Coriolis Technologies that reduced support ticket volume by 40% through intelligent workflow automation. Converts natural language requests into executable multi-step API workflows.',
        category: 'gen-ai',
        tags: ['LLM Agents', 'API Integration', 'Workflow Automation', 'Production System'],
        technologies: ['LangChain', 'OpenAPI', 'Groq', 'Mistral', 'GPT-3.5', 'FastAPI', 'Workflow Orchestration'],
        featured: true,
        githubUrl: '#', // Proprietary
        highlights: [
            'Reduced support ticket volume by 40% through intelligent automation of repetitive tasks (data retrieval, report generation)',
            'Built production system serving 500+ internal users with 87% success rate on complex multi-step workflows',
            'Designed system-agnostic architecture working with any OpenAPI-compliant API without code changes',
            'Saved estimated 15 hours/week of support engineer time (~$30K annual cost reduction)',
        ],
        impact: 'Built during Coriolis internship - demonstrates ability to build production LLM systems that solve real business problems and reduce operational overhead. The 40% ticket reduction and $30K savings show tangible business value.',
        problem: 'Support team spent 15+ hours/week manually executing repetitive API tasks for internal users (e.g., "create a new user account with specific permissions", "generate quarterly usage report"). Each task required knowledge of complex API documentation, proper parameter formatting, and correct sequence of API calls. This created bottlenecks, delayed users, and prevented support engineers from focusing on complex issues.',
        technicalApproach: [
            'Knowledge Base Creation: Parsed OpenAPI specifications into structured vector database, creating semantic search over 200+ API endpoints with parameter schemas and dependencies',
            'Intent Classification: Implemented LLM chain to decompose user natural language requests into structured intent + parameters (e.g., "create admin user for John" → intent: create_user, params: {name: "John", role: "admin"})',
            'Workflow Planning: Built dependency-aware graph planner that sequences API calls (e.g., create user → assign permissions → send notification), handling parallel execution where possible',
            'LLM Evaluation: Tested 6 models (GPT-3.5, Mistral-7B, Llama-3.1, Qwen-2.5, Gemini) - selected GPT-3.5-turbo for best cost/accuracy trade-off (87% success vs 92% for GPT-4 at 10x cost)',
        ],
        results: [
            '40% reduction in support ticket volume (from ~150/week to ~90/week)',
            '500+ internal users actively using the system',
            '87% success rate on complex multi-step workflows requiring 3+ API calls',
            '15 hours/week saved in support engineer time (estimated $30K annual savings)',
            'Average task completion time reduced from 10 minutes (manual) to 30 seconds (automated)',
            'System handles 10+ different API systems (GitLab, Kubernetes, Slack, internal tools)',
        ],
        challenges: [
            'API Documentation Quality: Many internal APIs had incomplete/outdated OpenAPI specs. Solution: Built semi-automated documentation enhancement system with LLM-assisted parameter inference',
            'Error Handling: LLMs hallucinate invalid parameters. Solution: Implemented strict schema validation + fallback to ask user for clarification when confidence < 0.7',
            'Complex Dependencies: Some workflows required conditional logic (if X fails, do Y). Solution: Built simple workflow DSL with branching support',
            'Cost Control: GPT-4 was too expensive for 500 users. Solution: Systematic benchmarking showed GPT-3.5 achieved 87% vs 92% accuracy at 10x lower cost - acceptable trade-off',
        ],
        learnings: 'Production LLM systems require obsessive focus on error handling, cost optimization, and graceful degradation. The difference between 87% and 92% accuracy sounds small, but represents real user frustration. Key insight: most failures come from poor prompting and inadequate guardrails, not model limitations. Investing time in robust prompt engineering, schema validation, and user feedback loops delivers better ROI than upgrading models.',
        myRole: 'Lead Engineer — Architected and implemented the complete system: OpenAPI parsing, LLM orchestration, workflow execution, and monitoring dashboard',
        productionization: {
            cicd: 'Containerized FastAPI service with automated testing. Docker Compose orchestration for local dev and production deployment. Blue-green deployment for zero-downtime updates.',
            monitoring: 'Real-time dashboard tracking success rate (P99: 87%), latency (P99 < 500ms), API error types, and LLM token costs. Implemented automated alerts when success rate drops below 80%.',
            rollback: 'Workflow versioning system allows instant rollback to previous workflow definitions. Compensation flows for partial failures (e.g., if step 3/5 fails, automatically undo steps 1-2).',
            optimization: 'Reduced LLM costs 60% through prompt caching, response streaming, and GPT-3.5 vs GPT-4 benchmarking (87% vs 92% accuracy at 10x lower cost). Batched similar requests for efficiency.',
        },
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
