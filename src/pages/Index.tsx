import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Mail, Github, Users, Sun, Settings, Plus, Code, BookText, Briefcase } from 'lucide-react';
import profileImage from '@/assets/profile-hero.jpg';
import project1Image from '@/assets/project-1.png';
import project2Image from '@/assets/project-2.jpg';
import project3Image from '@/assets/project-3.jpg';
import project11Image from '@/assets/project-11.png';
import project12Image from '@/assets/project-12.png';
import project13Image from '@/assets/project-13.png';
import project14Image from '@/assets/project-14.png';
import project15Image from '@/assets/project-15.png';
import project16Image from '@/assets/project-16.png';
import project17Image from '@/assets/project-17.png';
import project18Image from '@/assets/project-18.png';
import project21Image from '@/assets/project-21.png';
import project22Image from '@/assets/project-22.png';
import project23Image from '@/assets/project-23.png';
import project24Image from '@/assets/project-24.png';
import project25Image from '@/assets/project-25.png';
import project26Image from '@/assets/project-26.png';
import project31Image from '@/assets/project-31.png';
import project32Image from '@/assets/project-32.png';
import project33Image from '@/assets/project-33.png';
import project34Image from '@/assets/project-34.png';
import project35Image from '@/assets/project-35.png';
import project36Image from '@/assets/project-36.png';
import project37Image from '@/assets/project-37.png';
import project38Image from '@/assets/project-38.png';
import project39Image from '@/assets/project-39.png';
import project40Image from '@/assets/project-40.png';
import project41Image from '@/assets/project-41.png';
import project42Image from '@/assets/project-42.png';
import project43Image from '@/assets/project-43.png';
import project44Image from '@/assets/project-44.png';
import project45Image from '@/assets/project-45.png';
import project27Image from '@/assets/project-27.png';
import project28Image from '@/assets/project-28.png';
import project29Image from '@/assets/project-29.png';
import project30Image from '@/assets/project-30.png';
import project51Image from '@/assets/project-51.jpg';
import project52Image from '@/assets/project-52.png';
import project_m1Image from '@/assets/project-m1.png';
import project_m2Image from '@/assets/project-m2.png';
import project_m3Image from '@/assets/project-m3.png';
import project_m4Image from '@/assets/project-m4.png';
import project_m5Image from '@/assets/project-m5.png';
import project_m6Image from '@/assets/project-m6.png';
import project_m7Image from '@/assets/project-m7.png';
import project_w1Image from '@/assets/project-w1.png';
import project_w2Image from '@/assets/project-w2.png';
import project_w3Image from '@/assets/project-w3.png';
import project_w4Image from '@/assets/project-w4.png';
import project_w5Image from '@/assets/project-w5.png';
import project_w6Image from '@/assets/project-w6.png';
import project_d1Image from '@/assets/project-d1.png';
import project_d2Image from '@/assets/project-d2.png';
import project_d3Image from '@/assets/project-d3.png';
import project_d4Image from '@/assets/project-d4.png';
import project_q1Image from '@/assets/project-q1.png';
import project_q2Image from '@/assets/project-q2.png';
import project_q3Image from '@/assets/project-q3.png';
import project_q4Image from '@/assets/project-q4.png';
import project_e1Image from '@/assets/project-e1.png';
import project_e2Image from '@/assets/project-e2.png';
import cbitImage from '@/assets/Cbit.jpeg';
import iiithImage from '@/assets/IIITH.webp';
import sihImage from '@/assets/sih.jpg';
import naukriImage from '@/assets/naukri.png';
import codeImage from '@/assets/code.webp';
import proImage from '@/assets/pro.webp';
import nptelImage from '@/assets/nptel.jpg';
import hackImage from '@/assets/hack.png';
import olcImage from '@/assets/olc.jpg';
import amaImage from '@/assets/ama.png';
import eduImage from '@/assets/edu.png';
import gssocImage from '@/assets/gssoc.png';
import deepImage from '@/assets/deep.webp';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";

const Index = () => {
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [autoScrollIntervals, setAutoScrollIntervals] = useState({});
  const { toast } = useToast();

  const roles = [ 'Software Developer','Problem Solver', 'Full stack developer', 'AI Enthusiast'];

  useEffect(() => {
    const roleText = roles[currentRole];
    let i = 0;
    const typingTimer = setInterval(() => {
      if (i < roleText.length) {
        setTypedText(roleText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingTimer);
        setTimeout(() => {
          setTypedText('');
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingTimer);
  }, [currentRole]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };

  const skills = [
    { name: 'React.js and MERN Stack', level: 90, category: 'Programming' },
    { name: 'DSA with C++', level: 90, category: 'Programming' },
    { name: 'Java and Python', level: 85, category: 'Programming' },
    { name: 'problem Solving', level: 95, category: 'Programming' },

    {name : 'Git & Github', level: 90, category: 'Tools'},
    { name: 'MongoDb ', level: 85, category: 'Tools' },
    {name : 'Oracle database SQL', level: 89, category: 'Tools'},
    { name: 'VScode & Cloud', level: 80, category: 'Tools' },

    { name: 'Team Management', level: 92, category: 'Soft Skills' },
    { name: 'Leadership', level: 95, category: 'Soft Skills' },
    { name: 'Communication', level: 90, category: 'Soft Skills' },
    
  ];

  const projects = [
    {
      title: 'DeepFitAI - Sports Talent Assessment Platform',
      description: [
        'Built an website and Mobile App of DeepFitAI.',
        'Developed an AI/ML system for Live camera video detection exercises like jump, height, sit-ups, and run distance.',
        'AI-powered real-time pose and motion analysis (posture, reps, jump height, timing, distance), with offline support.',
        'Implemented graph-based exercise analysis with scoring to evaluate movement accuracy and performance.',
        'Designed and implemented accessibility-focused assessment modules for differently-abled athletes (blind and deaf users), incorporating audio-based testing using the Web Speech API and sound direction analysis to support the visually impaired in fitness assessments.'
      ],
      tech: ['Python', 'AI/ML','MediaPipe', 'TenserFlow', 'OpenCV','YOLOV8','Flask','Android Studio'],
      images: [project11Image, project12Image, project13Image, project14Image, project15Image, project16Image, project17Image, project18Image],
      Video : 'https://drive.google.com/file/d/1VmyARNuvZFTq1fVrJ8BpgBlkD0CoAdC3/view?usp=sharing',
      demo: 'https://deepfitai-bwj8.onrender.com/',
      github: 'https://github.com/Arunchand19/DeepFitAI.git'
    },
    {
      title: 'Local Connect E-Commerce Application',
      description: [
        'Integrated a unified web platform enabling users to seamlessly book repair services (AC, Electrical, Mechanical,Electronics) and securely buy or sell event tickets.',
        'mplemented secure payment processing using Stripe, enabling safe and reliable transactions for both service bookings and ticket purchases.',
        'Developed time slot booking and cart scheduling features. And implemented Chatbot for customer support.',
        'Combined user-friendly interfaces with efficient backend logic to ensure seamless functionality.'
      ],
      tech: ['MERN', 'React.js', 'Node.js', 'MongoDB','Stripe'],
      images: [project1Image,project21Image, project22Image, project23Image, project24Image, project25Image, project26Image,project27Image,project28Image,project29Image,project30Image],
      github: 'https://github.com/Arunchand19/Local-Connect-Ecommerce-Application.git',
      demo: 'https://local-connect-e-commerce-mongo-2.onrender.com/',
      Video : 'https://drive.google.com/file/d/1bZ7uXDg5dsDj7saNoeiX0um2YWhWH0aP/view?usp=sharing',
    }, 
    {
      title: 'AI-Based Medical Diagnosis System',
      description: [
        'Developed an AI system using Python and machine learning to detect diseases based on healthcare symptom data',
        'Designed and implemented an AI disease detection system using Python and machine learning algorithms',
        'Utilized healthcare symptom data to deliver accurate medical predictions and enhance diagnostic support'
      ],
      tech: ['Python', 'Flask', 'AI/ML', 'Streamlit', 'Data Model Sets'],
      images: [project_m1Image, project_m2Image, project_m3Image, project_m4Image, project_m5Image, project_m6Image, project_m7Image],
      github: 'https://github.com/Arunchand19/Medical_Disease_Prediction.git',
      demo: 'https://arunchand19-medical-disease-prediction-app-e86gcx.streamlit.app/',
      Video : 'https://drive.google.com/file/d/11abdqK2wRTFN-qaEfRnibbZMtlZ8EJLh/view?usp=sharing'
    },
    {
      title: 'WIFI Analyzer - Computer Networks ',
      description: [
        'The project is a WiFi Analyzer that scans nearby networks and detects connected devices with detailed insights.',
        'It provides real-time traffic monitoring, including bandwidth usage, latency, and protocol analysis.',
        'The system includes advanced security features like ARP spoofing detection, intrusion detection, and rogue access point identification.',
        'It performs malware scanning and behavioral analysis to identify suspicious activities and threats in the network.'
      ],
      tech: ['React.js', 'Socket.io', 'Javascript', 'Tailwind CSS','Lucide Icons'],
      images: [project_w1Image, project_w2Image, project_w3Image, project_w4Image, project_w5Image, project_w6Image],
      github: 'https://github.com/Arunchand19/WIFI_Analyzer.git',
      demo: 'https://wifi-analyzer-3.onrender.com/'
    },
     {
  title: 'Finance Dashboard Analysis',
  description: [
    'Developed a modern finance dashboard to track income, expenses, and overall financial health with interactive visualizations.',
    'Implemented real-time charts including line, bar, and pie charts for financial insights and trend analysis.',
    'Built role-based access control with Admin (CRUD operations) and Viewer (read-only) modes.',
    'Enabled data persistence using localStorage with export options in CSV, JSON, and PDF formats.'
  ],
  tech: ['React.js', 'Vite', 'Context API', 'CSS3', 'localStorage', 'jsPDF'],
  images: [project_d1Image, project_d2Image, project_d3Image, project_d4Image],
  github: 'https://github.com/Arunchand19/Finance_Dashboard.git',
  demo: 'https://finance-dashboard-psi-bay.vercel.app/',
  Video : 'https://drive.google.com/file/d/1mX776HBmWGeVi0t05SYTrl5khH6KtvoF/view?usp=sharing',
},
 {
      title: 'Traffic Optimization System ',
      description: [
        'Implemented a vehicle detection system using YOLOv8 to count traffic in four directions',
        'Optimize signal timing based on real-time vehicle density.',
        'Utilized OpenCV for video processing and object tracking from live camera feeds.'
        
      ],
      tech: ['Machine Learning', 'YOLOv8', 'Python', 'ML Libraries'],
      images: [project51Image,project52Image],
      github: 'https://github.com/Arunchand19/Traffic_Optimization.git',
      demo: 'https://afridpasha1983-traffic-optimization-ai.hf.space/',
    },
    {
      title: 'Train Food delivery system ',
      description: [
        'Developed a web-based platform enabling train passengers to order food from a variety of restaurants along their travel route.',
        'Implemented Gmail OTP verification for user authentication, ensuring secure access and reducing the risk of fraudulent orders or misuse.',
        'Integrated multiple secure payment options including UPI and card payments.',
        'Enabled real-time station selection and scheduled food delivery by agents at chosen stations.'
      ],
      tech: ['Python', 'Google-API', 'Flask', 'HTML','CSS'],
      images: [project31Image, project32Image, project33Image, project34Image, project35Image, project36Image, project37Image, project38Image, project39Image, project40Image],
      github: 'https://github.com/Arunchand19/Food_on_Train.git',
      demo: 'https://food-on-train-4.onrender.com/',
    },
    {
  title: 'Mindquarry – Collaboration & Project Management Tool',
  description: [
    'Developed an open-source collaboration platform to manage tasks, documentation, and team communication in a unified system.',
    'Implemented Wiki module for creating and maintaining project documents such as SRS, design files, and meeting notes.',
    'Built task management system with assignment, deadlines, and status tracking (Pending, In Progress, Completed).',
    'Enabled real-time team collaboration through discussions, comments, notifications, and file sharing with version control.'
  ],
  tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
  images: [project_q1Image, project_q2Image, project_q3Image, project_q4Image],
  github: 'https://github.com/Arunchand19/Mindquarry_Project-Management-Tool-.git',
  demo: 'https://mindquarry-project-management-tool-six.vercel.app/'
},
{
  title: 'Email Triage OpenEnv',
  description: [
    'Developed an OpenEnv-compliant environment to simulate real-world email triage and prioritization workflows.',
    'Implemented email classification system based on urgency levels (low, medium, high) with structured task scenarios.',
    'Built functionality to draft automated responses and prioritize emails for efficient workflow management.',
    'Integrated REST APIs and WebSocket support for interactive sessions, real-time state tracking, and environment control.'
  ],
  tech: ['Python', 'Docker', 'REST API', 'WebSockets', 'OpenEnv', 'JavaScript'],
  images: [project_e1Image, project_e2Image],
  github: 'https://github.com/Arunchand19/Email-triage_scalar.git',
  demo: 'https://arunchand-email-priority-classifier.hf.space/'
}
  ];

  const certifications = [
    { name: 'Walmart Global Tech', provider: 'Advanced Software Engineering', year: '2025', link: 'https://drive.google.com/file/d/1LT_cY8fvhHPLHthf85uHPyBmNGggKkqb/view' },
    { name: 'Microsoft & LinkedIn', provider: 'Carrer Essentials in Data Analysis by Linkedin ', year: '2024', link: 'https://drive.google.com/file/d/1wFzXnLz9pyGvnAf0RVdBMi4Aq8vRTPzJ/view' },
    { name: 'AWS Academy- Machine Learning', provider: 'Certification', year: '2025', link: 'https://drive.google.com/file/d/1FJhV1vX5amQgCF5hDZS2Exas35XKuAWb/view?usp=sharing' },
    { name: 'Cisco Networking Academy', provider: 'Introduction to Networks ', year: '2024', link: 'https://drive.google.com/file/d/1vrgbEeOuxFm_barBeYPGfu8Q35iDy620/view' },
    { name: 'T20DSAChallenge', provider: 'Top 5%', year: '2025', link: 'https://drive.google.com/file/d/19aNDg3TWwCUQPFrI1c5MjRzXYnRrkh5X/view?usp=sharing' },
    { name: 'IIT GandhiNagar Hackathon', provider: 'IITG', year: '2025', link: 'https://drive.google.com/file/d/1N35wBS7_CMfzh0KtvZWkNnvnVthsahBp/view?usp=sharing' },
    { name: 'Cisco Networking Academy', provider: 'Cyber security certification', year: '2024', link: 'https://drive.google.com/file/d/1h27ajLPfnaP2qgRr59FvjUyq7Vn7pb6a/view?usp=sharing' },
    { name: 'NULLCLASS web development', provider: 'NULLCLASS', year: '2025', link: 'https://drive.google.com/file/d/1Qtz4YkHy8hGR25_YWAhmHl0AnzRvaaL4/view?usp=sharing' },
    { name: 'AWS Academy Graduate', provider: 'Cloud Foundations Crrtification', year: '2026', link: 'https://drive.google.com/file/d/1XUDFtDYYzUP9rgYgWkt3zzfId4A6lAu2/view?usp=sharing' },
    { name: 'Programming and Problem solving through C', provider: 'NPTEL', year: '2025', link: 'https://drive.google.com/file/d/17mJCrpKuQjNjwEOcmo_7fO5mxnfh4Cdu/view?usp=sharing' },
    { name: 'Cisco Networking Academy', provider: 'Industrial Networking', year : '2025', link: 'https://drive.google.com/file/d/1sihIg3Kt2GtAVpLWhJlzkuBptvoUdkUg/view?usp=sharing' },
    { name: 'Cisco Networking Academy', provider: 'Getting started with Cisco Packet Tracer',year : '2025', link: 'https://drive.google.com/file/d/1nxZbGlK28-EfpdVy9QUQbWFTdUBvkteR/view?usp=sharing' },
    { name: 'Abacus', provider: 'Viswam Edutech', link: 'https://drive.google.com/file/d/1t_0LCX9PtNIK0uPQfO6yHx2mcwQ_jXhg/view?usp=sharing' },

    { name: 'District Running Trails', provider: 'Warangal District', link: 'https://drive.google.com/file/d/1y8NkxdCg4vjsFrjZvXfy2KIDYKxSLxeJ/view?usp=sharing' },

  ];

  const experiences = [
    {
      company: 'Olcademy',
      role: 'Full Stack Developer Intern',
      
      duration: 'Feb 2025 - Sep 2025',
      description: [ 'Served as Associate Team Lead on Project-Z, a food delivery website. Collaborated with a team to design and develop robust logic approaches.','Built scalable, high-performance applications using the MERN stack and industry best practices.', 'Contributed to a collaborative team project by applying strong logical thinking and modern development tools to build scalable and efficient solutions.'],
      certificateLink: 'https://drive.google.com/file/d/1YtUep-JCsxfPLeIlbxGbeq-KqCDqDyS0/view',
      
    },
    {
      role: 'Machine Learning Traniee',
      company: 'Amazon ML Summer School 2025',
      duration: 'Aug 2025 - Sep 2025',
      description: ['Amazon ML Summer School Scholar Traniee.','Machine Learning (ML) topics including Supervised Learning, DeepNeural Networks, Dimensionality Reduction, Unsupervised Learning.','Generative AI and LLMs, Sequential Learning, Causal Inference and Reinforcement Learning.'],
      certificateLink: 'https://drive.google.com/file/d/1XPMNNlHn399AlpcYocnkE3EvFh5PKs6j/view?usp=sharing'
    },
    {
      role: 'Artificial Intelligence Intern',
      company: 'Edunet foundation by Microsoft',
      duration: 'Feb 2025 - Mar 2025',
      description: ['Developed AI modules using machine learning algorithms and real-world healthcare datasets.','Contributed to intelligent diagnostic and decision support systems for medical applications','Implemented an AI disease detection system using Python and machine learning algorithms'],
      certificateLink: 'https://drive.google.com/file/d/1rlFScz7Uu7-XqT5PaYro5C8ITou7pu_Z/view'
    },
    {
      role: 'Open source Contributor',
      company: 'GirlScript Summer of Code 2025 (GSSOC-25)',
      duration: 'sep 2025 - oct 2025',
      description: ['Contributed to open-source projects under GSSoC, enhancing features and fixing bugs across multiple repositories.','Collaborated with maintainers and other contributors using Git, GitHub, and followed standard open-source practices.','Gained hands-on experience in real-world development while improving code quality, documentation, and functionality.'],
      certificateLink: 'https://drive.google.com/file/d/1JXHHgV3OTCCYwPN0UTFmnB9rmyUU9STX/view?usp=sharing'
    },
    {
      role: 'Web Developer Intern',
      company: 'Oasis InfoByte',
      duration: 'Feb 2025 - Mar 2025',
      description: ['Received a Letter of Appreciation(LOA) from the company for delivering quality work and timely project completion.','Built responsive web projects including a Temperature Converter and a Landscaping Service Platform using HTML, CSS, and JavaScript.','Implemented user-friendly interfaces with functional features to enhance usability and user engagement.'],
      certificateLink: 'https://drive.google.com/file/d/1IhqEixU3jitI4QLjfp7Yq5r3jkV9G7Pm/view?usp=drivesdk'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-poppins font-semibold text-glow" style={{ paddingRight: '50px' }}>
              Arunchand Mallarapu
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {['About', 'Education', 'Achievements', 'Skills', 'Projects', 'Experience'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="glass-button px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary/20 hover:text-primary hover:shadow-lg transition-all duration-300"
                >
                  {item}
                </button>
              ))}
              {/* Coding Profiles Dropdown */}
              <div className="relative group">
                <button className="glass-button px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary/20 hover:text-primary hover:shadow-lg transition-all duration-300 flex items-center gap-1">
                  Coding Profiles <span className="text-xs">▾</span>
                </button>
                <div className="absolute top-full left-0 mt-1 bg-white/90 backdrop-blur-md border border-white/30 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50 min-w-[160px]">
                  <a href="https://leetcode.com/u/arunchandmallarapu_19/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 rounded-t-xl transition-colors duration-200">
                    <SiLeetcode className="w-5 h-5 text-orange-400" />
                    <span className="text-sm font-medium text-gray-700">LeetCode</span>
                  </a>
                  <a href="https://www.codechef.com/users/cry_rained_38" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-amber-50 transition-colors duration-200">
                    <SiCodechef className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-medium text-gray-700">CodeChef</span>
                  </a>
                  <a href="https://www.hackerrank.com/profile/arunchandmallar1" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 rounded-b-xl transition-colors duration-200">
                    <SiHackerrank className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-medium text-gray-700">HackerRank</span>
                  </a>
                </div>
              </div>
              <button
                onClick={() => scrollToSection('certifications')}
                className="glass-button px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary/20 hover:text-primary hover:shadow-lg transition-all duration-300"
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="glass-button px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary/20 hover:text-primary hover:shadow-lg transition-all duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-poppins text-glow leading-tight">
                <span className="block">Hi, I'm <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent">Mallarapu</span></span>
                <span className="block bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent">Arun Chand</span>
              </h1>
              <div className="h-16 flex items-center">
                <span className="text-2xl lg:text-3xl font-medium">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              <p className="text-lg text-muted-foreground max-w-lg">
                I'm a passionate learner who thrives at the intersection of creativity and technology, with a strong focus on problem solving and web technologies to build impactful solutions.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button 
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.setAttribute('download', 'Arunchand_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="bg-gradient-to-r from-blue-800 to-purple-700 text-white px-8 py-3 text-lg font-medium rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
>
  Download Resume
</Button>

              

<Button 
  variant="outline" 
  onClick={() => window.open("https://www.linkedin.com/in/arunchand-mallarapu-3b03a828b/", "_blank")}
  className="bg-blue-600 text-white flex items-center gap-2 px-8 py-3 text-lg font-medium rounded-2xl hover:bg-blue-700 transition-all duration-300"
>
  <FaLinkedin className="text-xl" />
  LinkedIn
</Button>

<Button 
  variant="outline" 
  onClick={() => window.open("https://github.com/Arunchand19", "_blank")}
  className="bg-gray-800 text-white flex items-center gap-2 px-8 py-3 text-lg font-medium rounded-2xl hover:bg-gray-700 transition-all duration-300"
>
  <FaGithub className="text-xl" />
  GitHub
</Button>


            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
              <img 
                src={profileImage} 
                alt="Arunchand Mallarapu"
                className="relative w-80 h-80 rounded-full object-cover shadow-glow hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-glow">
            About Me
          </h2>
          <Card className="glass-card rounded-2xl hover-lift">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    I worked as a Full Stack Developer Intern at <b>Olcademy Company</b>, where I contributed to building robust and scalable web applications across the full technology stack. Additionally, I was selected as a trainee for the <b>Amazon ML Summer School 2025</b>, enhancing my skills in machine learning and real-world problem solving.
                  </p>
                  <p className="text-lg leading-relaxed"><b>Qualified GATE CSIT 2026 </b>, demonstrating strong proficiency in core computer science concepts and problem-solving skills.</p>
                  <p className="text-lg leading-relaxed">
                     I am excited to apply for the Software Developer position at your organization. With a solid
 foundation in Data Structures and Algorithms and hands-on experience as a Full Stack
 Developer, I bring technical expertise, problem-solving ability, and practical project
 experience that align well with the requirements of this role
                  </p>
                 {/*} <div className="glass-card p-4 rounded-xl border border-accent/30">
                    <p className="font-medium text-accent-foreground">
                      💡 Fun Fact: I once built a chatbot that helps students find study groups, 
                      and it's now used by over 10,000 students across 50+ universities!
                    </p>
                  </div>   */}
                </div>
                <div className="space-y-4">
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="font-semibold text-lg mb-2">Focus</h3>
                    <ul className="space-y-2 text-sm">
                      <li>💻 Software Developer</li>
                      <li>🌐 Full-Stack Web Development</li>
                      <li>🤖 AI/Machine Learning Applications</li>
                      <li>💻 Data structures and Algorithms</li>
                      
                      
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gradient-glass">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-glow">
            Education
          </h2>
          <div className="space-y-8">
            <div className="timeline-item">
              <Card className="glass-card rounded-2xl hover-lift ml-8">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">Vasavi College Of Engineering</h3>
                      <p className="text-primary font-medium">Bachelor of Engineering in Information Technology</p>
                       <h6 className="text-primary font-medium">(Honours in Artificial Intelligence and Machine Learning)</h6>
                      <p className="text-sm text-muted-foreground"><b>CGPA : 8.85/10 </b> • Year of completion : 2027</p>
                    </div>
                    <Badge variant="secondary">Current</Badge>
                  </div>
                  <p className="mt-3 text-sm">
                    Relevant Coursework: Data Structures & Algorithms, Full Stack Development, Artificial Intelligence and Machine Learning 
                    , Database Management Systems, Computer Networks, Computer Interaction .
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="timeline-item">
              <Card className="glass-card rounded-2xl hover-lift ml-8">
                <CardContent className="p-6">
                  <div>
                    <h3 className="text-xl font-semibold">Sri Chaitanya Juniour College, Hyderabad</h3>
                    <p className="text-primary font-medium">Intermediate, Year of completion : 2022</p>
                    <p className="text-sm text-muted-foreground">percentage : 95.2%  • JEE-MAINS : 94 Percentile</p>
                  </div>
                  <p className="mt-3 text-sm">
                    Focused on Mathematics, Physics, and Chemistry subjects (Qualified to JEE-Advance Exam).
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="timeline-item">
              <Card className="glass-card rounded-2xl hover-lift ml-8">
                <CardContent className="p-6">
                  <div>
                    <h3 className="text-xl font-semibold">Sri Chaitanya High School, Hanamkonda</h3>
                    <p className="text-primary font-medium">Schooling, Year of completion : 2020</p>
                    <p className="text-sm text-muted-foreground">CGPA : 10/10</p>
                  </div>
                  <p className="mt-3 text-sm">
                    Completed schooling with a strong academic record, securing a good score.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>



      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-glow">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <Card className="glass-card rounded-2xl hover-lift ml-8">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                          {exp.company === 'Olcademy' && (
                            <img src={olcImage} alt="Olcademy" className="w-14 h-14 rounded-full object-cover" />
                          )}
                          {exp.company === 'Amazon ML Summer School 2025' && (
                            <img src={amaImage} alt="Amazon ML Summer School" className="w-14 h-14 rounded-full object-cover" />
                          )}
                          {exp.company === 'Edunet foundation by Microsoft' && (
                            <img src={eduImage} alt="Edunet foundation" className="w-14 h-14 rounded-full object-cover" />
                          )}
                          {exp.company === 'GirlScript Summer of Code 2025 (GSSOC-25)' && (
                            <img src={gssocImage} alt="GirlScript Summer of Code" className="w-14 h-14 rounded-full object-cover" />
                          )}
                          {exp.company}
                        </h3>
                        <p className="text-primary font-medium">{exp.role}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{exp.duration}</Badge>
                        <Button 
                          size="sm" 
                          onClick={() => window.open(exp.certificateLink, '_blank')}
                          className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold px-4 py-2 rounded-xl hover:from-blue-500 hover:to-blue-300 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1.5"
                        >
                          Certificate <span className="text-base leading-none">↗</span>
                        </Button>
                      </div>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 font-poppins text-glow">
            Achievements
          </h2>
          <p className="text-center text-muted-foreground mb-14 text-base">Milestones &amp; recognitions that shaped my journey</p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: 'Awarded 2nd Prize at Sudhee 2026 Technical Project Expo, CBIT Hyderabad',
                desc: 'DeepFit AI is an AI-based platform that uses camera pose detection to analyze exercises, track performance, and provide fitness scoring and rankings.',
                icon: '🏆',
                year: '2026',
                tag: 'Project Expo',
                link: 'https://drive.google.com/file/d/1RgjSYBuj7YdiIEt57_BmEnjnOqj9eBBv/view?usp=sharing',
                image: cbitImage,
                palette: {
                  grad: 'from-yellow-400 via-orange-400 to-red-400',
                  bar:  'from-yellow-400 to-orange-400',
                  bg:   'from-yellow-50 to-orange-50',
                  badge:'bg-orange-100 text-orange-700 border-orange-300',
                  btn:  'from-orange-500 to-red-400',
                  ring: 'ring-orange-300',
                  frame:'border-orange-400',
                },
              },
              {
                title: 'AISEHack 2026 - IIIT Hyderabad Finalist',
                image: iiithImage,
                desc: 'Participated in AISE Hack, a 48-hour hackathon, where we developed a flood detection system using AI to identify and monitor flood-prone areas.The solution focused on real-time data analysis to enable early warnings and improve disaster response.',
                icon: '🤖',
                year: '2026',
                tag: 'Hackathon',
                link: 'https://drive.google.com/file/d/1X6LOex7OIeHZ7t2IpRHzI_fBn_CbpybA/view?usp=sharing',
                palette: {
                  grad: 'from-blue-500 via-cyan-400 to-teal-400',
                  bar:  'from-blue-500 to-cyan-400',
                  bg:   'from-blue-50 to-cyan-50',
                  badge:'bg-blue-100 text-blue-700 border-blue-300',
                  btn:  'from-blue-500 to-cyan-400',
                  ring: 'ring-blue-300',
                  frame:'border-blue-400',
                },
              },
              {
                title: 'Smart India Hackathon 2025 - Semi-Finalist',
                image: sihImage,
                desc: 'Successfully cleared internal and department level of college rounds of Smart India Hackathon (SIH) 2025, securing a position as a semi-finalist.Demonstrated strong problem-solving and innovation skills while competing among top teams.',
                icon: '💻',
                year: '2025',
                tag: 'Hackathon',
                link: 'https://deepfitai-bwj8.onrender.com/',
                palette: {
                  grad: 'from-violet-500 via-purple-400 to-pink-400',
                  bar:  'from-violet-500 to-purple-400',
                  bg:   'from-violet-50 to-purple-50',
                  badge:'bg-violet-100 text-violet-700 border-violet-300',
                  btn:  'from-violet-500 to-purple-400',
                  ring: 'ring-violet-300',
                  frame:'border-violet-400',
                },
              },
              {
                title: 'NPTEL - Programming In Java',
                image: nptelImage,
                desc: 'Secured 94 Percentile (Gold Medal) in exam and successfully completed the NPTEL certification on Programming In Java, demonstrating strong foundational knowledge in programming logic, algorithms, and Java Language.',
                icon: '📚🏆',
                year: '2025',
                tag: 'Gold Merit Certification',
                link: 'https://drive.google.com/file/d/1b_5haS62nUWCfLGw8znzKXX9TL7BgxS9/view?usp=sharing',
                palette: {
                  grad: 'from-lime-500 via-green-400 to-emerald-400',
                  bar:  'from-lime-500 to-emerald-400',
                  bg:   'from-lime-50 to-emerald-50',
                  badge:'bg-lime-100 text-lime-700 border-lime-300',
                  btn:  'from-lime-500 to-emerald-400',
                  ring: 'ring-lime-300',
                  frame:'border-lime-400',
                },
              },
              {
                title: 'Naukri Campus Young Turks 2025 - secured 97.94 percentile in coding round',
                image: naukriImage,
                desc: 'Achieved a 97.94 percentile in the coding round of Naukri Campus Young Turks 2025, demonstrating strong problem-solving and programming skills. Performed competitively among a large pool of participants in a high-standard technical assessment.',
                icon: '🌍',
                year: '2025',
                tag: 'Coding Challenge',
                link: 'https://drive.google.com/file/d/1QdrsI8Pw4Ah0_eq1Uwv_dOiBF9Pmy64U/view',
                palette: {
                  grad: 'from-amber-500 via-yellow-400 to-lime-400',
                  bar:  'from-amber-500 to-yellow-400',
                  bg:   'from-amber-50 to-yellow-50',
                  badge:'bg-amber-100 text-amber-700 border-amber-300',
                  btn:  'from-amber-500 to-yellow-500',
                  ring: 'ring-amber-300',
                  frame:'border-amber-400',
                },
              },
              {
                title: '🏆 HackerRank National Coding Hackathon - 3rd Place Winner',
                image: '/HackerRank.png',
                desc: 'Secured 3rd Place and received a ₹3,000 cash prize in the HackerRank National Coding Hackathon, a national-level online coding competition that assessed competitive programming, algorithmic thinking, data structures, and problem-solving skills through challenging coding challenges under time constraints.',
                icon: '🏆',
                year: '2026',
                tag: 'Competitive Coding',
                palette: {
                  grad: 'from-emerald-500 via-teal-400 to-green-400',
                  bar:  'from-emerald-500 to-teal-400',
                  bg:   'from-emerald-50 to-teal-50',
                  badge:'bg-emerald-100 text-emerald-700 border-emerald-300',
                  btn:  'from-emerald-500 to-teal-400',
                  ring: 'ring-emerald-300',
                  frame:'border-emerald-400',
                },
              },
              {
                title: 'Providence Leap Ideathon - Qualified to Stage 2',
                image: proImage,
                desc: 'Qualified to Stage 2 of the Providence Leap Ideathon, presenting a tech-driven healthcare idea that advanced through competitive evaluation rounds.',
                icon: '💡',
                year: '2024',
                tag: 'Ideathon',
                link: 'https://drive.google.com/file/d/1vpqmX1F0kuvj6FKA1FV813tet2GZIuLn/view?usp=sharing',
                palette: {
                  grad: 'from-rose-500 via-pink-400 to-fuchsia-400',
                  bar:  'from-rose-500 to-pink-400',
                  bg:   'from-rose-50 to-pink-50',
                  badge:'bg-rose-100 text-rose-700 border-rose-300',
                  btn:  'from-rose-500 to-pink-400',
                  ring: 'ring-rose-300',
                  frame:'border-rose-400',
                },
              },
              {
                title: 'HackVega - National Coding Hackathon',
                image: hackImage,
                desc: 'Competed in the HackVega national coding hackathon, building a full-stack solution under time pressure and earning recognition among top participants across the country.',
                icon: '🚀',
                year: '2025',
                tag: 'Hackathon',
                link: 'https://drive.google.com/file/d/1FXMwpg3BxJ--kfkxFvz9D5xirxYnakOj/view?usp=sharing',
                palette: {
                  grad: 'from-sky-500 via-blue-400 to-indigo-400',
                  bar:  'from-sky-500 to-indigo-400',
                  bg:   'from-sky-50 to-indigo-50',
                  badge:'bg-sky-100 text-sky-700 border-sky-300',
                  btn:  'from-sky-500 to-indigo-400',
                  ring: 'ring-sky-300',
                  frame:'border-sky-400',
                },
              },
              {
                title: 'CodeClash — Battle of Logic & Code (Finalist)',
                image: codeImage,
                desc: 'Reached the finals of CodeClash organised by Lets Code Community on Unstop, competing against hundreds of coders in logic and algorithmic challenges.',
                icon: '⚔️',
                year: '2025',
                tag: 'Competitive Coding',
                link: 'https://drive.google.com/file/d/174oDu45M5RSKyoxECnWL47Et2jjKKtiQ/view?usp=drivesdk',
                palette: {
                  grad: 'from-emerald-500 via-teal-400 to-green-400',
                  bar:  'from-emerald-500 to-teal-400',
                  bg:   'from-emerald-50 to-teal-50',
                  badge:'bg-emerald-100 text-emerald-700 border-emerald-300',
                  btn:  'from-emerald-500 to-teal-400',
                  ring: 'ring-emerald-300',
                  frame:'border-emerald-400',
                },
              },
              
              
            ].map((ach, i) => (
              <div
                key={i}
                className="cert-card-animate group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-white/30"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Gradient top bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${ach.palette.bar}`} />

                {/* Card body */}
                <div className={`bg-gradient-to-br ${ach.palette.bg} p-6 flex flex-col gap-5`}>

                  {/* Photo frame */}
                  <div className={`relative w-full h-44 rounded-2xl border-4 ${ach.palette.frame} bg-white/60 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-inner`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${ach.palette.grad} opacity-10`} />
                    {ach.image ? (
                      <img
                        src={ach.image}
                        alt={ach.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 z-10">
                        <span className="text-6xl drop-shadow-lg">{ach.icon}</span>
                        <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">Photo</span>
                      </div>
                    )}
                    {/* Corner accents */}
                    <span className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 ${ach.palette.frame} rounded-tl-md`} />
                    <span className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 ${ach.palette.frame} rounded-tr-md`} />
                    <span className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 ${ach.palette.frame} rounded-bl-md`} />
                    <span className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 ${ach.palette.frame} rounded-br-md`} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-base leading-snug text-gray-800 group-hover:text-gray-900 transition-colors">{ach.title}</h3>
                      <Badge className={`${ach.palette.badge} border text-xs px-2 py-0.5 rounded-full flex-shrink-0`}>{ach.year}</Badge>
                    </div>
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${ach.palette.grad} text-white w-fit shadow-sm`}>{ach.tag}</span>
                    <p className="text-sm text-gray-600 leading-relaxed">{ach.desc}</p>
                  </div>

                  {/* Button */}
                  {ach.link && (
                    <Button
                      onClick={() => window.open(ach.link, '_blank')}
                      className={`w-full bg-gradient-to-r ${ach.palette.btn} text-white font-semibold rounded-xl py-2.5 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      View Certificate <span className="text-lg leading-none">↗</span>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 font-poppins text-glow">
            Skills &amp; Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-14 text-base">Technologies &amp; tools I work with</p>

          {/* Technical & Soft Skills Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">

            {/* Technical Skills */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-300 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-br from-blue-600 to-blue-400 p-3 rounded-xl shadow-lg">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Technical Skills</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Bootstrap',
                    'Python', 'Java', 'C++', 'Flask',
                    'MySQL', 'MongoDB', 'Database',
                    'Machine Learning', 'Deep Learning', 'Artificial Intelligence', 'Neural Networks',
                    'Git', 'Cloud Computing', 'System Design',
                  ].map((skill, i) => (
                    <span
                      key={skill}
                      className="skill-badge-animate cursor-pointer text-sm font-semibold px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-400 shadow-md hover:from-blue-500 hover:to-blue-300 hover:scale-110 hover:shadow-blue-400/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-violet-200 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-1.5 w-full bg-gradient-to-r from-violet-700 to-violet-500" />
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-700 to-violet-500 rounded-xl blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-br from-violet-700 to-violet-500 p-3 rounded-xl shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-700 to-violet-500 bg-clip-text text-transparent">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Leadership','Teamwork','Problem Solving','Communication','Project Management','Critical Thinking'
                  ].map((skill, i) => (
                    <span
                      key={skill}
                      className="skill-badge-animate cursor-pointer text-sm font-semibold px-5 py-2.5 rounded-full text-white bg-gradient-to-r from-violet-700 to-violet-500 shadow-md hover:from-violet-500 hover:to-purple-400 hover:scale-110 hover:shadow-violet-400/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                      style={{ animationDelay: `${i * 0.08}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Programming',
                grad: 'from-orange-500 to-amber-400',
                bar:  'from-orange-500 to-amber-400',
                bg:   'from-orange-50 to-amber-50',
                border: 'border-orange-300 hover:border-orange-500',
                text:  'from-orange-600 to-amber-500',
                shadow: 'hover:shadow-orange-200',
              },
              {
                category: 'Tools',
                grad: 'from-green-600 to-emerald-400',
                bar:  'from-green-600 to-emerald-400',
                bg:   'from-green-50 to-emerald-50',
                border: 'border-green-300 hover:border-green-500',
                text:  'from-green-600 to-emerald-500',
                shadow: 'hover:shadow-green-200',
              },
              {
                category: 'Soft Skills',
                grad: 'from-red-600 to-rose-400',
                bar:  'from-red-600 to-rose-400',
                bg:   'from-red-50 to-rose-50',
                border: 'border-red-300 hover:border-red-500',
                text:  'from-red-600 to-rose-500',
                shadow: 'hover:shadow-red-200',
              },
            ].map(({ category, grad, bar, bg, border, text, shadow }) => (
              <div
                key={category}
                className={`relative rounded-3xl overflow-hidden shadow-xl ${shadow} hover:shadow-2xl border ${border} hover:-translate-y-3 transition-all duration-300 group`}
              >
                <div className={`h-2 w-full bg-gradient-to-r ${grad}`} />
                <div className={`bg-gradient-to-br ${bg} p-7`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${grad} rounded-xl blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300`} />
                      <div className={`relative bg-gradient-to-br ${grad} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Code className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${text} bg-clip-text text-transparent`}>{category}</h3>
                  </div>
                  <div className="space-y-5">
                    {skills.filter(s => s.category === category).map((skill, idx) => (
                      <div key={skill.name} className="skill-badge-animate" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                          <span className={`text-xs font-bold bg-gradient-to-r ${text} bg-clip-text text-transparent`}>{skill.level}%</span>
                        </div>
                        <div className="h-3 rounded-full bg-white/80 shadow-inner overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${bar} shadow-md skill-bar-animated relative overflow-hidden`}
                            style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-glass">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-poppins text-glow">
            Featured Projects
          </h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="glass-card rounded-3xl hover-lift overflow-hidden shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 min-h-[400px]"
                onMouseEnter={() => {
                  const interval = setInterval(() => {
                    setCurrentImageIndex(prev => {
                      const current = prev[index] || 0;
                      const newIndex = current === project.images.length - 1 ? 0 : current + 1;
                      return {...prev, [index]: newIndex};
                    });
                  }, 2000);
                  setAutoScrollIntervals(prev => ({...prev, [index]: interval}));
                }}
                onMouseLeave={() => {
                  if (autoScrollIntervals[index]) {
                    clearInterval(autoScrollIntervals[index]);
                    setAutoScrollIntervals(prev => {
                      const newIntervals = {...prev};
                      delete newIntervals[index];
                      return newIntervals;
                    });
                  }
                }}
              >
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-2 flex items-center justify-center py-6 px-4">
                    <div className="aspect-[4/3] w-full overflow-hidden relative group bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl shadow-xl border border-primary/20">
                    <div className="flex transition-transform duration-500 ease-in-out h-full" style={{transform: `translateX(-${((currentImageIndex[index] || 0) * 100)}%)`}}>
                      {project.images.map((img, imgIndex) => (
                        <img 
                          key={imgIndex}
                          src={img} 
                          alt={`${project.title} ${imgIndex + 1}`}
                          className="w-full h-full object-contain flex-shrink-0 hover:scale-105 transition-transform duration-700"
                        />
                      ))}
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => setCurrentImageIndex(prev => ({...prev, [index]: imgIndex}))}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            imgIndex === (currentImageIndex[index] || 0) ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                    <button 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-primary/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      onClick={() => {
                        const current = currentImageIndex[index] || 0;
                        const newIndex = current === 0 ? project.images.length - 1 : current - 1;
                        setCurrentImageIndex(prev => ({...prev, [index]: newIndex}));
                      }}
                    >
                      ‹
                    </button>
                    <button 
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-primary/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      onClick={() => {
                        const current = currentImageIndex[index] || 0;
                        const newIndex = current === project.images.length - 1 ? 0 : current + 1;
                        setCurrentImageIndex(prev => ({...prev, [index]: newIndex}));
                      }}
                    >
                      ›
                    </button>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent flex items-center gap-2">
                        {project.title === 'DeepFitAI - Sports Talent Assessment Platform' && (
                          <img src={deepImage} alt="DeepFitAI" className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
                        )}
                        {project.title}
                      </h3>
                      <ul className="text-lg text-muted-foreground leading-relaxed space-y-2">
                        {project.description.map((point, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">Tech Stack</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech) => (
                            <Badge 
                              key={tech} 
                              className="bg-primary/10 text-primary border-primary/30 hover:bg-primary hover:text-white px-4 py-2 text-sm font-medium rounded-full transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4 pt-4">
                        {project.github !== '#' && (
                          <Button 
                            variant="outline" 
                            onClick={() => window.open(project.github, '_blank')}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-600 text-white hover:from-gray-700 hover:to-gray-500 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
                          >
                            <Github className="w-5 h-5" />
                            View Code
                          </Button>
                        )}
                        {project.demo !== '#' && (
                          <Button 
                            onClick={() => window.open(project.demo, '_blank')}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:from-blue-500 hover:to-cyan-300 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
                          >
                            <span>🌐 Live Demo</span>
                          </Button>
                        )}
                        {project.Video && (
                          <Button 
                            variant="outline"
                            onClick={() => window.open(project.Video, '_blank')}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-400 text-white hover:from-rose-400 hover:to-pink-300 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
                          >
                            <span>▶ View Video</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-gradient-glass">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-glow">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => {
              const palettes = [
                { bar: 'from-blue-500 to-cyan-400',    icon: 'from-blue-500 to-cyan-400',    glow: 'blue-400',   badge: 'bg-blue-100 text-blue-700 border-blue-300',   btn: 'from-blue-500 to-cyan-400'   },
                { bar: 'from-violet-500 to-purple-400', icon: 'from-violet-500 to-purple-400', glow: 'violet-400', badge: 'bg-violet-100 text-violet-700 border-violet-300', btn: 'from-violet-500 to-purple-400' },
                { bar: 'from-rose-500 to-pink-400',    icon: 'from-rose-500 to-pink-400',    glow: 'rose-400',   badge: 'bg-rose-100 text-rose-700 border-rose-300',     btn: 'from-rose-500 to-pink-400'   },
                { bar: 'from-amber-500 to-yellow-400', icon: 'from-amber-500 to-yellow-400', glow: 'amber-400',  badge: 'bg-amber-100 text-amber-700 border-amber-300',   btn: 'from-amber-500 to-yellow-400'},
                { bar: 'from-emerald-500 to-teal-400', icon: 'from-emerald-500 to-teal-400', glow: 'emerald-400',badge: 'bg-emerald-100 text-emerald-700 border-emerald-300', btn: 'from-emerald-500 to-teal-400'},
                { bar: 'from-orange-500 to-red-400',   icon: 'from-orange-500 to-red-400',   glow: 'orange-400', badge: 'bg-orange-100 text-orange-700 border-orange-300', btn: 'from-orange-500 to-red-400'  },
              ];
              const p = palettes[index % palettes.length];
              return (
                <Card
                  key={index}
                  className="cert-card-animate glass-card rounded-2xl overflow-hidden border-2 border-white/20 hover:border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.07}s` }}
                >
                  {/* Coloured shimmer bar on top */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${p.bar}`} />
                  <CardContent className="p-7 flex items-center gap-6">
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.icon} rounded-2xl blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300`} />
                      <div className={`relative bg-gradient-to-br ${p.icon} p-4 rounded-2xl shadow-lg`}>
                        <BookText className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base leading-snug group-hover:text-primary transition-colors duration-300">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{cert.provider}</p>
                    </div>
                    {/* Badge + Button */}
                    <div className="flex flex-col items-end gap-3 flex-shrink-0">
                      {cert.year && (
                        <Badge className={`${p.badge} border px-3 py-1 text-xs font-semibold rounded-full`}>{cert.year}</Badge>
                      )}
                      <Button
                        size="sm"
                        onClick={() => window.open(cert.link, '_blank')}
                        className={`bg-gradient-to-r ${p.btn} text-white text-xs px-4 py-2 rounded-xl hover:shadow-lg hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 font-semibold flex items-center gap-1.5`}
                      >
                        View <span className="text-base leading-none">↗</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="floating absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          <div className="floating absolute bottom-20 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" style={{animationDelay: '-1s'}}></div>
          <div className="floating absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-lg" style={{animationDelay: '-2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-poppins text-blue-900 animate-pulse tracking-wide">
  Let's Build Something Amazing Together!
</h2>


            <p className="text-muted-foreground animate-slide-in-left">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-slide-in-left">
              <Card className="glass-card rounded-2xl hover-lift transform hover:scale-[1.02] transition-all duration-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 bg-gradient-primary bg-clip-text text-transparent">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                      <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <span className="group-hover:text-primary transition-colors duration-300">arunchandmallarapu@email.com</span>
                    </div>
                    <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300" style={{animationDelay: '0.1s'}}>
                      <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Github className="w-5 h-5 text-primary" />
                      </div>
                      <span className="group-hover:text-primary transition-colors duration-300">github.com/Arunchand19</span>
                    </div>
                    <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
                      <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <span className="group-hover:text-primary transition-colors duration-300">linkedin.com/in/arunchand-mallarapu</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card rounded-2xl hover-lift transform hover:scale-[1.02] transition-all duration-500 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <CardContent className="p-6">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="relative group">
                    <Input 
                      placeholder="Your Name" 
                      className="glass-button border-white/20 focus:border-primary/50 focus:shadow-glow transition-all duration-300 group-hover:border-primary/30"
                      required 
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <div className="relative group">
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="glass-button border-white/20 focus:border-primary/50 focus:shadow-glow transition-all duration-300 group-hover:border-primary/30"
                      required 
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <div className="relative group">
                    <Textarea 
                      placeholder="Your Message" 
                      className="glass-button border-white/20 min-h-32 focus:border-primary/50 focus:shadow-glow transition-all duration-300 group-hover:border-primary/30"
                      required 
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full glass-button py-3 bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-pulse-glow"
                  >
                    <span className="relative z-10">Send Message</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-glass border-t border-white/20 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Arunchand Mallarapu.
          </p>
          {/*<div className="flex justify-center space-x-4 mt-4">
            <Button variant="ghost" size="sm" className="glass-button">
              <Github className="w-4 h-4" /> 
            </Button>
            <Button variant="ghost" size="sm" className="glass-button">
              <Users className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="glass-button">
              <Mail className="w-4 h-4" />
            </Button> 
          </div>   */}
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 glass-button p-3 rounded-full shadow-glow hover-lift"
      >
        <Plus className="w-5 h-5 rotate-45" />
      </button>
    </div>
  );
};

export default Index;