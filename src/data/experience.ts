export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    type: 'full-time' | 'internship' | 'contractor';
    startDate: string;
    endDate?: string;
    current: boolean;
    description: string;
    responsibilities: string[];
    technologies: string[];
    highlights: string[];
}

export const experiences: Experience[] = [
    {
        id: '1',
        title: 'Data Scientist',
        company: 'Wipro',
        location: 'India',
        type: 'full-time',
        startDate: '2025-07',
        current: true,
        description:
            'Developing and deploying Agentic AI systems, Intelligent Document Processing (IDP) solutions, and proprietary Computer Vision models. Building end-to-end AI pipelines for enterprise clients.',
        responsibilities: [
            'Developing and deploying Agentic AI systems using LLM orchestration and multi-agent architectures',
            'Building Intelligent Document Processing (IDP) pipelines for automated document understanding',
            'Creating proprietary Computer Vision solutions by fine-tuning vision models for domain-specific tasks',
            'Designing RAG-based applications with vector databases for enterprise knowledge management',
            'Collaborating with cross-functional teams on AI strategy and production deployment',
        ],
        technologies: [
            'Python',
            'PyTorch',
            'LangChain',
            'Agentic AI',
            'IDP',
            'Computer Vision',
            'Docker',
            'FastAPI',
            'MLOps',
        ],
        highlights: [
            'Building production Agentic AI systems with multi-agent orchestration',
            'Developing IDP pipelines for automated document extraction and processing',
            'Fine-tuning vision models for proprietary CV solutions',
            'Deploying Gen-AI applications at enterprise scale',
        ],
    },
    {
        id: '2',
        title: 'Gen AI Intern',
        company: 'Coriolis Technologies',
        location: 'India',
        type: 'internship',
        startDate: '2024-01',
        endDate: '2024-04',
        current: false,
        description:
            'Built system-agnostic AI assistant enabling natural language interaction with any API-based system through intelligent workflow generation and LLM orchestration.',
        responsibilities: [
            'Converted OpenAPI documentation into structured API knowledge base',
            'Designed LLM-chained pipeline to decompose user intents into executable workflows',
            'Implemented dependency-aware API orchestration for multi-step task automation',
            'Reduced support team workload by automating repetitive API interactions',
        ],
        technologies: ['Python', 'LangChain', 'OpenAPI', 'LLM Agents', 'Workflow Automation'],
        highlights: [
            'Built production system that reduced support team workload significantly',
            'Created system-agnostic design working with any OpenAPI-compliant API',
            'Implemented intelligent workflow orchestration with dependency resolution',
        ],
    },
    {
        id: '3',
        title: 'Data Science Intern',
        company: 'AlgoLabs',
        location: 'India',
        type: 'internship',
        startDate: '2024-05',
        endDate: '2024-07',
        current: false,
        description:
            'Built industrial-grade computer vision pipeline for structural crack detection using state-of-the-art object detection and segmentation models with full production deployment.',
        responsibilities: [
            'Created custom dataset with 1000+ annotated images using LabelMe',
            'Fine-tuned YOLOv8, SAM, and Detectron2 on domain-specific data',
            'Developed REST API and Streamlit interface for model deployment',
            'Performed comprehensive comparative evaluation on mAP, IoU, and inference speed',
        ],
        technologies: ['Python', 'PyTorch', 'YOLOv8', 'SAM', 'Detectron2', 'Docker', 'Streamlit', 'FastAPI'],
        highlights: [
            'Achieved 95%+ mAP on crack detection task',
            'Deployed containerized solution with Docker for production use',
            'Built end-to-end ML pipeline from data annotation to deployment',
        ],
    },
];

export function getCurrentExperience(): Experience | undefined {
    return experiences.find((e) => e.current);
}

export function getPastExperiences(): Experience[] {
    return experiences.filter((e) => !e.current).sort((a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
}
