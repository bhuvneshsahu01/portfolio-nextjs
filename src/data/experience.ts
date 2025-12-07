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
            'Developing AI solutions for enterprise clients, focusing on agentic AI, document processing pipelines, and computer vision applications.',
        responsibilities: [
            'Contributing to multi-agent LLM orchestration systems for enterprise IDP workflows using LangChain and LangGraph',
            'Building RAG pipelines with ChromaDB for document Q&A systems, implementing prompt optimization and context retrieval strategies',
            'Developing containerized ML services (FastAPI + Docker) and participating in model deployment and integration workflows',
            'Collaborating with senior engineers on production ML system design, learning MLOps practices including monitoring and CI/CD patterns',
        ],
        technologies: [
            'Python',
            'PyTorch',
            'LangChain',
            'LangGraph',
            'Agentic AI',
            'IDP',
            'Computer Vision',
            'Docker',
            'FastAPI',
            'MLOps',
        ],
        highlights: [
            'Contributing to production agentic AI and IDP systems for enterprise clients',
            'Developing RAG pipelines with vector databases for intelligent document processing',
            'Building containerized ML microservices and learning production deployment practices',
            'Gaining hands-on experience with LangChain, LangGraph, and modern LLM orchestration frameworks',
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
            'Built production agentic AI system that reduced support team workload by 40% through intelligent workflow automation.',
        responsibilities: [
            'Built production agentic AI system that converts natural language into executable multi-step workflows by parsing OpenAPI specifications—deployed to support team serving 500+ internal users',
            'Reduced support ticket volume by 40% through intelligent automation of repetitive tasks like data retrieval and report generation—saving estimated 15 hours/week of support engineer time',
            'Designed system-agnostic architecture working with any OpenAPI-compliant API without code changes, enabling rapid integration with 10+ internal systems',
            'Implemented LLM chain orchestration with fallback strategies using LangChain, including intent classification, API selection, and parameter extraction—achieving 87% success rate on complex multi-step workflows',
        ],
        technologies: ['Python', 'LangChain', 'OpenAPI', 'LLM Agents', 'FastAPI', 'Workflow Automation'],
        highlights: [
            '40% reduction in support ticket volume',
            '500+ internal users served',
            '87% success rate on complex multi-step workflows',
            '15 hours/week saved in support engineer time (~$30K annual savings)',
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
            'Shipped production-ready crack detection system achieving 95.3% mAP—20 percentage point improvement over baseline.',
        responsibilities: [
            'Shipped production-ready crack detection system for infrastructure monitoring, achieving 95.3% mAP@0.5 through systematic comparison of YOLOv8, SAM, and Detectron2—20 percentage point improvement over baseline YOLO',
            'Engineered complete ML pipeline from data collection through deployment: built custom annotation workflow, curated dataset of 1,200+ images with quality control, achieved 91% inter-annotator agreement',
            'Optimized for production deployment: reduced inference time to 45ms on CPU through model quantization and TensorRT optimization, containerized with Docker for consistent deployment',
            'Delivered comprehensive comparative analysis of detection vs. segmentation approaches, evaluating trade-offs in accuracy, speed, and memory—providing client with data-driven recommendation',
        ],
        technologies: ['Python', 'PyTorch', 'YOLOv8', 'SAM', 'Detectron2', 'Docker', 'Streamlit', 'FastAPI', 'TensorRT'],
        highlights: [
            '95.3% mAP@0.5 (20 percentage point improvement over baseline)',
            '1,200+ images curated with 91% inter-annotator agreement',
            '45ms inference on CPU after optimization',
            'End-to-end pipeline from annotation to containerized deployment',
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
