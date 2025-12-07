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
            'Building production AI systems for enterprise clients—from multi-agent orchestration to computer vision pipelines.',
        responsibilities: [
            'Designed and owned multi-agent LLM orchestration for enterprise IDP pipelines, reducing human touchpoints in manual document workflows',
            'Implemented RAG pipelines with production vector DBs and fine-tuned models for domain accuracy; delivered sub-second retrieval latencies for common queries (P99 < 500ms)',
            'Built containerized ML microservices (FastAPI + Docker) and integrated CI/CD for model deployments, reducing time-to-production from weeks to days',
            'Collaborated with cross-functional teams to define SLOs, monitoring dashboards, and automated rollback procedures for model failures',
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
            'Owned design and deployment of multi-agent LLM orchestration reducing manual workflow steps by 30-40%',
            'Delivered P99 < 500ms retrieval latency for production RAG pipelines',
            'Reduced model deployment time from weeks to days through containerization and CI/CD',
            'Defined SLOs and monitoring for enterprise ML systems',
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
