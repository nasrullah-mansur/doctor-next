
import {
    Activity,
    Baby,
    Brain,
    Facebook,
    Globe,
    GraduationCap,
    Instagram,
    Linkedin,
    Microscope,
    ShieldCheck,
    Twitter,
    Youtube,
    Zap
} from 'lucide-react';
import { FeatureItem, NavLink, ServiceCard } from './types';

export const NAV_LINKS: NavLink[] = [
    { label: 'Home', href: 'home' },
    { label: 'Image Gallery', href: 'images' },
    { label: 'Video Gallery', href: 'videos' },
    { label: 'Contact Us', href: 'contact' }
];

export const SERVICES: ServiceCard[] = [
    {
        title: 'Hydrocephalus & CSF',
        description: 'Expert management of VP Shunt, EVD, NPH, and Chiari malformation.',
        icon: <Activity className="w-6 h-6" />,
        features: ['VP Shunt', 'EVD', 'NPH Management', 'Chiari Surgery'],
        color: 'bg-blue-600'
    },
    {
        title: 'Spine Surgery',
        description: 'Advanced procedures including Endoscopic PLID, ACDF, and Deformity correction.',
        icon: <Zap className="w-6 h-6" />,
        features: ['Endoscopic PLID', 'ACDF', 'Fixation', 'Scoliosis'],
        color: 'bg-emerald-600'
    },
    {
        title: 'Brain Surgery',
        description: 'Microscopic tumor removal, trauma management, and vascular repairs.',
        icon: <Brain className="w-6 h-6" />,
        features: ['Tumor Surgery', 'Head Injury', 'Cranioplasty', 'Brain Abscess'],
        color: 'bg-rose-600'
    },
    {
        title: 'Pediatric Care',
        description: 'Surgical treatment for Encephalocele, Myelomeningocele, and childhood tumors.',
        icon: <Baby className="w-6 h-6" />,
        features: ['Encephalocele', 'Myelomeningocele', 'Skull Anomalies', 'Childhood Tumors'],
        color: 'bg-violet-600'
    }
];

export const FEATURES: FeatureItem[] = [
    {
        title: 'International Training',
        description: 'Advanced Fellowships from Japan (Microvascular) and India (Neuro Endovascular & Stroke).',
        icon: <Globe className="w-8 h-8 text-blue-600" />,
        details: ['Japan Fellow', 'India Stroke Specialist', 'International Standards', 'Global Network']
    },
    {
        title: 'Academic Faculty',
        description: 'Assistant Professor at Dhaka Medical College, ensuring evidence-based clinical excellence.',
        icon: <GraduationCap className="w-8 h-8 text-emerald-600" />,
        details: ['DMCH Faculty', 'Research Focused', 'Clinical Teaching', 'Leading Expert']
    },
    {
        title: 'Microsurgical Skills',
        description: 'Specialized in microvascular and endoscopic neurosurgery for minimal invasiveness.',
        icon: <Microscope className="w-8 h-8 text-rose-600" />,
        details: ['Microscopic PLID', 'Endoscopic Surgery', 'Precision Repairs', 'Quick Recovery']
    },
    {
        title: 'Trusted Quality',
        description: 'Highest standards of surgical care at premier institutions including BRB and DMCH.',
        icon: <ShieldCheck className="w-8 h-8 text-violet-600" />,
        details: ['Ethics Focused', 'Patient Safety', '24/7 Monitoring', 'Follow-up Care']
    }
];

export const CHAMBERS = [
    {
        name: 'BRB Hospital’s Limited',
        address: '77/A, Panthapath, Dhaka',
        schedule: 'Saturday–Wednesday | 05:00 PM – 08:00 PM',
        room: 'Nx Building, Level-04, Room-412',
        contact: '10647'
    },
    {
        name: 'Shimla Hospital & Diagnostic Centre',
        address: 'Dhaka',
        schedule: 'Thursday | 06:00 PM – 11:00 PM',
        room: '2nd Floor, Room-202',
        contact: '01713228218'
    },
    {
        name: 'City Diagnostic Centre & Health Aid Hospital',
        address: 'Building-02',
        schedule: 'Friday | 08:00 AM – 05:00 PM',
        room: 'Floor-1st, Room-101',
        contact: '01757204642'
    },
    {
        name: 'Sono Hospital & Diagnostic Centre',
        address: 'Sono Tower-02',
        schedule: 'Friday | 08:00 PM – 11:00 PM',
        room: 'Floor-3rd, Room-301',
        contact: '01974719730'
    }
];

export const GALLERY_IMAGES = [
    { url: "https://images.unsplash.com/photo-1579154235602-3c2ae48a7983", title: "Modern Operation Theatre" },
    { url: "https://images.unsplash.com/photo-1516549655169-df83a0774514", title: "Patient Recovery Suite" },
    { url: "https://images.unsplash.com/photo-1551076805-e1869033e561", title: "Surgical Microscopic Equipment" },
    { url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118", title: "Diagnostic Imaging Lab" },
    { url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d", title: "Precision Neurosurgery Unit" },
    { url: "https://images.unsplash.com/photo-1504813184591-01592fd03cf7", title: "Consultation Chamber" },
    { url: "https://images.unsplash.com/photo-1551601651-2a8555f1a136", title: "High-Resolution MRI Center" },
    { url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d", title: "Clinical Academic Team" },
    { url: "https://images.unsplash.com/photo-1559757175-5700dde675bc", title: "Advanced Neural Mapping" },
    { url: "https://images.unsplash.com/photo-1538108197017-c1c46adcd9df", title: "Hospital Main Entrance" },
    { url: "https://images.unsplash.com/photo-1516549655169-df83a0774514", title: "Post-Operative Care" },
    { url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2ad49", title: "Medical Seminar Hall" }
];

export const GALLERY_VIDEOS = [
    { id: "v1", youtubeId: "dQw4w9WgXcQ", title: "Neurosurgery Overview: Procedures & Care" },
    { id: "v2", youtubeId: "jNQXAC9IVRw", title: "Understanding Brain Tumors and Treatment" },
    { id: "v3", youtubeId: "EngW7tLk6R8", title: "Advanced Spine Surgery Techniques" },
    { id: "v4", youtubeId: "qMtcWqzGeWc", title: "Hydrocephalus Awareness for Parents" },
    { id: "v5", youtubeId: "L_jWHffIx5E", title: "Microvascular Surgery Success Stories" },
    { id: "v6", youtubeId: "V_0p56tApt0", title: "Academic Lecture at Dhaka Medical College" },
    { id: "v7", youtubeId: "9bZkp7q19f0", title: "Patient Testimonial: Spine Recovery" },
    { id: "v8", youtubeId: "7wtfhZwyrcc", title: "Clinical Facilities Tour" },
    { id: "v9", youtubeId: "XqZsoesa55w", title: "Stroke Prevention and Management" }
];

export const SOCIAL_LINKS = [
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#' },
    { icon: <Instagram className="w-5 h-5" />, href: '#' },
    { icon: <Youtube className="w-5 h-5" />, href: '#' },
];
